import{p as h}from"./index-Bc9w9qKN.js";import{b as k}from"./iframe-Bmge3YME.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:n,userEvent:a,waitFor:s}=__STORYBOOK_MODULE_TEST__,B=({items:e,textual:o,query:g,onSelect:i,value:S,valueProperty:E,defaultIndex:v})=>k`
    <cosmoz-listbox
        .items=${e}
        .textual=${o}
        .query=${g}
        .onSelect=${i}
        .value=${S}
        .valueProperty=${E}
        .defaultIndex=${v}
    ></cosmoz-listbox>
`,r=async()=>{const e=document.querySelector("cosmoz-listbox");await new Promise(o=>{e?.addEventListener("layout-complete",()=>o(),{once:!0})})},q={title:"Tests/Listbox",render:B,tags:["!autodocs"]},c={args:{items:["Item 0","Item 1","Item 2"]},play:async()=>{await r();const o=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]');t(o?.length).toBe(3),t(o?.[0]?.textContent?.trim()).toBe("Item 0"),t(o?.[1]?.textContent?.trim()).toBe("Item 1"),t(o?.[2]?.textContent?.trim()).toBe("Item 2")}},l={args:{items:["Item 0","Item 1","Item 2"],onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},m={args:{items:["Item 0","Item 1","Item 2"],onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowUp}"),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},d={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Cherry"}],textual:h("text")},play:async()=>{await r();const o=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector('.item[role="option"]');t(o?.textContent?.trim()).toBe("Apple")}},w={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Apricot"}],textual:h("text"),query:"an"},play:async()=>{await r();const o=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector("mark");t(o).toBeTruthy(),t(o?.textContent).toBe("an")}},u={args:{items:["Click me","Or me","Or this one"],onSelect:n()},play:async({args:e})=>{await r();const i=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[1];t(i).toBeTruthy(),await a.click(i),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Or me")})}},y={args:{items:["First","Second","Third"],defaultIndex:1,onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Second",1)})}},p={args:{items:["Item 0","Item 1","Item 2"],onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},x={args:{items:["Item 0","Item 1","Item 2"],onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowUp}"),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},b={args:{items:["Item 0","Item 1","Item 2","Item 3"],onSelect:n()},play:async({args:e})=>{await r();const i=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[2];t(i).toBeTruthy(),i.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},I={args:{items:["Item 0","Item 1","Item 2"],onSelect:n()},play:async({args:e})=>{await r(),await a.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const F=["Basic","KeyboardNavigation","KeyboardCycling","TextualProperty","QueryHighlight","MouseInteraction","DefaultIndex","KeyboardDownCycling","KeyboardUpNavigation","HighlightAndEnter","EnterDefaultIndex0"];export{c as Basic,y as DefaultIndex,I as EnterDefaultIndex0,b as HighlightAndEnter,m as KeyboardCycling,p as KeyboardDownCycling,l as KeyboardNavigation,x as KeyboardUpNavigation,u as MouseInteraction,w as QueryHighlight,d as TextualProperty,F as __namedExportsOrder,q as default};
