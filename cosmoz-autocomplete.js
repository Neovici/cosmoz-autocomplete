import {
	nothing, html
} from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { live } from 'lit-html/directives/live';
import { component } from 'haunted';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';
import './cosmoz-suggestions';
import { useAutocomplete } from './lib/use-autocomplete';

const Autocomplete = ({
	invalid,
	errorMessage,
	label,
	placeholder,
	disabled,
	options,
	textProperty
}) => {
	const {
			value,
			setValue,
			focused,
			setFocused,
			items,
			clear
		} = useAutocomplete({
			options
		}),
		onSelect = ({ text }) => {
			setValue(text);
		};
	return html`
		<style>
			:host {
				display: block;
				position: relative;
			}
		</style>

		<paper-input
			id="input"
			.label=${label}
			.value=${live(value)}
			.errorMessage=${errorMessage}
			invalid=${ifDefined(invalid)}
			disabled=${ifDefined(disabled)}
			.placeholder=${placeholder}
			aria-disabled=${ifDefined(disabled)}
			@value-changed=${e => setValue(e.target.value)}
			@focused-changed=${e => setFocused(e.target.focused)}
		>
			<slot name="prefix" slot="prefix"></slot>
			${clear &&
				html`
					<paper-icon-button
						id="clear"
						slot="suffix"
						icon="clear"
						tabindex="-1"
						@click="${clear}}"
					></paper-icon-button>
				`}
			<slot name="suffix" slot="suffix"></slot>
		</paper-input>
		${/* eslint-disable indent */
			focused && items.length
				? html`<cosmoz-suggestions .items=${items} .onSelect=${onSelect} .textProperty=${textProperty} />`
				: nothing
		/*eslint-enable indent */}
	`;
};

customElements.define('cosmoz-autocomplete', component(Autocomplete));
