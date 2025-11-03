import{x as m}from"./iframe-eEldwc3Q.js";import{c as z,o as P,l as A,u as E,i as O,n as x,a as $,b as I}from"./data-c1w5lujX.js";const f=e=>({item:e,excluded:!1}),b=e=>e.item,S=e=>{const[o,a]=E(e);return[o,c=>a(n=>{const s=O(c,n?.map(b));if(!s)return;if(!n)return s.map(f);const d=n.reduce((t,l)=>s.includes(l.item)?[...t,l]:l.excluded?t:[...t,{...l,excluded:!0}],[]),u=s.filter(t=>!n.some(l=>l.item===t)).map(f);return[...d,...u]})]},C=e=>{const[o,a]=S("value");return m`<cosmoz-autocomplete
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
		.value=${o?.map(b)}
		@value-changed=${A(a)}
		.itemRenderer=${(r,c,{highlight:n,select:s,textual:d,isSelected:u})=>{const t=d(r),l=o?.some(i=>i.item===r&&i.excluded);return m`<div
					class="item"
					role="option"
					part="option"
					?aria-selected=${u(r)}
					data-index=${c}
					data-state=${l?"excluded":void 0}
					@mouseenter=${()=>n(c)}
					@click=${()=>s(r)}
					@mousedown=${i=>i.preventDefault()}
				>
					${t}
				</div>
				<div class="sizer" virtualizer-sizer>${t}</div>`}}
	></cosmoz-autocomplete>`};customElements.define("cosmoz-autocomplete-excluding",z(C,{observedAttributes:P}));const L=m`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,V=(e,o)=>o==null?e:({active:a})=>a?new Promise(r=>setTimeout(()=>r(e),o)):void 0,_=({source:e,limit:o,textProperty:a,min:r,label:c="",value:n=[],disabled:s=!1,placeholder:d="",defaultIndex:u=0,showSingle:t=!1,preserveOrder:l=!1,wrap:i=!1,keepOpened:h=!1,keepQuery:y=!1,overflowed:v=!1,responseTime:g,contour:w})=>{const k={maxWidth:v?"170px":"initial"},T=V(e,g);return m`
        ${L}
        <cosmoz-autocomplete-excluding
            class=${x(w,()=>"contour")}
            .label=${c}
            .placeholder=${d}
            .source=${T}
            .textProperty=${a}
            .limit=${o}
            .value=${n}
            .min=${r}
            .defaultIndex=${u}
            ?disabled=${s}
            ?show-single=${t}
            ?preserve-order=${l}
            ?wrap=${i}
            ?keep-opened=${h}
            ?keep-query=${y}
            style=${I(k)}
        ></cosmoz-autocomplete-excluding>
    `},B={title:"Autocomplete Excluding",render:_,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(e,{args:o})=>x(o.uppercase,()=>m`<div style="text-transform: uppercase">${e()}</div>`,()=>e())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:$,textProperty:"text",value:[{item:$[0],excluded:!1},{item:$[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const D=["Basic"];export{p as Basic,D as __namedExportsOrder,B as default};
