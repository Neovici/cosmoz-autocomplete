import {
	useMemo, useCallback, useState, useLayoutEffect
} from 'haunted';
import {
	propOrRoot, search
} from './utils';

const EMPTY = [],
	useAutocomplete = ({
		source, textProperty, onSelect, value: eValue
	}) => {
		const [text, setText] = useState(''),
			[value, setValue] = useState(),
			[focused, setFocused] = useState(false),
			query = useMemo(() => text && text.trim().toLowerCase(), [text]),
			textProp = useCallback(o => propOrRoot(o, textProperty), [textProperty]);

		useLayoutEffect(() => {
			setText(textProp(eValue));
			setValue(eValue);
		}, [eValue, setValue, setText, textProp]);

		return {
			text,
			query,
			focused,
			value,

			clear: useCallback(() => {
				setValue(undefined);
				setText('');
				if (onSelect) {
					onSelect();
				}
			}, [setText, setValue, onSelect]),

			items: useMemo(() => {
				if (value || !focused) {
					return EMPTY;
				}
				if (!query) {
					return source;
				}
				return search(source, query, textProp);
			}, [focused, source, textProp, query, value]),
			onEdit: useCallback(() => setValue(undefined), [setValue]),
			onText: useCallback(
				e => {
					const newText = e.target.value;
					if (newText === text) {
						return;
					}
					setText(newText);
				},
				[setText, text]
			),
			onFocus: useCallback(e => setFocused(e.target.focused), [setFocused]),
			onSelect: useCallback(
				o => {
					setValue(o);
					setText(textProp(o));
					if (onSelect) {
						onSelect(o);
					}
				},
				[setValue, setText, onSelect, textProp]
			)
		};
	};

export { useAutocomplete };
