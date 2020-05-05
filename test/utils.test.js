import { assert } from '@open-wc/testing';
import {
	array,
	unarray,
	without,
	search,
	prop,
	identity
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
					({ text }) => text
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
		test('unarray', () => {
			assert.equal(unarray(empty), empty);
			assert.equal(unarray([obj]), obj);
		});
		test('without', () => {
			assert.lengthOf(without(obj)(obj), 0);
			assert.lengthOf(without([1])([obj, 1]), 1);
		});
	});
});
