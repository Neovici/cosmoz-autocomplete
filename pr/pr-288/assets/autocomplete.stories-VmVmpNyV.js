import{b as _}from"./iframe-D3z2Kzvu.js";import"./index-ClZFkt-1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-idj6fW.js";const{expect:o,fn:p,userEvent:r,waitFor:u}=__STORYBOOK_MODULE_TEST__,ne=({source:e,value:a,limit:t,textProperty:n="text",valueProperty:l,onChange:s,onText:i,onSelect:K,disabled:Y,compact:U,defaultIndex:J,text:Q,keepOpened:X,externalSearch:Z,lazyOpen:ee,preserveOrder:te,required:oe,mode:ae})=>_`
    <cosmoz-autocomplete
        .source=${e}
        .value=${a}
        .limit=${t}
        .textProperty=${n}
        .valueProperty=${l}
        .onChange=${s}
        .onText=${i}
        .onSelect=${K}
        .defaultIndex=${J}
        .text=${Q}
        ?lazy-open=${ee}
        ?disabled=${Y}
        ?compact=${U}
        ?required=${oe}
        ?keep-opened=${X}
        ?external-search=${Z}
        ?preserve-order=${te}
        .mode=${ae}
    ></cosmoz-autocomplete>
`,ie={title:"Tests/Autocomplete",render:ne,tags:["!autodocs"],parameters:{layout:"fullscreen"}},c=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],d={args:{source:c,value:[c[0],c[2]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},m={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},y={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("readonly")).toBe(!1),o(t?.shadowRoot?.querySelector("input")?.readOnly).toBe(!1)}},h={args:{source:c,value:[]},play:async({canvas:e})=>{const a=await e.findByShadowRole("textbox");await r.click(a);const t=await e.findByShadowRole("option",{name:/Red/u});o(t).toBeTruthy()}},w={args:{source:c,value:[c[0]],onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const s=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag")?.shadowRoot?.querySelector("button.close");o(s).toBeTruthy(),await r.click(s),await u(()=>{o(t.onChange).toHaveBeenCalledWith([],o.any(Function))})}},v={args:{source:c,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await r.click(n),await u(()=>{o(a.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))})}},S={args:{source:c,value:[],onText:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.type(t,"Gre"),await u(()=>{o(a.onText).toHaveBeenCalledWith("Gre")})}},x={args:{source:c,value:[c[0],c[1]],onChange:p()},play:async({canvas:e,args:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await r.click(t),await r.keyboard("{Backspace}"),await u(()=>{o(a.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))})}},g={args:{source:c,value:[],onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await e.findByShadowRole("option",{name:/Red/u}),await r.keyboard("{ArrowDown}"),await r.keyboard("{Enter}"),await u(()=>{o(a.onChange).toHaveBeenCalled()})}},B={args:{source:c,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const a=e.querySelector("cosmoz-autocomplete");o(a?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},R={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const n=a.querySelector("cosmoz-autocomplete");o(n.hasAttribute("disabled")).toBe(!0);const l=n.shadowRoot?.querySelector("cosmoz-input");o(l?.hasAttribute("disabled")).toBe(!0);const s=n.shadowRoot?.querySelector("cosmoz-dropdown-next");o(s?.hasAttribute("disabled")).toBe(!0),await r.click(l),await new Promise(K=>setTimeout(K,200));const i=n.shadowRoot?.querySelector("cosmoz-listbox");o(i).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},b={args:{source:c,compact:!0},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("compact")).toBe(!0)}},f={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const l=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag");o(l).toBeTruthy();const s=l?.shadowRoot?.querySelector("button.close");o(s).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},q={args:{source:c,value:[c[0]],text:"initial"},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const n=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(n).toBeTruthy()}},E={args:{source:c,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await r.type(t,"Red"),await u(()=>{const s=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(s?.length).toBe(4)})}},C={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await u(()=>{const s=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(s?.length).toBe(2)})}},T={args:{source:c,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await r.click(n),await u(()=>{o(a.onSelect).toHaveBeenCalledWith(c[0],o.any(Object))})}},k={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete");o(t.opened).toBeFalsy(),o(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),o(t.hasAttribute("opened")).toBe(!0)}},z={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await u(()=>{o(t.hasAttribute("opened")).toBe(!1),o(t.opened).toBe(!1)})}},A={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),n=[];t.addEventListener("opened-changed",(s=>{n.push(s.detail.value)}));const l=await e.findByShadowRole("textbox");await r.click(l),await u(()=>{o(n).toContain(!0)})}},O={args:{source:c,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await new Promise(i=>setTimeout(i,200));const n=a.querySelector("cosmoz-autocomplete");let l=n.shadowRoot?.querySelector("cosmoz-listbox"),s=l?.shadowRoot?.querySelectorAll('.item[role="option"]');o(s?.length??0).toBe(0),await r.type(t,"R"),await u(()=>{l=n.shadowRoot?.querySelector("cosmoz-listbox"),s=l?.shadowRoot?.querySelectorAll('.item[role="option"]'),o(s?.length).toBeGreaterThan(0)})}},I={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=[],n=a.querySelector("cosmoz-autocomplete");n.source=s=>(t.push(s),Promise.resolve(c));const l=await e.findByShadowRole("textbox");await r.click(l),await new Promise(s=>setTimeout(s,200)),o(t.length).toBe(0),await r.type(l,"R"),await u(()=>{o(t.length).toBeGreaterThan(0)}),await u(()=>{const i=n.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(i?.length).toBeGreaterThan(0)})}},F={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(1);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("G"),await u(()=>{const s=t.shadowRoot?.querySelectorAll(".chip");o(s?.length).toBe(0)}),o(l.value).toBe("G")}},W={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),n.dispatchEvent(new KeyboardEvent("keydown",{key:"c",metaKey:!0,bubbles:!0,composed:!0})),await new Promise(l=>setTimeout(l,100)),o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},H={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),n.value="Bl",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await u(()=>{o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(0)}),o(n.value).toBe("Bl")}},P={args:{source:c,value:[c[0],c[1]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(2);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("B"),await new Promise(i=>setTimeout(i,100));const s=t.shadowRoot?.querySelectorAll(".chip");o(s?.length).toBe(2)}},L={args:{source:c,value:[c[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(1);const l=await e.findByShadowRole("textbox");await r.click(l),await r.keyboard("G"),await new Promise(i=>setTimeout(i,100));const s=t.shadowRoot?.querySelectorAll(".chip");o(s?.length).toBe(1)}},j=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],G={args:{source:j,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});o(n).toBeTruthy(),await r.click(n),await u(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},V={args:{source:j,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});o(n).toBeTruthy(),await r.click(n),await u(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},M={args:{source:c,required:!0},play:async({canvas:e})=>{const a=document.querySelector("cosmoz-autocomplete");o(a?.hasAttribute("required")).toBe(!0);const t=await e.findByShadowRole("textbox");o(t.hasAttribute("required")).toBe(!0)}},D={args:{source:c,mode:"select",onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const n=await e.findByShadowRole("textbox");await r.click(n);const l=await e.findByShadowRole("option",{name:/Red/u});await r.click(l),await u(()=>{o(t.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))});const s=a.querySelector("cosmoz-autocomplete"),{value:i}=s;o(Array.isArray(i)).toBe(!1),o(i).toEqual(c[0])}},$={args:{source:c,limit:1,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const n=await e.findByShadowRole("textbox");await r.click(n);const l=await e.findByShadowRole("option",{name:/Red/u});await r.click(l),await u(()=>{o(t.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))});const s=a.querySelector("cosmoz-autocomplete"),{value:i}=s;o(Array.isArray(i)).toBe(!0),o(i).toEqual([c[0]])}},N={render:()=>_`
        <cosmoz-autocomplete
            .source=${[{text:"Red"},{text:"Green"}]}
            .value=${[{text:"Red"}]}
            text-property="text"
            variant="pill"
            .placeholder=${"Label"}
        ></cosmoz-autocomplete>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-autocomplete"),n=()=>t.shadowRoot.querySelector("cosmoz-input"),l=()=>n().shadowRoot.querySelector(".control"),s=()=>n().shadowRoot.querySelector("#input");await a("places the add pill after the chips with a plus",async()=>{await u(()=>o(l()).toBeTruthy());const i=t.shadowRoot.querySelector("cosmoz-tag.chip");o(i.getBoundingClientRect().right).toBeLessThanOrEqual(s().getBoundingClientRect().left),o(getComputedStyle(l(),"::before").content).toBe('""')}),await a("drops the plus and grows on focus",async()=>{const i=s().getBoundingClientRect().width;s().focus(),await u(()=>o(getComputedStyle(l(),"::before").display).toBe("none")),o(s().getBoundingClientRect().width).toBeGreaterThan(i)})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    expect(autocomplete.opened).toBeFalsy();
    expect(autocomplete.hasAttribute('opened')).toBe(false);
    autocomplete.opened = true;
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    expect(autocomplete.hasAttribute('opened')).toBe(true);
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-autocomplete
            .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }]}
            .value=\${[{
    text: 'Red'
  }]}
            text-property="text"
            variant="pill"
            .placeholder=\${'Label'}
        ></cosmoz-autocomplete>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-autocomplete')!;
    const input = () => el.shadowRoot!.querySelector<HTMLElement & {
      focus(): void;
    }>('cosmoz-input')!;
    const control = () => input().shadowRoot!.querySelector<HTMLElement>('.control')!;
    const inputEl = () => input().shadowRoot!.querySelector<HTMLInputElement>('#input')!;
    await step('places the add pill after the chips with a plus', async () => {
      await waitFor(() => expect(control()).toBeTruthy());
      const chip = el.shadowRoot!.querySelector('cosmoz-tag.chip')!;
      expect(chip.getBoundingClientRect().right).toBeLessThanOrEqual(inputEl().getBoundingClientRect().left);
      expect(getComputedStyle(control(), '::before').content).toBe('""');
    });
    await step('drops the plus and grows on focus', async () => {
      const width = inputEl().getBoundingClientRect().width;
      inputEl().focus();
      await waitFor(() => expect(getComputedStyle(control(), '::before').display).toBe('none'));
      expect(inputEl().getBoundingClientRect().width).toBeGreaterThan(width);
    });
  }
}`,...N.parameters?.docs?.source}}};const ue=["RenderWithValue","RenderLimit1","SingleValueIsNotReadonly","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","CompactState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","ShortcutDoesNotClearValueWhenSelected","InputWithoutKeydownClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder","Required","SelectModeValueIsSingleItem","MultiModeValueIsArray","PillVariant"];export{x as BackspaceRemovesChip,b as CompactState,B as DefaultIndexNegative,w as DeselectChip,G as DeselectWithPreserveOrderAndValueProperty,V as DeselectWithValuePropertyWithoutPreserveOrder,f as DisabledNoChipClear,R as DisabledState,E as ExternalSearchMode,h as FocusOpensListbox,H as InputWithoutKeydownClearsValueWhenSelected,g as KeyboardSelectItem,O as LazyOpenHidesItems,I as LazyOpenSuppressesSource,$ as MultiModeValueIsArray,v as OnChangeCallback,T as OnSelectCallback,S as OnTextCallback,A as OpenedChangedEvent,N as PillVariant,z as ProgrammaticClose,k as ProgrammaticOpen,m as RenderLimit1,d as RenderWithValue,M as Required,D as SelectModeValueIsSingleItem,W as ShortcutDoesNotClearValueWhenSelected,y as SingleValueIsNotReadonly,q as TextValueEffects,F as TypingClearsValueWhenSelected,P as TypingDoesNotClearValueWhenMultiSelect,L as TypingDoesNotClearWhenDisabled,C as ValueProperty,ue as __namedExportsOrder,ie as default};
