import { useActiveDescendant } from '@neovici/cosmoz-utils/hooks/use-active-descendant';
import { useListNavigation } from '@neovici/cosmoz-utils/hooks/use-list-navigation';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useLayoutEffect, useMemo, useState } from '@pionjs/pion';

interface Props<I> {
	items: I[];
	expanded: boolean;
	setOpened: (opened: boolean) => void;
	onSelect: (item: I) => void;
	onChipKeys: (e: KeyboardEvent) => void;
	defaultIndex?: number;
	itemLimit?: number;
	readonly?: boolean;
}

export const useCombobox = <I>({
	items,
	expanded,
	setOpened,
	onSelect,
	onChipKeys,
	defaultIndex,
	itemLimit = 5,
	readonly,
}: Props<I>) => {
	const host = useHost(),
		root = host.shadowRoot!,
		[, rerender] = useState(0),
		retries = useMemo(() => ({ count: 0 }), []),
		{ activeIndex, setActiveIndex, onKeyDown } = useListNavigation({
			count: items.length,
			defaultIndex: isNaN(defaultIndex as number) ? 0 : Number(defaultIndex),
			pageSize: itemLimit,
			// Home/End move the caret while the input is editable
			homeEnd: readonly,
		}),
		input = () =>
			root
				.querySelector('cosmoz-input')
				?.shadowRoot?.querySelector<HTMLInputElement>('#input');

	useLayoutEffect(() => {
		const el = input();
		// cosmoz-input renders after us on first connect
		if (!el) {
			if (retries.count++ > 10) return;
			const id = requestAnimationFrame(() => rerender((n) => n + 1));
			return () => cancelAnimationFrame(id);
		}
		el.setAttribute('role', 'combobox');
		el.setAttribute('aria-autocomplete', 'list');
		el.setAttribute('aria-expanded', String(expanded));
	});

	useActiveDescendant({
		control: input,
		listbox: () => root.querySelector('[role="listbox"]'),
		active: () =>
			root.querySelector(`[role="option"][data-index="${activeIndex}"]`),
		expanded,
	});

	return {
		activeIndex,
		onHighlight: setActiveIndex,
		// The virtualizer renders scrolled-in options after we did.
		onRangeChanged: () => rerender((n) => n + 1),
		onKeyDown: (e: KeyboardEvent) => {
			const { key, altKey } = e,
				plain = !(altKey || e.ctrlKey || e.metaKey || e.shiftKey),
				toggle = (opened: boolean) => {
					e.preventDefault();
					setOpened(opened);
				};

			if (!expanded) {
				const arrow = key === 'ArrowDown' || key === 'ArrowUp';
				if ((plain && arrow) || (altKey && key === 'ArrowDown')) {
					return toggle(true);
				}
				return onChipKeys(e);
			}
			if (key === 'Escape' || (altKey && key === 'ArrowUp')) {
				return toggle(false);
			}
			if (onKeyDown(e)) return;

			const item = items[activeIndex];
			if (plain && key === 'Enter' && item !== undefined) {
				e.preventDefault();
				return onSelect(item);
			}
			onChipKeys(e);
		},
	};
};
