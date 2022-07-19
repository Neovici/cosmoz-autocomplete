import { useEffect } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

export const useKeyboard = handlers => {
	const listeners = useMeta(handlers);

	useEffect(() => {
		const handler = e => {
			if (e.ctrlKey && e.altKey || e.defaultPrevented) {
				return;
			}
			switch (e.key) {
			case 'Up':
			case 'ArrowUp':
				e.preventDefault();
				listeners.onUp();
				break;
			case 'Down':
			case 'ArrowDown':
				e.preventDefault();
				listeners.onDown();
				break;
			case 'Enter':
				e.preventDefault();
				listeners.onEnter();
				break;
			default:
				break;
			}
		};

		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [listeners]);
};
