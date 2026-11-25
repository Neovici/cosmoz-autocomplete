import{b as h}from"./iframe-zCxUUSHg.js";import"./index-BcxQUuI3.js";import"./preload-helper-PPVm8Dsz.js";import"./use-autocomplete-BnArfQ27.js";import"./index-s1pP-A5o.js";import"./search-md-Cfe-1-JP.js";const{expect:e,userEvent:c,waitFor:s}=__STORYBOOK_MODULE_TEST__,z={title:"Tests/Autocomplete Pills"},p={render:()=>h`
        <div style="width: 320px">
            <cosmoz-autocomplete-pills
                .source=${Array.from({length:12},(n,t)=>({text:`Label number ${t+1}`}))}
                .value=${Array.from({length:8},(n,t)=>({text:`Label number ${t+1}`}))}
                text-property="text"
                keep-opened
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter labels"}
            ></cosmoz-autocomplete-pills>
        </div>
    `,play:async({canvasElement:n,step:t})=>{const o=n.querySelector("cosmoz-autocomplete-pills"),a=r=>o.shadowRoot.querySelector(r),l=()=>a(".badge"),w=()=>a("cosmoz-dropdown-next").shadowRoot.querySelector("[popover]");await t("collapses what does not fit and keeps the add button",async()=>{await s(()=>e(l().hidden).toBe(!1));const r=a(".add").getBoundingClientRect(),b=a(".pill-row").getBoundingClientRect();e(r.right).toBeLessThanOrEqual(b.right);const y=a('cosmoz-tooltip[for="overflow"]');e(l().getAttribute("name")).toBe("overflow"),e(l().hasAttribute("title")).toBe(!1),e(y.getAttribute("description").split(", ").length).toBe(Number(l().textContent.trim().slice(1)))}),await t("the badge names the hidden labels on hover",async()=>{await c.hover(l()),await s(()=>e(a('[role="tooltip"]').matches(":popover-open")).toBe(!0)),e(a('[role="tooltip"]').textContent).toContain("Label number 8")}),await t("the badge opens the picker",async()=>{await c.click(l()),await s(()=>e(w().matches(":popover-open")).toBe(!0))}),await t("searches inside the popover, with checks on selected",async()=>{const r=()=>a("cosmoz-listbox");await s(()=>e(r().hasAttribute("checkmark")).toBe(!0)),await c.type(a("cosmoz-input.search").shadowRoot.querySelector("input"),"12"),await s(()=>e(r().shadowRoot.querySelectorAll(".item").length).toBe(1))})}},x=n=>{const t=n.querySelector("cosmoz-autocomplete-pills"),o=a=>t.shadowRoot.querySelector(a);return{el:t,$:o,badge:()=>o(".badge")}},i={render:()=>h`
        <div style="display: inline-flex; width: 600px">
            <cosmoz-autocomplete-pills
                style="flex: 1"
                .source=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                .value=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                text-property="text"
                .placeholder=${"Label"}
            ></cosmoz-autocomplete-pills>
        </div>
    `,play:async({canvasElement:n})=>{const{el:t,badge:o}=x(n);await s(()=>e(t.shadowRoot.querySelectorAll(".chip:not([hidden])").length).toBe(3)),e(o().hidden).toBe(!0),e(getComputedStyle(o()).display).toBe("none")}},d={render:()=>h`
        <cosmoz-autocomplete-pills
            .source=${[{text:"Red"},{text:"Green"}]}
            .value=${[{text:"Red"},{text:"Green"}]}
            text-property="text"
            keep-opened
        ></cosmoz-autocomplete-pills>
    `,play:async({canvasElement:n})=>{const{el:t,$:o}=x(n);await c.click(o(".add"));const a=()=>o("cosmoz-input.search").shadowRoot.querySelector("input");await s(()=>e(a()).toBeTruthy()),await c.type(a(),"g{Backspace}{Backspace}{Backspace}"),e(t.value.length).toBe(2)}},u={render:()=>h`
        <div style="width: 160px">
            <cosmoz-autocomplete-pills
                .source=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                .value=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                text-property="text"
                disabled
            ></cosmoz-autocomplete-pills>
        </div>
    `,play:async({canvasElement:n})=>{const{el:t,badge:o}=x(n);await s(()=>e(o().hidden).toBe(!1)),o().click(),await new Promise(a=>setTimeout(a,100)),e(t.hasAttribute("opened")).toBe(!1)}},m={...p,play:async({canvasElement:n})=>{const{$:t,badge:o}=x(n),a=()=>t("cosmoz-dropdown-next").shadowRoot.querySelector("[popover]");await s(()=>e(o().hidden).toBe(!1)),e(o().tabIndex).toBe(0),o().focus(),await s(()=>e(o().matches(":focus")).toBe(!0)),await s(()=>e(t('[role="tooltip"]').matches(":popover-open")).toBe(!0)),e(t('[role="tooltip"]').textContent).toContain("Label number 8"),await c.keyboard("{Enter}"),await s(()=>e(a().matches(":popover-open")).toBe(!0))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 320px">
            <cosmoz-autocomplete-pills
                .source=\${Array.from({
    length: 12
  }, (_, i) => ({
    text: \`Label number \${i + 1}\`
  }))}
                .value=\${Array.from({
    length: 8
  }, (_, i) => ({
    text: \`Label number \${i + 1}\`
  }))}
                text-property="text"
                keep-opened
                .placeholder=\${'Label'}
                .searchPlaceholder=\${'Filter labels'}
            ></cosmoz-autocomplete-pills>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-autocomplete-pills')!;
    const $ = <E extends Element,>(sel: string) => el.shadowRoot!.querySelector<E>(sel)!;
    const badge = () => $<HTMLElement>('.badge');
    const popover = () => $('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
    await step('collapses what does not fit and keeps the add button', async () => {
      await waitFor(() => expect(badge().hidden).toBe(false));
      const add = $<HTMLElement>('.add').getBoundingClientRect();
      const row = $<HTMLElement>('.pill-row').getBoundingClientRect();
      expect(add.right).toBeLessThanOrEqual(row.right);
      const tooltip = $<HTMLElement>('cosmoz-tooltip[for="overflow"]');
      expect(badge().getAttribute('name')).toBe('overflow');
      expect(badge().hasAttribute('title')).toBe(false);
      expect(tooltip.getAttribute('description')!.split(', ').length).toBe(Number(badge().textContent!.trim().slice(1)));
    });
    await step('the badge names the hidden labels on hover', async () => {
      await userEvent.hover(badge());
      await waitFor(() => expect($('[role="tooltip"]').matches(':popover-open')).toBe(true));
      expect($('[role="tooltip"]').textContent).toContain('Label number 8');
    });
    await step('the badge opens the picker', async () => {
      await userEvent.click(badge());
      await waitFor(() => expect(popover().matches(':popover-open')).toBe(true));
    });
    await step('searches inside the popover, with checks on selected', async () => {
      const listbox = () => $('cosmoz-listbox');
      await waitFor(() => expect(listbox().hasAttribute('checkmark')).toBe(true));
      await userEvent.type($('cosmoz-input.search').shadowRoot!.querySelector('input')!, '12');
      await waitFor(() => expect(listbox().shadowRoot!.querySelectorAll('.item').length).toBe(1));
    });
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="display: inline-flex; width: 600px">
            <cosmoz-autocomplete-pills
                style="flex: 1"
                .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                text-property="text"
                .placeholder=\${'Label'}
            ></cosmoz-autocomplete-pills>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      badge
    } = pillOf(canvasElement);
    await waitFor(() => expect(el.shadowRoot!.querySelectorAll('.chip:not([hidden])').length).toBe(3));
    expect(badge().hidden).toBe(true);
    expect(getComputedStyle(badge()).display).toBe('none');
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-autocomplete-pills
            .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }]}
            .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }]}
            text-property="text"
            keep-opened
        ></cosmoz-autocomplete-pills>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      $
    } = pillOf(canvasElement);
    await userEvent.click($('.add'));
    const input = () => $('cosmoz-input.search').shadowRoot!.querySelector('input')!;
    await waitFor(() => expect(input()).toBeTruthy());
    await userEvent.type(input(), 'g{Backspace}{Backspace}{Backspace}');
    expect((el as unknown as {
      value: unknown[];
    }).value.length).toBe(2);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 160px">
            <cosmoz-autocomplete-pills
                .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                text-property="text"
                disabled
            ></cosmoz-autocomplete-pills>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      badge
    } = pillOf(canvasElement);
    await waitFor(() => expect(badge().hidden).toBe(false));
    badge().click();
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(el.hasAttribute('opened')).toBe(false);
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...CollapsesWhatDoesNotFit,
  play: async ({
    canvasElement
  }) => {
    const {
      $,
      badge
    } = pillOf(canvasElement);
    const popover = () => $('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
    await waitFor(() => expect(badge().hidden).toBe(false));
    expect(badge().tabIndex).toBe(0);
    badge().focus();
    await waitFor(() => expect(badge().matches(':focus')).toBe(true));
    await waitFor(() => expect($('[role="tooltip"]').matches(':popover-open')).toBe(true));
    expect($('[role="tooltip"]').textContent).toContain('Label number 8');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(popover().matches(':popover-open')).toBe(true));
  }
}`,...m.parameters?.docs?.source}}};const E=["CollapsesWhatDoesNotFit","CollapsesWhatDoesNotFitFits","CollapsesWhatDoesNotFitKeepsValueWhileSearching","CollapsesWhatDoesNotFitDisabled","CollapsesWhatDoesNotFitKeyboardOverflow"];export{p as CollapsesWhatDoesNotFit,u as CollapsesWhatDoesNotFitDisabled,i as CollapsesWhatDoesNotFitFits,d as CollapsesWhatDoesNotFitKeepsValueWhileSearching,m as CollapsesWhatDoesNotFitKeyboardOverflow,E as __namedExportsOrder,z as default};
