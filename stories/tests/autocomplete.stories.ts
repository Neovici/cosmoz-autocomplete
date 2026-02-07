import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';

interface AutocompleteArgs {
	source: { text: string }[];
	value?: { text: string }[];
	limit?: number;
	textProperty?: string;
	onChange?: (v: unknown[]) => void;
	onText?: (t: string) => void;
	disabled?: boolean;
	defaultIndex?: number;
	text?: string;
	keepOpened?: boolean;
	externalSearch?: boolean;
}

const AutocompleteTest = ({
	source,
	value,
	limit,
	textProperty = 'text',
	onChange,
	onText,
	disabled,
	defaultIndex,
	text,
	keepOpened,
	externalSearch,
}: AutocompleteArgs): TemplateResult => html`
	<cosmoz-autocomplete
		.source=${source}
		.value=${value}
		.limit=${limit}
		.textProperty=${textProperty}
		.onChange=${onChange}
		.onText=${onText}
		.defaultIndex=${defaultIndex}
		.text=${text}
		?disabled=${disabled}
		?keep-opened=${keepOpened}
		?external-search=${externalSearch}
	></cosmoz-autocomplete>
`;

const meta: Meta<AutocompleteArgs> = {
	title: 'Tests/Autocomplete',
	render: AutocompleteTest,
	tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<AutocompleteArgs>;

const colors = [
	{ text: 'Red' },
	{ text: 'Green' },
	{ text: 'Blue' },
	{ text: 'Yellow' },
];

export const RenderWithValue: Story = {
	args: {
		source: colors,
		value: [colors[0], colors[2]],
	},
	play: async ({ canvas }) => {
		await canvas.findByShadowText(/Red/u);
		await canvas.findByShadowText(/Blue/u);

		const autocomplete = document.querySelector('cosmoz-autocomplete');
		expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(2);
	},
};

export const RenderLimit1: Story = {
	args: {
		source: colors,
		value: [colors[1]],
		limit: 1,
	},
	play: async ({ canvas }) => {
		await canvas.findByShadowText(/Green/u);

		const autocomplete = document.querySelector('cosmoz-autocomplete');
		expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(1);
	},
};

export const FocusOpensListbox: Story = {
	args: {
		source: colors,
		value: [],
	},
	play: async ({ canvas }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Listbox should appear after focus - verify by finding an option
		const option = await canvas.findByShadowRole('option', { name: /Red/u });
		expect(option).toBeTruthy();
	},
};

export const DeselectChip: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = document.querySelector('cosmoz-autocomplete')!;
		const chip = autocomplete.shadowRoot?.querySelector(
			'cosmoz-autocomplete-chip',
		);
		const clearButton = chip?.shadowRoot?.querySelector('.clear');
		expect(clearButton).toBeTruthy();

		await userEvent.click(clearButton!);

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
		});
	},
};

export const OnChangeCallback: Story = {
	args: {
		source: colors,
		value: [],
		onChange: fn(),
		keepOpened: true,
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Wait for listbox to appear and select an item
		const option = await canvas.findByShadowRole('option', { name: /Red/u });
		await userEvent.click(option);

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith(
				[colors[0]],
				expect.any(Function),
			);
		});
	},
};

export const OnTextCallback: Story = {
	args: {
		source: colors,
		value: [],
		onText: fn(),
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.type(input, 'Gre');

		await waitFor(() => {
			expect(args.onText).toHaveBeenCalledWith('Gre');
		});
	},
};

export const BackspaceRemovesChip: Story = {
	args: {
		source: colors,
		value: [colors[0], colors[1]],
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		await canvas.findByShadowText(/Red/u);
		await canvas.findByShadowText(/Green/u);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Backspace when input is empty should remove last chip
		await userEvent.keyboard('{Backspace}');

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith(
				[colors[0]],
				expect.any(Function),
			);
		});
	},
};

export const KeyboardSelectItem: Story = {
	args: {
		source: colors,
		value: [],
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Wait for listbox by finding an option
		await canvas.findByShadowRole('option', { name: /Red/u });

		// Navigate down and select with Enter
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalled();
		});
	},
};

export const DefaultIndexNegative: Story = {
	args: {
		source: colors,
		value: [],
		defaultIndex: -1,
	},
	play: async () => {
		const autocomplete = document.querySelector('cosmoz-autocomplete');
		expect(
			autocomplete?.shadowRoot?.querySelectorAll('.chip').length ?? 0,
		).toBe(0);
	},
};

export const DisabledState: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		disabled: true,
	},
	play: async ({ canvas }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = document.querySelector('cosmoz-autocomplete');
		expect(autocomplete?.hasAttribute('disabled')).toBe(true);

		const input = autocomplete?.shadowRoot?.querySelector('cosmoz-input');
		expect(input?.hasAttribute('disabled')).toBe(true);
	},
};

export const TextValueEffects: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		text: 'initial',
	},
	play: async ({ canvas }) => {
		// Verify initial state
		await canvas.findByShadowText(/Red/u);

		const autocomplete = document.querySelector<HTMLElement>(
			'cosmoz-autocomplete',
		)!;
		const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');

		// The input should show the text property
		expect(input).toBeTruthy();
	},
};
