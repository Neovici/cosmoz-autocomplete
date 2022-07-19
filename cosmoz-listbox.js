import { html, component, useEffect } from 'haunted';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { tagged as css } from '@neovici/cosmoz-utils';
import { portal } from '@neovici/cosmoz-utils/directives/portal';
import { spreadProps } from '@neovici/cosmoz-utils/directives/spread-props';
import { props } from '@neovici/cosmoz-utils/object';
import { useListbox, properties } from './lib/use-listbox';
import { scrollIntoViewIfNeeded } from './lib/utils';

const svg =
		'data:image/svg+xml,%3Csvg width=\'11\' height=\'8\' viewBox=\'0 0 11 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath ' +
		'd=\'M9.5 1L5.20039 7.04766L1.66348 3.46152\' stroke=\'white\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E',
	styles = ({ index, height, itemHeight }) => css`
		:host {
			position: fixed;
			min-height: ${itemHeight}px;
			z-index: 1000;
			height: ${height}px;
			font-family: var(--paper-font-subhead_-_font-family, initial);
			background: #fff;
			min-width: 72px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
				0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
		}
		.items {
			position: relative;
			overflow-y: auto;
			contain: layout paint !important;
			height: 100%;
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

		.item[data-index="${index || '0'}"] {
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
	`,
	Listbox = (host) => {
		const { index, items, renderItem, height, itemHeight } = useListbox(host);

		useEffect(() => {
			scrollIntoViewIfNeeded(
				host.shadowRoot.querySelector(
					'[data-index="' + index + '"]:not(:hover)'
				),
				host
			);
		}, [index]);

		return html` <style>
				${styles({ index, height, itemHeight })}
			</style>
			<div class="items">
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
