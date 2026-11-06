import{p as E}from"./index-COuJCvOg.js";import{b as C}from"./iframe-DAhghDMU.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,fn:i,userEvent:a,waitFor:n}=__STORYBOOK_MODULE_TEST__,q=({items:e,textual:t,query:s,onSelect:c,value:k,valueProperty:v,defaultIndex:A,itemLimit:f})=>C`
    <cosmoz-listbox
        .items=${e}
        .textual=${t}
        .query=${s}
        .onSelect=${c}
        .value=${k}
        .valueProperty=${v}
        .defaultIndex=${A}
        .itemLimit=${f}
    ></cosmoz-listbox>
`,r=async()=>{const e=document.querySelector("cosmoz-listbox");await new Promise(t=>{e?.addEventListener("layout-complete",()=>t(),{once:!0})})},L={title:"Tests/Listbox",render:q,tags:["!autodocs"],parameters:{layout:"fullscreen"}},l={args:{items:["Item 0","Item 1","Item 2"]},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]');o(t?.length).toBe(3),o(t?.[0]?.textContent?.trim()).toBe("Item 0"),o(t?.[1]?.textContent?.trim()).toBe("Item 1"),o(t?.[2]?.textContent?.trim()).toBe("Item 2")}},m={args:{items:Array.from({length:20},(e,t)=>`Item ${t}`),itemLimit:5},play:async()=>{await r();const e=document.querySelector("cosmoz-listbox").shadowRoot.querySelector(".items");o(e.scrollHeight).toBeGreaterThan(e.clientHeight),o(e.getAttribute("tabindex")).toBe("-1")}},d={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},w={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowUp}"),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},u={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Cherry"}],textual:E("text")},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector('.item[role="option"]');o(t?.textContent?.trim()).toBe("Apple")}},y={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Apricot"}],textual:E("text"),query:"an"},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector("mark");o(t).toBeTruthy(),o(t?.textContent).toBe("an")}},p={args:{items:["Click me","Or me","Or this one"],onSelect:i()},play:async({args:e})=>{await r();const c=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[1];o(c).toBeTruthy(),await a.click(c),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Or me")})}},x={args:{items:["First","Second","Third"],defaultIndex:1,onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Second",1)})}},g={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},b={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowUp}"),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},h={args:{items:["Item 0","Item 1","Item 2","Item 3"],onSelect:i()},play:async({args:e})=>{await r();const c=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[2];o(c).toBeTruthy(),c.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},I={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await r(),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},B=e=>{const t=e.shadowRoot.querySelectorAll('.item[role="option"]');for(const s of t)if(getComputedStyle(s).backgroundColor!=="rgba(0, 0, 0, 0)")return Number(s.getAttribute("data-index"));return-1},S={args:{items:Array.from({length:10},(e,t)=>`Item ${t}`),itemLimit:5,onSelect:i()},play:async({args:e})=>{await r();const t=document.querySelector("cosmoz-listbox");await n(()=>{o(B(t)).toBe(0)});for(let s=1;s<10;s++)await a.keyboard("{ArrowDown}"),await n(()=>{o(B(t)).toBe(s)});await a.keyboard("{ArrowDown}"),await n(()=>{o(B(t)).toBe(0)}),await a.keyboard("{Enter}"),await n(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2']
  },
  play: async () => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;
    const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
    expect(items?.length).toBe(3);
    expect(items?.[0]?.textContent?.trim()).toBe('Item 0');
    expect(items?.[1]?.textContent?.trim()).toBe('Item 1');
    expect(items?.[2]?.textContent?.trim()).toBe('Item 2');
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 20
    }, (_, i) => \`Item \${i}\`),
    itemLimit: 5
  },
  play: async () => {
    await waitForLayout();
    const items = document.querySelector('cosmoz-listbox')!.shadowRoot!.querySelector<HTMLElement>('.items')!;
    // scroll containers are keyboard focusable; the input keeps focus instead
    expect(items.scrollHeight).toBeGreaterThan(items.clientHeight);
    expect(items.getAttribute('tabindex')).toBe('-1');
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // Arrow down moves to next item
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');

    // Enter selects the highlighted item (index 2)
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
    });
  }
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // Arrow up from first item cycles to last
    await userEvent.keyboard('{ArrowUp}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
    });
  }
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Apple'
    }, {
      text: 'Banana'
    }, {
      text: 'Cherry'
    }],
    textual: prop('text')
  },
  play: async () => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;
    const firstItem = listbox.shadowRoot?.querySelector('.item[role="option"]');
    expect(firstItem?.textContent?.trim()).toBe('Apple');
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Apple'
    }, {
      text: 'Banana'
    }, {
      text: 'Apricot'
    }],
    textual: prop('text'),
    query: 'an'
  },
  play: async () => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;
    // The 'an' in 'Banana' should be highlighted with <mark>
    const mark = listbox.shadowRoot?.querySelector('mark');
    expect(mark).toBeTruthy();
    expect(mark?.textContent).toBe('an');
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Click me', 'Or me', 'Or this one'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;
    const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
    const secondItem = items?.[1];
    expect(secondItem).toBeTruthy();
    await userEvent.click(secondItem!);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Or me');
    });
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['First', 'Second', 'Third'],
    defaultIndex: 1,
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // Enter should select the default index (1 = 'Second')
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Second', 1);
    });
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // ArrowDown 3 times: index 0 → 1 → 2 → wraps to 0
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
    });
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // ArrowDown to index 1, then ArrowUp back to index 0
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowUp}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
    });
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2', 'Item 3'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;
    const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
    const targetItem = items?.[2];
    expect(targetItem).toBeTruthy();

    // Dispatch mouseenter to highlight item at index 2
    targetItem!.dispatchEvent(new MouseEvent('mouseenter', {
      bubbles: true
    }));

    // Enter should select the highlighted item
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
    });
  }
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // With default defaultIndex (0), Enter immediately selects first item
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
    });
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 10
    }, (_, i) => \`Item \${i}\`),
    itemLimit: 5,
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();
    const listbox = document.querySelector('cosmoz-listbox')!;

    // Initial highlight should be on index 0
    await waitFor(() => {
      expect(getHighlightedIndex(listbox)).toBe(0);
    });

    // Arrow down through all items, verifying highlight at each step
    for (let i = 1; i < 10; i++) {
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => {
        expect(getHighlightedIndex(listbox)).toBe(i);
      });
    }

    // One more ArrowDown wraps back to 0
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(getHighlightedIndex(listbox)).toBe(0);
    });

    // Enter selects the wrapped-around item
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
    });
  }
}`,...S.parameters?.docs?.source}}};const T=["Basic","NoTabStop","KeyboardNavigation","KeyboardCycling","TextualProperty","QueryHighlight","MouseInteraction","DefaultIndex","KeyboardDownCycling","KeyboardUpNavigation","HighlightAndEnter","EnterDefaultIndex0","KeyboardFullCycle"];export{l as Basic,x as DefaultIndex,I as EnterDefaultIndex0,h as HighlightAndEnter,w as KeyboardCycling,g as KeyboardDownCycling,S as KeyboardFullCycle,d as KeyboardNavigation,b as KeyboardUpNavigation,p as MouseInteraction,m as NoTabStop,y as QueryHighlight,u as TextualProperty,T as __namedExportsOrder,L as default};
