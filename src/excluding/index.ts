import {
	component,
	html,
	useCallback,
	useMemo,
	useProperty,
} from '@pionjs/pion';
import { nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import '../autocomplete';
import {
	Autocomplete,
	observedAttributes,
	Props,
	style,
} from '../autocomplete/autocomplete';
import { ChipProps } from '../autocomplete/chip';
import { ItemRendererOpts } from '../listbox/item-renderer';
import excludingStyle from './style.css';
import { WrappedItem } from './types';
import { useExcludingSelection } from './use-excluding-selection';
import { unwrap } from './utils';

const isItemExcluded = <I>(value: WrappedItem<I>[] | undefined, item: I) =>
	value?.some((v) => v.item === item && v.excluded);

const excludedState = <I>(
	value: WrappedItem<I>[] | undefined,
	item: I | null,
) => (item && isItemExcluded(value, item) ? 'excluded' : nothing);

const mkItemRenderer =
	<I>(value?: WrappedItem<I>[]) =>
	(
		item: I,
		i: number,
		{ highlight, select, textual, isSelected }: ItemRendererOpts<I>,
	) => {
		const rendered = textual(item);

		return html`<div
				class="item"
				role="option"
				part="option ${excludedState(value, item)}"
				?aria-selected=${isSelected(item)}
				data-index=${i}
				@mouseenter=${() => highlight(i)}
				@click=${() => select(item)}
				@mousedown=${(e: Event) => e.preventDefault()}
			>
				${rendered}
			</div>
			<div class="sizer" virtualizer-sizer>${rendered}</div>`;
	};

const mkChipRenderer =
	<I>(value: WrappedItem<I>[] | undefined, onClear: (item: I | null) => void) =>
	({
		item,
		content,
		disabled,
		hidden,
		className = 'chip',
		slot,
	}: ChipProps<I>) =>
		html`<cosmoz-autocomplete-chip
			class=${ifDefined(className)}
			slot=${ifDefined(slot)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${excludedState(value, item)}
			?disabled=${disabled}
			?hidden=${hidden}
			.onClear=${() => onClear(item)}
			title=${ifDefined(typeof content === 'string' ? content : undefined)}
		>
			${content}
		</cosmoz-autocomplete-chip>`;

const AutocompleteExcluding = <I>(props: Props<I>) => {
	const { value, setValue, setExcludingValue } =
		useExcludingSelection<I>('value');
	const [text, setText] = useProperty<string>('text');

	const onClear = useCallback(
		(item: I | null) =>
			setValue((values) => values?.filter((i) => i.item !== item)),
		[],
	);

	return Autocomplete({
		...props,
		value: useMemo(() => value?.map(unwrap), [value]),
		onChange: useCallback((value: I[]) => {
			setExcludingValue(value);
		}, []),
		text,
		onText: useCallback((text: string) => {
			setText(text);
		}, []),
		itemRenderer: useMemo(() => mkItemRenderer(value), [value]),
		chipRenderer: useMemo(
			() => mkChipRenderer(value, onClear),
			[value, onClear],
		),
	});
};

const shadowRootInit = { mode: 'open' as const, delegatesFocus: true };

customElements.define(
	'cosmoz-autocomplete-excluding',
	component(AutocompleteExcluding, {
		observedAttributes,
		styleSheets: [style, excludingStyle],
		shadowRootInit,
	}),
);
