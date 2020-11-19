import {
	useCallback, useEffect, useMemo, useState
} from 'haunted';
import getPosition from 'position.js';
import { useKeyboard } from './use-keyboard';
import { onScrolled } from './on-scrolled';
import defaultItemRenderer from './item-renderer';

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
		onSelect
	}) => {
		const [index, setIndex] = useState(0),
			{ length } = items;

		useEffect(() => {
			setIndex(0);
		}, [items]);

		useKeyboard({
			onUp: useCallback(() => setIndex(index => index > 0 ? index - 1 : length - 1), [length]),
			onDown: useCallback(() => setIndex(index => index < length - 1 ? index + 1 : 0), [length]),
			onEnter: useCallback(() => onSelect?.(items[index], index), [
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

	useRenderItem = ({
		itemRenderer = defaultItemRenderer,
		...meta
	}) => {
		const ref = useMemo(() => ({}), []),
			info = useMemo(() => Object.assign(ref, meta), [ref, ...Object.values(meta)]);

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

	useSuggestions = host => {
		const {
				items,
				onSelect,
				query,
				textual,
				itemRenderer,
				itemHeight = 36,
				limit = 5,
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
				onSelect
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
			height: Math.min(limit, items.length) * itemHeight,
			highlight,
			select,
			itemHeight,
			renderItem: useRenderItem({
				itemRenderer,
				highlight,
				select,
				textual,
				query
			})
		};

	};

export {
	useSuggestions,
	useRenderItem
};
