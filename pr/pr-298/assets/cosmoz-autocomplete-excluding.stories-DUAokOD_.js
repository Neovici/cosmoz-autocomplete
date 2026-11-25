import{b as n}from"./iframe-zCxUUSHg.js";import{o as p,a as D}from"./use-autocomplete-BnArfQ27.js";import{n as _}from"./index-s1pP-A5o.js";import"./index-D3_2pic9.js";import{c as e}from"./data-HVObiSIc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bt6z4p6V.js";const{expect:q,userEvent:c,waitFor:H}=__STORYBOOK_MODULE_TEST__,M=(o,l)=>l==null?o:({active:s})=>s?new Promise(t=>setTimeout(()=>t(o),l)):void 0,j=({variant:o,size:l,source:s,limit:t,textProperty:m,min:x,label:v="",hint:y,value:h=[],disabled:g=!1,compact:b=!1,placeholder:$="",defaultIndex:w=0,showSingle:f=!1,preserveOrder:z=!1,wrap:C=!1,keepOpened:T=!1,keepQuery:k=!1,opened:S=!1,overflowed:E=!1,responseTime:O,lazyOpen:B,invalid:R,errorMessage:A})=>{const I={maxWidth:E?"170px":"initial"},P=M(s,O);return n`
        <cosmoz-autocomplete-excluding
            variant=${p(o)}
            size=${p(l)}
            .label=${v}
            hint=${p(y)}
            .placeholder=${$}
            .source=${P}
            .textProperty=${m}
            .limit=${t}
            .value=${h}
            .min=${x}
            .defaultIndex=${w}
            .opened=${S}
            ?lazy-open=${B}
            ?disabled=${g}
            ?compact=${b}
            ?show-single=${f}
            ?preserve-order=${z}
            ?wrap=${C}
            ?keep-opened=${T}
            ?keep-query=${k}
            ?invalid=${R}
            .errorMessage=${A}
            style=${D(I)}
            ><p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},W={title:"Autocomplete Excluding",render:j,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},compact:{control:"boolean",description:"Compact input density"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},opened:{control:"boolean",description:"Programmatically open/close the dropdown"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},variant:{control:"select",options:["default","inline","cell"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Control size",table:{defaultValue:{summary:"md"}}},hint:{control:"text",description:"Hint text displayed below the input"},lazyOpen:{control:"boolean",description:"Suppress results until the user types at least 1 character"},invalid:{control:"boolean",description:"Invalid state"},errorMessage:{control:"text",description:"Error message displayed when invalid"}},decorators:[(o,{args:l})=>_(l.uppercase,()=>n`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete Excluding web component"}},layout:"fullscreen"}},a={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[1],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"Interactive playground — use the controls to explore all props."}}}},r={render:()=>n`
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
    `},i={render:()=>n`
        <div class="story-stack">
            ${["sm","md","lg","xl"].map(o=>n`
                    <div>
                        <h1 class="story-section-title">${o}</h1>
                        <cosmoz-autocomplete-excluding
                            size=${o}
                            .label=${"Choose color"}
                            .source=${e}
                            text-property="text"
                            .value=${[{item:e[1],excluded:!0},{item:e[3],excluded:!1}]}
                            keep-opened
                        ></cosmoz-autocomplete-excluding>
                    </div>
                `)}
        </div>
    `,parameters:{docs:{description:{story:"Excluding chips at each control size."}}}},d={render:()=>n`
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
    `},u={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[0],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},play:async({canvas:o,step:l})=>{await l("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await l("Toggle exclude state via listbox",async()=>{const s=await o.findByShadowRole("textbox");await c.click(s);const t=await o.findByShadowRole("option",{name:/Blue/u});await c.click(t),await c.click(t)}),await l("Toggle exclude state via chip",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector('[title="Red"] span');await c.click(t)}),await l("No results custom message",async()=>{const s=document.querySelector("cosmoz-autocomplete-excluding"),t=await o.findByShadowRole("textbox");await c.click(t),await c.tripleClick(t),await c.type(t,"Asdf"),await H(()=>q(s).toHaveTextContent("Custom message no results"))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            \${(['sm', 'md', 'lg', 'xl'] as const).map(size => html\`
                    <div>
                        <h1 class="story-section-title">\${size}</h1>
                        <cosmoz-autocomplete-excluding
                            size=\${size}
                            .label=\${'Choose color'}
                            .source=\${colors}
                            text-property="text"
                            .value=\${[{
    item: colors[1],
    excluded: true
  }, {
    item: colors[3],
    excluded: false
  }]}
                            keep-opened
                        ></cosmoz-autocomplete-excluding>
                    </div>
                \`)}
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Excluding chips at each control size.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Y=["Playground","States","Sizes","DropdownOpen","InteractionTest"];export{d as DropdownOpen,u as InteractionTest,a as Playground,i as Sizes,r as States,Y as __namedExportsOrder,W as default};
