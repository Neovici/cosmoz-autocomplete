import { WrappedItem } from './types';

export const wrap = <I>(item: I): WrappedItem<I> => ({ item, excluded: false });
export const unwrap = <I>(item: WrappedItem<I>): I => item.item;

export const applyExcluding = <I>(
	prev: WrappedItem<I>[] | undefined,
	next: I[] | undefined,
): WrappedItem<I>[] | undefined => {
	if (!next) return undefined;
	if (!prev) return next.map(wrap);

	const results = prev.reduce((nextState, item) => {
		if (next.includes(item.item)) return [...nextState, item];
		else if (item.excluded) return nextState;
		return [...nextState, { ...item, excluded: true }];
	}, [] as WrappedItem<I>[]);

	const newItems = next
		.filter((i) => !prev.some((p) => p.item === i))
		.map(wrap);

	return [...results, ...newItems];
};
