import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-dropdown-next {
		display: block;
	}
	cosmoz-tag {
		align-items: center;
		margin-left: 4px;
	}
	cosmoz-input::part(control) {
		display: flex;
		min-width: 35px;
	}
	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label) {
		transform: translateY(-75%) scale(0.85);
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
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
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 22px;
		color: var(--cz-color-text-secondary);
	}
`;
