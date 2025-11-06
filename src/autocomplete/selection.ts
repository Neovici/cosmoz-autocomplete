import { html } from 'lit-html';
import { chip } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

interface Props<I> {
	value: I[];
	min?: number;
	isOne: boolean;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
	chipRenderer?: typeof chip;
	chipItem: unknown;
}

export const selection = <I>({
	value: values,
	min = 0,
	onDeselect,
	textual,
	disabled,
	chipRenderer = chip,
}: Props<I>) => [
	...values.filter(Boolean).map((value) =>
		chipRenderer({
			content: textual(value),
			onClear: values.length > min && (() => onDeselect(value)),
			disabled,
			slot: 'control',
			chipItem: value,
		}),
	),
	chipRenderer({
		content: html`<span></span>`,
		className: 'badge',
		disabled: true,
		slot: 'control',
		hidden: true,
	}),
];
