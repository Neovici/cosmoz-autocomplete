import {
	useCallback, useEffect, useReducer
} from 'haunted';
import {
	action, reduce
} from '@neovici/cosmoz-utils/lib/reduce';
import { useKeyboard } from './use-keyboard';

const initial = {},
	init = action('INIT', resolve => length => resolve(length)),
	up = action('UP'),
	down = action('DOWN'),
	highlight = action('HIGHLIGHT', resolve => index => resolve(index)),
	range = action('RANGE', resolve => (first, last) => resolve([first, last])),
	stepUp = (index = -1, length) => index > 0 ? index - 1 : length - 1,
	stepDown = (index = -1, length) => index < length - 1 ? index + 1 : 0,
	outOfRange = (index, range) => {
		if (!range) {
			return;
		}
		const [first, last] = range;
		if (index >= first && index < last) {
			return;
		}
		return true;
	},
	reducer = reduce(initial, handle => [
		handle(init, (_, { payload: length }) => ({
			length
		})),
		handle(down, state => {
			const index = stepDown(state.index, state.length);
			return {
				...state,
				index,
				scrollToIndex: outOfRange(index, state.range) && { index }
			};
		}),
		handle(up, state => {
			const index = stepUp(state.index, state.length);
			return {
				...state,
				index,
				scrollToIndex: outOfRange(index, state.range) && {
					index,
					position: 'end'
				}
			};
		}),
		handle(highlight, (state, { payload: index }) => ({
			...state,
			index
		})),
		handle(range, (state, { payload: range }) => ({
			...state,
			range,
			scrollToIndex: undefined
		}))
	]);

export const useSuggestions = ({
	items, onSelect
}) => {
	const [state, dispatch] = useReducer(reducer, initial),
		{ index } = state;

	useEffect(() => {
		dispatch(init(items.length));
	}, [items, dispatch]);

	useKeyboard({
		onUp: useCallback(() => dispatch(up()), [dispatch]),
		onDown: useCallback(() => dispatch(down()), [dispatch]),
		onEnter: useCallback(() => onSelect && onSelect(items[index], index), [
			index,
			items,
			onSelect
		])
	});

	return {
		...state,
		highlight: useCallback(index => dispatch(highlight(index)), [dispatch]),
		select: useCallback(item => onSelect(item), [onSelect]),
		rangechange: useCallback(
			e => dispatch(range(e.firstVisible, e.lastVisible)),
			[dispatch]
		)
	};
};
