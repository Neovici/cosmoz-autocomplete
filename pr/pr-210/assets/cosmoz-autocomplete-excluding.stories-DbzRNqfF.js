import{x as i}from"./iframe-B6cSgFCu.js";import{c as z,o as A,l as O,u as P,i as C,n as x,a as m,b as D}from"./data-DFVU-0kV.js";const f=e=>({item:e,excluded:!1}),$=e=>e.item,I=e=>{const[t,c]=P(e);return[t,a=>c(s=>{const l=C(a,s?.map($));if(!l)return;if(!s)return l.map(f);const u=s.reduce((r,o)=>l.includes(o.item)?[...r,o]:o.excluded?r:[...r,{...o,excluded:!0}],[]),d=l.filter(r=>!s.some(o=>o.item===r)).map(f);return[...u,...d]})]},S=e=>{const[t,c]=I("value");return i`<cosmoz-autocomplete
		.label=${e.label}
		.source=${e.source}
		.textProperty=${e.textProperty}
		.keepOpened=${e.keepOpened}
		.showSignle=${e.showSingle}
		.preserveOrder=${e.preserveOrder}
		.value=${t?.map($)}
		@value-changed=${O(c)}
		.itemRenderer=${(n,a,{highlight:s,select:l,textual:u,isSelected:d})=>{const r=u(n);return i`<div
					class="item"
					role="option"
					part="option"
					?aria-selected=${d(n)}
					data-index=${a}
					@mouseenter=${()=>s(a)}
					@click=${()=>l(n)}
					@mousedown=${o=>o.preventDefault()}
				>
					${r}
					${t?.some(o=>o.item===n&&o.excluded)?"EXCLUDED":"INCLUDED"}
				</div>
				<div class="sizer" virtualizer-sizer>${r}</div>`}}
	></cosmoz-autocomplete>`};customElements.define("cosmoz-autocomplete-excluding",z(S,{observedAttributes:A}));const V=i`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,_=(e,t)=>t==null?e:({active:c})=>c?new Promise(n=>setTimeout(()=>n(e),t)):void 0,j=({source:e,limit:t,textProperty:c,min:n,label:a="",value:s=[],disabled:l=!1,placeholder:u="",defaultIndex:d=0,showSingle:r=!1,preserveOrder:o=!1,wrap:b=!1,keepOpened:h=!1,keepQuery:v=!1,overflowed:y=!1,responseTime:g,contour:w})=>{const T={maxWidth:y?"170px":"initial"},E=_(e,g);return i`
        ${V}
        <cosmoz-autocomplete-excluding
            class=${x(w,()=>"contour")}
            .label=${a}
            .placeholder=${u}
            .source=${E}
            .textProperty=${c}
            .limit=${t}
            .value=${s}
            @value-changed=${k=>console.log(k.detail)}
            .min=${n}
            .defaultIndex=${d}
            ?disabled=${l}
            ?show-single=${r}
            ?preserve-order=${o}
            ?wrap=${b}
            ?keep-opened=${h}
            ?keep-query=${v}
            style=${D(T)}
        ></cosmoz-autocomplete-excluding>
    `},U={title:"Autocomplete Excluding",render:j,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(e,{args:t})=>x(t.uppercase,()=>i`<div style="text-transform: uppercase">${e()}</div>`,()=>e())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:m,textProperty:"text",value:[{item:m[0],excluded:!1},{item:m[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const q=["Basic"];export{p as Basic,q as __namedExportsOrder,U as default};
