import { useKeys } from '../lib/use-keys';
import { component } from 'haunted';
import {
	assert, html, fixture
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define('use-backspace', component(useKeys));

suite('use-backspace', () => {
	test('handles Backspace key ', async () => {
		const onChange = spy();
		await fixture(html`
			<use-backspace
				.onChange=${ onChange }
				.active=${ true }
				.empty=${ true }
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
				.empty=${ true }
				.value=${ ['1'] }
			></use-backspace>`);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
		assert.isTrue(onChange.calledOnce);
	});
});
