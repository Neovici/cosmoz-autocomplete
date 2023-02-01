import '../cosmoz-autocomplete';
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
		expect(el).shadowDom.to.equal(`
			<cosmoz-input
				id="input" autocomplete="off" part="input"
				exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				<div class="badge" part="badge" slot="suffix">2
					<span class="badge-clear" part="chip-clear"></span>
				</div>
			</cosmoz-input>`);
	});

	it('render multiple', async () => {
		const el = await fixture(html`
				<cosmoz-autocomplete-ui
					.source=${source}
					.value=${source.slice(0, 2)}
					.textProperty=${'text'}
					show-multiple-selections
				/>
			`);
		expect(el).shadowDom.to.equal(`
			<cosmoz-input
				id="input" autocomplete="off" part="input"
				exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				<div class="badge-cointainer" slot="suffix">
						<div class="badge" part="badge">Item 1
							<span class="badge-clear" part="chip-clear"></span>
						</div>
						<div class="badge" part="badge">Item 2
							<span class="badge-clear" part="chip-clear"></span>
						</div>
				</div>

			</cosmoz-input>`);
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
		expect(el).shadowDom.to.equal(`
		<cosmoz-input
			id="input" part="input" readonly="" always-float-label="" autocomplete="off"
			exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
		>
			<slot name="prefix" slot="prefix"></slot>
			<slot name="suffix" slot="suffix"></slot>
			<div class="chip" part="chip" slot="suffix" title="Item 1" data-one>
				<span class="chip-text" part="chip-text">Item 1</span>
				<span class="chip-clear" part="chip-clear"></span>
			</div>
		</cosmoz-input>`);
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
		expect(el).shadowDom.to.equal(`
			<cosmoz-input
				id="input" part="input" autocomplete="off"
				exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				<div class="chip" part="chip" slot="suffix" title="Item 1">
					<span class="chip-text" part="chip-text">Item 1</span>
					<span class="chip-clear" part="chip-clear"></span>
				</div>
			</cosmoz-input>
			<disconnect-observer></disconnect-observer>`);
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
		expect(el).shadowDom.to.equal(`
			<cosmoz-input
				id="input" part="input" autocomplete="off"
				exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>

				<div class="chip" part="chip" slot="suffix" title="Item 1">
					<span class="chip-text" part="chip-text">Item 1</span>
					<span class="chip-clear" part="chip-clear"></span>
				</div>
			</cosmoz-input>`);
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
		el.shadowRoot.querySelector('.chip-clear').click();
		await nextFrame();
		await nextFrame();
		expect(el).shadowDom.to.equal(`
			<cosmoz-input
				id="input" part="input" autocomplete="off"
				exportparts="input: input-input,label: input-label,line: input-line,error: input-error"
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
			</cosmoz-input>`);
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
		expect(el.shadowRoot.querySelector('.chip-text').innerText).to.equal('Item 2');
	});
});
