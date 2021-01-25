import { useEffect } from 'haunted';
import { array } from './utils';

const useBackspace = ({
	active,
	value,
	onChange,
	limit
}) => {
	useEffect(() => {
		const values = array(value);
		if (!active || values.length < 1) {
			return;
		}
		const handler = e => {
			const { key } = e;
			if (e.defaultPrevented || !(key === 'Backspace' || limit === 1 && key.length === 1)) {
				return;
			}
			onChange(values.slice(0, -1));

		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);

	}, [active, value, onChange, limit]);
};

export { useBackspace };

