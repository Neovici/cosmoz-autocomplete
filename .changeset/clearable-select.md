---
'@neovici/cosmoz-autocomplete': minor
---

`mode="select"` respects a `min` the consumer passes. A select still keeps its value by default (`min` 1). With `min` 0, a clear button appears beside the chevron.

In select mode, the chosen value fills the row with no caret showing, like a button's label. Typing swaps it for the search query.
