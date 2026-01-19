import{A as R,b as i}from"./iframe-C5P1NRwf.js";import{u as h,a as m,i as _,c as j,b as L,s as M,o as D,A as q,d as x,e as f,n as v,f as b,g as G}from"./data-1uDNpf43.js";const g=o=>({item:o,excluded:!1}),y=o=>o.item,Q=o=>{const[e,t]=h(o),r=m(a=>t(s=>{const l=_(a,s?.map(y));if(!l)return;if(!s)return l.map(g);const c=s.reduce((n,d)=>l.includes(d.item)?[...n,d]:d.excluded?n:[...n,{...d,excluded:!0}],[]),u=l.filter(n=>!s.some(d=>d.item===n)).map(g);return[...c,...u]}),[]);return{value:e,setExcludingValue:r,setValue:t}},W="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",F=j`
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
		background: url("${W}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,H=(o,e)=>o?.some(t=>t.item===e&&t.excluded),$=(o,e)=>e&&H(o,e)?"excluded":R,J=o=>(e,t,{highlight:r,select:a,textual:s,isSelected:l})=>{const c=s(e);return i`<div
				class="item"
				role="option"
				part="option ${$(o,e)}"
				?aria-selected=${l(e)}
				data-index=${t}
				@mouseenter=${()=>r(t)}
				@click=${()=>a(e)}
				@mousedown=${u=>u.preventDefault()}
			>
				${c}
			</div>
			<div class="sizer" virtualizer-sizer>${c}</div>`},K=(o,e)=>({item:t,content:r,disabled:a,hidden:s,className:l="chip",slot:c})=>i`<cosmoz-autocomplete-chip
			class=${f(l)}
			slot=${f(c)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${$(o,t)}
			?disabled=${a}
			?hidden=${s}
			.onClear=${()=>e(t)}
			title=${f(typeof r=="string"?r:void 0)}
		>
			${r}
		</cosmoz-autocomplete-chip>`,N=o=>{const{value:e,setValue:t,setExcludingValue:r}=Q("value"),[a,s]=h("text"),l=m(c=>t(u=>u?.filter(n=>n.item!==c)),[]);return q({...o,value:x(()=>e?.map(y),[e]),onChange:m(c=>{r(c)},[]),text:a,onText:m(c=>{s(c)},[]),itemRenderer:x(()=>J(e),[e]),chipRenderer:x(()=>K(e,l),[e,l])})};customElements.define("cosmoz-autocomplete-excluding",L(N,{observedAttributes:D,styleSheets:[M,F]}));const U=i`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,X=(o,e)=>e==null?o:({active:t})=>t?new Promise(r=>setTimeout(()=>r(o),e)):void 0,Y=({source:o,limit:e,textProperty:t,min:r,label:a="",value:s=[],disabled:l=!1,placeholder:c="",defaultIndex:u=0,showSingle:n=!1,preserveOrder:d=!1,wrap:z=!1,keepOpened:k=!1,keepQuery:w=!1,overflowed:C=!1,responseTime:T,contour:A,excludedBgColor:S,excludedChipColor:E,excludedChipClearBgColor:V,excludedChipClearStrokeColor:B,excludedListboxActiveColor:I})=>{const P={maxWidth:C?"170px":"initial","--cosmoz-autocomplete-excluded-bg-color":S,"--cosmoz-autocomplete-excluded-chip-color":E,"--cosmoz-autocomplete-excluded-chip-clear-bg-color":V,"--cosmoz-autocomplete-excluded-chip-clear-stroke":B,"--cosmoz-listbox-excluded-active-color":I},O=X(o,T);return i`
        ${U}

        <cosmoz-autocomplete-excluding
            class=${v(A,()=>"contour")}
            .label=${a}
            .placeholder=${c}
            .source=${O}
            .textProperty=${t}
            .limit=${e}
            .value=${s}
            .min=${r}
            .defaultIndex=${u}
            ?disabled=${l}
            ?show-single=${n}
            ?preserve-order=${d}
            ?wrap=${z}
            ?keep-opened=${k}
            ?keep-query=${w}
            style=${G(P)}
        ></cosmoz-autocomplete-excluding>
    `},oe={title:"Autocomplete Excluding",render:Y,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"},excludedBgColor:{control:"color",description:"Background color for excluded chip/listbox items",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-bg-color"},excludedChipColor:{control:"color",description:"Text color for excluded chips",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-color"},excludedChipClearBgColor:{control:"color",description:"Background color for clear button",table:{category:"Styling",defaultValue:{summary:"#ffffff"}},name:"--cosmoz-autocomplete-excluded-chip-clear-bg-color"},excludedChipClearStrokeColor:{control:"color",description:"Background color for chip icons",table:{category:"Styling",defaultValue:{summary:"rgb(244, 67, 54)"}},name:"--cosmoz-autocomplete-excluded-chip-clear-stroke"},excludedListboxActiveColor:{control:"color",description:"Background color for excluded listbox items on hover/active",table:{category:"Styling",defaultValue:{summary:"rgba(244, 67, 54, 0.1)"}},name:"--cosmoz-listbox-excluded-active-color"}},decorators:[(o,{args:e})=>v(e.uppercase,()=>i`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:b,textProperty:"text",value:[{item:b[0],excluded:!0},{item:b[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...p.parameters?.docs?.source}}};const te=["Basic"];export{p as Basic,te as __namedExportsOrder,oe as default};
