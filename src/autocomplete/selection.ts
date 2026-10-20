import { tagged as css, sheet } from '@neovici/cosmoz-utils';
import {
	type OverflowConfig,
	overflow as detectOverflow,
	overflowStyle,
} from '@neovici/cosmoz-utils/directives/overflow';
import { component, html, useState } from '@pionjs/pion';
import { chip as defaultChipRenderer } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

export type ChipRenderer<I> = typeof defaultChipRenderer<I>;

interface Props<I> {
	value: I[];
	min?: number;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
	chipRenderer?: ChipRenderer<I>;
}

export const selection = <I>({
	value: values,
	min = 0,
	onDeselect,
	textual,
	disabled,
	chipRenderer = defaultChipRenderer,
}: Props<I>) =>
	values.filter(Boolean).map((value) =>
		chipRenderer({
			item: value,
			content: textual(value),
			onClear: values.length > min && (() => onDeselect(value)),
			disabled,
			slot: 'chips',
		}),
	);

const Selection = <I>(
	host: HTMLElement & { chipRenderer?: ChipRenderer<I> },
) => {
	const { chipRenderer = defaultChipRenderer } = host;
	// the count of chips the band clips; reported asynchronously
	const [overflown, setOverflown] = useState(0),
		config: OverflowConfig = {
			onOverflow: (overflowing) => setOverflown(overflowing.size),
		};

	return html`<slot
			name="chips"
			class="cz-overflow-band"
			${detectOverflow(config)}
		></slot>
		${chipRenderer({
			item: null,
			content: html`<span>${overflown > 0 ? '+' + overflown : ''}</span>`,
			className: 'badge',
			disabled: true,
			hidden: overflown < 1,
		})}`;
};

const selectionStyle = css`
	:host {
		display: contents;
	}

	slot {
		display: contents;
	}

	/* the band: the wrapping, clipping row the chips land in - one chip
	   row tall; members that do not fit wrap below it and the css hides
	   them on first paint (no flash), the marks only attribute them to
	   the count badge outside. The band invariants ride the adopted
	   overflowStyle; the context sizing and the one-row height stay
	   here. */
	slot[name='chips'] {
		flex: 0 1 auto;
		min-width: 0;
		max-height: calc(1lh + var(--cz-spacing) * 4);
	}

	/* wrap mode: chips wrap to real rows and the field grows */
	:host([data-wrap]) slot[name='chips'] {
		overflow: visible;
		max-height: none;
	}

	::slotted(cosmoz-tag) {
		align-items: center;
		flex: none;
		min-height: calc(
			1lh + var(--cz-spacing) * 4
		); /* fill the row like the old input did */
		max-width: calc(100% - calc(var(--cz-spacing) * 2));
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	:host([data-one]) .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}
`;

customElements.define(
	'cosmoz-autocomplete-chips',
	component(Selection, { styleSheets: [sheet(selectionStyle), overflowStyle] }),
);
