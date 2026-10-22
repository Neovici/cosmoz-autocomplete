import {
	VirtualizerHostElement,
	virtualize,
	virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import { sheet } from '@neovici/cosmoz-utils';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { noop } from '@neovici/cosmoz-utils/function';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { props } from '@neovici/cosmoz-utils/object';
import { component, html, useEffect, useRef } from '@pionjs/pion';
import { t } from 'i18next';
import { ref } from 'lit-html/directives/ref.js';
import '../announcer';
import style, { styles } from './style.css';
import { Props, properties, useListbox } from './use-listbox';

const ignore = noop;

const Listbox = <I>(host: HTMLElement & Props<I>) => {
	const listRef = useRef<Element | undefined>(undefined);
	const {
		position,
		announce,
		items,
		renderItem,
		height,
		itemHeight,
		setItemHeight,
	} = useListbox(host);

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

	return html`<slot name="search"></slot>
		<div
			class="items"
			role="listbox"
			aria-label=${t('Options')}
			aria-multiselectable=${host.hasAttribute('multi') ? 'true' : 'false'}
			style="min-height: ${height}px"
			tabindex="-1"
			${ref((el) => (listRef.current = el))}
		>
			<div virtualizer-sizer></div>
			${virtualize({
				items,
				renderItem,
				scroller: true,
			})}
		</div>
		<cosmoz-announcer .message=${announce}></cosmoz-announcer>
		<slot></slot>`;
};

customElements.define(
	'cosmoz-listbox',
	component<Props<unknown>>(Listbox, { styleSheets: [sheet(style)] }),
);

interface ListboxProps<I> extends Props<I> {
	multi?: boolean;
}

export const listbox = <I>(
	{ multi, ...thru }: ListboxProps<I>,
	content: unknown,
) =>
	html`<cosmoz-listbox
		part="listbox"
		?multi=${multi}
		...=${spreadProps(props(properties)(thru))}
		>${content}</cosmoz-listbox
	>`;
