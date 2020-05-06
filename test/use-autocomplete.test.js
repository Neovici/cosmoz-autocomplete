import { useAutocomplete } from '../lib/use-autocomplete';

import { component } from 'haunted';
import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define(
	'use-autocomplete',
	component(function (p) {
		// eslint-disable-next-line no-invalid-this
		this.current = useAutocomplete(p);
	})
);

suite('use-autocomplete', () => {
	test('init', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .value=${source[0]} .text=${'It'} .textProperty=${'text'} />
			`);
		assert.equal(result.current.query, 'it');
		assert.isFalse(result.current.focused);
		assert.lengthOf(result.current.items, 0);
	});

	test('focus', async () => {
		const onFocus = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .value=${source[0]} .text=${'It'} .textProperty=${'text'}
					.onFocus=${onFocus} />
			`);
		assert.lengthOf(result.current.items, 0);
		result.current.onFocus({ target: { focused: true }});
		await nextFrame();
		assert.lengthOf(result.current.items, 1);
		assert.isTrue(onFocus.calledOnce);
		assert.isTrue(onFocus.calledWith(true));
	});

	test('edit', async () => {
		const onText = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .value=${source[0]} .text=${'It'} .textProperty=${'text'}
					.onText=${onText} />
			`);
		result.current.onText({ target: { value: 'ite' }});
		await nextFrame();
		assert.isTrue(onText.calledOnce);
		assert.isTrue(onText.calledWith('ite'));
	});

	test('select', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .value=${source[0]} .text=${'It'} .textProperty=${'text'}
					.onText=${onText} .onChange=${onChange} />
			`);
		result.current.onSelect(source[1]);
		await nextFrame();
		assert.isTrue(onText.calledOnce);
		assert.isTrue(onText.calledWith(''));
		assert.isTrue(onChange.calledOnce);
		assert.isTrue(onChange.calledWith(source));
	});

	test('deselect', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .value=${source[0]} .text=${'It'} .textProperty=${'text'}
					.onText=${onText} .onChange=${onChange} />
			`);
		result.current.onDeselect(source[0]);
		await nextFrame();
		assert.isFalse(onText.calledOnce);
		assert.isTrue(onChange.calledOnce);
		assert.isTrue(onChange.calledWith([]));
	});


	test('external', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${source} .text=${'la'} .textProperty=${'text'} .external=${true} />
			`);
		assert.isFalse(result.current.query);
		result.current.onFocus({ target: { focused: true }});
		await nextFrame();
		assert.lengthOf(result.current.items, 2);
	});
});
