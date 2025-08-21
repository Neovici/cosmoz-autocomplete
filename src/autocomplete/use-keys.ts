import { useEffect } from '@pionjs/pion';
import { array } from '@neovici/cosmoz-utils/array';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

export interface Props<I> {
	focused?: boolean;
	empty?: boolean;
	value: I | I[];
	limit?: number;
	onChange: (v: I[]) => void;
	onText: (s: string) => void;
}

export const useKeys = <I>({ focused, empty, ...rest }: Props<I>) => {
	const enabled = focused && empty && rest.limit !== 1,
		meta = useMeta(rest);
	useEffect(() => {
		if (!enabled) {
			return;
		}
		const handler = (e: KeyboardEvent) => {
			if (e.defaultPrevented) {
				return;
			}
			const { key } = e,
				values = array(meta.value),
				isOne = meta.limit == 1; //eslint-disable-line eqeqeq

			if (
				values.length > 0 &&
				(key === 'Backspace' || (isOne && key.length === 1))
			) {
				return meta.onChange(values.slice(0, -1));
			}
		};

		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [enabled, meta]);
};
