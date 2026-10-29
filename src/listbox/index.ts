import {
	VirtualizerHostElement,
	virtualize,
	virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import {
	nextIndex,
	useListNavigation,
} from '@neovici/cosmoz-utils/hooks/use-list-navigation';
import { sheet } from '@neovici/cosmoz-utils';
import { noop } from '@neovici/cosmoz-utils/function';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import { component, css, html, useEffect, useRef } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ref } from 'lit-html/directives/ref.js';
import {
	LISTBOX_NAVIGATE_DOWN,
	LISTBOX_NAVIGATE_UP,
	LISTBOX_SELECT,
} from './listbox-keybindings';
import style, { styles } from './style.css';
import { Props, useListbox } from './use-listbox';

const ignore = noop;

export interface ListboxViewProps<I> extends Props<I> {
	multi?: boolean;
	label?: string;
	/** Called when the virtualizer renders a different range of options. */
	onRangeChanged?: () => void;
}

/**
 * Renders the listbox into the calling component's shadow root, so a control in
 * that root (or a nested one) can reference the options.
 */
export const useListboxView = <I>(props: ListboxViewProps<I>) => {
	const host = useHost(),
		listRef = useRef<Element | undefined>(undefined),
		{ position, items, renderItem, height, itemHeight, setItemHeight } =
			useListbox(props),
		virtualizer = () =>
			(listRef.current as VirtualizerHostElement | undefined)?.[virtualizerRef];

	useEffect(() => {
		const vl = virtualizer();
		if (!vl) return;
		vl.layoutComplete.then(() => {
			host.dispatchEvent(new CustomEvent('layout-complete'));
			const { averageChildSize, averageMarginSize } =
				vl['_layout']._metricsCache;
			return setItemHeight(averageChildSize + averageMarginSize * 2);
		}, ignore);
	}, [items]);

	useEffect(() => {
		const vl = virtualizer(),
			{ index } = position;
		if (!vl || index < 0) return;
		const option = listRef.current?.querySelector(`[data-index="${index}"]`);
		// Don't scroll the option away from under the pointer that highlighted it.
		if (option?.matches(':hover')) return;
		if (!vl['_layout']) {
			vl.layoutComplete.then(
				() => vl.element(index)?.scrollIntoView({ block: 'nearest' }),
				ignore,
			);
			return;
		}
		vl.element(index)?.scrollIntoView({ block: 'nearest' });
	}, [position]);

	useStyleSheet(styles({ itemHeight, auto: props.itemHeight === 'auto' }));

	const { multi, label, onRangeChanged } = props;

	return (content: unknown) =>
		html`<div
			class="listbox"
			part="listbox"
			role="listbox"
			aria-label=${ifDefined(label || undefined)}
			aria-multiselectable=${multi ? 'true' : nothing}
			?data-multi=${multi}
		>
			<div
				class="items"
				style="min-height: ${height}px"
				@rangeChanged=${onRangeChanged}
				${ref((el) => (listRef.current = el))}
			>
				<div virtualizer-sizer></div>
				${virtualize({
					items,
					renderItem,
					scroller: true,
				})}
			</div>
			${content}
		</div>`;
};

export interface StandaloneProps<I> extends Omit<
	ListboxViewProps<I>,
	'activeIndex' | 'onHighlight'
> {
	defaultIndex?: number;
}

// Standalone listboxes (e.g. a mention list under a textarea) aren't focused,
// so they still take their keys from the global keybindings context.
const Listbox = <I>(host: HTMLElement & StandaloneProps<I>) => {
	const { items, onSelect, defaultIndex } = host,
		count = items.length,
		{ activeIndex, setActiveIndex } = useListNavigation({
			count,
			defaultIndex: isNaN(defaultIndex as number) ? 0 : Number(defaultIndex),
		}),
		move = (key: string) => {
			const next = nextIndex(activeIndex, key, { count });
			if (next !== undefined) setActiveIndex(next);
		};

	useActivity(
		{
			activity: LISTBOX_NAVIGATE_UP,
			callback: () => move('ArrowUp'),
			element: () => host,
		},
		[],
	);
	useActivity(
		{
			activity: LISTBOX_NAVIGATE_DOWN,
			callback: () => move('ArrowDown'),
			element: () => host,
		},
		[],
	);
	useActivity(
		{
			activity: LISTBOX_SELECT,
			callback: () =>
				activeIndex > -1 &&
				activeIndex < count &&
				onSelect?.(items[activeIndex], activeIndex),
			element: () => host,
		},
		[],
	);

	const { value, valueProperty, query, textual, itemRenderer, itemHeight } =
		host;

	return useListboxView({
		value,
		valueProperty,
		query,
		textual,
		itemRenderer,
		itemHeight,
		itemLimit: host.itemLimit,
		multi: host.multi,
		items,
		onSelect,
		activeIndex,
		onHighlight: setActiveIndex,
	})(html`<slot></slot>`);
};

customElements.define(
	'cosmoz-listbox',
	component<StandaloneProps<unknown>>(Listbox, {
		styleSheets: [
			sheet(style),
			sheet(css`
				:host {
					display: block;
				}
			`),
		],
	}),
);

export { style };
