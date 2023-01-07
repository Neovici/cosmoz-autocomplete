import { useCallback, useEffect, useState, useMemo } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { usePosition } from '@neovici/cosmoz-dropdown/src/use-position.js';
import { useKeyboard } from './use-keyboard';
import defaultItemRenderer from './item-renderer';
import { byValue } from './utils';

const useItems = ({ items, onSelect, defaultIndex = 0 }) => {
		const [index, setIndex] = useState(defaultIndex),
			{ length } = items;

		useEffect(() => {
			setIndex(defaultIndex);
		}, [items, defaultIndex]);

		useKeyboard({
			onUp: useCallback(
				() => setIndex((index) => (index > 0 ? index - 1 : length - 1)),
				[length]
			),
			onDown: useCallback(
				() => setIndex((index) => (index < length - 1 ? index + 1 : 0)),
				[length]
			),
			onEnter: useCallback(
				() => index > -1 && index < length && onSelect?.(items[index], index),
				[index, items, onSelect]
			),
		});

		return {
			index,
			highlight: setIndex,
			select: useCallback((item) => onSelect?.(item), [onSelect]),
		};
	},
	useRenderItem = ({ itemRenderer, ...meta }) => {
		const info = useMeta(meta);
		return useCallback(
			(item, i) => (itemRenderer || defaultItemRenderer)(item, i, info),
			[info, itemRenderer]
		);
	},
	useListbox = (host) => {
		const {
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
			} = host,
			isSelected = useMemo(
				() => byValue(value, valueProperty),
				[value, valueProperty]
			),
			items = useMemo(() => _items.slice(), [_items, isSelected]),
			{ index, highlight, select } = useItems({
				items,
				onSelect,
				defaultIndex: isNaN(defaultIndex) ? undefined : Number(defaultIndex),
			});

		usePosition({
			anchor,
			host,
			confinement,
			placement,
			limit: true,
		});

		return {
			index,
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
	},
	properties = [
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
		'styles',
	];

export { useListbox, useRenderItem, properties };
