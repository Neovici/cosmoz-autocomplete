/* eslint-disable max-lines */
import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';
import '../src/autocomplete';
import { colors } from './data';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		cosmoz-autocomplete,
		cosmoz-listbox {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;

const Autocomplete = ({
	source,
	limit,
	textProperty,
	min,
	label = '',
	value = [],
	hideEmpty = false,
	disabled = false,
	placeholder = '',
	defaultIndex = 0,
	showSingle = false,
	preserveOrder = false,
	wrap = false,
	overflowed = false,
}) => {
	const styles = {
		maxWidth: overflowed ? '170px' : 'initial',
	};

	return html`
		${CSS}
		<cosmoz-autocomplete
			.label=${label}
			.placeholder=${placeholder}
			.source=${source}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			?hide-empty=${hideEmpty}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			style=${styleMap(styles)}
		></cosmoz-autocomplete>
	`;
};

const ContourAutocomplete = ({
	source,
	limit,
	textProperty,
	min,
	label = '',
	value = [],
	hideEmpty = false,
	disabled = false,
	placeholder = '',
	defaultIndex = 0,
	showSingle = false,
	preserveOrder = false,
	wrap = false,
	overflowed = false,
	forContour = false,
}) => {
	const styles = {
		maxWidth: overflowed ? '255px' : 'initial',
	};

	const classes = {
		'contour-autocomplete': forContour,
	};

	return html`
		${CSS}
		<style>
			.contour-autocomplete {
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
		<cosmoz-autocomplete
			.label=${label}
			.placeholder=${placeholder}
			.source=${source}
			.textProperty=${textProperty}
			.limit=${limit}
			.value=${value}
			.min=${min}
			.defaultIndex=${defaultIndex}
			?hide-empty=${hideEmpty}
			?disabled=${disabled}
			?show-single=${showSingle}
			?preserve-order=${preserveOrder}
			?wrap=${wrap}
			style=${styleMap(styles)}
			class="${classMap(classes)}"
		></cosmoz-autocomplete>
	`;
};

export default {
	title: 'Autocomplete',
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
		hideEmpty: { control: 'boolean' },
		disabled: {
			control: 'boolean',
			description:
				'A boolean representing the disabled state of the Autocomplete',
		},
		placeholder: { control: 'text' },
		showSingle: { control: 'boolean' },
		preserveOrder: { control: 'boolean' },
		min: { control: 'number' },
		wrap: { control: 'boolean' },
		overflowed: { control: 'boolean' },
		forContour: { control: 'boolean' },
	},
	parameters: {
		docs: {
			controls: {
				exclude: ['overflowed', 'forContour'],
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
		value: [colors[0], colors[3]],
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};

export const Single = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		value: [colors[2]],
	},
	parameters: {
		docs: {
			description: {
				story: 'Choose a single value',
			},
		},
	},
};

export const HideEmpty = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		value: [colors[2]],
		hideEmpty: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Hide the empty value',
			},
		},
	},
};

export const DefaultIndex = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		defaultIndex: -1,
	},
	parameters: {
		docs: {
			description: {
				story: 'Select a default index for the colors, in this case -1',
			},
		},
	},
};

export const DefaultIndexSingleValue = {
	args: {
		label: 'Choose color (single value)',
		source: colors.slice(0, 1),
		textProperty: 'text',
		limit: 1,
		defaultIndex: -1,
	},
	parameters: {
		docs: {
			description: {
				story: 'Select a default index for the color, in this case -1',
			},
		},
	},
};

export const Disabled = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		value: colors[0],
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'The disabled version',
			},
		},
	},
};

export const Placeholder = {
	args: {
		placeholder: 'Choose color (placeholder text)',
		source: colors,
		limit: 1,
		textProperty: 'text',
		value: colors[0],
	},
	parameters: {
		docs: {
			description: {
				story: 'Use the placeholder instead of the label',
			},
		},
	},
};

export const Select = {
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
	parameters: {
		docs: {
			description: {
				story: 'Make it act like a Select component',
			},
		},
	},
};

export const Overflown = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[1], colors[2]],
		overflowed: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Overflown variant',
			},
		},
	},
};

export const Wrap = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[1], colors[2]],
		wrap: true,
		overflowed: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Overflown and Wrapped variant',
			},
		},
	},
};

export const Contour = ContourAutocomplete.bind({});
Contour.args = {
	label: 'Choose color',
	source: colors,
	textProperty: 'text',
	value: [colors[0], colors[1], colors[2]],
	wrap: true,
	overflowed: true,
	forContour: true,
};
Contour.parameters = {
	docs: {
		description: {
			story: 'Contour and Wrapped variant',
		},
	},
};

export const UppercaseDecorator = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[3]],
	},
	decorators: [
		(story) => html`<div style="text-transform: uppercase">${story()}</div>`,
	],
	parameters: {
		docs: {
			description: {
				story: 'The uppercase decorator version',
			},
		},
	},
};
