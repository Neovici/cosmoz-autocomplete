import{s as b,a as f,A as w,o as p}from"./index-BToE4fu4.js";import{c as z,u as x,a as u,i as k,d as E,e as m,b as v}from"./iframe-BzpxJ5fZ.js";const C="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",y=z`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${C}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,g=o=>({item:o,excluded:!1}),$=o=>o.item,R=o=>{const[e,r]=x(o),n=u(l=>r(s=>{const t=k(l,s?.map($));if(!t)return;if(!s)return t.map(g);const c=s.reduce((a,d)=>t.includes(d.item)?[...a,d]:d.excluded?a:[...a,{...d,excluded:!0}],[]),i=t.filter(a=>!s.some(d=>d.item===a)).map(g);return[...c,...i]}),[]);return{value:e,setExcludingValue:n,setValue:r}},V=(o,e)=>o?.some(r=>r.item===e&&r.excluded),h=(o,e)=>e&&V(o,e)?"error":"gray",A=o=>(e,r,{highlight:n,select:l,textual:s,isSelected:t})=>{const c=s(e);return v`<div
				class="item"
				role="option"
				part="option ${h(o,e)}"
				?aria-selected=${t(e)}
				data-index=${r}
				@mouseenter=${()=>n(r)}
				@click=${()=>l(e)}
				@mousedown=${i=>i.preventDefault()}
			>
				${c}
			</div>
			<div class="sizer" virtualizer-sizer>${c}</div>`},I=(o,e)=>({item:r,content:n,disabled:l,hidden:s,slot:t})=>v`<cosmoz-tag
			slot=${p(t)}
			exportparts="chip-text, chip-clear"
			color=${h(o,r)}
			?disabled=${l}
			?hidden=${s}
			?removable=${!!r}
			@remove=${()=>e(r)}
			title=${p(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,M=o=>{const{value:e,setValue:r,setExcludingValue:n}=R("value"),[l,s]=x("text"),t=u(c=>r(i=>i?.filter(a=>a.item!==c)),[]);return w({...o,value:m(()=>e?.map($),[e]),onChange:u(c=>{n(c)},[]),text:l,onText:u(c=>{s(c)},[]),itemRenderer:m(()=>A(e),[e]),chipRenderer:m(()=>I(e,t),[e,t])})},S={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",E(M,{observedAttributes:f,styleSheets:[b,y],shadowRootInit:S}));
