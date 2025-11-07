import{x as m,E}from"./iframe-Bmv1StQR.js";import{s as C,a as I,c as P,o as O,A as S,u as y,b as $,d as V,i as _,n as g,e as b,f as j}from"./data-BUsAB7P0.js";const v=o=>({item:o,excluded:!1}),w=o=>o.item,B=o=>{const[r,c]=V(o);return[r,i=>c(a=>{const l=_(i,a?.map(w));if(!l)return;if(!a)return l.map(v);const e=a.reduce((n,s)=>l.includes(s.item)?[...n,s]:s.excluded?n:[...n,{...s,excluded:!0}],[]),t=l.filter(n=>!a.some(s=>s.item===n)).map(v);return[...e,...t]})]},D=o=>{const{onChange:r,onText:c,...d}=o,[i,a]=B("value"),l=e=>i?.some(t=>t.item===e&&t.excluded);return S({...d,value:i?.map(w),onChange:y((e,...t)=>{a(e),r?.(e,...t)},[r]),onText:y(e=>{o.text=e,c?.(e)},[c]),itemRenderer:(e,t,{highlight:n,select:s,textual:p,isSelected:u})=>{const f=p(e);return m`<div
					class="item"
					role="option"
					part="option"
					?aria-selected=${u(e)}
					data-index=${t}
					data-state=${l(e)?"excluded":E}
					@mouseenter=${()=>n(t)}
					@click=${()=>s(e)}
					@mousedown=${h=>h.preventDefault()}
				>
					${f}
				</div>
				<div class="sizer" virtualizer-sizer>${f}</div>`},chipRenderer:({content:e,disabled:t,hidden:n,className:s,slot:p,chipItem:u})=>m`<cosmoz-autocomplete-chip
				class=${$(s)}
				slot=${$(p)}
				part="chip"
				exportparts="chip-text, chip-clear"
				data-state=${l(u)?"excluded":"included"}
				?disabled=${t}
				?hidden=${n}
				title=${$(typeof e=="string"?e:void 0)}
				.chipItem=${u}
			>
				${e}
			</cosmoz-autocomplete-chip>`})},R=[C(I)];customElements.define("cosmoz-autocomplete-excluding",P(D,{observedAttributes:O,styleSheets:R}));const q=m`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        html {
            font-family: 'Inter', sans-serif;
        }
    </style>
`,Q=(o,r)=>r==null?o:({active:c})=>c?new Promise(d=>setTimeout(()=>d(o),r)):void 0,W=({source:o,limit:r,textProperty:c,min:d,label:i="",value:a=[],disabled:l=!1,placeholder:e="",defaultIndex:t=0,showSingle:n=!1,preserveOrder:s=!1,wrap:p=!1,keepOpened:u=!1,keepQuery:f=!1,overflowed:h=!1,responseTime:T,contour:z})=>{const A={maxWidth:h?"170px":"initial"},k=Q(o,T);return m`
        ${q}
        <cosmoz-autocomplete-excluding
            class=${g(z,()=>"contour")}
            .label=${i}
            .placeholder=${e}
            .source=${k}
            .textProperty=${c}
            .limit=${r}
            .value=${a}
            .min=${d}
            .defaultIndex=${t}
            ?disabled=${l}
            ?show-single=${n}
            ?preserve-order=${s}
            ?wrap=${p}
            ?keep-opened=${u}
            ?keep-query=${f}
            style=${j(A)}
        ></cosmoz-autocomplete-excluding>
    `},H={title:"Autocomplete Excluding",render:W,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(o,{args:r})=>g(r.uppercase,()=>m`<div style="text-transform: uppercase">${o()}</div>`,()=>o())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},x={args:{label:"Choose color",source:b,textProperty:"text",value:[{item:b[0],excluded:!1},{item:b[3],excluded:!1}],keepOpened:!0},parameters:{docs:{description:{story:"The basic version"}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const J=["Basic"];export{x as Basic,J as __namedExportsOrder,H as default};
