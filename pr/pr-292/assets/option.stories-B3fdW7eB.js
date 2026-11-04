import{A as w,b as s}from"./iframe-B76lpf05.js";import{c as x}from"./index-CjXYS1P6.js";import{a as f}from"./index-CbHuQBus.js";import"./preload-helper-PPVm8Dsz.js";const v=(e,t)=>s`<span class="option-line"
		><span class="option-label">${e}</span>${t?s`<span class="option-description">${t}</span>`:w}</span
	>`,h=(e,t)=>t==null||t===w||t===""?w:s`<span class=${e}>${t}</span>`,S=({label:e,description:t,hint:a,media:y,trailing:g}={})=>({itemRenderer:f((o,r)=>r==null?o:s`<span class="option"
					>${h("option-media",y?.(r))}<span class="option-text"
						>${v(e?e(r,o):o,t?.(r))}${h("option-hint",a?.(r))}</span
					>${h("option-trailing",g?.(r))}</span
				>`),chipRenderer:o=>x({...o,content:o.item==null?o.content:v(e?e(o.item,o.content):o.content,t?.(o.item))})}),{expect:n,userEvent:i,waitFor:B}=__STORYBOOK_MODULE_TEST__,c=[{code:"102989",name:"PLC Recovery",approver:"Patrik Petersson"},{code:"102997",name:"Expense fall back",approver:"Patrik Petersson"},{code:"104989",name:"Material overhead",approver:"Mattias Berggren"},{code:"111200",name:"Quality assurance"}],{itemRenderer:R,chipRenderer:$}=S({description:e=>e.name,hint:e=>e.approver?`Approver: ${e.approver}`:void 0}),O={title:"Tests/Option",tags:["!autodocs"],render:({value:e,suffix:t})=>s`<cosmoz-autocomplete
            .label=${"Cost center"}
            mode="select"
            preserve-order
            item-height="auto"
            .source=${c}
            .value=${e}
            .textProperty=${"code"}
            .itemRenderer=${R}
            .chipRenderer=${$}
            >${t?s`<span slot="suffix">${t}</span>`:""}</cosmoz-autocomplete
        >`},l={args:{value:c[1]},play:async({canvas:e})=>{await i.click(await e.findByShadowRole("textbox"));const t=await e.findByShadowRole("option",{name:/^104989\s*Material overhead\s*Approver: Mattias Berggren$/u});n(t).toBeTruthy(),await e.findByShadowRole("option",{name:/^111200\s*Quality assurance$/u})}},p={args:{value:c[1]},play:async({canvas:e})=>{await i.click(await e.findByShadowRole("textbox"));const t=await e.findByShadowRole("option",{name:/^102997/u}),a=await e.findByShadowRole("option",{name:/^102989/u});n(t.getAttribute("aria-selected")).not.toBeNull(),n(a.getAttribute("aria-selected")).toBeNull();const y=await e.findAllByShadowRole("option");n(y.indexOf(t)).toBe(1)}},d={args:{value:c[1]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Expense fall back/u);const a=t.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector(".chip");await B(()=>n(a?.textContent?.replace(/\s+/gu," ").trim()).toBe("102997Expense fall back")),n(a?.textContent).not.toContain("Approver")}},u={args:{value:c[1],suffix:"★"},play:async({canvasElement:e,canvas:t})=>{await t.findByShadowText("★");const a=e.querySelector("cosmoz-autocomplete")?.shadowRoot;n(a?.querySelector('[slot="suffix"].chevron-selector-vertical-icon')).not.toBeNull()}},b=[{title:"Safety vest",number:"A-1001",price:"€12.00",image:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="orange"/></svg>')}`},{title:"Work gloves",number:"A-2002",price:"€4.50"}],k=S({media:e=>e.image?s`<img src=${e.image} alt="" />`:"#",hint:e=>e.number,trailing:e=>e.price}),m={render:()=>s`<cosmoz-autocomplete
            .label=${"Catalog"}
            .source=${b}
            .textProperty=${"title"}
            item-height="64"
            .itemRenderer=${k.itemRenderer}
        ></cosmoz-autocomplete>`,play:async({canvas:e})=>{await i.click(await e.findByShadowRole("textbox")),await i.keyboard("vest");const t=await e.findByShadowRole("option",{name:/^Safety vest\s*A-1001\s*€12\.00$/u});n(t.querySelector(".option-label mark")?.textContent).toBe("vest"),n(t.querySelector(".option-media img")).not.toBeNull(),await i.keyboard("{Backspace>4/}gloves");const a=await e.findByShadowRole("option",{name:/^#\s*Work gloves/u});n(a.querySelector(".option-trailing")?.textContent).toBe("€4.50")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByShadowRole('textbox'));
    const option = await canvas.findByShadowRole('option', {
      name: /^104989\\s*Material overhead\\s*Approver: Mattias Berggren$/u
    });
    expect(option).toBeTruthy();
    // without a hint, the option is label and description only
    await canvas.findByShadowRole('option', {
      name: /^111200\\s*Quality assurance$/u
    });
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByShadowRole('textbox'));
    const selected = await canvas.findByShadowRole('option', {
      name: /^102997/u
    });
    const other = await canvas.findByShadowRole('option', {
      name: /^102989/u
    });
    expect(selected.getAttribute('aria-selected')).not.toBeNull();
    expect(other.getAttribute('aria-selected')).toBeNull();
    // the order is kept: the selected option stays second
    const options = await canvas.findAllByShadowRole('option');
    expect(options.indexOf(selected)).toBe(1);
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByShadowText(/Expense fall back/u);
    const chip = canvasElement.querySelector('cosmoz-autocomplete')?.shadowRoot?.querySelector('.chip');
    await waitFor(() => expect(chip?.textContent?.replace(/\\s+/gu, ' ').trim()).toBe('102997Expense fall back'));
    // the hint belongs to the open list only
    expect(chip?.textContent).not.toContain('Approver');
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1],
    suffix: '★'
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    await canvas.findByShadowText('★');
    const root = canvasElement.querySelector('cosmoz-autocomplete')?.shadowRoot;
    expect(root?.querySelector('[slot="suffix"].chevron-selector-vertical-icon')).not.toBeNull();
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-autocomplete
            .label=\${'Catalog'}
            .source=\${articles}
            .textProperty=\${'title'}
            item-height="64"
            .itemRenderer=\${catalog.itemRenderer}
        ></cosmoz-autocomplete>\`,
  play: async ({
    canvas
  }) => {
    await userEvent.click(await canvas.findByShadowRole('textbox'));
    await userEvent.keyboard('vest');
    const option = await canvas.findByShadowRole('option', {
      name: /^Safety vest\\s*A-1001\\s*€12\\.00$/u
    });
    // the query is marked in the default label
    expect(option.querySelector('.option-label mark')?.textContent).toBe('vest');
    expect(option.querySelector('.option-media img')).not.toBeNull();
    // no media, no empty square
    await userEvent.keyboard('{Backspace>4/}gloves');
    const plain = await canvas.findByShadowRole('option', {
      name: /^#\\s*Work gloves/u
    });
    expect(plain.querySelector('.option-trailing')?.textContent).toBe('€4.50');
  }
}`,...m.parameters?.docs?.source}}};const T=["OptionShowsDescriptionAndHint","SelectedOptionIsMarked","FieldShowsLabelAndDescription","ChevronStaysNextToSuffix","OptionShowsMediaAndTrailing"];export{u as ChevronStaysNextToSuffix,d as FieldShowsLabelAndDescription,l as OptionShowsDescriptionAndHint,m as OptionShowsMediaAndTrailing,p as SelectedOptionIsMarked,T as __namedExportsOrder,O as default};
