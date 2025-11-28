import { useCallback } from '@pionjs/pion';

/**
 * @see https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 * @see https://medium.com/nerd-for-tech/basics-of-javascript-string-normalize-method-f3241174c2d0
 * @see https://www.codu.co/articles/remove-accents-from-a-javascript-string-skgp1inb
 *
 * @param {string} str string from which to remove accents
 * @returns {string} string w/o accents
 */
const removeAccents = (str: string): string => {
	return str.normalize('NFD').replace(/[\u0300-\u036f]/gu, '');
};

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

export const normalize = <I>(source: I[] | false | null | undefined) => {
	if (source === false || source == null) return [];
	return source;
};

export const notify = <T>(host: EventTarget, name: string, detail: T) =>
	host.dispatchEvent(new CustomEvent(name, { detail }));

export const useNotify = <V>(
	host: EventTarget,
	fn: undefined | ((v: V) => void),
	name: string,
) =>
	useCallback(
		(val: V) => {
			fn?.(val);
			notify(host, name, val);
		},
		[fn],
	);

export const EMPTY = [];

type Arr = unknown[];
type ArrFn<T extends Arr> = (...args: T) => void;
export const raf =
	<A extends Arr, F extends ArrFn<A> = ArrFn<A>>(fn: F) =>
	(...args: A) => {
		let id: number | undefined;
		const cleanup = () => {
			if (id) cancelAnimationFrame(id);
		};
		cleanup();
		id = requestAnimationFrame(() => {
			id = undefined;
			fn(...args);
		});
		return cleanup;
	};
