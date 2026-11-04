import{b as re}from"./iframe-CPUCebDS.js";import"./index-R1ORb0d2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGkXWidW.js";const{expect:o,fn:p,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,le=({source:e,value:a,limit:t,textProperty:c="text",valueProperty:l,onChange:r,onText:u,onSelect:_,disabled:U,compact:J,defaultIndex:Q,text:X,keepOpened:ee,externalSearch:te,lazyOpen:oe,preserveOrder:ae,required:ne,mode:ce,min:se})=>re`
    <cosmoz-autocomplete
        .source=${e}
        .value=${a}
        .limit=${t}
        .textProperty=${c}
        .valueProperty=${l}
        .onChange=${r}
        .onText=${u}
        .onSelect=${_}
        .defaultIndex=${Q}
        .text=${X}
        ?lazy-open=${oe}
        ?disabled=${U}
        ?compact=${J}
        ?required=${ne}
        ?keep-opened=${ee}
        ?external-search=${te}
        ?preserve-order=${ae}
        .mode=${ce}
        .min=${se}
    ></cosmoz-autocomplete>
`,ye={title:"Tests/Autocomplete",render:le,tags:["!autodocs"],parameters:{layout:"fullscreen"}},n=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],d={args:{source:n,value:[n[0],n[2]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},m={args:{source:n,value:[n[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},y={args:{source:n,value:[n[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("readonly")).toBe(!1),o(t?.shadowRoot?.querySelector("input")?.readOnly).toBe(!1)}},w={args:{source:n,value:[]},play:async({canvas:e})=>{const a=await e.findByShadowRole("textbox");await s.click(a);const t=await e.findByShadowRole("option",{name:/Red/u});o(t).toBeTruthy()}},h={args:{source:n,value:[n[0]],onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const r=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag")?.shadowRoot?.querySelector("button.close");o(r).toBeTruthy(),await s.click(r),await i(()=>{o(t.onChange).toHaveBeenCalledWith([],o.any(Function))})}},j=e=>e.querySelector("cosmoz-autocomplete")?.shadowRoot,Y=e=>j(e)?.querySelector("button.clear"),ie=e=>!!j(e)?.querySelector("cosmoz-tag.chip[removable]"),v={args:{mode:"select",source:n,value:n[0]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),o(Y(a)).toBeFalsy()}},S={args:{mode:"select",min:0,source:n,value:n[0],onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const c=Y(a);o(c).toBeTruthy(),o(ie(a)).toBe(!1),await s.click(c),await i(()=>{o(t.onChange).toHaveBeenCalledWith([],o.any(Function))})}},x={args:{source:n,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const c=await e.findByShadowRole("option",{name:/Red/u});await s.click(c),await i(()=>{o(a.onChange).toHaveBeenCalledWith([n[0]],o.any(Function))})}},B={args:{source:n,value:[],onText:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.type(t,"Gre"),await i(()=>{o(a.onText).toHaveBeenCalledWith("Gre")})}},g={args:{source:n,value:[n[0],n[1]],onChange:p()},play:async({canvas:e,args:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await s.click(t),await s.keyboard("{Backspace}"),await i(()=>{o(a.onChange).toHaveBeenCalledWith([n[0]],o.any(Function))})}},b={args:{source:n,value:[],onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await e.findByShadowRole("option",{name:/Red/u}),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await i(()=>{o(a.onChange).toHaveBeenCalled()})}},R={args:{source:n,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const a=e.querySelector("cosmoz-autocomplete");o(a?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},f={args:{source:n,value:[n[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const c=a.querySelector("cosmoz-autocomplete");o(c.hasAttribute("disabled")).toBe(!0);const l=c.shadowRoot?.querySelector("cosmoz-input");o(l?.hasAttribute("disabled")).toBe(!0);const r=c.shadowRoot?.querySelector("cosmoz-dropdown-next");o(r?.hasAttribute("disabled")).toBe(!0),await s.click(l),await new Promise(_=>setTimeout(_,200));const u=c.shadowRoot?.querySelector("cosmoz-listbox");o(u).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},q={args:{source:n,compact:!0},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("compact")).toBe(!0)}},E={args:{source:n,value:[n[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const l=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag");o(l).toBeTruthy();const r=l?.shadowRoot?.querySelector("button.close");o(r).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},C={args:{source:n,value:[n[0]],text:"initial"},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const c=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(c).toBeTruthy()}},k={args:{source:n,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await s.type(t,"Red"),await i(()=>{const r=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(r?.length).toBe(4)})}},T={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await i(()=>{const r=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(r?.length).toBe(2)})}},z={args:{source:n,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const c=await e.findByShadowRole("option",{name:/Red/u});await s.click(c),await i(()=>{o(a.onSelect).toHaveBeenCalledWith(n[0],o.any(Object))})}},A={args:{source:n,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete");o(t.opened).toBeFalsy(),o(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),o(t.hasAttribute("opened")).toBe(!0)}},O={args:{source:n,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),c=await e.findByShadowRole("textbox");await s.click(c),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await i(()=>{o(t.hasAttribute("opened")).toBe(!1),o(t.opened).toBe(!1)})}},W={args:{source:n,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),c=[];t.addEventListener("opened-changed",(r=>{c.push(r.detail.value)}));const l=await e.findByShadowRole("textbox");await s.click(l),await i(()=>{o(c).toContain(!0)})}},F={args:{source:n,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await new Promise(u=>setTimeout(u,200));const c=a.querySelector("cosmoz-autocomplete");let l=c.shadowRoot?.querySelector("cosmoz-listbox"),r=l?.shadowRoot?.querySelectorAll('.item[role="option"]');o(r?.length??0).toBe(0),await s.type(t,"R"),await i(()=>{l=c.shadowRoot?.querySelector("cosmoz-listbox"),r=l?.shadowRoot?.querySelectorAll('.item[role="option"]'),o(r?.length).toBeGreaterThan(0)})}},I={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=[],c=a.querySelector("cosmoz-autocomplete");c.source=r=>(t.push(r),Promise.resolve(n));const l=await e.findByShadowRole("textbox");await s.click(l),await new Promise(r=>setTimeout(r,200)),o(t.length).toBe(0),await s.type(l,"R"),await i(()=>{o(t.length).toBeGreaterThan(0)}),await i(()=>{const u=c.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(u?.length).toBeGreaterThan(0)})}},H={args:{source:n,value:[n[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),c=t.shadowRoot?.querySelectorAll(".chip");o(c?.length).toBe(1);const l=await e.findByShadowRole("textbox");await s.click(l),await s.keyboard("G"),await i(()=>{const r=t.shadowRoot?.querySelectorAll(".chip");o(r?.length).toBe(0)}),o(l.value).toBe("G")}},P={args:{source:n,value:[n[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),c=await e.findByShadowRole("textbox");await s.click(c),c.dispatchEvent(new KeyboardEvent("keydown",{key:"c",metaKey:!0,bubbles:!0,composed:!0})),await new Promise(l=>setTimeout(l,100)),o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},V={args:{source:n,value:[n[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),c=await e.findByShadowRole("textbox");await s.click(c),c.value="Bl",c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(()=>{o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(0)}),o(c.value).toBe("Bl")}},D={args:{source:n,value:[n[0],n[1]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete"),c=t.shadowRoot?.querySelectorAll(".chip");o(c?.length).toBe(2);const l=await e.findByShadowRole("textbox");await s.click(l),await s.keyboard("B"),await new Promise(u=>setTimeout(u,100));const r=t.shadowRoot?.querySelectorAll(".chip");o(r?.length).toBe(2)}},G={args:{source:n,value:[n[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),c=t.shadowRoot?.querySelectorAll(".chip");o(c?.length).toBe(1);const l=await e.findByShadowRole("textbox");await s.click(l),await s.keyboard("G"),await new Promise(u=>setTimeout(u,100));const r=t.shadowRoot?.querySelectorAll(".chip");o(r?.length).toBe(1)}},Z=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],M={args:{source:Z,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const c=await e.findByShadowRole("option",{name:/Item 1/u});o(c).toBeTruthy(),await s.click(c),await i(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},L={args:{source:Z,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const c=await e.findByShadowRole("option",{name:/Item 1/u});o(c).toBeTruthy(),await s.click(c),await i(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},N={args:{source:n,required:!0},play:async({canvas:e})=>{const a=document.querySelector("cosmoz-autocomplete");o(a?.hasAttribute("required")).toBe(!0);const t=await e.findByShadowRole("textbox");o(t.hasAttribute("required")).toBe(!0)}},$={args:{source:n,mode:"select",onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const c=await e.findByShadowRole("textbox");await s.click(c);const l=await e.findByShadowRole("option",{name:/Red/u});await s.click(l),await i(()=>{o(t.onChange).toHaveBeenCalledWith([n[0]],o.any(Function))});const r=a.querySelector("cosmoz-autocomplete"),{value:u}=r;o(Array.isArray(u)).toBe(!1),o(u).toEqual(n[0])}},K={args:{source:n,limit:1,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const c=await e.findByShadowRole("textbox");await s.click(c);const l=await e.findByShadowRole("option",{name:/Red/u});await s.click(l),await i(()=>{o(t.onChange).toHaveBeenCalledWith([n[0]],o.any(Function))});const r=a.querySelector("cosmoz-autocomplete"),{value:u}=r;o(Array.isArray(u)).toBe(!0),o(u).toEqual([n[0]])}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0], colors[2]]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    await canvas.findByShadowText(/Blue/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(2);
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[1]],
    limit: 1
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Green/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(1);
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[1]],
    limit: 1
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Green/u);
    const input = canvasElement.querySelector('cosmoz-autocomplete')?.shadowRoot?.querySelector('cosmoz-input');
    expect(input?.hasAttribute('readonly')).toBe(false);
    expect(input?.shadowRoot?.querySelector('input')?.readOnly).toBe(false);
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-tag');
    const clearButton = chip?.shadowRoot?.querySelector<HTMLElement>('button.close');
    expect(clearButton).toBeTruthy();
    await userEvent.click(clearButton!);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'select',
    source: colors,
    value: colors[0]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    expect(clearButton(canvasElement)).toBeFalsy();
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'select',
    min: 0,
    source: colors,
    value: colors[0],
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const button = clearButton(canvasElement);
    expect(button).toBeTruthy();
    expect(chipRemovable(canvasElement)).toBe(false);
    await userEvent.click(button!);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    defaultIndex: -1
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length ?? 0).toBe(0);
  }
}`,...R.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    disabled: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    expect(autocomplete.hasAttribute('disabled')).toBe(true);
    const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');
    expect(input?.hasAttribute('disabled')).toBe(true);
    const dropdown = autocomplete.shadowRoot?.querySelector('cosmoz-dropdown-next');
    expect(dropdown?.hasAttribute('disabled')).toBe(true);

    // Clicking should NOT open the listbox
    await userEvent.click(input!);
    await new Promise(r => setTimeout(r, 200));
    const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
    expect(listbox).toBeFalsy();

    // onChange should NOT have been called
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...f.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    compact: true
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');
    expect(input?.hasAttribute('compact')).toBe(true);
  }
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    disabled: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-tag');
    expect(chip).toBeTruthy();

    // Clear button should NOT be present when disabled
    const clearButton = chip?.shadowRoot?.querySelector<HTMLElement>('button.close');
    expect(clearButton).toBeFalsy();

    // onChange should NOT have been called
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    text: 'initial'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Verify initial state
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector<HTMLElement>('cosmoz-autocomplete')!;
    const input = autocomplete.shadowRoot?.querySelector('cosmoz-input');

    // The input should show the text property
    expect(input).toBeTruthy();
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    externalSearch: true,
    keepOpened: true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Type a query that would normally filter items
    await userEvent.type(input, 'Red');

    // With externalSearch=true, all items should still appear (no client-side filtering)
    await waitFor(() => {
      const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBe(4);
    });
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    canvas,
    canvasElement
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Both items should appear in the listbox — the value item is deduplicated by id
    await waitFor(() => {
      const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBe(2);
    });
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const autocomplete = canvasElement.querySelector<HTMLElement & {
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
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const autocomplete = canvasElement.querySelector<HTMLElement & {
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
}`,...O.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const autocomplete = canvasElement.querySelector<HTMLElement & {
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
}`,...W.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    lazyOpen: true,
    keepOpened: true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // No items should be shown initially (empty query)
    await new Promise(r => setTimeout(r, 200));
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    let listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
    let options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
    expect(options?.length ?? 0).toBe(0);

    // Type 1 character — threshold met, items should appear
    await userEvent.type(input, 'R');
    await waitFor(() => {
      listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBeGreaterThan(0);
    });
  }
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    value: [],
    lazyOpen: true,
    keepOpened: true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const calls: unknown[] = [];
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    autocomplete.source = (opts: unknown) => {
      calls.push(opts);
      return Promise.resolve(colors);
    };
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Source function should NOT be called when query is empty
    await new Promise(r => setTimeout(r, 200));
    expect(calls.length).toBe(0);

    // Type 1 character — threshold met, source should be called and items appear
    await userEvent.type(input, 'R');
    await waitFor(() => {
      expect(calls.length).toBeGreaterThan(0);
    });
    await waitFor(() => {
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBeGreaterThan(0);
    });
  }
}`,...I.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    limit: 1
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
    expect(chipsBefore?.length).toBe(1);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    await userEvent.keyboard('G');
    await waitFor(() => {
      const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
      expect(chipsAfter?.length).toBe(0);
    });
    expect((input as HTMLInputElement).value).toBe('G');
  }
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    limit: 1
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    input.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'c',
      metaKey: true,
      bubbles: true,
      composed: true
    }));
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(autocomplete.shadowRoot?.querySelectorAll('.chip').length).toBe(1);
  }
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    limit: 1
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const input = (await canvas.findByShadowRole('textbox')) as HTMLInputElement;
    await userEvent.click(input);
    // paste, IME and Android keyboards change the text without a usable keydown
    input.value = 'Bl';
    input.dispatchEvent(new Event('input', {
      bubbles: true,
      composed: true
    }));
    await waitFor(() => {
      expect(autocomplete.shadowRoot?.querySelectorAll('.chip').length).toBe(0);
    });
    expect(input.value).toBe('Bl');
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0], colors[1]]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    await canvas.findByShadowText(/Green/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
    expect(chipsBefore?.length).toBe(2);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    await userEvent.keyboard('B');
    await new Promise(r => setTimeout(r, 100));
    const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
    expect(chipsAfter?.length).toBe(2);
  }
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0]],
    limit: 1,
    disabled: true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete')!;
    const chipsBefore = autocomplete.shadowRoot?.querySelectorAll('.chip');
    expect(chipsBefore?.length).toBe(1);
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    await userEvent.keyboard('G');
    await new Promise(r => setTimeout(r, 100));
    const chipsAfter = autocomplete.shadowRoot?.querySelectorAll('.chip');
    expect(chipsAfter?.length).toBe(1);
  }
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    source: itemsWithId,
    // Different object reference with same id — simulates value stored from a previous selection
    // while source items come from a fresh API response
    value: [{
      id: 1,
      text: 'Item 1'
    }],
    valueProperty: 'id',
    preserveOrder: true,
    keepOpened: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Item 1 should appear as selected (checked) in the dropdown
    const option = await canvas.findByShadowRole('option', {
      name: /Item 1/u
    });
    expect(option).toBeTruthy();

    // Click the already-selected item to deselect it
    await userEvent.click(option);

    // onChange should be called with an empty array (deselect), not a duplicate
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    source: itemsWithId,
    // Different object reference with same id — same scenario as above
    value: [{
      id: 1,
      text: 'Item 1'
    }],
    valueProperty: 'id',
    preserveOrder: false,
    keepOpened: true,
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Item 1 should appear as selected in the dropdown
    const option = await canvas.findByShadowRole('option', {
      name: /Item 1/u
    });
    expect(option).toBeTruthy();

    // Click the already-selected item to deselect it
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    required: true
  },
  play: async ({
    canvas
  }) => {
    const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete');
    expect(autocomplete?.hasAttribute('required')).toBe(true);
    const input = await canvas.findByShadowRole('textbox');
    expect(input.hasAttribute('required')).toBe(true);
  }
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    mode: 'select',
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
    const autocomplete = canvasElement.querySelector<HTMLElement & {
      value: unknown;
    }>('cosmoz-autocomplete')!;
    const {
      value
    } = autocomplete;
    expect(Array.isArray(value)).toBe(false);
    expect(value).toEqual(colors[0]);
  }
}`,...$.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    limit: 1,
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
    const autocomplete = canvasElement.querySelector<HTMLElement & {
      value: unknown;
    }>('cosmoz-autocomplete')!;
    const {
      value
    } = autocomplete;
    expect(Array.isArray(value)).toBe(true);
    expect(value).toEqual([colors[0]]);
  }
}`,...K.parameters?.docs?.source}}};const we=["RenderWithValue","RenderLimit1","SingleValueIsNotReadonly","FocusOpensListbox","DeselectChip","SelectKeepsItsValue","SelectClearableWithMinZero","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","CompactState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","ShortcutDoesNotClearValueWhenSelected","InputWithoutKeydownClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder","Required","SelectModeValueIsSingleItem","MultiModeValueIsArray"];export{g as BackspaceRemovesChip,q as CompactState,R as DefaultIndexNegative,h as DeselectChip,M as DeselectWithPreserveOrderAndValueProperty,L as DeselectWithValuePropertyWithoutPreserveOrder,E as DisabledNoChipClear,f as DisabledState,k as ExternalSearchMode,w as FocusOpensListbox,V as InputWithoutKeydownClearsValueWhenSelected,b as KeyboardSelectItem,F as LazyOpenHidesItems,I as LazyOpenSuppressesSource,K as MultiModeValueIsArray,x as OnChangeCallback,z as OnSelectCallback,B as OnTextCallback,W as OpenedChangedEvent,O as ProgrammaticClose,A as ProgrammaticOpen,m as RenderLimit1,d as RenderWithValue,N as Required,S as SelectClearableWithMinZero,v as SelectKeepsItsValue,$ as SelectModeValueIsSingleItem,P as ShortcutDoesNotClearValueWhenSelected,y as SingleValueIsNotReadonly,C as TextValueEffects,H as TypingClearsValueWhenSelected,D as TypingDoesNotClearValueWhenMultiSelect,G as TypingDoesNotClearWhenDisabled,T as ValueProperty,we as __namedExportsOrder,ye as default};
