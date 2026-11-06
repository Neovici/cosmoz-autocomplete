import"./index-CjkS3Qds.js";import{b as s,c as p,a as w}from"./option-data-CZTu9jt9.js";import"./iframe-DdPua5x4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Di6gNg6O.js";const{expect:r,userEvent:l,waitFor:y}=__STORYBOOK_MODULE_TEST__,A={title:"Tests/Option",tags:["!autodocs"],render:({value:a})=>w({value:a})},i=async a=>l.click(await a.findByShadowRole("textbox")),e={args:{value:s[1]},play:async({canvas:a})=>{await i(a),await a.findAllByShadowText("Material overhead"),await a.findAllByShadowText("Approver: Mattias Berggren")}},t={args:{value:s[1]},play:async({canvas:a})=>{await i(a),await a.findAllByShadowText("Quality assurance");const c=await a.findAllByShadowRole("option");r(c.map(d=>d.hasAttribute("aria-selected"))).toEqual([!1,!0,!1,!1])}},n={args:{value:s[1]},play:async({canvas:a})=>{await a.findByShadowText("102997"),await a.findByShadowText("Expense fall back"),r(a.queryAllByShadowText(/Approver/u)).toHaveLength(0)}},o={render:()=>p(),play:async({canvas:a})=>{await i(a),await l.keyboard("vest"),await a.findAllByShadowText("A-1001"),await a.findAllByShadowText("€12.00"),await y(()=>r(a.queryAllByShadowText("€4.50")).toHaveLength(0))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas
  }) => {
    await open(canvas);
    await canvas.findAllByShadowText('Material overhead');
    await canvas.findAllByShadowText('Approver: Mattias Berggren');
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas
  }) => {
    await open(canvas);
    await canvas.findAllByShadowText('Quality assurance');
    const options = await canvas.findAllByShadowRole('option');
    // the selected option is reported and keeps its place in the order
    expect(options.map(o => o.hasAttribute('aria-selected'))).toEqual([false, true, false, false]);
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: costCenters[1]
  },
  play: async ({
    canvas
  }) => {
    await canvas.findByShadowText('102997');
    await canvas.findByShadowText('Expense fall back');
    // the hint belongs to the open list only
    expect(canvas.queryAllByShadowText(/Approver/u)).toHaveLength(0);
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => catalogField(),
  play: async ({
    canvas
  }) => {
    await open(canvas);
    await userEvent.keyboard('vest');
    await canvas.findAllByShadowText('A-1001');
    await canvas.findAllByShadowText('€12.00');
    await waitFor(() => expect(canvas.queryAllByShadowText('€4.50')).toHaveLength(0));
  }
}`,...o.parameters?.docs?.source}}};const f=["OptionShowsDescriptionAndHint","SelectedOptionIsMarked","FieldShowsLabelAndDescription","OptionShowsTrailing"];export{n as FieldShowsLabelAndDescription,e as OptionShowsDescriptionAndHint,o as OptionShowsTrailing,t as SelectedOptionIsMarked,f as __namedExportsOrder,A as default};
