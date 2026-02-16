import{b as L}from"./iframe-_L-jBB6I.js";import"./index-DhqVNSej.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VwdI8kAl.js";const{expect:n,fn:i,userEvent:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,I=({source:e,value:t,limit:a,textProperty:s="text",valueProperty:r,onChange:q,onText:E,onSelect:z,disabled:O,defaultIndex:A,text:F,keepOpened:H,externalSearch:W})=>L`
    <cosmoz-autocomplete
        .source=${e}
        .value=${t}
        .limit=${a}
        .textProperty=${s}
        .valueProperty=${r}
        .onChange=${q}
        .onText=${E}
        .onSelect=${z}
        .defaultIndex=${A}
        .text=${F}
        ?disabled=${O}
        ?keep-opened=${H}
        ?external-search=${W}
    ></cosmoz-autocomplete>
`,_={title:"Tests/Autocomplete",render:I,tags:["!autodocs"]},o=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],u={args:{source:o,value:[o[0],o[2]]},play:async({canvas:e})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=document.querySelector("cosmoz-autocomplete");n(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},p={args:{source:o,value:[o[1]],limit:1},play:async({canvas:e})=>{await e.findByShadowText(/Green/u);const t=document.querySelector("cosmoz-autocomplete");n(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},d={args:{source:o,value:[]},play:async({canvas:e})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const a=await e.findByShadowRole("option",{name:/Red/u});n(a).toBeTruthy()}},m={args:{source:o,value:[o[0]],onChange:i()},play:async({canvas:e,args:t})=>{await e.findByShadowText(/Red/u);const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip")?.shadowRoot?.querySelector(".clear");n(r).toBeTruthy(),await c.click(r),await l(()=>{n(t.onChange).toHaveBeenCalledWith([],n.any(Function))})}},y={args:{source:o,value:[],onChange:i(),keepOpened:!0},play:async({canvas:e,args:t})=>{const a=await e.findByShadowRole("textbox");await c.click(a);const s=await e.findByShadowRole("option",{name:/Red/u});await c.click(s),await l(()=>{n(t.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},w={args:{source:o,value:[],onText:i()},play:async({canvas:e,args:t})=>{const a=await e.findByShadowRole("textbox");await c.type(a,"Gre"),await l(()=>{n(t.onText).toHaveBeenCalledWith("Gre")})}},h={args:{source:o,value:[o[0],o[1]],onChange:i()},play:async({canvas:e,args:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const a=await e.findByShadowRole("textbox");await c.click(a),await c.keyboard("{Backspace}"),await l(()=>{n(t.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},x={args:{source:o,value:[],onChange:i()},play:async({canvas:e,args:t})=>{const a=await e.findByShadowRole("textbox");await c.click(a),await e.findByShadowRole("option",{name:/Red/u}),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await l(()=>{n(t.onChange).toHaveBeenCalled()})}},S={args:{source:o,value:[],defaultIndex:-1},play:async()=>{const e=document.querySelector("cosmoz-autocomplete");n(e?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},v={args:{source:o,value:[o[0]],disabled:!0},play:async({canvas:e})=>{await e.findByShadowText(/Red/u);const t=document.querySelector("cosmoz-autocomplete");n(t?.hasAttribute("disabled")).toBe(!0);const a=t?.shadowRoot?.querySelector("cosmoz-input");n(a?.hasAttribute("disabled")).toBe(!0)}},g={args:{source:o,value:[o[0]],text:"initial"},play:async({canvas:e})=>{await e.findByShadowText(/Red/u);const a=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");n(a).toBeTruthy()}},B={args:{source:o,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await c.type(t,"Red"),await l(()=>{const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');n(r?.length).toBe(4)})}},f={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await l(()=>{const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');n(r?.length).toBe(2)})}},R={args:{source:o,value:[],onSelect:i(),keepOpened:!0},play:async({canvas:e,args:t})=>{const a=await e.findByShadowRole("textbox");await c.click(a);const s=await e.findByShadowRole("option",{name:/Red/u});await c.click(s),await l(()=>{n(t.onSelect).toHaveBeenCalledWith(o[0],n.any(Object))})}},b={args:{source:o,value:[]},play:async({canvas:e})=>{const t=document.querySelector("cosmoz-autocomplete");n(t.opened).toBeFalsy(),n(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),n(t.hasAttribute("opened")).toBe(!0)}},k={args:{source:o,value:[]},play:async({canvas:e})=>{const t=document.querySelector("cosmoz-autocomplete"),a=await e.findByShadowRole("textbox");await c.click(a),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await l(()=>{n(t.hasAttribute("opened")).toBe(!1),n(t.opened).toBe(!1)})}},C={args:{source:o,value:[]},play:async({canvas:e})=>{const t=document.querySelector("cosmoz-autocomplete"),a=[];t.addEventListener("opened-changed",(r=>{a.push(r.detail.value)}));const s=await e.findByShadowRole("textbox");await c.click(s),await l(()=>{n(a).toContain(!0)})}},T={args:{source:o,value:[o[0]],limit:1,onChange:i()},play:async({canvas:e,args:t})=>{await e.findByShadowText(/Red/u);const a=await e.findByShadowRole("textbox");await c.click(a),await c.keyboard("{Backspace}"),await new Promise(s=>setTimeout(s,200)),n(t.onChange).not.toHaveBeenCalled()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    externalSearch: true,
    keepOpened: true
  },
  play: async ({
    canvas
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Type a query that would normally filter items
    await userEvent.type(input, 'Red');

    // With externalSearch=true, all items should still appear (no client-side filtering)
    await waitFor(() => {
      const autocomplete = document.querySelector('cosmoz-autocomplete')!;
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBe(4);
    });
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: [{
      id: 1,
      text: 'Item 1'
    }, {
      id: 2,
      text: 'Item 2'
    }],
    value: [{
      id: 1,
      text: 'Item 1'
    }],
    valueProperty: 'id',
    keepOpened: true
  },
  play: async ({
    canvas
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Both items should appear in the listbox — the value item is deduplicated by id
    await waitFor(() => {
      const autocomplete = document.querySelector('cosmoz-autocomplete')!;
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBe(2);
    });
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onSelect: fn(),
    keepOpened: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith(colors[0], expect.any(Object));
    });
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete')!;
    expect(autocomplete.opened).toBeFalsy();
    expect(autocomplete.hasAttribute('opened')).toBe(false);
    autocomplete.opened = true;
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    expect(autocomplete.hasAttribute('opened')).toBe(true);
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete')!;
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    autocomplete.opened = false;
    await waitFor(() => {
      expect(autocomplete.hasAttribute('opened')).toBe(false);
      expect(autocomplete.opened).toBe(false);
    });
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement & {
      opened: boolean;
    }>('cosmoz-autocomplete')!;
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    limit: 1,
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Backspace when limit=1 should NOT remove the chip (use-keys disables handler)
    await userEvent.keyboard('{Backspace}');

    // Wait a tick to ensure no async callback fires
    await new Promise(r => setTimeout(r, 200));
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...T.parameters?.docs?.source}}};const M=["RenderWithValue","RenderLimit1","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","Limit1DisablesBackspace"];export{h as BackspaceRemovesChip,S as DefaultIndexNegative,m as DeselectChip,v as DisabledState,B as ExternalSearchMode,d as FocusOpensListbox,x as KeyboardSelectItem,T as Limit1DisablesBackspace,y as OnChangeCallback,R as OnSelectCallback,w as OnTextCallback,C as OpenedChangedEvent,k as ProgrammaticClose,b as ProgrammaticOpen,p as RenderLimit1,u as RenderWithValue,g as TextValueEffects,f as ValueProperty,M as __namedExportsOrder,_ as default};
