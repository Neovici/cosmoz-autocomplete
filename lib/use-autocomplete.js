import {
	useState, useMemo
} from 'haunted';

export const useAutocomplete = ({ options }) => {
	const [value, setValue] = useState(),
		[focused, setFocused] = useState(false),
		query = value && value.toLowerCase() || '',
		items = useMemo(
			() => options.filter(({ text }) => text.toLowerCase().includes(query)),
			[options, query]
		),
		hasQuery = !!query,
		clear = useMemo(() => hasQuery ? () => setValue(undefined) : undefined, [
			hasQuery
		]);

	return {
		value,
		setValue,
		clear,
		focused,
		setFocused,
		items
	};
};
