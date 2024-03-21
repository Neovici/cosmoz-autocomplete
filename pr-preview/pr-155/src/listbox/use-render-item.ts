import { useCallback } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import {
	itemRenderer as mkItemRenderer,
	ItemRenderer,
	Opts,
} from './item-renderer';

export const useRenderItem = <I>({
	itemRenderer = mkItemRenderer<I>(),
	...meta
}: Opts<I> & { itemRenderer?: ItemRenderer<I> }) => {
	const info = useMeta<Opts<I>>(meta);
	return useCallback(
		(item: I, i: number) => itemRenderer(item, i, info),
		[info, itemRenderer]
	);
};

export type { ItemRenderer };
