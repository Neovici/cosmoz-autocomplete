---
'@neovici/cosmoz-autocomplete': major
---

Accessible combobox: screen readers now hear the highlighted option.

- The input is a `role="combobox"` with `aria-expanded`, `aria-autocomplete="list"`, and `aria-controls` / `aria-activedescendant` set through ARIA element reflection (requires Chrome 135, Firefox 136, Safari 16.4).
- The listbox (`role="listbox"`, labelled by `label`, `aria-multiselectable` for multi-select) and its options now render in the autocomplete's own shadow root instead of inside `cosmoz-listbox`. Options report `aria-selected="true|false"`, `aria-setsize` and `aria-posinset`, and the highlighted option has `data-highlighted`.
- Keys are handled by the focused input instead of the global keybindings context: Arrow keys (and Alt+ArrowDown / ArrowDown to open a closed list), Enter, Escape and Alt+ArrowUp to close, PageUp/PageDown by `item-limit`, and Home/End when the input is read-only (a single selection).

Breaking changes:

- Query the input by role `combobox`, not `textbox`.
- `part="listbox"` is now a `div` in the autocomplete's shadow root; CSS targeting `cosmoz-listbox` inside the autocomplete no longer applies. Options are reachable as `::part(option)`.
- The autocomplete no longer registers keybinding activities. `autocompleteKeybindings` is still exported for the standalone `cosmoz-listbox`, which keeps using them.
- The `autocomplete()` template function takes new props (`expanded`, `renderListbox`, `onKeyDown`); use the `Autocomplete` component instead.
- Custom item renderers should render options with the new `renderOption` export (from `@neovici/cosmoz-autocomplete/item-renderer`) so they carry the ARIA attributes. `Position` no longer has `scroll`.
