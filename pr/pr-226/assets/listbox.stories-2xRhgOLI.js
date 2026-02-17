import{p as E}from"./index-Bh_R0YZt.js";import{b as C}from"./iframe-DmOlgqGO.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,fn:i,userEvent:o,waitFor:r}=__STORYBOOK_MODULE_TEST__,f=({items:e,textual:t,query:s,onSelect:c,value:v,valueProperty:k,defaultIndex:B,itemLimit:A})=>C`
    <cosmoz-listbox
        .items=${e}
        .textual=${t}
        .query=${s}
        .onSelect=${c}
        .value=${v}
        .valueProperty=${k}
        .defaultIndex=${B}
        .itemLimit=${A}
    ></cosmoz-listbox>
`,n=async()=>{const e=document.querySelector("cosmoz-listbox");await new Promise(t=>{e?.addEventListener("layout-complete",()=>t(),{once:!0})})},H={title:"Tests/Listbox",render:f,tags:["!autodocs"]},l={args:{items:["Item 0","Item 1","Item 2"]},play:async()=>{await n();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]');a(t?.length).toBe(3),a(t?.[0]?.textContent?.trim()).toBe("Item 0"),a(t?.[1]?.textContent?.trim()).toBe("Item 1"),a(t?.[2]?.textContent?.trim()).toBe("Item 2")}},m={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},d={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},w={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Cherry"}],textual:E("text")},play:async()=>{await n();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector('.item[role="option"]');a(t?.textContent?.trim()).toBe("Apple")}},u={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Apricot"}],textual:E("text"),query:"an"},play:async()=>{await n();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector("mark");a(t).toBeTruthy(),a(t?.textContent).toBe("an")}},y={args:{items:["Click me","Or me","Or this one"],onSelect:i()},play:async({args:e})=>{await n();const c=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[1];a(c).toBeTruthy(),await o.click(c),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Or me")})}},p={args:{items:["First","Second","Third"],defaultIndex:1,onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Second",1)})}},x={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},g={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},b={args:{items:["Item 0","Item 1","Item 2","Item 3"],onSelect:i()},play:async({args:e})=>{await n();const c=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[2];a(c).toBeTruthy(),c.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},h={args:{items:["Item 0","Item 1","Item 2"],onSelect:i()},play:async({args:e})=>{await n(),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},S=e=>{const t=e.shadowRoot.querySelectorAll('.item[role="option"]');for(const s of t)if(getComputedStyle(s).backgroundColor!=="rgba(0, 0, 0, 0)")return Number(s.getAttribute("data-index"));return-1},I={args:{items:Array.from({length:10},(e,t)=>`Item ${t}`),itemLimit:5,onSelect:i()},play:async({args:e})=>{await n();const t=document.querySelector("cosmoz-listbox");await r(()=>{a(S(t)).toBe(0)});for(let s=1;s<10;s++)await o.keyboard("{ArrowDown}"),await r(()=>{a(S(t)).toBe(s)});await o.keyboard("{ArrowDown}"),await r(()=>{a(S(t)).toBe(0)}),await o.keyboard("{Enter}"),await r(()=>{a(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const L=["Basic","KeyboardNavigation","KeyboardCycling","TextualProperty","QueryHighlight","MouseInteraction","DefaultIndex","KeyboardDownCycling","KeyboardUpNavigation","HighlightAndEnter","EnterDefaultIndex0","KeyboardFullCycle"];export{l as Basic,p as DefaultIndex,h as EnterDefaultIndex0,b as HighlightAndEnter,d as KeyboardCycling,x as KeyboardDownCycling,I as KeyboardFullCycle,m as KeyboardNavigation,g as KeyboardUpNavigation,y as MouseInteraction,u as QueryHighlight,w as TextualProperty,L as __namedExportsOrder,H as default};
