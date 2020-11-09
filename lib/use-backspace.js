import { useEffect } from 'haunted';
import { array } from './utils';

const useBackspace = ({
	focused,
	text,
	value,
	onChange
}) => {
	const active = focused && !text;
	useEffect(() => {
		const values = array(value);
		if (!active || values.length < 1) {
			return;
		}
		const handler = e => {
			if (e.defaultPrevented || e.key !== 'Backspace') {
				return;
			}
			onChange(values.slice(0, -1));
		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);

	}, [active, value, onChange]);
};

export { useBackspace };
