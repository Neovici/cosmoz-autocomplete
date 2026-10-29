---
'@neovici/cosmoz-autocomplete': patch
---

Widen the cosmoz-tokens range to `^3.4.0 || ^4.0.0`; the v4 token set is the line the redesigned components ship on, and widening stops the nested token copies (two `--cz-*` sets, one root).
