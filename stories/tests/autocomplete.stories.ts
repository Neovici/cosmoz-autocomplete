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
	compact?: boolean;
	defaultIndex?: number;
	text?: string;
	keepOpened?: boolean;
	externalSearch?: boolean;
	lazyOpen?: boolean;
	preserveOrder?: boolean;
	required?: boolean;
	mode?: 'select';
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
	compact,
	defaultIndex,
	text,
	keepOpened,
	externalSearch,
	lazyOpen,
	preserveOrder,
	required,
	mode,
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
		?compact=${compact}
		?required=${required}
		?keep-opened=${keepOpened}
		?external-search=${externalSearch}
		?preserve-order=${preserveOrder}
		.mode=${mode}
	></cosmoz-autocomplete>
`;

const meta: Meta<AutocompleteArgs> = {
	title: 'Tests/Autocomplete',
	render: AutocompleteTest,
	tags: ['!autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<AutocompleteArgs>;

const colors = [
	{ text: 'Red' },
	{ text: 'Green' },
	{ text: 'Blue' },
	{ text: 'Yellow' },
];

type AutocompleteHost = HTMLElement & {
	opened: boolean;
	value: unknown;
	source?: unknown;
};

const host = (canvasElement: HTMLElement) =>
	canvasElement.querySelector<AutocompleteHost>('cosmoz-autocomplete')!;

// the trigger opens the dropdown; the search input lives inside the popup
const dropdownTrigger = (autocomplete: HTMLElement) =>
	autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-trigger');

// the chips row is the light-dom child chain
// trigger -> cosmoz-autocomplete-chips -> cosmoz-autocomplete-chips-row
const chipRow = (autocomplete: HTMLElement) =>
	autocomplete.shadowRoot
		?.querySelector('cosmoz-autocomplete-chips')
		?.shadowRoot?.querySelector('cosmoz-autocomplete-chips-row');

const chips = (autocomplete: HTMLElement) =>
	chipRow(autocomplete)?.querySelectorAll('cosmoz-tag.chip').length ?? 0;

const chip = (autocomplete: HTMLElement, title: string) =>
	chipRow(autocomplete)?.querySelector(`cosmoz-tag[title='${title}']`);

const listboxOptions = (autocomplete: HTMLElement) =>
	autocomplete.shadowRoot
		?.querySelector('cosmoz-listbox')
		?.shadowRoot?.querySelectorAll('.item[role="option"]');

export const RenderWithValue: Story = {
	args: {
		source: colors,
		value: [colors[0], colors[2]],
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);
		await canvas.findByShadowText(/Blue/u);

		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(2);
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

		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(1);
	},
};

export const SingleValueIsNotReadonly: Story = {
	args: {
		source: colors,
		value: [colors[1]],
		limit: 1,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Green/u);

		const input = canvasElement
			.querySelector('cosmoz-autocomplete')
			?.shadowRoot?.querySelector('cosmoz-input');
		expect(input?.hasAttribute('readonly')).toBe(false);
		expect(input?.shadowRoot?.querySelector('input')?.readOnly).toBe(false);
	},
};

export const FocusOpensListbox: Story = {
	args: {
		source: colors,
		value: [],
	},
	play: async ({ canvas, canvasElement }) => {
		const autocomplete = host(canvasElement);
		await userEvent.click(dropdownTrigger(autocomplete)!);

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
		const autocomplete = host(canvasElement);
		await canvas.findByShadowText(/Red/u);
		const tag = chip(autocomplete, 'Red');
		const removeButton = tag?.shadowRoot?.querySelector('cosmoz-button.close');
		expect(removeButton).toBeTruthy();

		await userEvent.click(removeButton!);

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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });
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
	play: async ({ canvas, canvasElement, args }) => {
		await canvas.findByShadowText(/Green/u);

		await userEvent.click(dropdownTrigger(host(canvasElement))!);

		// Backspace on the empty search removes the last chip
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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);
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
		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(0);
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

		const autocomplete = host(canvasElement);
		const trigger = dropdownTrigger(autocomplete)!;
		expect(autocomplete.hasAttribute('disabled')).toBe(true);
		expect(trigger.hasAttribute('disabled')).toBe(true);

		const dropdown = autocomplete.shadowRoot?.querySelector(
			'cosmoz-dropdown-next',
		);
		expect(dropdown?.hasAttribute('disabled')).toBe(true);

		// Clicking should NOT open the listbox
		await userEvent.click(trigger);
		await new Promise((r) => setTimeout(r, 200));

		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(args.onChange).not.toHaveBeenCalled();
	},
};

export const CompactState: Story = {
	args: {
		source: colors,
		compact: true,
	},
	play: async ({ canvasElement }) => {
		const autocomplete = host(canvasElement);
		expect(dropdownTrigger(autocomplete)!.hasAttribute('compact')).toBe(true);
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

		const autocomplete = host(canvasElement);
		const tag = chip(autocomplete, 'Red');
		expect(tag).toBeTruthy();

		// Clear button should NOT be present when disabled
		expect(tag?.hasAttribute('removable')).toBe(false);

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
		await userEvent.click(dropdownTrigger(host(canvasElement))!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });
		await userEvent.type(input, 'Red');

		// With externalSearch=true, all items should still appear (no client-side filtering)
		await waitFor(() => {
			expect(listboxOptions(host(canvasElement))?.length).toBe(4);
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
	play: async ({ canvasElement }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

		// Both items should appear in the listbox — the value item is deduplicated by id
		await waitFor(() => {
			expect(listboxOptions(host(canvasElement))?.length).toBe(2);
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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

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
		const autocomplete = host(canvasElement);
		await userEvent.click(dropdownTrigger(autocomplete)!);
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
	play: async ({ canvasElement }) => {
		const autocomplete = host(canvasElement);
		const events: boolean[] = [];
		autocomplete.addEventListener('opened-changed', ((e: CustomEvent) => {
			events.push(e.detail.value);
		}) as EventListener);

		await userEvent.click(dropdownTrigger(autocomplete)!);

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
		await userEvent.click(dropdownTrigger(host(canvasElement))!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });

		// No items should be shown initially (empty query)
		await new Promise((r) => setTimeout(r, 200));
		const autocomplete = host(canvasElement);
		expect(listboxOptions(autocomplete)?.length ?? 0).toBe(0);

		// Type 1 character — threshold met, items should appear
		await userEvent.type(input, 'R');
		await waitFor(() => {
			expect(listboxOptions(autocomplete)?.length).toBeGreaterThan(0);
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
		const autocomplete = host(canvasElement);
		autocomplete.source = (opts: unknown) => {
			calls.push(opts);
			return Promise.resolve(colors);
		};

		await userEvent.click(dropdownTrigger(autocomplete)!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });

		// Source function should NOT be called when query is empty
		await new Promise((r) => setTimeout(r, 200));
		expect(calls.length).toBe(0);

		// Type 1 character — threshold met, source should be called and items appear
		await userEvent.type(input, 'R');
		await waitFor(() => {
			expect(calls.length).toBeGreaterThan(0);
		});

		await waitFor(() => {
			expect(listboxOptions(autocomplete)?.length).toBeGreaterThan(0);
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

		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(1);

		await userEvent.click(dropdownTrigger(autocomplete)!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });
		await userEvent.type(input, 'G');

		await waitFor(() => {
			expect(chips(autocomplete)).toBe(0);
		});
		expect(input.value).toBe('G');
	},
};

export const ShortcutDoesNotClearValueWhenSelected: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		limit: 1,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = host(canvasElement);
		await userEvent.click(dropdownTrigger(autocomplete)!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });
		input.dispatchEvent(
			new KeyboardEvent('keydown', {
				key: 'c',
				metaKey: true,
				bubbles: true,
				composed: true,
			}),
		);
		await new Promise((resolve) => setTimeout(resolve, 100));

		expect(chips(autocomplete)).toBe(1);
	},
};

export const InputWithoutKeydownClearsValueWhenSelected: Story = {
	args: {
		source: colors,
		value: [colors[0]],
		limit: 1,
	},
	play: async ({ canvas, canvasElement }) => {
		await canvas.findByShadowText(/Red/u);

		const autocomplete = host(canvasElement);
		await userEvent.click(dropdownTrigger(autocomplete)!);
		const input = (await canvas.findByShadowRole('textbox', {
			name: 'Search',
		})) as HTMLInputElement;
		await userEvent.click(input);
		// paste, IME and Android keyboards change the text without a usable keydown
		input.value = 'Bl';
		input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

		await waitFor(() => {
			expect(chips(autocomplete)).toBe(0);
		});
		expect(input.value).toBe('Bl');
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

		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(2);

		await userEvent.click(dropdownTrigger(autocomplete)!);
		const input = await canvas.findByShadowRole('textbox', { name: 'Search' });
		await userEvent.type(input, 'B');

		await new Promise((r) => setTimeout(r, 100));

		expect(chips(autocomplete)).toBe(2);
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

		const autocomplete = host(canvasElement);
		expect(chips(autocomplete)).toBe(1);

		await userEvent.click(dropdownTrigger(autocomplete)!);
		await new Promise((r) => setTimeout(r, 100));

		// disabled: the dropdown never opens and the value survives
		expect(chips(autocomplete)).toBe(1);
		expect(dropdownTrigger(autocomplete)!.getAttribute('aria-expanded')).toBe(
			'false',
		);
	},
};

// Source and value items with the same valueProperty but different object references,
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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

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
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

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

export const Required: Story = {
	args: {
		source: colors,
		required: true,
	},
	play: async ({ canvasElement }) => {
		const autocomplete = host(canvasElement);
		expect(autocomplete.hasAttribute('required')).toBe(true);

		expect(dropdownTrigger(autocomplete)!.hasAttribute('required')).toBe(true);
	},
};

export const SelectModeValueIsSingleItem: Story = {
	args: {
		source: colors,
		mode: 'select',
		onChange: fn(),
	},
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

		const option = await canvas.findByShadowRole('option', { name: /Red/u });
		await userEvent.click(option);

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith(
				[colors[0]],
				expect.any(Function),
			);
		});

		const autocomplete = host(canvasElement);
		const { value } = autocomplete;
		expect(Array.isArray(value)).toBe(false);
		expect(value).toEqual(colors[0]);
	},
};

export const MultiModeValueIsArray: Story = {
	args: {
		source: colors,
		limit: 1,
		onChange: fn(),
	},
	play: async ({ canvas, canvasElement, args }) => {
		await userEvent.click(dropdownTrigger(host(canvasElement))!);

		const option = await canvas.findByShadowRole('option', { name: /Red/u });
		await userEvent.click(option);

		await waitFor(() => {
			expect(args.onChange).toHaveBeenCalledWith(
				[colors[0]],
				expect.any(Function),
			);
		});

		const autocomplete = host(canvasElement);
		const { value } = autocomplete;
		expect(Array.isArray(value)).toBe(true);
		expect(value).toEqual([colors[0]]);
	},
};
