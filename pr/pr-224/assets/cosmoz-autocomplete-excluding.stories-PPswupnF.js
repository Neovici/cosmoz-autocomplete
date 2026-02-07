import{c as P,u as f,a as m,i as I,b as L,d as x,e as i,A as M}from"./iframe-C-oXbz3Z.js";import{s as j,o as q,A as D,a as h,c as g,n as y,b as H}from"./data-DBq-0PBi.js";import"./preload-helper-PPVm8Dsz.js";const G="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",K=P`
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
		background: url("${G}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,b=o=>({item:o,excluded:!1}),v=o=>o.item,Q=o=>{const[e,t]=f(o),l=m(s=>t(a=>{const r=I(s,a?.map(v));if(!r)return;if(!a)return r.map(b);const c=a.reduce((n,d)=>r.includes(d.item)?[...n,d]:d.excluded?n:[...n,{...d,excluded:!0}],[]),u=r.filter(n=>!a.some(d=>d.item===n)).map(b);return[...c,...u]}),[]);return{value:e,setExcludingValue:l,setValue:t}},U=(o,e)=>o?.some(t=>t.item===e&&t.excluded),w=(o,e)=>e&&U(o,e)?"excluded":M,W=o=>(e,t,{highlight:l,select:s,textual:a,isSelected:r})=>{const c=a(e);return i`<div
				class="item"
				role="option"
				part="option ${w(o,e)}"
				?aria-selected=${r(e)}
				data-index=${t}
				@mouseenter=${()=>l(t)}
				@click=${()=>s(e)}
				@mousedown=${u=>u.preventDefault()}
			>
				${c}
			</div>
			<div class="sizer" virtualizer-sizer>${c}</div>`},Y=(o,e)=>({item:t,content:l,disabled:s,hidden:a,className:r="chip",slot:c})=>i`<cosmoz-autocomplete-chip
			class=${h(r)}
			slot=${h(c)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${w(o,t)}
			?disabled=${s}
			?hidden=${a}
			.onClear=${()=>e(t)}
			title=${h(typeof l=="string"?l:void 0)}
		>
			${l}
		</cosmoz-autocomplete-chip>`,F=o=>{const{value:e,setValue:t,setExcludingValue:l}=Q("value"),[s,a]=f("text"),r=m(c=>t(u=>u?.filter(n=>n.item!==c)),[]);return D({...o,value:x(()=>e?.map(v),[e]),onChange:m(c=>{l(c)},[]),text:s,onText:m(c=>{a(c)},[]),itemRenderer:x(()=>W(e),[e]),chipRenderer:x(()=>Y(e,r),[e,r])})};customElements.define("cosmoz-autocomplete-excluding",L(F,{observedAttributes:q,styleSheets:[j,K]}));const{expect:J}=__STORYBOOK_MODULE_TEST__,N=i`
    <style>
        .custom-message {
            font-size: 14px;
            font-weight: 500;
            padding: 0 22px;
        }
    </style>
`,X=(o,e)=>e==null?o:({active:t})=>t?new Promise(l=>setTimeout(()=>l(o),e)):void 0,Z=({source:o,limit:e,textProperty:t,min:l,label:s="",value:a=[],disabled:r=!1,placeholder:c="",defaultIndex:u=0,showSingle:n=!1,preserveOrder:d=!1,wrap:$=!1,keepOpened:z=!1,keepQuery:k=!1,overflowed:T=!1,responseTime:C,contour:S,excludedBgColor:B,excludedChipColor:E,excludedChipClearBgColor:A,excludedChipClearStrokeColor:V,excludedListboxActiveColor:O})=>{const R={maxWidth:T?"170px":"initial","--cosmoz-autocomplete-excluded-bg-color":B,"--cosmoz-autocomplete-excluded-chip-color":E,"--cosmoz-autocomplete-excluded-chip-clear-bg-color":A,"--cosmoz-autocomplete-excluded-chip-clear-stroke":V,"--cosmoz-listbox-excluded-active-color":O},_=X(o,C);return i`
        ${N}

        <cosmoz-autocomplete-excluding
            class=${y(S,()=>"contour")}
            .label=${s}
            .placeholder=${c}
            .source=${_}
            .textProperty=${t}
            .limit=${e}
            .value=${a}
            .min=${l}
            .defaultIndex=${u}
            ?disabled=${r}
            ?show-single=${n}
            ?preserve-order=${d}
            ?wrap=${$}
            ?keep-opened=${z}
            ?keep-query=${k}
            style=${H(R)}
        >
            <p slot="no-result" class="custom-message">Custom message no results</p>
        </cosmoz-autocomplete-excluding>
    `},ce={title:"Autocomplete Excluding",render:Z,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"},excludedBgColor:{control:"color",description:"Background color for excluded chip/listbox items",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-bg-color"},excludedChipColor:{control:"color",description:"Text color for excluded chips",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-color"},excludedChipClearBgColor:{control:"color",description:"Background color for clear button",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-clear-bg-color"},excludedChipClearStrokeColor:{control:"color",description:"Background color for chip icons",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-chip-clear-stroke"},excludedListboxActiveColor:{control:"color",description:"Background color for excluded listbox items on hover/active",table:{category:"Styling",defaultValue:{summary:"rgba(244, 67, 54, 0.1)"}},name:"--cosmoz-listbox-excluded-active-color"}},decorators:[(o,{args:e})=>y(e.uppercase,()=>i`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:g,textProperty:"text",value:[{item:g[0],excluded:!0},{item:g[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}},play:async({canvas:o,step:e})=>{await e("Renders with chips showing excluded state",async()=>{await o.findByShadowText(/Red/u),await o.findByShadowText(/Blue/u)}),await e("Has the autocomplete-excluding element",async()=>{const t=document.querySelector("cosmoz-autocomplete-excluding");J(t).toBeTruthy()})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      // Should render the autocomplete-excluding with chips
      await canvas.findByShadowText(/Red/u);
      await canvas.findByShadowText(/Blue/u);
    });
    await step('Has the autocomplete-excluding element', async () => {
      const autocomplete = document.querySelector<HTMLElement>('cosmoz-autocomplete-excluding');
      expect(autocomplete).toBeTruthy();
    });
  }
}`,...p.parameters?.docs?.source}}};const le=["Basic"];export{p as Basic,le as __namedExportsOrder,ce as default};
