import { html, nothing } from 'lit-html';
import { chip, ChipProps } from './autocomplete/chip';
import { itemRenderer } from './listbox/item-renderer';

export interface OptionParts<I> {
	/**
	 * What the option is. Defaults to the item's text with the query marked,
	 * which is passed as `content`.
	 */
	label?: (item: I, content: unknown) => unknown;
	/** Muted text after the label, e.g. a description or a number. */
	description?: (item: I) => string | null | undefined;
	/** A smaller second line, e.g. who approves it. Needs room: `item-height="auto"` or taller items. */
	hint?: (item: I) => string | null | undefined;
	/** Before the text: an image or an icon, in a square of `--cosmoz-option-media-size`. */
	media?: (item: I) => unknown;
	/** After the text, e.g. a price or a badge. */
	trailing?: (item: I) => unknown;
}

const line = (label: unknown, description?: string | null) =>
	html`<span class="option-line"
		><span class="option-label">${label}</span>${description
			? html`<span class="option-description">${description}</span>`
			: nothing}</span
	>`;

const part = (className: string, content: unknown) =>
	content == null || content === nothing || content === ''
		? nothing
		: html`<span class=${className}>${content}</span>`;

/**
 * Renderers for combobox-style options: an optional image or icon, a label,
 * a muted description, an optional hint below and an optional trailing part
 * such as a price. The chip shows the label and description.
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
	media,
	trailing,
}: OptionParts<I> = {}) => ({
	itemRenderer: itemRenderer<I>((content, item) =>
		// the virtualizer can ask for a row before its item exists
		item == null
			? content
			: html`<span class="option"
					>${part('option-media', media?.(item))}<span class="option-text"
						>${line(
							label ? label(item, content) : content,
							description?.(item),
						)}${part('option-hint', hint?.(item))}</span
					>${part('option-trailing', trailing?.(item))}</span
				>`,
	),
	chipRenderer: (props: ChipProps<I>) =>
		chip({
			...props,
			content:
				props.item == null
					? props.content
					: line(
							label ? label(props.item, props.content) : props.content,
							description?.(props.item),
						),
		}),
});
