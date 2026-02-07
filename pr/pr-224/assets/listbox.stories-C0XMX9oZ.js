import{p as w}from"./index-CzBPqUxa.js";import{b as h}from"./iframe-BAmpi8eB.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,fn:p,userEvent:a,waitFor:y}=__STORYBOOK_MODULE_TEST__,I=({items:e,textual:t,query:x,onSelect:n,value:b,valueProperty:S,defaultIndex:g})=>h`
    <cosmoz-listbox
        .items=${e}
        .textual=${t}
        .query=${x}
        .onSelect=${n}
        .value=${b}
        .valueProperty=${S}
        .defaultIndex=${g}
    ></cosmoz-listbox>
`,r=async()=>{const e=document.querySelector("cosmoz-listbox");await new Promise(t=>{e?.addEventListener("layout-complete",()=>t(),{once:!0})})},v={title:"Tests/Listbox",render:I,tags:["!autodocs"]},s={args:{items:["Item 0","Item 1","Item 2"]},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]');o(t?.length).toBe(3),o(t?.[0]?.textContent?.trim()).toBe("Item 0"),o(t?.[1]?.textContent?.trim()).toBe("Item 1"),o(t?.[2]?.textContent?.trim()).toBe("Item 2")}},i={args:{items:["Item 0","Item 1","Item 2"],onSelect:p()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await a.keyboard("{Enter}"),await y(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},c={args:{items:["Item 0","Item 1","Item 2"],onSelect:p()},play:async({args:e})=>{await r(),await a.keyboard("{ArrowUp}"),await a.keyboard("{Enter}"),await y(()=>{o(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},l={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Cherry"}],textual:w("text")},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector('.item[role="option"]');o(t?.textContent?.trim()).toBe("Apple")}},m={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Apricot"}],textual:w("text"),query:"an"},play:async()=>{await r();const t=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector("mark");o(t).toBeTruthy(),o(t?.textContent).toBe("an")}},d={args:{items:["Click me","Or me","Or this one"],onSelect:p()},play:async({args:e})=>{await r();const n=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[1];o(n).toBeTruthy(),await a.click(n),await y(()=>{o(e.onSelect).toHaveBeenCalledWith("Or me")})}},u={args:{items:["First","Second","Third"],defaultIndex:1,onSelect:p()},play:async({args:e})=>{await r(),await a.keyboard("{Enter}"),await y(()=>{o(e.onSelect).toHaveBeenCalledWith("Second",1)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const q=["Basic","KeyboardNavigation","KeyboardCycling","TextualProperty","QueryHighlight","MouseInteraction","DefaultIndex"];export{s as Basic,u as DefaultIndex,c as KeyboardCycling,i as KeyboardNavigation,d as MouseInteraction,m as QueryHighlight,l as TextualProperty,q as __namedExportsOrder,v as default};
