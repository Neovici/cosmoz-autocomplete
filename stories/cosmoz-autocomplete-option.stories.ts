import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import '../src/autocomplete';
import { catalogField, costCenterField, costCenters } from './option-data';

/**
 * `optionRenderers` from `@neovici/cosmoz-autocomplete/option`: options with
 * an image or icon, a label, a muted description, a hint line and a trailing
 * part. The field shows the label and description.
 */
const meta: Meta = {
	title: 'Autocomplete/Option',
	decorators: [(story) => html`<div style="max-width: 420px">${story()}</div>`],
};

export default meta;

/** A select with a description and an approver hint per option. */
export const Select: StoryObj<{ suffix?: string }> = {
	args: { suffix: '★' },
	render: ({ suffix }) => costCenterField({ value: costCenters[1], suffix }),
};

/** A search with an image, a hint and a price per option. */
export const Catalog: StoryObj = {
	render: () => catalogField(),
};
