import { css } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';

const checkSVG =
	/* eslint-disable quotes */
	"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath " +
	"d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
/* eslint-enable quotes */

const checkMask =
	/* eslint-disable quotes */
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' " +
	"stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E" +
	"%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E";
/* eslint-enable quotes */

const style = css`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow:
			0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-lg);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
		min-width: calc(var(--cz-spacing) * 20);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(from var(--cz-color-alpha-black) r g b / 0.22);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${checkSVG}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}

	/* =========================================
	 * OPTION PARTS (see ../option.ts): a label,
	 * a muted description and a hint line below.
	 * ========================================= */
	.option {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
		height: 100%;
	}
	.option-text {
		flex: 1;
		min-width: 0;
	}
	.option-media {
		display: grid;
		flex: none;
		place-items: center;
		width: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		height: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		border-radius: var(--cz-radius-md);
		overflow: hidden;
		background: var(--cz-color-bg-secondary);
		color: var(--cz-color-fg-quaternary);
	}
	.option-media > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: var(--cz-color-bg-primary);
	}
	.option-trailing {
		display: flex;
		flex: none;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
		line-height: var(--cz-text-sm-line-height);
	}
	.option-line,
	.option-hint {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: var(--cz-text-sm-line-height);
	}
	.item:has(.option-hint),
	.item:has(.option-media) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}
	.option-label {
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
	}
	.option-description {
		margin-inline-start: calc(var(--cz-spacing) * 1.5);
		color: var(--cz-color-text-tertiary);
	}
	.option-hint {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-tertiary);
	}

	/* =========================================
	 * SELECT MODE: a combobox popover. The
	 * selected option carries a check mark
	 * instead of a fill; hover is a soft accent.
	 * ========================================= */
	:host([select]) {
		--cosmoz-listbox-highlight: var(--cz-color-bg-primary-hover);
		padding: var(--cz-spacing);
		box-shadow:
			0 0 0 1px var(--cz-color-border-secondary),
			var(--cz-shadow-lg);
	}
	:host([select]) .items {
		padding-inline: 0;
	}
	:host([select]:not([multi])) .item {
		position: relative;
		width: 100%;
		margin-block: 0;
		padding-inline: calc(var(--cz-spacing) * 8) calc(var(--cz-spacing) * 2);
	}
	:host([select]:not([multi])) .item[aria-selected] {
		background: none;
	}
	:host([select]:not([multi])) .item::before {
		content: '';
		position: absolute;
		inset-inline-start: calc(var(--cz-spacing) * 2);
		top: 50%;
		width: calc(var(--cz-spacing) * 4);
		height: calc(var(--cz-spacing) * 4);
		translate: 0 -50%;
		background: currentColor;
		/* prettier-ignore */
		mask: url("${checkMask}") center / contain no-repeat;
		opacity: 0;
	}
	:host([select]:not([multi])) .item[aria-selected]::before {
		opacity: 1;
	}
`;

export default style;

export const styles = ({
	index,
	itemHeight,
	auto,
}: {
	index?: number;
	itemHeight: number;
	auto: boolean;
}) => css`
	${when(
		!auto,
		() => css`
			.item {
				line-height: ${itemHeight}px;
				height: ${itemHeight}px;
			}
		`,
		// sized by content: every option gets the same breathing room
		// (shadcn's command item: py-1.5), not just ones with a hint or media
		() => css`
			.item {
				padding-block: calc(var(--cz-spacing) * 1.5);
			}
		`,
	)}
	.item[data-index='${index || '0'}'] {
		background: var(
			--cosmoz-listbox-highlight,
			rgb(from var(--cz-color-alpha-black) r g b / 0.14)
		);
	}
	.item[data-index='${index || '0'}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`;
