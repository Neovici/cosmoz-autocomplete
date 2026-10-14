---
'@neovici/cosmoz-autocomplete': minor
---

Add `onCreate(query)`: when set and the query matches no item exactly (ignoring case), a `Create "<query>"` option is offered after the matches. It is a regular option (keyboard, click, screen readers). Return the new item, or a promise of it, to select it. `createLabel(query)` overrides the option text.
