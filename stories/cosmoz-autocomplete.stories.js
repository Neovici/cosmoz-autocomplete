import { html } from 'lit-html';
import '../src/autocomplete';
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
	`,
	placeholder = () => html`
		${css}
		<cosmoz-autocomplete
			.placeholder=${'Choose color'}
			.source=${colors}
			.limit=${1}
			.textProperty=${'text'}
			.value=${colors[0]}
		></cosmoz-autocomplete>
	`;

export { basic, single, hideEmpty, defaultIndex, disabled, placeholder };

export const overflown = () =>
	html` ${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.textProperty=${'text'}
			.value=${[colors[0], colors[1], colors[2]]}
			style="max-width: 170px"
		></cosmoz-autocomplete>`;

export const wrap = () =>
	html` ${css}
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.textProperty=${'text'}
			.value=${[colors[0], colors[1], colors[2]]}
			wrap
			style="max-width: 170px"
		></cosmoz-autocomplete>`;

export const select = () => html`
	${css}
	<cosmoz-autocomplete
		.label=${'Choose color'}
		.source=${colors}
		.limit=${1}
		.textProperty=${'text'}
		.value=${colors[2]}
		show-single
		preserve-order
		.min=${1}
	></cosmoz-autocomplete>
`;
