import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { until } from 'lit-html/directives/until';
import { useCallback } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { array } from '@neovici/cosmoz-utils/lib/array';
import '@neovici/cosmoz-input';
import { useAutocomplete } from './use-autocomplete';
import { listbox } from '../cosmoz-listbox';

const
	blank = () => nothing,
	renderChip = (text, onClear, disabled) => html`
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
	renderChips = (value, textual, onDeselect, disabled) => array(value).map(value =>
		renderChip(textual(value), () => onDeselect(value), disabled)
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

		@keyframes rotating {
			100% {
				transform: rotate(360deg);
			}
		}
		.spinner {
			border-radius: 50%;
			width: 22px;
			height: 22px;
			border: 2px solid rgba(0, 0, 0, 0.1);
			border-top: 2px solid #5f5a92;
			animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
			box-sizing: border-box;
			margin-top: -3px;
		}
	`,

	inputParts = ['input', 'label', 'line', 'error'].map(part => `${ part }: input-${ part }`).join(),

	autocomplete = props => {
		const
			{
				invalid,
				errorMessage,
				label,
				placeholder,
				disabled,
				noLabelFloat,
				alwaysFloatLabel,
				textual,
				text,
				onText,
				onFocus,
				onClick,
				onDeselect,
				value,
				limit,
				showSingle,
				items$,
				values$
			} = props,
			host = useHost(),

			chips = renderChips(value, textual, onDeselect, disabled),
			isOne = limit == 1, //eslint-disable-line eqeqeq
			isSingle = isOne && array(value)?.[0] != null,
			anchor = useCallback(() => host.shadowRoot.querySelector('#input'), [host, value]),
			suggestions = until(items$.then(items => (!isSingle || showSingle) && items.length && listbox({
				...props,
				anchor,
				items
			}) || nothing));

		return html`
			<style>${ style }</style>

			${ !isOne && html`<div class="chips">${ chips }</div>` || '' }

			<cosmoz-input
				id="input" part="input"
				.label=${ label }
				.placeholder=${ placeholder }
				?no-label-float=${ noLabelFloat }
				?always-float-label=${ isSingle || alwaysFloatLabel }
				?readonly=${ isSingle }
				?disabled=${ disabled }
				?invalid=${ until(values$.then(() => invalid, () => true), invalid) }
				.errorMessage=${ until(values$.then(() => errorMessage, e => e.message), errorMessage) }
				.value=${ live(text) }
				@value-changed=${ onText }
				@focusin=${ onFocus } @focusout=${ onFocus }
				@click=${ onClick }
				autocomplete="off"
				exportparts=${ inputParts }
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ isOne && html`<div class="chips" slot="prefix">${ chips }</div>` || '' }
				${ until(values$.then(blank, blank), html`<div slot="suffix" class="spinner"></div>`) }
			</cosmoz-input>

			${ suggestions }`;
	},
	Autocomplete = props => autocomplete({
		...props,
		...useAutocomplete(props)
	}),
	observedAttributes = [
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label',
		'text-property',
		'limit',
		'show-single',
		'show-selection',
		'hide-empty',
		'default-index',
		'item-height',
		'item-limit'
	];

export {
	autocomplete,
	Autocomplete,
	observedAttributes
};
