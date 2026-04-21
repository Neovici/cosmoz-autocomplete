import{b as j}from"./iframe-DKGNTcQk.js";import"./index-DdCPlEWi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXoDMZX.js";const{expect:a,fn:p,userEvent:c,waitFor:i}=__STORYBOOK_MODULE_TEST__,K=({source:e,value:o,limit:t,textProperty:n="text",valueProperty:l,onChange:r,onText:u,onSelect:H,disabled:G,defaultIndex:L,text:N,keepOpened:V,externalSearch:$,lazyOpen:M,preserveOrder:_})=>j`
    <cosmoz-autocomplete
        .source=${e}
        .value=${o}
        .limit=${t}
        .textProperty=${n}
        .valueProperty=${l}
        .onChange=${r}
        .onText=${u}
        .onSelect=${H}
        .defaultIndex=${L}
        .text=${N}
        ?lazy-open=${M}
        ?disabled=${G}
        ?keep-opened=${V}
        ?external-search=${$}
        ?preserve-order=${_}
    ></cosmoz-autocomplete>
`,X={title:"Tests/Autocomplete",render:K,tags:["!autodocs"],parameters:{layout:"fullscreen"}},s=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],d={args:{source:s,value:[s[0],s[2]]},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=o.querySelector("cosmoz-autocomplete");a(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},m={args:{source:s,value:[s[1]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Green/u);const t=o.querySelector("cosmoz-autocomplete");a(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},h={args:{source:s,value:[]},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await c.click(o);const t=await e.findByShadowRole("option",{name:/Red/u});a(t).toBeTruthy()}},y={args:{source:s,value:[s[0]],onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const r=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag")?.shadowRoot?.querySelector("button.close");a(r).toBeTruthy(),await c.click(r),await i(()=>{a(t.onChange).toHaveBeenCalledWith([],a.any(Function))})}},w={args:{source:s,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await c.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([s[0]],a.any(Function))})}},x={args:{source:s,value:[],onText:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.type(t,"Gre"),await i(()=>{a(o.onText).toHaveBeenCalledWith("Gre")})}},v={args:{source:s,value:[s[0],s[1]],onChange:p()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await c.click(t),await c.keyboard("{Backspace}"),await i(()=>{a(o.onChange).toHaveBeenCalledWith([s[0]],a.any(Function))})}},S={args:{source:s,value:[],onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await e.findByShadowRole("option",{name:/Red/u}),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await i(()=>{a(o.onChange).toHaveBeenCalled()})}},g={args:{source:s,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const o=e.querySelector("cosmoz-autocomplete");a(o?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},B={args:{source:s,value:[s[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const n=o.querySelector("cosmoz-autocomplete");a(n.hasAttribute("disabled")).toBe(!0);const l=n.shadowRoot?.querySelector("cosmoz-input");a(l?.hasAttribute("disabled")).toBe(!0);const r=n.shadowRoot?.querySelector("cosmoz-dropdown-next");a(r?.hasAttribute("disabled")).toBe(!0),await c.click(l),await new Promise(H=>setTimeout(H,200));const u=n.shadowRoot?.querySelector("cosmoz-listbox");a(u).toBeFalsy(),a(t.onChange).not.toHaveBeenCalled()}},b={args:{source:s,value:[s[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const l=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag");a(l).toBeTruthy();const r=l?.shadowRoot?.querySelector("button.close");a(r).toBeFalsy(),a(t.onChange).not.toHaveBeenCalled()}},R={args:{source:s,value:[s[0]],text:"initial"},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const n=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");a(n).toBeTruthy()}},f={args:{source:s,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await c.type(t,"Red"),await i(()=>{const r=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(r?.length).toBe(4)})}},q={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await i(()=>{const r=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(r?.length).toBe(2)})}},k={args:{source:s,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await c.click(n),await i(()=>{a(o.onSelect).toHaveBeenCalledWith(s[0],a.any(Object))})}},C={args:{source:s,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete");a(t.opened).toBeFalsy(),a(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),a(t.hasAttribute("opened")).toBe(!0)}},E={args:{source:s,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await c.click(n),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await i(()=>{a(t.hasAttribute("opened")).toBe(!1),a(t.opened).toBe(!1)})}},T={args:{source:s,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete"),n=[];t.addEventListener("opened-changed",(r=>{n.push(r.detail.value)}));const l=await e.findByShadowRole("textbox");await c.click(l),await i(()=>{a(n).toContain(!0)})}},z={args:{source:s,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t),await new Promise(u=>setTimeout(u,200));const n=o.querySelector("cosmoz-autocomplete");let l=n.shadowRoot?.querySelector("cosmoz-listbox"),r=l?.shadowRoot?.querySelectorAll('.item[role="option"]');a(r?.length??0).toBe(0),await c.type(t,"R"),await i(()=>{l=n.shadowRoot?.querySelector("cosmoz-listbox"),r=l?.shadowRoot?.querySelectorAll('.item[role="option"]'),a(r?.length).toBeGreaterThan(0)})}},A={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=[],n=o.querySelector("cosmoz-autocomplete");n.source=r=>(t.push(r),Promise.resolve(s));const l=await e.findByShadowRole("textbox");await c.click(l),await new Promise(r=>setTimeout(r,200)),a(t.length).toBe(0),await c.type(l,"R"),await i(()=>{a(t.length).toBeGreaterThan(0)}),await i(()=>{const u=n.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(u?.length).toBeGreaterThan(0)})}},O={args:{source:s,value:[s[0]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(1);const l=await e.findByShadowRole("textbox");await c.click(l),await c.keyboard("G"),await i(()=>{const r=t.shadowRoot?.querySelectorAll(".chip");a(r?.length).toBe(0)})}},F={args:{source:s,value:[s[0],s[1]]},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(2);const l=await e.findByShadowRole("textbox");await c.click(l),await c.keyboard("B"),await new Promise(u=>setTimeout(u,100));const r=t.shadowRoot?.querySelectorAll(".chip");a(r?.length).toBe(2)}},P={args:{source:s,value:[s[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(1);const l=await e.findByShadowRole("textbox");await c.click(l),await c.keyboard("G"),await new Promise(u=>setTimeout(u,100));const r=t.shadowRoot?.querySelectorAll(".chip");a(r?.length).toBe(1)}},D=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],W={args:{source:D,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});a(n).toBeTruthy(),await c.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([],a.any(Function))})}},I={args:{source:D,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await c.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});a(n).toBeTruthy(),await c.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([],a.any(Function))})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  }
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const Z=["RenderWithValue","RenderLimit1","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder"];export{v as BackspaceRemovesChip,g as DefaultIndexNegative,y as DeselectChip,W as DeselectWithPreserveOrderAndValueProperty,I as DeselectWithValuePropertyWithoutPreserveOrder,b as DisabledNoChipClear,B as DisabledState,f as ExternalSearchMode,h as FocusOpensListbox,S as KeyboardSelectItem,z as LazyOpenHidesItems,A as LazyOpenSuppressesSource,w as OnChangeCallback,k as OnSelectCallback,x as OnTextCallback,T as OpenedChangedEvent,E as ProgrammaticClose,C as ProgrammaticOpen,m as RenderLimit1,d as RenderWithValue,R as TextValueEffects,O as TypingClearsValueWhenSelected,F as TypingDoesNotClearValueWhenMultiSelect,P as TypingDoesNotClearWhenDisabled,q as ValueProperty,Z as __namedExportsOrder,X as default};
