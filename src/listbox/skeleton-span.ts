import { component, css } from '@pionjs/pion';
import { nothing } from 'lit-html';

const style = css`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: 100px;
		height: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;

customElements.define(
	'cosmoz-autocomplete-skeleton-span',
	component(() => nothing, { styleSheets: [style] }),
);
