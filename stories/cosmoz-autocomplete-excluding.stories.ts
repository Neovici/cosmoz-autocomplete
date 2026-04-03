import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { when } from 'lit-html/directives/when.js';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/excluding';
import { colors } from './data';

interface ExcludingValue {
	item: { text: string };
	excluded: boolean;
}

interface AutocompleteExcludingArgs {
	source: { text: string }[];
	variant?: 'default' | 'cell' | 'inline';
	limit?: number;
	textProperty: string;
	min?: number;
	label?: string;
	hint?: string;
	value?: ExcludingValue[];
	disabled?: boolean;
	placeholder?: string;
	defaultIndex?: number;
	showSingle?: boolean;
	preserveOrder?: boolean;
	wrap?: boolean;
	keepOpened?: boolean;
	keepQuery?: boolean;
	opened?: boolean;
	overflowed?: boolean;
	responseTime?: number;
	uppercase?: boolean;
	lazyOpen?: boolean;
	invalid?: boolean;
	errorMessage?: string;
}

const delay = <T>(
	source: T,
	time?: number,
): T | (({ active }: { active: boolean }) => Promise<T> | undefined) => {
	if (time == null) return source;
	return ({ active }) =>
		active
			? new Promise((resolve) => setTimeout(() => resolve(source), time))
			: undefined;
};

const Autocomplete = ({
	variant,
	source,
	limit,
	textProperty,
	min,
	label = '',
	hint,
	value = [],
	disabled = false,
	placeholder = '',
	defaultIndex = 0,
	showSingle = false,
	preserveOrder = false,
	wrap = false,
	keepOpened = false,
	keepQuery = false,
	opened = false,
	overflowed = false,
	responseTime,
	lazyOpen,
	invalid,
	errorMessage,
}: AutocompleteExcludingArgs): TemplateResult => {
	const styles = {
		maxWidth: overflowed ? '170px' : 'initial',
	};

	const sourceDelayed = delay(source, responseTime);

	return html`
		<cosmoz-autocomplete-excluding
			variant=${ifDefined(variant)}
			.label=${label}
			hint=${ifDefined(hint)}
			.placeholder=${placeholder}
			.source=${sourceDelayed}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			.opened=${opened}
			?lazy-open=${lazyOpen}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			?keep-opened=${keepOpened}
			?keep-query=${keepQuery}
			?invalid=${invalid}
			.errorMessage=${errorMessage}
			style=${styleMap(styles)}
			><p slot="no-result" class="custom-message">Custom message no results</p>
		</cosmoz-autocomplete-excluding>
	`;
};

const meta: Meta<AutocompleteExcludingArgs> = {
	title: 'Autocomplete Excluding',
	render: Autocomplete,
	argTypes: {
		label: {
			control: 'text',
			description: 'The label displayed on the screen',
		},
		source: {
			control: 'object',
			description: 'The source for the values displayed in the dropdown',
		},
		textProperty: {
			control: 'text',
			description:
				'The object property used to select the value from the source',
		},
		value: {
			control: 'object',
			description: 'The actual value of the Autocomplete',
		},
		limit: { control: 'number' },
		defaultIndex: {
			control: 'number',
			description: 'The default index of the source array',
		},
		disabled: {
			control: 'boolean',
			description:
				'A boolean representing the disabled state of the Autocomplete',
		},
		placeholder: { control: 'text' },
		showSingle: { control: 'boolean' },
		keepOpened: { control: 'boolean' },
		keepQuery: { control: 'boolean' },
		opened: {
			control: 'boolean',
			description: 'Programmatically open/close the dropdown',
		},
		preserveOrder: { control: 'boolean' },
		min: { control: 'number' },
		wrap: { control: 'boolean' },
		overflowed: { control: 'boolean' },
		responseTime: { control: 'number' },
		uppercase: { control: 'boolean' },
		variant: {
			control: 'select',
			options: ['default', 'inline', 'cell'],
			description: 'Visual variant',
			table: { defaultValue: { summary: 'default' } },
		},
		hint: {
			control: 'text',
			description: 'Hint text displayed below the input',
		},
		lazyOpen: {
			control: 'boolean',
			description: 'Suppress results until the user types at least 1 character',
		},
		invalid: {
			control: 'boolean',
			description: 'Invalid state',
		},
		errorMessage: {
			control: 'text',
			description: 'Error message displayed when invalid',
		},
	},
	decorators: [
		(story, { args }) =>
			when(
				args.uppercase,
				() => html`<div style="text-transform: uppercase">${story()}</div>`,
				() => story(),
			),
	],
	parameters: {
		docs: {
			controls: {
				exclude: ['overflowed', 'responseTime', 'uppercase'],
			},
			description: {
				component: 'The Cosmoz Autocomplete Excluding web component',
			},
		},
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<AutocompleteExcludingArgs>;

// =====================================================================
// Playground
// =====================================================================

export const Playground: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [
			{ item: colors[1], excluded: true },
			{ item: colors[3], excluded: false },
		],
		keepOpened: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive playground — use the controls to explore all props.',
			},
		},
	},
};

