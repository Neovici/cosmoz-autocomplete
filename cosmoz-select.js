import { component, useCallback, useMemo } from 'haunted';
import { html, nothing } from 'lit-html'; // eslint-disable-line object-curly-newline
import { live } from 'lit-html/directives/live';
import { until } from 'lit-html/directives/until';

import { strProp } from './lib/utils';
import { useFocus } from './lib/use-focus';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import '@neovici/cosmoz-input';
import { listbox } from './cosmoz-listbox';

const EMPTY = [],
	EMPTY$ = Promise.resolve(EMPTY),
	useSelect = ({
		value,
		source,
		textProperty,
		onSelect,
		...thru
	}) => {
		const
			textual = useMemo(() => strProp(textProperty), [textProperty]),
			{ active, onFocus, setClosed } = useFocus(thru),
			values$ = useMemo(() => Promise.resolve(typeof source === 'function'
				? source({ active })
				: source
			), [source, active]);

		return {
			textual,
			text: useMemo(() => value ? textual(value) : '', [value, textual]),
			value,
			values$,
			items$: useMemo(() => active ? values$ : EMPTY$, [active, values$]),
			onClick: useCallback(() => setClosed(false), []),
			onFocus,
			onSelect: useCallback(value => onSelect?.(value, () => setClosed(true)), [onSelect])
		};
	},

	blank = () => nothing,
	style = `
		:host {
			display: block;
			position: relative;
		}

		slot {
			display: contents !important;
		}

		@keyframes rotating {
			100% {
				transform: rotate(360deg);
			}
		}
		.spinner {
			border-radius: 50%;
			width: 22px;
			height: 22px;
			border: 2px solid rgba(0, 0, 0, 0.1);
			border-top: 2px solid #5f5a92;
			animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
			box-sizing: border-box;
			margin-top: -3px;
		}
		#input::part(input) { cursor: pointer; }
	`,

	inputParts = ['input', 'label', 'line', 'error'].map(part => `${ part }: input-${ part }`).join(),

	autocomplete = props => {
		const
			{
				invalid,
				errorMessage,
				label,
				placeholder,
				disabled,
				noLabelFloat,
				alwaysFloatLabel,
				text,
				onFocus,
				onClick,
				value,
				items$,
				values$
			} = props,
			host = useHost(),
			anchor = useCallback(() => host.shadowRoot.querySelector('#input'), [host, value]),
			list = until(items$.then(items => items.length && listbox({ ...props, anchor, items }) || nothing));

		return html`
			<style>${ style }</style>
			<cosmoz-input
				id="input" part="input" readonly
				.label=${ label }
				.placeholder=${ placeholder }
				?no-label-float=${ noLabelFloat }
				?always-float-label=${ alwaysFloatLabel }
				?disabled=${ disabled }
				?invalid=${ until(values$.then(() => invalid, () => true), invalid) }
				.errorMessage=${ until(values$.then(() => errorMessage, e => e.message), errorMessage) }
				.value=${ live(text) }
				@focused-changed=${ onFocus }
				@click=${ onClick }
				autocomplete="off"
				exportparts=${ inputParts }
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ until(values$.then(blank, blank), html`<div slot="suffix" class="spinner"></div>`) }
			</cosmoz-input>
			${ list }`;
	},
	Select = props => autocomplete({
		...props,
		...useSelect(props)
	}),
	observedAttributes = [
		'disabled',
		'invalid',
		'no-label-float',
		'always-float-label',
		'text-property',
		'hide-empty',
		'default-index',
		'item-height',
		'item-limit'
	];

customElements.define('cosmoz-select', component(Select, { observedAttributes }));
