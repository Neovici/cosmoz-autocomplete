import{E as I,x as i}from"./iframe-B9WNyCpy.js";import{u as $,i as P,c as O,s as S,o as R,A as V,a as f,b as m,n as b,d as x,e as _}from"./data-DP16jAP8.js";const h=o=>({item:o,excluded:!1}),y=o=>o.item,j=o=>{const[e,t]=$(o);return[e,l=>t(s=>{const n=P(l,s?.map(y));if(!n)return;if(!s)return n.map(h);const d=s.reduce((a,c)=>n.includes(c.item)?[...a,c]:c.excluded?a:[...a,{...c,excluded:!0}],[]),u=n.filter(a=>!s.some(c=>c.item===a)).map(h);return[...d,...u]})]},B=(o,e)=>o?.some(t=>t.item===e&&t.excluded),v=(o,e)=>e&&B(o,e)?"excluded":I,D=o=>(e,t,{highlight:r,select:l,textual:s,isSelected:n})=>{const d=s(e);return i`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${n(e)}
				data-index=${t}
				data-state=${v(o,e)}
				@mouseenter=${()=>r(t)}
				@click=${()=>l(e)}
				@mousedown=${u=>u.preventDefault()}
			>
				${d}
			</div>
			<div class="sizer" virtualizer-sizer>${d}</div>`},q=o=>({item:e,content:t,disabled:r,hidden:l,className:s,slot:n})=>i`<cosmoz-autocomplete-chip
			class=${m(s)}
			slot=${m(n)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${v(o,e)}
			?disabled=${r}
			?hidden=${l}
			title=${m(typeof t=="string"?t:void 0)}
		>
			${t}
		</cosmoz-autocomplete-chip>`,Q=o=>{const[e,t]=j("value"),[r,l]=$("text");return V({...o,value:e?.map(y),onChange:f(s=>{t(s)},[]),text:r,onText:f(s=>{l(s)},[]),itemRenderer:D(e),chipRenderer:q(e)})};customElements.define("cosmoz-autocomplete-excluding",O(Q,{observedAttributes:R,styleSheets:[S]}));const W=i`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,F=(o,e)=>e==null?o:({active:t})=>t?new Promise(r=>setTimeout(()=>r(o),e)):void 0,G=({source:o,limit:e,textProperty:t,min:r,label:l="",value:s=[],disabled:n=!1,placeholder:d="",defaultIndex:u=0,showSingle:a=!1,preserveOrder:c=!1,wrap:g=!1,keepOpened:w=!1,keepQuery:T=!1,overflowed:k=!1,responseTime:A,contour:z})=>{const E={maxWidth:k?"170px":"initial"},C=F(o,A);return i`
        ${W}
        <cosmoz-autocomplete-excluding
            class=${b(z,()=>"contour")}
            .label=${l}
            .placeholder=${d}
            .source=${C}
            .textProperty=${t}
            .limit=${e}
            .value=${s}
            .min=${r}
            .defaultIndex=${u}
            ?disabled=${n}
            ?show-single=${a}
            ?preserve-order=${c}
            ?wrap=${g}
            ?keep-opened=${w}
            ?keep-query=${T}
            style=${_(E)}
        ></cosmoz-autocomplete-excluding>
    `},K={title:"Autocomplete Excluding",render:G,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(o,{args:e})=>b(e.uppercase,()=>i`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},p={args:{label:"Choose color",source:x,textProperty:"text",value:[{item:x[0],excluded:!1},{item:x[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
