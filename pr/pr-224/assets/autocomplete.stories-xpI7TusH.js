import{b as k}from"./iframe-BAmpi8eB.js";import"./index-BAEqqgcT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzBPqUxa.js";const{expect:n,fn:s,userEvent:c,waitFor:r}=__STORYBOOK_MODULE_TEST__,q=({source:e,value:a,limit:t,textProperty:l="text",onChange:i,onText:B,disabled:f,defaultIndex:R,text:b,keepOpened:T,externalSearch:C})=>k`
    <cosmoz-autocomplete
        .source=${e}
        .value=${a}
        .limit=${t}
        .textProperty=${l}
        .onChange=${i}
        .onText=${B}
        .defaultIndex=${R}
        .text=${b}
        ?disabled=${f}
        ?keep-opened=${T}
        ?external-search=${C}
    ></cosmoz-autocomplete>
`,O={title:"Tests/Autocomplete",render:q,tags:["!autodocs"]},o=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],u={args:{source:o,value:[o[0],o[2]]},play:async({canvas:e})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const a=document.querySelector("cosmoz-autocomplete");n(a?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},p={args:{source:o,value:[o[1]],limit:1},play:async({canvas:e})=>{await e.findByShadowText(/Green/u);const a=document.querySelector("cosmoz-autocomplete");n(a?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},d={args:{source:o,value:[]},play:async({canvas:e})=>{const a=await e.findByShadowRole("textbox");await c.click(a);const t=await e.findByShadowRole("option",{name:/Red/u});n(t).toBeTruthy()}},m={args:{source:o,value:[o[0]],onChange:s()},play:async({canvas:e,args:a})=>{await e.findByShadowText(/Red/u);const i=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip")?.shadowRoot?.querySelector(".clear");n(i).toBeTruthy(),await c.click(i),await r(()=>{n(a.onChange).toHaveBeenCalledWith([],n.any(Function))})}},y={args:{source:o,value:[],onChange:s(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const l=await e.findByShadowRole("option",{name:/Red/u});await c.click(l),await r(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},w={args:{source:o,value:[],onText:s()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await c.type(t,"Gre"),await r(()=>{n(a.onText).toHaveBeenCalledWith("Gre")})}},h={args:{source:o,value:[o[0],o[1]],onChange:s()},play:async({canvas:e,args:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await c.click(t),await c.keyboard("{Backspace}"),await r(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},x={args:{source:o,value:[],onChange:s()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await e.findByShadowRole("option",{name:/Red/u}),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await r(()=>{n(a.onChange).toHaveBeenCalled()})}},S={args:{source:o,value:[],defaultIndex:-1},play:async()=>{const e=document.querySelector("cosmoz-autocomplete");n(e?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},g={args:{source:o,value:[o[0]],disabled:!0},play:async({canvas:e})=>{await e.findByShadowText(/Red/u);const a=document.querySelector("cosmoz-autocomplete");n(a?.hasAttribute("disabled")).toBe(!0);const t=a?.shadowRoot?.querySelector("cosmoz-input");n(t?.hasAttribute("disabled")).toBe(!0)}},v={args:{source:o,value:[o[0]],text:"initial"},play:async({canvas:e})=>{await e.findByShadowText(/Red/u);const t=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");n(t).toBeTruthy()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0], colors[2]]
  },
  play: async ({
    canvas
  }) => {
    await canvas.findByShadowText(/Red/u);
    await canvas.findByShadowText(/Blue/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(2);
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[1]],
    limit: 1
  },
  play: async ({
    canvas
  }) => {
    await canvas.findByShadowText(/Green/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(1);
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Listbox should appear after focus - verify by finding an option
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    expect(option).toBeTruthy();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-chip');
    const clearButton = chip?.shadowRoot?.querySelector('.clear');
    expect(clearButton).toBeTruthy();
    await userEvent.click(clearButton!);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onChange: fn(),
    keepOpened: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Wait for listbox to appear and select an item
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onText: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.type(input, 'Gre');
    await waitFor(() => {
      expect(args.onText).toHaveBeenCalledWith('Gre');
    });
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0], colors[1]],
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    await canvas.findByShadowText(/Green/u);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Backspace when input is empty should remove last chip
    await userEvent.keyboard('{Backspace}');
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Wait for listbox by finding an option
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });

    // Navigate down and select with Enter
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    defaultIndex: -1
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length ?? 0).toBe(0);
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.hasAttribute('disabled')).toBe(true);
    const input = autocomplete?.shadowRoot?.querySelector('cosmoz-input');
    expect(input?.hasAttribute('disabled')).toBe(true);
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    text: 'initial'
  },
  play: async ({
    canvas
  }) => {
    // Verify initial state
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete')!;
    const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');

    // The input should show the text property
    expect(input).toBeTruthy();
  }
}`,...v.parameters?.docs?.source}}};const W=["RenderWithValue","RenderLimit1","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","TextValueEffects"];export{h as BackspaceRemovesChip,S as DefaultIndexNegative,m as DeselectChip,g as DisabledState,d as FocusOpensListbox,x as KeyboardSelectItem,y as OnChangeCallback,w as OnTextCallback,p as RenderLimit1,u as RenderWithValue,v as TextValueEffects,W as __namedExportsOrder,O as default};
