import { useState } from '@pionjs/pion';

export const useItemHeight = (initialItemHeight: number | 'auto') => {
	const auto = initialItemHeight === 'auto',
		[itemHeight, setItemHeight] = useState(auto ? 40 : initialItemHeight);

	return [
		itemHeight,
		(v: number) => (auto ? setItemHeight(v) : undefined),
	] as const;
};
