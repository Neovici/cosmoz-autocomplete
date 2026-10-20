import { sheet, tagged as css } from '@neovici/cosmoz-utils';
import { component, html, useLayoutEffect, useMemo } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { chip as defaultChipRenderer } from './chip';
import type { RProps } from './use-autocomplete';
import { raf } from './util';

type Deselect<I> = RProps<I>['onDeselect'];

export type ChipRenderer<I> = typeof defaultChipRenderer<I>;

interface Props<I> {
	value: I[];
	limit?: number;
	min?: number;
	variant?: 'default' | 'cell' | 'inline';
	wrap?: boolean;
	textual: (i: I) => string;
	onDeselect: Deselect<I>;
	disabled?: boolean;
	chipRenderer?: ChipRenderer<I>;
}

// Chips overflow the field instead of wrapping: reveal all, measure
// against the control's bounds, then hide the ones that don't fit and
// count the rest in the badge.
// eslint-disable-next-line max-statements
const overflow = (host: HTMLElement) => {
	const chips = host.shadowRoot!.querySelectorAll<HTMLElement>('.chip');
	const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge');
	if (!badge) return;
	badge.hidden = true;
	for (const chip of chips) {
		chip.hidden = false;
	}
	const trigger = host.closest('cosmoz-autocomplete-trigger');
	const limit = trigger?.shadowRoot?.querySelector('.control')?.getBoundingClientRect();
	if (!limit) return;
	let i;
	for (i = 0; i < chips.length; i++) {
		const chip = chips[i];
		const bounds = chip.getBoundingClientRect();
		const isIn = bounds.x + bounds.width <= limit.x + limit.width - 24;
		if (!isIn) {
			break;
		}
	}

	const overflown = chips.length - i;
	badge.querySelector('span')!.textContent = '+' + overflown.toString();
	badge.hidden = overflown < 1;

	for (; i < chips.length; i++) {
		chips[i].hidden = true;
	}
};

const Selection = <I>(host: HTMLElement & Props<I>) => {
	const {
			value: values,
			min = 0,
			limit,
			wrap,
			variant,
			textual,
			onDeselect,
			disabled,
			chipRenderer = defaultChipRenderer,
		} = host,
		isOne = limit === 1,
		enabled = !(wrap || isOne) && values.length > 0,
		doRaf = useMemo(() => raf(() => overflow(host)), []);

	useLayoutEffect(() => {
		if (!enabled) return;
		const trigger = host.closest('cosmoz-autocomplete-trigger')!;
		const observer = new ResizeObserver(() => {
			doRaf();
		});
		observer.observe(trigger);
		return () => observer.disconnect();
	}, [enabled]);

	useLayoutEffect(
		() => (enabled ? doRaf() : undefined),
		[enabled, values],
	);

	return html`<cosmoz-selection-row
		?data-one=${isOne}
		?data-wrap=${wrap}
		variant=${ifDefined(variant)}
	>
		${values.filter(Boolean).map((value) =>
			chipRenderer({
				item: value,
				content: textual(value),
				onClear: values.length > min && (() => onDeselect(value)),
				disabled,
			}),
		)}
		${chipRenderer({
			item: null,
			content: html`<span></span>`,
			className: 'badge',
			disabled: true,
			hidden: true,
		})}
	</cosmoz-selection-row>`;
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

	::slotted(cosmoz-tag) {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	:host([variant='inline']) ::slotted(cosmoz-tag) {
		margin-left: var(--cz-spacing);
	}

	:host([variant='inline']) ::slotted(cosmoz-tag:first-of-type) {
		margin-left: 0;
	}

	:host([data-one]) ::slotted(cosmoz-tag) {
		max-width: calc(100% - 16px);
	}

	::slotted(.badge) {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	:host([data-one]) ::slotted(.badge) {
		display: none;
	}

	::slotted([hidden]) {
		display: none;
	}

	:host([data-wrap]) ::slotted(cosmoz-tag) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}
`;

const Row = () => html`<slot></slot>`;

customElements.define(
	'cosmoz-selection-row',
	component(Row, { styleSheets: [sheet(selectionRowStyle)] }),
);
customElements.define(
	'cosmoz-selection',
	component(Selection, { styleSheets: [sheet(selectionStyle)] }),
);