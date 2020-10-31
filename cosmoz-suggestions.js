import {
	html, component, useEffect
} from 'haunted';
import { scroll } from 'lit-virtualizer';
import { useSuggestions } from './lib/use-suggestions';
import { scrollIntoViewIfNeeded } from './lib/utils';

const Suggestions = host => {
	const {
		index, items, renderItem, height, itemHeight
	} = useSuggestions(host);

	useEffect(() => {
		scrollIntoViewIfNeeded(host.shadowRoot.querySelector('[data-index="' + index + '"]'), host);
	}, [index]);

	return html`
			<style>
				:host {
					position: fixed;
					min-height: ${ itemHeight }px;
					z-index: 1000;
					height: ${ height }px;
					font-family: var(--paper-font-subhead_-_font-family, initial);
					background: #fff;
					box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
						0 1px 8px 0 rgba(0, 0, 0, 0.12),
						0 3px 3px -2px rgba(0, 0, 0, 0.4);
				}
				.items {
					position: relative;
					overflow-y: auto;
					height: 100%;
				}
				.item {
					line-height: ${ itemHeight }px;
					height: ${ itemHeight }px;
					padding: 0 16px;
					box-sizing: border-box;
					width: 100%;
					cursor: pointer;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.item[data-index="${ index }"] {
					background: #eee;
					color: #333;
				}
				.sizer {
					position: relative;
					visibility: hidden;
					opacity:0;
					pointer-events: none;
					z-index: -1;
					height: 0;
					width: auto;
					padding: 0 16px;
				}
				:host, .sizer {
					min-width: 72px;
					max-width: 70vw;
				}
			</style>
			<div class="items">${ /* eslint-disable indent*/ scroll({
				items,
				renderItem
			}) }</div>
		`;
	};

customElements.define('cosmoz-suggestions', component(Suggestions));
