import { useCallback } from '@pionjs/pion';

export const search = <I>(
	source: I[],
	query: string,
	textual: (i: I) => string,
) => {
	if(!query) return source;
	const qry = query.toLowerCase();
	const matches = [];

	for (const item of source) {
		const index = textual(item).toLowerCase().indexOf(qry);

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

export const normalize = <I>(source: I[] | false | null) => {
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
