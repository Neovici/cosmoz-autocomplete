import {
	useMemo, useCallback, useState
} from 'haunted';
import { search } from './utils';

const EMPTY = [],
	useInput = ({
		values, textual, onSelect
	}) => {
		const [text, setText] = useState(''),
			[focused, setFocused] = useState(false),
			query = useMemo(() => text && text.trim().toLowerCase(), [text]);

		return {
			text,
			query,
			focused,

			items: useMemo(() => {
				if (!focused) {
					return EMPTY;
				}
				return query ? search(values, query, textual) : values;
			}, [focused, values, query, textual]),

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
				value => {
					setText('');
					onSelect(value);
					document.activeElement.blur();
				},
				[setText, onSelect]
			)
		};
	};

export { useInput };
