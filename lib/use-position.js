import { useEffect } from 'haunted';
import getPosition from 'position.js';
import { onScrolled } from './on-scrolled';

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
	usePosition = ({ anchor: anchorage, host, confinement, placement }) => {
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
	};

export { usePosition };
