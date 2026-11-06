---
'@neovici/cosmoz-autocomplete': minor
---

Select mode (`mode="select"`) looks like a combobox: an up-down chevron that stays next to a consumer's `suffix`, a popover with a shadow, a check mark on the selected option instead of a filled row, and a soft accent highlight.

New `optionRenderers({ label, description, hint, media, trailing })` (also from `@neovici/cosmoz-autocomplete/option`) returns an `itemRenderer` and a `chipRenderer`: options show an optional image or icon, a label, a muted description, an optional hint line below and an optional trailing part such as a price; the field shows the label and description. The parts render in a self-styled `cosmoz-option` element, so their styles load only with `optionRenderers`. Use `item-height="auto"` when options have a hint.
