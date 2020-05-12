import { assert } from '@open-wc/testing';
import {
	array,
	without,
	search,
	prop,
	strProp,
	identity,
	mark
} from '../lib/utils';

suite('utils', () => {
	const empty = [],
		obj = {};
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
	suite('prop', () => {
		test('prop', () => {
			assert.equal(prop('b')({ b: 2 }), 2);
			assert.isUndefined(prop('b')({ c: 4 }));
		});
		test('identity', () => {
			assert.equal(prop(''), identity);
		});
	});

	suite('array', () => {
		test('array', () => {
			assert.equal(array(empty), empty);
			assert.equal(array(obj)[0], obj);
			assert.lengthOf(array(), 0);
		});
		test('without', () => {
			assert.lengthOf(without(obj)(obj), 0);
			assert.lengthOf(without([1])([obj, 1]), 1);
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
