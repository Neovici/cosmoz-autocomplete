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
	/** Tooltip; defaults to the content when it is text. */
	title?: string;
	hidden?: boolean;
}
export const chip = <I>({
	content,
	onClear,
	disabled,
	className = 'chip',
	hidden,
	slot,
	title = typeof content === 'string' ? content : undefined,
}: ChipProps<I>) =>
	html`<cosmoz-tag
		class=${ifDefined(className)}
		slot=${ifDefined(slot)}
		exportparts="chip-text, chip-clear"
		?disabled=${disabled}
		?hidden=${hidden}
		?removable=${!!onClear && !disabled}
		@remove=${onClear}
		title=${ifDefined(title)}
		>${content}</cosmoz-tag
	>`;
