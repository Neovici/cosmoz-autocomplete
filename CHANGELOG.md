## [2.9.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.8.1...v2.9.0) (2021-01-27)


### Features

* **autocomplete:** adds hide-empty to hide suggestions when query is empty ([361be88](https://github.com/neovici/cosmoz-autocomplete/commit/361be88073973dd037a1bce2495041edc9221c1c)), closes [#87](https://github.com/neovici/cosmoz-autocomplete/issues/87)

### [2.8.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.8.0...v2.8.1) (2021-01-26)


### Bug Fixes

* correct limit is one check ([403a85d](https://github.com/neovici/cosmoz-autocomplete/commit/403a85dad1e213fa6f3a05396f4402c8e55accbf))

## [2.8.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.5...v2.8.0) (2021-01-26)


### Features

* **autocomplete:** allow typing on top of limited(1) input ([f7e97d0](https://github.com/neovici/cosmoz-autocomplete/commit/f7e97d0314c1c71c102e9a428c8d0ffba36a7bf0))
* **cosmoz-autocomplete:** replace paper-input with cosmoz-input ([4806c83](https://github.com/neovici/cosmoz-autocomplete/commit/4806c83199f9559160309374f15cc70b4cf8cc3f))
* **cosmoz-input:** implementation ([59989eb](https://github.com/neovici/cosmoz-autocomplete/commit/59989eb143a775e32f7c564377547d68c1898c2c))


### Bug Fixes

* switch to cosmoz-input ([ac27335](https://github.com/neovici/cosmoz-autocomplete/commit/ac273359b3178fd8874e0010b56b52edc8395a7d))

### [2.7.5](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.4...v2.7.5) (2020-12-18)


### Bug Fixes

* **autocomplete:** prevent clearing input on backspace press if disabled ([e58c988](https://github.com/neovici/cosmoz-autocomplete/commit/e58c988baf30dd43c336c91c2cd0ecd8f336f586))

### [2.7.4](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.3...v2.7.4) (2020-12-14)


### Bug Fixes

* change state to props to fix changed events ([9aa6fd9](https://github.com/neovici/cosmoz-autocomplete/commit/9aa6fd96c74ec365f7f794e14be46629eb34c6c9))

### [2.7.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.2...v2.7.3) (2020-11-19)


### Bug Fixes

* use input as anchor for suggestions ([990cde5](https://github.com/neovici/cosmoz-autocomplete/commit/990cde5d03ea805190563571cd47fb7e4e5b71e4))

### [2.7.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.1...v2.7.2) (2020-11-18)


### Bug Fixes

* add limit, text-property to observed attributes ([2093313](https://github.com/neovici/cosmoz-autocomplete/commit/2093313bd82a296c7d995607e548ab280505b4fc))

### [2.7.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.0...v2.7.1) (2020-11-11)


### Bug Fixes

* add text and value events ([271a96c](https://github.com/neovici/cosmoz-autocomplete/commit/271a96cb0fb6e1bd05eb672d00da347ea7ddde39))

## [2.7.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.6.0...v2.7.0) (2020-11-09)


### Features

* when items or query changes reset index to 0 instead of undefined ([d0d440f](https://github.com/neovici/cosmoz-autocomplete/commit/d0d440faf02d3872798e2f6907c97eb4e0023177))

## [2.6.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.5.0...v2.6.0) (2020-11-09)


### Features

* adds confinement and placement support ([567a4c3](https://github.com/neovici/cosmoz-autocomplete/commit/567a4c355036606b670e775243d33c5d6edb56d5))


### Bug Fixes

* don't blur autocomplete on select ([42fd2e8](https://github.com/neovici/cosmoz-autocomplete/commit/42fd2e83c30aee10ee1bf868eb020f0822823c0c))
* **autocomplete:** adds input, chip, chip-text, chip-clear parts ([cdf4320](https://github.com/neovici/cosmoz-autocomplete/commit/cdf432033d6734be0e678ec774447848eb672a62))

## [2.5.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.10...v2.5.0) (2020-11-02)


### Features

* render suggestions in a portal ([cbc199e](https://github.com/neovici/cosmoz-autocomplete/commit/cbc199e9da71daa6715c5911fbbb87cde1883980)), closes [#73](https://github.com/neovici/cosmoz-autocomplete/issues/73)

### [2.4.10](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.9...v2.4.10) (2020-10-21)


### Bug Fixes

* paper-input slot styling on Safari ([05e3356](https://github.com/neovici/cosmoz-autocomplete/commit/05e33566c7c6d736da6e1bfcac3f98cd99475ea5))

### [2.4.9](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.8...v2.4.9) (2020-08-27)


### Bug Fixes

* sets initial sizer on mount ([d823ea3](https://github.com/neovici/cosmoz-autocomplete/commit/d823ea3759d17b1e97a0ba757d6dc659536fa070)), closes [#67](https://github.com/neovici/cosmoz-autocomplete/issues/67)

### [2.4.8](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.7...v2.4.8) (2020-07-30)


### Bug Fixes

* use functional utils from @neovici/cosmoz-utils ([7cdd283](https://github.com/neovici/cosmoz-autocomplete/commit/7cdd2839fc0af66a4c2003854fbcb1da55d9af39))

### [2.4.7](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.6...v2.4.7) (2020-07-28)


### Bug Fixes

* display suggestions using position fixed ([a09f3cb](https://github.com/neovici/cosmoz-autocomplete/commit/a09f3cb849a6ae2e1076322d1f88db9272fb936b))

### [2.4.6](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.5...v2.4.6) (2020-06-16)


### Bug Fixes

* **autocomplete:** hide suggestions if disabled ([c658dd8](https://github.com/neovici/cosmoz-autocomplete/commit/c658dd80bd91fda06289b881dee6cb75bac9dd8e))
* **autocomplete:** replace iron-icon with inline svg ([8333a4e](https://github.com/neovici/cosmoz-autocomplete/commit/8333a4e6db7912f88fc53a4f296ab11d30b28d3b))

### [2.4.5](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.4...v2.4.5) (2020-05-21)


### Bug Fixes

* **suggestions:** handles onEnter without highlight/selection ([f341101](https://github.com/neovici/cosmoz-autocomplete/commit/f341101ad8ca3d27ebfcc7e8b7025e7adbaed652)), closes [#59](https://github.com/neovici/cosmoz-autocomplete/issues/59)

### [2.4.4](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.3...v2.4.4) (2020-05-21)


### Bug Fixes

* **autocomplete:** better ui for single selection ([d185ad1](https://github.com/neovici/cosmoz-autocomplete/commit/d185ad13674b7fe96cac95b3689f969c6769efa0)), closes [#57](https://github.com/neovici/cosmoz-autocomplete/issues/57)

### [2.4.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.2...v2.4.3) (2020-05-15)


### Bug Fixes

* **autocomplete:** correct paper-input attributes binding ([480b7a6](https://github.com/neovici/cosmoz-autocomplete/commit/480b7a6ef8634cde61b23a8f95a4e29a280fcf5d)), closes [#53](https://github.com/neovici/cosmoz-autocomplete/issues/53)
* **suggestions:** don't compute sizer when range is undefined ([d4e6613](https://github.com/neovici/cosmoz-autocomplete/commit/d4e6613d7a444e01aa1f06319b8325aff8936f6b))
* **suggestions:** rangechange infinite loop ([508e632](https://github.com/neovici/cosmoz-autocomplete/commit/508e6327512e30b5f035f1f5bac1764429501a4e)), closes [#52](https://github.com/neovici/cosmoz-autocomplete/issues/52)

### [2.4.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.1...v2.4.2) (2020-05-12)


### Bug Fixes

* **mark:** handle special chars in mark ([059c4b4](https://github.com/neovici/cosmoz-autocomplete/commit/059c4b46dd87ffb7f5e1370a8395704951b105dd)), closes [#50](https://github.com/neovici/cosmoz-autocomplete/issues/50)

### [2.4.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.0...v2.4.1) (2020-05-07)


### Bug Fixes

* improves autosize and external behavior ([64bce1a](https://github.com/neovici/cosmoz-autocomplete/commit/64bce1afdadfd79496659f8ae2080df27d1c7818))

## [2.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.3.1...v2.4.0) (2020-05-06)


### Features

* refactor exposing text, onText and external ([20f5dfb](https://github.com/neovici/cosmoz-autocomplete/commit/20f5dfb21f2a658e28d6b4fbda8cb86e8033a526))


### Bug Fixes

* add strProp ([3571d2a](https://github.com/neovici/cosmoz-autocomplete/commit/3571d2a0f4b7f4c67e3bbb39c4c7867d3fd8ac4a))
* autosize suggestions ([2fc406d](https://github.com/neovici/cosmoz-autocomplete/commit/2fc406d36dc1d7d8ba0c1619a2c2571d22ebaa0a))

### [2.3.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.3.0...v2.3.1) (2020-05-05)


### Bug Fixes

* handle undefined in utils search ([6bffa91](https://github.com/neovici/cosmoz-autocomplete/commit/6bffa910b15f17f7ec1da30b04f8db73aec6e2cf))

## [2.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.3...v2.3.0) (2020-05-04)


### Features

* adds onFocusChange ([3de918e](https://github.com/neovici/cosmoz-autocomplete/commit/3de918e6ee8f96a3108cd8ede11654d252bfe266))


### Bug Fixes

* **test:** adds someFrames ([dcc8f58](https://github.com/neovici/cosmoz-autocomplete/commit/dcc8f5846cddf1c55d5cf4147c4f6956f598da9b))
* update reduce and action usage ([6e174ab](https://github.com/neovici/cosmoz-autocomplete/commit/6e174aba2502cb540d9a9ab12f903a7345094533))
* **deps:** use correct caret version for paper-* elements ([cf7ef79](https://github.com/neovici/cosmoz-autocomplete/commit/cf7ef798fce111e85b0723286d13e40738afedec))

### [2.2.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.2...v2.2.3) (2020-04-28)


### Bug Fixes

* adds suggestionsWidth property ([a229453](https://github.com/neovici/cosmoz-autocomplete/commit/a229453241c42aaa40b4b32245f03d4c47d3afec))

### [2.2.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.1...v2.2.2) (2020-04-27)


### Bug Fixes

* unarray value on select if limit is 1 ([aaca081](https://github.com/neovici/cosmoz-autocomplete/commit/aaca08150f078ef75087b57d7f30a920ade29288))

### [2.2.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.0...v2.2.1) (2020-04-24)


### Bug Fixes

* prop should fallback to identity if key is falsy ([d7f7adc](https://github.com/neovici/cosmoz-autocomplete/commit/d7f7adc6f060892988e0d6ee1324a5ceb7284e2b))

## [2.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.1.0...v2.2.0) (2020-04-24)


### Features

* implements multi selection ([f7c797c](https://github.com/neovici/cosmoz-autocomplete/commit/f7c797c3ccb84118deb6ccfa4d57114e9b81a28f))


### Bug Fixes

* adds no-label-float ([2d7b8d6](https://github.com/neovici/cosmoz-autocomplete/commit/2d7b8d636773d06a2febf9eb59ec666a99aebe41))
* paper-autocomplete misc compat fixes ([503ef2c](https://github.com/neovici/cosmoz-autocomplete/commit/503ef2c34d84c87d43360d59fc645c52b92b3571))
* sort search results by position ([71b49d6](https://github.com/neovici/cosmoz-autocomplete/commit/71b49d6692853a8ebcc091eeb0702258a816c392))
* styles clear icon button ([fde2205](https://github.com/neovici/cosmoz-autocomplete/commit/fde22059a6b53a623f351206e68fa2b611527d63))
* use capture for keyboard navigation events ([d563bd6](https://github.com/neovici/cosmoz-autocomplete/commit/d563bd6d795ea53a0ff2648eec52fb29bff92ba5))

## [2.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.0.1...v2.1.0) (2020-04-22)


### Features

* adds query mark to cosmoz-suggestions ([086c090](https://github.com/neovici/cosmoz-autocomplete/commit/086c090b4c4f4fca99e2c58c29955c662c0ce4a9))


### Bug Fixes

* remote whitespace in mark template ([ff991b9](https://github.com/neovici/cosmoz-autocomplete/commit/ff991b96f3663a921aada1d98759b35f84082adb))

### [2.0.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.0.0...v2.0.1) (2020-04-22)


### Bug Fixes

* don't update text state unless it actually changed ([203abd1](https://github.com/neovici/cosmoz-autocomplete/commit/203abd160fc6b9b1506e0f951b9abacf3d79a87a))

## [2.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v1.0.2...v2.0.0) (2020-04-17)


### ⚠ BREAKING CHANGES

* new autocomplete implementation

### Features

* cleanup old repo ([23395c0](https://github.com/neovici/cosmoz-autocomplete/commit/23395c07657ced4d8b3d8964b75ca6724a77aa96))
* handles value in autocomplete ([b5ae729](https://github.com/neovici/cosmoz-autocomplete/commit/b5ae7298e4351b6d754880353659e19fdd01ac19))
* new autocomplete implementation ([aeb7e15](https://github.com/neovici/cosmoz-autocomplete/commit/aeb7e15eb51381213ff84d47e12c9616b54b7b09))
* refactor cosmoz-suggestions ([069ffb1](https://github.com/neovici/cosmoz-autocomplete/commit/069ffb151694ab8366ea713b8e499b76fc93940f))


### Bug Fixes

* adds propOrRoot ([28be9b6](https://github.com/neovici/cosmoz-autocomplete/commit/28be9b62435cf7dbe8ba58378df4310be0ebd559))
* improves autocomplete behavior ([faa4493](https://github.com/neovici/cosmoz-autocomplete/commit/faa4493246d930227579f012cc3fbbb58dad1677))
* onSelect check ([390b646](https://github.com/neovici/cosmoz-autocomplete/commit/390b64664ce34682e453cb5b70e7bdfe91df3079))
