import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';
import { optionRenderers } from '../../src/option';

interface CostCenter {
	code: string;
	name: string;
	approver?: string;
}

const costCenters: CostCenter[] = [
	{ code: '102989', name: 'PLC Recovery', approver: 'Patrik Petersson' },
	{ code: '102997', name: 'Expense fall back', approver: 'Patrik Petersson' },
	{ code: '104989', name: 'Material overhead', approver: 'Mattias Berggren' },
	{ code: '111200', name: 'Quality assurance' },
];

const { itemRenderer, chipRenderer } = optionRenderers<CostCenter>({
	description: (c) => c.name,
	hint: (c) => (c.approver ? `Approver: ${c.approver}` : undefined),
});

interface Args {
	value?: CostCenter;
	suffix?: string;
}

const meta: Meta<Args> = {
	title: 'Tests/Option',
	tags: ['!autodocs'],
	render: ({ value, suffix }) =>
		html`<cosmoz-autocomplete
			.label=${'Cost center'}
			mode="select"
			preserve-order
			item-height="auto"
			.source=${costCenters}
			.value=${value}
			.textProperty=${'code'}
			.itemRenderer=${itemRenderer}
			.chipRenderer=${chipRenderer}
			>${suffix
				? html`<span slot="suffix">${suffix}</span>`
				: ''}</cosmoz-autocomplete
		>`,
};

export default meta;
type Story = StoryObj<Args>;

export const OptionShowsDescriptionAndHint: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas }) => {
		await userEvent.click(await canvas.findByShadowRole('textbox'));
		const option = await canvas.findByShadowRole('option', {
			name: /^104989\s*Material overhead\s*Approver: Mattias Berggren$/u,
		});
		expect(option).toBeTruthy();
		// without a hint, the option is label and description only
		await canvas.findByShadowRole('option', {
			name: /^111200\s*Quality assurance$/u,
		});
	},
};

export const SelectedOptionIsMarked: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas }) => {
		await userEvent.click(await canvas.findByShadowRole('textbox'));
		const selected = await canvas.findByShadowRole('option', {
			name: /^102997/u,
		});
		const other = await canvas.findByShadowRole('option', {
			name: /^102989/u,
		});
		expect(selected.getAttribute('aria-selected')).not.toBeNull();
		expect(other.getAttribute('aria-selected')).toBeNull();
		// the order is kept: the selected option stays second
		const options = await canvas.findAllByShadowRole('option');
		expect(options.indexOf(selected)).toBe(1);
	},
};

export const FieldShowsLabelAndDescription: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Expense fall back/u);
		const chip = canvasElement
			.querySelector('cosmoz-autocomplete')
			?.shadowRoot?.querySelector('.chip');
		await waitFor(() =>
			expect(chip?.textContent?.replace(/\s+/gu, ' ').trim()).toBe(
				'102997Expense fall back',
			),
		);
		// the hint belongs to the open list only
		expect(chip?.textContent).not.toContain('Approver');
	},
};

export const ChevronStaysNextToSuffix: Story = {
	args: { value: costCenters[1], suffix: '★' },
	play: async ({ canvasElement, canvas }) => {
		await canvas.findByShadowText('★');
		const root = canvasElement.querySelector('cosmoz-autocomplete')?.shadowRoot;
		expect(
			root?.querySelector('[slot="suffix"].chevron-selector-vertical-icon'),
		).not.toBeNull();
	},
};

interface Article {
	title: string;
	number: string;
	price: string;
	image?: string;
}

const articles: Article[] = [
	{
		title: 'Safety vest',
		number: 'A-1001',
		price: '€12.00',
		image: `data:image/svg+xml,${encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="orange"/></svg>',
		)}`,
	},
	{ title: 'Work gloves', number: 'A-2002', price: '€4.50' },
];

const catalog = optionRenderers<Article>({
	media: (a) => (a.image ? html`<img src=${a.image} alt="" />` : '#'),
	hint: (a) => a.number,
	trailing: (a) => a.price,
});

export const OptionShowsMediaAndTrailing: Story = {
	render: () =>
		html`<cosmoz-autocomplete
			.label=${'Catalog'}
			.source=${articles}
			.textProperty=${'title'}
			item-height="64"
			.itemRenderer=${catalog.itemRenderer}
		></cosmoz-autocomplete>`,
	play: async ({ canvas }) => {
		await userEvent.click(await canvas.findByShadowRole('textbox'));
		await userEvent.keyboard('vest');
		const option = await canvas.findByShadowRole('option', {
			name: /^Safety vest\s*A-1001\s*€12\.00$/u,
		});
		// the query is marked in the default label
		expect(option.querySelector('.option-label mark')?.textContent).toBe(
			'vest',
		);
		expect(option.querySelector('.option-media img')).not.toBeNull();
		// no media, no empty square
		await userEvent.keyboard('{Backspace>4/}gloves');
		const plain = await canvas.findByShadowRole('option', {
			name: /^#\s*Work gloves/u,
		});
		expect(plain.querySelector('.option-trailing')?.textContent).toBe('€4.50');
	},
};
