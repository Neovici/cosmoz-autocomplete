import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';
import {
	catalogField,
	CostCenter,
	costCenterField,
	costCenters,
} from '../option-data';

// The look of these options is pinned by the visual suite
// (test/e2e/visual.spec.ts); these tests hold what a user reads and
// what a screen reader reports.

const meta: Meta<{ value?: CostCenter }> = {
	title: 'Tests/Option',
	tags: ['!autodocs'],
	render: ({ value }) => costCenterField({ value }),
};

export default meta;
type Story = StoryObj<{ value?: CostCenter }>;

// the open list renders each option twice: the row and a hidden sizer
const open = async (
	canvas: Parameters<NonNullable<Story['play']>>[0]['canvas'],
) => userEvent.click(await canvas.findByShadowRole('textbox'));

export const OptionShowsDescriptionAndHint: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas }) => {
		await open(canvas);
		await canvas.findAllByShadowText('Material overhead');
		await canvas.findAllByShadowText('Approver: Mattias Berggren');
	},
};

export const SelectedOptionIsMarked: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas }) => {
		await open(canvas);
		await canvas.findAllByShadowText('Quality assurance');
		const options = await canvas.findAllByShadowRole('option');
		// the selected option is reported and keeps its place in the order
		expect(options.map((o) => o.hasAttribute('aria-selected'))).toEqual([
			false,
			true,
			false,
			false,
		]);
	},
};

export const FieldShowsLabelAndDescription: Story = {
	args: { value: costCenters[1] },
	play: async ({ canvas }) => {
		await canvas.findByShadowText('102997');
		await canvas.findByShadowText('Expense fall back');
		// the hint belongs to the open list only
		expect(canvas.queryAllByShadowText(/Approver/u)).toHaveLength(0);
	},
};

export const OptionShowsTrailing: Story = {
	render: () => catalogField(),
	play: async ({ canvas }) => {
		await open(canvas);
		await userEvent.keyboard('vest');
		await canvas.findAllByShadowText('A-1001');
		await canvas.findAllByShadowText('€12.00');
		await waitFor(() =>
			expect(canvas.queryAllByShadowText('€4.50')).toHaveLength(0),
		);
	},
};
