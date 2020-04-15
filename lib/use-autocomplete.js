import {
	useMemo, useCallback, useReducer, useEffect
} from 'haunted';
import {
	action, reduce
} from '@neovici/cosmoz-utils/lib/reduce';

const initial = {
		text: '',
		focused: false
	},
	edit = action('EDIT', resolve => text => resolve(text)),
	focus = action('FOCUS', resolve => focused => resolve(focused)),
	reducer = reduce(initial, handle => [
		handle(edit, (state, { payload: text }) => ({
			...state,
			text
		})),
		handle(focus, (state, { payload: focused }) => ({
			...state,
			focused
		}))
	]);

export const useAutocomplete = ({
	source, textProperty, onChange, value
}) => {
	const [state, dispatch] = useReducer(reducer, initial),
		{
			text, focused
		} = state;

	useEffect(() => {
		dispatch(edit(textProperty ? value[textProperty] : value));
	}, [value, textProperty, dispatch]);

	return {
		...state,

		clear: useMemo(() => text ? () => dispatch(edit(undefined)) : undefined, [
			text
		]),
		onEdit: useCallback(e => dispatch(edit(e.target.value)), [dispatch]),
		onFocus: useCallback(e => dispatch(focus(e.target.focused)), [dispatch]),
		items: useMemo(() => {
			if (!focused) {
				return [];
			}
			const query = text.trim().toLowerCase();
			if (!query) {
				return source;
			}
			return source.filter(o =>
				(textProperty ? o[textProperty] : o).toLowerCase().includes(query)
			);
		}, [focused, source, textProperty, text]),
		onSelect: useCallback(
			o => {
				dispatch(edit(textProperty ? o[textProperty] : o));
				if (onChange) {
					onChange(o);
				}
			},
			[dispatch, textProperty, onChange]
		)
	};
};
