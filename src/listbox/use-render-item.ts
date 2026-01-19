import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback } from '@pionjs/pion';
import {
	ItemRenderer,
	ItemRendererOpts,
	itemRenderer as mkItemRenderer,
} from './item-renderer';

export const useRenderItem = <I>({
	itemRenderer = mkItemRenderer<I>(),
	...meta
}: ItemRendererOpts<I> & { itemRenderer?: ItemRenderer<I> }) => {
	const info = useMeta<ItemRendererOpts<I>>(meta);
	return useCallback(
		(item: I, i: number) => itemRenderer(item, i, info),
		[info, itemRenderer],
	);
};

export type { ItemRenderer };
