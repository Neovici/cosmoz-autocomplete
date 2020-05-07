import {
	useCallback, useEffect, useReducer, useState
} from 'haunted';
import {
	action, reduce
} from '@neovici/cosmoz-utils/lib/reduce';
import { useKeyboard } from './use-keyboard';

const initial = {},
	init = action('INIT', length => ({ length })),
	up = action('UP'),
	down = action('DOWN'),
	highlight = action('HIGHLIGHT', index => ({ index })),
	range = action('RANGE', (first, last) => ({ range: [first, last]})),
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
	reducer = reduce(initial, [
		[init, (_, { length }) => ({
			length
		})],
		[down, state => {
			const index = stepDown(state.index, state.length);
			return {
				...state,
				index,
				scrollToIndex: outOfRange(index, state.range) && { index }
			};
		}],
		[up, state => {
			const index = stepUp(state.index, state.length);
			return {
				...state,
				index,
				scrollToIndex: outOfRange(index, state.range) && {
					index,
					position: 'end'
				}
			};
		}],
		[highlight, (state, { index }) => ({
			...state,
			index
		})],
		[range, (state, { range }) => ({
			...state,
			range,
			scrollToIndex: undefined
		})]
	]),
	useSuggestions = ({
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
			onEnter: useCallback(() => onSelect?.(items[index], index), [
				index,
				items,
				onSelect
			])
		});

		return {
			...state,
			highlight: useCallback(index => dispatch(highlight(index)), [dispatch]),
			select: useCallback(item => onSelect?.(item), [onSelect]),
			rangechange: useCallback(
				e => dispatch(range(e.firstVisible, e.lastVisible)),
				[dispatch]
			)
		};
	},
	useSizer = ({
		items, range, textual
	}) => {
		const [sizer, setSizer] = useState('');

		useEffect(() => {
			const newSizer = items.slice(...range || [0, 1]).reduce((p, item) => {
				const text = textual(item);
				return text.length > p.length ? text : p;
			}, sizer);
			if (newSizer !== sizer) {
				setSizer(newSizer);
			}
		}, [items, range?.[0], range?.[1], textual]);

		return sizer;
	};

export {
	useSuggestions, useSizer
};
