import '../cosmoz-suggestions';
import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';
import { prop } from '../lib/utils';
import { spy } from 'sinon';

const someFrames = async () => {
	await nextFrame();
	await nextFrame();
	await nextFrame();
};

suite('cosmoz-suggestions', () => {
	test('render', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`
					<cosmoz-suggestions .items=${items} .onSelect=${onSelect} />
				`
			);
		await someFrames();
		assert.equal(el.shadowRoot.querySelector('paper-item').innerText, 'item 0');

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		assert.isTrue(onSelect.calledOnce);
		assert.isTrue(onSelect.calledWith(items[2]));
	});

	test('render (textual)', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => ({ text: `item ${i}` })),
			el = await fixture(
				html`
					<cosmoz-suggestions
						.items=${items}
						.onSelect=${onSelect}
						.textual=${prop('text')}
					/>
				`
			);

		await someFrames();
		assert.equal(el.shadowRoot.querySelector('paper-item').innerText, 'item 0');
	});

	test('render (query)', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => ({ textProp: `item ${i}` })),
			el = await fixture(
				html`
					<cosmoz-suggestions
						.query=${'1'}
						.items=${items}
						.onSelect=${onSelect}
						.textual=${prop('textProp')}
					/>
				`
			);

		await someFrames();
		assert.equal(el.shadowRoot.querySelector('paper-item mark').innerText, '1');
	});

	test('highlight and enter', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`
					<cosmoz-suggestions .items=${items} .onSelect=${onSelect} />
				`
			);

		await someFrames();

		el.shadowRoot
			.querySelector('paper-item:nth-of-type(4)')
			.dispatchEvent(new MouseEvent('mouseenter'));

		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

		assert.isTrue(onSelect.calledOnce);
		assert.isTrue(onSelect.calledWith(items[3]));
	});

	test('mousedown, click', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => `item ${i}`),
			el = await fixture(
				html`
					<cosmoz-suggestions .items=${items} .onSelect=${onSelect} />
				`
			);

		await someFrames();

		el.shadowRoot
			.querySelector('paper-item:nth-of-type(4)')
			.dispatchEvent(new MouseEvent('mousedown'));
		el.shadowRoot
			.querySelector('paper-item:nth-of-type(4)')
			.dispatchEvent(new MouseEvent('click'));

		assert.isTrue(onSelect.calledOnce);
		assert.isTrue(onSelect.calledWith(items[3]));
	});
});
