import { useEffect } from 'haunted';
import { array } from './utils';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

const useKeys = ({
	active,
	empty,
	...info
}) => {
	const enabled = active && empty,
		meta = useMeta(info);
	useEffect(() => {
		if (!enabled) {
			return;
		}
		const handler = e => {
			if (e.defaultPrevented) {
				return;
			}
			const { key } = e,
				values = array(meta.value),
				isOne = meta.limit == 1; //eslint-disable-line eqeqeq

			if (values.length > 0 && (key === 'Backspace' || isOne && key.length === 1)) {
				return meta.onChange(values.slice(0, -1));
			} else if (meta.hideEmpty && values.length < 1 && ['Up', 'ArrowUp', 'Down', 'ArrowDown'].includes(key)) {
				meta.onText(' ');
				e.preventDefault();
			}

		};

		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);

	}, [enabled, meta]);
};

export { useKeys };

