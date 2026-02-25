import{b as D}from"./iframe-Dvy9H9fy.js";import"./index-CfSTwKll.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5S65ScSR.js";const{expect:t,fn:i,userEvent:s,waitFor:l}=__STORYBOOK_MODULE_TEST__,G=({source:e,value:o,limit:a,textProperty:c="text",valueProperty:r,onChange:u,onText:p,onSelect:F,disabled:H,defaultIndex:P,text:L,keepOpened:I,externalSearch:W,lazyOpen:$})=>D`
    <cosmoz-autocomplete
        .source=${e}
        .value=${o}
        .limit=${a}
        .textProperty=${c}
        .valueProperty=${r}
        .onChange=${u}
        .onText=${p}
        .onSelect=${F}
        .defaultIndex=${P}
        .text=${L}
        ?lazy-open=${$}
        ?disabled=${H}
        ?keep-opened=${I}
        ?external-search=${W}
    ></cosmoz-autocomplete>
`,K={title:"Tests/Autocomplete",render:G,tags:["!autodocs"]},n=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],d={args:{source:n,value:[n[0],n[2]]},play:async({canvas:e})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const o=document.querySelector("cosmoz-autocomplete");t(o?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},m={args:{source:n,value:[n[1]],limit:1},play:async({canvas:e})=>{await e.findByShadowText(/Green/u);const o=document.querySelector("cosmoz-autocomplete");t(o?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},y={args:{source:n,value:[]},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await s.click(o);const a=await e.findByShadowRole("option",{name:/Red/u});t(a).toBeTruthy()}},w={args:{source:n,value:[n[0]],onChange:i()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u);const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip")?.shadowRoot?.querySelector(".clear");t(r).toBeTruthy(),await s.click(r),await l(()=>{t(o.onChange).toHaveBeenCalledWith([],t.any(Function))})}},h={args:{source:n,value:[],onChange:i(),keepOpened:!0},play:async({canvas:e,args:o})=>{const a=await e.findByShadowRole("textbox");await s.click(a);const c=await e.findByShadowRole("option",{name:/Red/u});await s.click(c),await l(()=>{t(o.onChange).toHaveBeenCalledWith([n[0]],t.any(Function))})}},x={args:{source:n,value:[],onText:i()},play:async({canvas:e,args:o})=>{const a=await e.findByShadowRole("textbox");await s.type(a,"Gre"),await l(()=>{t(o.onText).toHaveBeenCalledWith("Gre")})}},S={args:{source:n,value:[n[0],n[1]],onChange:i()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const a=await e.findByShadowRole("textbox");await s.click(a),await s.keyboard("{Backspace}"),await l(()=>{t(o.onChange).toHaveBeenCalledWith([n[0]],t.any(Function))})}},v={args:{source:n,value:[],onChange:i()},play:async({canvas:e,args:o})=>{const a=await e.findByShadowRole("textbox");await s.click(a),await e.findByShadowRole("option",{name:/Red/u}),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await l(()=>{t(o.onChange).toHaveBeenCalled()})}},g={args:{source:n,value:[],defaultIndex:-1},play:async()=>{const e=document.querySelector("cosmoz-autocomplete");t(e?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},B={args:{source:n,value:[n[0]],disabled:!0,onChange:i()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u);const a=document.querySelector("cosmoz-autocomplete");t(a.hasAttribute("disabled")).toBe(!0);const c=a.shadowRoot?.querySelector("cosmoz-input");t(c?.hasAttribute("disabled")).toBe(!0);const r=a.shadowRoot?.querySelector("cosmoz-dropdown-next");t(r?.hasAttribute("disabled")).toBe(!0),await s.click(c),await new Promise(p=>setTimeout(p,200));const u=a.shadowRoot?.querySelector("cosmoz-listbox");t(u).toBeFalsy(),t(o.onChange).not.toHaveBeenCalled()}},b={args:{source:n,value:[n[0]],disabled:!0,onChange:i()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u);const c=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-autocomplete-chip");t(c).toBeTruthy();const r=c?.shadowRoot?.querySelector(".clear");t(r).toBeFalsy(),t(o.onChange).not.toHaveBeenCalled()}},R={args:{source:n,value:[n[0]],text:"initial"},play:async({canvas:e})=>{await e.findByShadowText(/Red/u);const a=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");t(a).toBeTruthy()}},f={args:{source:n,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await s.click(o),await s.type(o,"Red"),await l(()=>{const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');t(r?.length).toBe(4)})}},C={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await s.click(o),await l(()=>{const r=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');t(r?.length).toBe(2)})}},k={args:{source:n,value:[],onSelect:i(),keepOpened:!0},play:async({canvas:e,args:o})=>{const a=await e.findByShadowRole("textbox");await s.click(a);const c=await e.findByShadowRole("option",{name:/Red/u});await s.click(c),await l(()=>{t(o.onSelect).toHaveBeenCalledWith(n[0],t.any(Object))})}},q={args:{source:n,value:[]},play:async({canvas:e})=>{const o=document.querySelector("cosmoz-autocomplete");t(o.opened).toBeFalsy(),t(o.hasAttribute("opened")).toBe(!1),o.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),t(o.hasAttribute("opened")).toBe(!0)}},T={args:{source:n,value:[]},play:async({canvas:e})=>{const o=document.querySelector("cosmoz-autocomplete"),a=await e.findByShadowRole("textbox");await s.click(a),await e.findByShadowRole("option",{name:/Red/u}),o.opened=!1,await l(()=>{t(o.hasAttribute("opened")).toBe(!1),t(o.opened).toBe(!1)})}},z={args:{source:n,value:[]},play:async({canvas:e})=>{const o=document.querySelector("cosmoz-autocomplete"),a=[];o.addEventListener("opened-changed",(r=>{a.push(r.detail.value)}));const c=await e.findByShadowRole("textbox");await s.click(c),await l(()=>{t(a).toContain(!0)})}},E={args:{source:n,value:[n[0]],limit:1,onChange:i()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u);const a=await e.findByShadowRole("textbox");await s.click(a),await s.keyboard("{Backspace}"),await new Promise(c=>setTimeout(c,200)),t(o.onChange).not.toHaveBeenCalled()}},O={args:{source:n,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await s.click(o),await new Promise(u=>setTimeout(u,200));const a=document.querySelector("cosmoz-autocomplete");let c=a.shadowRoot?.querySelector("cosmoz-listbox"),r=c?.shadowRoot?.querySelectorAll('.item[role="option"]');t(r?.length??0).toBe(0),await s.type(o,"R"),await l(()=>{c=a.shadowRoot?.querySelector("cosmoz-listbox"),r=c?.shadowRoot?.querySelectorAll('.item[role="option"]'),t(r?.length).toBeGreaterThan(0)})}},A={args:{source:i().mockImplementation(()=>Promise.resolve(n)),value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,args:o})=>{const a=o.source,c=await e.findByShadowRole("textbox");await s.click(c),await new Promise(r=>setTimeout(r,200)),t(a).not.toHaveBeenCalled(),await s.type(c,"R"),await l(()=>{t(a).toHaveBeenCalled()}),await l(()=>{const p=document.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');t(p?.length).toBeGreaterThan(0)})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    defaultIndex: -1
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete');
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
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
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
    args
  }) => {
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
    const chip = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-chip');
    expect(chip).toBeTruthy();

    // Clear button should NOT be present when disabled
    const clearButton = chip?.shadowRoot?.querySelector('.clear');
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
    canvas
  }) => {
    // Verify initial state
    await canvas.findByShadowText(/Red/u);
    const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete')!;
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
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    lazyOpen: true,
    keepOpened: true
  },
  play: async ({
    canvas
  }) => {
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // No items should be shown initially (empty query)
    await new Promise(r => setTimeout(r, 200));
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
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
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    source: fn().mockImplementation(() => Promise.resolve(colors)),
    value: [],
    lazyOpen: true,
    keepOpened: true
  },
  play: async ({
    canvas,
    args
  }) => {
    const sourceSpy = args.source as ReturnType<typeof fn>;
    const input = await canvas.findByShadowRole('textbox');
    await userEvent.click(input);

    // Source function should NOT be called when query is empty
    await new Promise(r => setTimeout(r, 200));
    expect(sourceSpy).not.toHaveBeenCalled();

    // Type 1 character — threshold met, source should be called and items appear
    await userEvent.type(input, 'R');
    await waitFor(() => {
      expect(sourceSpy).toHaveBeenCalled();
    });
    await waitFor(() => {
      const autocomplete = document.querySelector('cosmoz-autocomplete')!;
      const listbox = autocomplete.shadowRoot?.querySelector('cosmoz-listbox');
      const options = listbox?.shadowRoot?.querySelectorAll('.item[role="option"]');
      expect(options?.length).toBeGreaterThan(0);
    });
  }
}`,...A.parameters?.docs?.source}}};const j=["RenderWithValue","RenderLimit1","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","Limit1DisablesBackspace","LazyOpenHidesItems","LazyOpenSuppressesSource"];export{S as BackspaceRemovesChip,g as DefaultIndexNegative,w as DeselectChip,b as DisabledNoChipClear,B as DisabledState,f as ExternalSearchMode,y as FocusOpensListbox,v as KeyboardSelectItem,O as LazyOpenHidesItems,A as LazyOpenSuppressesSource,E as Limit1DisablesBackspace,h as OnChangeCallback,k as OnSelectCallback,x as OnTextCallback,z as OpenedChangedEvent,T as ProgrammaticClose,q as ProgrammaticOpen,m as RenderLimit1,d as RenderWithValue,R as TextValueEffects,C as ValueProperty,j as __namedExportsOrder,K as default};
