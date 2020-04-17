import { useKeyboard } from '../lib/use-keyboard';
import { component } from 'haunted';
import {
	assert, html, fixture
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define('use-keyboard', component(useKeyboard));

suite('use-keyboard', () => {
	suite('onUp', () => {
		test('handles Up key ', async () => {
			const onUp = spy();
			await fixture(
				html`
					<use-keyboard .onUp=${onUp} />
				`
			);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Up' }));
			assert.isTrue(onUp.calledOnce);
		});

		test('handles ArrowUp key ', async () => {
			const onUp = spy();
			await fixture(
				html`
					<use-keyboard .onUp=${onUp} />
				`
			);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
			assert.isTrue(onUp.calledOnce);
		});
	});

	suite('onDown', () => {
		test('handles Down key ', async () => {
			const onDown = spy();
			await fixture(
				html`
					<use-keyboard .onDown=${onDown} />
				`
			);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
			assert.isTrue(onDown.calledOnce);
		});

		test('handles ArrowDown key ', async () => {
			const onDown = spy();
			await fixture(
				html`
					<use-keyboard .onDown=${onDown} />
				`
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'ArrowDown' })
			);
			assert.isTrue(onDown.calledOnce);
		});
	});

	suite('onEnter', () => {
		test('handles Enter key ', async () => {
			const onEnter = spy();
			await fixture(
				html`
					<use-keyboard .onEnter=${onEnter} />
				`
			);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
			assert.isTrue(onEnter.calledOnce);
		});
	});

	suite('unhandled', () => {
		test('ctrl & alt', async () => {
			const onUp = spy(),
				onDown = spy(),
				onEnter = spy();
			await fixture(
				html`
					<use-keyboard .onUp=${onUp} .onDown=${onDown} .onEnter=${onEnter} />
				`
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Up',
					ctrlKey: true,
					altKey: true
				})
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Down',
					ctrlKey: true,
					altKey: true
				})
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Enter',
					ctrlKey: true,
					altKey: true
				})
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'unhandled'
				})
			);

			assert.isFalse(onUp.calledOnce);
			assert.isFalse(onDown.calledOnce);
			assert.isFalse(onEnter.calledOnce);
		});
	});
});
