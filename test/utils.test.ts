import { strProp } from '@neovici/cosmoz-utils/object';
import { describe, expect, it } from 'vitest';
import { search } from '../src/autocomplete/pure';
import { mark } from '../src/listbox/util';

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
