import {
	useMemo, useCallback, useState, useEffect
} from 'haunted';
import { propOrRoot } from './utils';

export const useAutocomplete = ({
	source, textProperty, onChange, value
}) => {
	const [text, setText] = useState(),
		[focused, setFocused] = useState(false),
		textProp = useCallback(o => propOrRoot(o, textProperty), [textProperty]);

	useEffect(() => {
		setText(textProp(value));
	}, [value, textProp, setText]);

	return {
		text,
		focused,

		clear: useCallback(() => setText(undefined), [setText]),

		items: useMemo(() => {
			if (!focused) {
				return [];
			}
			const query = text.trim().toLowerCase();
			if (!query) {
				return source;
			}
			return source.filter(o =>
				textProp(o)
					.toLowerCase()
					.includes(query)
			);
		}, [focused, source, textProp, text]),

		onEdit: useCallback(e => setText(e.target.value), [setText]),
		onFocus: useCallback(e => setFocused(e.target.focused), [setFocused]),
		onSelect: useCallback(
			o => {
				setText(textProp(o));
				if (onChange) {
					onChange(o);
				}
			},
			[textProp, onChange]
		)
	};
};
