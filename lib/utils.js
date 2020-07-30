import { html } from 'lit-html';

import { identity } from '@neovici/cosmoz-utils/lib/function';
import {
	array,
	without
} from '@neovici/cosmoz-utils/lib/array';
import {
	prop,
	strProp
} from '@neovici/cosmoz-utils/lib/object';

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
	};

export {
	array, identity, mark, prop, search, without, strProp
};
