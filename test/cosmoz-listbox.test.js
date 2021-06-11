import '../cosmoz-listbox';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';
import { prop } from '../lib/utils';
import { spy } from 'sinon';

const someFrames = async () => {
	await nextFrame();
	await nextFrame();
	await nextFrame();
};

describe('cosmoz-listbox', () => {
	it('render', async () => {
		const onSelect = spy(),
			items = Array(10).fill().map((_, i) => `item ${ i }`),
			el = await fixture(html`<cosmoz-listbox .items=${ items } .onSelect=${ onSelect }></cosmoz-listbox>`);
		await someFrames();
		expect(el.shadowRoot.querySelector('.item').innerText).to.equal('item 0');

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
			items = Array(10).fill().map((_, i) => ({ text: `item ${ i }` })),
			el = await fixture(html`<cosmoz-listbox .items=${ items } .onSelect=${ onSelect } .textual=${ prop('text') }></cosmoz-listbox>`);

		await someFrames();
		expect(el.shadowRoot.querySelector('.item').innerText).to.equal('item 0');
	});

	it('render (query)', async () => {
		const onSelect = spy(),
			items = Array(10).fill().map((_, i) => ({ textProp: `item ${ i }` })),
			el = await fixture(html`<cosmoz-listbox .items=${ items } .onSelect=${ onSelect } .textual=${ prop('textProp') }
				.query=${ '1' }></cosmoz-listbox>`);

		await someFrames();
		expect(el.shadowRoot.querySelector('.item mark').innerText).to.equal('1');
	});

	it('highlight and enter', async () => {
		const onSelect = spy(),
			items = Array(10).fill().map((_, i) => `item ${ i }`),
			el = await fixture(html`<cosmoz-listbox .items=${ items } .onSelect=${ onSelect }></cosmoz-listbox>`);

		await someFrames();

		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('mouseenter'));

		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(onSelect).to.have.been.calledOnceWith(items[3]);
	});

	it('mousedown, click', async () => {
		const onSelect = spy(),
			items = Array(10).fill().map((_, i) => `item ${ i }`),
			el = await fixture(html`<cosmoz-listbox .items=${ items } .onSelect=${ onSelect }></cosmoz-listbox>`);

		await someFrames();

		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('mousedown'));
		el.shadowRoot
			.querySelector('.item[data-index="3"]')
			.dispatchEvent(new MouseEvent('click'));
		expect(onSelect).to.have.been.calledOnceWith(items[3]);
	});
});
