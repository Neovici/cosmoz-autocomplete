import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import { plusIcon, searchMdIcon } from '@neovici/cosmoz-icons/untitled';
import '@neovici/cosmoz-input';
import '@neovici/cosmoz-tooltip';
import { sheet } from '@neovici/cosmoz-utils';
import { component, useCallback, useProperty } from '@pionjs/pion';
import { t } from 'i18next';
import { html as lit } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { when } from 'lit-html/directives/when.js';
import type { Props as AutocompleteProps } from '../autocomplete/autocomplete';
import { selection } from '../autocomplete/selection';
import '../autocomplete/skeleton-span';
import { type RProps, useAutocomplete } from '../autocomplete/use-autocomplete';
import { listbox } from '../listbox';
import style from './style.css';
import { useOverflow } from './use-overflow';

export type Props<I> = Omit<AutocompleteProps<I>, 'variant'> & {
	/** Placeholder of the search field inside the popover */
	searchPlaceholder?: string;
};

type PillsProps<I> = Omit<Props<I>, keyof RProps<I>> & RProps<I>;

const noResult = () =>
	lit`<slot name="no-result">
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
export const pills = <I>(props: PillsProps<I>) => {
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

	return lit`<div
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
			overflowBadge: lit`<button
				type="button"
				class="badge overflow-button"
				name="overflow"
				?disabled=${disabled}
				aria-label=${t('Show more')}
				aria-haspopup="dialog"
				aria-expanded=${opened ? 'true' : 'false'}
				hidden
			>
				<span></span>
			</button>`,
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
								lit`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,
							() => when(text && items.length === 0, () => noResult()),
						),
					),
				)}
				<slot name="footer"></slot>
			</div>
		</cosmoz-dropdown-next>
	</div>`;
};

const Pills = <I>(props: Props<I>) => {
	const thru = {
		...props,
		...useAutocomplete({ ...props, searchInPopup: true }),
	};
	const overflown = useOverflow(thru);

	return lit`${pills(thru)}
		<cosmoz-tooltip
			for="overflow"
			description=${overflown}
		></cosmoz-tooltip>`;
};

const Standalone = <I>(host: HTMLElement & Props<I>) => {
	const { onChange, onText, ...props } = host;
	const [value, setValue] = useProperty<I | I[]>('value');

	return Pills({
		...props,
		value,
		onChange: useCallback(
			(value: I[], ...args) => {
				setValue(value);
				onChange?.(value, ...args);
			},
			[onChange],
		),
		onText: useCallback(
			(text: string) => {
				host.text = text;
				onText?.(text);
			},
			[onText],
		),
	});
};

const observedAttributes = [
	'disabled',
	'label',
	'placeholder',
	'search-placeholder',
	'text-property',
	'value-property',
	'limit',
	'min',
	'preserve-order',
	'keep-opened',
	'keep-query',
	'default-index',
	'external-search',
	'item-height',
	'item-limit',
	'lazy-open',
] as const;

const shadowRootInit = { mode: 'open' as const, delegatesFocus: true };

customElements.define(
	'cosmoz-autocomplete-pills',
	component(Standalone, {
		observedAttributes,
		styleSheets: [sheet(style)],
		shadowRootInit,
	}),
);

export { observedAttributes, pills as render };
