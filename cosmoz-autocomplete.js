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
	source,
	textProperty,
	onChange,
	value: eValue
}) => {
	const {
		text,
		query,
		items,
		clear,
		onEdit,
		onText,
		onFocus,
		onSelect,
		value
	} = useAutocomplete({
		source,
		textProperty,
		onChange,
		value: eValue
	});
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
			.errorMessage=${errorMessage}
			invalid=${ifDefined(invalid)}
			disabled=${ifDefined(disabled)}
			.placeholder=${placeholder}
			aria-disabled=${ifDefined(disabled)}
			@input=${onEdit}
			@value-changed=${onText}
			@focused-changed=${onFocus}
			.value=${live(text)}
		>
			<slot name="prefix" slot="prefix"></slot>
			${!!value &&
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
		${items.length
		? html`
			<cosmoz-suggestions
				.query=${query}
				.items=${items}
				.onSelect=${onSelect}
				.textProperty=${textProperty}
			/>
		 `
		: nothing}
	`;
};

customElements.define('cosmoz-autocomplete', component(Autocomplete));
