import{b as $}from"./iframe-_s_9tAvp.js";import"./index-BLByWh8c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDNf_N6S.js";const{expect:a,fn:p,userEvent:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,V=({source:e,value:t,limit:o,textProperty:c="text",valueProperty:l,onChange:s,onText:u,onSelect:P,disabled:G,defaultIndex:W,text:D,keepOpened:L,externalSearch:I,lazyOpen:N})=>$`
    <cosmoz-autocomplete
        .source=${e}
        .value=${t}
        .limit=${o}
        .textProperty=${c}
        .valueProperty=${l}
        .onChange=${s}
        .onText=${u}
        .onSelect=${P}
        .defaultIndex=${W}
        .text=${D}
        ?lazy-open=${N}
        ?disabled=${G}
        ?keep-opened=${L}
        ?external-search=${I}
    ></cosmoz-autocomplete>
`,Y={title:"Tests/Autocomplete",render:V,tags:["!autodocs"]},n=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],d={args:{source:n,value:[n[0],n[2]]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const o=t.querySelector("cosmoz-autocomplete");a(o?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},m={args:{source:n,value:[n[1]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Green/u);const o=t.querySelector("cosmoz-autocomplete");a(o?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},h={args:{source:n,value:[]},play:async({canvas:e})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const o=await e.findByShadowRole("option",{name:/Red/u});a(o).toBeTruthy()}},y={args:{source:n,value:[n[0]],onChange:p()},play:async({canvas:e,canvasElement:t,args:o})=>{await e.findByShadowText(/Red/u);const s=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip")?.shadowRoot?.querySelector(".clear");a(s).toBeTruthy(),await r.click(s),await i(()=>{a(o.onChange).toHaveBeenCalledWith([],a.any(Function))})}},w={args:{source:n,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o);const c=await e.findByShadowRole("option",{name:/Red/u});await r.click(c),await i(()=>{a(t.onChange).toHaveBeenCalledWith([n[0]],a.any(Function))})}},x={args:{source:n,value:[],onText:p()},play:async({canvas:e,args:t})=>{const o=await e.findByShadowRole("textbox");await r.type(o,"Gre"),await i(()=>{a(t.onText).toHaveBeenCalledWith("Gre")})}},S={args:{source:n,value:[n[0],n[1]],onChange:p()},play:async({canvas:e,args:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const o=await e.findByShadowRole("textbox");await r.click(o),await r.keyboard("{Backspace}"),await i(()=>{a(t.onChange).toHaveBeenCalledWith([n[0]],a.any(Function))})}},v={args:{source:n,value:[],onChange:p()},play:async({canvas:e,args:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o),await e.findByShadowRole("option",{name:/Red/u}),await r.keyboard("{ArrowDown}"),await r.keyboard("{Enter}"),await i(()=>{a(t.onChange).toHaveBeenCalled()})}},B={args:{source:n,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-autocomplete");a(t?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},g={args:{source:n,value:[n[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:t,args:o})=>{await e.findByShadowText(/Red/u);const c=t.querySelector("cosmoz-autocomplete");a(c.hasAttribute("disabled")).toBe(!0);const l=c.shadowRoot?.querySelector("cosmoz-input");a(l?.hasAttribute("disabled")).toBe(!0);const s=c.shadowRoot?.querySelector("cosmoz-dropdown-next");a(s?.hasAttribute("disabled")).toBe(!0),await r.click(l),await new Promise(P=>setTimeout(P,200));const u=c.shadowRoot?.querySelector("cosmoz-listbox");a(u).toBeFalsy(),a(o.onChange).not.toHaveBeenCalled()}},R={args:{source:n,value:[n[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:t,args:o})=>{await e.findByShadowText(/Red/u);const l=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip");a(l).toBeTruthy();const s=l?.shadowRoot?.querySelector(".clear");a(s).toBeFalsy(),a(o.onChange).not.toHaveBeenCalled()}},b={args:{source:n,value:[n[0]],text:"initial"},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const c=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");a(c).toBeTruthy()}},f={args:{source:n,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o),await r.type(o,"Red"),await i(()=>{const s=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(s?.length).toBe(4)})}},q={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o),await i(()=>{const s=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(s?.length).toBe(2)})}},E={args:{source:n,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o);const c=await e.findByShadowRole("option",{name:/Red/u});await r.click(c),await i(()=>{a(t.onSelect).toHaveBeenCalledWith(n[0],a.any(Object))})}},T={args:{source:n,value:[]},play:async({canvas:e,canvasElement:t})=>{const o=t.querySelector("cosmoz-autocomplete");a(o.opened).toBeFalsy(),a(o.hasAttribute("opened")).toBe(!1),o.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),a(o.hasAttribute("opened")).toBe(!0)}},k={args:{source:n,value:[]},play:async({canvas:e,canvasElement:t})=>{const o=t.querySelector("cosmoz-autocomplete"),c=await e.findByShadowRole("textbox");await r.click(c),await e.findByShadowRole("option",{name:/Red/u}),o.opened=!1,await i(()=>{a(o.hasAttribute("opened")).toBe(!1),a(o.opened).toBe(!1)})}},C={args:{source:n,value:[]},play:async({canvas:e,canvasElement:t})=>{const o=t.querySelector("cosmoz-autocomplete"),c=[];o.addEventListener("opened-changed",(s=>{c.push(s.detail.value)}));const l=await e.findByShadowRole("textbox");await r.click(l),await i(()=>{a(c).toContain(!0)})}},z={args:{source:n,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{const o=await e.findByShadowRole("textbox");await r.click(o),await new Promise(u=>setTimeout(u,200));const c=t.querySelector("cosmoz-autocomplete");let l=c.shadowRoot?.querySelector("cosmoz-listbox"),s=l?.shadowRoot?.querySelectorAll('.item[role="option"]');a(s?.length??0).toBe(0),await r.type(o,"R"),await i(()=>{l=c.shadowRoot?.querySelector("cosmoz-listbox"),s=l?.shadowRoot?.querySelectorAll('.item[role="option"]'),a(s?.length).toBeGreaterThan(0)})}},A={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{const o=[],c=t.querySelector("cosmoz-autocomplete");c.source=s=>(o.push(s),Promise.resolve(n));const l=await e.findByShadowRole("textbox");await r.click(l),await new Promise(s=>setTimeout(s,200)),a(o.length).toBe(0),await r.type(l,"R"),await i(()=>{a(o.length).toBeGreaterThan(0)}),await i(()=>{const u=c.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(u?.length).toBeGreaterThan(0)})}},O={args:{source:n,value:[n[0]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const o=t.querySelector("cosmoz-autocomplete"),c=o.shadowRoot?.querySelectorAll(".chip");a(c?.length).toBe(1);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("G"),await i(()=>{const s=o.shadowRoot?.querySelectorAll(".chip");a(s?.length).toBe(0)})}},F={args:{source:n,value:[n[0],n[1]]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const o=t.querySelector("cosmoz-autocomplete"),c=o.shadowRoot?.querySelectorAll(".chip");a(c?.length).toBe(2);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("B"),await new Promise(u=>setTimeout(u,100));const s=o.shadowRoot?.querySelectorAll(".chip");a(s?.length).toBe(2)}},H={args:{source:n,value:[n[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const o=t.querySelector("cosmoz-autocomplete"),c=o.shadowRoot?.querySelectorAll(".chip");a(c?.length).toBe(1);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("G"),await new Promise(u=>setTimeout(u,100));const s=o.shadowRoot?.querySelectorAll(".chip");a(s?.length).toBe(1)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-chip');
    const clearButton = chip?.shadowRoot?.querySelector('.clear');
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-chip');
    expect(chip).toBeTruthy();

    // Clear button should NOT be present when disabled
    const clearButton = chip?.shadowRoot?.querySelector('.clear');
    expect(clearButton).toBeFalsy();

    // onChange should NOT have been called
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    expect(autocomplete.opened).toBeFalsy();
    expect(autocomplete.hasAttribute('opened')).toBe(false);
    autocomplete.opened = true;
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    expect(autocomplete.hasAttribute('opened')).toBe(true);
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};const U=["RenderWithValue","RenderLimit1","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled"];export{S as BackspaceRemovesChip,B as DefaultIndexNegative,y as DeselectChip,R as DisabledNoChipClear,g as DisabledState,f as ExternalSearchMode,h as FocusOpensListbox,v as KeyboardSelectItem,z as LazyOpenHidesItems,A as LazyOpenSuppressesSource,w as OnChangeCallback,E as OnSelectCallback,x as OnTextCallback,C as OpenedChangedEvent,k as ProgrammaticClose,T as ProgrammaticOpen,m as RenderLimit1,d as RenderWithValue,b as TextValueEffects,O as TypingClearsValueWhenSelected,F as TypingDoesNotClearValueWhenMultiSelect,H as TypingDoesNotClearWhenDisabled,q as ValueProperty,U as __namedExportsOrder,Y as default};
