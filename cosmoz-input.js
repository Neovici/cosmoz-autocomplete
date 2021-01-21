import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { useImperativeApi } from '@neovici/cosmoz-utils/lib/hooks/use-imperative-api';
import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import {
	component, useCallback
} from 'haunted';

const styles = `
	:host {
		display: block;
		padding: 8px 0;
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

	.control { flex: 1; }

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
		color: var(--secondary-text-color, #737373);
		white-space: nowrap;
	}

	:host([always-float-label]) label,
	input:not(:placeholder-shown) + label {
		transform: translateY(-75%) scale(0.75);
	}
	input:not(:placeholder-shown):focus + label {
		color: var(--primary-color, #3f51b5);
	}

	.line {
		border-bottom: 2px solid var(--secondary-text-color, #737373);
	}
	:host(:focus-within) .line {
		border-bottom-color:  var(--primary-color, #3f51b5);
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
		color: var(--error-color, #dd2c00);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--error-color, #dd2c00);
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
			} = host,

			onInput = useCallback(e => notifyProperty(host, 'value', e.target.value), []),
			onFocus = useCallback(e => notifyProperty(host, 'focused', e.type === 'focus'), []),
			focus = useCallback(() => host.shadowRoot.querySelector('input')?.focus(), []);

		useImperativeApi({ focus });

		return html`
		<style>${ styles }</style>
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control">
				<input id="input" part="input"
					type=${ type } placeholder=${ placeholder || ' ' } ?readonly=${ readonly }
					?aria-disabled=${ disabled } ?disabled=${ disabled }
					.value=${ live(value ?? '') }
					@input=${ onInput } @focus=${ onFocus } @blur=${ onFocus }
				>
				${ label ? html`<label for="input">${ label }</label>` : nothing }
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${ invalid && errorMessage ? html`<div class="error" part="error">${ errorMessage }</div>` : nothing }
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
