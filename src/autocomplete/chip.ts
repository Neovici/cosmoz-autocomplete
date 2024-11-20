import { sheet } from '@neovici/cosmoz-utils';
import { component, html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import styles from './chip.css';

const clear = html`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`;

interface Props {
	onClear?: false | (() => void);
	disabled?: boolean;
}
export const Chip = ({ onClear, disabled }: Props) => html`
	<div class="content" part="content chip-text"><slot></slot></div>
	${when(
		onClear && !disabled,
		() =>
			html`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${(ev: MouseEvent) => ev.preventDefault()}
				@click=${onClear}
			>
				${clear}
			</span>`,
	)}
`;

customElements.define(
	'cosmoz-autocomplete-chip',
	component<Props>(Chip, {
		observedAttributes: ['disabled'],
		styleSheets: [sheet(styles)],
	}),
);

interface ChipProps extends Props {
	slot?: string;
	className?: string;
	content: unknown;
	hidden?: boolean;
}
export const chip = ({
	content,
	onClear,
	disabled,
	hidden,
	className = 'chip',
	slot,
}: ChipProps) =>
	html`<cosmoz-autocomplete-chip
		class=${ifDefined(className)}
		slot=${ifDefined(slot)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${disabled}
		?hidden=${hidden}
		.onClear=${onClear}
		title=${ifDefined(typeof content === 'string' ? content : undefined)}
		>${content}</cosmoz-autocomplete-chip
	>`;
