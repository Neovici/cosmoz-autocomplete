import { useEffect, useState, useCallback } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

export const useFocus = ({ disabled, onFocus }) => {
	const [{ focused, closed }, setState] = useState({ focused: false, closed: false }),
		active = focused && !disabled,
		meta = useMeta({ closed, onFocus }),
		setClosed = useCallback(closed => setState(p => ({ ...p, closed })), []),
		onReopen = useCallback(() => meta.closed && setClosed(false), [meta, setClosed]);

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
		onReopen,
		onFocus: useCallback(e => {
			const focused = e.currentTarget.matches(':focus-within')
				|| e.type === 'focusout' && e.relatedTarget?.closest('[data-dropdown]');
			setState({ focused });
			meta.onFocus?.(focused);
		}, [meta])
	};
};
