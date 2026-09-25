import { identity } from '@neovici/cosmoz-utils/function';
import { html, TemplateResult } from 'lit-html';
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

interface OptionProps {
	content: unknown;
	part?: string;
	title?: string;
}

/**
 * Renders an option with the attributes the combobox relies on (role,
 * selection, highlight, position in the set). Custom item renderers should use
 * this instead of their own markup.
 */
export const renderOption = <I>(
	item: I,
	i: number,
	{ items, position, highlight, select, isSelected }: ItemRendererOpts<I>,
	{ content, part = 'option', title }: OptionProps,
): TemplateResult =>
	html`<div
			class="item"
			role="option"
			part=${part}
			aria-selected=${isSelected(item) ? 'true' : 'false'}
			aria-setsize=${items.length}
			aria-posinset=${i + 1}
			?data-highlighted=${i === position.index}
			data-index=${i}
			@mouseenter=${() => highlight(i)}
			@click=${() => select(item)}
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
