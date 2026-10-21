import{s as b,a as f,A as w,o as u}from"./index-MbFX4LXi.js";import{c as z,u as x,a as m,i as k,d as E,e as p,b as v}from"./iframe-W0CMdWz3.js";const C="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",y=z`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${C}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,g=o=>({item:o,excluded:!1}),$=o=>o.item,R=o=>{const[e,r]=x(o),n=m(l=>r(c=>{const s=k(l,c?.map($));if(!s)return;if(!c)return s.map(g);const t=c.reduce((d,i)=>s.includes(i.item)?[...d,i]:i.excluded?d:[...d,{...i,excluded:!0}],[]),a=s.filter(d=>!c.some(i=>i.item===d)).map(g);return[...t,...a]}),[]);return{value:e,setExcludingValue:n,setValue:r}},V=(o,e)=>o?.some(r=>r.item===e&&r.excluded),h=(o,e)=>e&&V(o,e)?"error":"gray",A=o=>(e,r,{highlight:n,select:l,textual:c,isSelected:s})=>{const t=c(e);return v`<div
				class="item"
				role="option"
				part="option ${h(o,e)}"
				?aria-selected=${s(e)}
				data-index=${r}
				@mouseenter=${()=>n(r)}
				@click=${()=>l(e)}
				@mousedown=${a=>a.preventDefault()}
			>
				${t}
			</div>
			<div class="sizer" virtualizer-sizer>${t}</div>`},I=(o,e)=>({item:r,content:n,disabled:l,hidden:c,className:s="chip",slot:t,size:a})=>v`<cosmoz-tag
			class=${u(s)}
			slot=${u(t)}
			size=${u(a)}
			exportparts="chip-text, chip-clear"
			color=${h(o,r)}
			?disabled=${l}
			?hidden=${c}
			?removable=${!!r}
			@remove=${()=>e(r)}
			title=${u(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,M=o=>{const{value:e,setValue:r,setExcludingValue:n}=R("value"),[l,c]=x("text"),s=m(t=>r(a=>a?.filter(d=>d.item!==t)),[]);return w({...o,value:p(()=>e?.map($),[e]),onChange:m(t=>{n(t)},[]),text:l,onText:m(t=>{c(t)},[]),itemRenderer:p(()=>A(e),[e]),chipRenderer:p(()=>I(e,s),[e,s])})},S={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",E(M,{observedAttributes:f,styleSheets:[b,y],shadowRootInit:S}));
