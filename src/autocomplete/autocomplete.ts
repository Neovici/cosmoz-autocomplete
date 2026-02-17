import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import '@neovici/cosmoz-input';
import { t } from 'i18next';
import { html } from 'lit-html';
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
	invalid?: boolean;
	errorMessage?: string;
	label?: string;
	placeholder?: string;
	noLabelFloat?: boolean;
	alwaysFloatLabel?: boolean;
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
				opened,
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
			isOne = limit == 1, // eslint-disable-line eqeqeq
			isSingle = isOne && value?.[0] != null;

		const hasResultsOrQuery =
			loading || items.length > 0 || (text != null && text.length > 0);

		return html`<cosmoz-dropdown-next
			open-on-focus
			.opened=${opened}
			@dropdown-toggle=${onToggle}
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${label}
				.placeholder=${isSingle ? undefined : placeholder}
				?no-label-float=${noLabelFloat}
				?always-float-label=${value?.length > 0 || alwaysFloatLabel}
				?readonly=${isSingle}
				?disabled=${disabled}
				?invalid=${until(
					source$.then(
						() => invalid,
						() => true,
					),
					invalid,
				)}
				.errorMessage=${until(
					source$.then(
						() => errorMessage,
						(e: { message?: string }) => e.message,
					),
					errorMessage,
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
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label',
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
	] as const;

export { Autocomplete, autocomplete, observedAttributes, style };
