/* eslint-disable max-lines */
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '../src/excluding';
import { colors } from './data';
import { when } from 'lit-html/directives/when.js';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		html {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;

const delay = (source, time) => {
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
	excludedBgColor = '#8b5cf6',
	excludedChipColor = '#ffffff',
	excludedChipClearBgColor = '#6d28d9',
	excludedChipIconBgColor = '#7c3aed',
	excludedListboxActiveColor = 'rgba(139, 92, 246, 0.1)',
}) => {
	const styles = {
		maxWidth: overflowed ? '170px' : 'initial',
		'--cosmoz-autocomplete-excluded-bg-color': excludedBgColor,
		'--cosmoz-autocomplete-excluded-chip-color': excludedChipColor,
		'--cosmoz-autocomplete-excluded-chip-clear-bg-color':
			excludedChipClearBgColor,
		'--cosmoz-autocomplete-excluded-chip-icon-bg-color':
			excludedChipIconBgColor,
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
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			?keep-opened=${keepOpened}
			?keep-query=${keepQuery}
			style=${styleMap(styles)}
		></cosmoz-autocomplete-excluding>
	`;
};

export default {
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
				defaultValue: { summary: '#8b5cf6' },
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
				defaultValue: { summary: '#6d28d9' },
			},
			name: '--cosmoz-autocomplete-excluded-chip-clear-bg-color',
		},
		excludedChipIconBgColor: {
			control: 'color',
			description: 'Background color for chip icons',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#7c3aed' },
			},
			name: '--cosmoz-autocomplete-excluded-chip-icon-bg-color',
		},
		excludedListboxActiveColor: {
			control: 'color',
			description:
				'Background color for excluded listbox items on hover/active',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'rgba(139, 92, 246, 0.1)' },
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

export const Basic = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [
			{ item: colors[0], excluded: false },
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
};
