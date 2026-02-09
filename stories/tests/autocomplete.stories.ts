import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';

interface AutocompleteArgs {
	source: { text: string; id?: number }[];
	value?: { text: string; id?: number }[];
	limit?: number;
	textProperty?: string;
	valueProperty?: string;
	onChange?: (v: unknown[]) => void;
	onText?: (t: string) => void;
	onSelect?: (v: unknown, meta: unknown) => void;
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
	valueProperty,
	onChange,
	onText,
	onSelect,
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
		.valueProperty=${valueProperty}
		.onChange=${onChange}
		.onText=${onText}
		.onSelect=${onSelect}
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

export const ExternalSearchMode: Story = {
	args: {
		source: colors,
		value: [],
		externalSearch: true,
		keepOpened: true,
	},
	play: async ({ canvas }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Type a query that would normally filter items
		await userEvent.type(input, 'Red');

		// With externalSearch=true, all items should still appear (no client-side filtering)
		await waitFor(() => {
			const autocomplete = document.querySelector('cosmoz-autocomplete')!;
			const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
			const options = listbox?.shadowRoot?.querySelectorAll(
				'.item[role="option"]',
			);
			expect(options?.length).toBe(4);
		});
	},
};

export const ValueProperty: Story = {
	args: {
		source: [
			{ id: 1, text: 'Item 1' },
			{ id: 2, text: 'Item 2' },
		],
		value: [{ id: 1, text: 'Item 1' }],
		valueProperty: 'id',
		keepOpened: true,
	},
	play: async ({ canvas }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Both items should appear in the listbox — the value item is deduplicated by id
		await waitFor(() => {
			const autocomplete = document.querySelector('cosmoz-autocomplete')!;
			const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
			const options = listbox?.shadowRoot?.querySelectorAll(
				'.item[role="option"]',
			);
			expect(options?.length).toBe(2);
		});
	},
};

export const OnSelectCallback: Story = {
	args: {
		source: colors,
		value: [],
		onSelect: fn(),
		keepOpened: true,
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		const option = await canvas.findByShadowRole('option', { name: /Red/u });
		await userEvent.click(option);

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith(colors[0], expect.any(Object));
		});
	},
};

export const Limit1DisablesBackspace: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		limit: 1,
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		await canvas.findByShadowText(/Red/u);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Backspace when limit=1 should NOT remove the chip (use-keys disables handler)
		await userEvent.keyboard('{Backspace}');

		// Wait a tick to ensure no async callback fires
		await new Promise((r) => setTimeout(r, 200));
		expect(args.onChange).not.toHaveBeenCalled();
	},
};
