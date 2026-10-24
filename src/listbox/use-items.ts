import { identity } from '@neovici/cosmoz-utils/function';
import { useCallback, useEffect, useState } from '@pionjs/pion';
import { useKeyboard } from './use-keyboard';

export interface UseItems<T> {
	items: T[];
	textual?: (item: T) => string;
	onSelect: (item: T, index?: number) => void;
	defaultIndex?: number;
}

export interface Position {
	index: number;
	scroll?: boolean;
}

export const useItems = <T>({
	items,
	textual = identity as () => string,
	onSelect,
	defaultIndex = 0,
}: UseItems<T>) => {
	const [position, setPosition] = useState<Position>({
			index: defaultIndex,
		}),
		{ index } = position,
		{ length } = items;
	// live-region text for arrow-key navigation; empty until the user moves
	const [announce, setAnnounce] = useState('');
	const say = useCallback(
		(index: number) => {
			const item = items[index];
			setAnnounce(item ? `${textual(item)}, ${index + 1} of ${length}` : '');
		},
		[items, textual, length],
	);

	useEffect(() => {
		// whenever the items list is empty, reset the position to defaultIndex
		setPosition({
			index:
				position.index < 0
					? defaultIndex
					: Math.min(position.index, items.length - 1),
			scroll: true,
		});
	}, [items, defaultIndex]);

	useKeyboard({
		onUp: useCallback(() => {
			const i = position.index > 0 ? position.index - 1 : length - 1;
			say(i);
			setPosition({ index: i, scroll: true });
		}, [position, length, say]),
		onDown: useCallback(() => {
			const i = position.index < length - 1 ? position.index + 1 : 0;
			say(i);
			setPosition({ index: i, scroll: true });
		}, [position, length, say]),
		onEnter: useCallback(
			() => index > -1 && index < length && onSelect?.(items[index], index),
			[index, items, onSelect],
		),
	});

	return {
		position,
		announce,
		highlight: useCallback((index: number) => setPosition({ index }), []),
		select: useCallback((item: T) => onSelect?.(item), [onSelect]),
	};
};
