import{b as le}from"./iframe-CQ9qe-Rw.js";import"./index-fOFS20x_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Y52Vx8aS.js";const{expect:n,fn:d,userEvent:r,waitFor:u}=__STORYBOOK_MODULE_TEST__,ie=({source:e,value:t,limit:a,textProperty:s="text",valueProperty:i,onChange:p,onText:j,onSelect:Q,disabled:X,compact:Z,defaultIndex:ee,text:ae,keepOpened:te,externalSearch:ne,lazyOpen:oe,preserveOrder:se,required:re,mode:ce})=>le`
    <cosmoz-autocomplete
        .source=${e}
        .value=${t}
        .limit=${a}
        .textProperty=${s}
        .valueProperty=${i}
        .onChange=${p}
        .onText=${j}
        .onSelect=${Q}
        .defaultIndex=${ee}
        .text=${ae}
        ?lazy-open=${oe}
        ?disabled=${X}
        ?compact=${Z}
        ?required=${re}
        ?keep-opened=${te}
        ?external-search=${ne}
        ?preserve-order=${se}
        .mode=${ce}
    ></cosmoz-autocomplete>
`,we={title:"Tests/Autocomplete",render:ie,tags:["!autodocs"],parameters:{layout:"fullscreen"}},o=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],c=e=>e.querySelector("cosmoz-autocomplete"),l=e=>e.shadowRoot?.querySelector("cosmoz-autocomplete-trigger"),Y=e=>e.shadowRoot?.querySelector("cosmoz-autocomplete-chips")?.shadowRoot?.querySelector("cosmoz-autocomplete-chips-row"),m=e=>Y(e)?.querySelectorAll("cosmoz-tag.chip").length??0,U=(e,t)=>Y(e)?.querySelector(`cosmoz-tag[title='${t}']`),w=e=>e.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]'),h={args:{source:o,value:[o[0],o[2]]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const a=c(t);n(m(a)).toBe(2)}},y={args:{source:o,value:[o[1]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Green/u);const a=c(t);n(m(a)).toBe(1)}},v={args:{source:o,value:[o[1]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Green/u);const a=t.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector("cosmoz-input");n(a?.hasAttribute("readonly")).toBe(!1),n(a?.shadowRoot?.querySelector("input")?.readOnly).toBe(!1)}},g={args:{source:o,value:[]},play:async({canvas:e,canvasElement:t})=>{const a=c(t);await r.click(l(a));const s=await e.findByShadowRole("option",{name:/Red/u});n(s).toBeTruthy()}},B={args:{source:o,value:[o[0]],onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{const s=c(t);await e.findByShadowText(/Red/u);const p=U(s,"Red")?.shadowRoot?.querySelector("cosmoz-button.close");n(p).toBeTruthy(),await r.click(p),await u(()=>{n(a.onChange).toHaveBeenCalledWith([],n.any(Function))})}},x={args:{source:o,value:[],onChange:d(),keepOpened:!0},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await u(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},S={args:{source:o,value:[],onText:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("textbox",{name:"Search"});await r.type(s,"Gre"),await u(()=>{n(a.onText).toHaveBeenCalledWith("Gre")})}},E={args:{source:o,value:[o[0],o[1]],onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await e.findByShadowText(/Green/u),await r.click(l(c(t))),await r.keyboard("{Backspace}"),await u(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))})}},f={args:{source:o,value:[],onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t))),await e.findByShadowRole("option",{name:/Red/u}),await r.keyboard("{ArrowDown}"),await r.keyboard("{Enter}"),await u(()=>{n(a.onChange).toHaveBeenCalled()})}},b={args:{source:o,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const t=c(e);n(m(t)).toBe(0)}},T={args:{source:o,value:[o[0]],disabled:!0,onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await e.findByShadowText(/Red/u);const s=c(t),i=l(s);n(s.hasAttribute("disabled")).toBe(!0),n(i.hasAttribute("disabled")).toBe(!0);const p=s.shadowRoot?.querySelector("cosmoz-dropdown-next");n(p?.hasAttribute("disabled")).toBe(!0),await r.click(i),await new Promise(j=>setTimeout(j,200)),n(i.getAttribute("aria-expanded")).toBe("false"),n(a.onChange).not.toHaveBeenCalled()}},R={args:{source:o,compact:!0},play:async({canvasElement:e})=>{const t=c(e);n(l(t).hasAttribute("compact")).toBe(!0)}},k={args:{source:o,value:[o[0]],disabled:!0,onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await e.findByShadowText(/Red/u);const s=c(t),i=U(s,"Red");n(i).toBeTruthy(),n(i?.hasAttribute("removable")).toBe(!1),n(a.onChange).not.toHaveBeenCalled()}},C={args:{source:o,value:[o[0]],text:"initial"},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const s=t.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");n(s).toBeTruthy()}},O={args:{source:o,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{await r.click(l(c(t)));const a=await e.findByShadowRole("textbox",{name:"Search"});await r.type(a,"Red"),await u(()=>{n(w(c(t))?.length).toBe(4)})}},A={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvasElement:e})=>{await r.click(l(c(e))),await u(()=>{n(w(c(e))?.length).toBe(2)})}},I={args:{source:o,value:[],onSelect:d(),keepOpened:!0},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await u(()=>{n(a.onSelect).toHaveBeenCalledWith(o[0],n.any(Object))})}},W={args:{source:o,value:[]},play:async({canvas:e,canvasElement:t})=>{const a=t.querySelector("cosmoz-autocomplete");n(a.opened).toBeFalsy(),n(a.hasAttribute("opened")).toBe(!1),a.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),n(a.hasAttribute("opened")).toBe(!0)}},q={args:{source:o,value:[]},play:async({canvas:e,canvasElement:t})=>{const a=c(t);await r.click(l(a)),await e.findByShadowRole("option",{name:/Red/u}),a.opened=!1,await u(()=>{n(a.hasAttribute("opened")).toBe(!1),n(a.opened).toBe(!1)})}},F={args:{source:o,value:[]},play:async({canvasElement:e})=>{const t=c(e),a=[];t.addEventListener("opened-changed",(s=>{a.push(s.detail.value)})),await r.click(l(t)),await u(()=>{n(a).toContain(!0)})}},P={args:{source:o,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{await r.click(l(c(t)));const a=await e.findByShadowRole("textbox",{name:"Search"});await new Promise(i=>setTimeout(i,200));const s=c(t);n(w(s)?.length??0).toBe(0),await r.type(a,"R"),await u(()=>{n(w(s)?.length).toBeGreaterThan(0)})}},z={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:t})=>{const a=[],s=c(t);s.source=p=>(a.push(p),Promise.resolve(o)),await r.click(l(s));const i=await e.findByShadowRole("textbox",{name:"Search"});await new Promise(p=>setTimeout(p,200)),n(a.length).toBe(0),await r.type(i,"R"),await u(()=>{n(a.length).toBeGreaterThan(0)}),await u(()=>{n(w(s)?.length).toBeGreaterThan(0)})}},H={args:{source:o,value:[o[0]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const a=c(t);n(m(a)).toBe(1),await r.click(l(a));const s=await e.findByShadowRole("textbox",{name:"Search"});await r.type(s,"G"),await u(()=>{n(m(a)).toBe(0)}),n(s.value).toBe("G")}},D={args:{source:o,value:[o[0]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const a=c(t);await r.click(l(a)),(await e.findByShadowRole("textbox",{name:"Search"})).dispatchEvent(new KeyboardEvent("keydown",{key:"c",metaKey:!0,bubbles:!0,composed:!0})),await new Promise(i=>setTimeout(i,100)),n(m(a)).toBe(1)}},V={args:{source:o,value:[o[0]],limit:1},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const a=c(t);await r.click(l(a));const s=await e.findByShadowRole("textbox",{name:"Search"});await r.click(s),s.value="Bl",s.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await u(()=>{n(m(a)).toBe(0)}),n(s.value).toBe("Bl")}},G={args:{source:o,value:[o[0],o[1]]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const a=c(t);n(m(a)).toBe(2),await r.click(l(a));const s=await e.findByShadowRole("textbox",{name:"Search"});await r.type(s,"B"),await new Promise(i=>setTimeout(i,100)),n(m(a)).toBe(2)}},$={args:{source:o,value:[o[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Red/u);const a=c(t);n(m(a)).toBe(1),await r.click(l(a)),await new Promise(s=>setTimeout(s,100)),n(m(a)).toBe(1),n(l(a).getAttribute("aria-expanded")).toBe("false")}},J=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],N={args:{source:J,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Item 1/u});n(s).toBeTruthy(),await r.click(s),await u(()=>{n(a.onChange).toHaveBeenCalledWith([],n.any(Function))})}},L={args:{source:J,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Item 1/u});n(s).toBeTruthy(),await r.click(s),await u(()=>{n(a.onChange).toHaveBeenCalledWith([],n.any(Function))})}},M={args:{source:o,required:!0},play:async({canvasElement:e})=>{const t=c(e);n(t.hasAttribute("required")).toBe(!0),n(l(t).hasAttribute("required")).toBe(!0)}},K={args:{source:o,mode:"select",onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await u(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))});const i=c(t),{value:p}=i;n(Array.isArray(p)).toBe(!1),n(p).toEqual(o[0])}},_={args:{source:o,limit:1,onChange:d()},play:async({canvas:e,canvasElement:t,args:a})=>{await r.click(l(c(t)));const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await u(()=>{n(a.onChange).toHaveBeenCalledWith([o[0]],n.any(Function))});const i=c(t),{value:p}=i;n(Array.isArray(p)).toBe(!0),n(p).toEqual([o[0]])}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(2);
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(1);
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    expect(option).toBeTruthy();
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    await canvas.findByShadowText(/Red/u);
    const tag = chip(autocomplete, 'Red');
    const removeButton = tag?.shadowRoot?.querySelector('cosmoz-button.close');
    expect(removeButton).toBeTruthy();
    await userEvent.click(removeButton!);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([], expect.any(Function));
    });
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onChange: fn(),
    keepOpened: true
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onText: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });
    await userEvent.type(input, 'Gre');
    await waitFor(() => {
      expect(args.onText).toHaveBeenCalledWith('Gre');
    });
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [colors[0], colors[1]],
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await canvas.findByShadowText(/Green/u);
    await userEvent.click(dropdownTrigger(host(canvasElement))!);

    // Backspace on the empty search removes the last chip
    await userEvent.keyboard('{Backspace}');
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
  }
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onChange: fn()
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    defaultIndex: -1
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(0);
  }
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    const trigger = dropdownTrigger(autocomplete)!;
    expect(autocomplete.hasAttribute('disabled')).toBe(true);
    expect(trigger.hasAttribute('disabled')).toBe(true);
    const dropdown = autocomplete.shadowRoot?.querySelector('cosmoz-dropdown-next');
    expect(dropdown?.hasAttribute('disabled')).toBe(true);

    // Clicking should NOT open the listbox
    await userEvent.click(trigger);
    await new Promise(r => setTimeout(r, 200));
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    compact: true
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    expect(dropdownTrigger(autocomplete)!.hasAttribute('compact')).toBe(true);
  }
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    const tag = chip(autocomplete, 'Red');
    expect(tag).toBeTruthy();

    // Clear button should NOT be present when disabled
    expect(tag?.hasAttribute('removable')).toBe(false);

    // onChange should NOT have been called
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });
    await userEvent.type(input, 'Red');

    // With externalSearch=true, all items should still appear (no client-side filtering)
    await waitFor(() => {
      expect(listboxOptions(host(canvasElement))?.length).toBe(4);
    });
  }
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    canvasElement
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);

    // Both items should appear in the listbox — the value item is deduplicated by id
    await waitFor(() => {
      expect(listboxOptions(host(canvasElement))?.length).toBe(2);
    });
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: [],
    onSelect: fn(),
    keepOpened: true
  },
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith(colors[0], expect.any(Object));
    });
  }
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    autocomplete.opened = false;
    await waitFor(() => {
      expect(autocomplete.hasAttribute('opened')).toBe(false);
      expect(autocomplete.opened).toBe(false);
    });
  }
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    value: []
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    const events: boolean[] = [];
    autocomplete.addEventListener('opened-changed', ((e: CustomEvent) => {
      events.push(e.detail.value);
    }) as EventListener);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    await waitFor(() => {
      expect(events).toContain(true);
    });
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });

    // No items should be shown initially (empty query)
    await new Promise(r => setTimeout(r, 200));
    const autocomplete = host(canvasElement);
    expect(listboxOptions(autocomplete)?.length ?? 0).toBe(0);

    // Type 1 character — threshold met, items should appear
    await userEvent.type(input, 'R');
    await waitFor(() => {
      expect(listboxOptions(autocomplete)?.length).toBeGreaterThan(0);
    });
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    autocomplete.source = (opts: unknown) => {
      calls.push(opts);
      return Promise.resolve(colors);
    };
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });

    // Source function should NOT be called when query is empty
    await new Promise(r => setTimeout(r, 200));
    expect(calls.length).toBe(0);

    // Type 1 character — threshold met, source should be called and items appear
    await userEvent.type(input, 'R');
    await waitFor(() => {
      expect(calls.length).toBeGreaterThan(0);
    });
    await waitFor(() => {
      expect(listboxOptions(autocomplete)?.length).toBeGreaterThan(0);
    });
  }
}`,...z.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(1);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });
    await userEvent.type(input, 'G');
    await waitFor(() => {
      expect(chips(autocomplete)).toBe(0);
    });
    expect(input.value).toBe('G');
  }
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });
    input.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'c',
      metaKey: true,
      bubbles: true,
      composed: true
    }));
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(chips(autocomplete)).toBe(1);
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const input = (await canvas.findByShadowRole('textbox', {
      name: 'Search'
    })) as HTMLInputElement;
    await userEvent.click(input);
    // paste, IME and Android keyboards change the text without a usable keydown
    input.value = 'Bl';
    input.dispatchEvent(new Event('input', {
      bubbles: true,
      composed: true
    }));
    await waitFor(() => {
      expect(chips(autocomplete)).toBe(0);
    });
    expect(input.value).toBe('Bl');
  }
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(2);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    const input = await canvas.findByShadowRole('textbox', {
      name: 'Search'
    });
    await userEvent.type(input, 'B');
    await new Promise(r => setTimeout(r, 100));
    expect(chips(autocomplete)).toBe(2);
  }
}`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = host(canvasElement);
    expect(chips(autocomplete)).toBe(1);
    await userEvent.click(dropdownTrigger(autocomplete)!);
    await new Promise(r => setTimeout(r, 100));

    // disabled: the dropdown never opens and the value survives
    expect(chips(autocomplete)).toBe(1);
    expect(dropdownTrigger(autocomplete)!.getAttribute('aria-expanded')).toBe('false');
  }
}`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);

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
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
    canvasElement,
    args
  }) => {
    await userEvent.click(dropdownTrigger(host(canvasElement))!);

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
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    source: colors,
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const autocomplete = host(canvasElement);
    expect(autocomplete.hasAttribute('required')).toBe(true);
    expect(dropdownTrigger(autocomplete)!.hasAttribute('required')).toBe(true);
  }
}`,...M.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
    const autocomplete = host(canvasElement);
    const {
      value
    } = autocomplete;
    expect(Array.isArray(value)).toBe(false);
    expect(value).toEqual(colors[0]);
  }
}`,...K.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(dropdownTrigger(host(canvasElement))!);
    const option = await canvas.findByShadowRole('option', {
      name: /Red/u
    });
    await userEvent.click(option);
    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalledWith([colors[0]], expect.any(Function));
    });
    const autocomplete = host(canvasElement);
    const {
      value
    } = autocomplete;
    expect(Array.isArray(value)).toBe(true);
    expect(value).toEqual([colors[0]]);
  }
}`,..._.parameters?.docs?.source}}};const he=["RenderWithValue","RenderLimit1","SingleValueIsNotReadonly","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","CompactState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","ShortcutDoesNotClearValueWhenSelected","InputWithoutKeydownClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder","Required","SelectModeValueIsSingleItem","MultiModeValueIsArray"];export{E as BackspaceRemovesChip,R as CompactState,b as DefaultIndexNegative,B as DeselectChip,N as DeselectWithPreserveOrderAndValueProperty,L as DeselectWithValuePropertyWithoutPreserveOrder,k as DisabledNoChipClear,T as DisabledState,O as ExternalSearchMode,g as FocusOpensListbox,V as InputWithoutKeydownClearsValueWhenSelected,f as KeyboardSelectItem,P as LazyOpenHidesItems,z as LazyOpenSuppressesSource,_ as MultiModeValueIsArray,x as OnChangeCallback,I as OnSelectCallback,S as OnTextCallback,F as OpenedChangedEvent,q as ProgrammaticClose,W as ProgrammaticOpen,y as RenderLimit1,h as RenderWithValue,M as Required,K as SelectModeValueIsSingleItem,D as ShortcutDoesNotClearValueWhenSelected,v as SingleValueIsNotReadonly,C as TextValueEffects,H as TypingClearsValueWhenSelected,G as TypingDoesNotClearValueWhenMultiSelect,$ as TypingDoesNotClearWhenDisabled,A as ValueProperty,he as __namedExportsOrder,we as default};
