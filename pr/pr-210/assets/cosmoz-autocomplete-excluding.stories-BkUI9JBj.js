import{E,x as u}from"./iframe-BpxBBA1L.js";import{c as P,o as A,l as O,a as $,u as I,i as S,n as h,b as f,d as C}from"./data-BjKu2NX_.js";const x=e=>({item:e,excluded:!1}),b=e=>e.item,L=e=>{const[r,a]=I(e);return[r,t=>a(o=>{const s=S(t,o?.map(b));if(!s)return;if(!o)return s.map(x);const i=o.reduce((l,n)=>s.includes(n.item)?[...l,n]:n.excluded?l:[...l,{...n,excluded:!0}],[]),d=s.filter(l=>!o.some(n=>n.item===l)).map(x);return[...i,...d]})]},V=e=>{const[r,a]=L("value"),c=t=>r?.some(o=>o.item===t&&o.excluded);return u`<cosmoz-autocomplete
		.label=${e.label}
		.source=${e.source}
		.textProperty=${e.textProperty}
		.valueProperty=${e.valueProperty}
		.keepOpened=${e.keepOpened}
		.showSingle=${e.showSingle}
		.preserveOrder=${e.preserveOrder}
		.keepQuery=${e.keepQuery}
		.limit=${e.limit}
		.min=${e.min}
		.errorMessage=${e.errorMessage}
		.itemHeight=${e.itemHeight}
		.itemLimit=${e.itemLimit}
		.defaultIndex=${e.defaultIndex}
		.placement=${e.placement}
		?disabled=${e.disabled}
		?invalid=${e.invalid}
		?no-label-float=${e.noLabelFloat}
		?always-float-label=${e.alwaysFloatLabel}
		?external-search=${e.externalSearch}
		?wrap=${e.wrap}
		.value=${r?.map(b)}
		@value-changed=${O(a)}
		.itemRenderer=${(t,o,{highlight:s,select:i,textual:d,isSelected:l})=>{const n=d(t);return u`<div
					class="item"
					role="option"
					part="option"
					?aria-selected=${l(t)}
					data-index=${o}
					data-state=${c(t)?"excluded":E}
					@mouseenter=${()=>s(o)}
					@click=${()=>i(t)}
					@mousedown=${p=>p.preventDefault()}
				>
					${n}
				</div>
				<div class="sizer" virtualizer-sizer>${n}</div>`}}
		.chipRenderer=${({content:t,disabled:o,hidden:s,className:i,slot:d,chipItem:l})=>u`<cosmoz-autocomplete-chip
				class=${$(i)}
				slot=${$(d)}
				part="chip"
				exportparts="chip-text, chip-clear"
				data-state=${c(l)?"excluded":"included"}
				?disabled=${o}
				?hidden=${s}
				title=${$(typeof t=="string"?t:void 0)}
				.chipItem=${l}
			>
				${t}
			</cosmoz-autocomplete-chip>`}
	></cosmoz-autocomplete>`};customElements.define("cosmoz-autocomplete-excluding",P(V,{observedAttributes:A}));const _=u`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,j=(e,r)=>r==null?e:({active:a})=>a?new Promise(c=>setTimeout(()=>c(e),r)):void 0,Q=({source:e,limit:r,textProperty:a,min:c,label:t="",value:o=[],disabled:s=!1,placeholder:i="",defaultIndex:d=0,showSingle:l=!1,preserveOrder:n=!1,wrap:p=!1,keepOpened:y=!1,keepQuery:v=!1,overflowed:g=!1,responseTime:w,contour:k})=>{const z={maxWidth:g?"170px":"initial"},T=j(e,w);return u`
        ${_}
        <cosmoz-autocomplete-excluding
            class=${h(k,()=>"contour")}
            .label=${t}
            .placeholder=${i}
            .source=${T}
            .textProperty=${a}
            .limit=${r}
            .value=${o}
            .min=${c}
            .defaultIndex=${d}
            ?disabled=${s}
            ?show-single=${l}
            ?preserve-order=${n}
            ?wrap=${p}
            ?keep-opened=${y}
            ?keep-query=${v}
            style=${C(z)}
        ></cosmoz-autocomplete-excluding>
    `},F={title:"Autocomplete Excluding",render:Q,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(e,{args:r})=>h(r.uppercase,()=>u`<div style="text-transform: uppercase">${e()}</div>`,()=>e())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},m={args:{label:"Choose color",source:f,textProperty:"text",value:[{item:f[0],excluded:!1},{item:f[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["Basic"];export{m as Basic,H as __namedExportsOrder,F as default};
