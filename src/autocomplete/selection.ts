import { tagged as css, sheet } from '@neovici/cosmoz-utils';
import {
	type OverflowConfig,
	overflow as detectOverflow,
	overflowStyle,
} from '@neovici/cosmoz-utils/directives/overflow';
import { component, html, useState } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { chip as defaultChipRenderer } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

export type ChipRenderer<I> = typeof defaultChipRenderer<I>;

interface Props<I> {
	value: I[];
	min?: number;
	variant?: 'default' | 'cell' | 'inline';
	wrap?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	textual: (i: I) => string;
	onDeselect: Deselect<I>;
	disabled?: boolean;
	chipRenderer?: ChipRenderer<I>;
}

const Selection = <I>(host: HTMLElement & Props<I>) => {
	const {
			value: values,
			min = 0,
			wrap,
			variant,
			size,
			textual,
			onDeselect,
			disabled,
			chipRenderer = defaultChipRenderer,
		} = host,
		// the count of chips the band clips; reported asynchronously
		[overflown, setOverflown] = useState(0),
		config: OverflowConfig = {
			onOverflow: (overflowing) => setOverflown(overflowing.size),
		},
		// the pills sit one size step below their control
		tagSize = { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }[size ?? 'md'];

	return html`<cosmoz-autocomplete-chips-row
		.overflow=${config}
		?data-wrap=${wrap}
		variant=${ifDefined(variant)}
		size=${ifDefined(size && size !== 'md' ? size : undefined)}
	>
		${values.filter(Boolean).map((value) =>
			chipRenderer({
				item: value,
				content: textual(value),
				onClear: values.length > min && (() => onDeselect(value)),
				disabled,
				slot: 'chips',
				size: tagSize,
			}),
		)}
		${chipRenderer({
			item: null,
			content: html`<span>${overflown > 0 ? '+' + overflown : ''}</span>`,
			className: 'badge',
			disabled: true,
			slot: 'badge',
			size: tagSize,
			hidden: overflown < 1,
		})}
	</cosmoz-autocomplete-chips-row>`;
};

const selectionStyle = css`
	:host {
		display: contents;
	}
`;

const selectionRowStyle = css`
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
	/* one chip row, matched to the tag pill heights */
	slot[name='chips'] {
		flex: 0 1 auto;
		min-width: 0;
		/* the gap keeps wrapped rows clear of the cap, no slivers */
		row-gap: calc(var(--cz-spacing) * 2);
		max-height: 1.5rem; /* tag sm, the default size */
	}

	:host([variant='inline']) slot[name='chips'] {
		max-height: 1.6rem; /* inline md */
	}

	:host([size='sm']) slot[name='chips'] {
		max-height: 1.25rem; /* the sm pill */
	}

	/* variants restyle the sm pill fonts: cells render 21.25, inline 24 */
	:host([size='sm'][variant='cell']) slot[name='chips'] {
		max-height: 21.3px; /* cell sm pill */
	}

	:host([size='sm'][variant='inline']) slot[name='chips'] {
		max-height: 24px; /* inline sm pill */
	}

	:host([size='lg']) slot[name='chips'] {
		max-height: 27px; /* tag md pill */
	}

	:host([size='xl']) slot[name='chips'] {
		max-height: 31px; /* tag lg pill */
	}

	/* wrap mode: chips wrap to real rows and the field grows */
	:host([data-wrap]) slot[name='chips'] {
		overflow: visible;
		max-height: none;
	}

	::slotted(cosmoz-tag) {
		align-items: center;
		flex: none;
		margin-left: var(--cz-spacing);
	}

	:host([variant='inline']) ::slotted(cosmoz-tag:first-of-type) {
		margin-left: 0;
	}

	::slotted(.badge) {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	::slotted([hidden]) {
		display: none;
	}
`;

const Row = (host: HTMLElement & { overflow: OverflowConfig }) =>
	html`<slot
			name="chips"
			class="cz-overflow-band"
			${detectOverflow(host.overflow)}
		></slot>
		<slot name="badge"></slot>`;

customElements.define(
	'cosmoz-autocomplete-chips-row',
	component(Row, { styleSheets: [sheet(selectionRowStyle), overflowStyle] }),
);
customElements.define(
	'cosmoz-autocomplete-chips',
	component(Selection, { styleSheets: [sheet(selectionStyle)] }),
);
