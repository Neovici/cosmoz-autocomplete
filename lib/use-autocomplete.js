import {
	useCallback, useMemo, useState
} from 'haunted';
import {
	without, search, strProp
} from './utils';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { useKeys } from './use-keys';
const
	EMPTY = [],
	EMPTY$ = Promise.resolve(EMPTY),
	notify = (host, name, detail) => host.dispatchEvent(new CustomEvent(name, { detail })),
	useNotify = (host, fn, name) => useCallback(val => {
		fn?.(val);
		notify(host, name, val);
	}, [fn, host]),
	useAutocomplete = ({
		value,
		text,
		onChange: _onChange,
		onText: _onText,
		limit,
		source,
		onFocus,
		textProperty,
		external,
		disabled,
		hideEmpty
	}) => {
		const
			textual = useMemo(() => strProp(textProperty), [textProperty]),
			[focused, setFocused] = useState(false),
			active = focused && !disabled,
			empty = !text,
			query = useMemo(() => text?.trim().toLowerCase(), [text]),
			host = useHost(),
			onText = useNotify(host, _onText, 'text'),
			onChange = useNotify(host, _onChange, 'value'),
			source$ = useMemo(() => Promise.resolve(typeof source === 'function'
				? source({
					query,
					active
				})
				: source
			), [source, active, query]),
			values$ = useMemo(() => source$.then(without(value)), [source$, value]);

		useKeys({
			active,
			empty,
			limit,
			value,
			hideEmpty,
			onChange,
			onText
		});

		return {
			query,
			textual,
			focused,
			values$,
			items$: useMemo(() => {
				if (!active || hideEmpty && empty) {
					return EMPTY$;
				}
				return query && !external
					? values$.then(values => search(values, query, textual))
					: values$;
			}, [values$, active, query, textual, external, hideEmpty, empty]),
			onText: useCallback(
				e => {
					const newText = e.target.value;
					newText !== text && onText(newText);
				},
				[onText, text]
			),
			onFocus: useCallback(e => {
				const { focused } = e.target;
				setFocused(focused);
				onFocus?.(focused);
			}, [setFocused, onFocus]),
			onSelect: useCallback(
				newVal => {
					onText('');
					onChange([...without(newVal)(value), newVal].slice(-limit));
				},
				[onText, onChange, value, limit]
			),
			onDeselect: useCallback(val => {
				onChange(without(val)(value));
			}, [
				onChange,
				value
			])
		};
	};

export { useAutocomplete };
