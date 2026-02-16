import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/excluding';

interface ExcludingArgs {
	source: { text: string }[];
	textProperty: string;
	value?: { item: { text: string }; excluded: boolean }[];
	keepOpened?: boolean;
}

const colors = [
	{ text: 'Red' },
	{ text: 'Green' },
	{ text: 'Blue' },
	{ text: 'Yellow' },
];

const ExcludingTest = ({
	source,
	textProperty = 'text',
	value = [],
	keepOpened,
}: ExcludingArgs): TemplateResult => html`
	<cosmoz-autocomplete-excluding
		.source=${source}
		.textProperty=${textProperty}
		.value=${value}
		?keep-opened=${keepOpened}
	></cosmoz-autocomplete-excluding>
`;

const meta: Meta<ExcludingArgs> = {
	title: 'Tests/Autocomplete Excluding',
	render: ExcludingTest,
	tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<ExcludingArgs>;

export const ProgrammaticOpen: Story = {
	args: {
		source: colors,
		textProperty: 'text',
		value: [{ item: colors[0], excluded: true }],
	},
	play: async ({ canvas }) => {
		const autocomplete = document.querySelector<
			HTMLElement & { opened: boolean }
		>('cosmoz-autocomplete-excluding')!;

		await canvas.findByShadowText(/Red/u);
		expect(autocomplete.opened).toBeFalsy();
		expect(autocomplete.hasAttribute('opened')).toBe(false);

		autocomplete.opened = true;

		await canvas.findByShadowRole('option', { name: /Green/u });
		expect(autocomplete.hasAttribute('opened')).toBe(true);
	},
};

export const OpenedChangedEvent: Story = {
	args: {
		source: colors,
		textProperty: 'text',
		value: [],
	},
	play: async ({ canvas }) => {
		const autocomplete = document.querySelector<
			HTMLElement & { opened: boolean }
		>('cosmoz-autocomplete-excluding')!;
		const events: boolean[] = [];
		autocomplete.addEventListener('opened-changed', ((e: CustomEvent) => {
			events.push(e.detail.value);
		}) as EventListener);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		await waitFor(() => {
			expect(events).toContain(true);
		});
	},
};
