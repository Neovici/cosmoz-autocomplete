import{o as x,t as R,r as S,u as q,s as C,l as A}from"./use-autocomplete-C4VLhZI7.js";import{w as I,b as h,e as z,d as B,f as y,a as M,u as T,t as m}from"./iframe-C4ySl2j_.js";import{n as b,a as P,s as E,u as $,l as O}from"./index-CnHIaa_i.js";import{s as j}from"./search-md-BZvwMs9f.js";const F=({slot:o,title:e,className:r,width:t="24",height:n="24",styles:l}={})=>h`
  <svg
    slot=${x(o)}
    class=${`plus-icon ${r??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${n}
    style=${x(l)}
  >
    ${b(e,()=>I`<title>${e}</title>`)}
    <path d="M12 5v14m-7-7h14" />
  </svg>
`,H=R`
	:host {
		display: block;
		position: relative;
	}

	/* chips followed by an "add" button that opens a search popover */
	.pill-row {
		display: flex;
		align-items: center;
		gap: var(--cz-spacing);
		min-width: 0;
	}

	.pill-row cosmoz-tag {
		margin-left: 0;
		flex: none;
	}

	.pill-row .badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
		cursor: pointer;
	}

	.pill-row cosmoz-dropdown-next {
		display: block;
		flex: none;
	}

	.add,
	.overflow-button {
		display: inline-flex;
		align-items: center;
		gap: var(--cz-spacing);
		margin: 0;
		padding: calc(var(--cz-spacing) * 0.75) calc(var(--cz-spacing) * 2.5);
		border: 0;
		border-radius: var(--cz-radius-full);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		background: transparent;
		color: var(--cz-color-text-tertiary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		white-space: nowrap;
		cursor: pointer;
		transition: background 0.1s;
	}

	.overflow-button[hidden],
	[hidden] {
		display: none;
	}

	.add svg {
		color: var(--cz-color-fg-quaternary);
	}

	.overflow-button:hover,
	.add:hover,
	:host([opened]) .add {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary);
	}

	.add:focus-visible,
	.overflow-button:focus-visible {
		outline: none;
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-focus-ring);
	}

	.add[disabled] {
		display: none;
	}

	.panel {
		box-sizing: border-box;
		width: calc(var(--cz-spacing) * 72);
		max-width: calc(100vw - var(--cz-spacing) * 4);
		background: var(--cz-color-bg-primary);
		border-radius: var(--cz-radius-lg);
		box-shadow:
			0 0 0 1px var(--cz-color-border-secondary),
			var(--cz-shadow-lg);
		overflow: hidden;
	}

	.search::part(wrap) {
		border-radius: 0;
		background: transparent;
		box-shadow: inset 0 -1px 0 var(--cz-color-border-secondary);
	}

	.search svg {
		color: var(--cz-color-fg-quaternary);
	}

	.panel cosmoz-listbox {
		border-radius: 0;
		box-shadow: none;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`,W=o=>{const e=o.shadowRoot.querySelectorAll(".chip"),r=o.shadowRoot.querySelector(".badge"),t=o.shadowRoot.querySelector(".pill-row");if(!r||!t)return"";r.hidden=!0;for(const s of e)s.hidden=!1;const n=t.querySelector("cosmoz-dropdown-next"),l=n?n.getBoundingClientRect().width+8:0,a=t.getBoundingClientRect(),c=s=>g=>{const v=g.getBoundingClientRect();return v.x+v.width<=a.x+a.width-s},i=Array.from(e);let d=i.length;if(!i.every(c(n?l:24))){const s=c(n?l+48:24);d=i.findIndex(g=>!s(g))}const p=e.length-d;r.querySelector("span").textContent="+"+p.toString(),r.hidden=p<1,r.setAttribute("name","overflow");const u=i.slice(d);for(const s of u)s.hidden=!0;return u.map(s=>s.title||s.textContent?.trim()).join(", ")},D=({value:o,opened:e})=>{const r=P(),t=(o?.length??0)>0,[n,l]=z(""),a=B(()=>S(()=>l(W(r))),[]),[c,i]=z(0);return y(()=>{if(!t)return;const d=r.shadowRoot.querySelector(".pill-row");if(!d)return;const p=new ResizeObserver(u=>{i(u[0].contentRect.width)});return p.observe(d),()=>p.disconnect()},[t]),y(()=>t?a():void 0,[t,c,e,o]),n},L=()=>h`<slot name="no-result">
		<span class="no-result">${m("No results found")}</span>
	</slot>`,N=o=>{if(o.newState!=="closed")return;const e=o.currentTarget;!e.matches(":focus-within")&&document.activeElement!==document.body||e.querySelector(".add")?.focus()},V=o=>{const{opened:e,setOpened:r,disabled:t,label:n,placeholder:l,searchPlaceholder:a,text:c,onText:i,onToggle:d,onDeselect:p,value:u,min:s,textual:g,chipRenderer:v,items:w,loading:k}=o;return h`<div
		class="pill-row"
		part="row"
		@click=${f=>!t&&f.target.closest?.(".badge")&&r(!0)}
	>
		${C({value:u,min:s,onDeselect:p,textual:g,disabled:t,chipRenderer:v,overflowBadge:h`<button
				type="button"
				class="badge overflow-button"
				name="overflow"
				?disabled=${t}
				aria-label=${m("Show more")}
				aria-haspopup="dialog"
				aria-expanded=${e?"true":"false"}
				hidden
			>
				<span></span>
			</button>`})}
		<cosmoz-dropdown-next
			?disabled=${t}
			.opened=${e}
			@dropdown-toggle=${f=>{d(f),N(f)}}
			part="dropdown"
		>
			<button
				slot="button"
				class="add"
				part="add"
				type="button"
				?disabled=${t}
				aria-haspopup="dialog"
				aria-expanded=${e?"true":"false"}
			>
				${F({width:"12",height:"12"})}
				<span>${l??n}</span>
			</button>
			<div class="panel" part="panel">
				<cosmoz-input
					class="search"
					part="search"
					autofocus
					compact
					.label=${n??l}
					.placeholder=${a??m("Search")}
					.value=${A(c)}
					@value-changed=${i}
					autocomplete="off"
				>
					${j({slot:"prefix",width:"16",height:"16"})}
				</cosmoz-input>
				${b(e,()=>O({...o,items:w,multi:!0,checkmark:!0},b(k,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>b(c&&w.length===0,()=>L()))))}
				<slot name="footer"></slot>
			</div>
		</cosmoz-dropdown-next>
	</div>`},Y=o=>{const e={...o,...q({...o,searchInPopup:!0})},r=D(e);return h`${V(e)}
		<cosmoz-tooltip
			for="overflow"
			description=${r}
		></cosmoz-tooltip>`},G=o=>{const{onChange:e,onText:r,...t}=o,[n,l]=T("value");return Y({...t,value:n,onChange:$((a,...c)=>{l(a),e?.(a,...c)},[e]),onText:$(a=>{o.text=a,r?.(a)},[r])})},J=["disabled","label","placeholder","search-placeholder","text-property","value-property","limit","min","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","lazy-open"],K={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-pills",M(G,{observedAttributes:J,styleSheets:[E(H)],shadowRootInit:K}));
