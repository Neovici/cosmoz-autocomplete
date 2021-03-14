import { useSuggestions } from '../lib/use-suggestions';

import { component } from 'haunted';
import {
	expect, html, fixture, nextFrame
} from '@open-wc/testing';
import { spy } from 'sinon';

customElements.define(
	'use-suggestions',
	component(host => {
		host.current = useSuggestions(host);
	})
);

describe('use-suggestions', () => {
	it('down', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		expect(result.current.index).to.equal(0);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();
		expect(result.current.index).to.equal(1);
	});

	it('down(cycle)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		result.current.highlight(2);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Down' }));
		await nextFrame();
		expect(result.current.index).to.equal(0);
	});


	it('up', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		result.current.highlight(1);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
		await nextFrame();
		expect(result.current.index).to.equal(0);
	});

	it('up (cycle)', async () => {
		const result = await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } />
			`
		);
		expect(result.current.index).to.equal(0);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
		await nextFrame();
		expect(result.current.index).to.equal(2);
	});

	it('highlight', async () => {
		const items = [0, 1, 2],
			result = await fixture(
				html`
					<use-suggestions .items=${ items } />
				`
			);
		expect(result.current.index).to.equal(0);
		result.current.highlight(1);
		await nextFrame();
		expect(result.current.index).to.equal(1);
	});

	it('select', async () => {
		const items = [0, 1, 2],
			onSelect = spy(),
			result = await fixture(
				html`
					<use-suggestions .items=${ items } .onSelect=${ onSelect } />
				`
			);
		result.current.select(items[1]);
		expect(onSelect).to.have.been.calledOnceWith(items[1]);
	});

	it('enter (no selection)', async () => {
		const onSelect = spy();
		await fixture(
			html`
				<use-suggestions .items=${ [0, 1, 2] } .onSelect=${ onSelect } />
			`
		);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(onSelect).to.have.been.calledOnceWith(0);
	});

	it('enter', async () => {
		const onSelect = spy(),
			result = await fixture(
				html`
					<use-suggestions .items=${ [0, 1, 2] } .onSelect=${ onSelect } />
				`
			);
		result.current.highlight(1);
		await nextFrame();
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		expect(onSelect).to.have.been.calledOnceWith(1);
	});
});
