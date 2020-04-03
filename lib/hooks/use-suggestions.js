import {
	useEffect, useCallback, useReducer
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
	range = action(
		'RANGE',
		resolve => ({
			firstVisible: first, lastVisible: last
		}) =>
			resolve({
				first,
				last
			})
	),
	reducer = reduce(initial, handle => [
		handle(init, (_, { payload: length }) => ({
			length
		})),
		handle(down, ({
			index: i = -1, ...state
		}) => {
			const {
					length, range
				} = state,
				index = i < length - 1 ? i + 1 : 0;
			return {
				...state,
				index,
				scrollToIndex:
					index < range.first || index >= range.last ? { index } : undefined
			};
		}),
		handle(up, ({
			index: i = -1, ...state
		}) => {
			const {
					length, range
				} = state,
				index = i > 0 ? i - 1 : length - 1;

			return {
				...state,
				index,
				scrollToIndex:
					index <= range.first || index > range.last
						? {
							index,
							position: 'end'
						}
						: undefined
			};
		}),
		handle(highlight, (state, { payload: index }) => ({
			...state,
			index,
			scrollToIndex: undefined
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

	const onEnter = useCallback(() => onSelect && onSelect(items[index], index), [
		index,
		items,
		onSelect
	]);

	useKeyboard({
		onUp: useCallback(() => dispatch(up()), [dispatch]),
		onDown: useCallback(() => dispatch(down()), [dispatch]),
		onEnter
	});

	const rangechange = useCallback(e => dispatch(range(e)), [dispatch]),
		mouseenter = useCallback(
			e => dispatch(highlight(Number(e.target.dataset.index))),
			[dispatch]
		),
		click = useCallback(
			e => {
				const index = Number(e.target.dataset.index);
				if (onSelect) {
					onSelect(items[index], index);
				}
			},
			[onSelect, items]
		);

	return {
		...state,
		rangechange,
		mouseenter,
		click
	};
};
