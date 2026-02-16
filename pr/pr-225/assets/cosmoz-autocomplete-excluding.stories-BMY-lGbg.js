import{b as n}from"./iframe-_L-jBB6I.js";import{c as l,o as O}from"./data-_5Nq7qmI.js";import{n as i}from"./index-VwdI8kAl.js";import"./index-BEbgwBew.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhqVNSej.js";const{expect:u,userEvent:a,waitFor:q}=__STORYBOOK_MODULE_TEST__,A=n`
    <style>
        .custom-message {
            font-size: 14px;
            font-weight: 500;
            padding: 0 22px;
        }
    </style>
`,_=(e,o)=>o==null?e:({active:c})=>c?new Promise(t=>setTimeout(()=>t(e),o)):void 0,H=({source:e,limit:o,textProperty:c,min:t,label:d="",value:p=[],disabled:m=!1,placeholder:x="",defaultIndex:y=0,showSingle:w=!1,preserveOrder:h=!1,wrap:g=!1,keepOpened:f=!1,keepQuery:b=!1,overflowed:v=!1,responseTime:T,contour:S,excludedBgColor:B,excludedChipColor:k,excludedChipClearBgColor:C,excludedChipClearStrokeColor:z,excludedListboxActiveColor:R})=>{const $={maxWidth:v?"170px":"initial","--cosmoz-autocomplete-excluded-bg-color":B,"--cosmoz-autocomplete-excluded-chip-color":k,"--cosmoz-autocomplete-excluded-chip-clear-bg-color":C,"--cosmoz-autocomplete-excluded-chip-clear-stroke":z,"--cosmoz-listbox-excluded-active-color":R},E=_(e,T);return n`
        ${A}

        <cosmoz-autocomplete-excluding
            class=${i(S,()=>"contour")}
            .label=${d}
            .placeholder=${x}
            .source=${E}
            .textProperty=${c}
            .limit=${o}
            .value=${p}
            .min=${t}
            .defaultIndex=${y}
            ?disabled=${m}
            ?show-single=${w}
            ?preserve-order=${h}
            ?wrap=${g}
            ?keep-opened=${f}
            ?keep-query=${b}
            style=${O($)}
        >
            <p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},D={title:"Autocomplete Excluding",render:H,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"},excludedBgColor:{control:"color",description:"Background color for excluded chip/listbox items",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-bg-color"},excludedChipColor:{control:"color",description:"Text color for excluded chips",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-color"},excludedChipClearBgColor:{control:"color",description:"Background color for clear button",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-clear-bg-color"},excludedChipClearStrokeColor:{control:"color",description:"Background color for chip icons",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-chip-clear-stroke"},excludedListboxActiveColor:{control:"color",description:"Background color for excluded listbox items on hover/active",table:{category:"Styling",defaultValue:{summary:"rgba(244, 67, 54, 0.1)"}},name:"--cosmoz-listbox-excluded-active-color"}},decorators:[(e,{args:o})=>i(o.uppercase,()=>n`<div style="text-transform: uppercase">${e()}</div>`,()=>e())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},r={args:{label:"Choose color",source:l,textProperty:"text",value:[{item:l[0],excluded:!0},{item:l[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}},play:async({canvas:e,step:o})=>{await o("Renders with chips showing excluded state",async()=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u)}),await o("Has the autocomplete-excluding element",async()=>{const c=document.querySelector("cosmoz-autocomplete-excluding");u(c).toBeTruthy()})}},s={args:{label:"Choose color",source:l,textProperty:"text",value:[{item:l[0],excluded:!0},{item:l[3],excluded:!1}],keepOpened:!0},play:async({canvas:e,step:o})=>{await o("Renders with chips showing excluded state",async()=>{await e.findByShadowText(/Red/u),await e.findByShadowText(/Blue/u)}),await o("Toggle exclude state via listbox",async()=>{const c=await e.findByShadowRole("textbox");await a.click(c);const t=await e.findByShadowRole("option",{name:/Blue/u});await a.click(t),await a.click(t)}),await o("Toggle exclude state via chip",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector('[title="Red"] span');await a.click(t)}),await o("No results custom message",async()=>{const c=document.querySelector("cosmoz-autocomplete-excluding"),t=await e.findByShadowRole("textbox");await a.click(t),await a.tripleClick(t),await a.type(t,"Asdf"),await q(()=>u(c).toHaveTextContent("Custom message no results"))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [{
      item: colors[0],
      excluded: true
    }, {
      item: colors[3],
      excluded: false
    }],
    keepOpened: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The basic version'
      }
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders with chips showing excluded state', async () => {
      await canvas.findByShadowText(/Red/u);
      await canvas.findByShadowText(/Blue/u);
    });
    await step('Has the autocomplete-excluding element', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding');
      expect(autocomplete).toBeTruthy();
    });
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [{
      item: colors[0],
      excluded: true
    }, {
      item: colors[3],
      excluded: false
    }],
    keepOpened: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders with chips showing excluded state', async () => {
      await canvas.findByShadowText(/Red/u);
      await canvas.findByShadowText(/Blue/u);
    });
    await step('Toggle exclude state via listbox', async () => {
      const input = await canvas.findByShadowRole('textbox');
      await userEvent.click(input);
      const blueOption = await canvas.findByShadowRole('option', {
        name: /Blue/u
      });
      await userEvent.click(blueOption); // Select Blue
      await userEvent.click(blueOption); // Toggle to excluded
    });
    await step('Toggle exclude state via chip', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding')!;
      const redChipToggle = autocomplete.shadowRoot!.querySelector('[title="Red"] span');
      await userEvent.click(redChipToggle!);
    });
    await step('No results custom message', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding')!;
      const input = await canvas.findByShadowRole('textbox');
      await userEvent.click(input);
      await userEvent.tripleClick(input);
      await userEvent.type(input, 'Asdf');
      await waitFor(() => expect(autocomplete).toHaveTextContent('Custom message no results'));
    });
  }
}`,...s.parameters?.docs?.source}}};const F=["Basic","InteractionTest"];export{r as Basic,s as InteractionTest,F as __namedExportsOrder,D as default};
