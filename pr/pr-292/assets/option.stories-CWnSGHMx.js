import{A as h,b as s}from"./iframe-gHJpBhM8.js";import{c as y}from"./index-C2wa4IOS.js";import{a as v}from"./index-5mT1tv9Q.js";import"./preload-helper-PPVm8Dsz.js";const m=(e,t)=>s`<span class="option-line"
		><span class="option-label">${e}</span>${t?s`<span class="option-description">${t}</span>`:h}</span
	>`,x=({label:e,description:t,hint:a}={})=>({itemRenderer:v((o,d)=>{const u=a?.(d);return[m(e?e(d):o,t?.(d)),u?s`<span class="option-hint">${u}</span>`:h]}),chipRenderer:o=>y({...o,content:o.item==null?o.content:m(e?e(o.item):o.content,t?.(o.item))})}),{expect:n,userEvent:w,waitFor:S}=__STORYBOOK_MODULE_TEST__,r=[{code:"102989",name:"PLC Recovery",approver:"Patrik Petersson"},{code:"102997",name:"Expense fall back",approver:"Patrik Petersson"},{code:"104989",name:"Material overhead",approver:"Mattias Berggren"},{code:"111200",name:"Quality assurance"}],{itemRenderer:f,chipRenderer:B}=x({description:e=>e.name,hint:e=>e.approver?`Approver: ${e.approver}`:void 0}),A={title:"Tests/Option",tags:["!autodocs"],render:({value:e,suffix:t})=>s`<cosmoz-autocomplete
            .label=${"Cost center"}
            mode="select"
            preserve-order
            item-height="auto"
            .source=${r}
            .value=${e}
            .textProperty=${"code"}
            .itemRenderer=${f}
            .chipRenderer=${B}
            >${t?s`<span slot="suffix">${t}</span>`:""}</cosmoz-autocomplete
        >`},c={args:{value:r[1]},play:async({canvas:e})=>{await w.click(await e.findByShadowRole("textbox"));const t=await e.findByShadowRole("option",{name:/^104989\s*Material overhead\s*Approver: Mattias Berggren$/u});n(t).toBeTruthy(),await e.findByShadowRole("option",{name:/^111200\s*Quality assurance$/u})}},i={args:{value:r[1]},play:async({canvas:e})=>{await w.click(await e.findByShadowRole("textbox"));const t=await e.findByShadowRole("option",{name:/^102997/u}),a=await e.findByShadowRole("option",{name:/^102989/u});n(t.getAttribute("aria-selected")).not.toBeNull(),n(a.getAttribute("aria-selected")).toBeNull();const o=await e.findAllByShadowRole("option");n(o.indexOf(t)).toBe(1)}},l={args:{value:r[1]},play:async({canvas:e,canvasElement:t})=>{await e.findByShadowText(/Expense fall back/u);const a=t.querySelector("cosmoz-autocomplete")?.shadowRoot?.querySelector(".chip");await S(()=>n(a?.textContent?.replace(/\s+/gu," ").trim()).toBe("102997Expense fall back")),n(a?.textContent).not.toContain("Approver")}},p={args:{value:r[1],suffix:"★"},play:async({canvasElement:e,canvas:t})=>{await t.findByShadowText("★");const a=e.querySelector("cosmoz-autocomplete")?.shadowRoot;n(a?.querySelector('[slot="suffix"].chevron-selector-vertical-icon')).not.toBeNull()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const C=["OptionShowsDescriptionAndHint","SelectedOptionIsMarked","FieldShowsLabelAndDescription","ChevronStaysNextToSuffix"];export{p as ChevronStaysNextToSuffix,l as FieldShowsLabelAndDescription,c as OptionShowsDescriptionAndHint,i as SelectedOptionIsMarked,C as __namedExportsOrder,A as default};
