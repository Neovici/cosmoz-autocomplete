import { html } from 'lit-html';
const propOrRoot = (object, prop) =>
		object != null && {}.hasOwnProperty.call(object, prop)
			? object[prop]
			: object,
	mark = (text, query) => {
		if (!query || !text) {
			return text;
		}
		const i = text.search(new RegExp(query, 'iu'));
		if (i < 0) {
			return text;
		}
		const end = i + query.length;
		return [
			text.slice(0, i),
			html`<mark>${text.slice(i, end)}</mark>`,
			text.slice(end)
		];
	},
	search = (source, query, textProp) => {
		const matches = [];
		for (const item of source) {
			const index = textProp(item)
				.toLowerCase()
				.indexOf(query);
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
				if (a.index < b.index) {
					return -1;
				}
				if (a.index > b.index) {
					return 1;
				}
				return 0;
			})
			.map(({ item }) => item);
	};

export {
	propOrRoot, mark, search
};
