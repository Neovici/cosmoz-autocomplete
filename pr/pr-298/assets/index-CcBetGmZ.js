import{o as m}from"./use-autocomplete-C4VLhZI7.js";import{c as f,u as x,i as b,a as w,d as p,b as v}from"./iframe-C4ySl2j_.js";import{u}from"./index-CnHIaa_i.js";import{s as z,o as k,A as E}from"./index-BZ9MZG2d.js";const C="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",y=f`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${C}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,g=o=>({item:o,excluded:!1}),$=o=>o.item,R=o=>{const[e,r]=x(o),n=u(l=>r(c=>{const s=b(l,c?.map($));if(!s)return;if(!c)return s.map(g);const t=c.reduce((a,i)=>s.includes(i.item)?[...a,i]:i.excluded?a:[...a,{...i,excluded:!0}],[]),d=s.filter(a=>!c.some(i=>i.item===a)).map(g);return[...t,...d]}),[]);return{value:e,setExcludingValue:n,setValue:r}},V=(o,e)=>o?.some(r=>r.item===e&&r.excluded),h=(o,e)=>e&&V(o,e)?"error":"gray",A=o=>(e,r,{highlight:n,select:l,textual:c,isSelected:s})=>{const t=c(e);return v`<div
				class="item"
				role="option"
				part="option ${h(o,e)}"
				?aria-selected=${s(e)}
				data-index=${r}
				@mouseenter=${()=>n(r)}
				@click=${()=>l(e)}
				@mousedown=${d=>d.preventDefault()}
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
		</cosmoz-tag>`,M=o=>{const{value:e,setValue:r,setExcludingValue:n}=R("value"),[l,c]=x("text"),s=u(t=>r(d=>d?.filter(a=>a.item!==t)),[]);return E({...o,value:p(()=>e?.map($),[e]),onChange:u(t=>{n(t)},[]),text:l,onText:u(t=>{c(t)},[]),itemRenderer:p(()=>A(e),[e]),chipRenderer:p(()=>I(e,s),[e,s])})},S={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",w(M,{observedAttributes:k,styleSheets:[z,y],shadowRootInit:S}));
