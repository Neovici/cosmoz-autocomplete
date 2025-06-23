import { component } from '@pionjs/pion';
import { expect, html, fixture } from '@open-wc/testing';
import { spy } from 'sinon';
import { useKeys } from '../src/autocomplete/use-keys';

customElements.define('use-backspace', component(useKeys));

describe('use-backspace', () => {
	it('handles Backspace key ', async () => {
		const onChange = spy();
		await fixture(
			html` <use-backspace
				.onChange=${onChange}
				.focused=${true}
				.empty=${true}
				.value=${['1']}
			></use-backspace>`,
		);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
		expect(onChange).to.have.been.calledOnce;
	});

	it('handles basic keys', async () => {
		const onChange = spy();
		await fixture(
			html` <use-backspace
				.limit=${1}
				.onChange=${onChange}
				.focused=${true}
				.empty=${true}
				.value=${['1']}
			></use-backspace>`,
		);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
		expect(onChange).to.have.been.calledOnce;
	});
});
