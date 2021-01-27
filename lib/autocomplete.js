import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { useCallback } from 'haunted';
import { portal } from '@neovici/cosmoz-utils/lib/directives/portal';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { observedAttributes as inputAttributes } from '@neovici/cosmoz-input';
import { array } from './utils';
import { useAutocomplete } from './use-autocomplete';
import '../cosmoz-suggestions';

const chip = (text, onClear, disabled) => html`
		<div class="chip" part="chip" title=${ text }>
			<span class="chip-text" part="chip-text">${ text }</span>
			${ !disabled && html`
			<span class="chip-clear" part="chip-clear" @click=${ onClear }>
				<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					<g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
				</svg>
			</span>` || nothing }
		</div>
	`,
	chips = (value, textual, onDeselect, disabled) => array(value).map(value =>
		chip(textual(value), () => onDeselect(value), disabled)
	),
	style = `
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
			flex: 1;
		}
		.chip-clear {
			margin: 2px 4px 2px -6px;
			background-color: #a6a6a6;
			border-radius: 500px;
			cursor: pointer;
			width: 16px;
			height: 16px;
			fill: #cdcdcd;
			display: block;
		}
		.chip-clear svg { display: block; }

		cosmoz-input .chip {
			position: absolute;
			left: 0;
			top: 1px;
			bottom: 1px;
			right: 0;
			margin: 0;
			z-index: 2;
			pointer-events: auto;
		}

		slot {
			display: contents !important;
		}
	`,
	autocomplete = ({
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
		limit,
		confinement,
		placement
	}) => {
		const host = useHost(),
			$chips = chips(value, textual, onDeselect, disabled),
			isOne = limit == 1, //eslint-disable-line eqeqeq
			isSingle = isOne && array(value)?.[0] != null,
			anchor = useCallback(() => host.shadowRoot.querySelector('#input'), [host, value]);
		return html`
			<style>${ style }</style>

			${ !isOne && html`<div class="chips">${ $chips }</div>` || '' }

			<cosmoz-input
				id="input" part="input"
				.label=${ label }
				.placeholder=${ placeholder }
				?no-label-float=${ noLabelFloat }
				?always-float-label=${ isSingle || alwaysFloatLabel }
				?readonly=${ isSingle }
				?disabled=${ disabled }
				?invalid=${ invalid }
				.errorMessage=${ errorMessage }
				.value=${ live(text) }
				@value-changed=${ onText }
				@focused-changed=${ onFocus }
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ isOne && html`<div class="chips" slot="prefix">${ $chips }</div>` || '' }
			</cosmoz-input>


			${ !isSingle && items.length && portal(html`
				<cosmoz-suggestions
					.query=${ query }
					.items=${ items }
					.onSelect=${ onSelect }
					.textual=${ textual }
					.anchor=${ anchor }
					.confinement=${ confinement }
					.placement=${ placement }
				/>`) || nothing }
		`;
	},
	Autocomplete = props => autocomplete({
		...props,
		...useAutocomplete(props)
	}),
	observedAttributes = [...inputAttributes.slice(2), 'text-property', 'limit', 'hide-empty'];

export {
	autocomplete,
	Autocomplete,
	observedAttributes
};
