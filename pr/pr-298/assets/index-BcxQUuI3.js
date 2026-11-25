import{o as z,t as q,r as C,u as A,s as I,l as B}from"./use-autocomplete-BnArfQ27.js";import{w as M,b as h,e as x,d as T,f as y,a as P,u as E,t as b}from"./iframe-zCxUUSHg.js";import{n as f,a as O,s as j,u as $,l as F}from"./index-s1pP-A5o.js";import{s as H}from"./search-md-Cfe-1-JP.js";const W=({slot:e,title:o,className:r,width:t="24",height:s="24",styles:i}={})=>h`
  <svg
    slot=${z(e)}
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
    height=${s}
    style=${z(i)}
  >
    ${f(o,()=>M`<title>${o}</title>`)}
    <path d="M12 5v14m-7-7h14" />
  </svg>
`,D=q`
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
		/* one chip row: the height follows the tag sizes */
		min-height: 1.6875rem;
		padding: 0 calc(var(--cz-spacing) * 2.5);
		border: 0;
		border-radius: var(--cz-radius-sm);
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

	:host([size='sm']) .add,
	:host([size='sm']) .overflow-button {
		min-height: 1.5rem;
		font-size: var(--cz-text-2xs);
		line-height: var(--cz-text-2xs-line-height);
	}

	:host([size='lg']) .add,
	:host([size='lg']) .overflow-button,
	:host([size='xl']) .add,
	:host([size='xl']) .overflow-button {
		min-height: 1.9375rem;
		border-radius: var(--cz-radius-md);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
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
`,L=e=>{const o=e.shadowRoot.querySelectorAll(".chip"),r=e.shadowRoot.querySelector(".badge"),t=e.shadowRoot.querySelector(".pill-row");if(!r||!t)return"";r.hidden=!0;for(const a of o)a.hidden=!1;const s=t.querySelector("cosmoz-dropdown-next"),i=s?s.getBoundingClientRect().width+8:0,n=t.getBoundingClientRect(),l=a=>g=>{const m=g.getBoundingClientRect();return m.x+m.width<=n.x+n.width-a},c=Array.from(o);let d=c.length;if(!c.every(l(s?i:24))){const a=l(s?i+48:24);d=c.findIndex(g=>!a(g))}const p=o.length-d;r.querySelector("span").textContent="+"+p.toString(),r.hidden=p<1,r.setAttribute("name","overflow");const u=c.slice(d);for(const a of u)a.hidden=!0;return u.map(a=>a.title||a.textContent?.trim()).join(", ")},N=({value:e,opened:o})=>{const r=O(),t=(e?.length??0)>0,[s,i]=x(""),n=T(()=>C(()=>i(L(r))),[]),[l,c]=x(0);return y(()=>{if(!t)return;const d=r.shadowRoot.querySelector(".pill-row");if(!d)return;const p=new ResizeObserver(u=>{c(u[0].contentRect.width)});return p.observe(d),()=>p.disconnect()},[t]),y(()=>t?n():void 0,[t,l,o,e]),s},k={sm:"sm",md:"md",lg:"lg",xl:"lg"},V=e=>k[e]??k.md,Y=()=>h`<slot name="no-result">
		<span class="no-result">${b("No results found")}</span>
	</slot>`,G=e=>{if(e.newState!=="closed")return;const o=e.currentTarget;!o.matches(":focus-within")&&document.activeElement!==document.body||o.querySelector(".add")?.focus()},J=e=>{const{opened:o,setOpened:r,disabled:t,label:s,placeholder:i,searchPlaceholder:n,text:l,onText:c,onToggle:d,onDeselect:p,value:u,min:a,textual:g,chipRenderer:m,items:w,loading:S,size:R}=e;return h`<div
		class="pill-row"
		part="row"
		@click=${v=>!t&&v.target.closest?.(".badge")&&r(!0)}
	>
		${I({value:u,min:a,onDeselect:p,textual:g,disabled:t,chipRenderer:m,size:V(R),overflowBadge:h`<button
				type="button"
				class="badge overflow-button"
				name="overflow"
				?disabled=${t}
				aria-label=${b("Show more")}
				aria-haspopup="dialog"
				aria-expanded=${o?"true":"false"}
				hidden
			>
				<span></span>
			</button>`})}
		<cosmoz-dropdown-next
			?disabled=${t}
			.opened=${o}
			@dropdown-toggle=${v=>{d(v),G(v)}}
			part="dropdown"
		>
			<button
				slot="button"
				class="add"
				part="add"
				type="button"
				?disabled=${t}
				aria-haspopup="dialog"
				aria-expanded=${o?"true":"false"}
			>
				${W({width:"12",height:"12"})}
				<span>${i??s}</span>
			</button>
			<div class="panel" part="panel">
				<cosmoz-input
					class="search"
					part="search"
					autofocus
					compact
					.label=${s??i}
					.placeholder=${n??b("Search")}
					.value=${B(l)}
					@value-changed=${c}
					autocomplete="off"
				>
					${H({slot:"prefix",width:"16",height:"16"})}
				</cosmoz-input>
				${f(o,()=>F({...e,items:w,multi:!0,checkmark:!0},f(S,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>f(l&&w.length===0,()=>Y()))))}
				<slot name="footer"></slot>
			</div>
		</cosmoz-dropdown-next>
	</div>`},K=e=>{const o={...e,...A({...e,searchInPopup:!0})},r=N(o);return h`${J(o)}
		<cosmoz-tooltip
			for="overflow"
			description=${r}
		></cosmoz-tooltip>`},Q=e=>{const{onChange:o,onText:r,...t}=e,[s,i]=E("value");return K({...t,value:s,onChange:$((n,...l)=>{i(n),o?.(n,...l)},[o]),onText:$(n=>{e.text=n,r?.(n)},[r])})},U=["disabled","label","size","placeholder","search-placeholder","text-property","value-property","limit","min","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","lazy-open"],X={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-pills",P(Q,{observedAttributes:U,styleSheets:[j(D)],shadowRootInit:X}));
