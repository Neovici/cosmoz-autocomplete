import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
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
import style from './styles.css';
import { Props as Base, RProps, useAutocomplete } from './use-autocomplete';
import { useOverflow } from './use-overflow';

export interface Props<I> extends Base<I> {
	variant?: undefined | 'cell' | 'inline';
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	label?: string;
	placeholder?: string;
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

const autocomplete = <I>(props: AProps<I>) => {
		const {
				variant,
				opened,
				invalid,
				errorMessage,
				hint,
				label,
				placeholder,
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
				variant=${variant}
				?readonly=${isSingle}
				?disabled=${disabled}
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
				<slot name="suffix" slot="suffix"></slot>
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
									() =>
										html`<slot name="no-result">
											<p class="no-result">${t('No results found')}</p>
										</slot>`,
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
		return autocomplete(thru);
	},
	observedAttributes = [
		'variant',
		'disabled',
		'invalid',
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
	] as const;

export { Autocomplete, autocomplete, observedAttributes, style };