// =====================================================================
// States
// =====================================================================

export const States: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Excluding states</h1>
			<div class="story-grid">
				<div>
					<div class="story-label">Empty</div>
					<cosmoz-autocomplete-excluding
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.defaultIndex=${-1}
					></cosmoz-autocomplete-excluding>
				</div>
				<div>
					<div class="story-label">Included & excluded</div>
					<cosmoz-autocomplete-excluding
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.value=${[
							{ item: colors[0], excluded: true },
							{ item: colors[1], excluded: false },
							{ item: colors[3], excluded: true },
						]}
					></cosmoz-autocomplete-excluding>
				</div>
				<div>
					<div class="story-label">All included</div>
					<cosmoz-autocomplete-excluding
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.value=${[
							{ item: colors[0], excluded: false },
							{ item: colors[2], excluded: false },
						]}
					></cosmoz-autocomplete-excluding>
				</div>
				<div>
					<div class="story-label">All excluded</div>
					<cosmoz-autocomplete-excluding
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.value=${[
							{ item: colors[0], excluded: true },
							{ item: colors[1], excluded: true },
						]}
					></cosmoz-autocomplete-excluding>
				</div>
				<div>
					<div class="story-label">Disabled</div>
					<cosmoz-autocomplete-excluding
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						disabled
						.value=${[
							{ item: colors[0], excluded: true },
							{ item: colors[3], excluded: false },
						]}
					></cosmoz-autocomplete-excluding>
				</div>
			</div>
		</div>
	`,
};

// =====================================================================
// Excluding with dropdown open
// =====================================================================

export const DropdownOpen: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Dropdown with excluded items</h1>
			<cosmoz-autocomplete-excluding
				.label=${'Choose color'}
				.source=${colors}
				text-property="text"
				keep-opened
				.value=${[
					{ item: colors[0], excluded: true },
					{ item: colors[3], excluded: false },
				]}
			></cosmoz-autocomplete-excluding>
		</div>
	`,
};

// =====================================================================
// Interaction tests
// =====================================================================

export const InteractionTest: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [
			{ item: colors[0], excluded: true },
			{ item: colors[3], excluded: false },
		],
		keepOpened: true,
	},
	play: async ({ canvas, step }) => {
		await step('Renders with chips showing excluded state', async () => {
			await canvas.findByShadowText(/Red/u);
			await canvas.findByShadowText(/Blue/u);
		});

		await step('Toggle exclude state via listbox', async () => {
			const input = await canvas.findByShadowRole('textbox');
			await userEvent.click(input);
			const blueOption = await canvas.findByShadowRole('option', {
				name: /Blue/u,
			});
			await userEvent.click(blueOption); // Select Blue
			await userEvent.click(blueOption); // Toggle to excluded
		});

		await step('Toggle exclude state via chip', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete-excluding',
			)!;
			const redChipToggle =
				autocomplete.shadowRoot!.querySelector('[title="Red"] span');
			await userEvent.click(redChipToggle!);
		});

		await step('No results custom message', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete-excluding',
			)!;
			const input = await canvas.findByShadowRole('textbox');
			await userEvent.click(input);
			await userEvent.tripleClick(input);
			await userEvent.type(input, 'Asdf');
			await waitFor(() =>
				expect(autocomplete).toHaveTextContent('Custom message no results'),
			);
		});
	},
};
