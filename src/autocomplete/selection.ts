import { chip as defaultChipRenderer } from './chip';
import type { RProps } from './use-autocomplete';

type Deselect<I> = RProps<I>['onDeselect'];

export type ChipRenderer<I> = typeof defaultChipRenderer<I>;

interface Props<I> {
	value: I[];
	min?: number;
	isOne: boolean;
	onDeselect: Deselect<I>;
	textual: (i: I) => string;
	disabled?: boolean;
	chipRenderer?: ChipRenderer<I>;
}

export const selection = <I>({
	value: values,
	min = 0,
	onDeselect,
	textual,
	disabled,
	chipRenderer = defaultChipRenderer,
}: Props<I>) =>
	values.filter(Boolean).map((value) =>
		chipRenderer({
			item: value,
			content: textual(value),
			onClear: values.length > min && (() => onDeselect(value)),
			disabled,
			slot: 'control',
		}),
	);
