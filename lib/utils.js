export const search = (source, query, textual) => {
	const matches = [];
	for (const item of source) {
		const index = textual(item).toLowerCase().indexOf(query);
		if (index < 0) {
			continue;
		}
		matches.push({
			item,
			index,
		});
	}
	return matches
		.sort((a, b) => {
			return a.index - b.index;
		})
		.map(({ item }) => item);
};

export const scrollIntoViewIfNeeded = (el, parent) => {
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
