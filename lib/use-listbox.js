import { useCallback, useEffect, useState } from 'haunted';
import getPosition from 'position.js';
import { useKeyboard } from './use-keyboard';
import { onScrolled } from './on-scrolled';
import defaultItemRenderer from './item-renderer';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

const defaultPlacement = ['bottom-left', 'bottom-right', 'bottom', 'top-left', 'top-right', 'top'],
	position = (host, anchor, placement = defaultPlacement, confinement) => {
		const anchorBounds = anchor.getBoundingClientRect(),
			hostBounds = host.getBoundingClientRect(),
			{ popupOffset: offset } = getPosition(hostBounds, anchorBounds, placement, {
				fixed: true,
				adjustXY: 'both',
				offsetParent: confinement
			}),
			{ style } = host;
		style.left = offset.left + 'px';
		style.top = offset.top + 'px';
		style.minWidth = Math.max(anchorBounds.width, hostBounds.width) + 'px';
	},

	useItems = ({
		items,
		onSelect,
		defaultIndex = 0
	}) => {
		const [index, setIndex] = useState(defaultIndex),
			{ length } = items;

		useEffect(() => {
			setIndex(defaultIndex);
		}, [items, defaultIndex]);

		useKeyboard({
			onUp: useCallback(() => setIndex(index => index > 0 ? index - 1 : length - 1), [length]),
			onDown: useCallback(() => setIndex(index => index < length - 1 ? index + 1 : 0), [length]),
			onEnter: useCallback(() => index > -1 && index < length && onSelect?.(items[index], index), [
				index,
				items,
				onSelect
			])
		});

		return {
			index,
			highlight: setIndex,
			select: useCallback(item => onSelect?.(item), [onSelect])
		};
	},

	useRenderItem = ({ itemRenderer = defaultItemRenderer, ...meta }) => {
		const info = useMeta(meta);
		return useCallback((item, i) => itemRenderer(item, i, info), [info, itemRenderer]);
	},

	usePosition = ({
		anchor: anchorage, host, confinement, placement
	}) => {
		useEffect(() => {
			const anchor = typeof anchorage === 'function' ? anchorage() : anchorage;
			if (anchor == null) {
				return;
			}
			let rid;
			const reposition = () => position(host, anchor, placement, confinement),
				ro = new ResizeObserver(reposition);

			ro.observe(host);
			ro.observe(anchor);

			const onReposition = () => {
					cancelAnimationFrame(rid);
					rid = requestAnimationFrame(reposition);
				},
				offScroll = onScrolled(anchor, onReposition);
			window.addEventListener('resize', onReposition, true);

			return () => {
				ro.unobserve(host);
				ro.unobserve(anchor);
				offScroll();
				window.removeEventListener('resize', onReposition, true);
				cancelAnimationFrame(rid);
			};
		}, [anchorage, confinement, placement]);
	},

	useListbox = host => {
		const {
				value,
				valueProperty,
				items,
				onSelect,
				defaultIndex,
				query,
				textual,
				itemRenderer,
				itemHeight = 36,
				itemLimit = 5,
				anchor,
				confinement,
				placement
			} = host,
			{
				index,
				highlight,
				select
			} = useItems({
				items,
				onSelect,
				defaultIndex: isNaN(defaultIndex) ? undefined : Number(defaultIndex)
			});

		usePosition({
			anchor,
			host,
			confinement,
			placement
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
				value,
				valueProperty
			})
		};
	},
	properties = ['query', 'items', 'onSelect', 'textual', 'anchor', 'confinement', 'placement', 'itemHeight', 'itemLimit', 'defaultIndex', 'value'];

export {
	useListbox,
	useRenderItem,
	properties
};
