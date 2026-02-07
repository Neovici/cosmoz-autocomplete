import { useCallback } from '@pionjs/pion';

// Re-export pure functions (no Pion dependency)
export { EMPTY, normalize, notify, raf, search } from './pure';

/**
 * Hook to create a notifying callback.
 */
export const useNotify = <V>(
	host: EventTarget,
	fn: undefined | ((v: V) => void),
	name: string,
) =>
	useCallback(
		(val: V) => {
			fn?.(val);
			host.dispatchEvent(new CustomEvent(name, { detail: val }));
		},
		[fn],
	);
