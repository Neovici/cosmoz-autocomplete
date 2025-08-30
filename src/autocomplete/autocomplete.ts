import '@neovici/cosmoz-input';
import './skeleton-span';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { html } from 'lit-html';
import { live } from 'lit-html/directives/live.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { listbox } from '../listbox';
import { selection } from './selection';
import style from './styles.css';
import { Props as Base, RProps, useAutocomplete } from './use-autocomplete';
import { useOverflow } from './use-overflow';
import { ref } from 'lit-html/directives/ref.js';
import {
	useFloating,
	Placement,
	defaultMiddleware,
	size,
} from '@neovici/cosmoz-dropdown/use-floating';
import { useEffect } from '@pionjs/pion';

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
	placement?: Placement;
}

type AProps<I> = Omit<Props<I>, keyof RProps<I>> &
	RProps<I> & {
		onInputRef?: (el?: Element) => void;
	};

const inputParts = ['input', 'control', 'label', 'line', 'error', 'wrap']
	.map((part) => `${part}: input-${part}`)
	.join();

const middleware = [
	size({
		apply({ rects, elements }) {
			Object.assign(elements.floating.style, {
				minWidth: `${Math.max(rects.reference.width, rects.floating.width)}px`,
			});
		},
	}),
	...defaultMiddleware,
];

const shouldShowDropdown = <I>({
	active,
	loading,
	items,
	text,
	isSingle,
	showSingle,
}: Pick<AProps<I>, 'active' | 'loading' | 'items' | 'text' | 'showSingle'> & {
	isSingle: boolean;
}) => {
	if (!active) return false;

	const hasResultsOrQuery = loading || items.length > 0 || text.length > 0;
	const disallowedSingle = isSingle && !showSingle;

	return hasResultsOrQuery && !disallowedSingle;
};

const autocomplete = <I>(props: AProps<I>) => {
		const {
				active,
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
				min,
				showSingle,
				items,
				source$,
				placement,
				loading,
			} = props,
			host = useHost(),
			isOne = limit == 1, // eslint-disable-line eqeqeq
			isSingle = isOne && value?.[0] != null;

		const { styles, setReference, setFloating } = useFloating({
			placement,
			middleware,
		});

		useEffect(() => {
			host.addEventListener('focusin', onFocus);
			host.addEventListener('focusout', onFocus);
			return () => {
				host.removeEventListener('focusin', onFocus);
				host.removeEventListener('focusout', onFocus);
			};
		}, [onFocus]);

		useImperativeApi(
			{
				focus: () =>
					(
						host.shadowRoot?.querySelector('#input') as HTMLInputElement
					)?.focus(),
			},
			[],
		);

		return html`<cosmoz-input
				id="input"
				part="input"
				${ref(setReference)}
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
				@click=${onClick}
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
				})}
			</cosmoz-input>

			${when(
				shouldShowDropdown({
					active,
					loading,
					items,
					text,
					isSingle,
					showSingle,
				}),
				() =>
					listbox<I>(
						{
							...props,
							items,
							multi: !isOne,
							setFloating,
							styles,
						},
						when(
							loading,
							() =>
								html`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,
							() =>
								when(
									text.length > 0 && items.length === 0,
									() => html`<slot name="no-result"></slot>`,
								),
						),
					),
			)}`;
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
