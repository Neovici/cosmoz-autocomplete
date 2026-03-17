import { strProp } from '@neovici/cosmoz-utils/object';
import { describe, expect, it } from 'vitest';
import { search } from '../src/autocomplete/util';
import { byValue, mark } from '../src/listbox/util';

describe('search', () => {
	const textual = strProp('text');

	it('filters items by query', () => {
		const items = [{ text: 'abc' }, { text: 'bc' }, { text: 'ad' }, {}];
		const result = search(items, 'bc', textual);
		expect(result).toEqual([{ text: 'bc' }, { text: 'abc' }]);
	});

	it('sorts by match position (prefix matches first)', () => {
		const items = [{ text: 'abc' }, { text: 'bc' }, { text: 'xbc' }];
		const result = search(items, 'bc', textual);
		// 'bc' matches at index 0, 'abc' at index 1, 'xbc' at index 1
		expect(result[0]).toEqual({ text: 'bc' });
	});

	it('returns all items when query is empty', () => {
		const items = [{ text: 'a' }, { text: 'b' }];
		expect(search(items, '', textual)).toEqual(items);
		expect(search(items, undefined, textual)).toEqual(items);
	});

	it('is accent-insensitive', () => {
		const items = [{ text: 'café' }, { text: 'cafe' }, { text: 'other' }];
		const result = search(items, 'cafe', textual);
		expect(result).toHaveLength(2);
		expect(result).toContainEqual({ text: 'café' });
		expect(result).toContainEqual({ text: 'cafe' });
	});

	it('handles accented query matching non-accented text', () => {
		const items = [{ text: 'cafe' }, { text: 'other' }];
		const result = search(items, 'café', textual);
		expect(result).toHaveLength(1);
		expect(result[0]).toEqual({ text: 'cafe' });
	});
});

describe('mark', () => {
	it('handles RegExp special chars without crashing', () => {
		expect(mark('asd', '[q')).toBe('asd');
		expect(mark('txt', '[=?')).toBe('txt');
	});

	it('marks RegExp special chars in text', () => {
		const result = mark('txt[qasd', '[q');
		expect(result).toHaveLength(3);
		expect(result[0]).toBe('txt');
		expect(result[2]).toBe('asd');
	});

	it('marks matching text with mark element', () => {
		const result = mark('hello world', 'wor');
		expect(result).toHaveLength(3);
		expect(result[0]).toBe('hello ');
		expect(result[2]).toBe('ld');
	});

	it('returns original text when no match', () => {
		expect(mark('hello', 'xyz')).toBe('hello');
	});

	it('returns original text when query is empty', () => {
		expect(mark('hello', '')).toBe('hello');
		expect(mark('hello', undefined)).toBe('hello');
	});

	it('returns original text when text is empty', () => {
		expect(mark('', 'query')).toBe('');
	});
});

describe('byValue', () => {
	describe('without valueProperty', () => {
		it('returns truthy when item is in value array', () => {
			const item1 = { id: 1 };
			const item2 = { id: 2 };
			const isSelected = byValue([item1, item2], undefined);
			expect(isSelected(item1)).toBeTruthy();
			expect(isSelected(item2)).toBeTruthy();
		});

		it('returns falsy when item is not in value array', () => {
			const isSelected = byValue([{ id: 1 }], undefined);
			expect(isSelected({ id: 2 })).toBeFalsy();
		});

		it('returns false for null item', () => {
			const isSelected = byValue([{ id: 1 }], undefined);
			// @ts-expect-error - testing runtime behavior with null
			expect(isSelected(null)).toBe(false);
		});

		it('returns false for undefined item', () => {
			const isSelected = byValue([{ id: 1 }], undefined);
			// @ts-expect-error - testing runtime behavior with undefined
			expect(isSelected(undefined)).toBe(false);
		});
	});

	describe('with valueProperty', () => {
		it('returns truthy when item matches by valueProperty', () => {
			const isSelected = byValue([{ name: 'a' }, { name: 'b' }], 'name');
			expect(isSelected({ name: 'a' })).toBeTruthy();
			expect(isSelected({ name: 'b' })).toBeTruthy();
		});

		it('returns falsy when item does not match', () => {
			const isSelected = byValue([{ name: 'a' }], 'name');
			expect(isSelected({ name: 'x' })).toBeFalsy();
		});

		it('returns false for null item', () => {
			const isSelected = byValue([{ name: 'a' }], 'name');
			// @ts-expect-error - testing runtime behavior with null
			expect(isSelected(null)).toBe(false);
		});

		it('returns false for undefined item', () => {
			const isSelected = byValue([{ name: 'a' }], 'name');
			// @ts-expect-error - testing runtime behavior with undefined
			expect(isSelected(undefined)).toBe(false);
		});

		it('handles lit-virtualizer passing null during render cycle', () => {
			const isSelected = byValue([{ id: 1, name: 'test' }], 'id');
			// This is the actual bug scenario - lit-virtualizer passes null
			// @ts-expect-error - testing runtime behavior with null
			expect(() => isSelected(null)).not.toThrow();
			// @ts-expect-error - testing runtime behavior with null
			expect(isSelected(null)).toBe(false);
		});
	});
});
