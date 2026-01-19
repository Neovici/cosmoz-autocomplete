import { invoke } from '@neovici/cosmoz-utils/function';
import { StateUpdater, useCallback, useProperty } from '@pionjs/pion';
import '../autocomplete';
import { WrappedItem } from './types';
import { unwrap, wrap } from './utils';

export const useExcludingSelection = <I>(property: string) => {
	const [value, setValue] = useProperty<WrappedItem<I>[]>(property);

	const setExcludingValue: StateUpdater<I[] | undefined> = useCallback(
		(next) =>
			setValue((prev) => {
				const _next = invoke(next, prev?.map(unwrap));
				if (!_next) return undefined;
				if (!prev) return _next.map(wrap);

				const results = prev.reduce((nextState, item) => {
					if (_next.includes(item.item)) return [...nextState, item];
					else if (item.excluded) return nextState;
					return [...nextState, { ...item, excluded: true }];
				}, [] as WrappedItem<I>[]);

				const newItems = _next
					.filter((i) => !prev.some((p) => p.item === i))
					.map(wrap);

				return [...results, ...newItems];
			}),
		[],
	);

	return { value, setExcludingValue, setValue } as const;
};
