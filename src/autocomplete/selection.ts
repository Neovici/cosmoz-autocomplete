import { html } from 'lit-html'; // eslint-disable-line object-curly-newline
import { when } from 'lit-html/directives/when.js';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

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

const chip = ({
	text,
	onClear,
	disabled,
	isOne,
}: {
	text: string;
	onClear: () => void;
	disabled?: boolean;
	isOne?: boolean;
}) => html`
	<div class="chip" part="chip" slot="suffix" title=${text} ?data-one=${isOne}>
		<span class="chip-text" part="chip-text">${text}</span>
		${when(
			!disabled,
			() =>
				html` <span class="chip-clear" part="chip-clear" @click=${onClear}>
					${clear}
				</span>`
		)}
	</div>
`;

const badge = <I>({
	value,
	onDeselect,
}: {
	value: I[];
	onDeselect: Deselect<I>;
}) => {
	const len = value?.length;
	return when(
		len > 0,
		() => html`<div class="badge" slot="suffix" part="badge">
			${len}
			<span
				class="badge-clear"
				part="chip-clear"
				@click=${() => onDeselect(value)}
				>${clear}</span
			>
		</div>`
	);
};

interface Props<I> {
	value: I[];
	isOne: boolean;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
}

export const selection = <I>({
	value,
	isOne,
	onDeselect,
	textual,
	disabled,
}: Props<I>) => {
	if (isOne || value.length === 1) {
		const val = value[0];
		return when(val, () =>
			chip({
				text: textual(val),
				onClear: () => onDeselect(val),
				disabled,
				isOne,
			})
		);
	}
	return badge({ value, onDeselect });
};
