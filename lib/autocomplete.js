import { html } from 'lit-html';
import { live } from 'lit-html/directives/live';

import { array } from './utils';
import { useAutocomplete } from './use-autocomplete';

import '@polymer/paper-input/paper-input';
import '@polymer/iron-icons/iron-icons';
import '../cosmoz-suggestions';

const chip = (text, onClear) => html`
		<div class="chip">
			<span class="chip-text">${ text }</span>
			<iron-icon class="chip-clear" icon="clear" @click=${ onClear }></iron-icon>
		</div>
	`,
	chips = (value, textual, onDeselect) => html`
		<div class="chips" slot="prefix">
			${ array(value).map(value =>
		chip(textual(value), () => onDeselect(value))
	) }
		</div>
	`,
	autocomplete = function ({
		invalid,
		errorMessage,
		label,
		placeholder,
		disabled,
		noLabelFloat,
		alwaysFloatLabel,
		textual,
		text,
		query,
		onText,
		onFocus,
		onSelect,
		onDeselect,
		value,
		items,
		limit
	}) {
		const $chips = chips(value, textual, onDeselect);
		return html`
			<style>
				:host {
					display: block;
					position: relative;
				}
				.chips {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					align-items: flex-end;
				}
				.chip {
					border-radius: 500px;
					background-color: #e0e0e0;
					margin: 1px 4px 1px 0;
					white-space: nowrap;
					overflow: hidden;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.chip-text {
					color: #424242;
					margin: 0 10px;
					font-size: 13px;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.chip-clear {
					margin: 2px 4px 2px -6px;
					color: #cdcdcd;
					background-color: #a6a6a6;
					border-radius: 500px;
					cursor: pointer;
					min-width: 16px;
					width: 16px;
					min-height: 16px;
					height: 16px;
				}
			</style>

			${ (limit !== 1 || '') && $chips }

			<paper-input
				id="input"
				.label=${ label }
				.errorMessage=${ errorMessage }
				.placeholder=${ placeholder }
				?no-label-float=${ noLabelFloat }
				?always-float-label=${ alwaysFloatLabel }
				?invalid=${ invalid }
				?disabled=${ disabled }
				?aria-disabled=${ disabled }
				@value-changed=${ onText }
				@focused-changed=${ onFocus }
				.value=${ live(text) }
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ (limit === 1 || '') && $chips }
			</paper-input>

			${ (items.length || '') &&
				html`
					<cosmoz-suggestions
						.query=${ query }
						.items=${ items }
						.onSelect=${ onSelect }
						.textual=${ textual }
					/>
				` }
		`;
	},
	Autocomplete = props => autocomplete({
		...props,
		...useAutocomplete(props)
	}),
	observedAttributes = ['no-label-float', 'always-float-label'];

export {
	autocomplete, Autocomplete, observedAttributes
};
