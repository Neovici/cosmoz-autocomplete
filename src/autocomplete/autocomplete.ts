import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { useCallback } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { array } from '@neovici/cosmoz-utils/array';
import '@neovici/cosmoz-input';
import { useAutocomplete, Props as Base, RProps } from './use-autocomplete';
import { listbox } from '../listbox';
import style from './styles.css';
import { selection } from './selection';

export interface Props<I> extends Base<I> {
	invalid?: boolean;
	errorMessage?: string;
	label?: string;
	placeholder?: string;
	noLabelFloat?: boolean;
	alwaysFloatLabel?: boolean;
	showSingle?: boolean;
	itemHeight?: number;
	itemLimit?: number;
}

type AProps<I> = Omit<Props<I>, keyof RProps<I>> & RProps<I>;

const blank = () => nothing;

const inputParts = ['input', 'label', 'line', 'error']
	.map((part) => `${part}: input-${part}`)
	.join();

const autocomplete = <I>(props: AProps<I>) => {
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
			// TODO: Refactor with ref or a state callback
			anchor = useCallback(
				() => host.shadowRoot!.querySelector('#input'),
				[host, value]
			),
			suggestions = until(
				items$.then((items: I[]) =>
					when((!isSingle || showSingle) && items.length, () =>
						listbox<I>({
							...props,
							anchor,
							items,
							multi: !isOne,
						})
					)
				)
			);

		return html` <style>
				${style}
			</style>
			<cosmoz-input
				id="input"
				part="input"
				.label=${label}
				.placeholder=${isSingle ? undefined : placeholder}
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
						(e: { message?: string }) => e.message
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
				${selection({
					value: array(value),
					isOne,
					onDeselect,
					textual,
					disabled,
				})}
				${until(
					values$.then(blank, blank),
					html`<div slot="suffix" class="spinner"></div>`
				)}
			</cosmoz-input>

			${suggestions}`;
	},
	Autocomplete = <I>(props: Props<I>) =>
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
