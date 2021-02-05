# `cosmoz-autocomplete-ui`

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
<cosmoz-input
  autocomplete="off"
  exportparts="input: input-input, label: input-label"
  id="input"
  part="input"
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
</cosmoz-input>

```

#### `render (limit 1)`

```html
<cosmoz-input
  always-float-label=""
  autocomplete="off"
  exportparts="input: input-input, label: input-label"
  id="input"
  part="input"
  readonly=""
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
  <div
    class="chips"
    slot="prefix"
  >
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
</cosmoz-input>

```

#### `render (suggestions)`

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
<cosmoz-input
  autocomplete="off"
  exportparts="input: input-input, label: input-label"
  id="input"
  part="input"
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
</cosmoz-input>
<disconnect-observer>
</disconnect-observer>

```

#### `render (deselect)`

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
<cosmoz-input
  autocomplete="off"
  exportparts="input: input-input, label: input-label"
  id="input"
  part="input"
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
</cosmoz-input>

```

