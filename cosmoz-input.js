import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { ifDefined } from 'lit-html/directives/if-defined';
import { live } from 'lit-html/directives/live';
import {
	component, useCallback
} from 'haunted';

const styles = `
	:host {
		display: block;
		font-family: var(--cosmoz-font-family, 'Roboto', 'Noto', sans-serif);
	}
	:host([disabled]) {
		opacity: 0.33;
		pointer-events: none;
	}

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
	}

	.control {flex: 1; }

	input {
		display: block;
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		font-size: 16px;
		font-family: inherit;
		line-height: 24px;
	}
	label {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--secondary-text-color);
		white-space: nowrap;
	}

	:host([always-float-label]) label,
	input:not(:placeholder-shown) + label {
		transform: translateY(-75%) scale(0.75);
	}
	input:not(:placeholder-shown):focus + label {
		color: var(--primary-color);
	}

	.line {
		border-bottom: 2px solid var(--secondary-text-color);
	}
	:host(:focus-within) .line {
		border-bottom-color:  var(--primary-color);
	}
	:host([disabled]) .line {
		border-bottom-style: dashed;
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) input:not(:placeholder-shown) + label  {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
	}
	:host([invalid]) label, .error {
		color: var(--error-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--error-color);
	}
`,
	Input = host => {
		const {
			type = 'text',
			value,
			label,
			placeholder,
			readonly,
			disabled,
			invalid,
			errorMessage
		} = host;
		return html`
		<style>${ styles }</style>
		<div class="float">&nbsp;</div>
		<div class="wrap">
			<slot name="prefix"></slot>
			<div class="control">
				<input id="input"
					type=${ type } placeholder=${ placeholder || ' ' } ?readonly=${ readonly }
					?aria-disabled=${ disabled } ?disabled=${ disabled }
					.value=${ live(value) }
				>
				${ label ? html`<label for="input">${ label }</label>` : nothing }
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line"></div>
		${ invalid && errorMessage ? html`<div class="error">${ errorMessage }</div>` : nothing }
	`;
	},

	observedAttributes = [
		'type',
		'disabled',
		'read-only',
		'no-label-float',
		'always-float-label',
		'invalid'
	];

customElements.define(
	'cosmoz-input',
	component(Input, { observedAttributes })
);
