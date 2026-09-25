import { useMemo } from '@pionjs/pion';
import { useItemHeight } from './use-item-height';
import { ItemRenderer, useRenderItem } from './use-render-item';
import { byValue } from './util';

export const properties = [
	'query',
	'items',
	'onSelect',
	'textual',
	'anchor',
	'itemHeight',
	'itemLimit',
	'itemRenderer',
	'defaultIndex',
	'value',
	'valueProperty',
	'loading',
];

export interface Props<I> {
	value: I | I[];
	valueProperty?: string;
	items: I[];
	onSelect: (item: I, index?: number) => void;
	activeIndex: number;
	onHighlight: (index: number) => void;
	query?: string;
	textual: (i: I) => string;
	itemRenderer?: ItemRenderer<I>;
	itemHeight?: number | 'auto';
	itemLimit?: number;
}

export const useListbox = <I>({
	value,
	valueProperty,
	items: _items,
	onSelect,
	activeIndex,
	onHighlight,
	query,
	textual,
	itemRenderer,
	itemHeight: _itemHeight = 40,
	itemLimit = 5,
}: Props<I>) => {
	const isSelected = useMemo(
			() => byValue(value, valueProperty),
			[value, valueProperty],
		),
		// TODO: investigate if we can drop this
		items = useMemo(() => _items.slice(), [_items, isSelected]),
		position = useMemo(() => ({ index: activeIndex }), [activeIndex]),
		[itemHeight, setItemHeight] = useItemHeight(_itemHeight);

	return {
		position,
		items,
		height: Math.min(itemLimit, items.length) * itemHeight,
		itemHeight,
		setItemHeight,
		renderItem: useRenderItem({
			itemRenderer,
			items,
			position,
			highlight: onHighlight,
			select: onSelect,
			textual,
			query,
			isSelected,
		}),
	};
};

export { useRenderItem };
