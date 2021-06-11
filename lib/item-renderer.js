import { html } from 'haunted';
import { mark, identity, prop, array } from './utils';
export default (
	item,
	i,
	{
		highlight,
		select,
		textual = identity,
		query,
		value,
		valueProperty
	}
) => {
	const text = textual(item),
		content = mark(text, query),
		valuation = prop(valueProperty),
		selected = array(value).find(value => valuation(value) === valuation(item));
	return html`
		<div class="item"
			role="option" part="option" ?aria-selected=${ selected }
			data-index=${ i }
			@mouseenter=${ () => highlight(i) }
			@click=${ () => select(item) }
			@mousedown=${ e => e.preventDefault() }
			title=${ text }
		>${ content }</div>
		<div class="sizer">${ content }</div>`;
};
