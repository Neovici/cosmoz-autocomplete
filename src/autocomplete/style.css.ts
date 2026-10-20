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

	cosmoz-autocomplete-trigger[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-autocomplete-trigger[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-autocomplete-trigger[variant='inline']:has(
			cosmoz-tag[removable]
		)::part(label),
	cosmoz-autocomplete-trigger[variant='inline'][disabled]:has(
			cosmoz-tag:not([hidden])
		)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-autocomplete-trigger::part(control) {
		display: flex;
		align-items: center;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-listbox cosmoz-input {
		margin: calc(var(--cz-spacing) * 1.5);
	}

	cosmoz-autocomplete-trigger[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-autocomplete-trigger::part(control) {
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
