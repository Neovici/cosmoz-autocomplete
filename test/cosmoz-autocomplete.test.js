import '../src/autocomplete';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';

import { spy } from 'sinon';

before(() => {
	const e = window.onerror;
	window.onerror = function (err) {
		if (err.startsWith('ResizeObserver loop')) {
			// eslint-disable-next-line no-console
			console.warn(`[ignored] ${err}`);
			return false;
		}
		return e(...arguments);
	};
});

const source = [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }];
describe('cosmoz-autocomplete-ui', () => {
	it('render', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
					.source=${source}
					.value=${source.slice(0, 2)}
					.text=${'It'}
					.textProperty=${'text'}
				/>
			`),
			input = el.shadowRoot.querySelector('cosmoz-input');
		expect(input).to.include({
			value: 'It',
		});
		await expect(el).shadowDom.to.equalSnapshot();
	});

	it('render (limit 1)', async () => {
		const el = await fixture(html`
			<cosmoz-autocomplete-ui
				.source=${source}
				.value=${source[0]}
				.text=${'It'}
				.textProperty=${'text'}
				.limit=${1}
			/>
		`);
		expect(el).shadowDom.to.equalSnapshot();
	});

	it('render (listbox)', async () => {
		const el = await fixture(html`
			<cosmoz-autocomplete-ui
				.source=${source}
				.value=${source[0]}
				.text=${'It'}
				.textProperty=${'text'}
			/>
		`);
		el.shadowRoot.querySelector('cosmoz-input').focus();
		await nextFrame();
		await nextFrame();
		expect(el).shadowDom.to.equalSnapshot();
		document.activeElement.blur();
	});
});

describe('cosmoz-autocomplete', () => {
	it('render', async () => {
		const el = await fixture(html`
			<cosmoz-autocomplete
				.source=${source}
				.value=${source[0]}
				.textProperty=${'text'}
			/>
		`);
		expect(el).shadowDom.to.equalSnapshot();
	});

	it('render (deselect)', async () => {
		const el = await fixture(html`
			<cosmoz-autocomplete
				.source=${source}
				.value=${source[0]}
				.text=${'It'}
				.textProperty=${'text'}
				.limit=${1}
			/>
		`);
		await nextFrame();
		el.shadowRoot
			.querySelector('.chip')
			.shadowRoot.querySelector('.clear')
			.click();
		await nextFrame();
		await nextFrame();
		expect(el).shadowDom.to.equalSnapshot();
	});

	it('onChange', async () => {
		const onChange = spy(),
			el = await fixture(html`
				<cosmoz-autocomplete
					.source=${source}
					.value=${source[0]}
					.textProperty=${'text'}
					.onChange=${onChange}
				/>
			`);
		el.shadowRoot.querySelector('cosmoz-input').focus();
		await nextFrame();
		await nextFrame();
		document.body.querySelector('cosmoz-listbox').onSelect(source[1]);
		expect(onChange).to.have.been.calledOnceWith([source[0], source[1]]);
	});

	it('effects', async () => {
		const el = await fixture(html` <cosmoz-autocomplete
			.source=${source}
			.value=${source[0]}
			.textProperty=${'text'}
			.text=${'it'}
		/>`);

		el.text = 'asd';
		el.value = [source[1]];

		await nextFrame();
		await nextFrame();

		expect(el.shadowRoot.querySelector('cosmoz-input').value).to.equal('asd');
		expect(el.shadowRoot.querySelector('.chip').innerText).to.equal('Item 2');
	});
});
