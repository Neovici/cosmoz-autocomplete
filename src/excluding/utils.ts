import { WrappedItem } from './types';

export const wrap = <I>(item: I): WrappedItem<I> => ({ item, excluded: false });
export const unwrap = <I>(item: WrappedItem<I>): I => item.item;
