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
	};

export {
	propOrRoot, mark
};
