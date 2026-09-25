import { useCallback, useMemo } from '@pionjs/pion';
import { t } from 'i18next';
import defaultItemRenderer, {
	ItemRenderer,
	ItemRendererOpts,
	renderOption,
} from '../listbox/item-renderer';

const CREATE = Symbol('create');

interface CreateItem {
	[CREATE]: string;
}

const isCreate = (item: unknown): item is CreateItem =>
	typeof item === 'object' && item !== null && CREATE in item;

export interface CreateProps<I> {
	/**
	 * Offers a "Create" option when the query matches no item exactly. Return
	 * the new item (or a promise of it) to select it.
	 */
	onCreate?: (query: string) => I | void | PromiseLike<I | void>;
	/** Label of the create option. Defaults to `Create "<query>"`. */
	createLabel?: (query: string) => unknown;
}

interface Props<I> extends CreateProps<I> {
	items: I[];
	query?: string;
	textual: (item: I) => string;
	onSelect: (item: I) => void;
	itemRenderer?: ItemRenderer<I>;
}

export const useCreatable = <I>({
	items,
	query,
	textual,
	onSelect,
	itemRenderer = defaultItemRenderer as ItemRenderer<I>,
	onCreate,
	createLabel,
}: Props<I>) => {
	const createItem = useMemo(() => {
		if (!onCreate || !query) return;
		const q = query.toLowerCase();
		if (items.some((item) => textual(item).trim().toLowerCase() === q)) return;
		return { [CREATE]: query } as CreateItem;
	}, [onCreate, query, items, textual]);

	return {
		items: useMemo(
			() => (createItem ? [...items, createItem as I] : items),
			[items, createItem],
		),
		onSelect: useCallback(
			(item: I) => {
				if (!isCreate(item)) return onSelect(item);
				Promise.resolve(onCreate?.(item[CREATE])).then((created) => {
					if (created != null) onSelect(created);
				});
			},
			[onSelect, onCreate],
		),
		itemRenderer: useCallback(
			(item: I, i: number, opts: ItemRendererOpts<I>) =>
				isCreate(item)
					? renderOption(item, i, opts, {
							content:
								createLabel?.(item[CREATE]) ??
								t('Create "{0}"', { 0: item[CREATE] }),
							part: 'option create',
						})
					: itemRenderer(item, i, opts),
			[itemRenderer, createLabel],
		),
	};
};
