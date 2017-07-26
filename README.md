[![Build Status](https://travis-ci.org/Neovici/cosmoz-autocomplete.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-autocomplete)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

# &lt;cosmoz-autocomplete&gt;

`cosmoz-autocomplete` is an auto-complete component with multi-selection support

## Installation

To install, run: `bower install --save Neovici/cosmoz-autocomplete`

## Usage
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="cosmoz-autocomplete.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<cosmoz-autocomplete 
  items='[{ "id": "1", "label": "Red" }, { "id": "2", "label": "Green" }, { "id": "3", "label": "Blue" }]'
  placeholder="Search color"
  multi-selection
  selected-items="{{ selectedItems }}">
</cosmoz-autocomplete>
```