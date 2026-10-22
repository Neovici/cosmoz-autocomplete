import{b as u}from"./iframe-DjvGtP4D.js";import{o as p}from"./index-LI3JSVpn.js";import{c as e,o as A}from"./data-CnIJZ1R3.js";import{n as I}from"./index-Bh1lAAFV.js";import"./index-POQs93Zo.js";import"./preload-helper-PPVm8Dsz.js";const{userEvent:r}=__STORYBOOK_MODULE_TEST__,P=(o,t)=>t==null?o:({active:c})=>c?new Promise(l=>setTimeout(()=>l(o),t)):void 0,D=({variant:o,source:t,limit:c,textProperty:l,min:s,label:m="",hint:x,value:y=[],disabled:v=!1,compact:h=!1,placeholder:g="",defaultIndex:w=0,showSingle:b=!1,preserveOrder:$=!1,wrap:f=!1,keepOpened:z=!1,keepQuery:S=!1,opened:T=!1,overflowed:C=!1,responseTime:k,lazyOpen:E,invalid:R,errorMessage:B})=>{const O={maxWidth:C?"170px":"initial"},q=P(t,k);return u`
        <cosmoz-autocomplete-excluding
            variant=${p(o)}
            .label=${m}
            hint=${p(x)}
            .placeholder=${g}
            .source=${q}
            .textProperty=${l}
            .limit=${c}
            .value=${y}
            .min=${s}
            .defaultIndex=${w}
            .opened=${T}
            ?lazy-open=${E}
            ?disabled=${v}
            ?compact=${h}
            ?show-single=${b}
            ?preserve-order=${$}
            ?wrap=${f}
            ?keep-opened=${z}
            ?keep-query=${S}
            ?invalid=${R}
            .errorMessage=${B}
            style=${A(O)}
            ><p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},V={title:"Autocomplete Excluding",render:D,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},compact:{control:"boolean",description:"Compact input density"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},opened:{control:"boolean",description:"Programmatically open/close the dropdown"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},variant:{control:"select",options:["default","inline","cell"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},hint:{control:"text",description:"Hint text displayed below the input"},lazyOpen:{control:"boolean",description:"Suppress results until the user types at least 1 character"},invalid:{control:"boolean",description:"Invalid state"},errorMessage:{control:"text",description:"Error message displayed when invalid"}},decorators:[(o,{args:t})=>I(t.uppercase,()=>u`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete Excluding web component"}},layout:"fullscreen"}},a={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[1],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"Interactive playground — use the controls to explore all props."}}}},n={render:()=>u`
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
    `},d={render:()=>u`
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
    `},i={args:{label:"Choose color",source:e,textProperty:"text",value:[{item:e[0],excluded:!0},{item:e[3],excluded:!1}],keepOpened:!0},play:async({canvas:o,step:t})=>{await t("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await t("Toggle exclude state via listbox",async()=>{const l=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector("cosmoz-autocomplete-trigger");await r.click(l);const s=await o.findByShadowRole("option",{name:/Blue/u});await r.click(s),await r.click(s)}),await t("Remove item via chip",async()=>{const s=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot?.querySelector("cosmoz-autocomplete-chips")?.shadowRoot?.querySelector("cosmoz-autocomplete-chips-row")?.querySelector('cosmoz-tag[title="Red"]')?.shadowRoot?.querySelector("cosmoz-button.close");await r.click(s)}),await t("No results custom message",async()=>{const c=document.querySelector("cosmoz-autocomplete-excluding");c.opened=!0;const l=await o.findByShadowRole("textbox",{name:"Search"});await r.tripleClick(l),await r.type(l,"Asdf"),await o.findByShadowText(/Custom message no results/u)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding')!;
      const trigger = autocomplete.shadowRoot!.querySelector('cosmoz-autocomplete-trigger')!;
      await userEvent.click(trigger);
      const blueOption = await canvas.findByShadowRole('option', {
        name: /Blue/u
      });
      await userEvent.click(blueOption); // Select Blue
      await userEvent.click(blueOption); // Toggle to excluded
    });
    await step('Remove item via chip', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding')!;
      const redChip = autocomplete.shadowRoot?.querySelector('cosmoz-autocomplete-chips')?.shadowRoot?.querySelector('cosmoz-autocomplete-chips-row')?.querySelector('cosmoz-tag[title="Red"]');
      const removeButton = redChip?.shadowRoot?.querySelector<HTMLElement>('cosmoz-button.close');
      await userEvent.click(removeButton!);
    });
    await step('No results custom message', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding')!;
      autocomplete.opened = true;
      const input = await canvas.findByShadowRole('textbox', {
        name: 'Search'
      });
      await userEvent.tripleClick(input);
      await userEvent.type(input, 'Asdf');
      await canvas.findByShadowText(/Custom message no results/u);
    });
  }
}`,...i.parameters?.docs?.source}}};const K=["Playground","States","DropdownOpen","InteractionTest"];export{d as DropdownOpen,i as InteractionTest,a as Playground,n as States,K as __namedExportsOrder,V as default};
