import { useMemo } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { usePosition } from '@neovici/cosmoz-dropdown/src/use-position.js';

import { byValue } from './util';
import { useItems } from './use-items';
import { useRenderItem, ItemRenderer } from './use-render-item';

export const properties = [
	'query',
	'items',
	'onSelect',
	'textual',
	'anchor',
	'confinement',
	'placement',
	'itemHeight',
	'itemLimit',
	'itemRenderer',
	'defaultIndex',
	'value',
	'valueProperty',
];

export interface Props<I> {
	value: I | I[];
	valueProperty?: string;
	items: I[];
	onSelect: (i: I) => void;
	defaultIndex?: number;
	query: string;
	textual: (i: I) => string;
	itemRenderer?: ItemRenderer<I>;
	itemHeight: number;
	itemLimit: number;
	anchor?: HTMLElement;
	confinement?: unknown;
	placement?: unknown;
}

const useListbox = <I>({
	value,
	valueProperty,
	items: _items,
	onSelect,
	defaultIndex,
	query,
	textual,
	itemRenderer,
	itemHeight = 40,
	itemLimit = 5,
	anchor,
	confinement,
	placement,
}: Props<I>) => {
	const isSelected = useMemo(
			() => byValue(value, valueProperty),
			[value, valueProperty]
		),
		items = useMemo(() => _items.slice(), [_items, isSelected]),
		{ position, highlight, select } = useItems({
			items,
			onSelect,
			defaultIndex: isNaN(defaultIndex as number)
				? undefined
				: Number(defaultIndex),
		});

	const host = useHost();
	usePosition({
		anchor,
		host,
		confinement,
		placement,
		limit: true,
	});

	return {
		position,
		items,
		height: Math.min(itemLimit, items.length) * itemHeight,
		highlight,
		select,
		itemHeight,
		renderItem: useRenderItem({
			itemRenderer,
			highlight,
			select,
			textual,
			query,
			isSelected,
		}),
	};
};

export { useListbox, useRenderItem };
