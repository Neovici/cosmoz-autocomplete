import { html } from 'lit-html';
import { optionRenderers } from '../src/option';

export interface CostCenter {
	code: string;
	name: string;
	approver?: string;
}

export const costCenters: CostCenter[] = [
	{ code: '102989', name: 'PLC Recovery', approver: 'Patrik Petersson' },
	{ code: '102997', name: 'Expense fall back', approver: 'Patrik Petersson' },
	{ code: '104989', name: 'Material overhead', approver: 'Mattias Berggren' },
	{ code: '111200', name: 'Quality assurance' },
];

export const costCenterRenderers = optionRenderers<CostCenter>({
	description: (c) => c.name,
	hint: (c) => (c.approver ? `Approver: ${c.approver}` : undefined),
});

export interface Article {
	title: string;
	number: string;
	price: string;
	image?: string;
}

export const articles: Article[] = [
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

export const articleRenderers = optionRenderers<Article>({
	// no image, no media square
	media: (a) => a.image && html`<img src=${a.image} alt="" />`,
	hint: (a) => a.number,
	trailing: (a) => a.price,
});

export const costCenterField = ({
	value,
	suffix,
}: {
	value?: CostCenter;
	suffix?: string;
}) =>
	html`<cosmoz-autocomplete
		.label=${'Cost center'}
		mode="select"
		preserve-order
		item-height="auto"
		.source=${costCenters}
		.value=${value}
		.textProperty=${'code'}
		.itemRenderer=${costCenterRenderers.itemRenderer}
		.chipRenderer=${costCenterRenderers.chipRenderer}
		>${suffix
			? html`<span slot="suffix">${suffix}</span>`
			: ''}</cosmoz-autocomplete
	>`;

export const catalogField = () =>
	html`<cosmoz-autocomplete
		.label=${'Catalog'}
		limit="1"
		.source=${articles}
		.textProperty=${'title'}
		item-height="64"
		.itemRenderer=${articleRenderers.itemRenderer}
	></cosmoz-autocomplete>`;
