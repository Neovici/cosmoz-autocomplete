import{b as l}from"./iframe-B-tVFIEf.js";import"./index-CfL6W3Ba.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDUiqs_B.js";import"./index-DzjbnIYk.js";const{expect:o,userEvent:m,waitFor:d}=__STORYBOOK_MODULE_TEST__,s=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],i=({source:t,textProperty:e="text",value:n=[],compact:u,keepOpened:p})=>l`
    <cosmoz-autocomplete-excluding
        .source=${t}
        .textProperty=${e}
        .value=${n}
        ?compact=${u}
        ?keep-opened=${p}
    ></cosmoz-autocomplete-excluding>
`,S={title:"Tests/Autocomplete Excluding",render:i,tags:["!autodocs"],parameters:{layout:"fullscreen"}},a={args:{source:s,textProperty:"text",value:[{item:s[0],excluded:!0}]},play:async({canvas:t})=>{const e=document.querySelector("cosmoz-autocomplete-excluding");await t.findByShadowText(/Red/u),o(e.opened).toBeFalsy(),o(e.hasAttribute("opened")).toBe(!1),e.opened=!0,await t.findByShadowRole("option",{name:/Green/u}),o(e.hasAttribute("opened")).toBe(!0)}},c={args:{source:s,textProperty:"text",value:[]},play:async({canvas:t})=>{const e=document.querySelector("cosmoz-autocomplete-excluding"),n=[];e.addEventListener("opened-changed",(p=>{n.push(p.detail.value)}));const u=await t.findByShadowRole("textbox");await m.click(u),await d(()=>{o(n).toContain(!0)})}},r={args:{source:s,textProperty:"text",compact:!0},play:async()=>{const e=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot?.querySelector("cosmoz-input");o(e?.hasAttribute("compact")).toBe(!0)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    textProperty: 'text',
    value: []
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete-excluding')!;
    const events: boolean[] = [];
    autocomplete.addEventListener('opened-changed', ((e: CustomEvent) => {
      events.push(e.detail.value);
    }) as EventListener);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    await waitFor(() => {
      expect(events).toContain(true);
    });
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    textProperty: 'text',
    compact: true
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete-excluding')!;
    const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');
    expect(input?.hasAttribute('compact')).toBe(true);
  }
}`,...r.parameters?.docs?.source}}};const h=["ProgrammaticOpen","OpenedChangedEvent","CompactState"];export{r as CompactState,c as OpenedChangedEvent,a as ProgrammaticOpen,h as __namedExportsOrder,S as default};
