import{b as m,w as V,E as f,n as F,e as C,d as L,f as _,t as N,a as E,u as Q,g as W}from"./iframe-C4ySl2j_.js";import{n as h,e as M,i as J,f as U,a as tt,l as et,s as ot,u as A}from"./index-CnHIaa_i.js";import{o as v,t as nt,r as st,u as it,l as rt,s as at}from"./use-autocomplete-C4VLhZI7.js";const ct=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>m`
  <svg
    slot=${v(e)}
    class=${`chevron-down-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${v(s)}
  >
    ${h(t,()=>V`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`;const lt={},R=M(class extends J{constructor(){super(...arguments),this.ot=lt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return f}else if(this.ot===t)return f;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class dt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ut{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const S=e=>!F(e)&&typeof e.then=="function",k=1073741823;class pt extends U{constructor(){super(...arguments),this._$Cwt=k,this._$Cbt=[],this._$CK=new dt(this),this._$CX=new ut}render(...t){return t.find(o=>!S(o))??f}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!S(i))return this._$Cwt=c,i;c<r&&i===n[c]||(this._$Cwt=k,r=0,Promise.resolve(i).then(async a=>{for(;d.get();)await d.get();const l=s.deref();if(l!==void 0){const u=l._$Cbt.indexOf(i);u>-1&&u<l._$Cwt&&(l._$Cwt=u,l.setValue(a))}}))}return f}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const q=M(pt),ht=nt`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag:not([hidden]))::part(
			label
		) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	/* a cell hides its error text behind a value (the red border stays); cosmoz-input only sees typed text */
	cosmoz-input[variant='cell'][data-has-value]::part(error) {
		visibility: hidden;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`,mt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return"";o.hidden=!0;for(const a of t)a.hidden=!1;const n=e.shadowRoot.querySelector("cosmoz-input").shadowRoot.querySelector(".control").getBoundingClientRect(),r=a=>l=>{const u=l.getBoundingClientRect();return u.x+u.width<=n.x+n.width-a},s=Array.from(t);let d=s.length;if(!s.every(r(24))){const a=r(72);d=s.findIndex(l=>!a(l))}const c=t.length-d;o.querySelector("span").textContent="+"+c.toString(),o.hidden=c<1,o.setAttribute("name","overflow");const i=s.slice(d);for(const a of i)a.hidden=!0;return i.map(a=>a.title||a.textContent?.trim()).join(", ")},gt=({value:e,opened:t,wrap:o,limit:n})=>{const r=tt(),s=!(o||n===1)&&e.length>0,[d,c]=C(""),i=L(()=>st(()=>c(mt(r))),[]),[a,l]=C(0);return _(()=>{if(!s)return;const u=r.shadowRoot.querySelector("cosmoz-input"),p=new ResizeObserver(w=>{l(w[0].contentRect.width)});return p.observe(u),()=>p.disconnect()},[s]),_(()=>s?i():void 0,[s,a,t,e]),d},ft=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),vt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,wt=()=>m`<slot name="no-result">
		<span class="no-result">${N("No results found")}</span>
	</slot>`,$t=e=>{const{variant:t,opened:o,invalid:n,errorMessage:r,hint:s,label:d,placeholder:c,compact:i,required:a,disabled:l,textual:u,text:p,onText:w,onToggle:K,onDeselect:P,value:$,limit:T,min:X,showSingle:Z,items:z,source$:g,loading:y,chipRenderer:j,mode:B}=e,x=T===1,b=x&&$?.[0]!=null,D=y||z.length>0||p!=null&&p.length>0;return m`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${l}
			.opened=${o}
			@dropdown-toggle=${K}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${d}
				.placeholder=${b?void 0:c}
				hint=${v(s)}
				variant=${v(t)}
				?compact=${i}
				?disabled=${l}
				?required=${a}
				?invalid=${R([g,n],()=>q(g.then(()=>n,()=>!0),n))}
				.errorMessage=${R([g,r],()=>q(g.then(()=>r,H=>H.message),r))}
				.value=${rt(p)}
				@value-changed=${w}
				autocomplete="off"
				exportparts=${ft}
				?data-one=${x}
				?data-single=${b}
				?data-has-value=${!!$?.length}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${h(B==="select",()=>ct({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${at({value:$,min:X,onDeselect:P,textual:u,disabled:l,chipRenderer:j})}
			</cosmoz-input>

			${h(vt({opened:o,isSingle:b,showSingle:Z,hasResultsOrQuery:D}),()=>et({...e,items:z,multi:!x},h(y,()=>m`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>h(p!=null&&p.length>0&&z.length===0,()=>wt()))))}
		</cosmoz-dropdown-next>`},O=e=>{const t={...e,...it(e)},o=gt(t);return m`${$t(t)}
			<cosmoz-tooltip
				for="overflow"
				description=${o}
			></cosmoz-tooltip>`},Y=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],zt=e=>{const{onChange:t,onText:o,mode:n,...r}=e,s=n==="select",[d,c]=Q("value");return W(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),O({...r,...s&&{limit:1,min:1,showSingle:!0},mode:n,value:d,onChange:A((i,...a)=>{c(s?i[0]:i),t?.(i,...a)},[t,s]),onText:A(i=>{e.text=i,o?.(i)},[o])})},G=[ot(ht)],I={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",E(O,{observedAttributes:Y,styleSheets:G,shadowRootInit:I}));customElements.define("cosmoz-autocomplete",E(zt,{observedAttributes:Y,styleSheets:G,shadowRootInit:I}));export{O as A,ct as c,Y as o,ht as s};
