import { useCallback } from 'haunted';

export const search = <I>(
	source: I[],
	query: string,
	textual: (i: I) => string
) => {
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

export const notify = <T>(host: EventTarget, name: string, detail: T) =>
	host.dispatchEvent(new CustomEvent(name, { detail }));

export const useNotify = <V>(
	host: EventTarget,
	fn: undefined | ((v: V) => void),
	name: string
) =>
	useCallback(
		(val: V) => {
			fn?.(val);
			notify(host, name, val);
		},
		[fn]
	);

export const EMPTY = [],
	EMPTY$ = Promise.resolve(EMPTY);
