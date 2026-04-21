import{s as b,a as f,A as w,o as m}from"./index-DdCPlEWi.js";import{c as z,u as x,a as u,i as k,d as E,e as p,b as v}from"./iframe-DKGNTcQk.js";const C="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",y=z`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${C}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,g=o=>({item:o,excluded:!1}),$=o=>o.item,R=o=>{const[e,r]=x(o),n=u(l=>r(c=>{const s=k(l,c?.map($));if(!s)return;if(!c)return s.map(g);const t=c.reduce((a,d)=>s.includes(d.item)?[...a,d]:d.excluded?a:[...a,{...d,excluded:!0}],[]),i=s.filter(a=>!c.some(d=>d.item===a)).map(g);return[...t,...i]}),[]);return{value:e,setExcludingValue:n,setValue:r}},V=(o,e)=>o?.some(r=>r.item===e&&r.excluded),h=(o,e)=>e&&V(o,e)?"error":"gray",A=o=>(e,r,{highlight:n,select:l,textual:c,isSelected:s})=>{const t=c(e);return v`<div
				class="item"
				role="option"
				part="option ${h(o,e)}"
				?aria-selected=${s(e)}
				data-index=${r}
				@mouseenter=${()=>n(r)}
				@click=${()=>l(e)}
				@mousedown=${i=>i.preventDefault()}
			>
				${t}
			</div>
			<div class="sizer" virtualizer-sizer>${t}</div>`},I=(o,e)=>({item:r,content:n,disabled:l,hidden:c,className:s="chip",slot:t})=>v`<cosmoz-tag
			class=${m(s)}
			slot=${m(t)}
			exportparts="chip-text, chip-clear"
			color=${h(o,r)}
			?disabled=${l}
			?hidden=${c}
			?removable=${!!r}
			@remove=${()=>e(r)}
			title=${m(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,M=o=>{const{value:e,setValue:r,setExcludingValue:n}=R("value"),[l,c]=x("text"),s=u(t=>r(i=>i?.filter(a=>a.item!==t)),[]);return w({...o,value:p(()=>e?.map($),[e]),onChange:u(t=>{n(t)},[]),text:l,onText:u(t=>{c(t)},[]),itemRenderer:p(()=>A(e),[e]),chipRenderer:p(()=>I(e,s),[e,s])})},S={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",E(M,{observedAttributes:f,styleSheets:[b,y],shadowRootInit:S}));
