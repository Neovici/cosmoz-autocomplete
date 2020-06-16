import {
	useCallback, useMemo, useState
} from 'haunted';
import {
	without, search, strProp
} from './utils';

const EMPTY = [],
	useAutocomplete = ({
		value,
		onChange,
		limit,
		source,
		onFocus,
		text,
		textProperty,
		onText,
		external,
		disabled
	}) => {
		const
			textual = useMemo(() => strProp(textProperty), [textProperty]),
			values = useMemo(() => without(value)(source), [source, value]),
			[focused, setFocused] = useState(false),
			query = useMemo(() => text?.trim().toLowerCase(), [text]);
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
					newText !== text && onText?.(newText);
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
					onText?.('');
					onChange?.([...without(newVal)(value), newVal].slice(-limit));
					const { activeElement: el } = document;
					if (!(el instanceof HTMLElement)) {
						return;
					}
					el.blur();
				},
				[onText, onChange, value]
			),
			onDeselect: useCallback(val => {
				onChange?.(without(val)(value));
			}, [
				onChange,
				value
			])
		};
	};

export { useAutocomplete };
