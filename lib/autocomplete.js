import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { live } from 'lit-html/directives/live';

import { useMemo } from 'haunted';
import {
	array, prop
} from './utils';
import { useInput } from './use-input';
import { useSelect } from './use-select';

import '@polymer/paper-input/paper-input';
import '@polymer/iron-icons/iron-icons';
import '../cosmoz-suggestions';

const chip = (text, onClear) => html`
		<div class="chip">
			<span class="chip-text">${text}</span>
			<iron-icon class="chip-clear" icon="clear" @click=${onClear}></iron-icon>
		</div>
	`,
	chips = (value, textual, onDeselect) => html`
		<div class="chips" slot="prefix">
			${array(value).map(value =>
		chip(textual(value), () => onDeselect(value))
	)}
		</div>
	`,
	autocomplete = function ({
		invalid,
		errorMessage,
		label,
		placeholder,
		disabled,
		noLabelFloat,
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
		suggestionsWidth = '100%'
	}) {
		const $chips = chips(value, textual, onDeselect);
		return html`
			<style>
				:host {
					display: block;
					position: relative;
					--cosmoz-suggestions-width: ${suggestionsWidth};
				}

				#clear {
					height: 24px;
					width: 24px;
					padding: 2px;
					line-height: 8px;
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

			${(limit !== 1 || '') && $chips}

			<paper-input
				id="input"
				.label=${label}
				.errorMessage=${errorMessage}
				.placeholder=${placeholder}
				no-label-float=${noLabelFloat}
				invalid=${ifDefined(invalid)}
				disabled=${ifDefined(disabled)}
				aria-disabled=${ifDefined(disabled)}
				@value-changed=${onText}
				@focused-changed=${onFocus}
				.value=${live(text)}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${(limit === 1 || '') && $chips}
			</paper-input>

			${(items.length || '') &&
				html`
					<cosmoz-suggestions
						.query=${query}
						.items=${items}
						.onSelect=${onSelect}
						.textual=${textual}
					/>
				`}
		`;
	},
	Autocomplete = function ({
		textProperty,
		source,
		value,
		onChange,
		limit = Infinity,
		...opts
	}) {
		const {
				select, deselect, values
			} = useSelect({
				value,
				onChange,
				limit,
				source,
				dispatchEvent: this.dispatchEvent.bind(this)
			}),
			textual = useMemo(() => prop(textProperty), [textProperty]),
			{
				text, query, items, onText, onFocus, onSelect
			} = useInput({
				textual,
				values,
				onSelect: select
			});
		return autocomplete({
			...opts,
			textual,
			text,
			query,
			items,
			onText,
			onFocus,
			onSelect,
			onDeselect: deselect,
			value,
			limit
		});
	},
	observedAttributes = ['no-label-float'];

export {
	autocomplete, Autocomplete, observedAttributes
};
