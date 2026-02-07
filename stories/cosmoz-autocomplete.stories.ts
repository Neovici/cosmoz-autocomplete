import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { when } from 'lit-html/directives/when.js';
import { expect } from 'storybook/test';
import '../src/autocomplete';
import { colors } from './data';
import { spanishWords } from './spanish-words';
import { swedishWords } from './swedish-words';

interface AutocompleteArgs {
	source: { text: string }[];
	limit?: number;
	textProperty: string;
	min?: number;
	label?: string;
	value?: { text: string }[] | { text: string };
	disabled?: boolean;
	placeholder?: string;
	defaultIndex?: number;
	showSingle?: boolean;
	preserveOrder?: boolean;
	wrap?: boolean;
	keepOpened?: boolean;
	keepQuery?: boolean;
	overflowed?: boolean;
	responseTime?: number;
	contour?: boolean;
	uppercase?: boolean;
}

const CSS = html`
	<style>
		.contour {
			--cosmoz-input-color: #aeacac;
			--cosmoz-input-border-radius: 4px;
			--cosmoz-input-wrap-padding: 12px;
			--cosmoz-input-line-display: none;
			--cosmoz-input-contour-size: 1px;
			--cosmoz-input-label-translate-y: 10px;
			--cosmoz-autocomplete-chip-translate-y: 8px;
			--cosmoz-autocomplete-chip-border-radius: 4px;
		}
	</style>
`;

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
	source,
	limit,
	textProperty,
	min,
	label = '',
	value = [],
	disabled = false,
	placeholder = '',
	defaultIndex = 0,
	showSingle = false,
	preserveOrder = false,
	wrap = false,
	keepOpened = false,
	keepQuery = false,
	overflowed = false,
	responseTime,
	contour,
}: AutocompleteArgs): TemplateResult => {
	const styles = { maxWidth: overflowed ? '170px' : 'initial' };
	const sourceDelayed = delay(source, responseTime);

	return html`
		${CSS}
		<cosmoz-autocomplete
			class=${when(contour, () => 'contour')}
			.label=${label}
			.placeholder=${placeholder}
			.source=${sourceDelayed}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			?keep-opened=${keepOpened}
			?keep-query=${keepQuery}
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
		preserveOrder: { control: 'boolean' },
		min: { control: 'number' },
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

export const Basic: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[3]],
	},
	play: async ({ canvas, step }) => {
		await step('Renders with chips', async () => {
			await canvas.findByShadowText(/Red/u);
			await canvas.findByShadowText(/Blue/u);
		});
		await step('Has input field', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete',
			);
			expect(autocomplete).toBeTruthy();
			expect(
				autocomplete?.shadowRoot?.querySelector('cosmoz-input'),
			).toBeTruthy();
		});
	},
};

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
	play: async ({ canvas }) => {
		await canvas.findByShadowText(/Purple/u);
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

export const AccentInsensitiveSearch: Story = {
	render: () => html`
		<div>
			<div style="margin: 2rem 0;">
				<h3 style="margin-bottom: 10px;">Spanish Words</h3>
				<cosmoz-autocomplete
					label="Choose Spanish word"
					.source=${spanishWords}
					text-property="name"
					.defaultIndex=${-1}
				></cosmoz-autocomplete>
			</div>
			<div style="margin: 2rem 0;">
				<h3 style="margin-bottom: 10px;">Swedish Words</h3>
				<cosmoz-autocomplete
					label="Choose Swedish word"
					.source=${swedishWords}
					text-property="name"
					.defaultIndex=${-1}
				></cosmoz-autocomplete>
			</div>
		</div>
	`,
};

export const InteractionTest: Story = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0]],
	},
	play: async ({ step }) => {
		await step('Renders with initial value', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete',
			);
			expect(autocomplete).toBeTruthy();

			// Verify chip is rendered
			const chip = autocomplete?.shadowRoot?.querySelector('.chip');
			expect(chip).toBeTruthy();

			// Verify input is present
			const input = autocomplete?.shadowRoot?.querySelector('cosmoz-input');
			expect(input).toBeTruthy();
		});
	},
};
