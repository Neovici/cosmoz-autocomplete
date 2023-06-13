import { useCallback, useMemo, useEffect } from 'haunted';
import { without, array } from '@neovici/cosmoz-utils/array';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useFocus } from '@neovici/cosmoz-dropdown/use-focus';
import { useKeys } from './use-keys';
import { search, notify, useNotify, EMPTY$ } from './util';

type Source<I> = (opts: {
	query: string;
	active?: boolean;
}) => PromiseLike<I[]>;

interface Base<I> {
	value: I | I[];
	limit?: number;

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
	text: string;
	source: I[] | Source<I>;
	textProperty?: string;
	textual?: (prop?: string) => (i: I) => string;
	valueProperty?: string;
	external?: boolean;
	hideEmpty?: boolean;
	disabled?: boolean;
	onFocus?: (focused?: boolean) => void;
}

export const useAutocomplete = <I>({
	value: _value,
	text,
	onChange: _onChange,
	onText: _onText,
	onSelect,
	limit,
	source,
	textProperty,
	textual: _textual,
	valueProperty,
	external,
	hideEmpty,
	keepOpened,
	keepQuery,
	...thru
}: Props<I>) => {
	const textual = useMemo(
			() => (_textual ?? strProp)(textProperty),
			[_textual, textProperty]
		),
		{ active, focused, onFocus, setClosed } = useFocus(thru),
		empty = !text,
		query = useMemo(() => text?.trim().toLowerCase(), [text]),
		host = useHost(),
		onText = useNotify(host, _onText, 'text'),
		onChange = useCallback(
			(val: I[]) => {
				_onChange?.(val, () => setClosed(true));
				notify(host, 'value', val);
			},
			[_onChange]
		),
		source$ = useMemo(
			() =>
				Promise.resolve(
					typeof source === 'function' ? source({ query, active }) : source
				),
			[source, active, query]
		),
		value = useMemo(() => array(_value), [_value]),
		values$ = useMemo(
			() =>
				source$.then((source) => [
					...value,
					...without(value, prop(valueProperty))(source),
				]),
			[source$, value, valueProperty]
		);

	useKeys({
		focused,
		empty,
		limit,
		value,
		hideEmpty,
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
		keepQuery,
		keepOpened,
		setClosed,
		onSelect,
	});

	return {
		active,
		query,
		textual,
		value,
		values$,
		items$: useMemo(() => {
			if (!active || (hideEmpty && empty)) {
				return EMPTY$;
			}
			return query && !external
				? values$.then((values) => search(values, query, textual))
				: values$;
		}, [values$, active, query, textual, external, hideEmpty, empty]),
		onClick: useCallback(() => setClosed(false), []),
		onFocus,
		onText: useCallback(
			(e: InputEvent) => {
				onText((e.target as HTMLInputElement).value);
				setClosed(false);
			},
			[onText, text, setClosed]
		),
		onSelect: useCallback(
			(newVal: I) => {
				meta.onSelect?.(newVal, meta);
				const {
					onChange,
					onText,
					limit,
					value: val,
					keepQuery,
					keepOpened,
					setClosed,
				} = meta;
				if (!keepQuery) onText('');
				if (!keepOpened) setClosed(true);
				const value = array(val);
				onChange(
					(value.includes(newVal)
						? (without(newVal)(value) as I[])
						: [...value, newVal]
					).slice(-limit!)
				);
			},
			[meta]
		),
		onDeselect: useCallback(
			(val: I | I[]) => meta.onChange(without(val)(meta.value) as I[]),
			[meta]
		),
	};
};

export type RProps<I> = ReturnType<typeof useAutocomplete<I>>;
