import { array, without } from '@neovici/cosmoz-utils/array';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import {
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useState,
} from '@pionjs/pion';
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
	limit?: number | string;
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
	valueProperty?: string;
}

export interface Props<I> extends Base<I> {
	text?: string;
	source: I[] | Source<I>;
	textProperty?: string;
	textual?: (prop?: string) => (i: I) => string;
	valueProperty?: string;
	mode?: 'select';
	disabled?: boolean;
	preserveOrder?: boolean;
	defaultIndex?: number;
	externalSearch?: boolean;
	lazyOpen?: boolean;
	/** Milliseconds to wait after typing before calling a function `source`. */
	debounce?: number | string;
}

const useDebounced = <T>(value: T, delay: number) => {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		if (!delay) return;
		const id = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(id);
	}, [value, delay]);
	return delay ? debounced : value;
};

export const useAutocomplete = <I>({
	value: _value,
	text,
	mode,
	onChange: _onChange,
	onText: _onText,
	onSelect,
	limit: _limit,
	min: _min,
	source,
	textProperty,
	textual: _textual,
	valueProperty,
	keepOpened,
	keepQuery,
	preserveOrder,
	defaultIndex,
	externalSearch,
	disabled,
	lazyOpen,
	debounce,
}: Props<I>) => {
	const limit = _limit != null ? Number(_limit) : undefined,
		min = _min != null ? Number(_min) : undefined,
		isSelect = mode === 'select',
		textual = useMemo(
			() => (_textual ?? strProp)(textProperty),
			[_textual, textProperty],
		),
		host = useHost(),
		[opened, setOpened] = useProperty<boolean>('opened', false),
		empty = !text,
		query = useMemo(() => text?.trim(), [text]),
		sourceQuery = useDebounced(query, Number(debounce) || 0),
		onText = useNotify(host, _onText, 'text'),
		onChange = useCallback(
			(val: I[]) => {
				_onChange?.(val, () => setOpened(false));
				const detail = isSelect ? val[0] : val;

				notify(host, 'value', detail);
			},
			[_onChange],
		),
		[options, setOptions] = useState<I[]>([]),
		belowMinLength = Boolean(lazyOpen && !query),
		source$ = useMemo(
			() =>
				belowMinLength
					? Promise.resolve([] as I[])
					: Promise.resolve(
							typeof source === 'function'
								? source({ query: sourceQuery, active: opened })
								: source,
						).then(normalize),
			[source, opened, sourceQuery, belowMinLength],
		),
		value = useMemo(() => array(_value), [_value]);

	useEffect(() => {
		// A slower, older source response must not overwrite a newer one.
		let current = true;
		source$.then((options) => current && setOptions(options));
		return () => {
			current = false;
		};
	}, [source$]);

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
		valueProperty,
	});

	const [, , state] = usePromise(source$);

	return {
		limit,
		opened,
		setOpened,
		/** Chip keys: Backspace removes the last chip, typing replaces a single selection. */
		onChipKeys: (e: KeyboardEvent) => {
			if (disabled || !empty || e.ctrlKey || e.metaKey || e.altKey) return;
			const values = array(value);
			if (e.key === 'Backspace') {
				if (values.length > (min ?? 0)) {
					e.preventDefault();
					onChange(values.slice(0, -1));
				}
				return;
			}
			if (e.key.length === 1 && limit === 1 && values.length > 0) {
				onChange(values.slice(0, -1));
			}
		},
		query,
		textual,
		value,
		source$,
		loading: state === 'pending',
		items: useMemo(() => {
			if (!opened) return EMPTY;
			if (belowMinLength) return EMPTY;

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
			belowMinLength,
		]),
		onToggle: useCallback(
			(e: Event) => {
				if (disabled) return;
				setOpened((e as ToggleEvent).newState === 'open');
			},
			[disabled],
		),
		onText: useCallback(
			(e: InputEvent) => {
				if (disabled) return;
				const text = (e.target as HTMLInputElement).value;
				if (text && limit === 1 && value.length > 0) onChange([]);
				onText(text);
				setOpened(true);
			},
			[disabled, onText, setOpened, limit, value, onChange],
		),
		onSelect: useCallback(
			(newVal: I) => {
				if (disabled) return;
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
					valueProperty,
				} = meta;
				if (!keepQuery) onText('');
				if (!keepOpened) setOpened(false);
				const value = array(val),
					predicate = prop(valueProperty),
					deselect = value.some((v) => predicate(v) === predicate(newVal));

				if (deselect && value.length === min) return;

				onChange(
					(deselect
						? (without(newVal, predicate)(value) as I[])
						: [...value, newVal]
					).slice(-limit!),
				);
			},
			[disabled, meta],
		),
		onDeselect: useCallback(
			(val: I | I[]) => {
				if (disabled) return;
				meta.onChange(
					without(val, prop(meta.valueProperty))(meta.value) as I[],
				);
			},
			[disabled, meta],
		),
		// whenever there is a query, override defaultIndex to 0, so the first result gets selected
		defaultIndex: query !== undefined && query?.length > 0 ? 0 : defaultIndex,
	};
};

export type RProps<I> = ReturnType<typeof useAutocomplete<I>>;
