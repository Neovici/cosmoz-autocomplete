import { html } from 'lit-html';
import { array } from '@neovici/cosmoz-utils/array';
import { Rec } from '@neovici/cosmoz-utils/object';

export const byValue = <K extends PropertyKey | undefined, T>(
	value: T | T[],
	valueProperty: K,
) => {
	if (!valueProperty) {
		return (item: T) => array(value).includes(item);
	}
	return (item: T) =>
		array(value).find(
			(value) =>
				(value as Rec<NonNullable<K>>)[valueProperty] ===
				(item as Rec<NonNullable<K>>)[valueProperty],
		);
};
export const mark = (text: string, query: string) => {
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
		html`<mark>${text.slice(i, end)}</mark>`,
		text.slice(end),
	];
};