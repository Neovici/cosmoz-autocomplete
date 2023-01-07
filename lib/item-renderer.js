import { html } from 'haunted';
import { mark, identity } from './utils';
export const itemRenderer =
	(render = identity) =>
	(item, i, { highlight, select, textual = identity, query, isSelected }) => {
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
				@mousedown=${(e) => e.preventDefault()}
				title=${text}
			>
				${rendered}
			</div>
			<div class="sizer" virtualizer-sizer>${rendered}</div>`;
	};

export default itemRenderer();
