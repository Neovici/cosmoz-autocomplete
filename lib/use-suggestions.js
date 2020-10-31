import {
	useCallback, useEffect, useMemo, useState
} from 'haunted';
import getPosition from 'position.js';
import { useKeyboard } from './use-keyboard';
import { onScrolled } from './on-scrolled';
import defaultItemRenderer from './item-renderer';

const position = (host, anchor) => {
		const anchorBounds = anchor.getBoundingClientRect(),
			hostBounds = host.getBoundingClientRect(),
			{ popupOffset: offset } = getPosition(hostBounds, anchorBounds, ['bottom-left', 'bottom-right', 'bottom', 'top-left', 'top-right', 'top'], {
				fixed: true,
				adjustXY: 'both'
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
		const [index, setIndex] = useState(undefined),
			{ length } = items;

		useEffect(() => {
			setIndex(undefined);
		}, [items]);

		useKeyboard({
			onUp: useCallback(() => setIndex((index = -1) => index > 0 ? index - 1 : length - 1), [length]),
			onDown: useCallback(() => setIndex((index = -1) => index < length - 1 ? index + 1 : 0), [length]),
			onEnter: useCallback(() => index != null && onSelect?.(items[index], index), [
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
		anchor, host
	}) => {
		useEffect(() => {
			let rid;
			const reposition = () => position(host, anchor),
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
		}, []);
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
				anchor
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
			host
		});

		return {
			index,
			items,
			height: Math.min(limit, items.length) * itemHeight,
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
