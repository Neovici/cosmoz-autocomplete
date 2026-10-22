import{b as l}from"./iframe-8C6NrPUp.js";import"./index-Cwr5T8O0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuPLkxC8.js";import"./index-CIQkNQ9j.js";const{expect:o,userEvent:m,waitFor:d}=__STORYBOOK_MODULE_TEST__,c=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],i=({source:t,textProperty:e="text",value:s=[],compact:u,keepOpened:p})=>l`
    <cosmoz-autocomplete-excluding
        .source=${t}
        .textProperty=${e}
        .value=${s}
        ?compact=${u}
        ?keep-opened=${p}
    ></cosmoz-autocomplete-excluding>
`,h={title:"Tests/Autocomplete Excluding",render:i,tags:["!autodocs"],parameters:{layout:"fullscreen"}},n={args:{source:c,textProperty:"text",value:[{item:c[0],excluded:!0}]},play:async({canvas:t})=>{const e=document.querySelector("cosmoz-autocomplete-excluding");await t.findByShadowText(/Red/u),o(e.opened).toBeFalsy(),o(e.hasAttribute("opened")).toBe(!1),e.opened=!0,await t.findByShadowRole("option",{name:/Green/u}),o(e.hasAttribute("opened")).toBe(!0)}},a={args:{source:c,textProperty:"text",value:[]},play:async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding"),e=[];t.addEventListener("opened-changed",(u=>{e.push(u.detail.value)}));const s=t.shadowRoot.querySelector("cosmoz-autocomplete-trigger");await m.click(s),await d(()=>{o(e).toContain(!0)})}},r={args:{source:c,textProperty:"text",compact:!0},play:async()=>{const e=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot?.querySelector("cosmoz-autocomplete-trigger");o(e?.hasAttribute("compact")).toBe(!0)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    textProperty: 'text',
    value: [{
      item: colors[0],
      excluded: true
    }]
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete-excluding')!;
    await canvas.findByShadowText(/Red/u);
    expect(autocomplete.opened).toBeFalsy();
    expect(autocomplete.hasAttribute('opened')).toBe(false);
    autocomplete.opened = true;
    await canvas.findByShadowRole('option', {
      name: /Green/u
    });
    expect(autocomplete.hasAttribute('opened')).toBe(true);
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    textProperty: 'text',
    value: []
  },
  play: async () => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete-excluding')!;
    const events: boolean[] = [];
    autocomplete.addEventListener('opened-changed', ((e: CustomEvent) => {
      events.push(e.detail.value);
    }) as EventListener);
    const trigger = autocomplete.shadowRoot!.querySelector('cosmoz-autocomplete-trigger')!;
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(events).toContain(true);
    });
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    textProperty: 'text',
    compact: true
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete-excluding')!;
    const trigger = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-trigger');
    expect(trigger?.hasAttribute('compact')).toBe(true);
  }
}`,...r.parameters?.docs?.source}}};const w=["ProgrammaticOpen","OpenedChangedEvent","CompactState"];export{r as CompactState,a as OpenedChangedEvent,n as ProgrammaticOpen,w as __namedExportsOrder,h as default};
