import { useEffect } from 'haunted';
import { array } from './utils';

const useBackspace = ({
	active,
	value,
	onChange,
	limit
}) => {
	useEffect(() => {
		const values = array(value),
			isOne = limit == 1; //eslint-disable-line eqeqeq
		if (!active || values.length < 1) {
			return;
		}
		const handler = e => {
			const { key } = e;
			if (e.defaultPrevented || !(key === 'Backspace' || isOne && key.length === 1)) {
				return;
			}
			onChange(values.slice(0, -1));

		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);

	}, [active, value, onChange, limit]);
};

export { useBackspace };

