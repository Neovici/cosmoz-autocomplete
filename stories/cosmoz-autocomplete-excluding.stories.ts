import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
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
	limit?: number;
	textProperty: string;
	min?: number;
	label?: string;
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
	contour?: boolean;
	uppercase?: boolean;
	excludedBgColor?: string;
	excludedChipColor?: string;
	excludedChipClearBgColor?: string;
	excludedChipClearStrokeColor?: string;
	excludedListboxActiveColor?: string;
}

const CSS = html`
	<style>
		.custom-message {
			font-size: 14px;
			font-weight: 500;
			padding: 0 22px;
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
	opened = false,
	overflowed = false,
	responseTime,
	contour,
	excludedBgColor,
	excludedChipColor,
	excludedChipClearBgColor,
	excludedChipClearStrokeColor,
	excludedListboxActiveColor,
}: AutocompleteExcludingArgs): TemplateResult => {
	const styles = {
		maxWidth: overflowed ? '170px' : 'initial',
		'--cosmoz-autocomplete-excluded-bg-color': excludedBgColor,
		'--cosmoz-autocomplete-excluded-chip-color': excludedChipColor,
		'--cosmoz-autocomplete-excluded-chip-clear-bg-color':
			excludedChipClearBgColor,
		'--cosmoz-autocomplete-excluded-chip-clear-stroke':
			excludedChipClearStrokeColor,
		'--cosmoz-listbox-excluded-active-color': excludedListboxActiveColor,
	};

	const sourceDelayed = delay(source, responseTime);

	return html`
		${CSS}

		<cosmoz-autocomplete-excluding
			class=${when(contour, () => 'contour')}
			.label=${label}
			.placeholder=${placeholder}
			.source=${sourceDelayed}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			.opened=${opened}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			?keep-opened=${keepOpened}
			?keep-query=${keepQuery}
			style=${styleMap(styles)}
		>
			<p slot="no-result" class="custom-message">Custom message no results</p>
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
		contour: { control: 'boolean' },
		excludedBgColor: {
			control: 'color',
			description: 'Background color for excluded chip/listbox items',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'rgb(244, 67, 54)' },
			},
			name: '--cosmoz-autocomplete-excluded-bg-color',
		},
		excludedChipColor: {
			control: 'color',
			description: 'Text color for excluded chips',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#ffffff' },
			},
			name: '--cosmoz-autocomplete-excluded-chip-color',
		},
		excludedChipClearBgColor: {
			control: 'color',
			description: 'Background color for clear button',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#ffffff' },
			},
			name: '--cosmoz-autocomplete-excluded-chip-clear-bg-color',
		},
		excludedChipClearStrokeColor: {
			control: 'color',
			description: 'Background color for chip icons',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'rgb(244, 67, 54)' },
			},
			name: '--cosmoz-autocomplete-excluded-chip-clear-stroke',
		},
		excludedListboxActiveColor: {
			control: 'color',
			description:
				'Background color for excluded listbox items on hover/active',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'rgba(244, 67, 54, 0.1)' },
			},
			name: '--cosmoz-listbox-excluded-active-color',
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
				exclude: ['overflowed', 'contour', 'responseTime', 'uppercase'],
			},
			description: {
				component: 'The Cosmoz Autocomplete web component',
			},
		},
	},
};

export default meta;
type Story = StoryObj<AutocompleteExcludingArgs>;

export const Basic: Story = {
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
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
	play: async ({ canvas, step }) => {
		await step('Renders with chips showing excluded state', async () => {
			await canvas.findByShadowText(/Red/u);
			await canvas.findByShadowText(/Blue/u);
		});

		await step('Has the autocomplete-excluding element', async () => {
			const autocomplete = document.querySelector<HTMLElement>(
				'cosmoz-autocomplete-excluding',
			);
			expect(autocomplete).toBeTruthy();
		});
	},
};

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
