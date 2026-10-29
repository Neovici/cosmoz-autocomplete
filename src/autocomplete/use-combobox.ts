import { useActiveDescendant } from '@neovici/cosmoz-utils/hooks/use-active-descendant';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useListNavigation } from '@neovici/cosmoz-utils/hooks/use-list-navigation';
import {
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { byValue } from '../listbox/util';

interface Props<I> {
	items: I[];
	expanded: boolean;
	setOpened: (opened: boolean) => void;
	onSelect: (item: I) => void;
	onChipKeys: (e: KeyboardEvent) => void;
	value: I[];
	valueProperty?: string;
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
	value,
	valueProperty,
	defaultIndex,
	itemLimit = 5,
	readonly,
}: Props<I>) => {
	const host = useHost(),
		root = host.shadowRoot!,
		[, rerender] = useState(0),
		retries = useMemo(() => ({ count: 0 }), []),
		// Where the highlight lands once the list opens: -1 none, Infinity last
		openAt = useRef<number>(),
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

	const shown = expanded && items.length > 0;
	useEffect(() => {
		if (!shown) return;
		const intent = openAt.current,
			at = intent ?? items.findIndex(byValue(value, valueProperty));
		openAt.current = undefined;
		if (intent !== undefined || at !== -1) {
			setActiveIndex(Math.min(at, items.length - 1));
		}
	}, [shown]);

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
			// keyCode 229: IME composition, where isComposing is unreliable in Safari
			if (e.isComposing || e.keyCode === 229) return;
			const { key, altKey } = e,
				plain = !(altKey || e.ctrlKey || e.metaKey || e.shiftKey),
				toggle = (opened: boolean) => {
					e.preventDefault();
					setOpened(opened);
				};

			if (!expanded) {
				if (altKey && key === 'ArrowDown') openAt.current = -1;
				else if (plain && key === 'ArrowUp') openAt.current = Infinity;
				else if (!(plain && key === 'ArrowDown')) return onChipKeys(e);
				return toggle(true);
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
