import { html } from 'lit-html';
import '../cosmoz-autocomplete';
import { colors } from './data';

export default {
	title: 'Autocomplete',
	component: 'cosmoz-autocomplete'
};

const basic = () => html`
		<cosmoz-autocomplete
			.label=${ 'Choose color' }
			.source=${ colors }
			.textProperty=${ 'text' }
			.value=${ [colors[0], colors[3]] }
		></cosmoz-autocomplete>
	`,
	single = () => html`
		<cosmoz-autocomplete
			.label=${ 'Choose color' }
			.source=${ colors }
			.limit=${ 1 }
			.textProperty=${ 'text' }
			.value=${ colors[2] }
		></cosmoz-autocomplete>
	`,
	hideEmpty = () => html`
		<cosmoz-autocomplete
			.label=${ 'Choose color' }
			.source=${ colors }
			.limit=${ 1 }
			.textProperty=${ 'text' }
			.value=${ colors[2] }
			hide-empty
		></cosmoz-autocomplete>
	`,
	defaultIndex = () => html`
		<cosmoz-autocomplete
			.label=${ 'Choose color' }
			.source=${ colors }
			.limit=${ 1 }
			.textProperty=${ 'text' }
			default-index="-1"
		></cosmoz-autocomplete>
		<cosmoz-autocomplete
			.label=${ 'Choose color (single value)' }
			.source=${ colors.slice(0, 1) }
			.limit=${ 1 }
			.textProperty=${ 'text' }
			default-index="-1"
		></cosmoz-autocomplete>
	`,
	disabled = () => html`
		<cosmoz-autocomplete
			disabled
			.label=${ 'Choose color' }
			.source=${ colors }
			.limit=${ 1 }
			.textProperty=${ 'text' }
			.value=${ colors[2] }
		></cosmoz-autocomplete>
	`;

export {
	basic, single, hideEmpty, defaultIndex, disabled
};
