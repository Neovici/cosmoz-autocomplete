import '../cosmoz-autocomplete';
import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';

import { spy } from 'sinon';

const source = [{ text: 'Item 1' }, { text: 'Item 2' }];

suite('cosmoz-autocomplete-ui', () => {
	test('render', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
				.source=${ source } .value=${ source[0] }
				.text=${ 'It' } .textProperty=${ 'text' }
				/>
			`);
		assert.shadowDom.equalSnapshot(el);
	});

	test('render (limit 1)', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
				.source=${ source } .value=${ source[0] }
				.text=${ 'It' } .textProperty=${ 'text' }
				.limit=${ 1 }
				/>
			`);
		assert.shadowDom.equalSnapshot(el);
	});

	test('render (suggestions)', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
				.source=${ source } .value=${ source[0] }
				.text=${ 'It' } .textProperty=${ 'text' }
				/>
			`);
		el.shadowRoot.querySelector('paper-input').focus();
		await nextFrame();
		await nextFrame();
		assert.shadowDom.equalSnapshot(el);
	});

	test('render (deselect)', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
				.source=${ source } .value=${ source[0] }
				.text=${ 'It' } .textProperty=${ 'text' }
				/>
			`);
		el.shadowRoot.querySelector('.chip-clear').click();
		await nextFrame();
		assert.shadowDom.equalSnapshot(el);
	});
});

suite('cosmoz-autocomplete', () => {
	test('render', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete
				.source=${ source }
				.value=${ source[0] }
				.textProperty=${ 'text' }
				/>
			`);
		assert.shadowDom.equalSnapshot(el);
	});

	test('onChange', async () => {
		const onChange = spy(),
			el = await fixture(html`
				<cosmoz-autocomplete
				.source=${ source }
				.value=${ source[0] }
				.textProperty=${ 'text' }
				.onChange=${ onChange }
				/>
			`);
		el.shadowRoot.querySelector('paper-input').focus();
		await nextFrame();
		await nextFrame();
		el.shadowRoot.querySelector('cosmoz-suggestions').onSelect(source[1]);
		assert.isTrue(onChange.calledOnce);
		assert.isTrue(onChange.calledWith([source[0], source[1]]));
	});


	test('effects', async () => {
		const
			el = await fixture(html`
				<cosmoz-autocomplete
				.source=${ source }
				.value=${ source[0] }
				.textProperty=${ 'text' }
				.text=${ 'it' }
				/>
			`);
		el.text = 'asd';
		el.value = [source[1]];

		await nextFrame();
		await nextFrame();

		assert.equal(el.shadowRoot.querySelector('paper-input').value, 'asd');
		assert.equal(el.shadowRoot.querySelector('.chip-text').innerText, 'Item 2');
	});

});
