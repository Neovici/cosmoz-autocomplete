import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';

interface AutocompleteArgs {
	source:
		| { text: string; id?: number }[]
		| ((opts: {
				query?: string;
				active?: boolean;
		  }) => PromiseLike<{ text: string; id?: number }[]> | undefined);
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
	lazyOpen?: boolean;
	preserveOrder?: boolean;
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
	lazyOpen,
	preserveOrder,
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
		?lazy-open=${lazyOpen}
		?disabled=${disabled}
		?keep-opened=${keepOpened}
		?external-search=${externalSearch}
		?preserve-order=${preserveOrder}
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
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);
		await canvas.findByShadowText(/Blue/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
		expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(2);
	},
};

export const RenderLimit1: Story = {
	args: {
		source: colors,
		value: [colors[1]],
		limit: 1,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Green/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
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
	play: async ({ canvas, canvasElement, args }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
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
	play: async ({ canvasElement }) => {
		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
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
		onChange: fn(),
	},
	play: async ({ canvas, canvasElement, args }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		expect(autocomplete.hasAttribute('disabled')).toBe(true);

		const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');
		expect(input?.hasAttribute('disabled')).toBe(true);

		const dropdown = autocomplete.shadowRoot?.querySelector(
			'cosmoz-dropdown-next',
		);
		expect(dropdown?.hasAttribute('disabled')).toBe(true);

		// Clicking should NOT open the listbox
		await userEvent.click(input!);
		await new Promise((r) => setTimeout(r, 200));

		const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
		expect(listbox).toBeFalsy();

		// onChange should NOT have been called
		expect(args.onChange).not.toHaveBeenCalled();
	},
};

export const DisabledNoChipClear: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		disabled: true,
		onChange: fn(),
	},
	play: async ({ canvas, canvasElement, args }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		const chip = autocomplete.shadowRoot?.querySelector(
			'cosmoz-autocomplete-chip',
		);
		expect(chip).toBeTruthy();

		// Clear button should NOT be present when disabled
		const clearButton = chip?.shadowRoot?.querySelector('.clear');
		expect(clearButton).toBeFalsy();

		// onChange should NOT have been called
		expect(args.onChange).not.toHaveBeenCalled();
	},
};

