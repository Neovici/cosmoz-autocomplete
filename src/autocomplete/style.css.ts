import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag:not([hidden]))::part(
			label
		) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}

	/* pill: the chips and an "add" pill share one row; the pill grows into a
	   text field on focus */
	cosmoz-input[variant='pill']::part(control) {
		align-items: center;
		gap: var(--cz-spacing);
	}

	cosmoz-input[variant='pill'] cosmoz-tag {
		margin-left: 0;
	}

	cosmoz-input[variant='pill']::part(input) {
		order: 2;
		flex: none;
		width: calc(var(--cz-spacing) * 24);
		padding-inline-start: calc(var(--cz-spacing) * 6.5);
	}

	@supports (field-sizing: content) {
		cosmoz-input[variant='pill']::part(input) {
			field-sizing: content;
			width: auto;
		}
	}

	cosmoz-input[variant='pill']::part(control)::before {
		content: '';
		order: 1;
		position: relative;
		z-index: 1;
		flex: none;
		width: calc(var(--cz-spacing) * 3);
		height: calc(var(--cz-spacing) * 3);
		margin-inline: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * -5.5);
		background: var(--cz-color-fg-quaternary);
		mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M12 5v14M5 12h14'/%3E%3C/svg%3E")
			center / contain no-repeat;
		pointer-events: none;
	}

	cosmoz-input[variant='pill']:focus-within::part(control)::before {
		display: none;
	}

	cosmoz-input[variant='pill']:not([data-one])::part(input):focus {
		flex: 1 1 calc(var(--cz-spacing) * 32);
		min-width: calc(var(--cz-spacing) * 16);
		width: auto;
		padding-inline-start: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='pill']) cosmoz-listbox {
		margin-top: calc(var(--cz-spacing) * 1.5);
	}
`;
