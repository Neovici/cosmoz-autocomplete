import { html, component, useEffect, useRef, useMemo } from 'haunted';
import { ref } from 'lit-html/directives/ref.js';
import {
	virtualize,
	virtualizerRef,
	VirtualizerHostElement,
	VirtualizeDirectiveConfig,
} from '@lit-labs/virtualizer/virtualize.js';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { props } from '@neovici/cosmoz-utils/object';
import { useListbox, properties, Props } from './use-listbox';
import { styles } from './style.css';

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

	useEffect(
		() => () => {
			const vl = (listRef.current as VirtualizerHostElement | undefined)?.[
				virtualizerRef
			];
			vl?.disconnected();
		},
		[]
	);

	const layout = useMemo(
		() =>
			({
				_itemSize: { height: itemHeight },
			} as VirtualizeDirectiveConfig<unknown>['layout']),
		[itemHeight]
	);

	return html` <style>
			${styles({ ...position, height, itemHeight })}
		</style>
		<div class="items" ${ref((el) => (listRef.current = el))}>
			<div virtualizer-sizer></div>
			${virtualize({
				items,
				renderItem,
				scroller: true,
				layout,
			})}
		</div>`;
};

customElements.define('cosmoz-listbox', component<Props<unknown>>(Listbox));

export const listbox = <I>({
	multi,
	...thru
}: Props<I> & { multi?: boolean }) =>
	portal(
		html`<cosmoz-listbox
			part="listbox"
			?multi=${multi}
			...=${spreadProps(props(properties)(thru))}
		></cosmoz-listbox>`
	);
