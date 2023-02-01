import { html, component, useEffect, useCallback, useMemo } from 'haunted';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { tagged as css } from '@neovici/cosmoz-utils';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { props } from '@neovici/cosmoz-utils/object';
import { useListbox, properties } from './lib/use-listbox';
import { scrollIntoViewIfNeeded } from './lib/utils';
import '@neovici/cosmoz-input';

const svg =
		'data:image/svg+xml,%3Csvg width=\'11\' height=\'8\' viewBox=\'0 0 11 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath ' +
		'd=\'M9.5 1L5.20039 7.04766L1.66348 3.46152\' stroke=\'white\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E',
	closeIcon = html`<svg height="20px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="20px" 
	xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path 
		d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 
		 	   L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  
			   c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 
		  	   c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>`,
	styles = ({ index, searchBarHeight, itemHeight }) => css`
		:host {
			position: fixed;
			min-height: ${itemHeight}px;
			z-index: 1000;
			height: ${searchBarHeight}px;
			font-family: var(--paper-font-subhead_-_font-family, initial);
			background: #fff;
			min-width: 72px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
				0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
		}
		.searchbar {
			height: ${itemHeight}px;
			display: flex;
			align-items: center;
			gap: 5px;
			padding: 0 10px;
		}
		.close-button {
			background: white;
			border: none;
			cursor: pointer;
		}
		input {
			flex: 1;
			border: none;
			outline: none;
 			border-bottom: 1px solid var(--cosmoz-input-focused-color, #3f51b5);
		}
		.items {
			position: relative;
			overflow-y: auto;
			contain: layout paint !important;
			height: 100%;
		}
		.items[with-searchbar] {
			height: calc(100% - 40px);
		}
		.item {
			font-size: 14px;
			line-height: ${itemHeight}px;
			height: ${itemHeight}px;
			padding: 0 20px;
			box-sizing: border-box;
			width: 100%;
			cursor: pointer;
			text-overflow: ellipsis;
			white-space: nowrap;
			transition: background 0.2s;
			color: var(--cosmoz-listbox-color, #101010);
		}

		.item[data-index='${index || '0'}'] {
			background: var(
				--cosmoz-listbox-active-color,
				var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
			);
		}
		.sizer {
			position: relative;
			visibility: hidden;
			opacity: 0;
			pointer-events: none;
			z-index: -1;
			height: 0;
			width: auto;
			padding: 0 20px;
			overflow: hidden;
			max-width: inherit;
			font-size: 14px;
		}

		:host(:not([multi])) .item[aria-selected] {
			background: var(--cosmoz-listbox-single-selection-color, #dadada);
		}

		:host([multi]) .item {
			padding-left: 0;
		}
		:host([multi]) .item::before {
			content: '';
			font-size: 0;
			padding: 7.5px;
			margin: 0 8px;
			background: #fff;
			border: 1px solid #d6d6d5;
			border-radius: 4px;
			vertical-align: top;
		}
		:host([multi]) .item[aria-selected]::before {
			border-color: #5881f6;
			/* prettier-ignore */
			background: url("${svg}") #5881f6 no-repeat 50%;
		}
		:host([multi]) .sizer {
			padding-left: 33px;
		}
		.swatch {
			width: 18px;
			height: 18px;
			display: inline-block;
			box-sizing: border-box;
			vertical-align: middle;
			border-radius: 50%;
			border: 2px solid #eee;
		}
	`,
	Listbox = (host) => {
		const { index, items, renderItem, height, itemHeight, setClosed, filterFromDropdown, onFocus, onText, query } = useListbox(host);

		const focusInput = useCallback(() => {
			host.shadowRoot.getElementById('input')?.focus();
		}, [])

		const searchBarHeight = useMemo(() => filterFromDropdown ? height + itemHeight : height, 
			[filterFromDropdown, height, itemHeight]);

		const handleClose = useCallback((e) => {
			onText({ target: { value: '' }});
			onFocus(e);
		}, [onText, onFocus])

		useEffect(() => {
			focusInput();

			return () => {
				if(filterFromDropdown) {
					onText({ target: { value: '' }});
				}
			};
		}, [])

		useEffect(() => {
			scrollIntoViewIfNeeded(
				host.shadowRoot.querySelector(
					'[data-index="' + index + '"]:not(:hover)'
				),
				host
			);
		}, [index]);

		return html` <style>
				${styles({ index, searchBarHeight, itemHeight })}
			</style>
			${filterFromDropdown && 
				html`<div class="searchbar">
					<input @input=${onText} @click=${focusInput} @focusin=${onFocus} @focusout=${handleClose} .value=${query ?? ''} type="text" id="input">
					<button @click=${() => setClosed(true)} class="close-button">${closeIcon}</button>
				</div>`
			}
			<div class="items" ?with-searchbar=${filterFromDropdown}>
				<div virtualizer-sizer></div>
				${virtualize({ items, renderItem, scroller: true })}
			</div>`;
	};

customElements.define('cosmoz-listbox', component(Listbox));

export const listbox = ({ multi, ...thru }) =>
	portal(
		html`<cosmoz-listbox
			part="listbox"
			?multi=${multi}
			...=${spreadProps(props(properties)(thru))}
		></cosmoz-listbox>`
	);
