import { useSuggestions } from '../lib/use-suggestions';

import { component } from 'haunted';
import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define(
	'use-suggestions',
	component(function (p) {
		// eslint-disable-next-line no-invalid-this
		this.current = useSuggestions(p);
	})
);

suite('use-suggestions', () => {
	test('init', async () => {
		const items = [0, 1, 2],
			result = await fixture(
				html`
					<use-suggestions .items=${ items } />
				`
			);
		assert.equal(result.current.length, 3);
	});

	test('down', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		assert.isUndefined(result.current.index);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();
		assert.equal(result.current.index, 0);
	});

	test('down (cycle)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		result.current.highlight(2);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();
		assert.equal(result.current.index, 0);
	});

	test('down (scroll)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2, 3, 4] } />
			`
		);
		assert.isUndefined(result.current.scrollToIndex);
		result.current.rangechange({
			firstVisible: 0,
			lastVisible: 2
		});
		result.current.highlight(1);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();
		assert.deepEqual(result.current.scrollToIndex, { index: 2 });
	});

	test('up', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		result.current.highlight(1);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
		await nextFrame();
		assert.equal(result.current.index, 0);
	});

	test('up (cycle)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		assert.isUndefined(result.current.index);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
		await nextFrame();
		assert.equal(result.current.index, 2);
	});

	test('up (scroll)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2, 3, 4] } />
			`
		);
		assert.isUndefined(result.current.scrollToIndex);
		result.current.rangechange({
			firstVisible: 2,
			lastVisible: 4
		});
		result.current.highlight(2);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Up' }));
		await nextFrame();
		assert.deepEqual(result.current.scrollToIndex, {
			index: 1,
			position: 'end'
		});
	});

	test('highlight', async () => {
		const items = [0, 1, 2],
			result = await fixture(
				html`
					<use-suggestions .items=${ items } />
				`
			);
		assert.isUndefined(result.current.index);
		result.current.highlight(1);
		await nextFrame();
		assert.equal(result.current.index, 1);
	});

	test('select', async () => {
		const items = [0, 1, 2],
			onSelect = spy(),
			result = await fixture(
				html`
					<use-suggestions .items=${ items } .onSelect=${ onSelect } />
				`
			);
		result.current.select(items[1]);
		assert.isTrue(onSelect.calledOnce);
		assert.isTrue(onSelect.calledWith(items[1]));
	});

	test('rangechange', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		assert.isUndefined(result.current.range);
		result.current.rangechange({
			firstVisible: 1,
			lastVisible: 2
		});
		await nextFrame();
		assert.deepEqual(result.current.range, [1, 2]);
	});

	test('enter', async () => {
		const onSelect = spy(),
			result = await fixture(
				html`
					<use-suggestions .items=${ [0, 1, 2] } .onSelect=${ onSelect } />
				`
			);
		result.current.highlight(1);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		assert.isTrue(onSelect.calledOnce);
		assert.isTrue(onSelect.calledWith(1));
	});
});
