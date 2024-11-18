import { useMemo } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { usePosition, Placement } from '@neovici/cosmoz-dropdown/use-position';
import { byValue, loadingSymbol } from './util';
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
	'loading',
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
	itemHeight?: number;
	itemLimit?: number;
	anchor?: () => HTMLElement | null;
	confinement?: HTMLElement;
	placement?: Placement;
	loading?: boolean;
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
	itemHeight = 40,
	itemLimit = 5,
	loading,
	...thru
}: Props<I>) => {
	const isSelected = useMemo(
			() => byValue(value, valueProperty),
			[value, valueProperty],
		),
		// TODO: investigate if we can drop this
		__items = useMemo(() => _items.slice(), [_items, isSelected]),
		items: (I | typeof loadingSymbol)[] = useMemo(
			() => (loading ? [...__items, loadingSymbol] : __items),
			[loading, __items],
		),
		{ position, highlight, select } = useItems({
			items: __items,
			onSelect,
			defaultIndex: isNaN(defaultIndex as number)
				? undefined
				: Number(defaultIndex),
		});

	usePosition({
		host: useHost(),
		...thru,
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

export { useRenderItem };
