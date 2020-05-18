import { html } from 'lit-html';

const identity = obj => obj,
	prop = key => key && (object => object[key]) || identity,
	strProp = key => {
		const p = prop(key);
		return o => p(o)?.toString() || '';
	},
	mark = (text, query) => {
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
	array = (arr = []) => Array.isArray(arr) ? arr : [arr],
	without = exclude => list => {
		const excludes = array(exclude);
		return array(list).filter(value => !excludes.includes(value));
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
