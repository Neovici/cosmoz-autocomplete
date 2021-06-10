import { useEffect, useState, useCallback } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

export const useFocus = ({ disabled, onFocus }) => {
	const [{ focused, closed }, setFocus] = useState({ focused: false, closed: false }),
		active = focused && !disabled,
		meta = useMeta({ closed });

	useEffect(() => {
		if (!active) {
			return;
		}
		const handler = e => {
			if (e.defaultPrevented) {
				return;
			}
			const { closed } = meta;
			if (e.key === 'Escape' && !closed) {
				e.preventDefault();
				setFocus(p => ({ ...p, closed: true }));
			} else if (['ArrowUp', 'Up'].includes(e.key) && closed) {
				e.preventDefault();
				setFocus(p => ({ ...p, closed: false }));
			}
		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [active]);

	return {
		active: active && !closed,
		setClosed: useCallback(closed => setFocus(p => ({ ...p, closed })), []),
		onFocus: useCallback(e => {
			const focused = e.target.focused;
			setFocus({ focused, closed: false });
			onFocus?.(focused);
		}, [onFocus])
	};
};
