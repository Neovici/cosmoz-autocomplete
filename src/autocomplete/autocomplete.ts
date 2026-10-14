import { useAnnouncer } from '@neovici/cosmoz-utils/hooks/use-announcer';
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
import { useListboxView } from '../listbox';
import { ItemRenderer } from '../listbox/item-renderer';
import { CreateProps, useCreatable } from './create';
import { ChipRenderer, selection } from './selection';
import './skeleton-span';
import style from './style.css';
import { Props as Base, RProps, useAutocomplete } from './use-autocomplete';
import { useCombobox } from './use-combobox';
import { useOverflow } from './use-overflow';

export interface Props<I> extends Base<I>, CreateProps<I> {
	mode?: 'select';
	variant?: 'default' | 'cell' | 'inline';
	invalid?: boolean;
	errorMessage?: string;
	hint?: string;
	label?: string;
	placeholder?: string;
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
		expanded: boolean;
		announcement: string;
		renderListbox: (content: unknown) => unknown;
		onKeyDown: (e: KeyboardEvent) => void;
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

const statusMessage = ({
	expanded,
	loading,
	count,
	text,
}: {
	expanded: boolean;
	loading: boolean;
	count: number;
	text?: string;
}) => {
	if (!expanded || loading) return '';
	if (count === 0) return text ? t('No results found') : '';
	return count === 1 ? t('1 result') : t('{0} results', { 0: count });
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
				items,
				source$,
				loading,
				chipRenderer,
				mode,
				expanded,
				announcement,
				renderListbox,
				onKeyDown,
			} = props,
			isOne = limit === 1,
			isSingle = isOne && value?.[0] != null;

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
					@keydown=${onKeyDown}
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

				${when(expanded, () =>
					renderListbox(
						when(
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
						),
					),
				)}
			</cosmoz-dropdown-next>
			<span class="status" aria-live="polite">${announcement}</span>`;
	},
	Autocomplete = <I>(props: Props<I>) => {
		const thru = {
				...props,
				...useAutocomplete(props),
			},
			{ opened, limit, value, showSingle, loading, items, text, label } = thru,
			isOne = limit === 1,
			isSingle = isOne && value?.[0] != null,
			expanded = shouldShowDropdown({
				opened,
				isSingle,
				showSingle,
				hasResultsOrQuery:
					loading || items.length > 0 || (text != null && text.length > 0),
			}),
			creatable = useCreatable({
				items,
				query: thru.query,
				textual: thru.textual,
				onSelect: thru.onSelect,
				itemRenderer: thru.itemRenderer,
				onCreate: thru.onCreate,
				createLabel: thru.createLabel,
			}),
			combobox = useCombobox({
				items: creatable.items,
				expanded,
				setOpened: thru.setOpened,
				onSelect: creatable.onSelect,
				onChipKeys: thru.onChipKeys,
				defaultIndex: thru.defaultIndex,
				itemLimit: thru.itemLimit,
				readonly: isSingle,
			}),
			announcement = useAnnouncer(
				statusMessage({ expanded, loading, count: items.length, text }),
			),
			renderListbox = useListboxView({
				value,
				valueProperty: thru.valueProperty,
				items: creatable.items,
				onSelect: creatable.onSelect,
				activeIndex: combobox.activeIndex,
				onHighlight: combobox.onHighlight,
				onRangeChanged: combobox.onRangeChanged,
				query: thru.query,
				textual: thru.textual,
				itemRenderer: creatable.itemRenderer,
				itemHeight: thru.itemHeight,
				itemLimit: thru.itemLimit,
				multi: !isOne,
				label,
			});
		useOverflow(thru);
		return autocomplete({
			...thru,
			items: creatable.items,
			expanded,
			announcement,
			renderListbox,
			onKeyDown: combobox.onKeyDown,
		});
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
		'debounce',
	] as const;

export { Autocomplete, autocomplete, observedAttributes, style };
