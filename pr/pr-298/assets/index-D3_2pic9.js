import{o as u}from"./use-autocomplete-BnArfQ27.js";import{c as f,u as x,i as b,a as w,d as p,b as v}from"./iframe-zCxUUSHg.js";import{u as m}from"./index-s1pP-A5o.js";import{s as z,o as k,A as E}from"./index-Bt6z4p6V.js";const C="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",y=f`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${C}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,g=o=>({item:o,excluded:!1}),$=o=>o.item,R=o=>{const[e,r]=x(o),n=m(l=>r(c=>{const s=b(l,c?.map($));if(!s)return;if(!c)return s.map(g);const t=c.reduce((i,d)=>s.includes(d.item)?[...i,d]:d.excluded?i:[...i,{...d,excluded:!0}],[]),a=s.filter(i=>!c.some(d=>d.item===i)).map(g);return[...t,...a]}),[]);return{value:e,setExcludingValue:n,setValue:r}},V=(o,e)=>o?.some(r=>r.item===e&&r.excluded),h=(o,e)=>e&&V(o,e)?"error":"gray",A=o=>(e,r,{highlight:n,select:l,textual:c,isSelected:s})=>{const t=c(e);return v`<div
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
		</cosmoz-tag>`,M=o=>{const{value:e,setValue:r,setExcludingValue:n}=R("value"),[l,c]=x("text"),s=m(t=>r(a=>a?.filter(i=>i.item!==t)),[]);return E({...o,value:p(()=>e?.map($),[e]),onChange:m(t=>{n(t)},[]),text:l,onText:m(t=>{c(t)},[]),itemRenderer:p(()=>A(e),[e]),chipRenderer:p(()=>I(e,s),[e,s])})},S={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",w(M,{observedAttributes:k,styleSheets:[z,y],shadowRootInit:S}));
