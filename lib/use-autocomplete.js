import {
	useCallback, useMemo, useState
} from 'haunted';
import {
	without, search, strProp
} from './utils';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { useBackspace } from './use-backspace';
const
	EMPTY = [],
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
		disabled
	}) => {
		const
			textual = useMemo(() => strProp(textProperty), [textProperty]),
			values = useMemo(() => without(value)(source), [source, value]),
			[focused, setFocused] = useState(false),
			query = useMemo(() => text?.trim().toLowerCase(), [text]),
			host = useHost(),
			onText = useNotify(host, _onText, 'text'),
			onChange = useNotify(host, _onChange, 'value');

		useBackspace({
			active: focused && !text && !disabled,
			value,
			onChange
		});

		return {
			query,
			textual,
			focused,
			items: useMemo(() => {
				if (disabled || !focused) {
					return EMPTY;
				}
				return query && !external ? search(values, query, textual) : values;
			}, [focused, values, query, textual, external, disabled]),
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
