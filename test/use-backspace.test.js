import { useBackspace } from '../lib/use-backspace';
import { component } from 'haunted';
import {
	assert, html, fixture
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define('use-backspace', component(useBackspace));

suite('use-backspace', () => {
	test('handles Backspace key ', async () => {
		const onChange = spy();
		await fixture(html`
			<use-backspace
				.onChange=${ onChange }
				.active=${ true }
				.value=${ ['1'] }
			></use-backspace>`);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
		assert.isTrue(onChange.calledOnce);
	});

	test('handles basic keys', async () => {
		const onChange = spy();
		await fixture(html`
			<use-backspace
				.limit=${ 1 }
				.onChange=${ onChange }
				.active=${ true }
				.value=${ ['1'] }
			></use-backspace>`);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
		assert.isTrue(onChange.calledOnce);
	});
});
