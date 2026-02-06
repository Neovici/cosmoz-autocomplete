import{E as j,r as Ot,D as cs,A as ce,b as $,p as zt,n as us,M as hs,u as Y,v as ne,h as Fe,_ as ds}from"./iframe-C_VsEvHI.js";const U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},X=s=>(...e)=>({_$litDirective$:s,values:e});let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const Rt="important",fs=" !"+Rt,Tn=X(class extends he{constructor(s){if(super(s),s.type!==U.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const i=s[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const n=e[i];if(n!=null){this.ft.add(i);const r=typeof n=="string"&&n.endsWith(fs);i.includes("-")||r?t.setProperty(i,r?n.slice(0,-11):n,r?Rt:""):t[i]=n}}return j}});function H(s,e,t){return s?e(s):t?.(s)}let xe,Pt=0;function Ze(s){xe=s}function Xe(){xe=null,Pt=0}function ps(){return Pt++}const je=Symbol("haunted.phase"),ye=Symbol("haunted.hook"),et=Symbol("haunted.update"),tt=Symbol("haunted.commit"),G=Symbol("haunted.effects"),oe=Symbol("haunted.layoutEffects"),He="haunted.context";class gs{update;host;virtual;[ye];[G];[oe];constructor(e,t){this.update=e,this.host=t,this[ye]=new Map,this[G]=[],this[oe]=[]}run(e){Ze(this);let t=e();return Xe(),t}_runEffects(e){let t=this[e];Ze(this);for(let i of t)i.call(this);Xe()}runEffects(){this._runEffects(G)}runLayoutEffects(){this._runEffects(oe)}teardown(){this[ye].forEach(t=>{typeof t.teardown=="function"&&t.teardown(!0)})}}const ms=Promise.resolve().then.bind(Promise.resolve());function At(){let s=[],e;function t(){e=null;let i=s;s=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){s.push(i),e==null&&(e=ms(t))}}const bs=At(),st=At();class vs{renderer;host;state;[je];_updateQueued;_active;constructor(e,t){this.renderer=e,this.host=t,this.state=new gs(this.update.bind(this),t),this[je]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(bs(()=>{let e=this.handlePhase(et);st(()=>{this.handlePhase(tt,e),st(()=>{this.handlePhase(G)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,t){switch(this[je]=e,e){case tt:this.commit(t),this.runEffects(oe);return;case et:return this.render();case G:return this.runEffects(G)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const We=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},ys=s=>s?.map(e=>typeof e=="string"?We(e):e),xs=(s,...e)=>s.flatMap((t,i)=>[t,e[i]||""]).join(""),Q=xs,_s=(s="")=>s.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():"");function ws(s){class e extends vs{frag;renderResult;constructor(n,r,o){super(n,o||r),this.frag=r}commit(n){this.renderResult=s(n,this.frag)}}function t(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:h}=r||n||{},d=ys(i.styleSheets||h);class u extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(i,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new e(i,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,v,y){if(v===y)return;let _=y===""?!0:y;Reflect.set(this,_s(g),_)}}function f(m){let g=m,v=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(y){v&&g===y||(v=!0,g=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,v,y){let _;return g in m?(_=Object.getOwnPropertyDescriptor(m,g),_&&_.set?(_.set.call(y,v),!0):(Reflect.set(m,g,v,y),!0)):(typeof g=="symbol"||g[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:v}:_=f(v),Object.defineProperty(y,g,_),_.set&&_.set.call(y,v),!0)}});return Object.setPrototypeOf(u.prototype,p),u}return t}class K{id;state;constructor(e,t){this.id=e,this.state=t}}function Ss(s,...e){let t=ps(),i=xe[ye],n=i.get(t);return n||(n=new s(t,xe,...e),i.set(t,n)),n.update(...e)}function J(s){return Ss.bind(null,s)}function Tt(s){return J(class extends K{callback;lastValues;values;_teardown;constructor(e,t,i,n){super(e,t),s(t,this)}update(e,t){this.callback=e,this.values=t}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function Nt(s,e){s[G].push(e)}const k=Tt(Nt),Cs=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,It=J(class extends K{Context;value;_ranEffect;_unsubscribe;constructor(s,e,t){super(s,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Nt(e,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const e={Context:s,callback:this._updater};Cs(this.state.host).dispatchEvent(new CustomEvent(He,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:n}=e;this.value=i?n:s.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function $s(s){return e=>{const t={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(He,this)}disconnectedCallback(){this.removeEventListener(He,this)}handleEvent(i){const{detail:n}=i;n.Context===t&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let n of this.listeners)n(i)}get value(){return this._value}},Consumer:s(function({render:i}){const n=It(t);return i(n)},{useShadowDOM:!1}),defaultValue:e};return t}}const z=J(class extends K{value;values;constructor(s,e,t,i){super(s,e),this.value=t(),this.values=i}update(s,e){return this.hasChanged(e)&&(this.values=e,this.value=s()),this.value}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),C=(s,e)=>z(()=>s,e);function Es(s,e){s[oe].push(e)}const it=Tt(Es),ie=J(class extends K{args;constructor(s,e,t){super(s,e),this.updater=this.updater.bind(this),typeof t=="function"&&(t=t()),this.makeArgs(t)}update(){return this.args}updater(s){const[e]=this.args;typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}}),Ls=J(class extends K{reducer;currentState;constructor(s,e,t,i,n){super(s,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(i):i}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}}),ks=/([A-Z])/gu,Os=J(class extends K{property;eventName;constructor(s,e,t,i){if(super(s,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=t,this.eventName=t.replace(ks,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(s,e){return[this.state.host[this.property],this.updater]}updater(s){const e=this.state.host[this.property];typeof s=="function"&&(s=s(e)),!Object.is(e,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const e=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function Le(s){return z(()=>({current:s}),[])}J(class extends K{update(){return this.state.host}});function zs({render:s}){const e=ws(s),t=$s(e);return{component:e,createContext:t}}const ae=(s,e)=>{const t=s._$AN;if(t===void 0)return!1;for(const i of t)i._$AO?.(e,!1),ae(i,e);return!0},_e=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},Ft=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),As(e)}};function Rs(s){this._$AN!==void 0?(_e(this),this._$AM=s,Ft(this)):this._$AM=s}function Ps(s,e=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)ae(i[r],!1),_e(i[r]);else i!=null&&(ae(i,!1),_e(i));else ae(this,s)}const As=s=>{s.type==U.CHILD&&(s._$AP??=Ps,s._$AQ??=Rs)};class Ye extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ft(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ae(this,e),_e(this))}setValue(e){if(Ot(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const{component:W,createContext:Ts}=zs({render:cs});const N=s=>s??ce,ke=(s,...e)=>s.flatMap((t,i)=>[t,e[i]??""]).join(""),Ge=(...s)=>{const e=new CSSStyleSheet;return e.replaceSync(s.join("")),e},Me=new WeakMap,Oe=X(class extends Ye{render(s){return ce}update(s,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=s.options?.host,this.rt(this.ct=s.element)),ce}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Me.get(e);t===void 0&&(t=new WeakMap,Me.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?Me.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ns=({host:s,popoverRef:e,openOnHover:t,openOnFocus:i,open:n,close:r})=>{const o=Le(),a=()=>clearTimeout(o.current),l=()=>{clearTimeout(o.current),o.current=setTimeout(()=>{const h=e.current;t&&(s.matches(":hover")||h?.matches(":hover"))||i&&(s.matches(":focus-within")||h?.matches(":focus-within"))||r()},100)},c=()=>{a(),n()};k(()=>{if(t)return s.addEventListener("pointerenter",c),s.addEventListener("pointerleave",l),()=>{a(),s.removeEventListener("pointerenter",c),s.removeEventListener("pointerleave",l)}},[t,s]),k(()=>{if(i)return s.addEventListener("focusin",c),s.addEventListener("focusout",l),()=>{a(),s.removeEventListener("focusin",c),s.removeEventListener("focusout",l)}},[i,s])},Is=s=>{if(s.newState!=="open")return;const i=s.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of i){const r=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Fs=Q`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,js=s=>{const{placement:e="bottom span-right",openOnHover:t,openOnFocus:i}=s,n=Le(),r=()=>n.current?.showPopover(),o=()=>n.current?.hidePopover(),a=()=>n.current?.togglePopover();return Ns({host:s,popoverRef:n,openOnHover:t,openOnFocus:i,open:r,close:o}),$`
		<slot name="button" @click=${a}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${Is}
			@select=${o}
			${Oe(l=>l&&(n.current=l))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",W(js,{styleSheets:[Fs],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ze=X(class extends he{constructor(s){if(super(s),s.type!==U.PROPERTY&&s.type!==U.ATTRIBUTE&&s.type!==U.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ot(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===j||e===ce)return e;const t=s.element,i=s.name;if(s.type===U.PROPERTY){if(e===t[i])return j}else if(s.type===U.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return j}else if(s.type===U.ATTRIBUTE&&t.getAttribute(i)===e+"")return j;return zt(s),e}}),jt=J(class extends K{values;constructor(s,e,t,i){super(s,e),Object.assign(e.host,t),this.values=i}update(s,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((e,t)=>this.values[t]!==e)}}),de=J(class extends K{update(){return this.state.host}}),Ms=/([A-Z])/gu,nt=(s,e,t)=>{s[e]=t,s.dispatchEvent(new CustomEvent(e.replace(Ms,"-$1").toLowerCase()+"-changed",{detail:{value:t}}))},Mt=s=>{const e=Le(void 0),t=C(c=>e.current=c,[]),i=s.shadowRoot,n=C(c=>s.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),r=C(c=>nt(s,"value",c.target.value),[]),o=C(c=>nt(s,"focused",c.type==="focus"),[]),a=C(()=>e.current?.focus(),[]),l=C(()=>{const c=e.current?.checkValidity();return s.toggleAttribute("invalid",!c),c},[]);return jt({focus:a,validate:l},[a,l]),k(()=>{const c=h=>{h.defaultPrevented||s.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),s.matches(":focus-within")||a())};return i.addEventListener("mousedown",c),()=>i.removeEventListener("mousedown",c)},[a]),{onChange:n,onFocus:o,onInput:r,onRef:t}},Vs=s=>z(()=>{if(s==null)return;const e=new RegExp(s,"u");return t=>{!t.defaultPrevented&&t.data&&!e.test(t.data)&&t.preventDefault()}},[s]),Vt=(s,{label:e,invalid:t,errorMessage:i})=>$`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${H(e,()=>$`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${H(t&&i,()=>$`<div class="error" part="error">${i}</div>`)}
	`,Dt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ds=({placeholder:s,noLabelFloat:e,label:t})=>(e?t:void 0)||s||" ",rt=ke`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,Ut=ke`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	:host(:focus-within) {
		${rt}
	}
	@container style(--focused: focused) {
		${rt}
	}
`,Us=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Dt],Bs=s=>{const{type:e="text",pattern:t,allowedPattern:i,autocomplete:n,value:r,readonly:o,disabled:a,min:l,max:c,step:h,maxlength:d}=s,{onChange:u,onFocus:f,onInput:p,onRef:m}=Mt(s),g=Vs(i);return Vt($`
			<input
				${Oe(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${N(t)}
				autocomplete=${N(n)}
				placeholder=${Ds(s)}
				?readonly=${o}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${ze(r??"")}
				maxlength=${N(d)}
				@beforeinput=${g}
				@input=${p}
				@change=${u}
				@focus=${f}
				@blur=${f}
				min=${N(l)}
				max=${N(c)}
				step=${N(h)}
			/>
		`,s)};customElements.define("cosmoz-input",W(Bs,{observedAttributes:Us,styleSheets:[We(Ut)]}));const ot=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Hs=(s,e=0)=>{if(e>0){const t=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",e),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",t)}},Ks=s=>{const{value:e,maxRows:t}=s,i=z(()=>()=>s.shadowRoot.querySelector("#input"),[]);k(()=>Hs(i(),t),[t,i]),k(()=>ot(i()),[i,e]),k(()=>{const n=i(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ot(n)));return r.observe(n),()=>r.unobserve(n)},[i])},Js=["rows","placeholder",...Dt],Ws=s=>{const{autocomplete:e,value:t,placeholder:i,readonly:n,disabled:r,rows:o,cols:a,maxlength:l}=s,{onChange:c,onFocus:h,onInput:d,onRef:u}=Mt(s);return Ks(s),Vt($`
			<textarea id="input" part="input"
				${Oe(u)}
				autocomplete=${N(e)}
				placeholder=${i||" "}
				rows=${o??1} cols=${N(a)}
				?readonly=${n} ?aria-disabled=${r} ?disabled=${r}
				.value=${ze(t??"")} maxlength=${N(l)} @input=${d}
				@change=${c} @focus=${h} @blur=${h}>`,s)};customElements.define("cosmoz-textarea",W(Ws,{observedAttributes:Js,styleSheets:[We(Ut)]}));const Ys=s=>{const{label:e,value:t,disabled:i,error:n}=s,r=C(o=>s.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return $`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ze(!!t)}
			?disabled=${i}
			@change=${r}
		/>
		${H(e,()=>$`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${H(n,o=>$`<div class="failure">${o}</div>`)} `},Gs=Q`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,qs=Q`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",W(Ys,{styleSheets:[qs,Gs],observedAttributes:["disabled"]}));const b=s=>typeof s=="string",re=()=>{let s,e;const t=new Promise((i,n)=>{s=i,e=n});return t.resolve=s,t.reject=e,t},at=s=>s==null?"":""+s,Qs=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Zs=/###/g,lt=s=>s&&s.indexOf("###")>-1?s.replace(Zs,"."):s,ct=s=>!s||b(s),le=(s,e,t)=>{const i=b(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(ct(s))return{};const r=lt(i[n]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++n}return ct(s)?{}:{obj:s,k:lt(i[n])}},ut=(s,e,t)=>{const{obj:i,k:n}=le(s,e,Object);if(i!==void 0||e.length===1){i[n]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=le(s,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=le(s,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Xs=(s,e,t,i)=>{const{obj:n,k:r}=le(s,e,Object);n[r]=n[r]||[],n[r].push(t)},we=(s,e)=>{const{obj:t,k:i}=le(s,e);if(t)return t[i]},ei=(s,e,t)=>{const i=we(s,t);return i!==void 0?i:we(e,t)},Bt=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?b(s[i])||s[i]instanceof String||b(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):Bt(s[i],e[i],t):s[i]=e[i]);return s},te=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ti={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const si=s=>b(s)?s.replace(/[&<>"'\/]/g,e=>ti[e]):s;class ii{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const ni=[" ",",","?","!",";"],ri=new ii(20),oi=(s,e,t)=>{e=e||"",t=t||"";const i=ni.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const n=ri.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!n.test(s);if(!r){const o=s.indexOf(t);o>0&&!n.test(s.substring(0,o))&&(r=!0)}return r},Ke=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const i=e.split(t);let n=s;for(let r=0;r<i.length;){if(!n||typeof n!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],o=n[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}n=o}return n},Se=s=>s&&s.replace("_","-"),ai={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class Ce{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||ai,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,n){return n&&!this.debug?null:(b(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Ce(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ce(this.logger,e)}}var B=new Ce;class Re{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(t)||0;this.observers[i].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class ht extends Re{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,o=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):b(i)&&r?a.push(...i.split(r)):a.push(i)));const l=we(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!b(i)?l:Ke(this.data&&this.data[e]&&this.data[e][t],i,r)}addResource(e,t,i,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),n=t,t=a[1]),this.addNamespaces(t),ut(this.data,a,n),r.silent||this.emit("added",e,t,i,n)}addResources(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(b(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});n.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),n=i,i=t,t=a[1]),this.addNamespaces(t);let l=we(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Bt(l,i,r):l={...l,...i},ut(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var Ht={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,n){return s.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,t,i,n))}),e}};const dt={};class $e extends Re{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Qs(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=B.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!oi(e,i,n);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:b(r)?[r]:r};const c=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(n)}return{key:e,namespaces:b(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,h=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(h){const w=t.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${w}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${w}${o}`}return n?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:o}const d=this.resolve(e,t);let u=d&&d.res;const f=d&&d.usedKey||o,p=d&&d.exactUsedKey||o,m=Object.prototype.toString.apply(u),g=["[object Number]","[object Function]","[object RegExp]"],v=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,_=!b(u)&&typeof u!="boolean"&&typeof u!="number";if(y&&u&&_&&g.indexOf(m)<0&&!(b(v)&&Array.isArray(u))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,u,{...t,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return n?(d.res=w,d.usedParams=this.getUsedParamsDetails(t),d):w}if(r){const w=Array.isArray(u),L=w?[]:{},E=w?p:f;for(const x in u)if(Object.prototype.hasOwnProperty.call(u,x)){const I=`${E}${r}${x}`;L[x]=this.translate(I,{...t,joinArrays:!1,ns:a}),L[x]===I&&(L[x]=u[x])}u=L}}else if(y&&b(v)&&Array.isArray(u))u=u.join(v),u&&(u=this.extendTranslation(u,e,t,i));else{let w=!1,L=!1;const E=t.count!==void 0&&!b(t.count),x=$e.hasDefaultValue(t),I=E?this.pluralResolver.getSuffix(c,t.count,t):"",P=t.ordinal&&E?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",M=E&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),A=M&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${I}`]||t[`defaultValue${P}`]||t.defaultValue;!this.isValidLookup(u)&&x&&(w=!0,u=A),this.isValidLookup(u)||(L=!0,u=o);const Ie=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&L?void 0:u,V=x&&A!==u&&this.options.updateMissing;if(L||w||V){if(this.logger.log(V?"updateKey":"missingKey",c,l,o,V?A:u),r){const O=this.resolve(o,{...t,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let T=[];const ee=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ee&&ee[0])for(let O=0;O<ee.length;O++)T.push(ee[O]);else this.options.saveMissingTo==="all"?T=this.languageUtils.toResolveHierarchy(t.lng||this.language):T.push(t.lng||this.language);const D=(O,S,F)=>{const pe=x&&F!==u?F:Ie;this.options.missingKeyHandler?this.options.missingKeyHandler(O,l,S,pe,V,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(O,l,S,pe,V,t),this.emit("missingKey",O,l,S,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?T.forEach(O=>{const S=this.pluralResolver.getSuffixes(O,t);M&&t[`defaultValue${this.options.pluralSeparator}zero`]&&S.indexOf(`${this.options.pluralSeparator}zero`)<0&&S.push(`${this.options.pluralSeparator}zero`),S.forEach(F=>{D([O],o+F,t[`defaultValue${F}`]||A)})}):D(T,o,A))}u=this.extendTranslation(u,e,t,d,i),L&&u===o&&this.options.appendNamespaceToMissingKey&&(u=`${l}:${o}`),(L||w)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,w?u:void 0):u=this.options.parseMissingKeyHandler(u))}return n?(d.res=u,d.usedParams=this.getUsedParamsDetails(t),d):u}extendTranslation(e,t,i,n,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=b(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(c){const u=e.match(this.interpolator.nestingRegexp);h=u&&u.length}let d=i.replace&&!b(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,i.lng||this.language||n.usedLng,i),c){const u=e.match(this.interpolator.nestingRegexp),f=u&&u.length;h<f&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];return r&&r[0]===f[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):o.translate(...f,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=b(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Ht.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,r,o,a;return b(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),h=c.key;n=h;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const u=t.count!==void 0&&!b(t.count),f=u&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),p=t.context!==void 0&&(b(t.context)||typeof t.context=="number")&&t.context!=="",m=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(g=>{this.isValidLookup(i)||(a=g,!dt[`${m[0]}-${g}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(dt[`${m[0]}-${g}`]=!0,this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(v=>{if(this.isValidLookup(i))return;o=v;const y=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,h,v,g,t);else{let w;u&&(w=this.pluralResolver.getSuffix(v,t.count,t));const L=`${this.options.pluralSeparator}zero`,E=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(y.push(h+w),t.ordinal&&w.indexOf(E)===0&&y.push(h+w.replace(E,this.options.pluralSeparator)),f&&y.push(h+L)),p){const x=`${h}${this.options.contextSeparator}${t.context}`;y.push(x),u&&(y.push(x+w),t.ordinal&&w.indexOf(E)===0&&y.push(x+w.replace(E,this.options.pluralSeparator)),f&&y.push(x+L))}}let _;for(;_=y.pop();)this.isValidLookup(i)||(r=_,i=this.getResource(v,g,_,t))}))})}),{res:i,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,n):this.resourceStore.getResource(e,t,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!b(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const r of t)delete n[r]}return n}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}const Ve=s=>s.charAt(0).toUpperCase()+s.slice(1);class ft{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=B.create("languageUtils")}getScriptPartFromCode(e){if(e=Se(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Se(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(b(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(n=>n.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ve(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ve(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ve(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(r=>{if(r===n)return r;if(!(r.indexOf("-")<0&&n.indexOf("-")<0)&&(r.indexOf("-")>0&&n.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===n||r.indexOf(n)===0&&n.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),b(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),n=[],r=o=>{o&&(this.isSupportedCode(o)?n.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return b(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):b(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{n.indexOf(o)<0&&r(this.formatLanguageCode(o))}),n}}let li=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ci={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const ui=["v1","v2","v3"],hi=["v4"],pt={zero:0,one:1,two:2,few:3,many:4,other:5},di=()=>{const s={};return li.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:ci[e.fc]}})}),s};class fi{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=B.create("pluralResolver"),(!this.options.compatibilityJSON||hi.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=di(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=Se(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:n});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${t}${n}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((n,r)=>pt[n]-pt[r]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):i.numbers.map(n=>this.getSuffix(e,n,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:this.getSuffixRetroCompatible(n,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let n=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const r=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!ui.includes(this.options.compatibilityJSON)}}const gt=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=ei(s,e,t);return!r&&n&&b(t)&&(r=Ke(s,t,i),r===void 0&&(r=Ke(e,t,i))),r},De=s=>s.replace(/\$/g,"$$$$");class pi{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=B.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:n,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:h,unescapePrefix:d,nestingPrefix:u,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:v,alwaysFormat:y}=e.interpolation;this.escape=t!==void 0?t:si,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=r?te(r):o||"{{",this.suffix=a?te(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=h?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=u?te(u):f||te("$t("),this.nestingSuffix=p?te(p):m||te(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=v||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,n){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const v=gt(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,i,{...n,...t,interpolationkey:f}):v}const p=f.split(this.formatSeparator),m=p.shift().trim(),g=p.join(this.formatSeparator).trim();return this.format(gt(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),g,i,{...n,...t,interpolationkey:m})};this.resetRegExp();const h=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,d=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>De(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?De(this.escape(f)):De(f)}].forEach(f=>{for(a=0;r=f.regex.exec(e);){const p=r[1].trim();if(o=c(p),o===void 0)if(typeof h=="function"){const g=h(e,r,n);o=b(g)?g:""}else if(n&&Object.prototype.hasOwnProperty.call(n,p))o="";else if(d){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!b(o)&&!this.useRawValueToEscape&&(o=at(o));const m=f.safeValue(o);if(e=e.replace(r[0],m),d?(f.regex.lastIndex+=o.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,r,o;const a=(l,c)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const d=l.split(new RegExp(`${h}[ ]*{`));let u=`{${d[1]}`;l=d[0],u=this.interpolate(u,o);const f=u.match(/'/g),p=u.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(u=u.replace(/'/g,'"'));try{o=JSON.parse(u),c&&(o={...c,...o})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${h}${u}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!b(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const h=n[1].split(this.formatSeparator).map(d=>d.trim());n[1]=h.shift(),l=h,c=!0}if(r=t(a.call(this,n[1].trim(),o),o),r&&n[0]===e&&!b(r))return r;b(r)||(r=at(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((h,d)=>this.format(h,d,i.lng,{...i,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const gi=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),h=a.trim();t[h]||(t[h]=c),c==="false"&&(t[h]=!1),c==="true"&&(t[h]=!0),isNaN(c)||(t[h]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},se=s=>{const e={};return(t,i,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=s(Se(i),n),e[o]=a),a(t)}};class mi{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=B.create("formatter"),this.options=e,this.formats={number:se((t,i)=>{const n=new Intl.NumberFormat(t,{...i});return r=>n.format(r)}),currency:se((t,i)=>{const n=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>n.format(r)}),datetime:se((t,i)=>{const n=new Intl.DateTimeFormat(t,{...i});return r=>n.format(r)}),relativetime:se((t,i)=>{const n=new Intl.RelativeTimeFormat(t,{...i});return r=>n.format(r,i.range||"day")}),list:se((t,i)=>{const n=new Intl.ListFormat(t,{...i});return r=>n.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=se(t)}format(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:h}=gi(l);if(this.formats[c]){let d=a;try{const u=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},f=u.locale||u.lng||n.locale||n.lng||i;d=this.formats[c](a,f,{...h,...n,...u})}catch(u){this.logger.warn(u)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const bi=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class vi extends Re{constructor(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=B.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(e,t,i,n){const r={},o={},a={},l={};return e.forEach(c=>{let h=!0;t.forEach(d=>{const u=`${c}|${d}`;!i.reload&&this.store.hasResourceBundle(c,d)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?o[u]===void 0&&(o[u]=!0):(this.state[u]=1,h=!1,o[u]===void 0&&(o[u]=!0),r[u]===void 0&&(r[u]=!0),l[d]===void 0&&(l[d]=!0)))}),h||(a[c]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const n=e.split("|"),r=n[0],o=n[1];t&&this.emit("failedLoading",r,o,t),!t&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Xs(l.loaded,[r],o),bi(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const h=l.loaded[c];h.length&&h.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:n,wait:r,callback:o});return}this.readingCalls++;const a=(c,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&h&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,n+1,r*2,o)},r);return}o(c,h)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();b(e)&&(e=this.languageUtils.toResolveHierarchy(e)),b(t)&&(t=[t]);const r=this.queueLoad(e,t,i,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],r=i[1];this.read(n,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${n}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,n,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let h;c.length===5?h=c(e,t,i,n,l):h=c(e,t,i,n),h&&typeof h.then=="function"?h.then(d=>a(null,d)).catch(a):a(null,h)}catch(h){a(h)}else c(e,t,i,n,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,n)}}}const mt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),b(s[1])&&(e.defaultValue=s[1]),b(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),bt=s=>(b(s.ns)&&(s.ns=[s.ns]),b(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),b(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),me=()=>{},yi=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class ue extends Re{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=bt(e),this.services={},this.logger=B,this.modules={external:[]},yi(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(b(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const n=mt();this.options={...n,...this.options,...bt(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?B.init(r(this.modules.logger),this.options):B.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=mi);const d=new ft(this.options);this.store=new ht(this.options.resources,this.options);const u=this.services;u.logger=B,u.resourceStore=this.store,u.languageUtils=d,u.pluralResolver=new fi(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(u.formatter=r(h),u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new pi(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new vi(r(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];e.emit(f,...m)}),this.modules.languageDetector&&(u.languageDetector=r(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=r(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new $e(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];e.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=me),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=re(),c=()=>{const h=(d,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(u),i(d,u)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me;const n=b(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};n?o(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const n=re();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=me),this.services.backendConnector.reload(e,t,r=>{n.resolve(),i(r)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ht.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const n=re();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=b(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,h=>{o(h,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,i){var n=this;const r=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,h=new Array(c>2?c-2:0),d=2;d<c;d++)h[d-2]=arguments[d];l=n.options.overloadTranslationOptionHandler([o,a].concat(h))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const u=n.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(o)?f=o.map(p=>`${l.keyPrefix}${u}${p}`):f=l.keyPrefix?`${l.keyPrefix}${u}${o}`:o,n.t(f,l)};return b(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!n||o(r,e)))}loadNamespaces(e,t){const i=re();return this.options.ns?(b(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=re();b(e)&&(e=[e]);const n=this.options.preload||[],r=e.filter(o=>n.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=n.concat(r),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new ft(mt());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new ue(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},r=new ue(n);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new ht(this.store.data,n),r.services.resourceStore=r.store),r.translator=new $e(r.services,n),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),h=1;h<l;h++)c[h-1]=arguments[h];r.emit(a,...c)}),r.init(n,t),r.translator.options=n,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const R=ue.createInstance();R.createInstance=ue.createInstance;R.createInstance;R.dir;R.init;R.loadResources;R.reloadResources;R.use;R.changeLanguage;R.getFixedT;const xi=R.t;R.exists;R.setDefaultNamespace;R.hasLoadedNamespace;R.loadNamespaces;R.loadLanguages;class _i{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class wi{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const vt=s=>!us(s)&&typeof s.then=="function",yt=1073741823;let Si=class extends Ye{constructor(){super(...arguments),this._$Cwt=yt,this._$Cbt=[],this._$CK=new _i(this),this._$CX=new wi}render(...e){return e.find(t=>!vt(t))??j}update(e,t){const i=this._$Cbt;let n=i.length;this._$Cbt=t;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<t.length&&!(a>this._$Cwt);a++){const l=t[a];if(!vt(l))return this._$Cwt=a,l;a<n&&l===i[a]||(this._$Cwt=yt,n=0,Promise.resolve(l).then(async c=>{for(;o.get();)await o.get();const h=r.deref();if(h!==void 0){const d=h._$Cbt.indexOf(l);d>-1&&d<h._$Cwt&&(h._$Cwt=d,h.setValue(c))}}))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const xt=X(Si);const _t=(s,e,t)=>{const i=new Map;for(let n=e;n<=t;n++)i.set(s[n],n);return i},Ci=X(class extends he{constructor(s){if(super(s),s.type!==U.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const n=[],r=[];let o=0;for(const a of s)n[o]=i?i(a,o):o,r[o]=t(a,o),o++;return{values:r,keys:n}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const n=hs(s),{values:r,keys:o}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let c,h,d=0,u=n.length-1,f=0,p=r.length-1;for(;d<=u&&f<=p;)if(n[d]===null)d++;else if(n[u]===null)u--;else if(a[d]===o[f])l[f]=Y(n[d],r[f]),d++,f++;else if(a[u]===o[p])l[p]=Y(n[u],r[p]),u--,p--;else if(a[d]===o[p])l[p]=Y(n[d],r[p]),ne(s,l[p+1],n[d]),d++,p--;else if(a[u]===o[f])l[f]=Y(n[u],r[f]),ne(s,n[d],n[u]),u--,f++;else if(c===void 0&&(c=_t(o,f,p),h=_t(a,d,u)),c.has(a[d]))if(c.has(a[u])){const m=h.get(o[f]),g=m!==void 0?n[m]:null;if(g===null){const v=ne(s,n[d]);Y(v,r[f]),l[f]=v}else l[f]=Y(g,r[f]),ne(s,n[d],g),n[m]=null;f++}else Fe(n[u]),u--;else Fe(n[d]),d++;for(;f<=p;){const m=ne(s,l[p+1]);Y(m,r[f]),l[f++]=m}for(;d<=u;){const m=n[d++];m!==null&&Fe(m)}return this.ut=o,zt(s,l),j}});class Pe extends Event{constructor(e){super(Pe.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Pe.eventName="rangeChanged";class Ae extends Event{constructor(e){super(Ae.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ae.eventName="visibilityChanged";class Te extends Event{constructor(){super(Te.eventName,{bubbles:!1})}}Te.eventName="unpinned";class $i{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Ei extends $i{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:n}=this._destination;i=Math.min(i||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(i-e),o=Math.abs(n-t);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let wt=typeof window<"u"?window.ResizeObserver:void 0;const Je=Symbol("virtualizerRef"),be="virtualizer-sizer";let St;class Li{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new wt(()=>this._hostElementSizeChanged()),this._childrenRO=new wt(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Je]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=zi(this._hostElement,e),this._scrollerController=new Ei(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${be}]`);t||(t=document.createElement("div"),t.setAttribute(be,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(be,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||St;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const n={...e};delete n.type,t=n}else t=e;i===void 0&&(St=i=(await ds(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(n=>this._handleLayoutMessage(n),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:n}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let n=0;n<t.length;n++){const r=t[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[o]=i.call(this,r,this._items[o]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},ki(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Te)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(be)||e.push(t),t=t.nextElementSibling;return e}_updateView(){const e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let n,r,o,a;const l=e.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(v=>v.getBoundingClientRect());c.unshift(l);for(const v of c)n=Math.max(n,v.top),r=Math.max(r,v.left),o=Math.min(o,v.bottom),a=Math.min(a,v.right);const h=t.getBoundingClientRect(),d={left:l.left-h.left,top:l.top-h.top},u={width:t.scrollWidth,height:t.scrollHeight},f=n-l.top+e.scrollTop,p=r-l.left+e.scrollLeft,m=Math.max(0,o-n),g=Math.max(0,a-r);i.viewportSize={width:g,height:m},i.viewportScroll={top:f,left:p},i.totalScrollSize=u,i.offsetWithinScroller=d}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,n=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:n,height:r,xOffset:o,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${t}px)`,n!==void 0&&(c.style.width=n+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=o===void 0?null:o+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:n,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-n})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Pe({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ae({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ki(s){const e=window.getComputedStyle(s);return{marginTop:ve(e.marginTop),marginRight:ve(e.marginRight),marginBottom:ve(e.marginBottom),marginLeft:ve(e.marginLeft)}}function ve(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function Ct(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Oi(s,e=!1){const t=[];let i=e?s:Ct(s);for(;i!==null;)t.push(i),i=Ct(i);return t}function zi(s,e=!1){let t=!1;return Oi(s,e).filter(i=>{if(t)return!1;const n=getComputedStyle(i);return t=n.position==="fixed",n.overflow!=="visible"})}const Ri=s=>s,Pi=(s,e)=>$`${e}: ${JSON.stringify(s,null,2)}`;class Ai extends Ye{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Pi(t,i+this._first),this._keyFunction=(t,i)=>Ri(t,i+this._first),this._items=[],e.type!==U.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return Ci(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?j:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const n=e.parentNode;this._makeVirtualizer(n,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(n,r)=>t(n,r+this._first)),i&&(this._keyFunction=(n,r)=>i(n,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:n,items:r}=t;this._virtualizer=new Li({hostElement:e,layout:i,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ti=X(Ai),Ni=(s=HTMLElement)=>class extends s{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Ii=(s,e)=>{if(!s||!e)return;const t=Object.keys(e);return Object.fromEntries(Object.keys(s).flatMap(i=>t.includes(i)?[]:[[i,void 0]]))};class Fi extends he{_props;render(e){return j}update(e,[t]){return this._props!==t&&Object.assign(e.element,Ii(this._props,t),this._props=t),j}}const ji=X(Fi);function Mi(s){return()=>s}const Vi=Mi(),Kt=Vi,Ee=s=>s,In=(s,...e)=>typeof s=="function"?s(...e):s,Di=s=>{const e=de(),t=z(()=>new CSSStyleSheet,[]);k(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,t]},[]),k(()=>{t.replaceSync(s)},[s])};function Jt(s){return s?e=>e?.[s]:Ee}const Ui=s=>{const e=Jt(s);return t=>typeof t=="string"?t:e(t)?.toString()||""},Bi=s=>e=>{const t={};for(const i in e)s.includes(i)&&(t[i]=e[i]);return t},Hi="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Ki=Q`
	:host {
		display: block;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		min-width: anchor-size(width);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(200, 200, 200, 0.25);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${Hi}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Ji=({index:s,itemHeight:e,auto:t})=>Q`
	${H(!t,()=>Q`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${s||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Wi=s=>{const e=s==="auto",[t,i]=ie(e?40:s);return[t,n=>e?i(n):void 0]},Wt=Ts(()=>Kt);customElements.define("cosmoz-keybinding-provider",Wt.Provider);const Ne=s=>{const e=z(()=>({}),[]);return z(()=>Object.assign(e,s),[e,...Object.values(s)])},Ue=(s,e)=>{const t=It(Wt),i=Ne(s);k(()=>t(i),e)},Yi=Symbol("autocomplete.navigate.up"),Gi=Symbol("autocomplete.navigate.down"),qi=Symbol("autocomplete.select"),Qi=({onUp:s,onDown:e,onEnter:t})=>{const i=de(),n=()=>i.matches(":popover-open");Ue({activity:Yi,callback:s,check:n,element:()=>i},[s]),Ue({activity:Gi,callback:e,check:n,element:()=>i},[e]),Ue({activity:qi,callback:t,check:n,element:()=>i},[t])},Zi=({items:s,onSelect:e,defaultIndex:t=0})=>{const[i,n]=ie({index:t}),{index:r}=i,{length:o}=s;return k(()=>{n({index:i.index<0?t:Math.min(i.index,s.length-1),scroll:!0})},[s,t]),Qi({onUp:C(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:C(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:C(()=>r>-1&&r<o&&e?.(s[r],r),[r,s,e])}),{position:i,highlight:C(a=>n({index:a}),[]),select:C(a=>e?.(a),[e])}},Xi=s=>typeof s=="object"&&s!==null&&Symbol.iterator in s;function Z(s){return s==null?[]:Array.isArray(s)?s:typeof s=="string"?[s]:Xi(s)?Array.from(s):[s]}const Be=(s,e=Ee)=>t=>{const i=Z(s).map(e);return Z(t).filter(n=>!i.includes(e(n)))},en=(s,e)=>e?t=>Z(s).find(i=>i[e]===t[e]):t=>Z(s).includes(t),tn=(s,e)=>{if(!e||!s)return s;const t=s.toLowerCase().indexOf(e.toLowerCase());if(t<0)return s;const i=t+e.length;return[s.slice(0,t),$`<mark>${s.slice(t,i)}</mark>`,s.slice(i)]},sn=(s=Ee)=>(e,t,{highlight:i,select:n,textual:r=Ee,query:o,isSelected:a})=>{const l=r(e),c=tn(l,o),h=s(c,e,t);return $`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${t}
				@mouseenter=${()=>i(t)}
				@click=${()=>n(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},nn=({itemRenderer:s=sn(),...e})=>{const t=Ne(e);return C((i,n)=>s(i,n,t),[t,s])},rn=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],on=({value:s,valueProperty:e,items:t,onSelect:i,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const h=z(()=>en(s,e),[s,e]),d=z(()=>t.slice(),[t,h]),{position:u,highlight:f,select:p}=Zi({items:d,onSelect:i,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,g]=Wi(l);return{position:u,items:d,height:Math.min(c,d.length)*m,highlight:f,select:p,itemHeight:m,setItemHeight:g,renderItem:nn({itemRenderer:a,items:d,position:u,highlight:f,select:p,textual:o,query:r,isSelected:h})}},$t=Kt,an=s=>{const e=Le(void 0),{position:t,items:i,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=on(s);return k(()=>{const l=e.current?.[Je];l&&l.layoutComplete.then(()=>{s.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=l._layout._metricsCache;return a(c+h*2)},$t)},[i]),k(()=>{if(!t.scroll)return;const l=e.current?.[Je];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(t.index)?.scrollIntoView({block:"nearest"}),$t);return}l.element(t.index)?.scrollIntoView({block:"nearest"})}},[t]),Di(Ji({...t,itemHeight:o,auto:s.itemHeight==="auto"})),$`<div
			class="items"
			style="min-height: ${r}px"
			${Oe(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${Ti({items:i,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Ni(W(an,{styleSheets:[Ge(Ki)]})));const ln=({multi:s,hidden:e,...t},i)=>$`<cosmoz-listbox
		part="listbox"
		?multi=${s}
		?hidden=${e}
		...=${ji(Bi(rn)(t))}
		>${i}</cosmoz-listbox
	>`,cn=ke`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}

	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,un=$`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,hn=({onClear:s,disabled:e})=>$`
	<div class="content" part="content chip-text"><slot></slot></div>
	${H(s&&!e,()=>$`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${t=>t.preventDefault()}
				@click=${s}
			>
				${un}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",W(hn,{observedAttributes:["disabled"],styleSheets:[Ge(cn)]}));const dn=({content:s,onClear:e,disabled:t,hidden:i,className:n="chip",slot:r})=>$`<cosmoz-autocomplete-chip
		class=${N(n)}
		slot=${N(r)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${t}
		?hidden=${i}
		.onClear=${e}
		title=${N(typeof s=="string"?s:void 0)}
		>${s}</cosmoz-autocomplete-chip
	>`,fn=({value:s,min:e=0,onDeselect:t,textual:i,disabled:n,chipRenderer:r=dn})=>[...s.filter(Boolean).map(o=>r({item:o,content:i(o),onClear:s.length>e&&(()=>t(o)),disabled:n,slot:"control"})),r({item:null,content:$`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],pn=Q`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",W(()=>ce,{styleSheets:[pn]}));const gn=ke`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,qe=(s,e=()=>({}))=>{const t={type:s,toString(){return s}};return Object.assign((...n)=>Object.assign(e(...n),t),t)},Et=s=>s.type||s.toString(),Lt=s=>Array.isArray(s)?s:[s],mn=(s,e)=>{const t=Lt(e),i=(t.every(Array.isArray)?t:[t]).map(([n,r])=>({actions:Lt(n).map(Et),handle:r}));return(n=s,r)=>{const o=i.find(a=>a.actions.includes(Et(r)));return o?o.handle(n,r):n}},q={pending:"pending",rejected:"rejected",resolved:"resolved"},Yt={error:void 0,result:void 0,state:q.pending},Gt=qe(q.pending),qt=qe(q.resolved,s=>({result:s})),Qt=qe(q.rejected,s=>({error:s})),bn=mn(Yt,[[Gt,()=>({error:void 0,result:void 0,state:q.pending})],[qt,(s,{result:e})=>({error:void 0,result:e,state:q.resolved})],[Qt,(s,{error:e})=>({error:e,result:void 0,state:q.rejected})]]),vn=s=>{const[{error:e,result:t,state:i},n]=Ls(bn,Yt);return k(()=>{if(!s)return;let r=!1;return n(Gt()),s.then(o=>!r&&n(qt(o)),o=>!r&&n(Qt(o))),()=>{r=!0}},[s]),[t,e,i]},yn=({focused:s,empty:e,...t})=>{const i=s&&e&&t.limit!==1,n=Ne(t);k(()=>{if(!i)return;const r=o=>{if(o.defaultPrevented)return;const{key:a}=o,l=Z(n.value),c=n.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return n.onChange(l.slice(0,-1))};return document.addEventListener("keydown",r,!0),()=>document.removeEventListener("keydown",r,!0)},[i,n])},kt=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),xn=(s,e,t)=>{if(!e)return s;const i=kt(e.toLowerCase()),n=[];for(const r of s){const a=kt(t(r).toLowerCase()).indexOf(i);a<0||n.push({item:r,index:a})}return n.sort((r,o)=>r.index-o.index).map(({item:r})=>r)},_n=s=>s===!1||s==null?[]:s,Zt=(s,e,t)=>s.dispatchEvent(new CustomEvent(e,{detail:t})),wn=(s,e,t)=>C(i=>{e?.(i),Zt(s,t,i)},[e]),Sn=[],Cn=s=>(...e)=>{let t;const i=()=>{t&&cancelAnimationFrame(t)};return i(),t=requestAnimationFrame(()=>{t=void 0,s(...e)}),i},$n=({value:s,text:e,onChange:t,onText:i,onSelect:n,limit:r,min:o,source:a,textProperty:l,textual:c,valueProperty:h,keepOpened:d,keepQuery:u,preserveOrder:f,defaultIndex:p,externalSearch:m,onFocus:g})=>{const v=z(()=>(c??Ui)(l),[c,l]),y=de(),[_,w]=ie(!1),[L,E]=ie(!0),x=_&&!L,I=!e,P=z(()=>e?.trim(),[e]),M=wn(y,i,"text"),A=C(S=>{t?.(S,()=>E(!0)),Zt(y,"value",S)},[t]),[fe,Ie]=ie([]),V=z(()=>Promise.resolve(typeof a=="function"?a({query:P,active:x}):a).then(_n),[a,x,P]),T=z(()=>Z(s),[s]);k(()=>V.then(Ie),[V]);const ee=C(S=>{const F=S.type==="focusin";w(F),F&&E(!1),g?.(F)},[g]);yn({focused:_,empty:I,limit:r,value:T,onChange:A,onText:M}),k(()=>{!_&&!u&&M("")},[_,u]);const D=Ne({onText:M,onChange:A,value:T,limit:r,min:o,keepQuery:u,keepOpened:d,setClosed:E,onSelect:n}),[,,O]=vn(V);return{active:x,query:P,textual:v,value:T,source$:V,loading:O==="pending",items:z(()=>{if(!x)return Sn;const S=f?fe:[...T,...Be(T,Jt(h))(fe)];return m?S:xn(S,P,v)},[fe,x,P,v,I,T,f,h,m]),onClick:C(()=>E(!1),[]),onFocus:ee,onText:C(S=>{M(S.target.value),E(!1)},[M,e,E]),onSelect:C(S=>{D.onSelect?.(S,D);const{onChange:F,onText:pe,limit:is,min:ns,value:rs,keepQuery:os,keepOpened:as,setClosed:ls}=D;os||pe(""),as||ls(!0);const ge=Z(rs),Qe=ge.includes(S);Qe&&ge.length===ns||F((Qe?Be(S)(ge):[...ge,S]).slice(-is))},[D]),onDeselect:C(S=>D.onChange(Be(S)(D.value)),[D]),defaultIndex:P!==void 0&&P?.length>0?0:p}},En=s=>{const e=s.shadowRoot.querySelectorAll(".chip"),t=s.shadowRoot.querySelector(".badge");t.hidden=!0;for(const a of e)a.hidden=!1;const n=s.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=n.x+n.width-24))break}const o=e.length-r;for(t.querySelector("span").textContent="+"+o.toString(),t.hidden=o<1;r<e.length;r++)e[r].hidden=!0},Ln=({value:s,active:e,wrap:t,limit:i})=>{const n=de(),r=!(t||i==1),o=z(()=>Cn(()=>En(n)),[]),[a,l]=ie(0);it(()=>{if(!r)return;const c=n.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(d=>{l(d[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[r]),it(()=>r?o():void 0,[r,a,e,s])},kn=["input","control","label","line","error","wrap"].map(s=>`${s}: input-${s}`).join(),On=({active:s,isSingle:e,showSingle:t})=>s?!(e&&!t):!1,zn=s=>{const{active:e,invalid:t,errorMessage:i,label:n,placeholder:r,disabled:o,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:h,onText:d,onFocus:u,onClick:f,onDeselect:p,value:m,limit:g,min:v,showSingle:y,items:_,source$:w,loading:L,chipRenderer:E}=s,x=de(),I=g==1,P=I&&m?.[0]!=null;k(()=>(x.addEventListener("focusin",u),x.addEventListener("focusout",u),()=>{x.removeEventListener("focusin",u),x.removeEventListener("focusout",u)}),[u]),jt({focus:()=>x.shadowRoot?.querySelector("#input")?.focus()},[]);const M=L||_.length>0||h!=null&&h.length>0;return $`<cosmoz-dropdown-next open-on-focus>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${n}
				.placeholder=${P?void 0:r}
				?no-label-float=${a}
				?always-float-label=${m?.length>0||l}
				?readonly=${P}
				?disabled=${o}
				?invalid=${xt(w.then(()=>t,()=>!0),t)}
				.errorMessage=${xt(w.then(()=>i,A=>A.message),i)}
				.value=${ze(h)}
				@value-changed=${d}
				@click=${A=>{A.stopPropagation(),f()}}
				autocomplete="off"
				exportparts=${kn}
				?data-one=${I}
				?data-single=${P}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${fn({value:m,min:v,onDeselect:p,textual:c,disabled:o,chipRenderer:E})}
			</cosmoz-input>

			${H(On({active:e,isSingle:P,showSingle:y}),()=>ln({...s,items:_,multi:!I,hidden:!M},H(L,()=>$`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>H(h!=null&&h.length>0&&_.length===0,()=>$`<slot name="no-result">
											<p class="no-result">${xi("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Xt=s=>{const e={...s,...$n(s)};return Ln(e),zn(e)},es=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Rn=s=>{const{onChange:e,onText:t,...i}=s,[n,r]=Os("value");return k(()=>{s.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Xt({...i,value:n,onChange:C((o,...a)=>{r(o),e?.(o,...a)},[e]),onText:C(o=>{s.text=o,t?.(o)},[t])})},ts=[Ge(gn)],ss={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",W(Xt,{observedAttributes:es,styleSheets:ts,shadowRootInit:ss}));customElements.define("cosmoz-autocomplete",W(Rn,{observedAttributes:es,styleSheets:ts,shadowRootInit:ss}));const Fn=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(s=>({text:s}));export{Xt as A,C as a,W as b,Q as c,z as d,N as e,Fn as f,Tn as g,R as h,In as i,H as n,es as o,gn as s,Os as u};
