import { html, component, useEffect } from 'haunted';
import { scroll } from 'lit-virtualizer';
import { portal } from '@neovici/cosmoz-utils/lib/directives/portal';
import { props } from '@neovici/cosmoz-utils/lib/object';
import { spreadProps } from '@open-wc/lit-helpers';
import { useListbox, properties } from './lib/use-listbox';
import { scrollIntoViewIfNeeded } from './lib/utils';

const Listbox = host => {
	const { index, items, renderItem, height, itemHeight } = useListbox(host);

	useEffect(() => {
		scrollIntoViewIfNeeded(host.shadowRoot.querySelector('[data-index="' + index + '"]:not(:hover)'), host);
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
				min-width: 72px;
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
			.item[aria-selected] {
				background: #dadada;
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
				overflow: hidden;
				max-width: inherit;
			}
		</style>
		<div class="items">${ scroll({ items, renderItem }) }</div>`;
};

customElements.define('cosmoz-listbox', component(Listbox));

export const listbox = thru => portal(html`<cosmoz-listbox part="listbox" ...=${ spreadProps(props(properties)(thru)) }>`);
