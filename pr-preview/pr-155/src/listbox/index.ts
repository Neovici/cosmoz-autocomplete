import {
	VirtualizeDirectiveConfig,
	VirtualizerHostElement,
	virtualize,
	virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import { sheet } from '@neovici/cosmoz-utils';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
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

	return html`<div class="items" ${ref((el) => (listRef.current = el))}>
		<div virtualizer-sizer></div>
		${virtualize({
			items,
			renderItem,
			scroller: true,
			layout,
		})}
	</div>`;
};

customElements.define(
	'cosmoz-listbox',
	component<Props<unknown>>(Listbox, { styleSheets: [sheet(style)] }),
);

export const listbox = <I>({
	multi,
	...thru
}: Props<I> & { multi?: boolean }) =>
	portal(
		html`<cosmoz-listbox
			part="listbox"
			?multi=${multi}
			...=${spreadProps(props(properties)(thru))}
		></cosmoz-listbox>`,
	);
