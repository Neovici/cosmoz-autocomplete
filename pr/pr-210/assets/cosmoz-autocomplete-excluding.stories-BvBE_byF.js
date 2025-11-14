import{E as P,x as i}from"./iframe-B_6w_0ve.js";import{u as g,a as m,i as R,c as _,b as j,s as L,o as D,A as M,d as x,n as h,e as f,f as q}from"./data-CPLJS1VT.js";const b=o=>({item:o,excluded:!1}),v=o=>o.item,G=o=>{const[e,t]=g(o),c=m(a=>t(l=>{const s=R(a,l?.map(v));if(!s)return;if(!l)return s.map(b);const r=l.reduce((n,d)=>s.includes(d.item)?[...n,d]:d.excluded?n:[...n,{...d,excluded:!0}],[]),u=s.filter(n=>!l.some(d=>d.item===n)).map(b);return[...r,...u]}),[]);return[e,c,t]},Q="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",W=_`
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
			--cosmoz-autocomplete-excluded-bg-color,
			var(--cosmoz-autocomplete-excluded-chip-icon-bg-color, #81899b)
		);
	}

	cosmoz-listbox::part(excluded)::before {
		border-color: var(
			--cosmoz-autocomplete-excluded-bg-color,
			rgb(244, 67, 54)
		);
		/* prettier-ignore */
		background: url("${Q}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,F=(o,e)=>o?.some(t=>t.item===e&&t.excluded),y=(o,e)=>e&&F(o,e)?"excluded":P,H=o=>(e,t,{highlight:c,select:a,textual:l,isSelected:s})=>{const r=l(e);return i`<div
				class="item"
				role="option"
				part="option ${y(o,e)}"
				?aria-selected=${s(e)}
				data-index=${t}
				@mouseenter=${()=>c(t)}
				@click=${()=>a(e)}
				@mousedown=${u=>u.preventDefault()}
			>
				${r}
			</div>
			<div class="sizer" virtualizer-sizer>${r}</div>`},J=(o,e)=>({item:t,content:c,disabled:a,hidden:l,className:s="chip",slot:r})=>i`<cosmoz-autocomplete-chip
			class=${x(s)}
			slot=${x(r)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${y(o,t)}
			?disabled=${a}
			?hidden=${l}
			.onClear=${()=>e(t)}
			title=${x(typeof c=="string"?c:void 0)}
		>
			${c}
		</cosmoz-autocomplete-chip>`,K=o=>{const[e,t,c]=G("value"),[a,l]=g("text"),s=m(r=>c(u=>u?.filter(n=>n.item!==r)),[]);return M({...o,value:e?.map(v),onChange:m(r=>{t(r)},[]),text:a,onText:m(r=>{l(r)},[]),itemRenderer:H(e),chipRenderer:J(e,s)})};customElements.define("cosmoz-autocomplete-excluding",j(K,{observedAttributes:D,styleSheets:[L,W]}));const N=i`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,U=(o,e)=>e==null?o:({active:t})=>t?new Promise(c=>setTimeout(()=>c(o),e)):void 0,X=({source:o,limit:e,textProperty:t,min:c,label:a="",value:l=[],disabled:s=!1,placeholder:r="",defaultIndex:u=0,showSingle:n=!1,preserveOrder:d=!1,wrap:$=!1,keepOpened:z=!1,keepQuery:k=!1,overflowed:w=!1,responseTime:C,contour:T,excludedChipBgColor:A="#8b5cf6",excludedChipColor:E="#ffffff",excludedChipClearBgColor:S="#6d28d9",excludedChipIconBgColor:B="#7c3aed",excludedListboxActiveColor:V="rgba(139, 92, 246, 0.1)"})=>{const I={maxWidth:w?"170px":"initial","--cosmoz-autocomplete-excluded-bg-color":A,"--cosmoze-autocomplete-excluded-chip-color":E,"--cosmoz-autocomplete-excluded-chip-clear-bg-color":S,"--cosmoz-autocomplete-excluded-chip-icon-bg-color":B,"--cosmoz-listbox-excluded-active-color":V},O=U(o,C);return i`
        ${N}

        <cosmoz-autocomplete-excluding
            class=${h(T,()=>"contour")}
            .label=${a}
            .placeholder=${r}
            .source=${O}
            .textProperty=${t}
            .limit=${e}
            .value=${l}
            .min=${c}
            .defaultIndex=${u}
            ?disabled=${s}
            ?show-single=${n}
            ?preserve-order=${d}
            ?wrap=${$}
            ?keep-opened=${z}
            ?keep-query=${k}
            style=${q(I)}
        ></cosmoz-autocomplete-excluding>
    `},ee={title:"Autocomplete Excluding",render:X,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"},excludedChipBgColor:{control:"color",description:"Background color for excluded chip/items",table:{category:"Styling",defaultValue:{summary:"#8b5cf6"}}},excludedChipColor:{control:"color",description:"Text color for excluded chips",table:{category:"Styling",defaultValue:{summary:"#ffffff"}}},excludedChipClearBgColor:{control:"color",description:"Background color for clear button on hover",table:{category:"Styling",defaultValue:{summary:"#6d28d9"}}},excludedChipIconBgColor:{control:"color",description:"Background color for chip icons",table:{category:"Styling",defaultValue:{summary:"#7c3aed"}}},excludedListboxActiveColor:{control:"color",description:"Background color for excluded items on hover/active",table:{category:"Styling",defaultValue:{summary:"rgba(139, 92, 246, 0.1)"}}}},decorators:[(o,{args:e})=>h(e.uppercase,()=>i`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:f,textProperty:"text",value:[{item:f[0],excluded:!1},{item:f[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [{
      item: colors[0],
      excluded: false
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
}`,...p.parameters?.docs?.source}}};const oe=["Basic"];export{p as Basic,oe as __namedExportsOrder,ee as default};
