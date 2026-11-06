import{b as d}from"./iframe-40yvxTIP.js";import"./index-D4gopX5w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8HAajyV.js";const{expect:o,fn:p,userEvent:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,de=({source:e,value:a,limit:t,textProperty:n="text",valueProperty:s,onChange:l,onText:u,onSelect:m,disabled:ee,compact:ae,defaultIndex:ne,text:ce,keepOpened:re,externalSearch:se,lazyOpen:le,preserveOrder:ie,required:ue,mode:pe})=>d`
    <cosmoz-autocomplete
        .source=${e}
        .value=${a}
        .limit=${t}
        .textProperty=${n}
        .valueProperty=${s}
        .onChange=${l}
        .onText=${u}
        .onSelect=${m}
        .defaultIndex=${ne}
        .text=${ce}
        ?lazy-open=${le}
        ?disabled=${ee}
        ?compact=${ae}
        ?required=${ue}
        ?keep-opened=${re}
        ?external-search=${se}
        ?preserve-order=${ie}
        .mode=${pe}
    ></cosmoz-autocomplete>
`,ve={title:"Tests/Autocomplete",render:de,tags:["!autodocs"],parameters:{layout:"fullscreen"}},c=[{text:"Red"},{text:"Green"},{text:"Blue"},{text:"Yellow"}],w={args:{source:c,value:[c[0],c[2]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(2)}},v={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete");o(t?.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},x={args:{source:c,value:[c[1]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("readonly")).toBe(!1),o(t?.shadowRoot?.querySelector("input")?.readOnly).toBe(!1)}},S={args:{source:c,value:[]},play:async({canvas:e})=>{const a=await e.findByShadowRole("textbox");await r.click(a);const t=await e.findByShadowRole("option",{name:/Red/u});o(t).toBeTruthy()}},g={args:{source:c,value:[c[0]],onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const l=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag")?.shadowRoot?.querySelector("button.close");o(l).toBeTruthy(),await r.click(l),await i(()=>{o(t.onChange).toHaveBeenCalledWith([],o.any(Function))})}},B={args:{source:c,value:[],onChange:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await r.click(n),await i(()=>{o(a.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))})}},b={args:{source:c,value:[],onText:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.type(t,"Gre"),await i(()=>{o(a.onText).toHaveBeenCalledWith("Gre")})}},R={args:{source:c,value:[c[0],c[1]],onChange:p()},play:async({canvas:e,args:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=await e.findByShadowRole("textbox");await r.click(t),await r.keyboard("{Backspace}"),await i(()=>{o(a.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))})}},f={args:{source:c,value:[],onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await e.findByShadowRole("option",{name:/Red/u}),await r.keyboard("{ArrowDown}"),await r.keyboard("{Enter}"),await i(()=>{o(a.onChange).toHaveBeenCalled()})}},E={args:{source:c,value:[],defaultIndex:-1},play:async({canvasElement:e})=>{const a=e.querySelector("cosmoz-autocomplete");o(a?.shadowRoot?.querySelectorAll(".chip").length??0).toBe(0)}},q={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const n=a.querySelector("cosmoz-autocomplete");o(n.hasAttribute("disabled")).toBe(!0);const s=n.shadowRoot?.querySelector("cosmoz-input");o(s?.hasAttribute("disabled")).toBe(!0);const l=n.shadowRoot?.querySelector("cosmoz-dropdown-next");o(l?.hasAttribute("disabled")).toBe(!0),await r.click(s),await new Promise(m=>setTimeout(m,200));const u=n.shadowRoot?.querySelector("cosmoz-listbox");o(u).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},k={args:{source:c,compact:!0},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(t?.hasAttribute("compact")).toBe(!0)}},C={args:{source:c,value:[c[0]],disabled:!0,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{await e.findByShadowText(/Red/u);const s=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-tag");o(s).toBeTruthy();const l=s?.shadowRoot?.querySelector("button.close");o(l).toBeFalsy(),o(t.onChange).not.toHaveBeenCalled()}},z={args:{source:c,value:[c[0]],text:"initial"},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const n=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-input");o(n).toBeTruthy()}},T={args:{source:c,value:[],externalSearch:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await r.type(t,"Red"),await i(()=>{const l=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(l?.length).toBe(4)})}},A={args:{source:[{id:1,text:"Item 1"},{id:2,text:"Item 2"}],value:[{id:1,text:"Item 1"}],valueProperty:"id",keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await i(()=>{const l=a.querySelector("cosmoz-autocomplete").shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(l?.length).toBe(2)})}},$={args:{source:c,value:[],onSelect:p(),keepOpened:!0},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Red/u});await r.click(n),await i(()=>{o(a.onSelect).toHaveBeenCalledWith(c[0],o.any(Object))})}},O={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete");o(t.opened).toBeFalsy(),o(t.hasAttribute("opened")).toBe(!1),t.opened=!0,await e.findByShadowRole("option",{name:/Red/u}),o(t.hasAttribute("opened")).toBe(!0)}},F={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),await e.findByShadowRole("option",{name:/Red/u}),t.opened=!1,await i(()=>{o(t.hasAttribute("opened")).toBe(!1),o(t.opened).toBe(!1)})}},P={args:{source:c,value:[]},play:async({canvas:e,canvasElement:a})=>{const t=a.querySelector("cosmoz-autocomplete"),n=[];t.addEventListener("opened-changed",(l=>{n.push(l.detail.value)}));const s=await e.findByShadowRole("textbox");await r.click(s),await i(()=>{o(n).toContain(!0)})}},I={args:{source:c,value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t),await new Promise(u=>setTimeout(u,200));const n=a.querySelector("cosmoz-autocomplete");let s=n.shadowRoot?.querySelector("cosmoz-listbox"),l=s?.shadowRoot?.querySelectorAll('.item[role="option"]');o(l?.length??0).toBe(0),await r.type(t,"R"),await i(()=>{s=n.shadowRoot?.querySelector("cosmoz-listbox"),l=s?.shadowRoot?.querySelectorAll('.item[role="option"]'),o(l?.length).toBeGreaterThan(0)})}},W={args:{value:[],lazyOpen:!0,keepOpened:!0},play:async({canvas:e,canvasElement:a})=>{const t=[],n=a.querySelector("cosmoz-autocomplete");n.source=l=>(t.push(l),Promise.resolve(c));const s=await e.findByShadowRole("textbox");await r.click(s),await new Promise(l=>setTimeout(l,200)),o(t.length).toBe(0),await r.type(s,"R"),await i(()=>{o(t.length).toBeGreaterThan(0)}),await i(()=>{const u=n.shadowRoot?.querySelector("cosmoz-listbox")?.shadowRoot?.querySelectorAll('.item[role="option"]');o(u?.length).toBeGreaterThan(0)})}},V={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(1);const s=await e.findByShadowRole("textbox");await r.click(s),await r.keyboard("G"),await i(()=>{const l=t.shadowRoot?.querySelectorAll(".chip");o(l?.length).toBe(0)}),o(s.value).toBe("G")}},L={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),n.dispatchEvent(new KeyboardEvent("keydown",{key:"c",metaKey:!0,bubbles:!0,composed:!0})),await new Promise(s=>setTimeout(s,100)),o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(1)}},H={args:{source:c,value:[c[0]],limit:1},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=await e.findByShadowRole("textbox");await r.click(n),n.value="Bl",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(()=>{o(t.shadowRoot?.querySelectorAll(".chip").length).toBe(0)}),o(n.value).toBe("Bl")}},G={args:{source:c,value:[c[0],c[1]]},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Green/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(2);const s=await e.findByShadowRole("textbox");await r.click(s),await r.keyboard("B"),await new Promise(u=>setTimeout(u,100));const l=t.shadowRoot?.querySelectorAll(".chip");o(l?.length).toBe(2)}},M={args:{source:c,value:[c[0]],limit:1,disabled:!0},play:async({canvas:e,canvasElement:a})=>{await e.findByShadowText(/Red/u);const t=a.querySelector("cosmoz-autocomplete"),n=t.shadowRoot?.querySelectorAll(".chip");o(n?.length).toBe(1);const s=await e.findByShadowRole("textbox");await r.click(s),await r.keyboard("G"),await new Promise(u=>setTimeout(u,100));const l=t.shadowRoot?.querySelectorAll(".chip");o(l?.length).toBe(1)}},te=[{id:1,text:"Item 1"},{id:2,text:"Item 2"},{id:3,text:"Item 3"}],D={args:{source:te,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!0,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});o(n).toBeTruthy(),await r.click(n),await i(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},N={args:{source:te,value:[{id:1,text:"Item 1"}],valueProperty:"id",preserveOrder:!1,keepOpened:!0,onChange:p()},play:async({canvas:e,args:a})=>{const t=await e.findByShadowRole("textbox");await r.click(t);const n=await e.findByShadowRole("option",{name:/Item 1/u});o(n).toBeTruthy(),await r.click(n),await i(()=>{o(a.onChange).toHaveBeenCalledWith([],o.any(Function))})}},K={args:{source:c,required:!0},play:async({canvas:e})=>{const a=document.querySelector("cosmoz-autocomplete");o(a?.hasAttribute("required")).toBe(!0);const t=await e.findByShadowRole("textbox");o(t.hasAttribute("required")).toBe(!0)}},_={args:{source:c,mode:"select",onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const n=await e.findByShadowRole("textbox");await r.click(n);const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await i(()=>{o(t.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))});const l=a.querySelector("cosmoz-autocomplete"),{value:u}=l;o(Array.isArray(u)).toBe(!1),o(u).toEqual(c[0])}},j={args:{source:c,limit:1,onChange:p()},play:async({canvas:e,canvasElement:a,args:t})=>{const n=await e.findByShadowRole("textbox");await r.click(n);const s=await e.findByShadowRole("option",{name:/Red/u});await r.click(s),await i(()=>{o(t.onChange).toHaveBeenCalledWith([c[0]],o.any(Function))});const l=a.querySelector("cosmoz-autocomplete"),{value:u}=l;o(Array.isArray(u)).toBe(!0),o(u).toEqual([c[0]])}},oe=e=>e.shadowRoot.querySelector("cosmoz-input").shadowRoot.querySelector('[part="error"]'),y={render:({value:e})=>d`
        <cosmoz-autocomplete
            variant="cell"
            invalid
            .errorMessage=${"Invalid value"}
            .source=${c}
            .textProperty=${"text"}
            .limit=${1}
            .value=${e}
        ></cosmoz-autocomplete>
    `,args:{value:[c[0]]},play:async()=>{const e=document.querySelector("cosmoz-autocomplete");await i(()=>o(getComputedStyle(oe(e)).visibility).toBe("hidden"))}},Y={...y,args:{value:[]},play:async()=>{const e=document.querySelector("cosmoz-autocomplete");await i(()=>o(getComputedStyle(oe(e)).visibility).toBe("visible"))}},h={render:()=>d`
        <div style="width: 320px">
            <cosmoz-autocomplete
                .source=${Array.from({length:12},(e,a)=>({text:`Label number ${a+1}`}))}
                .value=${Array.from({length:8},(e,a)=>({text:`Label number ${a+1}`}))}
                text-property="text"
                variant="pill"
                keep-opened
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter labels"}
            ></cosmoz-autocomplete>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-autocomplete"),n=u=>t.shadowRoot.querySelector(u),s=()=>n(".badge"),l=()=>n("cosmoz-dropdown-next").shadowRoot.querySelector("[popover]");await a("collapses what does not fit and keeps the add button",async()=>{await i(()=>o(s().hidden).toBe(!1));const u=n(".add").getBoundingClientRect(),m=n(".pill-row").getBoundingClientRect();o(u.right).toBeLessThanOrEqual(m.right);const ee=n('cosmoz-tooltip[for="overflow"]');o(s().getAttribute("name")).toBe("overflow"),o(s().hasAttribute("title")).toBe(!1),o(ee.getAttribute("description").split(", ").length).toBe(Number(s().textContent.trim().slice(1)))}),await a("the badge names the hidden labels on hover",async()=>{await r.hover(s()),await i(()=>o(n('[role="tooltip"]').matches(":popover-open")).toBe(!0)),o(n('[role="tooltip"]').textContent).toContain("Label number 8")}),await a("the badge opens the picker",async()=>{await r.click(s()),await i(()=>o(l().matches(":popover-open")).toBe(!0))}),await a("searches inside the popover, with checks on selected",async()=>{const u=()=>n("cosmoz-listbox");await i(()=>o(u().hasAttribute("checkmark")).toBe(!0)),await r.type(n("cosmoz-input.search").shadowRoot.querySelector("input"),"12"),await i(()=>o(u().shadowRoot.querySelectorAll(".item").length).toBe(1))})}},Z=e=>{const a=e.querySelector("cosmoz-autocomplete"),t=n=>a.shadowRoot.querySelector(n);return{el:a,$:t,badge:()=>t(".badge")}},U={render:()=>d`
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
    `,play:async({canvasElement:e})=>{const{el:a,badge:t}=Z(e);await i(()=>o(a.shadowRoot.querySelectorAll(".chip:not([hidden])").length).toBe(3)),o(t().hidden).toBe(!0),o(getComputedStyle(t()).display).toBe("none")}},J={render:()=>d`
        <cosmoz-autocomplete
            .source=${[{text:"Red"},{text:"Green"}]}
            .value=${[{text:"Red"},{text:"Green"}]}
            text-property="text"
            variant="pill"
            keep-opened
        ></cosmoz-autocomplete>
    `,play:async({canvasElement:e})=>{const{el:a,$:t}=Z(e);await r.click(t(".add"));const n=()=>t("cosmoz-input.search").shadowRoot.querySelector("input");await i(()=>o(n()).toBeTruthy()),await r.type(n(),"g{Backspace}{Backspace}{Backspace}"),o(a.value.length).toBe(2)}},Q={render:()=>d`
        <div style="width: 160px">
            <cosmoz-autocomplete
                .source=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                .value=${[{text:"Red"},{text:"Green"},{text:"Blue"}]}
                text-property="text"
                variant="pill"
                disabled
            ></cosmoz-autocomplete>
        </div>
    `,play:async({canvasElement:e})=>{const{el:a,badge:t}=Z(e);await i(()=>o(t().hidden).toBe(!1)),t().click(),await new Promise(n=>setTimeout(n,100)),o(a.hasAttribute("opened")).toBe(!1)}},X={...h,play:async({canvasElement:e})=>{const{$:a,badge:t}=Z(e),n=()=>a("cosmoz-dropdown-next").shadowRoot.querySelector("[popover]");await i(()=>o(t().hidden).toBe(!1)),o(t().tabIndex).toBe(0),t().focus(),await i(()=>o(t().matches(":focus")).toBe(!0)),await i(()=>o(a('[role="tooltip"]').matches(":popover-open")).toBe(!0)),o(a('[role="tooltip"]').textContent).toContain("Label number 8"),await r.keyboard("{Enter}"),await i(()=>o(n().matches(":popover-open")).toBe(!0))}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: ({
    value
  }) => html\`
        <cosmoz-autocomplete
            variant="cell"
            invalid
            .errorMessage=\${'Invalid value'}
            .source=\${colors}
            .textProperty=\${'text'}
            .limit=\${1}
            .value=\${value}
        ></cosmoz-autocomplete>
    \`,
  args: {
    value: [colors[0]]
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
    await waitFor(() => expect(getComputedStyle(cellError(autocomplete)).visibility).toBe('hidden'));
  }
}`,...y.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  ...CellErrorBehindValue,
  args: {
    value: []
  },
  play: async () => {
    const autocomplete = document.querySelector('cosmoz-autocomplete')!;
    await waitFor(() => expect(getComputedStyle(cellError(autocomplete)).visibility).toBe('visible'));
  }
}`,...Y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    const badge = () => $<HTMLElement>('.badge');
    const popover = () => $('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
    await step('collapses what does not fit and keeps the add button', async () => {
      await waitFor(() => expect(badge().hidden).toBe(false));
      const add = $<HTMLElement>('.add').getBoundingClientRect();
      const row = $<HTMLElement>('.pill-row').getBoundingClientRect();
      expect(add.right).toBeLessThanOrEqual(row.right);
      const tooltip = $<HTMLElement>('cosmoz-tooltip[for="overflow"]');
      expect(badge().getAttribute('name')).toBe('overflow');
      expect(badge().hasAttribute('title')).toBe(false);
      expect(tooltip.getAttribute('description')!.split(', ').length).toBe(Number(badge().textContent!.trim().slice(1)));
    });
    await step('the badge names the hidden labels on hover', async () => {
      await userEvent.hover(badge());
      await waitFor(() => expect($('[role="tooltip"]').matches(':popover-open')).toBe(true));
      expect($('[role="tooltip"]').textContent).toContain('Label number 8');
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
}`,...h.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    expect(getComputedStyle(badge()).display).toBe('none');
  }
}`,...U.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...PillVariant,
  play: async ({
    canvasElement
  }) => {
    const {
      $,
      badge
    } = pillOf(canvasElement);
    const popover = () => $('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
    await waitFor(() => expect(badge().hidden).toBe(false));
    expect(badge().tabIndex).toBe(0);
    badge().focus();
    await waitFor(() => expect(badge().matches(':focus')).toBe(true));
    await waitFor(() => expect($('[role="tooltip"]').matches(':popover-open')).toBe(true));
    expect($('[role="tooltip"]').textContent).toContain('Label number 8');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(popover().matches(':popover-open')).toBe(true));
  }
}`,...X.parameters?.docs?.source}}};const xe=["RenderWithValue","RenderLimit1","SingleValueIsNotReadonly","FocusOpensListbox","DeselectChip","OnChangeCallback","OnTextCallback","BackspaceRemovesChip","KeyboardSelectItem","DefaultIndexNegative","DisabledState","CompactState","DisabledNoChipClear","TextValueEffects","ExternalSearchMode","ValueProperty","OnSelectCallback","ProgrammaticOpen","ProgrammaticClose","OpenedChangedEvent","LazyOpenHidesItems","LazyOpenSuppressesSource","TypingClearsValueWhenSelected","ShortcutDoesNotClearValueWhenSelected","InputWithoutKeydownClearsValueWhenSelected","TypingDoesNotClearValueWhenMultiSelect","TypingDoesNotClearWhenDisabled","DeselectWithPreserveOrderAndValueProperty","DeselectWithValuePropertyWithoutPreserveOrder","Required","SelectModeValueIsSingleItem","MultiModeValueIsArray","CellErrorBehindValue","CellErrorWithoutValue","PillVariant","PillVariantFits","PillVariantKeepsValueWhileSearching","PillVariantDisabled","PillVariantKeyboardOverflow"];export{R as BackspaceRemovesChip,y as CellErrorBehindValue,Y as CellErrorWithoutValue,k as CompactState,E as DefaultIndexNegative,g as DeselectChip,D as DeselectWithPreserveOrderAndValueProperty,N as DeselectWithValuePropertyWithoutPreserveOrder,C as DisabledNoChipClear,q as DisabledState,T as ExternalSearchMode,S as FocusOpensListbox,H as InputWithoutKeydownClearsValueWhenSelected,f as KeyboardSelectItem,I as LazyOpenHidesItems,W as LazyOpenSuppressesSource,j as MultiModeValueIsArray,B as OnChangeCallback,$ as OnSelectCallback,b as OnTextCallback,P as OpenedChangedEvent,h as PillVariant,Q as PillVariantDisabled,U as PillVariantFits,J as PillVariantKeepsValueWhileSearching,X as PillVariantKeyboardOverflow,F as ProgrammaticClose,O as ProgrammaticOpen,v as RenderLimit1,w as RenderWithValue,K as Required,_ as SelectModeValueIsSingleItem,L as ShortcutDoesNotClearValueWhenSelected,x as SingleValueIsNotReadonly,z as TextValueEffects,V as TypingClearsValueWhenSelected,G as TypingDoesNotClearValueWhenMultiSelect,M as TypingDoesNotClearWhenDisabled,A as ValueProperty,xe as __namedExportsOrder,ve as default};
