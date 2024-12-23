import { component } from '@pionjs/pion';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';
import { spy, match as sinonMatch } from 'sinon';
import { useAutocomplete } from '../src/autocomplete/use-autocomplete';

customElements.define(
	'use-autocomplete',
	component((host) => {
		host.current = useAutocomplete(host);
	}),
);

describe('use-autocomplete', () => {
	it('init', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
				/>
			`);

		expect(result.current.query).to.equal('It');
		expect(result.current.items).to.be.empty;
	});

	it('focus', async () => {
		const onFocus = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(
				html` <use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
					.onFocus=${onFocus}
				/>`,
			);

		expect(result.current.items).to.be.empty;
		result.current.onFocus({ currentTarget: { matches: () => true } });
		await nextFrame();
		expect(result.current.items).not.to.be.empty;
		expect(onFocus).to.have.been.calledOnceWith(true);
	});

	it('edit', async () => {
		const onText = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(
				html` <use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
					.onText=${onText}
				/>`,
			);
		onText.resetHistory();
		result.current.onText({ target: { value: 'ite' } });
		await nextFrame();
		expect(onText).to.have.been.calledOnceWith('ite');
	});

	it('select', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(
				html` <use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
					.onText=${onText}
					.onChange=${onChange}
				/>`,
			);
		onText.resetHistory();

		result.current.onSelect(source[1]);
		await nextFrame();
		expect(onText).to.have.been.calledOnceWith('');
		expect(onChange).to.have.been.calledOnceWith(source);
	});

	it('onSelect', async () => {
		const onSelect = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(
				html` <use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
					.onSelect=${onSelect}
				/>`,
			);

		result.current.onSelect(source[1]);
		await nextFrame();
		expect(onSelect).to.have.been.calledOnceWith(source[1], sinonMatch.object);
	});

	it('deselect', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(
				html` <use-autocomplete
					.source=${source}
					.value=${source[0]}
					.text=${'It'}
					.textProperty=${'text'}
					.onText=${onText}
					.onChange=${onChange}
				/>`,
			);
		onText.resetHistory();
		result.current.onDeselect(source[0]);
		await nextFrame();
		expect(onChange).to.have.been.calledOnceWith([]);
	});

	it('external', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete
					.source=${source}
					.text=${'1'}
					.textProperty=${'text'}
					.external=${true}
				/>
			`);
		expect(result.current.query).to.equal('1');
		result.current.onFocus({ currentTarget: { matches: () => true } });
		await nextFrame();

		expect(result.current.items).to.have.lengthOf(1);
	});

	it('valueProperty', async () => {
		const source = [
				{ id: 1, text: 'Item 1' },
				{ id: 2, text: 'Item 2' },
			],
			result = await fixture(html`
				<use-autocomplete
					.source=${source}
					.value=${{ id: 1, text: 'Item 1' }}
					.text=${'It'}
					.textProperty=${'text'}
					.valueProperty=${'id'}
				/>
			`);

		result.current.onFocus({ currentTarget: { matches: () => true } });
		await nextFrame();

		expect(result.current.items).to.be.deep.equal(source);
	});
});
