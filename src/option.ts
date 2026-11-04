import { html, nothing } from 'lit-html';
import { chip, ChipProps } from './autocomplete/chip';
import { itemRenderer } from './listbox/item-renderer';

export interface OptionParts<I> {
	/** What the option is. Defaults to the item's text, with the query marked. */
	label?: (item: I) => unknown;
	/** Muted text after the label, e.g. a description or a number. */
	description?: (item: I) => string | null | undefined;
	/** A smaller second line, e.g. who approves it. Needs `item-height="auto"`. */
	hint?: (item: I) => string | null | undefined;
}

const line = (label: unknown, description?: string | null) =>
	html`<span class="option-line"
		><span class="option-label">${label}</span>${description
			? html`<span class="option-description">${description}</span>`
			: nothing}</span
	>`;

/**
 * Renderers for combobox-style options: a label, a muted description and an
 * optional hint below. The chip shows the label and description.
 *
 * ```ts
 * const { itemRenderer, chipRenderer } = optionRenderers<Dimension>({
 *   description: (d) => d.description,
 *   hint: (d) => d.approver && `Approver: ${d.approver}`,
 * });
 * ```
 */
export const optionRenderers = <I>({
	label,
	description,
	hint,
}: OptionParts<I> = {}) => ({
	itemRenderer: itemRenderer<I>((content, item) => {
		const below = hint?.(item);
		return [
			line(label ? label(item) : content, description?.(item)),
			below ? html`<span class="option-hint">${below}</span>` : nothing,
		];
	}),
	chipRenderer: (props: ChipProps<I>) =>
		chip({
			...props,
			content:
				props.item == null
					? props.content
					: line(
							label ? label(props.item) : props.content,
							description?.(props.item),
						),
		}),
});
