import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import {
	component, useCallback
} from 'haunted';

import { scroll } from 'lit-virtualizer';
import '@polymer/paper-ripple';
import '@polymer/paper-material';
import '@polymer/paper-item';
import { useSuggestions } from './lib/use-suggestions';

const defaultRenderItem = (
		item,
		i,
		{
			highlight, select, textProperty
		}
	) => html`
		<paper-item
			role="option"
			data-index=${i}
			@mouseenter=${() => highlight(i)}
			@click=${() => select(item)}
			@mousedown=${e => e.preventDefault()}
		>
			<div>${item[textProperty]}</div>
			<paper-ripple></paper-ripple>
		</paper-item>
	`,
	Suggestions = ({
		items,
		onSelect,
		textProperty,
		renderItem = defaultRenderItem
	}) => {
		const {
			index,
			rangechange,
			scrollToIndex,
			highlight,
			select
		} = useSuggestions({
			items,
			onSelect
		});
		return html`
			<style>
				paper-material {
					position: absolute;
					width: 100%;
					z-index: 1000;
					background-color: #fff;
					min-height: 36px;
				}
				paper-material.overflowing {
					height: 182px;
					max-height: 182px;
					overflow-y: auto;
				}
				paper-item {
					min-height: var(--paper-item-min-height, 36px);
					padding: 0 16px;
					position: relative;
					line-height: 18px;
					width: 100%;
					box-sizing: border-box;
					cursor: pointer;
				}
				paper-item[data-index="${index}"] {
					background: #eee;
					color: #333;
				}
				paper-material:not(.overflowing) paper-item {
					position: static !important;
					transform: none !important;
				}
			</style>
			<paper-material
				unselectable="on"
				elevation="1"
				class=${classMap({ overflowing: items.length > 5 })}
				@rangechange=${rangechange}
				>${/* eslint-disable indent*/ scroll({
					items,
					scrollToIndex,
					renderItem: useCallback(
						(item, i) =>
							renderItem(item, i, {
								highlight,
								select,
								textProperty
							}),
						[highlight, select, textProperty]
					)
				})}</paper-material
			>
		`;
	};

customElements.define('cosmoz-suggestions', component(Suggestions));
