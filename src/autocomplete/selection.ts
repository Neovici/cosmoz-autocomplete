import { html } from 'lit-html';
import { chip as defaultChipRenderer } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

// xs lands with cosmoz-tag#31; until then the tag's xs close icon keeps its
// default size
const chipSizes = { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' } as const;

/** A chip sits one tag size below the control it renders in. */
export const chipSize = (size?: string) =>
	chipSizes[size as keyof typeof chipSizes] ?? chipSizes.md;

export type ChipRenderer<I> = typeof defaultChipRenderer<I>;

interface Props<I> {
	value: I[];
	min?: number;
	isOne: boolean;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
	chipRenderer?: ChipRenderer<I>;
	overflowBadge?: unknown;
	/** Chips sit one size below the control they render in. */
	size?: string;
}

export const selection = <I>({
	value: values,
	min = 0,
	onDeselect,
	textual,
	disabled,
	chipRenderer = defaultChipRenderer,
	overflowBadge,
	size,
}: Props<I>) => [
	...values.filter(Boolean).map((value) =>
		chipRenderer({
			item: value,
			content: textual(value),
			onClear: values.length > min && (() => onDeselect(value)),
			disabled,
			slot: 'control',
			size,
		}),
	),
	overflowBadge ??
		chipRenderer({
			item: null,
			content: html`<span></span>`,
			className: 'badge',
			disabled: true,
			slot: 'control',
			hidden: true,
			size,
		}),
];
