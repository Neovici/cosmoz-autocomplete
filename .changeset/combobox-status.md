---
'@neovici/cosmoz-autocomplete': minor
---

- Announce the number of results (or "No results found") in a polite live region while the list is open, debounced so it isn't read on every keystroke.
- Highlight matches accent- and case-insensitively, the same way the search finds them.
- Ignore a slow source response once a newer query has been sent; before, an older response could overwrite newer results.
- Add a `debounce` attribute (milliseconds) that delays calling a function `source` while the user types.
