import { html } from 'lit-html';
import '../src/autocomplete/';
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
	`,
	contourStyling = () => html` <style>
			cosmoz-autocomplete {
				--cosmoz-input-border-radius: 4px;
				--cosmoz-input-padding: 8px 0;
				--cosmoz-input-label-width: auto;
				--cosmoz-input-no-placeholder-label-bg: white;
				--cosmoz-input-label-padding: 0;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-background: white;
				--cosmoz-autocomplete-chip-border-radius: 4px;
			}
			cosmoz-autocomplete::part(input-control) {
				margin: 0 8px;
			}
			cosmoz-autocomplete::part(chip-clear) {
				margin-left: 4px;
			}
		</style>
		<cosmoz-autocomplete
			.label=${'Choose color'}
			.source=${colors}
			.limit=${5}
			.textProperty=${'text'}
			.value=${colors[0]}
			contour
		></cosmoz-autocomplete>`;

export {
	basic,
	single,
	hideEmpty,
	defaultIndex,
	disabled,
	placeholder,
	contourStyling,
};

export const overflown = () => html` ${css}
	<cosmoz-autocomplete
		.label=${'Choose color'}
		.source=${colors}
		.textProperty=${'text'}
		.value=${[colors[0], colors[1], colors[2]]}
		style="max-width: 170px"
	></cosmoz-autocomplete>`;

export const wrap = () => html` ${css}
	<cosmoz-autocomplete
		.label=${'Choose color'}
		.source=${colors}
		.textProperty=${'text'}
		.value=${[colors[0], colors[1], colors[2]]}
		wrap
		style="max-width: 170px"
	></cosmoz-autocomplete>`;
