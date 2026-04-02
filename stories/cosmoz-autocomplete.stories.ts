import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { when } from 'lit-html/directives/when.js';
import { expect, userEvent } from 'storybook/test';
import '../src/autocomplete';
import { colors } from './data';
import { spanishWords } from './spanish-words';
import { swedishWords } from './swedish-words';

interface AutocompleteArgs {
	source: { text: string }[];
	variant?: undefined | 'cell' | 'inline';
	limit?: number;
	textProperty: string;
	min?: number;
	label?: string;
	hint?: string;
	value?: { text: string }[] | { text: string };
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
	contour?: boolean;
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
	contour,
	lazyOpen,
	invalid,
	errorMessage,
}: AutocompleteArgs): TemplateResult => {
	const styles = { maxWidth: overflowed ? '170px' : 'initial' };
	const sourceDelayed = delay(source, responseTime);

	return html`
		<cosmoz-autocomplete
			class=${when(contour, () => 'contour')}
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
		></cosmoz-autocomplete>
	`;
};

const meta: Meta<AutocompleteArgs> = {
	title: 'Autocomplete',
	render: Autocomplete,
	argTypes: {
		label: {
			control: 'text',
			description: 'The label displayed on the screen',
		},
		source: { control: 'object', description: 'The source for the values' },
		textProperty: { control: 'text', description: 'Property to select value' },
		value: { control: 'object', description: 'The actual value' },
		limit: { control: 'number' },
		defaultIndex: { control: 'number', description: 'Default index of source' },
		disabled: { control: 'boolean', description: 'Disabled state' },
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
		lazyOpen: {
			control: 'boolean',
			description: 'Suppress results until the user types at least 1 character',
		},
		variant: {
			control: 'select',
			options: [undefined, 'inline', 'cell'],
			description: 'Visual variant',
			table: { defaultValue: { summary: '—' } },
		},
		hint: {
			control: 'text',
			description: 'Hint text displayed below the input',
		},
		invalid: {
			control: 'boolean',
			description: 'Invalid state',
		},
		errorMessage: {
			control: 'text',
			description: 'Error message displayed when invalid',
		},
		wrap: { control: 'boolean' },
		overflowed: { control: 'boolean' },
		responseTime: { control: 'number' },
		uppercase: { control: 'boolean' },
		contour: { control: 'boolean' },
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
				exclude: ['overflowed', 'contour', 'responseTime', 'uppercase'],
			},
			description: { component: 'The Cosmoz Autocomplete web component' },
		},
	},
};

export default meta;
type Story = StoryObj<AutocompleteArgs>;

// === Playground ===

export const Playground: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[3]],
		hint: 'Pick one or more colors',
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

// === Default variant ===

export const Default: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Default variant</h1>
			<div class="story-grid">
				<div>
					<div class="story-label">Empty</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						hint="This is a hint text"
						.defaultIndex=${-1}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">With value</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.value=${[colors[0], colors[3]]}
						hint="Pick one or more colors"
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Single</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.limit=${1}
						.value=${colors[2]}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Invalid</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						invalid
						.errorMessage=${'This field is required'}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Disabled</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						.value=${[colors[0], colors[3]]}
						disabled
					></cosmoz-autocomplete>
				</div>
			</div>
		</div>
	`,
};

// === Inline variant ===

export const Inline: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Inline variant</h1>
			<div class="story-grid">
				<div>
					<div class="story-label">Empty</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="inline"
						.defaultIndex=${-1}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">With value</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="inline"
						.value=${[colors[0], colors[3]]}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Single</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="inline"
						.limit=${1}
						.value=${colors[2]}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Invalid</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="inline"
						invalid
						.errorMessage=${'This field is required'}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Disabled</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="inline"
						.value=${[colors[0], colors[3]]}
						disabled
					></cosmoz-autocomplete>
				</div>
			</div>
		</div>
	`,
};

// === Cell variant ===

