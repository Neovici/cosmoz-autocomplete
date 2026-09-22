import{b as d}from"./iframe-B-tVFIEf.js";import{o as u}from"./index-DDUiqs_B.js";import{c as e,o as I}from"./data-B16nys1A.js";import{n as P}from"./index-DzjbnIYk.js";import"./index-CfL6W3Ba.js";import"./preload-helper-PPVm8Dsz.js";const{expect:D,userEvent:c,waitFor:_}=__STORYBOOK_MODULE_TEST__,q=(o,l)=>l==null?o:({active:s})=>s?new Promise(t=>setTimeout(()=>t(o),l)):void 0,H=({variant:o,source:l,limit:s,textProperty:t,min:p,label:m="",hint:x,value:v=[],disabled:y=!1,compact:g=!1,placeholder:h="",defaultIndex:b=0,showSingle:w=!1,preserveOrder:$=!1,wrap:f=!1,keepOpened:z=!1,keepQuery:T=!1,opened:C=!1,overflowed:S=!1,responseTime:k,lazyOpen:E,invalid:O,errorMessage:B})=>{const R={maxWidth:S?"170px":"initial"},A=q(l,k);return d`
        <cosmoz-autocomplete-excluding
            variant=${u(o)}
            .label=${m}
            hint=${u(x)}
            .placeholder=${h}
            .source=${A}
            .textProperty=${t}
            .limit=${s}
            .value=${v}
            .min=${p}
            .defaultIndex=${b}
            .opened=${C}
            ?lazy-open=${E}
            ?disabled=${y}
            ?compact=${g}
            ?show-single=${w}
            ?preserve-order=${$}
            ?wrap=${f}
            ?keep-opened=${z}
            ?keep-query=${T}
            ?invalid=${O}
            .errorMessage=${B}
            style=${I(R)}
            ><p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},K={title:"Autocomplete Excluding",render:H,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},compact:{control:"boolean",description:"Compact input density"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},opened:{control:"boolean",description:"Programmatically open/close the dropdown"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},variant:{control:"select",options:["default","inline","cell"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},hint:{control:"text",description:"Hint text displayed below the input"},lazyOpen:{control:"boolean",description:"Suppress results until the user types at least 1 character"},invalid:{control:"boolean",description:"Invalid state"},errorMessage:{control:"text",description:"Error message displayed when invalid"}},decorators:[(o,{args:l})=>P(l.uppercase,()=>d`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete Excluding web component"}},layout:"fullscreen"}},a={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[1],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"Interactive playground — use the controls to explore all props."}}}},n={render:()=>d`
        <div class="story-stack">
            <h1 class="story-section-title">Excluding states</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-autocomplete-excluding
                        .label=${"Choose color"}
                        .source=${e}
                        text-property="text"
                        .defaultIndex=${-1}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">Included & excluded</div>
                    <cosmoz-autocomplete-excluding
                        .label=${"Choose color"}
                        .source=${e}
                        text-property="text"
                        .value=${[{item:e[0],excluded:!0},{item:e[1],excluded:!1},{item:e[3],excluded:!0}]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">All included</div>
                    <cosmoz-autocomplete-excluding
                        .label=${"Choose color"}
                        .source=${e}
                        text-property="text"
                        .value=${[{item:e[0],excluded:!1},{item:e[2],excluded:!1}]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">All excluded</div>
                    <cosmoz-autocomplete-excluding
                        .label=${"Choose color"}
                        .source=${e}
                        text-property="text"
                        .value=${[{item:e[0],excluded:!0},{item:e[1],excluded:!0}]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-autocomplete-excluding
                        .label=${"Choose color"}
                        .source=${e}
                        text-property="text"
                        disabled
                        .value=${[{item:e[0],excluded:!0},{item:e[3],excluded:!1}]}
                    ></cosmoz-autocomplete-excluding>
                </div>
            </div>
        </div>
    `},r={render:()=>d`
        <div class="story-stack">
            <h1 class="story-section-title">Dropdown with excluded items</h1>
            <cosmoz-autocomplete-excluding
                .label=${"Choose color"}
                .source=${e}
                text-property="text"
                keep-opened
                .value=${[{item:e[0],excluded:!0},{item:e[3],excluded:!1}]}
            ></cosmoz-autocomplete-excluding>
        </div>
    `},i={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[0],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},play:async({canvas:o,step:l})=>{await l("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await l("Toggle exclude state via listbox",async()=>{const s=await o.findByShadowRole("textbox");await c.click(s);const t=await o.findByShadowRole("option",{name:/Blue/u});await c.click(t),await c.click(t)}),await l("Toggle exclude state via chip",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector('[title="Red"] span');await c.click(t)}),await l("No results custom message",async()=>{const s=document.querySelector("cosmoz-autocomplete-excluding"),t=await o.findByShadowRole("textbox");await c.click(t),await c.tripleClick(t),await c.type(t,"Asdf"),await _(()=>D(s).toHaveTextContent("Custom message no results"))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [{
      item: colors[1],
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
        story: 'Interactive playground — use the controls to explore all props.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Excluding states</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-autocomplete-excluding
                        .label=\${'Choose color'}
                        .source=\${colors}
                        text-property="text"
                        .defaultIndex=\${-1}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">Included & excluded</div>
                    <cosmoz-autocomplete-excluding
                        .label=\${'Choose color'}
                        .source=\${colors}
                        text-property="text"
                        .value=\${[{
    item: colors[0],
    excluded: true
  }, {
    item: colors[1],
    excluded: false
  }, {
    item: colors[3],
    excluded: true
  }]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">All included</div>
                    <cosmoz-autocomplete-excluding
                        .label=\${'Choose color'}
                        .source=\${colors}
                        text-property="text"
                        .value=\${[{
    item: colors[0],
    excluded: false
  }, {
    item: colors[2],
    excluded: false
  }]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">All excluded</div>
                    <cosmoz-autocomplete-excluding
                        .label=\${'Choose color'}
                        .source=\${colors}
                        text-property="text"
                        .value=\${[{
    item: colors[0],
    excluded: true
  }, {
    item: colors[1],
    excluded: true
  }]}
                    ></cosmoz-autocomplete-excluding>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-autocomplete-excluding
                        .label=\${'Choose color'}
                        .source=\${colors}
                        text-property="text"
                        disabled
                        .value=\${[{
    item: colors[0],
    excluded: true
  }, {
    item: colors[3],
    excluded: false
  }]}
                    ></cosmoz-autocomplete-excluding>
                </div>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Dropdown with excluded items</h1>
            <cosmoz-autocomplete-excluding
                .label=\${'Choose color'}
                .source=\${colors}
                text-property="text"
                keep-opened
                .value=\${[{
    item: colors[0],
    excluded: true
  }, {
    item: colors[3],
    excluded: false
  }]}
            ></cosmoz-autocomplete-excluding>
        </div>
    \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Q=["Playground","States","DropdownOpen","InteractionTest"];export{r as DropdownOpen,i as InteractionTest,a as Playground,n as States,Q as __namedExportsOrder,K as default};
