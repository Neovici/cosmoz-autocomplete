---
'@neovici/cosmoz-autocomplete': patch
---

Cmd/Ctrl shortcuts no longer clear a single-select's selection. Text input (typing, paste, IME) replaces the selection instead of any keydown, and the catch-all `ANY_KEY` keybinding (`AUTOCOMPLETE_SEARCH_WHEN_SELECTED`) is removed
