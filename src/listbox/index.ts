import {
	VirtualizeDirectiveConfig,
	VirtualizerHostElement,
	virtualize,
	virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import { sheet } from '@neovici/cosmoz-utils';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { props } from '@neovici/cosmoz-utils/object';
import { component, html, useEffect, useMemo, useRef } from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';
import style, { styles } from './style.css';
import { Props, properties, useListbox } from './use-listbox';

const Listbox = <I>(props: Props<I>) => {
	const listRef = useRef<Element | undefined>(undefined);
	const { position, items, renderItem, height, itemHeight } = useListbox(props);

	useEffect(() => {
		if (!position.scroll) return;
		const vl = (listRef.current as VirtualizerHostElement | undefined)?.[
			virtualizerRef
		];
		if (!vl?.['_layout']) return;
		vl.element(position.index)?.scrollIntoView({ block: 'nearest' });
	}, [position]);

	useStyleSheet(styles({ ...position, height, itemHeight }));

	const layout = useMemo(
		() =>
			({
				_itemSize: { height: itemHeight - 0.00001 },
			}) as VirtualizeDirectiveConfig<unknown>['layout'],
		[itemHeight],
	);

	return html`<div
			class="items"
			${ref((el) => (listRef.current = el))}
			style="min-height: ${height}px"
		>
			<div virtualizer-sizer></div>
			${virtualize({
				items,
				renderItem,
				scroller: true,
				layout,
			})}
		</div>
		<slot></slot>`;
};

const supportsPopover = () => {
	// eslint-disable-next-line no-prototype-builtins
	return HTMLElement.prototype.hasOwnProperty('popover');
};

const showPopover = (popover?: Element) => {
	const popoverElement = popover as HTMLElement;

	if (supportsPopover()) {
		requestAnimationFrame(() => {
			popoverElement?.showPopover();
		});
	}
};

customElements.define(
	'cosmoz-listbox',
	component<Props<unknown>>(Listbox, { styleSheets: [sheet(style)] }),
);

export const listbox = <I>(
	{ multi, ...thru }: Props<I> & { multi?: boolean },
	content: unknown,
) =>
	html`<cosmoz-listbox
		${ref(showPopover)}
		popover="manual"
		part="listbox"
		?multi=${multi}
		...=${spreadProps(props(properties)(thru))}
		>${content}</cosmoz-listbox
	>`;
