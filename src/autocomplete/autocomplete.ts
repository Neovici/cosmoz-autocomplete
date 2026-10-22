import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input';
import { t } from 'i18next';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import '../announcer';
import { listbox } from '../listbox';
import { ItemRenderer } from '../listbox/item-renderer';
import './selection';
import './trigger';

import type { ChipRenderer } from './selection';
import './skeleton-span';
import style from './style.css';
import { Props as Base, RProps, useAutocomplete } from './use-autocomplete';

export interface Props<I> extends Base<I> {
	mode?: 'select';
	variant?: 'default' | 'cell' | 'inline';
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	label?: string;
	/** @deprecated search happens in the dropdown; kept for API compatibility */
	placeholder?: string;
	compact?: boolean;
	required?: boolean;
	/** @deprecated the dropdown opens regardless of a filled single-select */
	showSingle?: boolean;
	itemHeight?: number | 'auto';
	itemLimit?: number;
	wrap?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	defaultIndex?: number;
	externalSearch?: boolean;
	itemRenderer?: ItemRenderer<I>;
	chipRenderer?: ChipRenderer<I>;
}

type AProps<I> = Omit<Props<I>, keyof RProps<I>> & RProps<I>;

const inputParts = ['control', 'label', 'hint', 'error', 'wrap']
	.map((part) => `${part}: input-${part}`)
	.join();

const autocomplete = <I>(props: AProps<I>) => {
		const {
				variant,
				opened,
				invalid,
				errorMessage,
				hint,
				label,
				placeholder,
				compact,
				required,
				disabled,
				textual,
				text,
				onText,
				onToggle,
				onDeselect,
				value,
				limit,
				min,
				items,
				source$,
				loading,
				chipRenderer,
				size,
				wrap,
				mode,
			} = props,
			isOne = limit === 1,
			showHint = hint && !invalid,
			showError = invalid && errorMessage,
			describedBy = (showError && 'error') || (showHint && 'hint') || undefined;

		return html`<cosmoz-dropdown-next
				open-on-focus
				?disabled=${disabled}
				.opened=${opened}
				@dropdown-toggle=${onToggle}
				part="dropdown"
			>
				<cosmoz-autocomplete-trigger
					slot="button"
					part="input"
					.label=${label}
					aria-label=${label}
					aria-invalid=${ifDefined(invalid ? 'true' : undefined)}
					aria-describedby=${ifDefined(describedBy)}
					.errorMessage=${guard([source$, errorMessage, compact], () =>
						until(
							source$.then(
								() => (compact ? errorMessage : undefined),
								(e: { message?: string }) => (compact ? e.message : undefined),
							),
							compact ? errorMessage : undefined,
						),
					)}
					?invalid=${guard([source$, invalid], () =>
						until(
							source$.then(
								() => invalid,
								() => true,
							),
							invalid,
						),
					)}
					variant=${ifDefined(variant)}
					.placeholder=${placeholder}
					?compact=${compact}
					?disabled=${disabled}
					?required=${required}
					?has-value=${value.length > 0}
					exportparts=${inputParts}
					role="button"
					tabindex=${disabled ? -1 : 0}
					aria-haspopup="listbox"
					aria-expanded=${opened ? 'true' : 'false'}
					?data-wrap=${wrap}
					size=${ifDefined(size === 'md' ? undefined : size)}
				>
					<slot name="prefix" slot="prefix"></slot>
					<slot name="suffix" slot="suffix">
						${when(mode === 'select', () =>
							chevronDownIcon({
								styles:
									'margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);',
								width: '16',
								height: '16',
							}),
						)}
					</slot>
					<cosmoz-autocomplete-chips
						slot="control"
						.value=${value}
						.min=${min}
						.variant=${variant}
						.textual=${textual}
						.onDeselect=${onDeselect}
						.disabled=${disabled}
						.chipRenderer=${chipRenderer}
						.wrap=${wrap}
						.size=${size}
					></cosmoz-autocomplete-chips>
				</cosmoz-autocomplete-trigger>

				${listbox<I>(
					{
						...props,
						items,
						multi: !isOne,
					},
					html`<cosmoz-input
							slot="search"
							id="search"
							part="search-input"
							placeholder=${t('Search')}
							aria-label=${t('Search')}
							.value=${live(text)}
							@value-changed=${onText}
							@select=${(e: Event) => e.stopPropagation()}
							autocomplete="off"
						></cosmoz-input>
						${when(
							loading,
							() =>
								html`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,
							() =>
								when(
									text != null && text.length > 0 && items.length === 0,
									() =>
										html`<slot name="no-result">
											<span class="no-result">${t('No results found')}</span>
										</slot>`,
								),
						)}`,
				)}
			</cosmoz-dropdown-next>
			${when(
				showHint,
				() =>
					html`<span
						class=${compact ? 'hint sr-only' : 'hint'}
						part="hint"
						id="hint"
						>${hint}</span
					>`,
			)}
			${when(
				showError,
				() =>
					html`<span
						class=${compact ? 'error sr-only' : 'error'}
						part="error"
						id="error"
						>${errorMessage}</span
					>`,
			)}
			<cosmoz-announcer
				.message=${showError ? errorMessage : ''}
			></cosmoz-announcer>`;
	},
	Autocomplete = <I>(props: Props<I>) => {
		const thru = {
			...props,
			...useAutocomplete(props),
		};
		return autocomplete(thru);
	},
	observedAttributes = [
		'variant',
		'disabled',
		'invalid',
		'required',
		'compact',
		'hint',
		'text-property',
		'value-property',
		'limit',
		'min',
		'show-single',
		'preserve-order',
		'keep-opened',
		'keep-query',
		'default-index',
		'external-search',
		'size',
		'item-height',
		'item-limit',
		'wrap',
		'lazy-open',
		'mode',
	] as const;

export { Autocomplete, autocomplete, observedAttributes, style };
