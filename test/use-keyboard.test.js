import { component } from '@pionjs/pion';
import { expect, html, fixture } from '@open-wc/testing';
import { spy } from 'sinon';
import { useKeyboard } from '../src/listbox/use-keyboard';

customElements.define('use-keyboard', component(useKeyboard));

describe('use-keyboard', () => {
	describe('onUp', () => {
		it('handles Up key ', async () => {
			const onUp = spy();
			await fixture(html` <use-keyboard .onUp=${onUp} /> `);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Up' }));
			expect(onUp).to.have.been.calledOnce;
		});

		it('handles ArrowUp key ', async () => {
			const onUp = spy();
			await fixture(html` <use-keyboard .onUp=${onUp} /> `);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
			expect(onUp).to.have.been.calledOnce;
		});
	});

	describe('onDown', () => {
		it('handles Down key ', async () => {
			const onDown = spy();
			await fixture(html` <use-keyboard .onDown=${onDown} /> `);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
			expect(onDown).to.have.been.calledOnce;
		});

		it('handles ArrowDown key ', async () => {
			const onDown = spy();
			await fixture(html` <use-keyboard .onDown=${onDown} /> `);
			document.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'ArrowDown' }),
			);
			expect(onDown).to.have.been.calledOnce;
		});
	});

	describe('onEnter', () => {
		it('handles Enter key ', async () => {
			const onEnter = spy();
			await fixture(html` <use-keyboard .onEnter=${onEnter} /> `);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
			expect(onEnter).to.have.been.calledOnce;
		});
	});

	describe('unhandled', () => {
		it('ctrl & alt', async () => {
			const onUp = spy(),
				onDown = spy(),
				onEnter = spy();
			await fixture(html`
				<use-keyboard .onUp=${onUp} .onDown=${onDown} .onEnter=${onEnter} />
			`);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Up',
					ctrlKey: true,
					altKey: true,
				}),
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Down',
					ctrlKey: true,
					altKey: true,
				}),
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Enter',
					ctrlKey: true,
					altKey: true,
				}),
			);
			document.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'unhandled',
				}),
			);

			expect(onUp).not.to.have.been.called;
			expect(onDown).not.to.have.been.called;
			expect(onEnter).not.to.have.been.called;
		});
	});
});
