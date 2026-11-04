---
'@neovici/cosmoz-autocomplete': minor
---

Select mode (`mode="select"`) looks like a combobox: an up-down chevron that stays next to a consumer's `suffix`, a popover with a shadow, a check mark on the selected option instead of a filled row, and a soft accent highlight.

New `optionRenderers({ label, description, hint })` (also from `@neovici/cosmoz-autocomplete/option`) returns an `itemRenderer` and a `chipRenderer`: options show a label, a muted description and an optional hint line below; the field shows the label and description. Use `item-height="auto"` when options have a hint.
