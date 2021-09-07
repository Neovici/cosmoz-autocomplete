import { useEffect, useState, useCallback } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

export const useFocus = ({ disabled, onFocus }) => {
	const [{ focused, closed } = {}, setState] = useState(),
		active = focused && !disabled,
		meta = useMeta({ closed, onFocus }),
		setClosed = useCallback(closed => setState(p => ({ ...p, closed })), []),
		onToggle = useCallback(e => {
			const target = e.currentTarget,
				focusing = target._focusing;
			target._focusing = false;
			if (focusing) {
				return;
			}
			setState(p => ({ ...p, closed: !p.closed }));
		}, []);

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
				setClosed(true);
			} else if (['ArrowUp', 'Up'].includes(e.key) && closed) {
				e.preventDefault();
				setClosed(false);
			}
		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [active]);

	return {
		active: active && !closed,
		setClosed,
		onToggle,
		onFocus: useCallback(e => {
			const target = e.currentTarget,
				focused = target.matches(':focus-within')
				|| e.type === 'focusout' && e.relatedTarget?.closest('[data-dropdown]');
			target._focusing = focused;
			setState({ focused });
			meta.onFocus?.(focused);
		}, [meta])
	};
};
