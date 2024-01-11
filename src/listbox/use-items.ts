import { useCallback, useEffect, useState } from '@pionjs/pion';
import { useKeyboard } from './use-keyboard';

export interface UseItems<T> {
	items: T[];
	onSelect: (item: T, index?: number) => void;
	defaultIndex?: number;
}

export interface Position {
	index: number;
	scroll?: boolean;
}

export const useItems = <T>({
	items,
	onSelect,
	defaultIndex = 0,
}: UseItems<T>) => {
	const [position, setPosition] = useState<Position>({
			index: defaultIndex,
		}),
		{ index } = position,
		{ length } = items;

	useEffect(() => {
		setPosition({ index: defaultIndex, scroll: true });
	}, [items, defaultIndex]);

	useKeyboard({
		onUp: useCallback(
			() =>
				setPosition((p) => ({
					index: p!.index > 0 ? p!.index - 1 : length - 1,
					scroll: true,
				})),
			[length]
		),
		onDown: useCallback(
			() =>
				setPosition((p) => ({
					index: p!.index < length - 1 ? p!.index + 1 : 0,
					scroll: true,
				})),
			[length]
		),
		onEnter: useCallback(
			() => index > -1 && index < length && onSelect?.(items[index], index),
			[index, items, onSelect]
		),
	});

	return {
		position,
		highlight: useCallback((index: number) => setPosition({ index }), []),
		select: useCallback((item: T) => onSelect?.(item), [onSelect]),
	};
};
