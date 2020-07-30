import { assert } from '@open-wc/testing';
import {
	search,
	strProp,
	mark
} from '../lib/utils';

suite('utils', () => {
	suite('search', () => {
		test('search', () => {
			assert.deepEqual(
				search(
					[{ text: 'abc' }, { text: 'bc' }, { text: 'ad' }, {}],
					'bc',
					strProp('text')
				),
				[{ text: 'bc' }, { text: 'abc' }]
			);
		});
	});
	suite('mark', () => {
		test('handles RegExp chars', () => {
			assert.equal(mark('asd', '[q'), 'asd');
			assert.equal(mark('txt', '[=?'), 'txt');
		});
		test('marks RegExp chars', () => {
			const marked = mark('txt[qasd', '[q');
			assert.lengthOf(marked, 3);
			assert.equal(marked[0], 'txt');
			assert.equal(marked[2], 'asd');
		});
	});
});
