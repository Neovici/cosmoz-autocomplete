import { expect } from '@open-wc/testing';
import {
	search,
	strProp,
	mark
} from '../lib/utils';

describe('utils', () => {
	describe('search', () => {
		it('search', () => {
			expect(search(
				[{ text: 'abc' }, { text: 'bc' }, { text: 'ad' }, {}],
				'bc',
				strProp('text')
			)).to.deep.equal([{ text: 'bc' }, { text: 'abc' }]);
		});
	});
	describe('mark', () => {
		it('handles RegExp chars', () => {
			expect(mark('asd', '[q')).to.equal('asd');
			expect(mark('txt', '[=?')).to.equal('txt');
		});
		it('marks RegExp chars', () => {
			const marked = mark('txt[qasd', '[q');
			expect(marked).to.have.lengthOf(3);
			expect(marked[0]).to.equal('txt');
			expect(marked[2]).to.equal('asd');
		});
	});
});
