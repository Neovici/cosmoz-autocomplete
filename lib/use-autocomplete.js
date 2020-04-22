import {
	useMemo, useCallback, useState, useLayoutEffect
} from 'haunted';
import { propOrRoot } from './utils';

const EMPTY = [],
	useAutocomplete = ({
		source, textProperty, onChange, value: eValue
	}) => {
		const [text, setText] = useState(''),
			[value, setValue] = useState(),
			[focused, setFocused] = useState(false),
			query = useMemo(() => text && text.trim().toLowerCase(), [text]),
			textProp = useCallback(o => propOrRoot(o, textProperty), [textProperty]);

		useLayoutEffect(() => {
			setValue(value);
		}, [eValue, setValue]);

		return {
			text,
			query,
			focused,
			value,

			clear: useCallback(() => {
				setValue(undefined);
				setText('');
				if (onChange) {
					onChange();
				}
			}, [setText, setValue, onChange]),

			items: useMemo(() => {
				if (value || !focused) {
					return EMPTY;
				}
				if (!query) {
					return source;
				}
				return source.filter(o =>
					textProp(o)
						.toLowerCase()
						.includes(query)
				);
			}, [focused, source, textProp, query, value]),
			onEdit: useCallback(() => setValue(undefined), [setValue]),
			onText: useCallback(e => {
				const newText = e.target.value;
				if (newText === text) {
					return;
				}
				setText(newText);
			}, [setText, text]),
			onFocus: useCallback(e => setFocused(e.target.focused), [setFocused]),
			onSelect: useCallback(
				o => {
					setValue(o);
					setText(textProp(o));
					if (onChange) {
						onChange(o);
					}
				},
				[setValue, setText, onChange, textProp]
			)
		};
	};

export { useAutocomplete };