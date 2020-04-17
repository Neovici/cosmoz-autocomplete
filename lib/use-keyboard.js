import { useEffect } from 'haunted';

export const useKeyboard = ({
	onUp, onDown, onEnter
}) => {
	useEffect(() => {
		const handler = e => {
			if (e.ctrlKey && e.altKey || e.defaultPrevented) {
				return;
			}
			switch (e.key) {
			case 'Up':
			case 'ArrowUp':
				e.preventDefault();
				onUp();
				break;
			case 'Down':
			case 'ArrowDown':
				e.preventDefault();
				onDown();
				break;
			case 'Enter':
				e.preventDefault();
				onEnter();
				break;
			default:
				break;
			}
		};

		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [onUp, onDown, onEnter]);
};
