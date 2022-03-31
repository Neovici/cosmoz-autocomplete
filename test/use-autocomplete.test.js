import { component } from 'haunted';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';
import { spy } from 'sinon';
import { useAutocomplete } from '../lib/use-autocomplete';

customElements.define(
	'use-autocomplete',
	component(host => {
		host.current = useAutocomplete(host);
	})
);

describe('use-autocomplete', () => {
	it('init', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ source[0] } .text=${ 'It' } .textProperty=${ 'text' } />
			`);
		expect(result.current.query).to.equal('it');
		expect(await result.current.items$).to.be.empty;
	});

	it('focus', async () => {
		const onFocus = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ source[0] } .text=${ 'It' } .textProperty=${ 'text' }
					.onFocus=${ onFocus } />`);

		expect(await result.current.items$).to.be.empty;
		result.current.onFocus({ currentTarget: { matches: () => true }});
		await nextFrame();
		expect(await result.current.items$).not.to.be.empty;
		expect(onFocus).to.have.been.calledOnceWith(true);
	});

	it('edit', async () => {
		const onText = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ source[0] } .text=${ 'It' } .textProperty=${ 'text' }
					.onText=${ onText } />`);
		result.current.onText({ target: { value: 'ite' }});
		await nextFrame();
		expect(onText).to.have.been.calledOnceWith('ite');
	});

	it('select', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ source[0] } .text=${ 'It' } .textProperty=${ 'text' }
					.onText=${ onText } .onChange=${ onChange } />`);

		result.current.onSelect(source[1]);
		await nextFrame();
		expect(onText).to.have.been.calledOnceWith('');
		expect(onChange).to.have.been.calledOnceWith(source);
	});

	it('deselect', async () => {
		const onText = spy(),
			onChange = spy(),
			source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ source[0] } .text=${ 'It' } .textProperty=${ 'text' }
					.onText=${ onText } .onChange=${ onChange } />`);
		result.current.onDeselect(source[0]);
		await nextFrame();
		expect(onText).not.to.have.been.calledOnce;
		expect(onChange).to.have.been.calledOnceWith([]);
	});


	it('external', async () => {
		const source = [{ text: 'Item 1' }, { text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .text=${ 'La' } .textProperty=${ 'text' } .external=${ true } />
			`);
		expect(result.current.query).to.equal('la');
		result.current.onFocus({ currentTarget: { matches: () => true }});
		await nextFrame();

		expect(await result.current.items$).to.have.lengthOf(2);
	});


	it('valueProperty', async () => {
		const source = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
			result = await fixture(html`
				<use-autocomplete .source=${ source } .value=${ { id: 1, text: 'Item 1' } } .text=${ 'It' } .textProperty=${ 'text' } .valueProperty=${ 'id' } />
			`);

		result.current.onFocus({ currentTarget: { matches: () => true }});
		await nextFrame();

		expect(await result.current.items$).to.be.deep.equal(source);
	});
});
