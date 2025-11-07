import{E as I,x as u}from"./iframe-C51lQJzq.js";import{u as $,a as m,i as O,c as P,s as S,o as R,A as V,b as f,n as b,d as x,e as _}from"./data-CeO1AlA3.js";const h=o=>({item:o,excluded:!1}),y=o=>o.item,j=o=>{const[e,t]=$(o),s=m(c=>t(n=>{const l=O(c,n?.map(y));if(!l)return;if(!n)return l.map(h);const r=n.reduce((a,d)=>l.includes(d.item)?[...a,d]:d.excluded?a:[...a,{...d,excluded:!0}],[]),i=l.filter(a=>!n.some(d=>d.item===a)).map(h);return[...r,...i]}),[]);return[e,s,t]},B=(o,e)=>o?.some(t=>t.item===e&&t.excluded),v=(o,e)=>e&&B(o,e)?"excluded":I,D=o=>(e,t,{highlight:s,select:c,textual:n,isSelected:l})=>{const r=n(e);return u`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(e)}
				data-index=${t}
				data-state=${v(o,e)}
				@mouseenter=${()=>s(t)}
				@click=${()=>c(e)}
				@mousedown=${i=>i.preventDefault()}
			>
				${r}
			</div>
			<div class="sizer" virtualizer-sizer>${r}</div>`},q=(o,e)=>({item:t,content:s,disabled:c,hidden:n,className:l,slot:r})=>u`<cosmoz-autocomplete-chip
			class=${f(l)}
			slot=${f(r)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${v(o,t)}
			?disabled=${c}
			?hidden=${n}
			.onClear=${()=>e(t)}
			title=${f(typeof s=="string"?s:void 0)}
		>
			${s}
		</cosmoz-autocomplete-chip>`,Q=o=>{const[e,t,s]=j("value"),[c,n]=$("text"),l=m(r=>s(i=>i?.filter(a=>a.item!==r)),[]);return V({...o,value:e?.map(y),onChange:m(r=>{t(r)},[]),text:c,onText:m(r=>{n(r)},[]),itemRenderer:D(e),chipRenderer:q(e,l)})};customElements.define("cosmoz-autocomplete-excluding",P(Q,{observedAttributes:R,styleSheets:[S]}));const W=u`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,F=(o,e)=>e==null?o:({active:t})=>t?new Promise(s=>setTimeout(()=>s(o),e)):void 0,G=({source:o,limit:e,textProperty:t,min:s,label:c="",value:n=[],disabled:l=!1,placeholder:r="",defaultIndex:i=0,showSingle:a=!1,preserveOrder:d=!1,wrap:g=!1,keepOpened:w=!1,keepQuery:T=!1,overflowed:k=!1,responseTime:A,contour:z})=>{const C={maxWidth:k?"170px":"initial"},E=F(o,A);return u`
        ${W}
        <cosmoz-autocomplete-excluding
            class=${b(z,()=>"contour")}
            .label=${c}
            .placeholder=${r}
            .source=${E}
            .textProperty=${t}
            .limit=${e}
            .value=${n}
            .min=${s}
            .defaultIndex=${i}
            ?disabled=${l}
            ?show-single=${a}
            ?preserve-order=${d}
            ?wrap=${g}
            ?keep-opened=${w}
            ?keep-query=${T}
            style=${_(C)}
        ></cosmoz-autocomplete-excluding>
    `},K={title:"Autocomplete Excluding",render:G,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(o,{args:e})=>b(e.uppercase,()=>u`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:x,textProperty:"text",value:[{item:x[0],excluded:!1},{item:x[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const L=["Basic"];export{p as Basic,L as __namedExportsOrder,K as default};
