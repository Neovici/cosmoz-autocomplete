import { useEffect } from 'haunted';
import { array } from './utils';

const useBackspace = ({
	active,
	value,
	limit,
	onChange,
	onText
}) => {
	useEffect(() => {
		const values = array(value);
		if (!active || values.length < 1) {
			return;
		}
		const handler = e => {
			const { key } = e;
			if (e.defaultPrevented) {
				return;
			}
			if (key === 'Backspace' || limit === 1 && key.length === 1) {
				onChange(values.slice(0, -1));
			}

		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);

	}, [active, value, onChange, limit, onText]);
};

export { useBackspace };