export const Cell: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Cell variant</h1>
			<div class="story-grid">
				<div>
					<div class="story-label">Empty</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="cell"
						.defaultIndex=${-1}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">With value</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="cell"
						.value=${[colors[0], colors[3]]}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Single</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="cell"
						.limit=${1}
						.value=${colors[2]}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Invalid</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="cell"
						invalid
						.errorMessage=${'This field is required'}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Disabled</div>
					<cosmoz-autocomplete
						.label=${'Choose color'}
						.source=${colors}
						text-property="text"
						variant="cell"
						.value=${[colors[0], colors[3]]}
						disabled
					></cosmoz-autocomplete>
				</div>
			</div>
		</div>
	`,
};

// === Behavior ===

export const Single: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		value: [colors[2]],
	},
	play: async ({ canvas }) => {
		await canvas.findByShadowText(/Purple/u);
	},
};

export const DefaultIndex: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		defaultIndex: -1,
	},
	play: async ({ step }) => {
		await step('Renders with no initial selection', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete',
			);
			expect(
				autocomplete?.shadowRoot?.querySelectorAll('.chip')?.length ?? 0,
			).toBe(0);
		});
	},
};

export const DefaultIndexSingleValue: Story = {
	args: {
		label: 'Choose color (single value)',
		source: colors.slice(0, 1),
		textProperty: 'text',
		limit: 1,
		defaultIndex: -1,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		value: colors[0],
		disabled: true,
	},
	play: async () => {
		const autocomplete = document.querySelector<HTMLElement>(
			'cosmoz-autocomplete',
		);
		expect(autocomplete?.hasAttribute('disabled')).toBe(true);
	},
};

export const Placeholder: Story = {
	args: {
		placeholder: 'Choose color (placeholder text)',
		source: colors,
		limit: 1,
		textProperty: 'text',
		value: colors[0],
	},
};

export const Select: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		limit: 1,
		textProperty: 'text',
		value: colors[2],
		showSingle: true,
		preserveOrder: true,
		min: 1,
	},
	play: async ({ canvas, step }) => {
		await step('Renders with initial selection', async () => {
			await canvas.findByShadowText(/Purple/u);
		});

		await step('Select Blue option', async () => {
			const label = await canvas.findByShadowText(/Choose color/u);
			await userEvent.click(label);
			const blueOption = await canvas.findByShadowRole('option', {
				name: 'Blue',
			});
			await userEvent.click(blueOption);
			await canvas.findByShadowText(/Blue/u);
		});
	},
};

export const Overflown: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[1], colors[2]],
		overflowed: true,
	},
	play: async () => {
		const autocomplete = document.querySelector<HTMLElement>(
			'cosmoz-autocomplete',
		);
		expect(autocomplete?.style.maxWidth).toBe('170px');
	},
};

export const Wrap: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[1], colors[2]],
		wrap: true,
		overflowed: true,
	},
	play: async () => {
		const autocomplete = document.querySelector<HTMLElement>(
			'cosmoz-autocomplete',
		);
		expect(autocomplete?.hasAttribute('wrap')).toBe(true);
	},
};

export const LazyOpen: Story = {
	args: {
		label: 'Start typing to see results',
		source: colors,
		textProperty: 'text',
		lazyOpen: true,
	},
};

export const AccentInsensitiveSearch: Story = {
	render: () => html`
		<div class="story-stack">
			<h1 class="story-section-title">Accent-insensitive search</h1>
			<div class="story-grid">
				<div>
					<div class="story-label">Spanish Words</div>
					<cosmoz-autocomplete
						.label=${'Choose Spanish word'}
						.source=${spanishWords}
						text-property="name"
						.defaultIndex=${-1}
					></cosmoz-autocomplete>
				</div>
				<div>
					<div class="story-label">Swedish Words</div>
					<cosmoz-autocomplete
						.label=${'Choose Swedish word'}
						.source=${swedishWords}
						text-property="name"
						.defaultIndex=${-1}
					></cosmoz-autocomplete>
				</div>
			</div>
		</div>
	`,
};

// === Interaction test ===

export const InteractionTest: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[3]],
	},
	play: async ({ canvas, step }) => {
		await step('Renders with initial value', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete',
			);
			expect(autocomplete).toBeTruthy();
			await canvas.findByShadowText(/Red/u);
			await canvas.findByShadowText(/Blue/u);
		});

		await step('Remove chips and select new item', async () => {
			const input = await canvas.findByShadowRole('textbox');
			await userEvent.click(input);
			await userEvent.keyboard('{Backspace}{Backspace}');
			await userEvent.type(input, 'Wh');
			await userEvent.keyboard('{Enter}');
			await canvas.findByShadowText(/White/u);
		});

		await step('No results message', async () => {
			const input = await canvas.findByShadowRole('textbox');
			await userEvent.click(input);
			await userEvent.tripleClick(input);
			await userEvent.type(input, 'Asdf');
			await canvas.findByShadowText(/No results found/u);
		});
	},
};
