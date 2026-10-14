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
	// A new callback per highlight makes the virtualizer re-render the options.
	return useCallback(
		(item: I, i: number) => itemRenderer(item, i, info),
		[info, itemRenderer, meta.position],
	);
};

export type { ItemRenderer };
