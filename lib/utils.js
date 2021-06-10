import { html } from 'lit-html';

import { identity } from '@neovici/cosmoz-utils/lib/function';
import { array, without } from '@neovici/cosmoz-utils/lib/array';
import { prop, strProp } from '@neovici/cosmoz-utils/lib/object';

const mark = (text, query) => {
		if (!query || !text) {
			return text;
		}
		const i = text.toLowerCase().indexOf(query.toLowerCase());
		if (i < 0) {
			return text;
		}
		const end = i + query.length;
		return [
			text.slice(0, i),
			html`<mark>${ text.slice(i, end) }</mark>`,
			text.slice(end)
		];
	},
	search = (source, query, textual) => {
		const matches = [];
		for (const item of source) {
			const index = textual(item).toLowerCase().indexOf(query);
			if (index < 0) {
				continue;
			}
			matches.push({
				item,
				index
			});
		}
		return matches
			.sort((a, b) => {
				return a.index - b.index;
			})
			.map(({ item }) => item);
	},
	scrollIntoViewIfNeeded = (el, parent) => {
		if (el == null) {
			return;
		}
		if (el.scrollIntoViewIfNeeded) {
			el.scrollIntoViewIfNeeded();
			return;
		}
		const ebox = el.getBoundingClientRect(),
			pbox = parent.getBoundingClientRect();
		if (ebox.top >= pbox.top && ebox.top + ebox.height < pbox.top + pbox.height) {
			return;
		}
		el.scrollIntoView();
	};

export {
	array, identity, mark, prop, search, without, strProp, scrollIntoViewIfNeeded
};
