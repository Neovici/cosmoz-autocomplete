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

	/* select: the chosen value fills the row like a button's label; the
	   caret stays hidden until the user types, which swaps it for the query */
	:host([mode='select']) cosmoz-input[data-single] cosmoz-tag.chip {
		flex: 1;
		min-width: 0;
		max-width: none;
	}
	:host([mode='select'])
		cosmoz-input[data-single]:not([data-query])::part(input) {
		caret-color: transparent;
		cursor: pointer;
	}
	:host([mode='select']) cosmoz-input[data-query] cosmoz-tag.chip {
		display: none;
	}
	:host([mode='select']) cosmoz-input[data-single][data-query]::part(input) {
		flex: 1;
	}

	/* select: clear button beside the chevron */
	.clear {
		display: grid;
		flex: none;
		place-items: center;
		width: calc(var(--cz-spacing) * 6);
		height: calc(var(--cz-spacing) * 6);
		margin-inline-end: var(--cz-spacing);
		padding: 0;
		border: 0;
		border-radius: var(--cz-radius-full);
		background: none;
		color: var(--cz-color-text-quaternary);
		cursor: pointer;
		transition:
			background-color 0.1s,
			color 0.1s;
	}
	.clear:hover {
		background: var(--cz-color-bg-tertiary);
		color: var(--cz-color-text-secondary);
	}
	.clear:focus-visible {
		outline: 2px solid var(--cz-color-focus-ring);
		outline-offset: 1px;
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
`;
