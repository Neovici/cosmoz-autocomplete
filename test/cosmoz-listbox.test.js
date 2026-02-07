import { prop } from '@neovici/cosmoz-utils/object';
import { expect, fixture, html, nextFrame, oneEvent } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/listbox';

const ready = async (el) => {
	await oneEvent(el, 'layout-complete');
	await nextFrame();
};

describe('cosmoz-listbox', () => {
	// TODO: These tests are skipped because useKeyboard now uses useActivity() from
	// @neovici/cosmoz-utils/keybindings which requires a keybindings context provider.
	// Keyboard behavior is tested through cosmoz-autocomplete.test.js integration tests.
	it.skip('render', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`<cosmoz-listbox
					.items=${items}
					.onSelect=${onSelect}
				></cosmoz-listbox>`,
			);

		await ready(el);

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(onSelect).to.have.been.calledOnceWith;
	});

	it('render (textual)', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => ({ text: `item ${i}` })),
			el = await fixture(
				html`<cosmoz-listbox
					.items=${items}
					.onSelect=${onSelect}
					.textual=${prop('text')}
				></cosmoz-listbox>`,
			);

		await ready(el);

		expect(el.shadowRoot.querySelector('.item').innerText).to.equal('item 0');
	});

	it('render (query)', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => ({ textProp: `item ${i}` })),
			el = await fixture(
				html`<cosmoz-listbox
					.items=${items}
					.onSelect=${onSelect}
					.textual=${prop('textProp')}
					.query=${'1'}
				></cosmoz-listbox>`,
			);

		await ready(el);

		expect(el.shadowRoot.querySelector('.item mark').innerText).to.equal('1');
	});

	// TODO: Skipped - requires keybindings context for keyboard navigation
	it.skip('highlight and enter', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`<cosmoz-listbox
					.items=${items}
					.onSelect=${onSelect}
				></cosmoz-listbox>`,
			);

		await ready(el);

		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('mouseenter'));

		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(onSelect).to.have.been.calledOnceWith(items[3]);
	});

	it('mousedown, click', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`<cosmoz-listbox
					.items=${items}
					.onSelect=${onSelect}
				></cosmoz-listbox>`,
			);

		await ready(el);

		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('mousedown'));
		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('click'));
		expect(onSelect).to.have.been.calledOnceWith(items[3]);
	});
});
