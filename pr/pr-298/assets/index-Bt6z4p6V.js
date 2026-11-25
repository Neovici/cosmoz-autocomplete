import{b as g,w as F,E as z,n as L,e as C,d as N,f as _,t as Q,a as E,u as W,g as J}from"./iframe-zCxUUSHg.js";import{n as h,e as M,i as U,f as tt,a as et,l as ot,s as nt,u as S}from"./index-s1pP-A5o.js";import{o as m,t as st,r as it,u as rt,l as at,s as ct,c as lt}from"./use-autocomplete-BnArfQ27.js";const dt=({slot:e,title:t,className:o,width:s="24",height:r="24",styles:n}={})=>g`
  <svg
    slot=${m(e)}
    class=${`chevron-down-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${s}
    height=${r}
    style=${m(n)}
  >
    ${h(t,()=>F`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`;const ut={},A=M(class extends U{constructor(){super(...arguments),this.ot=ut}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((s,r)=>s===this.ot[r]))return z}else if(this.ot===t)return z;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class pt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ht{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const R=e=>!L(e)&&typeof e.then=="function",k=1073741823;class mt extends tt{constructor(){super(...arguments),this._$Cwt=k,this._$Cbt=[],this._$CK=new pt(this),this._$CX=new ht}render(...t){return t.find(o=>!R(o))??z}update(t,o){const s=this._$Cbt;let r=s.length;this._$Cbt=o;const n=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!R(i))return this._$Cwt=c,i;c<r&&i===s[c]||(this._$Cwt=k,r=0,Promise.resolve(i).then(async a=>{for(;d.get();)await d.get();const l=n.deref();if(l!==void 0){const u=l._$Cbt.indexOf(i);u>-1&&u<l._$Cwt&&(l._$Cwt=u,l.setValue(a))}}))}return z}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const q=M(mt),gt=st`
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
		align-items: center;
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
`,ft=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return"";o.hidden=!0;for(const a of t)a.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot.querySelector(".control").getBoundingClientRect(),r=a=>l=>{const u=l.getBoundingClientRect();return u.x+u.width<=s.x+s.width-a},n=Array.from(t);let d=n.length;if(!n.every(r(24))){const a=r(72);d=n.findIndex(l=>!a(l))}const c=t.length-d;o.querySelector("span").textContent="+"+c.toString(),o.hidden=c<1,o.setAttribute("name","overflow");const i=n.slice(d);for(const a of i)a.hidden=!0;return i.map(a=>a.title||a.textContent?.trim()).join(", ")},vt=({value:e,opened:t,wrap:o,limit:s})=>{const r=et(),n=!(o||s===1)&&e.length>0,[d,c]=C(""),i=N(()=>it(()=>c(ft(r))),[]),[a,l]=C(0);return _(()=>{if(!n)return;const u=r.shadowRoot.querySelector("cosmoz-input"),f=new ResizeObserver(p=>{l(p[0].contentRect.width)});return f.observe(u),()=>f.disconnect()},[n]),_(()=>n?i():void 0,[n,a,t,e]),d},zt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),wt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:s})=>!e||t&&!o?!1:s,$t=()=>g`<slot name="no-result">
		<span class="no-result">${Q("No results found")}</span>
	</slot>`,xt=e=>{const{variant:t,size:o,opened:s,invalid:r,errorMessage:n,hint:d,label:c,placeholder:i,compact:a,required:l,disabled:u,textual:f,text:p,onText:K,onToggle:P,onDeselect:T,value:w,limit:X,min:Z,showSingle:j,items:$,source$:v,loading:y,chipRenderer:B,mode:D}=e,x=X===1,b=x&&w?.[0]!=null,H=y||$.length>0||p!=null&&p.length>0;return g`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${u}
			.opened=${s}
			@dropdown-toggle=${P}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${c}
				.placeholder=${b?void 0:i}
				hint=${m(d)}
				variant=${m(t)}
				size=${m(o)}
				?compact=${a}
				?disabled=${u}
				?required=${l}
				?invalid=${A([v,r],()=>q(v.then(()=>r,()=>!0),r))}
				.errorMessage=${A([v,n],()=>q(v.then(()=>n,V=>V.message),n))}
				.value=${at(p)}
				@value-changed=${K}
				autocomplete="off"
				exportparts=${zt}
				?data-one=${x}
				?data-single=${b}
				?data-has-value=${!!w?.length}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${h(D==="select",()=>dt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${ct({value:w,min:Z,onDeselect:T,textual:f,disabled:u,chipRenderer:B,size:lt(o)})}
			</cosmoz-input>

			${h(wt({opened:s,isSingle:b,showSingle:j,hasResultsOrQuery:H}),()=>ot({...e,items:$,multi:!x},h(y,()=>g`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>h(p!=null&&p.length>0&&$.length===0,()=>$t()))))}
		</cosmoz-dropdown-next>`},O=e=>{const t={...e,...rt(e)},o=vt(t);return g`${xt(t)}
			<cosmoz-tooltip
				for="overflow"
				description=${o}
			></cosmoz-tooltip>`},Y=["variant","size","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],bt=e=>{const{onChange:t,onText:o,mode:s,...r}=e,n=s==="select",[d,c]=W("value");return J(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),O({...r,...n&&{limit:1,min:1,showSingle:!0},mode:s,value:d,onChange:S((i,...a)=>{c(n?i[0]:i),t?.(i,...a)},[t,n]),onText:S(i=>{e.text=i,o?.(i)},[o])})},G=[nt(gt)],I={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",E(O,{observedAttributes:Y,styleSheets:G,shadowRootInit:I}));customElements.define("cosmoz-autocomplete",E(bt,{observedAttributes:Y,styleSheets:G,shadowRootInit:I}));export{O as A,dt as c,Y as o,gt as s};
