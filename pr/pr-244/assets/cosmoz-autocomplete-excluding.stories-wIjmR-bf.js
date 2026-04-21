import{b as i}from"./iframe-DKGNTcQk.js";import{o as u}from"./index-DdCPlEWi.js";import{c as e,o as A}from"./data-Kx9lzg1s.js";import{n as I}from"./index-BWXoDMZX.js";import"./index-B_QiCvoh.js";import"./preload-helper-PPVm8Dsz.js";const{expect:P,userEvent:c,waitFor:D}=__STORYBOOK_MODULE_TEST__,_=(o,l)=>l==null?o:({active:s})=>s?new Promise(t=>setTimeout(()=>t(o),l)):void 0,q=({variant:o,source:l,limit:s,textProperty:t,min:p,label:m="",hint:x,value:v=[],disabled:y=!1,placeholder:g="",defaultIndex:h=0,showSingle:w=!1,preserveOrder:b=!1,wrap:$=!1,keepOpened:f=!1,keepQuery:z=!1,opened:T=!1,overflowed:C=!1,responseTime:S,lazyOpen:k,invalid:E,errorMessage:O})=>{const B={maxWidth:C?"170px":"initial"},R=_(l,S);return i`
        <cosmoz-autocomplete-excluding
            variant=${u(o)}
            .label=${m}
            hint=${u(x)}
            .placeholder=${g}
            .source=${R}
            .textProperty=${t}
            .limit=${s}
            .value=${v}
            .min=${p}
            .defaultIndex=${h}
            .opened=${T}
            ?lazy-open=${k}
            ?disabled=${y}
            ?show-single=${w}
            ?preserve-order=${b}
            ?wrap=${$}
            ?keep-opened=${f}
            ?keep-query=${z}
            ?invalid=${E}
            .errorMessage=${O}
            style=${A(B)}
            ><p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},V={title:"Autocomplete Excluding",render:q,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},opened:{control:"boolean",description:"Programmatically open/close the dropdown"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},variant:{control:"select",options:["default","inline","cell"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},hint:{control:"text",description:"Hint text displayed below the input"},lazyOpen:{control:"boolean",description:"Suppress results until the user types at least 1 character"},invalid:{control:"boolean",description:"Invalid state"},errorMessage:{control:"text",description:"Error message displayed when invalid"}},decorators:[(o,{args:l})=>I(l.uppercase,()=>i`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete Excluding web component"}},layout:"fullscreen"}},a={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[1],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"Interactive playground — use the controls to explore all props."}}}},n={render:()=>i`
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
    `},r={render:()=>i`
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
    `},d={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[0],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},play:async({canvas:o,step:l})=>{await l("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await l("Toggle exclude state via listbox",async()=>{const s=await o.findByShadowRole("textbox");await c.click(s);const t=await o.findByShadowRole("option",{name:/Blue/u});await c.click(t),await c.click(t)}),await l("Toggle exclude state via chip",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector('[title="Red"] span');await c.click(t)}),await l("No results custom message",async()=>{const s=document.querySelector("cosmoz-autocomplete-excluding"),t=await o.findByShadowRole("textbox");await c.click(t),await c.tripleClick(t),await c.type(t,"Asdf"),await D(()=>P(s).toHaveTextContent("Custom message no results"))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const K=["Playground","States","DropdownOpen","InteractionTest"];export{r as DropdownOpen,d as InteractionTest,a as Playground,n as States,K as __namedExportsOrder,V as default};
