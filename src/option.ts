import { component, css, html } from '@pionjs/pion';
import { nothing } from 'lit-html';
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

interface OptionProps {
	description?: unknown;
	hint?: unknown;
	media?: unknown;
	trailing?: unknown;
}

const isEmpty = (content: unknown): boolean =>
	content == null ||
	content === false ||
	content === '' ||
	content === nothing ||
	(Array.isArray(content) && content.every(isEmpty));

const part = (className: string, content: unknown) =>
	isEmpty(content) ? nothing : html`<span class=${className}>${content}</span>`;

const style = css`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
		height: 100%;
	}
	.text {
		flex: 1;
		min-width: 0;
	}
	.media {
		display: grid;
		flex: none;
		place-items: center;
		width: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		height: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		border-radius: var(--cz-radius-md);
		overflow: hidden;
		background: var(--cz-color-bg-secondary);
		color: var(--cz-color-fg-quaternary);
	}
	.media > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: var(--cz-color-bg-primary);
	}
	.trailing {
		display: flex;
		flex: none;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
		line-height: var(--cz-text-sm-line-height);
	}
	.line,
	.hint {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: var(--cz-text-sm-line-height);
	}
	.label {
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
		color: var(--cz-color-text-primary);
	}
	.description {
		margin-inline-start: calc(var(--cz-spacing) * 1.5);
		color: var(--cz-color-text-tertiary);
		font-weight: var(--cz-font-weight-regular);
	}
	.hint {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-tertiary);
	}
`;

/**
 * An option's parts: an optional image or icon, the label (slotted, so a
 * marked query stays in the light DOM), a muted description, an optional hint
 * line below and an optional trailing part. Self-styled, so only consumers of
 * `optionRenderers` load these styles.
 */
const Option = ({ description, hint, media, trailing }: OptionProps) =>
	html`${part('media', media)}<span class="text"
			><span class="line"
				><span class="label"><slot></slot></span>${part(
					'description',
					description,
				)}</span
			>${part('hint', hint)}</span
		>${part('trailing', trailing)}`;

customElements.define(
	'cosmoz-option',
	component<OptionProps>(Option, { styleSheets: [style] }),
);

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
	itemRenderer: itemRenderer<I>((content, item) => {
		// the virtualizer can ask for a row before its item exists
		if (item == null) return content;
		const parts = {
			description: description?.(item),
			hint: hint?.(item),
			media: media?.(item),
			trailing: trailing?.(item),
		};
		// markers for the listbox's padding: :has() can't see into the shadow
		return html`<cosmoz-option
			?data-media=${!isEmpty(parts.media)}
			?data-hint=${!isEmpty(parts.hint)}
			.description=${parts.description}
			.hint=${parts.hint}
			.media=${parts.media}
			.trailing=${parts.trailing}
			>${label ? label(item, content) : content}</cosmoz-option
		>`;
	}),
	chipRenderer: (props: ChipProps<I>) =>
		props.item == null
			? chip(props)
			: chip({
					...props,
					// the field shows the parts, the tooltip keeps the item's text
					title: typeof props.content === 'string' ? props.content : undefined,
					content: html`<cosmoz-option .description=${description?.(props.item)}
						>${label
							? label(props.item, props.content)
							: props.content}</cosmoz-option
					>`,
				}),
});
