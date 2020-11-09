# `cosmoz-autocomplete`

#### `render`

```html
<div class="chips">
  <div
    class="chip"
    part="chip"
    title="Item 1"
  >
    <span
      class="chip-text"
      part="chip-text"
    >
      Item 1
    </span>
    <span
      class="chip-clear"
      part="chip-clear"
    >
    </span>
  </div>
</div>
<paper-input
  aria-disabled="false"
  id="input"
  part="input"
  tabindex="0"
>
  <slot
    name="prefix"
    slot="prefix"
  >
  </slot>
  <slot
    name="suffix"
    slot="suffix"
  >
  </slot>
</paper-input>

```

```html
<div class="chips">
  <div class="chip">
    <span class="chip-text">
      Item 1
    </span>
    <span class="chip-clear">
    </span>
  </div>
</div>
<paper-input
  aria-disabled="false"
  id="input"
  tabindex="0"
>
  <slot
    name="prefix"
    slot="prefix"
  >
  </slot>
  <slot
    name="suffix"
    slot="suffix"
  >
  </slot>
</paper-input>
```

