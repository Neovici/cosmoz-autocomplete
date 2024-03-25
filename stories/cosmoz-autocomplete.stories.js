import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
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

export default {
	title: 'Autocomplete',
	render: Autocomplete,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		textProperty: { control: 'text' },
		limit: { control: 'number' },
		defaultIndex: { control: 'number' },
		hideEmpty: { control: 'boolean' },
		disabled: { control: 'boolean' },
		placeholder: { control: 'text' },
		showSingle: { control: 'boolean' },
		preserveOrder: { control: 'boolean' },
		min: { control: 'number' },
		wrap: { control: 'boolean' },
		overflowed: { control: 'boolean' },
	},
};

export const Basic = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[3]],
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
};

export const DefaultIndex = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		limit: 1,
		defaultIndex: -1,
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
};

export const Placeholder = {
	args: {
		placeholder: 'Choose color (placeholder text)',
		source: colors,
		limit: 1,
		textProperty: 'text',
		value: colors[0],
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
};

export const Overflown = {
	args: {
		label: 'Choose color',
		source: colors,
		textProperty: 'text',
		value: [colors[0], colors[1], colors[2]],
		overflowed: true,
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
};
