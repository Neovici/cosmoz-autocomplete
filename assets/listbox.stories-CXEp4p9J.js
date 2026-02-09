import{p as E}from"./index-FoZG5IOF.js";import{b as A}from"./iframe-CGsgARI7.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:r,userEvent:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,C=({items:e,textual:a,query:S,onSelect:i,value:v,valueProperty:k,defaultIndex:B})=>A`
    <cosmoz-listbox
        .items=${e}
        .textual=${a}
        .query=${S}
        .onSelect=${i}
        .value=${v}
        .valueProperty=${k}
        .defaultIndex=${B}
    ></cosmoz-listbox>
`,n=async()=>{const e=document.querySelector("cosmoz-listbox");await new Promise(a=>{e?.addEventListener("layout-complete",()=>a(),{once:!0})})},F={title:"Tests/Listbox",render:C,tags:["!autodocs"]},c={args:{items:["Item 0","Item 1","Item 2"]},play:async()=>{await n();const a=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]');t(a?.length).toBe(3),t(a?.[0]?.textContent?.trim()).toBe("Item 0"),t(a?.[1]?.textContent?.trim()).toBe("Item 1"),t(a?.[2]?.textContent?.trim()).toBe("Item 2")}},l={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},m={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},d={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Cherry"}],textual:E("text")},play:async()=>{await n();const a=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector('.item[role="option"]');t(a?.textContent?.trim()).toBe("Apple")}},u={args:{items:[{text:"Apple"},{text:"Banana"},{text:"Apricot"}],textual:E("text"),query:"an"},play:async()=>{await n();const a=document.querySelector("cosmoz-listbox").shadowRoot?.querySelector("mark");t(a).toBeTruthy(),t(a?.textContent).toBe("an")}},w={args:{items:["Click me","Or me","Or this one"],onSelect:r()},play:async({args:e})=>{await n();const i=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[1];t(i).toBeTruthy(),await o.click(i),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Or me")})}},y={args:{items:["First","Second","Third"],defaultIndex:1,onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Second",1)})}},p={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},b={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowUp}"),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},x={args:{items:["Item 0","Item 1","Item 2","Item 3"],onSelect:r()},play:async({args:e})=>{await n();const i=document.querySelector("cosmoz-listbox").shadowRoot?.querySelectorAll('.item[role="option"]')?.[2];t(i).toBeTruthy(),i.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}},I={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},g={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),document.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown",ctrlKey:!0,altKey:!0,bubbles:!0})),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,altKey:!0,bubbles:!0})),t(e.onSelect).not.toHaveBeenCalled(),await o.keyboard("{Enter}"),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 0",0)})}},h={args:{items:["Item 0","Item 1","Item 2"],onSelect:r()},play:async({args:e})=>{await n(),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Down",bubbles:!0,cancelable:!0})),await new Promise(a=>setTimeout(a,50)),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Down",bubbles:!0,cancelable:!0})),await new Promise(a=>setTimeout(a,50)),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0})),await s(()=>{t(e.onSelect).toHaveBeenCalledWith("Item 2",2)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // Ctrl+Alt+ArrowDown should be ignored by the keyboard handler
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      ctrlKey: true,
      altKey: true,
      bubbles: true
    }));
    // Ctrl+Alt+Enter should also be ignored
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      ctrlKey: true,
      altKey: true,
      bubbles: true
    }));

    // onSelect should NOT have been called
    expect(args.onSelect).not.toHaveBeenCalled();

    // Now press Enter without modifiers — should select default index 0
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
    });
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: ['Item 0', 'Item 1', 'Item 2'],
    onSelect: fn()
  },
  play: async ({
    args
  }) => {
    await waitForLayout();

    // Use legacy 'Down' key name (without 'Arrow' prefix)
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Down',
      bubbles: true,
      cancelable: true
    }));
    // Small delay to allow state update between key events
    await new Promise(r => setTimeout(r, 50));
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Down',
      bubbles: true,
      cancelable: true
    }));
    await new Promise(r => setTimeout(r, 50));
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    }));
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
    });
  }
}`,...h.parameters?.docs?.source}}};const H=["Basic","KeyboardNavigation","KeyboardCycling","TextualProperty","QueryHighlight","MouseInteraction","DefaultIndex","KeyboardDownCycling","KeyboardUpNavigation","HighlightAndEnter","EnterDefaultIndex0","CtrlAltIgnoresKeys","LegacyKeyNames"];export{c as Basic,g as CtrlAltIgnoresKeys,y as DefaultIndex,I as EnterDefaultIndex0,x as HighlightAndEnter,m as KeyboardCycling,p as KeyboardDownCycling,l as KeyboardNavigation,b as KeyboardUpNavigation,h as LegacyKeyNames,w as MouseInteraction,u as QueryHighlight,d as TextualProperty,H as __namedExportsOrder,F as default};
