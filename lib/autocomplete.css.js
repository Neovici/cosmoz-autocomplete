import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: block;
		position: relative;
	}
	.chip {
		border-radius: 500px;
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin: 1px 4px 1px 0;
		white-space: nowrap;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 0.00001 1 min-content;
		max-width: 285px;
		max-width: 28ch;
	}
	.chip[data-one] {
		position: absolute;
		left: 0;
		top: 1px;
		bottom: 1px;
		right: 0;
		margin: 0;
		z-index: 2;
		pointer-events: auto;
		max-width: initial;
	}
	.chip-text {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		margin: 0 10px;
		font-size: 12px;
		line-height: 22px;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: 1;
	}
	.chip-clear {
		margin: 2px 4px 2px -6px;
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899B);
		border-radius: 500px;
		cursor: pointer;
		width: 16px;
		height: 16px;
		stroke: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		display: block;
	}
	.chip-clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}

	.badge {
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-weight: 500;
		font-size: 12px;
		line-height: 22px;
		padding: 0 2px;
		border-radius: 90px;
		text-align: center;
		box-sizing: border-box;
		flex: 0.01 2 30px;
		cursor: pointer;
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
	}
`;
