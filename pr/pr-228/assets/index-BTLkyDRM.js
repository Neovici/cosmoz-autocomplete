import{c as f,u as g,a as i,i as z,d as $,e as m,b as h,A as k}from"./iframe-BAin42hB.js";import{s as w,o as E,A as C,a as p}from"./index-Btk6vKet.js";const y="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",A=f`
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
		background: url("${y}") var(--cosmoz-autocomplete-excluded-bg-color, rgb(244, 67, 54)) no-repeat 50%;
	}

	cosmoz-listbox::part(excluded):hover {
		background: var(
			--cosmoz-listbox-excluded-active-color,
			rgba(244, 67, 54, 0.1)
		);
	}
`,x=o=>({item:o,excluded:!1}),v=o=>o.item,R=o=>{const[e,t]=g(o),a=i(l=>t(s=>{const r=z(l,s?.map(v));if(!r)return;if(!s)return r.map(x);const c=s.reduce((d,u)=>r.includes(u.item)?[...d,u]:u.excluded?d:[...d,{...u,excluded:!0}],[]),n=r.filter(d=>!s.some(u=>u.item===d)).map(x);return[...c,...n]}),[]);return{value:e,setExcludingValue:a,setValue:t}},V=(o,e)=>o?.some(t=>t.item===e&&t.excluded),b=(o,e)=>e&&V(o,e)?"excluded":k,I=o=>(e,t,{highlight:a,select:l,textual:s,isSelected:r})=>{const c=s(e);return h`<div
				class="item"
				role="option"
				part="option ${b(o,e)}"
				?aria-selected=${r(e)}
				data-index=${t}
				@mouseenter=${()=>a(t)}
				@click=${()=>l(e)}
				@mousedown=${n=>n.preventDefault()}
			>
				${c}
			</div>
			<div class="sizer" virtualizer-sizer>${c}</div>`},M=(o,e)=>({item:t,content:a,disabled:l,hidden:s,className:r="chip",slot:c})=>h`<cosmoz-autocomplete-chip
			class=${p(r)}
			slot=${p(c)}
			part="chip"
			exportparts="chip-text, chip-clear"
			data-state=${b(o,t)}
			?disabled=${l}
			?hidden=${s}
			.onClear=${()=>e(t)}
			title=${p(typeof a=="string"?a:void 0)}
		>
			${a}
		</cosmoz-autocomplete-chip>`,S=o=>{const{value:e,setValue:t,setExcludingValue:a}=R("value"),[l,s]=g("text"),r=i(c=>t(n=>n?.filter(d=>d.item!==c)),[]);return C({...o,value:m(()=>e?.map(v),[e]),onChange:i(c=>{a(c)},[]),text:l,onText:i(c=>{s(c)},[]),itemRenderer:m(()=>I(e),[e]),chipRenderer:m(()=>M(e,r),[e,r])})},L={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",$(S,{observedAttributes:E,styleSheets:[w,A],shadowRootInit:L}));
