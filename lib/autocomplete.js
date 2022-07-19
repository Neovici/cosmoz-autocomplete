import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live.js';
import { until } from 'lit-html/directives/until.js';
import { useCallback } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { array } from '@neovici/cosmoz-utils/array';
import '@neovici/cosmoz-input';
import { useAutocomplete } from './use-autocomplete';
import { listbox } from '../cosmoz-listbox';
import style from './autocomplete.css';

const blank = () => nothing,
	clear = html`
		<svg
			width="9"
			height="8"
			viewBox="0 0 9 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				x1="7.53033"
				y1="0.994808"
				x2="1.16637"
				y2="7.35877"
				stroke-width="1.5"
			/>
			<line
				x1="7.46967"
				y1="7.35882"
				x2="1.10571"
				y2="0.99486"
				stroke-width="1.5"
			/>
		</svg>
	`,
	renderChip = (text, onClear, disabled, isOne) => html`
		<div
			class="chip"
			part="chip"
			slot="suffix"
			title=${text}
			?data-one=${isOne}
		>
			<span class="chip-text" part="chip-text">${text}</span>
			${(!disabled &&
				html` <span class="chip-clear" part="chip-clear" @click=${onClear}>
					${clear}
				</span>`) ||
			nothing}
		</div>
	`,
	renderBadge = ({ value, onDeselect }) => {
		const len = value?.length;
		return len > 0
			? html`<div class="badge" slot="suffix" part="badge">
					${len}
					<span
						class="badge-clear"
						part="chip-clear"
						@click=${() => onDeselect(value)}
						>${clear}</span
					>
			  </div>`
			: nothing;
	},
	renderSelection = (value, isOne, onDeselect, textual, disabled) => {
		if (isOne || value.length === 1) {
			const val = value[0];
			return val
				? renderChip(textual(val), () => onDeselect(val), disabled, isOne)
				: nothing;
		}
		return renderBadge({ value, onDeselect });
	},
	inputParts = ['input', 'label', 'line', 'error']
		.map((part) => `${part}: input-${part}`)
		.join(),
	autocomplete = (props) => {
		const {
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
				values$,
			} = props,
			host = useHost(),
			isOne = limit == 1, // eslint-disable-line eqeqeq
			isSingle = isOne && array(value)?.[0] != null,
			anchor = useCallback(
				() => host.shadowRoot.querySelector('#input'),
				[host, value]
			),
			suggestions = until(
				items$.then(
					(items) =>
						((!isSingle || showSingle) &&
							items.length &&
							listbox({
								...props,
								anchor,
								items,
								multi: !isOne,
							})) ||
						nothing
				)
			);

		return html` <style>
				${style}
			</style>
			<cosmoz-input
				id="input"
				part="input"
				.label=${label}
				.placeholder=${placeholder}
				?no-label-float=${noLabelFloat}
				?always-float-label=${isSingle || alwaysFloatLabel}
				?readonly=${isSingle}
				?disabled=${disabled}
				?invalid=${until(
					values$.then(
						() => invalid,
						() => true
					),
					invalid
				)}
				.errorMessage=${until(
					values$.then(
						() => errorMessage,
						(e) => e.message
					),
					errorMessage
				)}
				.value=${live(text)}
				@value-changed=${onText}
				@focusin=${onFocus}
				@focusout=${onFocus}
				@click=${onClick}
				autocomplete="off"
				exportparts=${inputParts}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${renderSelection(array(value), isOne, onDeselect, textual, disabled)}
				${until(
					values$.then(blank, blank),
					html`<div slot="suffix" class="spinner"></div>`
				)}
			</cosmoz-input>

			${suggestions}`;
	},
	Autocomplete = (props) =>
		autocomplete({
			...props,
			...useAutocomplete(props),
		}),
	observedAttributes = [
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label',
		'text-property',
		'limit',
		'show-single',
		'keep-query',
		'keep-opened',
		'hide-empty',
		'default-index',
		'item-height',
		'item-limit',
	];

export { autocomplete, Autocomplete, observedAttributes };
