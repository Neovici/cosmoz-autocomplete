import{c as R,u as p,a as d,d as g,e as u,b as x,A as y}from"./iframe-B4niQBko.js";import{s as A,o as h,A as v,a as i}from"./index-BVOKeP5i.js";const V="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",I=R`
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
		background: url("${V}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,m=o=>({item:o,excluded:!1}),b=o=>o.item,f=(o,e)=>{if(!e)return;if(!o)return e.map(m);const t=o.reduce((r,c)=>e.includes(c.item)?[...r,c]:c.excluded?r:[...r,{...c,excluded:!0}],[]),s=e.filter(r=>!o.some(c=>c.item===r)).map(m);return[...t,...s]},S=o=>{const[e,t]=p(o),s=d(r=>t(c=>f(c,r)),[]);return{value:e,setExcludingValue:s,setValue:t}},M=(o,e)=>o?.some(t=>t.item===e&&t.excluded),z=(o,e)=>e&&M(o,e)?"excluded":y,$=o=>(e,t,{highlight:s,select:r,textual:c,isSelected:a})=>{const l=c(e);return x`<div
				class="item"
				role="option"
				part="option ${z(o,e)}"
				?aria-selected=${a(e)}
				data-index=${t}
				@mouseenter=${()=>s(t)}
				@click=${()=>r(e)}
				@mousedown=${n=>n.preventDefault()}
			>
				${l}
			</div>
			<div class="sizer" virtualizer-sizer>${l}</div>`},k=(o,e)=>({item:t,content:s,disabled:r,hidden:c,className:a="chip",slot:l})=>x`<cosmoz-autocomplete-chip
			class=${i(a)}
			slot=${i(l)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${z(o,t)}
			?disabled=${r}
			?hidden=${c}
			.onClear=${()=>e(t)}
			title=${i(typeof s=="string"?s:void 0)}
		>
			${s}
		</cosmoz-autocomplete-chip>`,L=o=>{const{value:e,setValue:t,setExcludingValue:s}=S("value"),[r,c]=p("text"),a=d(l=>t(n=>n?.filter(E=>E.item!==l)),[]);return v({...o,value:u(()=>e?.map(b),[e]),onChange:d(l=>{s(l)},[]),text:r,onText:d(l=>{c(l)},[]),itemRenderer:u(()=>$(e),[e]),chipRenderer:u(()=>k(e,a),[e,a])})},T=o=>{const{value:e,onChange:t,...s}=o,r=d(c=>t?.(e?.filter(a=>a.item!==c)),[e,t]);return v({...s,value:u(()=>e?.map(b),[e]),onChange:d(c=>{t?.(f(e,c))},[e,t]),itemRenderer:u(()=>$(e),[e]),chipRenderer:u(()=>k(e,r),[e,r])})},w={mode:"open",delegatesFocus:!0},C=[A,I];customElements.define("cosmoz-autocomplete-excluding",g(L,{observedAttributes:h,styleSheets:C,shadowRootInit:w}));customElements.define("cosmoz-autocomplete-excluding-ui",g(T,{observedAttributes:h,styleSheets:C,shadowRootInit:w}));
