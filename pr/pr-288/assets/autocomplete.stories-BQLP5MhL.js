import{b as m}from"./iframe-hEiTz7EJ.js";import"./index-DxS6y6zf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbs7n9LB.js";const{expect:a,fn:p,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,le=({source:e,value:o,limit:t,textProperty:n="text",valueProperty:r,onChange:l,onText:u,onSelect:d,disabled:X,compact:Z,defaultIndex:ee,text:te,keepOpened:oe,externalSearch:ae,lazyOpen:ne,preserveOrder:ce,required:se,mode:re})=>m`
    <cosmoz-autocomplete
        .source=${e}
        .value=${o}
        .limit=${t}
        .textProperty=${n}
        .valueProperty=${r}
        .onChange=${l}
        .onText=${u}
        .onSelect=${d}
        .defaultIndex=${ee}
        .text=${te}
        ?lazy-open=${ne}
        ?disabled=${X}
        ?compact=${Z}
        ?required=${se}
        ?keep-opened=${oe}
        ?external-search=${ae}
        ?preserve-order=${ce}
        .mode=${re}
    ></cosmoz-autocomplete>
`,me={title:"Tests/Autocomplete",render:le,tags:["!autodocs"],parameters:{layout:"fullscreen"}},c=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],h={args:{source:c,value:[c[0],c[2]]},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=o.querySelector("cosmoz-autocomplete");a(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},y={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Green/u);const t=o.querySelector("cosmoz-autocomplete");a(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},w={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Green/u);const t=o.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector("cosmoz-input");a(t?.hasAttribute("readonly")).toBe(!1),a(t?.shadowRoot?.querySelector("input")?.readOnly).toBe(!1)}},x={args:{source:c,value:[]},play:async({canvas:e})=>{const o=await e.findByShadowRole("textbox");await s.click(o);const t=await e.findByShadowRole("option",{name:/Red/u});a(t).toBeTruthy()}},v={args:{source:c,value:[c[0]],onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const l=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag")?.shadowRoot?.querySelector("button.close");a(l).toBeTruthy(),await s.click(l),await i(()=>{a(t.onChange).toHaveBeenCalledWith([],a.any(Function))})}},S={args:{source:c,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await s.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([c[0]],a.any(Function))})}},g={args:{source:c,value:[],onText:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.type(t,"Gre"),await i(()=>{a(o.onText).toHaveBeenCalledWith("Gre")})}},B={args:{source:c,value:[c[0],c[1]],onChange:p()},play:async({canvas:e,args:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await s.click(t),await s.keyboard("{Backspace}"),await i(()=>{a(o.onChange).toHaveBeenCalledWith([c[0]],a.any(Function))})}},b={args:{source:c,value:[],onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await e.findByShadowRole("option",{name:/Red/u}),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await i(()=>{a(o.onChange).toHaveBeenCalled()})}},R={args:{source:c,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const o=e.querySelector("cosmoz-autocomplete");a(o?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},f={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const n=o.querySelector("cosmoz-autocomplete");a(n.hasAttribute("disabled")).toBe(!0);const r=n.shadowRoot?.querySelector("cosmoz-input");a(r?.hasAttribute("disabled")).toBe(!0);const l=n.shadowRoot?.querySelector("cosmoz-dropdown-next");a(l?.hasAttribute("disabled")).toBe(!0),await s.click(r),await new Promise(d=>setTimeout(d,200));const u=n.shadowRoot?.querySelector("cosmoz-listbox");a(u).toBeFalsy(),a(t.onChange).not.toHaveBeenCalled()}},q={args:{source:c,compact:!0},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");a(t?.hasAttribute("compact")).toBe(!0)}},E={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{await e.findByShadowText(/Red/u);const r=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag");a(r).toBeTruthy();const l=r?.shadowRoot?.querySelector("button.close");a(l).toBeFalsy(),a(t.onChange).not.toHaveBeenCalled()}},k={args:{source:c,value:[c[0]],text:"initial"},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const n=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");a(n).toBeTruthy()}},z={args:{source:c,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await s.type(t,"Red"),await i(()=>{const l=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(l?.length).toBe(4)})}},C={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await i(()=>{const l=o.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(l?.length).toBe(2)})}},T={args:{source:c,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await s.click(n),await i(()=>{a(o.onSelect).toHaveBeenCalledWith(c[0],a.any(Object))})}},A={args:{source:c,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete");a(t.opened).toBeFalsy(),a(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),a(t.hasAttribute("opened")).toBe(!0)}},O={args:{source:c,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await s.click(n),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await i(()=>{a(t.hasAttribute("opened")).toBe(!1),a(t.opened).toBe(!1)})}},$={args:{source:c,value:[]},play:async({canvas:e,canvasElement:o})=>{const t=o.querySelector("cosmoz-autocomplete"),n=[];t.addEventListener("opened-changed",(l=>{n.push(l.detail.value)}));const r=await e.findByShadowRole("textbox");await s.click(r),await i(()=>{a(n).toContain(!0)})}},F={args:{source:c,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t),await new Promise(u=>setTimeout(u,200));const n=o.querySelector("cosmoz-autocomplete");let r=n.shadowRoot?.querySelector("cosmoz-listbox"),l=r?.shadowRoot?.querySelectorAll('.item[role="option"]');a(l?.length??0).toBe(0),await s.type(t,"R"),await i(()=>{r=n.shadowRoot?.querySelector("cosmoz-listbox"),l=r?.shadowRoot?.querySelectorAll('.item[role="option"]'),a(l?.length).toBeGreaterThan(0)})}},P={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:o})=>{const t=[],n=o.querySelector("cosmoz-autocomplete");n.source=l=>(t.push(l),Promise.resolve(c));const r=await e.findByShadowRole("textbox");await s.click(r),await new Promise(l=>setTimeout(l,200)),a(t.length).toBe(0),await s.type(r,"R"),await i(()=>{a(t.length).toBeGreaterThan(0)}),await i(()=>{const u=n.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');a(u?.length).toBeGreaterThan(0)})}},W={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(1);const r=await e.findByShadowRole("textbox");await s.click(r),await s.keyboard("G"),await i(()=>{const l=t.shadowRoot?.querySelectorAll(".chip");a(l?.length).toBe(0)}),a(r.value).toBe("G")}},I={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await s.click(n),n.dispatchEvent(new KeyboardEvent("keydown",{key:"c",metaKey:!0,bubbles:!0,composed:!0})),await new Promise(r=>setTimeout(r,100)),a(t.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},H={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await s.click(n),n.value="Bl",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(()=>{a(t.shadowRoot?.querySelectorAll(".chip").length).toBe(0)}),a(n.value).toBe("Bl")}},G={args:{source:c,value:[c[0],c[1]]},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(2);const r=await e.findByShadowRole("textbox");await s.click(r),await s.keyboard("B"),await new Promise(u=>setTimeout(u,100));const l=t.shadowRoot?.querySelectorAll(".chip");a(l?.length).toBe(2)}},L={args:{source:c,value:[c[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:o})=>{await e.findByShadowText(/Red/u);const t=o.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");a(n?.length).toBe(1);const r=await e.findByShadowRole("textbox");await s.click(r),await s.keyboard("G"),await new Promise(u=>setTimeout(u,100));const l=t.shadowRoot?.querySelectorAll(".chip");a(l?.length).toBe(1)}},Q=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],V={args:{source:Q,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});a(n).toBeTruthy(),await s.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([],a.any(Function))})}},D={args:{source:Q,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:p()},play:async({canvas:e,args:o})=>{const t=await e.findByShadowRole("textbox");await s.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});a(n).toBeTruthy(),await s.click(n),await i(()=>{a(o.onChange).toHaveBeenCalledWith([],a.any(Function))})}},M={args:{source:c,required:!0},play:async({canvas:e})=>{const o=document.querySelector("cosmoz-autocomplete");a(o?.hasAttribute("required")).toBe(!0);const t=await e.findByShadowRole("textbox");a(t.hasAttribute("required")).toBe(!0)}},N={args:{source:c,mode:"select",onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{const n=await e.findByShadowRole("textbox");await s.click(n);const r=await e.findByShadowRole("option",{name:/Red/u});await s.click(r),await i(()=>{a(t.onChange).toHaveBeenCalledWith([c[0]],a.any(Function))});const l=o.querySelector("cosmoz-autocomplete"),{value:u}=l;a(Array.isArray(u)).toBe(!1),a(u).toEqual(c[0])}},_={args:{source:c,limit:1,onChange:p()},play:async({canvas:e,canvasElement:o,args:t})=>{const n=await e.findByShadowRole("textbox");await s.click(n);const r=await e.findByShadowRole("option",{name:/Red/u});await s.click(r),await i(()=>{a(t.onChange).toHaveBeenCalledWith([c[0]],a.any(Function))});const l=o.querySelector("cosmoz-autocomplete"),{value:u}=l;a(Array.isArray(u)).toBe(!0),a(u).toEqual([c[0]])}},K={render:()=>m`
        <div style="width: 320px">
            <cosmoz-autocomplete
                .source=${Array.from({length:12},(e,o)=>({text:`Label number ${o+1}`}))}
                .value=${Array.from({length:8},(e,o)=>({text:`Label number ${o+1}`}))}
                text-property="text"
                variant="pill"
                keep-opened
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter labels"}
            ></cosmoz-autocomplete>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const t=e.querySelector("cosmoz-autocomplete"),n=u=>t.shadowRoot.querySelector(u),r=()=>n("cosmoz-tag.badge"),l=()=>n("cosmoz-dropdown-next").shadowRoot.querySelector("[popover]");await o("collapses what does not fit and keeps the add button",async()=>{await i(()=>a(r().hidden).toBe(!1));const u=n(".add").getBoundingClientRect(),d=n(".pill-row").getBoundingClientRect();a(u.right).toBeLessThanOrEqual(d.right),a(r().title.split(", ").length).toBe(Number(r().textContent.trim().slice(1)))}),await o("the badge opens the picker",async()=>{await s.click(r()),await i(()=>a(l().matches(":popover-open")).toBe(!0))}),await o("searches inside the popover, with checks on selected",async()=>{const u=()=>n("cosmoz-listbox");await i(()=>a(u().hasAttribute("checkmark")).toBe(!0)),await s.type(n("cosmoz-input.search").shadowRoot.querySelector("input"),"12"),await i(()=>a(u().shadowRoot.querySelectorAll(".item").length).toBe(1))})}},J=e=>{const o=e.querySelector("cosmoz-autocomplete"),t=n=>o.shadowRoot.querySelector(n);return{el:o,$:t,badge:()=>t("cosmoz-tag.badge")}},j={render:()=>m`
        <div style="display: inline-flex; width: 600px">
            <cosmoz-autocomplete
                style="flex: 1"
                .source=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                .value=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                text-property="text"
                variant="pill"
                .placeholder=${"Label"}
            ></cosmoz-autocomplete>
        </div>
    `,play:async({canvasElement:e})=>{const{el:o,badge:t}=J(e);await i(()=>a(o.shadowRoot.querySelectorAll(".chip:not([hidden])").length).toBe(3)),a(t().hidden).toBe(!0)}},Y={render:()=>m`
        <cosmoz-autocomplete
            .source=${[{text:"Red"},{text:"Green"}]}
            .value=${[{text:"Red"},{text:"Green"}]}
            text-property="text"
            variant="pill"
            keep-opened
        ></cosmoz-autocomplete>
    `,play:async({canvasElement:e})=>{const{el:o,$:t}=J(e);await s.click(t(".add"));const n=()=>t("cosmoz-input.search").shadowRoot.querySelector("input");await i(()=>a(n()).toBeTruthy()),await s.type(n(),"g{Backspace}{Backspace}{Backspace}"),a(o.value.length).toBe(2)}},U={render:()=>m`
        <div style="width: 160px">
            <cosmoz-autocomplete
                .source=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                .value=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                text-property="text"
                variant="pill"
                disabled
            ></cosmoz-autocomplete>
        </div>
    `,play:async({canvasElement:e})=>{const{el:o,badge:t}=J(e);await i(()=>a(t().hidden).toBe(!1)),t().click(),await new Promise(n=>setTimeout(n,100)),a(o.hasAttribute("opened")).toBe(!1)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const autocomplete = canvasElement.querySelector('cosmoz-autocomplete');
    expect(autocomplete?.shadowRoot?.querySelectorAll('.chip').length).toBe(1);
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 320px">
            <cosmoz-autocomplete
                .source=\${Array.from({
    length: 12
  }, (_, i) => ({
    text: \`Label number \${i + 1}\`
  }))}
                .value=\${Array.from({
    length: 8
  }, (_, i) => ({
    text: \`Label number \${i + 1}\`
  }))}
                text-property="text"
                variant="pill"
                keep-opened
                .placeholder=\${'Label'}
                .searchPlaceholder=\${'Filter labels'}
            ></cosmoz-autocomplete>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-autocomplete')!;
    const $ = <E extends Element,>(sel: string) => el.shadowRoot!.querySelector<E>(sel)!;
    const badge = () => $<HTMLElement>('cosmoz-tag.badge');
    const popover = () => $('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
    await step('collapses what does not fit and keeps the add button', async () => {
      await waitFor(() => expect(badge().hidden).toBe(false));
      const add = $<HTMLElement>('.add').getBoundingClientRect();
      const row = $<HTMLElement>('.pill-row').getBoundingClientRect();
      expect(add.right).toBeLessThanOrEqual(row.right);
      expect(badge().title.split(', ').length).toBe(Number(badge().textContent!.trim().slice(1)));
    });
    await step('the badge opens the picker', async () => {
      await userEvent.click(badge());
      await waitFor(() => expect(popover().matches(':popover-open')).toBe(true));
    });
    await step('searches inside the popover, with checks on selected', async () => {
      const listbox = () => $('cosmoz-listbox');
      await waitFor(() => expect(listbox().hasAttribute('checkmark')).toBe(true));
      await userEvent.type($('cosmoz-input.search').shadowRoot!.querySelector('input')!, '12');
      await waitFor(() => expect(listbox().shadowRoot!.querySelectorAll('.item').length).toBe(1));
    });
  }
}`,...K.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="display: inline-flex; width: 600px">
            <cosmoz-autocomplete
                style="flex: 1"
                .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                text-property="text"
                variant="pill"
                .placeholder=\${'Label'}
            ></cosmoz-autocomplete>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      badge
    } = pillOf(canvasElement);
    await waitFor(() => expect(el.shadowRoot!.querySelectorAll('.chip:not([hidden])').length).toBe(3));
    expect(badge().hidden).toBe(true);
  }
}`,...j.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-autocomplete
            .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }]}
            .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }]}
            text-property="text"
            variant="pill"
            keep-opened
        ></cosmoz-autocomplete>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      $
    } = pillOf(canvasElement);
    await userEvent.click($('.add'));
    const input = () => $('cosmoz-input.search').shadowRoot!.querySelector('input')!;
    await waitFor(() => expect(input()).toBeTruthy());
    await userEvent.type(input(), 'g{Backspace}{Backspace}{Backspace}');
    expect((el as unknown as {
      value: unknown[];
    }).value.length).toBe(2);
  }
}`,...Y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 160px">
            <cosmoz-autocomplete
                .source=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                .value=\${[{
    text: 'Red'
  }, {
    text: 'Green'
  }, {
    text: 'Blue'
  }]}
                text-property="text"
                variant="pill"
                disabled
            ></cosmoz-autocomplete>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const {
      el,
      badge
    } = pillOf(canvasElement);
    await waitFor(() => expect(badge().hidden).toBe(false));
    badge().click();
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(el.hasAttribute('opened')).toBe(false);
  }
}`,...U.parameters?.docs?.source}}};const he=["RenderWithValue","RenderLimit1","SingleValueIsNotReadonly","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","CompactState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","ShortcutDoesNotClearValueWhenSelected","InputWithoutKeydownClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder","Required","SelectModeValueIsSingleItem","MultiModeValueIsArray","PillVariant","PillVariantFits","PillVariantKeepsValueWhileSearching","PillVariantDisabled"];export{B as BackspaceRemovesChip,q as CompactState,R as DefaultIndexNegative,v as DeselectChip,V as DeselectWithPreserveOrderAndValueProperty,D as DeselectWithValuePropertyWithoutPreserveOrder,E as DisabledNoChipClear,f as DisabledState,z as ExternalSearchMode,x as FocusOpensListbox,H as InputWithoutKeydownClearsValueWhenSelected,b as KeyboardSelectItem,F as LazyOpenHidesItems,P as LazyOpenSuppressesSource,_ as MultiModeValueIsArray,S as OnChangeCallback,T as OnSelectCallback,g as OnTextCallback,$ as OpenedChangedEvent,K as PillVariant,U as PillVariantDisabled,j as PillVariantFits,Y as PillVariantKeepsValueWhileSearching,O as ProgrammaticClose,A as ProgrammaticOpen,y as RenderLimit1,h as RenderWithValue,M as Required,N as SelectModeValueIsSingleItem,I as ShortcutDoesNotClearValueWhenSelected,w as SingleValueIsNotReadonly,k as TextValueEffects,W as TypingClearsValueWhenSelected,G as TypingDoesNotClearValueWhenMultiSelect,L as TypingDoesNotClearWhenDisabled,C as ValueProperty,he as __namedExportsOrder,me as default};
