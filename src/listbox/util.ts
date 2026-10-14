import { array } from '@neovici/cosmoz-utils/array';
import { Rec } from '@neovici/cosmoz-utils/object';
import { html } from 'lit-html';
import { removeAccents } from '../autocomplete/util';

export const byValue = <K extends PropertyKey | undefined, T>(
	value: T | T[],
	valueProperty: K,
) => {
	if (!valueProperty) {
		return (item: T) => item != null && array(value).includes(item);
	}
	return (item: T) =>
		item != null &&
		array(value).find(
			(value) =>
				(value as Rec<NonNullable<K>>)[valueProperty] ===
				(item as Rec<NonNullable<K>>)[valueProperty],
		);
};
/**
 * Marks the first match of `query` in `text` the way `search` finds it: case-
 * and accent-insensitive, mapped back onto the original characters.
 */
export const mark = (text: string, query: string | undefined) => {
	const q = query && removeAccents(query.toLowerCase());
	if (!q || !text) {
		return text;
	}
	const folded = text.split('').map((c) => removeAccents(c.toLowerCase())),
		origin = folded.flatMap((f, i) => f.split('').map(() => i)),
		at = folded.join('').indexOf(q);
	if (at < 0) {
		return text;
	}
	const start = origin[at];
	let end = origin[at + q.length - 1] + 1;
	// Include trailing combining marks, which fold to nothing.
	while (end < text.length && !folded[end]) end++;
	return [
		text.slice(0, start),
		html`<mark>${text.slice(start, end)}</mark>`,
		text.slice(end),
	];
};
