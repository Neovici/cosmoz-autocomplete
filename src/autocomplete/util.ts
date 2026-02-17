/**
 * Remove accents/diacritics from a string.
 * @see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 * @see https://medium.com/nerd-for-tech/basics-of-javascript-string-normalize-method-f3241174c2d0
 * @see https://www.codu.co/articles/remove-accents-from-a-javascript-string-skgp1inb
 *
 * @param str string from which to remove accents
 * @returns string w/o accents
 */
export const removeAccents = (str: string): string => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/gu, '');
};

/**
 * Search items by query string, returning matches sorted by position.
 * Accent-insensitive search.
 */
export const search = <I>(
	source: I[],
	query: string | undefined,
	textual: (i: I) => string,
) => {
	if (!query) return source;
	const normalizedQuery = removeAccents(query.toLowerCase());
	const matches = [];

	for (const item of source) {
		const normalizedText = removeAccents(textual(item).toLowerCase());
		const index = normalizedText.indexOf(normalizedQuery);

		if (index < 0) {
			continue;
		}

		matches.push({
			item,
			index,
		});
	}

	return matches.sort((a, b) => a.index - b.index).map(({ item }) => item);
};

/**
 * Normalize source to an array.
 */
export const normalize = <I>(source: I[] | false | null | undefined) => {
	if (source === false || source == null) return [];
	return source;
};

/**
 * Dispatch a custom event with detail.
 */
export const notify = <T>(host: EventTarget, name: string, detail: T) =>
	host.dispatchEvent(new CustomEvent(name, { detail }));

export const EMPTY: never[] = [];
