import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: block;
		position: relative;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}

	.chip {
		flex: 0.00001 1 fit-content;
		max-width: 18ch;
		min-width: 45px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 3px;
	}

	[data-one]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	slot {
		display: contents !important;
	}

	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}
	.spinner {
		border-radius: 50%;
		width: 22px;
		height: 22px;
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin-top: -3px;
		flex: none;
	}
`;
