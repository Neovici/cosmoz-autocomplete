import{u as b,a as w,b as m,A as I}from"./iframe-Bqd4JqMi.js";import{a as L,u as h,i as M,b as j,s as D,d as F,A as N,e as y,c as p,n as v,o as G}from"./data-mndGIFjn.js";import"./preload-helper-PPVm8Dsz.js";const K="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",Q=L`
	.chip[data-state='excluded'] {
		background: var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54));
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(content) {
		color: var(--cosmoz-autocomplete-excluded-chip-color, #fff);
	}

	cosmoz-autocomplete-chip[data-state='excluded']::part(clear) {
		background-color: var(
			--cosmoz-autocomplete-excluded-chip-clear-bg-color,
			#fff
		);
		stroke: var(
			--cosmoz-autocomplete-excluded-chip-clear-stroke,
			var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54))
		);
	}

	cosmoz-listbox::part(excluded)::before {
		border-color: var(
			--cosmoz-autocomplete-excluded-bg-color,
			rgb(244, 67, 54)
		);
		/* prettier-ignore */
		background: url("${K}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,f=o=>({item:o,excluded:!1}),T=o=>o.item,U=o=>{const[e,t]=b(o),c=h(r=>t(s=>{const l=M(r,s?.map(T));if(!l)return;if(!s)return l.map(f);const a=s.reduce((n,u)=>l.includes(u.item)?[...n,u]:u.excluded?n:[...n,{...u,excluded:!0}],[]),i=l.filter(n=>!s.some(u=>u.item===n)).map(f);return[...a,...i]}),[]);return{value:e,setExcludingValue:c,setValue:t}},W=(o,e)=>o?.some(t=>t.item===e&&t.excluded),k=(o,e)=>e&&W(o,e)?"excluded":I,Y=o=>(e,t,{highlight:c,select:r,textual:s,isSelected:l})=>{const a=s(e);return m`<div
				class="item"
				role="option"
				part="option ${k(o,e)}"
				?aria-selected=${l(e)}
				data-index=${t}
				@mouseenter=${()=>c(t)}
				@click=${()=>r(e)}
				@mousedown=${i=>i.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},J=(o,e)=>({item:t,content:c,disabled:r,hidden:s,className:l="chip",slot:a})=>m`<cosmoz-autocomplete-chip
			class=${y(l)}
			slot=${y(a)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${k(o,t)}
			?disabled=${r}
			?hidden=${s}
			.onClear=${()=>e(t)}
			title=${y(typeof c=="string"?c:void 0)}
		>
			${c}
		</cosmoz-autocomplete-chip>`,X=o=>{const{value:e,setValue:t,setExcludingValue:c}=U("value"),[r,s]=b("text"),l=h(a=>t(i=>i?.filter(n=>n.item!==a)),[]);return N({...o,value:w(()=>e?.map(T),[e]),onChange:h(a=>{c(a)},[]),text:r,onText:h(a=>{s(a)},[]),itemRenderer:w(()=>Y(e),[e]),chipRenderer:w(()=>J(e,l),[e,l])})};customElements.define("cosmoz-autocomplete-excluding",j(X,{observedAttributes:F,styleSheets:[D,Q]}));const{expect:S,userEvent:d,waitFor:Z}=__STORYBOOK_MODULE_TEST__,ee=m`
    <style>
        .custom-message {
            font-size: 14px;
            font-weight: 500;
            padding: 0 22px;
        }
    </style>
`,oe=(o,e)=>e==null?o:({active:t})=>t?new Promise(c=>setTimeout(()=>c(o),e)):void 0,te=({source:o,limit:e,textProperty:t,min:c,label:r="",value:s=[],disabled:l=!1,placeholder:a="",defaultIndex:i=0,showSingle:n=!1,preserveOrder:u=!1,wrap:z=!1,keepOpened:$=!1,keepQuery:C=!1,overflowed:B=!1,responseTime:E,contour:R,excludedBgColor:O,excludedChipColor:A,excludedChipClearBgColor:V,excludedChipClearStrokeColor:q,excludedListboxActiveColor:_})=>{const P={maxWidth:B?"170px":"initial","--cosmoz-autocomplete-excluded-bg-color":O,"--cosmoz-autocomplete-excluded-chip-color":A,"--cosmoz-autocomplete-excluded-chip-clear-bg-color":V,"--cosmoz-autocomplete-excluded-chip-clear-stroke":q,"--cosmoz-listbox-excluded-active-color":_},H=oe(o,E);return m`
        ${ee}

        <cosmoz-autocomplete-excluding
            class=${v(R,()=>"contour")}
            .label=${r}
            .placeholder=${a}
            .source=${H}
            .textProperty=${t}
            .limit=${e}
            .value=${s}
            .min=${c}
            .defaultIndex=${i}
            ?disabled=${l}
            ?show-single=${n}
            ?preserve-order=${u}
            ?wrap=${z}
            ?keep-opened=${$}
            ?keep-query=${C}
            style=${G(P)}
        >
            <p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},se={title:"Autocomplete Excluding",render:te,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"},excludedBgColor:{control:"color",description:"Background color for excluded chip/listbox items",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-bg-color"},excludedChipColor:{control:"color",description:"Text color for excluded chips",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-color"},excludedChipClearBgColor:{control:"color",description:"Background color for clear button",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-clear-bg-color"},excludedChipClearStrokeColor:{control:"color",description:"Background color for chip icons",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-chip-clear-stroke"},excludedListboxActiveColor:{control:"color",description:"Background color for excluded listbox items on hover/active",table:{category:"Styling",defaultValue:{summary:"rgba(244, 67, 54, 0.1)"}},name:"--cosmoz-listbox-excluded-active-color"}},decorators:[(o,{args:e})=>v(e.uppercase,()=>m`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},x={args:{label:"Choose color",source:p,textProperty:"text",value:[{item:p[0],excluded:!0},{item:p[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}},play:async({canvas:o,step:e})=>{await e("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await e("Has the autocomplete-excluding element",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding");S(t).toBeTruthy()})}},g={args:{label:"Choose color",source:p,textProperty:"text",value:[{item:p[0],excluded:!0},{item:p[3],excluded:!1}],keepOpened:!0},play:async({canvas:o,step:e})=>{await e("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await e("Toggle exclude state via listbox",async()=>{const t=await o.findByShadowRole("textbox");await d.click(t);const c=await o.findByShadowRole("option",{name:/Blue/u});await d.click(c),await d.click(c)}),await e("Toggle exclude state via chip",async()=>{const c=document.querySelector("cosmoz-autocomplete-excluding").shadowRoot.querySelector('[title="Red"] span');await d.click(c)}),await e("No results custom message",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding"),c=await o.findByShadowRole("textbox");await d.click(c),await d.tripleClick(c),await d.type(c,"Asdf"),await Z(()=>S(t).toHaveTextContent("Custom message no results"))})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const re=["Basic","InteractionTest"];export{x as Basic,g as InteractionTest,re as __namedExportsOrder,se as default};
