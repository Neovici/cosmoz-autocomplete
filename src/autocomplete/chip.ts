import '@neovici/cosmoz-tag';
import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';

interface Props {
	onClear?: false | (() => void);
	disabled?: boolean;
}

export interface ChipProps<I> extends Props {
	item: I | null;
	slot?: string;
	className?: string;
	content: unknown;
	hidden?: boolean;
}
export const chip = <I>({
	content,
	onClear,
	disabled,
	className = 'chip',
	hidden,
	slot,
}: ChipProps<I>) =>
	html`<cosmoz-tag
		class=${ifDefined(className)}
		slot=${ifDefined(slot)}
		exportparts="chip-text, chip-clear"
		?disabled=${disabled}
		?hidden=${hidden}
		?removable=${!!onClear}
		@remove=${onClear}
		title=${ifDefined(typeof content === 'string' ? content : undefined)}
		>${content}</cosmoz-tag
	>`;
