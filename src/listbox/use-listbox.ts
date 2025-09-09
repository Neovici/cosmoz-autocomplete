import { useMemo } from '@pionjs/pion';
import { byValue } from './util';
import { useItems } from './use-items';
import { useRenderItem, ItemRenderer } from './use-render-item';
import { useItemHeight } from './use-item-height';

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
	onSelect: (i: I) => void;
	defaultIndex?: number;
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
	defaultIndex,
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
		{ position, highlight, select } = useItems({
			items,
			onSelect,
			defaultIndex: isNaN(defaultIndex as number)
				? undefined
				: Number(defaultIndex),
		}),
		[itemHeight, setItemHeight] = useItemHeight(_itemHeight);

	return {
		position,
		items,
		height: Math.min(itemLimit, items.length) * itemHeight,
		highlight,
		select,
		itemHeight,
		setItemHeight,
		renderItem: useRenderItem({
			itemRenderer,
			items,
			position,
			highlight,
			select,
			textual,
			query,
			isSelected,
		}),
	};
};

export { useRenderItem };
