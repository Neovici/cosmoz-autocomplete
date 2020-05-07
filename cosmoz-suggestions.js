import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import {
	component, useCallback, useLayoutEffect, useRef
} from 'haunted';

import { scroll } from 'lit-virtualizer';
import '@polymer/paper-ripple';
import '@polymer/paper-material';
import '@polymer/paper-item';
import {
	useSuggestions, useSizer
} from './lib/use-suggestions';
import {
	mark, identity
} from './lib/utils';

const defaultItemRenderer = (
		item,
		i,
		{
			highlight, select, textual, query
		}
	) => {
		const text = textual(item);
		return html`
		<paper-item
			role="option"
			data-index=${i}
			@mouseenter=${() => highlight(i)}
			@click=${() => select(item)}
			@mousedown=${e => e.preventDefault()}
			title=${text}
		>
			<div>${mark(text, query)}</div>
			<paper-ripple></paper-ripple>
		</paper-item>
	`;
	},
	Suggestions = ({
		items,
		onSelect,
		query,
		textual = identity,
		itemRenderer = defaultItemRenderer,
		limit = 5
	}) => {
		const {
				index,
				rangechange,
				scrollToIndex,
				highlight,
				select,
				range
			} = useSuggestions({
				items,
				onSelect
			}),
			ref = useRef();

		useLayoutEffect(() => {
			ref.current = {
				highlight,
				select,
				textual,
				query
			};
		}, [ref, highlight, select, textual, query]);

		const renderItem = useCallback(
				(item, i) => itemRenderer(item, i, ref.current),
				[ref, itemRenderer]
			),
			height = limit * 36 + 2,
			sizer = useSizer({
				items,
				range,
				textual
			});
		return html`
			<style>
				:host {
					display: block;
					position: relative;
				}
				paper-material {
					position: absolute;
					min-width: 100%;
					z-index: 1000;
					background-color: #fff;
					min-height: 36px;
				}
				paper-material.overflowing {
					height: ${height}px;
					max-height: ${height}px;
					overflow-y: auto;
				}
				paper-item {
					min-height: var(--paper-item-min-height, 36px);
					padding: 0 16px;
					line-height: 18px;
					width: 100%;
					box-sizing: border-box;
					cursor: pointer;
				}
				paper-item div {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				paper-item[data-index="${index}"] {
					background: #eee;
					color: #333;
				}

				paper-material:not(.overflowing) paper-item {
					position: relative !important;
					transform: none !important;
				}

				paper-item.sizer {
					visibility: hidden;
					opacity:0;
					pointer-events: none;
					position: relative;
					z-index: -1;
					padding: 0 16px;
					white-space: pre;
					min-height: 0;
					height: 0;
				}
			</style>
			<paper-material
				unselectable="on"
				elevation="1"
				class=${classMap({ overflowing: items.length > limit })}
				@rangechange=${rangechange}
				>${/* eslint-disable indent*/ scroll({
					items,
					scrollToIndex,
					renderItem
				})}
				<paper-item class="sizer">${sizer} </paper-item>
			</paper-material>
		`;
	};

customElements.define('cosmoz-suggestions', component(Suggestions));
