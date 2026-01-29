import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { when } from 'lit-html/directives/when.js';
import '../src/autocomplete';
import { colors } from './data';
import { spanishWords } from './spanish-words';
import { swedishWords } from './swedish-words';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		cosmoz-autocomplete,
		cosmoz-listbox {
			font-family: 'Inter', sans-serif;
		}

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
}) => {
	const styles = {
		maxWidth: overflowed ? '170px' : 'initial',
	};

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
		>
		</cosmoz-autocomplete>
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

export const AccentInsensitiveSearch = {
	render: () => html`
		${CSS}
		<div>
			<div style="margin: 2rem 0;">
				<h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
					Spanish Words
				</h3>
				<cosmoz-autocomplete
					label="Choose Spanish word"
					.source=${spanishWords}
					text-property="name"
					.defaultIndex=${-1}
				></cosmoz-autocomplete>
			</div>
			<div style="margin: 2rem 0;">
				<h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
					Swedish Words
				</h3>
				<cosmoz-autocomplete
					label="Choose Swedish word"
					.source=${swedishWords}
					text-property="name"
					.defaultIndex=${-1}
				></cosmoz-autocomplete>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Test accent-insensitive search with Spanish and Swedish words. Try typing "medico", "telefono", or "musica" in ' +
					'the Spanish component, or "forsok", "manad", "karlek" in the Swedish component to see how the search handles accented variants.',
			},
		},
	},
};
