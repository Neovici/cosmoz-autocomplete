import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import {
	component, useCallback, useLayoutEffect, useRef
} from 'haunted';

import { scroll } from 'lit-virtualizer';
import { useHostBounds } from '@neovici/cosmoz-utils/lib/hooks/use-host-bounds';
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
		<div class="item"
			role="option"
			data-index=${ i }
			@mouseenter=${ () => highlight(i) }
			@click=${ () => select(item) }
			@mousedown=${ e => e.preventDefault() }
			title=${ text }
		>${ mark(text, query) }</div>
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
			ref = useRef(undefined);

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
			}),
			bounds = useHostBounds();


		return html`
			<style>
				:host {
					display: block;
					position: relative;
				}
				.items {
					position: fixed;
					min-width: ${ bounds?.width ?? 0 }px;
					min-height: 36px;
					z-index: 1000;
					background: #fff;
					box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
						0 1px 8px 0 rgba(0, 0, 0, 0.12),
						0 3px 3px -2px rgba(0, 0, 0, 0.4);
				}
				.items.overflowing {
					height: ${ height }px;
					max-height: ${ height }px;
					overflow-y: auto;
				}

				.item {
					min-height: var(--paper-item-min-height, 36px);
					line-height: var(--paper-item-min-height, 36px);
					padding: 0 16px;
					width: 100%;
					box-sizing: border-box;
					cursor: pointer;
					font-family: var(--paper-font-subhead_-_font-family, initial);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap
				}
				.item[data-index="${ index }"] {
					background: #eee;
					color: #333;
				}
				.items:not(.overflowing) .item {
					position: relative !important;
					transform: none !important;
				}
				.item.sizer {
					visibility: hidden;
					opacity:0;
					pointer-events: none;
					position: relative;
					overflow: initial;
					text-overflow: initial;
					z-index: -1;
					padding: 0 16px;
					white-space: pre;
					min-height: 0;
					height: 0;
				}
			</style>
			<div
				class="items ${ classMap({ overflowing: items.length > limit }) }"
				@rangechange=${ rangechange }
				>${ /* eslint-disable indent*/ scroll({
					items,
					scrollToIndex,
					renderItem
				}) }
				<div class="item sizer">${ sizer } </div>
			</div>
		`;
	};

customElements.define('cosmoz-suggestions', component(Suggestions));
