import{b as p}from"./iframe-D6VzjJtU.js";import"./index-C115lkym.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bx3QpKhM.js";import"./index-Cptk4Rjc.js";const{expect:c,userEvent:l,waitFor:d}=__STORYBOOK_MODULE_TEST__,s=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],i=({source:t,textProperty:e="text",value:o=[],keepOpened:r})=>p`
    <cosmoz-autocomplete-excluding
        .source=${t}
        .textProperty=${e}
        .value=${o}
        ?keep-opened=${r}
    ></cosmoz-autocomplete-excluding>
`,w={title:"Tests/Autocomplete Excluding",render:i,tags:["!autodocs"]},n={args:{source:s,textProperty:"text",value:[{item:s[0],excluded:!0}]},play:async({canvas:t})=>{const e=document.querySelector("cosmoz-autocomplete-excluding");await t.findByShadowText(/Red/u),c(e.opened).toBeFalsy(),c(e.hasAttribute("opened")).toBe(!1),e.opened=!0,await t.findByShadowRole("option",{name:/Green/u}),c(e.hasAttribute("opened")).toBe(!0)}},a={args:{source:s,textProperty:"text",value:[]},play:async({canvas:t})=>{const e=document.querySelector("cosmoz-autocomplete-excluding"),o=[];e.addEventListener("opened-changed",(u=>{o.push(u.detail.value)}));const r=await t.findByShadowRole("textbox");await l.click(r),await d(()=>{c(o).toContain(!0)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const h=["ProgrammaticOpen","OpenedChangedEvent"];export{a as OpenedChangedEvent,n as ProgrammaticOpen,h as __namedExportsOrder,w as default};
