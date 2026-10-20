---
'@neovici/cosmoz-autocomplete': minor
---

Chip selection layout: the chip band is a wrapping, clipping row one chip
row tall (IntersectionObserver-based, ported from cosmoz-tabs' next family,
no forced-layout measuring) with the field kept at its set height and the
chips that wrap past the band counted in a `+N` badge pinned at the
control's right edge; `wrap` uncaps the band and lets the field grow to
real multi-row wrapping. The css clip hides wrapped members on first paint
(no visible clipping flash); the observer marks only attribute them to the
report. Wide chips ellipsize. Single-value fields ride the same band -
nothing is special-cased per limit anymore; a lone chip fits the band, so
nothing is marked and no badge appears.
