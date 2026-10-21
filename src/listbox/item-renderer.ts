import { identity } from '@neovici/cosmoz-utils/function';
import { html, TemplateResult } from 'lit-html';
import { Position } from './use-items';
import { mark } from './util';

export interface ItemRendererOpts<I> {
	items: I[];
	position: Position;
	highlight: (i: number) => void;
	select: (item: I) => void;
	isSelected: (item: I) => boolean;
	query?: string;
	textual: (i: I) => string;
}

export type Render<I> = (content: unknown, item: I, i: number) => unknown;

export type ItemRenderer<I> = (
	item: I,
	i: number,
	opts: ItemRendererOpts<I>,
) => TemplateResult;

export const itemRenderer =
	<I>(render: Render<I> = identity) =>
	(
		item: I,
		i: number,
		{
			items,
			highlight,
			select,
			textual = identity as () => string,
			query,
			isSelected,
		}: ItemRendererOpts<I>,
	): TemplateResult => {
		const text = textual(item),
			content = mark(text, query),
			rendered = render(content, item, i);
		return html`<div
				class="item"
				role="option"
				part="option"
				aria-selected=${isSelected(item) ? 'true' : 'false'}
				aria-setsize=${items.length}
				aria-posinset=${i + 1}
				data-index=${i}
				@mouseenter=${() => highlight(i)}
				@click=${() => select(item)}
				@mousedown=${(e: Event) => e.preventDefault()}
				title=${text}
			>
				${rendered}
			</div>
			<div class="sizer" virtualizer-sizer>${rendered}</div>`;
	};

export default itemRenderer();