export const TextValueEffects: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		text: 'initial',
	},
	play: async ({ canvas, canvasElement }) => {
		// Verify initial state
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector<HTMLElement>(
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
	play: async ({ canvas, canvasElement }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Type a query that would normally filter items
		await userEvent.type(input, 'Red');

		// With externalSearch=true, all items should still appear (no client-side filtering)
		await waitFor(() => {
			const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
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
	play: async ({ canvas, canvasElement }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Both items should appear in the listbox — the value item is deduplicated by id
		await waitFor(() => {
			const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
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

export const ProgrammaticOpen: Story = {
	args: {
		source: colors,
		value: [],
	},
	play: async ({ canvas, canvasElement }) => {
		const autocomplete = canvasElement.querySelector<
			HTMLElement & { opened: boolean }
		>('cosmoz-autocomplete')!;

		expect(autocomplete.opened).toBeFalsy();
		expect(autocomplete.hasAttribute('opened')).toBe(false);

		autocomplete.opened = true;

		await canvas.findByShadowRole('option', { name: /Red/u });
		expect(autocomplete.hasAttribute('opened')).toBe(true);
	},
};

export const ProgrammaticClose: Story = {
	args: {
		source: colors,
		value: [],
	},
	play: async ({ canvas, canvasElement }) => {
		const autocomplete = canvasElement.querySelector<
			HTMLElement & { opened: boolean }
		>('cosmoz-autocomplete')!;
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);
		await canvas.findByShadowRole('option', { name: /Red/u });

		autocomplete.opened = false;

		await waitFor(() => {
			expect(autocomplete.hasAttribute('opened')).toBe(false);
			expect(autocomplete.opened).toBe(false);
		});
	},
};

export const OpenedChangedEvent: Story = {
	args: {
		source: colors,
		value: [],
	},
	play: async ({ canvas, canvasElement }) => {
		const autocomplete = canvasElement.querySelector<
			HTMLElement & { opened: boolean }
		>('cosmoz-autocomplete')!;
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

export const LazyOpenHidesItems: Story = {
	args: {
		source: colors,
		value: [],
		lazyOpen: true,
		keepOpened: true,
	},
	play: async ({ canvas, canvasElement }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// No items should be shown initially (empty query)
		await new Promise((r) => setTimeout(r, 200));
		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		let listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
		let options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
		expect(options?.length ?? 0).toBe(0);

		// Type 1 character — threshold met, items should appear
		await userEvent.type(input, 'R');
		await waitFor(() => {
			listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
			options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
			expect(options?.length).toBeGreaterThan(0);
		});
	},
};

export const LazyOpenSuppressesSource: Story = {
	args: {
		value: [],
		lazyOpen: true,
		keepOpened: true,
	},
	play: async ({ canvas, canvasElement }) => {
		const calls: unknown[] = [];
		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		autocomplete.source = (opts: unknown) => {
			calls.push(opts);
			return Promise.resolve(colors);
		};

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Source function should NOT be called when query is empty
		await new Promise((r) => setTimeout(r, 200));
		expect(calls.length).toBe(0);

		// Type 1 character — threshold met, source should be called and items appear
		await userEvent.type(input, 'R');
		await waitFor(() => {
			expect(calls.length).toBeGreaterThan(0);
		});

		await waitFor(() => {
			const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
			const options = listbox?.shadowRoot?.querySelectorAll(
				'.item[role="option"]',
			);
			expect(options?.length).toBeGreaterThan(0);
		});
	},
};

export const TypingClearsValueWhenSelected: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		limit: 1,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
		expect(chipsBefore?.length).toBe(1);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);
		await userEvent.keyboard('G');

		await waitFor(() => {
			const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
			expect(chipsAfter?.length).toBe(0);
		});
	},
};

export const TypingDoesNotClearValueWhenMultiSelect: Story = {
	args: {
		source: colors,
		value: [colors[0], colors[1]],
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);
		await canvas.findByShadowText(/Green/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
		expect(chipsBefore?.length).toBe(2);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);
		await userEvent.keyboard('B');

		await new Promise((r) => setTimeout(r, 100));

		const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
		expect(chipsAfter?.length).toBe(2);
	},
};

export const TypingDoesNotClearWhenDisabled: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		limit: 1,
		disabled: true,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
		const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
		expect(chipsBefore?.length).toBe(1);

		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);
		await userEvent.keyboard('G');

		await new Promise((r) => setTimeout(r, 100));

		const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
		expect(chipsAfter?.length).toBe(1);
	},
};

// FE-419: deselect does not work when preserveOrder is on and valueProperty is used.
// The source and value items have the same valueProperty but different object references,
// mimicking the real-world scenario where options come from an API response.
const itemsWithId = [
	{ id: 1, text: 'Item 1' },
	{ id: 2, text: 'Item 2' },
	{ id: 3, text: 'Item 3' },
];

export const DeselectWithPreserveOrderAndValueProperty: Story = {
	args: {
		source: itemsWithId,
		// Different object reference with same id — simulates value stored from a previous selection
		// while source items come from a fresh API response
		value: [{ id: 1, text: 'Item 1' }],
		valueProperty: 'id',
		preserveOrder: true,
		keepOpened: true,
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Item 1 should appear as selected (checked) in the dropdown
		const option = await canvas.findByShadowRole('option', {
			name: /Item 1/u,
		});
		expect(option).toBeTruthy();

		// Click the already-selected item to deselect it
		await userEvent.click(option);

		// onChange should be called with an empty array (deselect), not a duplicate
		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
		});
	},
};

export const DeselectWithValuePropertyWithoutPreserveOrder: Story = {
	args: {
		source: itemsWithId,
		// Different object reference with same id — same scenario as above
		value: [{ id: 1, text: 'Item 1' }],
		valueProperty: 'id',
		preserveOrder: false,
		keepOpened: true,
		onChange: fn(),
	},
	play: async ({ canvas, args }) => {
		const input = await canvas.findByShadowRole('textbox');
		await userEvent.click(input);

		// Item 1 should appear as selected in the dropdown
		const option = await canvas.findByShadowRole('option', {
			name: /Item 1/u,
		});
		expect(option).toBeTruthy();

		// Click the already-selected item to deselect it
		await userEvent.click(option);

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
		});
	},
};
