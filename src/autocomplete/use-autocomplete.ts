import { useCallback, useMemo, useEffect, useState } from '@pionjs/pion';
import { without, array } from '@neovici/cosmoz-utils/array';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useFocus } from '@neovici/cosmoz-dropdown/use-focus';
import { useKeys } from './use-keys';
import { search, normalize, notify, useNotify, EMPTY } from './util';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';

type Source<I> = (opts: {
	query: string;
	active?: boolean;
}) => PromiseLike<I[]>;

interface Base<I> {
	value: I | I[];
	limit?: number;
	min?: number;

	keepOpened?: boolean;
	keepQuery?: boolean;

	onText: (text: string) => void;
	onChange: (value: I[], done?: () => void) => void;
	// eslint-disable-next-line no-use-before-define
	onSelect: (value: I, meta: Meta<I>) => void;
}

interface Meta<I> extends Omit<Base<I>, 'value'> {
	setClosed: (closed: boolean) => void;
	value: I[];
}

export interface Props<I> extends Base<I> {
	text?: string;
	source: I[] | Source<I>;
	textProperty?: string;
	textual?: (prop?: string) => (i: I) => string;
	valueProperty?: string;
	disabled?: boolean;
	onFocus?: (focused?: boolean) => void;
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
	...thru
}: Props<I>) => {
	const textual = useMemo(
			() => (_textual ?? strProp)(textProperty),
			[_textual, textProperty],
		),
		{ active, focused, onFocus, setClosed } = useFocus(thru),
		empty = !text,
		query = useMemo(() => text?.trim() ?? '', [text]),
		host = useHost(),
		onText = useNotify(host, _onText, 'text'),
		onChange = useCallback(
			(val: I[]) => {
				_onChange?.(val, () => setClosed(true));
				notify(host, 'value', val);
			},
			[_onChange],
		),
		[options, setOptions] = useState<I[]>([]),
		source$ = useMemo(
			() =>
				Promise.resolve(
					typeof source === 'function' ? source({ query, active }) : source,
				).then(normalize),
			[source, active, query],
		),
		value = useMemo(() => array(_value), [_value]);

	useEffect(() => source$.then(setOptions), [source$]);

	useKeys({
		focused,
		empty,
		limit,
		value,
		onChange,
		onText,
	});

	useEffect(() => {
		if (!focused) onText('');
	}, [focused]);

	const meta = useMeta<Meta<I>>({
		onText,
		onChange,
		value,
		limit,
		min,
		keepQuery,
		keepOpened,
		setClosed,
		onSelect,
	});

	const [, , state] = usePromise(source$);

	return {
		active,
		query,
		textual,
		value,
		source$,
		loading: state === 'pending',
		items: useMemo(() => {
			if (!active) return EMPTY;

			const items = preserveOrder
				? options
				: [...value, ...without(value, prop(valueProperty))(options)];

			return externalSearch ? items : search(items, query, textual);
		}, [
			options,
			active,
			query,
			textual,
			empty,
			value,
			preserveOrder,
			valueProperty,
			externalSearch,
		]),
		onClick: useCallback(() => setClosed(false), []),
		onFocus,
		onText: useCallback(
			(e: InputEvent) => {
				onText((e.target as HTMLInputElement).value);
				setClosed(false);
			},
			[onText, text, setClosed],
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
					setClosed,
				} = meta;
				if (!keepQuery) onText('');
				if (!keepOpened) setClosed(true);
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
		defaultIndex: query?.length > 0 ? 0 : defaultIndex,
	};
};

export type RProps<I> = ReturnType<typeof useAutocomplete<I>>;
