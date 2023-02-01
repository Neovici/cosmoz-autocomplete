import { html } from 'lit-html';
import '../cosmoz-autocomplete';
import { colors } from './data';

export default {
	title: 'Autocomplete',
	component: 'cosmoz-autocomplete',
};
const css = html`
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
			cosmoz-autocomplete,
			cosmoz-listbox {
				font-family: 'Inter', sans-serif;
			}
		</style>
	`,
	basic = () => html`
		${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.textProperty=${'text'}
			.value=${[colors[0], colors[3]]}
		></cosmoz-autocomplete>
	`,
	single = () => html`
		${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.limit=${1}
			.textProperty=${'text'}
			.value=${colors[2]}
		></cosmoz-autocomplete>
	`,
	hideEmpty = () => html`
		${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.limit=${1}
			.textProperty=${'text'}
			.value=${colors[2]}
			hide-empty
		></cosmoz-autocomplete>
	`,
	defaultIndex = () => html`
		${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.limit=${1}
			.textProperty=${'text'}
			default-index="-1"
		></cosmoz-autocomplete>
		<cosmoz-autocomplete
			.label=${'Choose color (single value)'}
			.source=${colors.slice(0, 1)}
			.limit=${1}
			.textProperty=${'text'}
			default-index="-1"
		></cosmoz-autocomplete>
	`,
	filterInside = () => html`
		${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.textProperty=${'text'}
			.value=${[colors[0], colors[3]]}
			keep-opened
			float-label-value-selected
			filter-from-dropdown
			show-multiple-selections
		></cosmoz-autocomplete>
	`,
	disabled = () => html`
		${css}
		<cosmoz-autocomplete
			disabled
			.label=${'Choose color'}
			.source=${colors}
			.limit=${1}
			.textProperty=${'text'}
			.value=${colors[2]}
		></cosmoz-autocomplete>
	`;

export { basic, filterInside, single, hideEmpty, defaultIndex, disabled };
