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
	`;

export {
	basic, single
};
