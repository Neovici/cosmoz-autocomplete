import '../cosmoz-suggestions';
import {
	assert, html, fixture, nextFrame, waitUntil
} from '@open-wc/testing';
import { spy } from 'sinon';

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

		await waitUntil(() => el.shadowRoot.querySelector('paper-item'), 'Renders items');
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

	test('render', async () => {
		const onSelect = spy(),
			items = Array(10)
				.fill()
				.map((_, i) => ({ textProp: `item ${i}` })),
			el = await fixture(
				html`
					<cosmoz-suggestions
						.items=${items}
						.onSelect=${onSelect}
						.textProperty=${'textProp'}
					/>
				`
			);

		await nextFrame();
		await nextFrame();
		assert.equal(el.shadowRoot.querySelector('paper-item').innerText, 'item 0');
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
		await waitUntil(() => el.shadowRoot.querySelector('paper-item'), 'Renders items');

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

		await nextFrame();
		await nextFrame();

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
