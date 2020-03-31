import {
	nothing, html
} from 'lit-html';

import {ifDefined} from 'lit-html/directives/if-defined';
import {
	component, useMemo
} from 'haunted';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons';

const Autocomplete = function(
	{
		label,
		disabled,
		placeholder,
		value
	}
){
 return html`
 	<div id="autocomplete">
		<paper-input id="input"
			.label=${label}
			.placeholder=${placeholder}
			.value=${value}
			disabled=${ifDefined(disabled)}
			aria-disabled=${ifDefined(disabled)}
		>
			<slot name="prefix" slot="prefix"></slot>
			<paper-icon-button slot="suffix" id="clear" icon="clear" tabindex="-1" aria-label="Clear"></paper-icon-button>
			<slot name="suffix" slot="suffix"></slot>
		</paper-input>
	</div>
 `;
};

customElements.define('cosmoz-autocomplete', component(Autocomplete));

