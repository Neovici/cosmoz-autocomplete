import { array, without } from '@neovici/cosmoz-utils/array';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import {
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
import { AUTOCOMPLETE_DESELECT_LAST } from './autocomplete-keybindings';
import { EMPTY, normalize, notify, search } from './util';

const useNotify = <V>(
	host: EventTarget,
	fn: undefined | ((v: V) => void),
	name: string,
) =>
	useCallback(
		(val: V) => {
			fn?.(val);
			host.dispatchEvent(new CustomEvent(name, { detail: val }));
		},
		[fn],
	);

export type Source<I> = (opts: {
	query?: string;
	active?: boolean;
}) => PromiseLike<I[]> | undefined;

interface Base<I> {
	value?: I | I[];
	limit?: number;
	min?: number;

	keepOpened?: boolean;
	keepQuery?: boolean;

	onText: (text: string) => void;
	onChange: (value: I[], done?: () => void) => void;

	onSelect: (value: I, meta: Meta<I>) => void;
}

interface Meta<I> extends Omit<Base<I>, 'value'> {
	setOpened: (opened: boolean) => void;
	value: I[];
}

export interface Props<I> extends Base<I> {
	text?: string;
	source: I[] | Source<I>;
	textProperty?: string;
	textual?: (prop?: string) => (i: I) => string;
	valueProperty?: string;
	disabled?: boolean;
	preserveOrder?: boolean;
	defaultIndex?: number;
	externalSearch?: boolean;
}

export const useAutocomplete = <I>({
	value: _value,
	text,
	onChange: _onChange,
	onText: _onText,
	onSelect,
	limit,
	min,
	source,
	textProperty,
	textual: _textual,
	valueProperty,
	keepOpened,
	keepQuery,
	preserveOrder,
	defaultIndex,
	externalSearch,
}: Props<I>) => {
	const textual = useMemo(
			() => (_textual ?? strProp)(textProperty),
			[_textual, textProperty],
		),
		host = useHost(),
		[opened, setOpened] = useProperty<boolean>('opened', false),
		empty = !text,
		query = useMemo(() => text?.trim(), [text]),
		onText = useNotify(host, _onText, 'text'),
		onChange = useCallback(
			(val: I[]) => {
				_onChange?.(val, () => setOpened(false));
				notify(host, 'value', val);
			},
			[_onChange],
		),
		[options, setOptions] = useState<I[]>([]),
		source$ = useMemo(
			() =>
				Promise.resolve(
					typeof source === 'function'
						? source({ query, active: opened })
						: source,
				).then(normalize),
			[source, opened, query],
		),
		value = useMemo(() => array(_value), [_value]);

	useEffect(() => source$.then(setOptions), [source$]);

	// Backspace to deselect last chip (when input is empty and multi-select)
	useActivity(
		{
			activity: AUTOCOMPLETE_DESELECT_LAST,
			callback: () => {
				const values = array(value);
				if (values.length > 0) {
					onChange(values.slice(0, -1));
				}
			},
			check: () => empty && limit !== 1 && host.matches(':focus-within'),
			element: () => host,
		},
		[],
	);

	// Clear query when popover closes
	useEffect(() => {
		if (!opened && !keepQuery) onText('');
	}, [opened, keepQuery]);

	// Reflect opened state to host attribute for CSS :host([opened]) selectors
	useEffect(() => {
		host.toggleAttribute('opened', !!opened);
	}, [opened]);

	const meta = useMeta<Meta<I>>({
		onText,
		onChange,
		value,
		limit,
		min,
		keepQuery,
		keepOpened,
		setOpened,
		onSelect,
	});

	const [, , state] = usePromise(source$);

	return {
		opened,
		query,
		textual,
		value,
		source$,
		loading: state === 'pending',
		items: useMemo(() => {
			if (!opened) return EMPTY;

			const items = preserveOrder
				? options
				: [...value, ...without(value, prop(valueProperty))(options)];

			return externalSearch ? items : search(items, query, textual);
		}, [
			options,
			opened,
			query,
			textual,
			empty,
			value,
			preserveOrder,
			valueProperty,
			externalSearch,
		]),
		onToggle: useCallback((e: Event) => {
			setOpened((e as ToggleEvent).newState === 'open');
		}, []),
		onText: useCallback(
			(e: InputEvent) => {
				onText((e.target as HTMLInputElement).value);
				setOpened(true);
			},
			[onText, text, setOpened],
		),
		onSelect: useCallback(
			(newVal: I) => {
				meta.onSelect?.(newVal, meta);
				const {
					onChange,
					onText,
					limit,
					min,
					value: val,
					keepQuery,
					keepOpened,
					setOpened,
				} = meta;
				if (!keepQuery) onText('');
				if (!keepOpened) setOpened(false);
				const value = array(val),
					deselect = value.includes(newVal);

				if (deselect && value.length === min) return;

				onChange(
					(deselect
						? (without(newVal)(value) as I[])
						: [...value, newVal]
					).slice(-limit!),
				);
			},
			[meta],
		),
		onDeselect: useCallback(
			(val: I | I[]) => meta.onChange(without(val)(meta.value) as I[]),
			[meta],
		),
		// whenever there is a query, override defaultIndex to 0, so the first result gets selected
		defaultIndex: query !== undefined && query?.length > 0 ? 0 : defaultIndex,
	};
};

export type RProps<I> = ReturnType<typeof useAutocomplete<I>>;
