/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots['cosmoz-autocomplete-ui render'] = `<cosmoz-input
  always-float-label=""
  autocomplete="off"
  exportparts="input: input-input,control: input-control,label: input-label,line: input-line,error: input-error,wrap: input-wrap"
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
  <cosmoz-autocomplete-chip
    class="chip"
    exportparts="chip-text, chip-clear"
    part="chip"
    slot="control"
    title="Item 1"
  >
    Item 1
  </cosmoz-autocomplete-chip>
  <cosmoz-autocomplete-chip
    class="chip"
    exportparts="chip-text, chip-clear"
    part="chip"
    slot="control"
    title="Item 2"
  >
    Item 2
  </cosmoz-autocomplete-chip>
  <cosmoz-autocomplete-chip
    class="badge"
    disabled=""
    exportparts="chip-text, chip-clear"
    hidden=""
    part="chip"
    slot="control"
  >
    <span>
    </span>
  </cosmoz-autocomplete-chip>
</cosmoz-input>
`;
/* end snapshot cosmoz-autocomplete-ui render */

snapshots['cosmoz-autocomplete-ui render (limit 1)'] = `<cosmoz-input
  always-float-label=""
  autocomplete="off"
  data-one=""
  data-single=""
  exportparts="input: input-input,control: input-control,label: input-label,line: input-line,error: input-error,wrap: input-wrap"
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
  <cosmoz-autocomplete-chip
    class="chip"
    exportparts="chip-text, chip-clear"
    part="chip"
    slot="control"
    title="Item 1"
  >
    Item 1
  </cosmoz-autocomplete-chip>
  <cosmoz-autocomplete-chip
    class="badge"
    disabled=""
    exportparts="chip-text, chip-clear"
    hidden=""
    part="chip"
    slot="control"
  >
    <span>
    </span>
  </cosmoz-autocomplete-chip>
</cosmoz-input>
`;
/* end snapshot cosmoz-autocomplete-ui render (limit 1) */

snapshots['cosmoz-autocomplete-ui render (listbox)'] = `<cosmoz-input
  always-float-label=""
  autocomplete="off"
  exportparts="input: input-input,control: input-control,label: input-label,line: input-line,error: input-error,wrap: input-wrap"
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
  <cosmoz-autocomplete-chip
    class="chip"
    exportparts="chip-text, chip-clear"
    part="chip"
    slot="control"
    title="Item 1"
  >
    Item 1
  </cosmoz-autocomplete-chip>
  <cosmoz-autocomplete-chip
    class="badge"
    disabled=""
    exportparts="chip-text, chip-clear"
    hidden=""
    part="chip"
    slot="control"
  >
    <span>
      +0
    </span>
  </cosmoz-autocomplete-chip>
</cosmoz-input>
<cosmoz-listbox
  multi=""
  part="listbox"
  popover="manual"
  style="left: 8px; top: 68px; min-width: 784px;"
>
</cosmoz-listbox>
`;
/* end snapshot cosmoz-autocomplete-ui render (listbox) */

snapshots['cosmoz-autocomplete render'] = `<cosmoz-input
  always-float-label=""
  autocomplete="off"
  exportparts="input: input-input,control: input-control,label: input-label,line: input-line,error: input-error,wrap: input-wrap"
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
  <cosmoz-autocomplete-chip
    class="chip"
    exportparts="chip-text, chip-clear"
    part="chip"
    slot="control"
    title="Item 1"
  >
    Item 1
  </cosmoz-autocomplete-chip>
  <cosmoz-autocomplete-chip
    class="badge"
    disabled=""
    exportparts="chip-text, chip-clear"
    hidden=""
    part="chip"
    slot="control"
  >
    <span>
    </span>
  </cosmoz-autocomplete-chip>
</cosmoz-input>
`;
/* end snapshot cosmoz-autocomplete render */

snapshots['cosmoz-autocomplete render (deselect)'] = `<cosmoz-input
  autocomplete="off"
  data-one=""
  exportparts="input: input-input,control: input-control,label: input-label,line: input-line,error: input-error,wrap: input-wrap"
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
  <cosmoz-autocomplete-chip
    class="badge"
    disabled=""
    exportparts="chip-text, chip-clear"
    hidden=""
    part="chip"
    slot="control"
  >
    <span>
    </span>
  </cosmoz-autocomplete-chip>
</cosmoz-input>
`;
/* end snapshot cosmoz-autocomplete render (deselect) */
