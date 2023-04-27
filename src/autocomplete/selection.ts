import { html } from 'lit-html';
import { chip } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

interface Props<I> {
	value: I[];
	isOne: boolean;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
}

export const selection = <I>({
	value: values,
	onDeselect,
	textual,
	disabled,
}: Props<I>) => [
	...values.map((value) =>
		chip({
			content: textual(value),
			onClear: () => onDeselect(value),
			disabled,
			slot: 'control',
		})
	),
	chip({
		content: html`<span></span>`,
		className: 'badge',
		disabled: true,
		slot: 'control',
	}),
];
