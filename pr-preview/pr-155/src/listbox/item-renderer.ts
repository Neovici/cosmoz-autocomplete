import { html, TemplateResult } from 'lit-html';
import { identity } from '@neovici/cosmoz-utils/function';
import { mark } from './util';

export interface Opts<I> {
	highlight: (i: number) => void;
	select: (item: I) => void;
	isSelected: (item: I) => void;
	query: string;
	textual: (i: I) => string;
}

export type Render<I> = (content: unknown, item: I, i: number) => unknown;

export type ItemRenderer<I> = (
	item: I,
	i: number,
	opts: Opts<I>
) => TemplateResult;

export const itemRenderer =
	<I>(render: Render<I> = identity) =>
	(
		item: I,
		i: number,
		{
			highlight,
			select,
			textual = identity as () => string,
			query,
			isSelected,
		}: {
			highlight: (i: number) => void;
			select: (item: I) => void;
			isSelected: (item: I) => void;
			query: string;
			textual: (i: I) => string;
		}
	): TemplateResult => {
		const text = textual(item),
			content = mark(text, query),
			rendered = render(content, item, i);

		return html` <div
				class="item"
				role="option"
				part="option"
				?aria-selected=${isSelected(item)}
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
