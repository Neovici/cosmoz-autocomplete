import { html } from 'haunted';
import { mark, identity } from './utils';
export default (
	item,
	i,
	{
		highlight,
		select,
		textual = identity,
		query,
		isSelected
	}
) => {
	const text = textual(item),
		content = mark(text, query);

	return html`
		<div class="item"
			role="option" part="option" ?aria-selected=${ isSelected(item) }
			data-index=${ i }
			@mouseenter=${ () => highlight(i) }
			@click=${ () => select(item) }
			@mousedown=${ e => e.preventDefault() }
			title=${ text }
		>${ content }</div>
		<div class="sizer">${ content }</div>`;
};
