import { invoke } from '@neovici/cosmoz-utils/function';
import { component, html, lift, StateUpdater, useProperty } from '@pionjs/pion';
import '../autocomplete';
import { observedAttributes, Props } from '../autocomplete/autocomplete';
import { ItemRendererOpts } from '../listbox/item-renderer';
import { checkIcon, clearIcon } from '@neovici/cosmoz-icons';
import { nothing } from 'lit-html';

interface WrappedItem<I> {
	item: I;
	excluded: boolean;
}

const wrap = <I>(item: I): WrappedItem<I> => ({ item, excluded: false });
const unwrap = <I>(item: WrappedItem<I>): I => item.item;

const useExcludingSelection = <I>(property: string) => {
	const [value, setValue] = useProperty<WrappedItem<I>[]>(property);

	const setExcludingValue: StateUpdater<I[] | undefined> = (next) =>
		setValue((prev) => {
			const _next = invoke(next, prev?.map(unwrap));
			if (!_next) return undefined;
			if (!prev) return _next.map(wrap);

			const results = prev.reduce((nextState, item) => {
				if (_next.includes(item.item)) return [...nextState, item];
				else if (item.excluded) return nextState;
				return [...nextState, { ...item, excluded: true }];
			}, [] as WrappedItem<I>[]);

			const newItems = _next
				.filter((i) => !prev.some((p) => p.item === i))
				.map(wrap);

			return [...results, ...newItems];
		});

	return [value, setExcludingValue] as const;
};

const AutocompleteExcluding = <I>(props: Props<I>) => {
	const [value, setValue] = useExcludingSelection<I>('value');

	return html`<cosmoz-autocomplete
		.label=${props.label}
		.source=${props.source}
		.textProperty=${props.textProperty}
		.valueProperty=${props.valueProperty}
		.keepOpened=${props.keepOpened}
		.showSingle=${props.showSingle}
		.preserveOrder=${props.preserveOrder}
		.keepQuery=${props.keepQuery}
		.limit=${props.limit}
		.min=${props.min}
		.errorMessage=${props.errorMessage}
		.itemHeight=${props.itemHeight}
		.itemLimit=${props.itemLimit}
		.defaultIndex=${props.defaultIndex}
		.placement=${props.placement}
		?disabled=${props.disabled}
		?invalid=${props.invalid}
		?no-label-float=${props.noLabelFloat}
		?always-float-label=${props.alwaysFloatLabel}
		?external-search=${props.externalSearch}
		?wrap=${props.wrap}
		.value=${value?.map(unwrap)}
		@value-changed=${lift(setValue)}
		.itemRenderer=${(
			item: I,
			i: number,
			{ highlight, select, textual, isSelected }: ItemRendererOpts<I>,
		) => {
			const rendered = textual(item);
			// const isItemSelected = value?.some((v) => v.item === item && !v.excluded);

			const isItemExcluded = value?.some((v) => v.item === item && v.excluded);

			return html`<div
					class="item"
					role="option"
					part="option"
					?aria-selected=${isSelected(item)}
					data-index=${i}
					data-state=${isItemExcluded ? 'excluded' : undefined}
					@mouseenter=${() => highlight(i)}
					@click=${() => select(item)}
					@mousedown=${(e: Event) => e.preventDefault()}
				>
					${rendered}
				</div>
				<div class="sizer" virtualizer-sizer>${rendered}</div>`;
		}}
	></cosmoz-autocomplete>`;
};

customElements.define(
	'cosmoz-autocomplete-excluding',
	component(AutocompleteExcluding, { observedAttributes }),
);
