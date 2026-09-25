import { identity } from '@neovici/cosmoz-utils/function';
import { html, noChange, nothing, TemplateResult } from 'lit-html';
import {
	Directive,
	directive,
	ElementPart,
	PartInfo,
	PartType,
} from 'lit-html/directive.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { mark } from './util';

export interface Position {
	index: number;
}

export interface ItemRendererOpts<I> {
	items: I[];
	position: Position;
	highlight: (i: number) => void;
	select: (item: I) => void;
	isSelected: (item: I) => unknown;
	query?: string;
	textual: (i: I) => string;
}

export type Render<I> = (content: unknown, item: I, i: number) => unknown;

export type ItemRenderer<I> = (
	item: I,
	i: number,
	opts: ItemRendererOpts<I>,
) => TemplateResult;

class OptionAttributes extends Directive {
	constructor(part: PartInfo) {
		super(part);
		if (part.type !== PartType.ELEMENT) {
			throw new Error('optionAttributes() must be used on an element');
		}
	}

	// The arguments are read in update(); lit's Directive API requires them here.
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render(..._: [item: unknown, i: number, opts: ItemRendererOpts<unknown>]) {
		return nothing;
	}

	update(
		{ element }: ElementPart,
		[item, i, { items, position, isSelected }]: Parameters<this['render']>,
	) {
		element.setAttribute('role', 'option');
		element.setAttribute('aria-selected', isSelected(item) ? 'true' : 'false');
		element.setAttribute('aria-setsize', String(items.length));
		element.setAttribute('aria-posinset', String(i + 1));
		element.setAttribute('data-index', String(i));
		element.toggleAttribute('data-highlighted', i === position.index);
		return noChange;
	}
}

/**
 * Sets the attributes the combobox relies on (role, selection, position in the
 * set, highlight) on a custom renderer's own option element:
 * `<div class="item" ${optionAttributes(item, i, opts)}>`.
 */
export const optionAttributes = directive(OptionAttributes) as <I>(
	item: I,
	i: number,
	opts: ItemRendererOpts<I>,
) => ReturnType<ReturnType<typeof directive>>;

interface OptionProps {
	content: unknown;
	part?: string;
	title?: string;
}

/**
 * Renders a complete option. Custom item renderers with their own markup use
 * `optionAttributes` instead.
 */
export const renderOption = <I>(
	item: I,
	i: number,
	opts: ItemRendererOpts<I>,
	{ content, part = 'option', title }: OptionProps,
): TemplateResult =>
	html`<div
			class="item"
			part=${part}
			${optionAttributes(item, i, opts)}
			@mouseenter=${() => opts.highlight(i)}
			@click=${() => opts.select(item)}
			@mousedown=${(e: Event) => e.preventDefault()}
			title=${ifDefined(title)}
		>
			${content}
		</div>
		<div class="sizer" virtualizer-sizer>${content}</div>`;

export const itemRenderer =
	<I>(render: Render<I> = identity) =>
	(item: I, i: number, opts: ItemRendererOpts<I>): TemplateResult => {
		const { textual = identity as () => string, query } = opts,
			text = textual(item);
		return renderOption(item, i, opts, {
			content: render(mark(text, query), item, i),
			title: text,
		});
	};

export default itemRenderer();
