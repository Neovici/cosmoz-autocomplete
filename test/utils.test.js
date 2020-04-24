import { assert } from '@open-wc/testing';
import { search } from '../lib/utils';

suite('utils', () => {
	suite('search', () => {
		test('search', () => {
			assert.deepEqual(
				search(
					[{ text: 'abc' }, { text: 'bc' }, { text: 'ad' }],
					'bc',
					({ text }) => text
				),
				[{ text: 'bc' }, { text: 'abc' }]
			);
		});
	});
});
