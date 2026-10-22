import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import {
	chevronDownIcon,
	plusIcon,
	searchMdIcon,
} from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input';
import { t } from 'i18next';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { listbox } from '../listbox';
import { ItemRenderer } from '../listbox/item-renderer';
import { ChipRenderer, selection } from './selection';
import './skeleton-span';
import style from './style.css';
import { Props as Base, RProps, useAutocomplete } from './use-autocomplete';
import { useOverflow } from './use-overflow';

export interface Props<I> extends Base<I> {
	mode?: 'select';
	variant?: 'default' | 'cell' | 'inline' | 'pill';
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	label?: string;
	placeholder?: string;
	searchPlaceholder?: string;
	compact?: boolean;
	required?: boolean;
	showSingle?: boolean;
	itemHeight?: number | 'auto';
	itemLimit?: number;
	wrap?: boolean;
	defaultIndex?: number;
	externalSearch?: boolean;
	itemRenderer?: ItemRenderer<I>;
	chipRenderer?: ChipRenderer<I>;
}

type AProps<I> = Omit<Props<I>, keyof RProps<I>> &
	RProps<I> & {
		onInputRef?: (el?: Element) => void;
	};

const inputParts = ['input', 'control', 'label', 'line', 'error', 'wrap']
	.map((part) => `${part}: input-${part}`)
	.join();

const shouldShowDropdown = <I>({
	opened,
	isSingle,
	showSingle,
	hasResultsOrQuery,
}: Pick<AProps<I>, 'opened' | 'showSingle'> & {
	isSingle: boolean;
	hasResultsOrQuery: boolean;
}) => {
	if (!opened) return false;
	if (isSingle && !showSingle) return false;
	return hasResultsOrQuery;
};

const noResult = () =>
	html`<slot name="no-result">
		<span class="no-result">${t('No results found')}</span>
	</slot>`;

// Light-dismissing the popover drops focus to the body; hand it back to the
// add button when it was inside the popover.
const returnFocus = (e: ToggleEvent) => {
	if (e.newState !== 'closed') return;
	const dropdown = e.currentTarget as HTMLElement;
	if (
		!dropdown.matches(':focus-within') &&
		document.activeElement !== document.body
	) {
		return;
	}
	dropdown.querySelector<HTMLElement>('.add')?.focus();
};

/**
 * Chips followed by an "add" button; the button opens a popover with its own
 * search field above the options.
 */
const pill = <I>(props: AProps<I>) => {
	const {
		opened,
		setOpened,
		disabled,
		label,
		placeholder,
		searchPlaceholder,
		text,
		onText,
		onToggle,
		onDeselect,
		value,
		min,
		textual,
		chipRenderer,
		items,
		loading,
	} = props;

	return html`<div
		class="pill-row"
		part="row"
		@click=${(e: Event) =>
			!disabled && (e.target as Element).closest?.('.badge') && setOpened(true)}
	>
		${selection({
			value,
			min,
			isOne: false,
			onDeselect,
			textual,
			disabled,
			chipRenderer,
			interactiveBadge: !disabled,
		})}
		<cosmoz-dropdown-next
			?disabled=${disabled}
			.opened=${opened}
			@dropdown-toggle=${(e: ToggleEvent) => {
				onToggle(e);
				returnFocus(e);
			}}
			part="dropdown"
		>
			<button
				slot="button"
				class="add"
				part="add"
				type="button"
				?disabled=${disabled}
				aria-haspopup="dialog"
				aria-expanded=${opened ? 'true' : 'false'}
			>
				${plusIcon({ width: '12', height: '12' })}
				<span>${placeholder ?? label}</span>
			</button>
			<div class="panel" part="panel">
				<cosmoz-input
					class="search"
					part="search"
					autofocus
					compact
					.label=${label ?? placeholder}
					.placeholder=${searchPlaceholder ?? t('Search')}
					.value=${live(text)}
					@value-changed=${onText}
					autocomplete="off"
				>
					${searchMdIcon({ slot: 'prefix', width: '16', height: '16' })}
				</cosmoz-input>
				${when(opened, () =>
					listbox<I>(
						{ ...props, items, multi: true, checkmark: true },
						when(
							loading,
							() =>
								html`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,
							() => when(text && items.length === 0, () => noResult()),
						),
					),
				)}
				<slot name="footer"></slot>
			</div>
		</cosmoz-dropdown-next>
	</div>`;
};

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
				showSingle,
				items,
				source$,
				loading,
				chipRenderer,
				mode,
			} = props,
			isOne = limit === 1,
			isSingle = isOne && value?.[0] != null;

		const hasResultsOrQuery =
			loading || items.length > 0 || (text != null && text.length > 0);

		return html`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${disabled}
			.opened=${opened}
			@dropdown-toggle=${onToggle}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${label}
				.placeholder=${isSingle ? undefined : placeholder}
				hint=${ifDefined(hint)}
				variant=${ifDefined(variant)}
				?compact=${compact}
				?disabled=${disabled}
				?required=${required}
				?invalid=${guard([source$, invalid], () =>
					until(
						source$.then(
							() => invalid,
							() => true,
						),
						invalid,
					),
				)}
				.errorMessage=${guard([source$, errorMessage], () =>
					until(
						source$.then(
							() => errorMessage,
							(e: { message?: string }) => e.message,
						),
						errorMessage,
					),
				)}
				.value=${live(text)}
				@value-changed=${onText}
				autocomplete="off"
				exportparts=${inputParts}
				?data-one=${isOne}
				?data-single=${isSingle}
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
				${selection({
					value,
					min,
					isOne,
					onDeselect,
					textual,
					disabled,
					chipRenderer,
				})}
			</cosmoz-input>

			${when(
				shouldShowDropdown({
					opened,
					isSingle,
					showSingle,
					hasResultsOrQuery,
				}),
				() =>
					listbox<I>(
						{
							...props,
							items,
							multi: !isOne,
						},
						when(
							loading,
							() =>
								html`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,
							() =>
								when(
									text != null && text.length > 0 && items.length === 0,
									() => noResult(),
								),
						),
					),
			)}
		</cosmoz-dropdown-next>`;
	},
	Autocomplete = <I>(props: Props<I>) => {
		const thru = {
			...props,
			...useAutocomplete(props),
		};
		useOverflow(thru);
		return props.variant === 'pill' ? pill(thru) : autocomplete(thru);
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
		'item-height',
		'item-limit',
		'wrap',
		'lazy-open',
		'mode',
	] as const;

export { Autocomplete, autocomplete, observedAttributes, style };
