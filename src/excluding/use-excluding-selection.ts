import { useCallback, useProperty } from '@pionjs/pion';
import '../autocomplete';
import { WrappedItem } from './types';
import { applyExcluding } from './utils';

export const useExcludingSelection = <I>(property: string) => {
	const [value, setValue] = useProperty<WrappedItem<I>[]>(property);

	const setExcludingValue = useCallback(
		(next: I[]) => setValue((prev) => applyExcluding(prev, next)),
		[],
	);

	return { value, setExcludingValue, setValue } as const;
};
