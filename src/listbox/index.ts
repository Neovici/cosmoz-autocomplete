import {
	VirtualizerHostElement,
	virtualize,
	virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import { connectable } from '@neovici/cosmoz-dropdown/connectable';
import { sheet } from '@neovici/cosmoz-utils';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { noop } from '@neovici/cosmoz-utils/function';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { props } from '@neovici/cosmoz-utils/object';
import { component, html, useEffect, useRef } from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';
import { StyleInfo, styleMap } from 'lit-html/directives/style-map.js';
import style, { styles } from './style.css';
import { Props, properties, useListbox } from './use-listbox';

const ignore = noop;

const Listbox = <I>(host: HTMLElement & Props<I>) => {
	const listRef = useRef<Element | undefined>(undefined);
	const { position, items, renderItem, height, itemHeight, setItemHeight } =
		useListbox(host);

	useEffect(() => {
		const vl = (listRef.current as VirtualizerHostElement | undefined)?.[
			virtualizerRef
		];
		if (!vl) return;
		vl.layoutComplete.then(() => {
			host.dispatchEvent(new CustomEvent('layout-complete'));
			const { averageChildSize, averageMarginSize } =
				vl['_layout']._metricsCache;
			return setItemHeight(averageChildSize + averageMarginSize * 2);
		}, ignore);
	}, [items]);

	useEffect(() => {
		if (!position.scroll) return;
		const vl = (listRef.current as VirtualizerHostElement | undefined)?.[
			virtualizerRef
		];
		if (!vl) return;
		if (!vl?.['_layout']) {
			vl.layoutComplete.then(
				() => vl.element(position.index)?.scrollIntoView({ block: 'nearest' }),
				ignore,
			);
			return;
		}
		vl.element(position.index)?.scrollIntoView({ block: 'nearest' });
	}, [position]);

	useStyleSheet(
		styles({ ...position, itemHeight, auto: host.itemHeight === 'auto' }),
	);

	return html`<div
			class="items"
			style="min-height: ${height}px"
			${ref((el) => (listRef.current = el))}
		>
			<div virtualizer-sizer></div>
			${virtualize({
				items,
				renderItem,
				scroller: true,
			})}
		</div>
		<slot></slot>`;
};

customElements.define(
	'cosmoz-listbox',
	connectable(
		component<Props<unknown>>(Listbox, { styleSheets: [sheet(style)] }),
	),
);

interface ListboxProps<I> extends Props<I> {
	multi?: boolean;
	setFloating: (el?: Element) => void;
	styles: StyleInfo;
}

export const listbox = <I>(
	{ multi, setFloating, styles, ...thru }: ListboxProps<I>,
	content: unknown,
) =>
	html`<cosmoz-listbox
		style="${styleMap(styles)}"
		@connected="${(e: Event) => (e.target as HTMLElement).showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${multi}
		${ref(setFloating)}
		...=${spreadProps(props(properties)(thru))}
		>${content}</cosmoz-listbox
	>`;
