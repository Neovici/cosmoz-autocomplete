import{T as F,f as Kt,B as Dn,E as me,m as Qt,x as C,i as Bn,p as Fn,v as te,r as he,M as et,_ as Vn}from"./iframe-P9iuIXqj.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},le=t=>(...e)=>({_$litDirective$:t,values:e});let be=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt="important",Nn=" !"+Xt,Zt=le(class extends be{constructor(t){if(super(t),t.type!==H.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const o=t[n];return o==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const s=e[o];if(s!=null){this.ft.add(o);const i=typeof s=="string"&&s.endsWith(Nn);o.includes("-")||i?n.setProperty(o,i?s.slice(0,-11):s,i?Xt:""):n[o]=s}}return F}});let Me,Gt=0;function xt(t){Me=t}function Ct(){Me=null,Gt=0}function jn(){return Gt++}const tt=Symbol("haunted.phase"),Ie=Symbol("haunted.hook"),St=Symbol("haunted.update"),Et=Symbol("haunted.commit"),ne=Symbol("haunted.effects"),fe=Symbol("haunted.layoutEffects"),it="haunted.context";class Hn{update;host;virtual;[Ie];[ne];[fe];constructor(e,n){this.update=e,this.host=n,this[Ie]=new Map,this[ne]=[],this[fe]=[]}run(e){xt(this);let n=e();return Ct(),n}_runEffects(e){let n=this[e];xt(this);for(let o of n)o.call(this);Ct()}runEffects(){this._runEffects(ne)}runLayoutEffects(){this._runEffects(fe)}teardown(){this[Ie].forEach(n=>{typeof n.teardown=="function"&&n.teardown()})}}const Wn=Promise.resolve().then.bind(Promise.resolve());function Jt(){let t=[],e;function n(){e=null;let o=t;t=[];for(var s=0,i=o.length;s<i;s++)o[s]()}return function(o){t.push(o),e==null&&(e=Wn(n))}}const Yn=Jt(),$t=Jt();class Un{renderer;host;state;[tt];_updateQueued;constructor(e,n){this.renderer=e,this.host=n,this.state=new Hn(this.update.bind(this),n),this[tt]=null,this._updateQueued=!1}update(){this._updateQueued||(Yn(()=>{let e=this.handlePhase(St);$t(()=>{this.handlePhase(Et,e),$t(()=>{this.handlePhase(ne)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,n){switch(this[tt]=e,e){case Et:this.commit(n),this.runEffects(fe);return;case St:return this.render();case ne:return this.runEffects(ne)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const ct=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},qn=t=>t?.map(e=>typeof e=="string"?ct(e):e),Kn=(t,...e)=>t.flatMap((n,o)=>[n,e[o]||""]).join(""),De=Kn,Qn=(t="")=>t.replace(/-+([a-z])?/g,(e,n)=>n?n.toUpperCase():"");function Xn(t){class e extends Un{frag;renderResult;constructor(s,i,r){super(s,r||i),this.frag=i}commit(s){this.renderResult=t(s,this.frag)}}function n(o,s,i){const r=(i||s||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:u}=i||s||{},d=qn(o.styleSheets||u);class f extends r{_scheduler;static get observedAttributes(){return o.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new e(o,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new e(o,g,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,m,v){if(m===v)return;let y=v===""?!0:v;Reflect.set(this,Qn(g),y)}}function h(p){let g=p,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(v){m&&g===v||(m=!0,g=v,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(r.prototype,{getPrototypeOf(p){return p},set(p,g,m,v){let y;return g in p?(y=Object.getOwnPropertyDescriptor(p,g),y&&y.set?(y.set.call(v,m),!0):(Reflect.set(p,g,m,v),!0)):(typeof g=="symbol"||g[0]==="_"?y={enumerable:!0,configurable:!0,writable:!0,value:m}:y=h(m),Object.defineProperty(v,g,y),y.set&&y.set.call(v,m),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return n}class J{id;state;constructor(e,n){this.id=e,this.state=n}}function Zn(t,...e){let n=jn(),o=Me[Ie],s=o.get(n);return s||(s=new t(n,Me,...e),o.set(n,s)),s.update(...e)}function ee(t){return Zn.bind(null,t)}function en(t){return ee(class extends J{callback;lastValues;values;_teardown;constructor(e,n,o,s){super(e,n),t(n,this)}update(e,n){this.callback=e,this.values=n}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,n)=>this.lastValues[n]!==e)}})}function tn(t,e){t[ne].push(e)}const z=en(tn),Gn=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Jn=ee(class extends J{Context;value;_ranEffect;_unsubscribe;constructor(t,e,n){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,tn(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Gn(this.state.host).dispatchEvent(new CustomEvent(it,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:s}=e;this.value=o?s:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function eo(t){return e=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(it,this)}disconnectedCallback(){this.removeEventListener(it,this)}handleEvent(o){const{detail:s}=o;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let s of this.listeners)s(o)}get value(){return this._value}},Consumer:t(function({render:o}){const s=Jn(n);return o(s)},{useShadowDOM:!1}),defaultValue:e};return n}}const A=ee(class extends J{value;values;constructor(t,e,n,o){super(t,e),this.value=n(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),x=(t,e)=>A(()=>t,e);function to(t,e){t[fe].push(e)}const zt=en(to),Z=ee(class extends J{args;constructor(t,e,n){super(t,e),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),no=ee(class extends J{reducer;currentState;constructor(t,e,n,o,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),oo=/([A-Z])/gu,so=ee(class extends J{property;eventName;constructor(t,e,n,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(oo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function nn(t){return A(()=>({current:t}),[])}function io({render:t}){const e=Xn(t),n=eo(e);return{component:e,createContext:n}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(t,e)=>{const n=t._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(e,!1),pe(o,e);return!0},Be=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},on=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),ao(e)}};function ro(t){this._$AN!==void 0?(Be(this),this._$AM=t,on(this)):this._$AM=t}function lo(t,e=!1,n=0){const o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(o))for(let i=n;i<o.length;i++)pe(o[i],!1),Be(o[i]);else o!=null&&(pe(o,!1),Be(o));else pe(this,t)}const ao=t=>{t.type==H.CHILD&&(t._$AP??=lo,t._$AQ??=ro)};class dt extends be{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),on(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(pe(this,e),Be(this))}setValue(e){if(Kt(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:ae}=io({render:Dn});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=le(class extends be{constructor(t){if(super(t),t.type!==H.PROPERTY&&t.type!==H.ATTRIBUTE&&t.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Kt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===F||e===me)return e;const n=t.element,o=t.name;if(t.type===H.PROPERTY){if(e===n[o])return F}else if(t.type===H.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return F}else if(t.type===H.ATTRIBUTE&&n.getAttribute(o)===e+"")return F;return Qt(t),e}}),nt=new WeakMap,ve=le(class extends dt{render(t){return me}update(t,[e]){const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),me}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let n=nt.get(e);n===void 0&&(n=new WeakMap,nt.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?nt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=t=>t??me,ht=ee(class extends J{values;constructor(t,e,n,o){super(t,e),Object.assign(e.host,n),this.values=o}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),He=ee(class extends J{update(){return this.state.host}}),co=/([A-Z])/gu,kt=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(co,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},sn=t=>{const e=nn(void 0),n=x(c=>e.current=c,[]),o=t.shadowRoot,s=x(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),i=x(c=>kt(t,"value",c.target.value),[]),r=x(c=>kt(t,"focused",c.type==="focus"),[]),l=x(()=>e.current?.focus(),[]),a=x(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return ht({focus:l,validate:a},[l,a]),z(()=>{const c=u=>{u.defaultPrevented||t.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),t.matches(":focus-within")||l())};return o.addEventListener("mousedown",c),()=>o.removeEventListener("mousedown",c)},[l]),{onChange:s,onFocus:r,onInput:i,onRef:n}},uo=t=>A(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(t,e,n){return t?e(t):n?.(t)}const rn=(t,{label:e,invalid:n,errorMessage:o})=>C`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${K(e,()=>C`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${K(n&&o,()=>C`<div class="error" part="error">${o}</div>`)}
	`,ln=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ho=({placeholder:t,noLabelFloat:e,label:n})=>(e?n:void 0)||t||" ",ft=(t,...e)=>t.flatMap((n,o)=>[n,e[o]??""]).join(""),pt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},an=ft`
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

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
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

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
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
	}
	.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
	.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
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

	:host([always-float-label]) slot[name='suffix']::slotted(*),
	:host([always-float-label]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
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
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
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
`,fo=["type","pattern","allowed-pattern","min","max","step","autosize","label",...ln],po=t=>{const{type:e="text",pattern:n,allowedPattern:o,autocomplete:s,value:i,readonly:r,disabled:l,min:a,max:c,step:u,maxlength:d}=t,{onChange:f,onFocus:h,onInput:b,onRef:p}=sn(t),g=uo(o);return ht({focus:()=>t.shadowRoot?.querySelector("#input")?.focus()},[]),rn(C`
			<input
				${ve(p)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${M(n)}
				autocomplete=${M(s)}
				placeholder=${ho(t)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${ut(i??"")}
				maxlength=${M(d)}
				@beforeinput=${g}
				@input=${b}
				@change=${f}
				@focus=${h}
				@blur=${h}
				min=${M(a)}
				max=${M(c)}
				step=${M(u)}
			/>
		`,t)};customElements.define("cosmoz-input",ae(po,{observedAttributes:fo,styleSheets:[ct(an)]}));const Tt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},mo=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",o=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=o,t.setAttribute("rows",n)}},go=t=>{const{value:e,maxRows:n}=t,o=A(()=>()=>t.shadowRoot.querySelector("#input"),[]);z(()=>mo(o(),n),[n,o]),z(()=>Tt(o()),[o,e]),z(()=>{const s=o(),i=new ResizeObserver(()=>requestAnimationFrame(()=>Tt(s)));return i.observe(s),()=>i.unobserve(s)},[o])},bo=["rows",...ln],vo=t=>{const{autocomplete:e,value:n,placeholder:o,readonly:s,disabled:i,rows:r,cols:l,maxlength:a}=t,{onChange:c,onFocus:u,onInput:d,onRef:f}=sn(t);return go(t),rn(C`
			<textarea id="input" part="input"
				${ve(f)}
				autocomplete=${M(e)}
				placeholder=${o||" "}
				rows=${r??1} cols=${M(l)}
				?readonly=${s} ?aria-disabled=${i} ?disabled=${i}
				.value=${ut(n??"")} maxlength=${M(a)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",ae(vo,{observedAttributes:bo,styleSheets:[ct(an)]}));const yo=De`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",ae(()=>me,{styleSheets:[yo]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _o{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class wo{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=t=>!Bn(t)&&typeof t.then=="function",Rt=1073741823;let xo=class extends dt{constructor(){super(...arguments),this._$Cwt=Rt,this._$Cbt=[],this._$CK=new _o(this),this._$CX=new wo}render(...e){return e.find((n=>!At(n)))??F}update(e,n){const o=this._$Cbt;let s=o.length;this._$Cbt=n;const i=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!At(a))return this._$Cwt=l,a;l<s&&a===o[l]||(this._$Cwt=Rt,s=0,Promise.resolve(a).then((async c=>{for(;r.get();)await r.get();const u=i.deref();if(u!==void 0){const d=u._$Cbt.indexOf(a);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}})))}return F}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Lt=le(xo);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(t,e,n)=>{const o=new Map;for(let s=e;s<=n;s++)o.set(t[s],s);return o},Co=le(class extends be{constructor(t){if(super(t),t.type!==H.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let o;n===void 0?n=e:e!==void 0&&(o=e);const s=[],i=[];let r=0;for(const l of t)s[r]=o?o(l,r):r,i[r]=n(l,r),r++;return{values:i,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,o]){const s=Fn(t),{values:i,keys:r}=this.dt(e,n,o);if(!Array.isArray(s))return this.ut=r,i;const l=this.ut??=[],a=[];let c,u,d=0,f=s.length-1,h=0,b=i.length-1;for(;d<=f&&h<=b;)if(s[d]===null)d++;else if(s[f]===null)f--;else if(l[d]===r[h])a[h]=te(s[d],i[h]),d++,h++;else if(l[f]===r[b])a[b]=te(s[f],i[b]),f--,b--;else if(l[d]===r[b])a[b]=te(s[d],i[b]),he(t,a[b+1],s[d]),d++,b--;else if(l[f]===r[h])a[h]=te(s[f],i[h]),he(t,s[d],s[f]),f--,h++;else if(c===void 0&&(c=Ot(r,h,b),u=Ot(l,d,f)),c.has(l[d]))if(c.has(l[f])){const p=u.get(r[h]),g=p!==void 0?s[p]:null;if(g===null){const m=he(t,s[d]);te(m,i[h]),a[h]=m}else a[h]=te(g,i[h]),he(t,s[d],g),s[p]=null;h++}else et(s[f]),f--;else et(s[d]),d++;for(;h<=b;){const p=he(t,a[b+1]);te(p,i[h]),a[h++]=p}for(;d<=f;){const p=s[d++];p!==null&&et(p)}return this.ut=r,Qt(t,a),F}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class We extends Event{constructor(e){super(We.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}We.eventName="rangeChanged";class Ye extends Event{constructor(e){super(Ye.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ye.eventName="visibilityChanged";class Ue extends Event{constructor(){super(Ue.eventName,{bubbles:!1})}}Ue.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class So{constructor(e){this._element=null;const n=e??window;this._node=n,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Eo extends So{constructor(e,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const o=this._node;this._originalScrollTo=o.scrollTo,this._originalScrollBy=o.scrollBy,this._originalScroll=o.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;this._scrollTo(o)}scrollBy(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;o.top!==void 0&&(o.top+=this.scrollTop),o.left!==void 0&&(o.left+=this.scrollLeft),this._scrollTo(o)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,n=null,o=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=n,this._end=o):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:n,left:o}=e;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollLeft)),this._destination!==null&&o===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:o,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,n,o){return this._scrollTo(e,n,o),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:n}=this;let{top:o,left:s}=this._destination;o=Math.min(o||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const i=Math.abs(o-e),r=Math.abs(s-n);i<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Pt=typeof window<"u"?window.ResizeObserver:void 0;const rt=Symbol("virtualizerRef"),xe="virtualizer-sizer";let It;class $o{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const n=e.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Pt(()=>this._hostElementSizeChanged()),this._childrenRO=new Pt(this._childrenSizeChanged.bind(this))}_initHostElement(e){const n=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),n[rt]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=To(this._hostElement,e),this._scrollerController=new Eo(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let n=e.querySelector(`[${xe}]`);n||(n=document.createElement("div"),n.setAttribute(xe,""),e.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(xe,""),this._sizer=n}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const n=e.type||It;if(typeof n=="function"&&this._layout instanceof n){const o={...e};return delete o.type,this._layout.config=o,!0}return!1}async _initLayout(e){let n,o;if(typeof e.type=="function"){o=e.type;const s={...e};delete s.type,n=s}else n=e;o===void 0&&(It=o=(await Vn(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new o(s=>this._handleLayoutMessage(s),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),n=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(i=>i.startTime>=this._benchmarkStart&&i.startTime<e).reduce((i,r)=>i+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:s}}return null}_measureChildren(){const e={},n=this._children,o=this._measureChildOverride||this._measureChild;for(let s=0;s<n.length;s++){const i=n[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[r]=o.call(this,i,this._items[r]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:n,height:o}=e.getBoundingClientRect();return Object.assign({width:n,height:o},zo(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:n,_itemsChanged:o}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||o)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Ue)}get _children(){const e=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(xe)||e.push(n),n=n.nextElementSibling;return e}_updateView(){const e=this._hostElement,n=this._scrollerController?.element,o=this._layout;if(e&&n&&o){let s,i,r,l;const a=e.getBoundingClientRect();s=0,i=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(m=>m.getBoundingClientRect());c.unshift(a);for(const m of c)s=Math.max(s,m.top),i=Math.max(i,m.left),r=Math.min(r,m.bottom),l=Math.min(l,m.right);const u=n.getBoundingClientRect(),d={left:a.left-u.left,top:a.top-u.top},f={width:n.scrollWidth,height:n.scrollHeight},h=s-a.top+e.scrollTop,b=i-a.left+e.scrollLeft,p=r-s,g=l-i;o.viewportSize={width:g,height:p},o.viewportScroll={top:h,left:b},o.totalScrollSize=f,o.offsetWithinScroller=d}}_sizeHostElement(e){const o=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${o}px, ${s}px)`;else{const i=this._hostElement.style;i.minWidth=o?`${o}px`:"100%",i.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:n,left:o,width:s,height:i,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${o}px, ${n}px)`,s!==void 0&&(c.style.width=s+"px"),i!==void 0&&(c.style.height=i+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(e){const{_first:n,_last:o,_firstVisible:s,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==o,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:n}=this._scrollerController,{top:o,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-o,left:n-s})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(e),{behavior:o}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:o}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:n}=this._scrollIntoViewTarget||{};n&&e?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new We({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ye({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,n)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const n of e)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function zo(t){const e=window.getComputedStyle(t);return{marginTop:Ce(e.marginTop),marginRight:Ce(e.marginRight),marginBottom:Ce(e.marginBottom),marginLeft:Ce(e.marginLeft)}}function Ce(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function Mt(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function ko(t,e=!1){const n=[];let o=e?t:Mt(t);for(;o!==null;)n.push(o),o=Mt(o);return n}function To(t,e=!1){let n=!1;return ko(t,e).filter(o=>{if(n)return!1;const s=getComputedStyle(o);return n=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=t=>t,Ro=(t,e)=>C`${e}: ${JSON.stringify(t,null,2)}`;class Lo extends dt{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,o)=>Ro(n,o+this._first),this._keyFunction=(n,o)=>Ao(n,o+this._first),this._items=[],e.type!==H.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const n=[];if(this._first>=0&&this._last>=this._first)for(let o=this._first;o<=this._last;o++)n.push(this._items[o]);return Co(n,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);const o=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),o?F:this.render()}async _updateVirtualizerConfig(e,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,n)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:n,keyFunction:o}=e;n&&(this._renderItem=(s,i)=>n(s,i+this._first)),o&&(this._keyFunction=(s,i)=>o(s,i+this._first))}_makeVirtualizer(e,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:o,scroller:s,items:i}=n;this._virtualizer=new $o({hostElement:e,layout:o,scroller:s}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,n){const o=e.parentNode;o&&o.nodeType===1&&(o.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(o,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Oo=le(Lo),Po=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Io=(t,e)=>{if(!t||!e)return;const n=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(o=>n.includes(o)?[]:[[o,void 0]]))};class Mo extends be{_props;render(e){return F}update(e,[n]){return this._props!==n&&Object.assign(e.element,Io(this._props,n),this._props=n),F}}const Do=le(Mo),Bo=t=>{const e=He(),n=A(()=>new CSSStyleSheet,[]);z(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,n]},[]),z(()=>{n.replaceSync(t)},[t])};function Fo(t){return()=>t}const Vo=Fo(),No=Vo,Fe=t=>t;function cn(t){return t?e=>e?.[t]:Fe}const jo=t=>{const e=cn(t);return n=>typeof n=="string"?n:e(n)?.toString()||""},Ho=t=>e=>{const n={};for(const o in e)t.includes(o)&&(n[o]=e[o]);return n},Wo="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Yo=De`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(--cosmoz-autocomplete-listbox-bg, rgba(255, 255, 255, 0.75));
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
	}
	:host([popover]) {
		padding: 0;
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
		background: url("${Wo}") #5881f6 no-repeat 50%;
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
`,Uo=({index:t,itemHeight:e,auto:n})=>De`
	${K(!n,()=>De`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,qo=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function se(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:qo(t)?Array.from(t):[t]}const ot=(t,e=Fe)=>n=>{const o=se(t).map(e);return se(n).filter(s=>!o.includes(e(s)))},Ko=(t,e)=>e?n=>se(t).find(o=>o[e]===n[e]):n=>se(t).includes(n),Qo=(t,e)=>{if(!e||!t)return t;const n=t.toLowerCase().indexOf(e.toLowerCase());if(n<0)return t;const o=n+e.length;return[t.slice(0,n),C`<mark>${t.slice(n,o)}</mark>`,t.slice(o)]},ye=t=>{const e=A(()=>({}),[]);return A(()=>Object.assign(e,t),[e,...Object.values(t)])},Xo=t=>{const e=ye(t);z(()=>{const n=o=>{if(!(o.ctrlKey&&o.altKey||o.defaultPrevented))switch(o.key){case"Up":case"ArrowUp":o.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":o.preventDefault(),e.onDown();break;case"Enter":o.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[e])},Zo=({items:t,onSelect:e,defaultIndex:n=0})=>{const[o,s]=Z({index:n}),{index:i}=o,{length:r}=t;return z(()=>{s({index:o.index<0?n:Math.min(o.index,t.length-1),scroll:!0})},[t,n]),Xo({onUp:x(()=>s(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:x(()=>s(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:x(()=>i>-1&&i<r&&e?.(t[i],i),[i,t,e])}),{position:o,highlight:x(l=>s({index:l}),[]),select:x(l=>e?.(l),[e])}},Go=(t=Fe)=>(e,n,{highlight:o,select:s,textual:i=Fe,query:r,isSelected:l})=>{const a=i(e),c=Qo(a,r),u=t(c,e,n);return C`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(e)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>s(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${a}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Jo=({itemRenderer:t=Go(),...e})=>{const n=ye(e);return x((o,s)=>t(o,s,n),[n,t])},es=t=>{const e=t==="auto",[n,o]=Z(e?40:t);return[n,s=>e?o(s):void 0]},ts=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],ns=({value:t,valueProperty:e,items:n,onSelect:o,defaultIndex:s,query:i,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const u=A(()=>Ko(t,e),[t,e]),d=A(()=>n.slice(),[n,u]),{position:f,highlight:h,select:b}=Zo({items:d,onSelect:o,defaultIndex:isNaN(s)?void 0:Number(s)}),[p,g]=es(a);return{position:f,items:d,height:Math.min(c,d.length)*p,highlight:h,select:b,itemHeight:p,setItemHeight:g,renderItem:Jo({itemRenderer:l,items:d,position:f,highlight:h,select:b,textual:r,query:i,isSelected:u})}},Dt=No,os=t=>{const e=nn(void 0),{position:n,items:o,renderItem:s,height:i,itemHeight:r,setItemHeight:l}=ns(t);return z(()=>{const a=e.current?.[rt];a&&a.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=a._layout._metricsCache;return l(c+u*2)},Dt)},[o]),z(()=>{if(!n.scroll)return;const a=e.current?.[rt];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),Dt);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Bo(Uo({...n,itemHeight:r,auto:t.itemHeight==="auto"})),C`<div
			class="items"
			style="min-height: ${i}px"
			${ve(a=>e.current=a)}
		>
			<div virtualizer-sizer></div>
			${Oo({items:o,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Po(ae(os,{styleSheets:[pt(Yo)]})));const ss=({multi:t,setFloating:e,styles:n,...o},s)=>C`<cosmoz-listbox
		style="${Zt(n)}"
		@connected="${i=>i.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${ve(e)}
		...=${Do(Ho(ts)(o))}
		>${s}</cosmoz-listbox
	>`,is=ft`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin: 0px 0 2px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding: 0 4px 0 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}
	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(--cosmoz-autocomplete-chip-text-font-family, 'Inter', sans-serif);
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
`,rs=C`
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
`,ls=({onClear:t,disabled:e})=>C`
	<div class="content" part="content chip-text"><slot></slot></div>
	${K(t&&!e,()=>C`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${t}
			>
				${rs}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",ae(ls,{observedAttributes:["disabled"],styleSheets:[pt(is)]}));const Bt=({content:t,onClear:e,disabled:n,hidden:o,className:s="chip",slot:i})=>C`<cosmoz-autocomplete-chip
		class=${M(s)}
		slot=${M(i)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${o}
		.onClear=${e}
		title=${M(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,as=({value:t,min:e=0,onDeselect:n,textual:o,disabled:s})=>[...t.filter(Boolean).map(i=>Bt({content:o(i),onClear:t.length>e&&(()=>n(i)),disabled:s,slot:"control"})),Bt({content:C`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],cs=ft`
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
`,Ft=t=>t.matches(":focus-within"),ds=({disabled:t,onFocus:e})=>{const[n,o]=Z(),{focused:s,closed:i}=n||{},r=s&&!t,l=ye({closed:i,onFocus:e}),a=x(u=>o(d=>({...d,closed:u})),[]),c=x(u=>{const d=u.currentTarget;return Ft(d)?o(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return z(()=>{if(!r)return;const u=d=>{if(d.defaultPrevented)return;const{closed:f}=l;d.key==="Escape"&&!f?(d.preventDefault(),a(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!i,setClosed:a,onToggle:c,onFocus:x(u=>{const d=Ft(u.currentTarget);o({focused:d}),l.onFocus?.(d)},[l])}},us=({focused:t,empty:e,...n})=>{const o=t&&e&&n.limit!==1,s=ye(n);z(()=>{if(!o)return;const i=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=se(s.value),c=s.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return s.onChange(a.slice(0,-1))};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[o,s])},Vt=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),hs=(t,e,n)=>{if(!e)return t;const o=Vt(e.toLowerCase()),s=[];for(const i of t){const l=Vt(n(i).toLowerCase()).indexOf(o);l<0||s.push({item:i,index:l})}return s.sort((i,r)=>i.index-r.index).map(({item:i})=>i)},fs=t=>t===!1||t==null?[]:t,dn=(t,e,n)=>t.dispatchEvent(new CustomEvent(e,{detail:n})),ps=(t,e,n)=>x(o=>{e?.(o),dn(t,n,o)},[e]),ms=[],gs=t=>(...e)=>{let n;const o=()=>{n&&cancelAnimationFrame(n)};return o(),n=requestAnimationFrame(()=>{n=void 0,t(...e)}),o},mt=(t,e=()=>({}))=>{const n={type:t,toString(){return t}};return Object.assign((...s)=>Object.assign(e(...s),n),n)},Nt=t=>t.type||t.toString(),jt=t=>Array.isArray(t)?t:[t],bs=(t,e)=>{const n=jt(e),o=(n.every(Array.isArray)?n:[n]).map(([s,i])=>({actions:jt(s).map(Nt),handle:i}));return(s=t,i)=>{const r=o.find(l=>l.actions.includes(Nt(i)));return r?r.handle(s,i):s}},oe={pending:"pending",rejected:"rejected",resolved:"resolved"},un={error:void 0,result:void 0,state:oe.pending},hn=mt(oe.pending),fn=mt(oe.resolved,t=>({result:t})),pn=mt(oe.rejected,t=>({error:t})),vs=bs(un,[[hn,()=>({error:void 0,result:void 0,state:oe.pending})],[fn,(t,{result:e})=>({error:void 0,result:e,state:oe.resolved})],[pn,(t,{error:e})=>({error:e,result:void 0,state:oe.rejected})]]),ys=t=>{const[{error:e,result:n,state:o},s]=no(vs,un);return z(()=>{if(!t)return;let i=!1;return s(hn()),t.then(r=>!i&&s(fn(r)),r=>!i&&s(pn(r))),()=>{i=!0}},[t]),[n,e,o]},_s=({value:t,text:e,onChange:n,onText:o,onSelect:s,limit:i,min:r,source:l,textProperty:a,textual:c,valueProperty:u,keepOpened:d,keepQuery:f,preserveOrder:h,defaultIndex:b,externalSearch:p,...g})=>{const m=A(()=>(c??jo)(a),[c,a]),{active:v,focused:y,onFocus:w,setClosed:_}=ds(g),k=!e,S=A(()=>e?.trim(),[e]),R=He(),T=ps(R,o,"text"),j=x($=>{n?.($,()=>_(!0)),dn(R,"value",$)},[n]),[D,B]=Z([]),q=A(()=>Promise.resolve(typeof l=="function"?l({query:S,active:v}):l).then(fs),[l,v,S]),L=A(()=>se(t),[t]);z(()=>q.then(B),[q]),us({focused:y,empty:k,limit:i,value:L,onChange:j,onText:T}),z(()=>{y||T("")},[y]);const O=ye({onText:T,onChange:j,value:L,limit:i,min:r,keepQuery:f,keepOpened:d,setClosed:_,onSelect:s}),[,,Q]=ys(q);return{active:v,query:S,textual:m,value:L,source$:q,loading:Q==="pending",items:A(()=>{if(!v)return ms;const $=h?D:[...L,...ot(L,cn(u))(D)];return p?$:hs($,S,m)},[D,v,S,m,k,L,h,u,p]),onClick:x(()=>_(!1),[]),onFocus:w,onText:x($=>{T($.target.value),_(!1)},[T,e,_]),onSelect:x($=>{O.onSelect?.($,O);const{onChange:Je,onText:An,limit:Rn,min:Ln,value:On,keepQuery:Pn,keepOpened:In,setClosed:Mn}=O;Pn||An(""),In||Mn(!0);const we=se(On),wt=we.includes($);wt&&we.length===Ln||Je((wt?ot($)(we):[...we,$]).slice(-Rn))},[O]),onDeselect:x($=>O.onChange(ot($)(O.value)),[O]),defaultIndex:S!==void 0&&S?.length>0?0:b}},ws=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),n=t.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of e)l.hidden=!1;const s=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let i;for(i=0;i<e.length;i++){const a=e[i].getBoundingClientRect();if(!(a.x+a.width<=s.x+s.width-24))break}const r=e.length-i;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;i<e.length;i++)e[i].hidden=!0},xs=({value:t,active:e,wrap:n,limit:o})=>{const s=He(),i=!(n||o==1),r=A(()=>gs(()=>ws(s)),[]),[l,a]=Z(0);zt(()=>{if(!i)return;const c=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{a(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[i]),zt(()=>i?r():void 0,[i,l,e,t])},X=Math.min,P=Math.max,Ve=Math.round,Se=Math.floor,W=t=>({x:t,y:t}),Cs={left:"right",right:"left",bottom:"top",top:"bottom"},Ss={start:"end",end:"start"};function Ht(t,e,n){return P(t,X(e,n))}function qe(t,e){return typeof t=="function"?t(e):t}function ie(t){return t.split("-")[0]}function Ke(t){return t.split("-")[1]}function mn(t){return t==="x"?"y":"x"}function gn(t){return t==="y"?"height":"width"}function Qe(t){return["top","bottom"].includes(ie(t))?"y":"x"}function bn(t){return mn(Qe(t))}function Es(t,e,n){n===void 0&&(n=!1);const o=Ke(t),s=bn(t),i=gn(s);let r=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(r=Ne(r)),[r,Ne(r)]}function $s(t){const e=Ne(t);return[lt(t),e,lt(e)]}function lt(t){return t.replace(/start|end/g,e=>Ss[e])}function zs(t,e,n){const o=["left","right"],s=["right","left"],i=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?i:r;default:return[]}}function ks(t,e,n,o){const s=Ke(t);let i=zs(ie(t),n==="start",o);return s&&(i=i.map(r=>r+"-"+s),e&&(i=i.concat(i.map(lt)))),i}function Ne(t){return t.replace(/left|right|bottom|top/g,e=>Cs[e])}function Ts(t){return{top:0,right:0,bottom:0,left:0,...t}}function As(t){return typeof t!="number"?Ts(t):{top:t,right:t,bottom:t,left:t}}function je(t){const{x:e,y:n,width:o,height:s}=t;return{width:o,height:s,top:n,left:e,right:e+o,bottom:n+s,x:e,y:n}}function Wt(t,e,n){let{reference:o,floating:s}=t;const i=Qe(e),r=bn(e),l=gn(r),a=ie(e),c=i==="y",u=o.x+o.width/2-s.width/2,d=o.y+o.height/2-s.height/2,f=o[l]/2-s[l]/2;let h;switch(a){case"top":h={x:u,y:o.y-s.height};break;case"bottom":h={x:u,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:d};break;case"left":h={x:o.x-s.width,y:d};break;default:h={x:o.x,y:o.y}}switch(Ke(e)){case"start":h[r]-=f*(n&&c?-1:1);break;case"end":h[r]+=f*(n&&c?-1:1);break}return h}const Rs=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:r}=n,l=i.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:d}=Wt(c,o,a),f=o,h={},b=0;for(let p=0;p<l.length;p++){const{name:g,fn:m}=l[p],{x:v,y,data:w,reset:_}=await m({x:u,y:d,initialPlacement:o,placement:f,strategy:s,middlewareData:h,rects:c,platform:r,elements:{reference:t,floating:e}});u=v??u,d=y??d,h={...h,[g]:{...h[g],...w}},_&&b<=50&&(b++,typeof _=="object"&&(_.placement&&(f=_.placement),_.rects&&(c=_.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):_.rects),{x:u,y:d}=Wt(c,f,a)),p=-1)}return{x:u,y:d,placement:f,strategy:s,middlewareData:h}};async function gt(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=qe(e,t),b=As(h),g=l[f?d==="floating"?"reference":"floating":d],m=je(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(g)))==null||n?g:g.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),v=d==="floating"?{x:o,y:s,width:r.floating.width,height:r.floating.height}:r.reference,y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),w=await(i.isElement==null?void 0:i.isElement(y))?await(i.getScale==null?void 0:i.getScale(y))||{x:1,y:1}:{x:1,y:1},_=je(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:a}):v);return{top:(m.top-_.top+b.top)/w.y,bottom:(_.bottom-m.bottom+b.bottom)/w.y,left:(m.left-_.left+b.left)/w.x,right:(_.right-m.right+b.right)/w.x}}const Ls=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:i,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...g}=qe(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=ie(s),v=ie(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=f||(v||!p?[Ne(l)]:$s(l));!f&&b!=="none"&&w.push(...ks(l,p,b,y));const _=[l,...w],k=await gt(e,g),S=[];let R=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&S.push(k[m]),d){const B=Es(s,r,y);S.push(k[B[0]],k[B[1]])}if(R=[...R,{placement:s,overflows:S}],!S.every(B=>B<=0)){var T,j;const B=(((T=i.flip)==null?void 0:T.index)||0)+1,q=_[B];if(q)return{data:{index:B,overflows:R},reset:{placement:q}};let L=(j=R.filter(O=>O.overflows[0]<=0).sort((O,Q)=>O.overflows[1]-Q.overflows[1])[0])==null?void 0:j.placement;if(!L)switch(h){case"bestFit":{var D;const O=(D=R.map(Q=>[Q.placement,Q.overflows.filter($=>$>0).reduce(($,Je)=>$+Je,0)]).sort((Q,$)=>Q[1]-$[1])[0])==null?void 0:D[0];O&&(L=O);break}case"initialPlacement":L=l;break}if(s!==L)return{reset:{placement:L}}}return{}}}},Os=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:i=!0,crossAxis:r=!1,limiter:l={fn:g=>{let{x:m,y:v}=g;return{x:m,y:v}}},...a}=qe(t,e),c={x:n,y:o},u=await gt(e,a),d=Qe(ie(s)),f=mn(d);let h=c[f],b=c[d];if(i){const g=f==="y"?"top":"left",m=f==="y"?"bottom":"right",v=h+u[g],y=h-u[m];h=Ht(v,h,y)}if(r){const g=d==="y"?"top":"left",m=d==="y"?"bottom":"right",v=b+u[g],y=b-u[m];b=Ht(v,b,y)}const p=l.fn({...e,[f]:h,[d]:b});return{...p,data:{x:p.x-n,y:p.y-o}}}}},Ps=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:s,elements:i}=e,{apply:r=()=>{},...l}=qe(t,e),a=await gt(e,l),c=ie(n),u=Ke(n),d=Qe(n)==="y",{width:f,height:h}=o.floating;let b,p;c==="top"||c==="bottom"?(b=c,p=u===(await(s.isRTL==null?void 0:s.isRTL(i.floating))?"start":"end")?"left":"right"):(p=c,b=u==="end"?"top":"bottom");const g=h-a.top-a.bottom,m=f-a.left-a.right,v=X(h-a[b],g),y=X(f-a[p],m),w=!e.middlewareData.shift;let _=v,k=y;if(d?k=u||w?X(y,m):m:_=u||w?X(v,g):g,w&&!u){const R=P(a.left,0),T=P(a.right,0),j=P(a.top,0),D=P(a.bottom,0);d?k=f-2*(R!==0||T!==0?R+T:P(a.left,a.right)):_=h-2*(j!==0||D!==0?j+D:P(a.top,a.bottom))}await r({...e,availableWidth:k,availableHeight:_});const S=await s.getDimensions(i.floating);return f!==S.width||h!==S.height?{reset:{rects:!0}}:{}}}};function Xe(){return typeof window<"u"}function ue(t){return vn(t)?(t.nodeName||"").toLowerCase():"#document"}function I(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function U(t){var e;return(e=(vn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vn(t){return Xe()?t instanceof Node||t instanceof I(t).Node:!1}function V(t){return Xe()?t instanceof Element||t instanceof I(t).Element:!1}function Y(t){return Xe()?t instanceof HTMLElement||t instanceof I(t).HTMLElement:!1}function Yt(t){return!Xe()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof I(t).ShadowRoot}function _e(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function Is(t){return["table","td","th"].includes(ue(t))}function Ze(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function bt(t){const e=vt(),n=V(t)?N(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ms(t){let e=G(t);for(;Y(e)&&!de(e);){if(bt(e))return e;if(Ze(e))return null;e=G(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function de(t){return["html","body","#document"].includes(ue(t))}function N(t){return I(t).getComputedStyle(t)}function Ge(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(ue(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yt(t)&&t.host||U(t);return Yt(e)?e.host:e}function yn(t){const e=G(t);return de(e)?t.ownerDocument?t.ownerDocument.body:t.body:Y(e)&&_e(e)?e:yn(e)}function ge(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=yn(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=I(s);if(i){const l=at(r);return e.concat(r,r.visualViewport||[],_e(s)?s:[],l&&n?ge(l):[])}return e.concat(s,ge(s,[],n))}function at(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _n(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=Y(t),i=s?t.offsetWidth:n,r=s?t.offsetHeight:o,l=Ve(n)!==i||Ve(o)!==r;return l&&(n=i,o=r),{width:n,height:o,$:l}}function yt(t){return V(t)?t:t.contextElement}function ce(t){const e=yt(t);if(!Y(e))return W(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:i}=_n(e);let r=(i?Ve(n.width):n.width)/o,l=(i?Ve(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Ds=W(0);function wn(t){const e=I(t);return!vt()||!e.visualViewport?Ds:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Bs(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==I(t)?!1:e}function re(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),i=yt(t);let r=W(1);e&&(o?V(o)&&(r=ce(o)):r=ce(t));const l=Bs(i,n,o)?wn(i):W(0);let a=(s.left+l.x)/r.x,c=(s.top+l.y)/r.y,u=s.width/r.x,d=s.height/r.y;if(i){const f=I(i),h=o&&V(o)?I(o):o;let b=f,p=at(b);for(;p&&o&&h!==b;){const g=ce(p),m=p.getBoundingClientRect(),v=N(p),y=m.left+(p.clientLeft+parseFloat(v.paddingLeft))*g.x,w=m.top+(p.clientTop+parseFloat(v.paddingTop))*g.y;a*=g.x,c*=g.y,u*=g.x,d*=g.y,a+=y,c+=w,b=I(p),p=at(b)}}return je({width:u,height:d,x:a,y:c})}function _t(t,e){const n=Ge(t).scrollLeft;return e?e.left+n:re(U(t)).left+n}function xn(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),s=o.left+e.scrollLeft-(n?0:_t(t,o)),i=o.top+e.scrollTop;return{x:s,y:i}}function Fs(t){let{elements:e,rect:n,offsetParent:o,strategy:s}=t;const i=s==="fixed",r=U(o),l=e?Ze(e.floating):!1;if(o===r||l&&i)return n;let a={scrollLeft:0,scrollTop:0},c=W(1);const u=W(0),d=Y(o);if((d||!d&&!i)&&((ue(o)!=="body"||_e(r))&&(a=Ge(o)),Y(o))){const h=re(o);c=ce(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}const f=r&&!d&&!i?xn(r,a,!0):W(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-a.scrollTop*c.y+u.y+f.y}}function Vs(t){return Array.from(t.getClientRects())}function Ns(t){const e=U(t),n=Ge(t),o=t.ownerDocument.body,s=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+_t(t);const l=-n.scrollTop;return N(o).direction==="rtl"&&(r+=P(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:r,y:l}}function js(t,e){const n=I(t),o=U(t),s=n.visualViewport;let i=o.clientWidth,r=o.clientHeight,l=0,a=0;if(s){i=s.width,r=s.height;const c=vt();(!c||c&&e==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}return{width:i,height:r,x:l,y:a}}function Hs(t,e){const n=re(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,i=Y(t)?ce(t):W(1),r=t.clientWidth*i.x,l=t.clientHeight*i.y,a=s*i.x,c=o*i.y;return{width:r,height:l,x:a,y:c}}function Ut(t,e,n){let o;if(e==="viewport")o=js(t,n);else if(e==="document")o=Ns(U(t));else if(V(e))o=Hs(e,n);else{const s=wn(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return je(o)}function Cn(t,e){const n=G(t);return n===e||!V(n)||de(n)?!1:N(n).position==="fixed"||Cn(n,e)}function Ws(t,e){const n=e.get(t);if(n)return n;let o=ge(t,[],!1).filter(l=>V(l)&&ue(l)!=="body"),s=null;const i=N(t).position==="fixed";let r=i?G(t):t;for(;V(r)&&!de(r);){const l=N(r),a=bt(r);!a&&l.position==="fixed"&&(s=null),(i?!a&&!s:!a&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||_e(r)&&!a&&Cn(t,r))?o=o.filter(u=>u!==r):s=l,r=G(r)}return e.set(t,o),o}function Ys(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const r=[...n==="clippingAncestors"?Ze(e)?[]:Ws(e,this._c):[].concat(n),o],l=r[0],a=r.reduce((c,u)=>{const d=Ut(e,u,s);return c.top=P(d.top,c.top),c.right=X(d.right,c.right),c.bottom=X(d.bottom,c.bottom),c.left=P(d.left,c.left),c},Ut(e,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Us(t){const{width:e,height:n}=_n(t);return{width:e,height:n}}function qs(t,e,n){const o=Y(e),s=U(e),i=n==="fixed",r=re(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=W(0);if(o||!o&&!i)if((ue(e)!=="body"||_e(s))&&(l=Ge(e)),o){const f=re(e,!0,i,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else s&&(a.x=_t(s));const c=s&&!o&&!i?xn(s,l):W(0),u=r.left+l.scrollLeft-a.x-c.x,d=r.top+l.scrollTop-a.y-c.y;return{x:u,y:d,width:r.width,height:r.height}}function st(t){return N(t).position==="static"}function qt(t,e){if(!Y(t)||N(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return U(t)===n&&(n=n.ownerDocument.body),n}function Sn(t,e){const n=I(t);if(Ze(t))return n;if(!Y(t)){let s=G(t);for(;s&&!de(s);){if(V(s)&&!st(s))return s;s=G(s)}return n}let o=qt(t,e);for(;o&&Is(o)&&st(o);)o=qt(o,e);return o&&de(o)&&st(o)&&!bt(o)?n:o||Ms(t)||n}const Ks=async function(t){const e=this.getOffsetParent||Sn,n=this.getDimensions,o=await n(t.floating);return{reference:qs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Qs(t){return N(t).direction==="rtl"}const Xs={convertOffsetParentRelativeRectToViewportRelativeRect:Fs,getDocumentElement:U,getClippingRect:Ys,getOffsetParent:Sn,getElementRects:Ks,getClientRects:Vs,getDimensions:Us,getScale:ce,isElement:V,isRTL:Qs};function Zs(t,e){let n=null,o;const s=U(t);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const{left:c,top:u,width:d,height:f}=t.getBoundingClientRect();if(l||e(),!d||!f)return;const h=Se(u),b=Se(s.clientWidth-(c+d)),p=Se(s.clientHeight-(u+f)),g=Se(c),v={rootMargin:-h+"px "+-b+"px "+-p+"px "+-g+"px",threshold:P(0,X(1,a))||1};let y=!0;function w(_){const k=_[0].intersectionRatio;if(k!==a){if(!y)return r();k?r(!1,k):o=setTimeout(()=>{r(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(w,{...v,root:s.ownerDocument})}catch{n=new IntersectionObserver(w,v)}n.observe(t)}return r(!0),i}function Gs(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,c=yt(t),u=s||i?[...c?ge(c):[],...ge(e)]:[];u.forEach(m=>{s&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const d=c&&l?Zs(c,n):null;let f=-1,h=null;r&&(h=new ResizeObserver(m=>{let[v]=m;v&&v.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=h)==null||y.observe(e)})),n()}),c&&!a&&h.observe(c),h.observe(e));let b,p=a?re(t):null;a&&g();function g(){const m=re(t);p&&(m.x!==p.x||m.y!==p.y||m.width!==p.width||m.height!==p.height)&&n(),p=m,b=requestAnimationFrame(g)}return n(),()=>{var m;u.forEach(v=>{s&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),d?.(),(m=h)==null||m.disconnect(),h=null,a&&cancelAnimationFrame(b)}}const Js=Os,ei=Ls,ti=Ps,ni=(t,e,n)=>{const o=new Map,s={platform:Xs,...n},i={...s.platform,_c:o};return Rs(t,e,{...s,platform:i})},En=[ei({fallbackAxisSideDirection:"start",crossAxis:!1}),Js()],oi=({placement:t="bottom-start",strategy:e,middleware:n=En}={})=>{const[o,s]=Z(),[i,r]=Z(),[l,a]=Z();return z(()=>{if(!o||!(i instanceof HTMLElement)){a(void 0);return}return Gs(o,i,()=>ni(o,i,{placement:t,strategy:e,middleware:n}).then(a))},[o,i,t,e,n]),{setReference:s,setFloating:r,styles:A(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}},si=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),ii=[ti({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...En],ri=({active:t,isSingle:e,showSingle:n})=>t?!(e&&!n):!1,li=t=>{const{active:e,invalid:n,errorMessage:o,label:s,placeholder:i,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:u,onText:d,onFocus:f,onClick:h,onDeselect:b,value:p,limit:g,min:m,showSingle:v,items:y,source$:w,placement:_,loading:k}=t,S=He(),R=g==1,T=R&&p?.[0]!=null,{styles:j,setReference:D,setFloating:B}=oi({placement:_,middleware:ii});z(()=>(S.addEventListener("focusin",f),S.addEventListener("focusout",f),()=>{S.removeEventListener("focusin",f),S.removeEventListener("focusout",f)}),[f]),ht({focus:()=>S.shadowRoot?.querySelector("#input")?.focus()},[]);const q=k||y.length>0||u!=null&&u.length>0;return C`<cosmoz-input
				id="input"
				part="input"
				${ve(D)}
				.label=${s}
				.placeholder=${T?void 0:i}
				?no-label-float=${l}
				?always-float-label=${p?.length>0||a}
				?readonly=${T}
				?disabled=${r}
				?invalid=${Lt(w.then(()=>n,()=>!0),n)}
				.errorMessage=${Lt(w.then(()=>o,L=>L.message),o)}
				.value=${ut(u)}
				@value-changed=${d}
				@click=${h}
				autocomplete="off"
				exportparts=${si}
				?data-one=${R}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${as({value:p,min:m,onDeselect:b,textual:c,disabled:r})}
			</cosmoz-input>

			${K(ri({active:e,isSingle:T,showSingle:v}),()=>ss({...t,items:y,multi:!R,setFloating:B,styles:{...j,display:q?void 0:"none"}},K(k,()=>C`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>K(u!=null&&u.length>0&&y.length===0,()=>C`<slot name="no-result"></slot>`))))}`},$n=t=>{const e={...t,..._s(t)};return xs(e),li(e)},zn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],ai=t=>{const{onChange:e,onText:n,...o}=t,[s,i]=so("value");return z(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),$n({...o,value:s,onChange:x((r,...l)=>{i(r),e?.(r,...l)},[e]),onText:x(r=>{t.text=r,n?.(r)},[n])})},kn=[pt(cs)];customElements.define("cosmoz-autocomplete-ui",ae($n,{observedAttributes:zn,styleSheets:kn}));customElements.define("cosmoz-autocomplete",ae(ai,{observedAttributes:zn,styleSheets:kn}));const E=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(t=>({text:t})),ci=[{id:1,name:"camion"},{id:2,name:"camión"},{id:3,name:"cámion"},{id:4,name:"camíon"},{id:5,name:"telefono"},{id:6,name:"teléfono"},{id:7,name:"téléfono"},{id:8,name:"telefóno"},{id:9,name:"logico"},{id:10,name:"lógico"},{id:11,name:"lógíco"},{id:12,name:"logicó"},{id:13,name:"rapido"},{id:14,name:"rápido"},{id:15,name:"rapído"},{id:16,name:"rapidó"},{id:17,name:"musica"},{id:18,name:"música"},{id:19,name:"músíca"},{id:20,name:"musíca"},{id:21,name:"medico"},{id:22,name:"médico"},{id:23,name:"medíco"},{id:24,name:"medicó"},{id:25,name:"nacion"},{id:26,name:"nación"},{id:27,name:"nácion"},{id:28,name:"nacióń"},{id:29,name:"arboles"},{id:30,name:"árboles"},{id:31,name:"arbólés"},{id:32,name:"arbóles"},{id:33,name:"facil"},{id:34,name:"fácil"},{id:35,name:"fácíl"},{id:36,name:"facíl"},{id:37,name:"publico"},{id:38,name:"público"},{id:39,name:"publíco"},{id:40,name:"publicó"},{id:41,name:"tecnico"},{id:42,name:"técnico"},{id:43,name:"tecníco"},{id:44,name:"tecnicó"},{id:45,name:"heroe"},{id:46,name:"héroe"},{id:47,name:"heróe"},{id:48,name:"héroe"},{id:49,name:"cancion"},{id:50,name:"canción"},{id:51,name:"cáncion"},{id:52,name:"canciòn"},{id:53,name:"reunion"},{id:54,name:"reunión"},{id:55,name:"réunion"},{id:56,name:"reúniôn"},{id:57,name:"opinion"},{id:58,name:"opinión"},{id:59,name:"ópinion"},{id:60,name:"opíníon"},{id:61,name:"sofisticado"},{id:62,name:"sofísticado"},{id:63,name:"sofisticadó"},{id:64,name:"sófisticado"},{id:65,name:"especifico"},{id:66,name:"específico"},{id:67,name:"especifíco"},{id:68,name:"especificó"},{id:69,name:"analisis"},{id:70,name:"análisis"},{id:71,name:"ánalisis"},{id:72,name:"analísís"},{id:73,name:"vehiculo"},{id:74,name:"vehículo"},{id:75,name:"véhiculo"},{id:76,name:"vehículó"},{id:77,name:"dificil"},{id:78,name:"difícil"},{id:79,name:"dífícil"},{id:80,name:"dificíl"}],di=[{id:1,name:"forsok"},{id:2,name:"försök"},{id:3,name:"fôrsök"},{id:4,name:"försôk"},{id:5,name:"manad"},{id:6,name:"månad"},{id:7,name:"månád"},{id:8,name:"manád"},{id:9,name:"lagg"},{id:10,name:"lägg"},{id:11,name:"lägğ"},{id:12,name:"làgg"},{id:13,name:"karlek"},{id:14,name:"kärlek"},{id:15,name:"kârlek"},{id:16,name:"kärlék"},{id:17,name:"arbete"},{id:18,name:"arbeté"},{id:19,name:"ârbete"},{id:20,name:"àrbete"},{id:21,name:"betyg"},{id:22,name:"bêtyg"},{id:23,name:"bétyg"},{id:24,name:"bëtyg"},{id:25,name:"skola"},{id:26,name:"skóla"},{id:27,name:"skôla"},{id:28,name:"skolá"},{id:29,name:"vinter"},{id:30,name:"vínter"},{id:31,name:"vîntér"},{id:32,name:"vintêr"},{id:33,name:"sommar"},{id:34,name:"sômmar"},{id:35,name:"sommár"},{id:36,name:"sómmar"},{id:37,name:"helgdag"},{id:38,name:"hélgdag"},{id:39,name:"hêlgdag"},{id:40,name:"helgdág"},{id:41,name:"flygplan"},{id:42,name:"flýgplan"},{id:43,name:"flügplan"},{id:44,name:"flygplân"},{id:45,name:"studera"},{id:46,name:"stûdera"},{id:47,name:"studerá"},{id:48,name:"stúdérä"},{id:49,name:"huset"},{id:50,name:"hûset"},{id:51,name:"húset"},{id:52,name:"husét"},{id:53,name:"datorn"},{id:54,name:"dâtorn"},{id:55,name:"dátorn"},{id:56,name:"dătorn"},{id:57,name:"telefon"},{id:58,name:"téléfon"},{id:59,name:"telefôn"},{id:60,name:"tèlefón"},{id:61,name:"minuter"},{id:62,name:"mínuter"},{id:63,name:"mînuter"},{id:64,name:"minûtér"},{id:65,name:"sverige"},{id:66,name:"svérige"},{id:67,name:"svêrige"},{id:68,name:"svérigé"},{id:69,name:"spraket"},{id:70,name:"språket"},{id:71,name:"sprâket"},{id:72,name:"sprákét"},{id:73,name:"gladje"},{id:74,name:"glädje"},{id:75,name:"gládje"},{id:76,name:"glädjé"},{id:77,name:"natten"},{id:78,name:"nátten"},{id:79,name:"nättén"},{id:80,name:"nâtten"}],Tn=C`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
        cosmoz-autocomplete,
        cosmoz-listbox {
            font-family: 'Inter', sans-serif;
        }

        .contour {
            --cosmoz-input-color: #aeacac;
            --cosmoz-input-border-radius: 4px;
            --cosmoz-input-wrap-padding: 12px;
            --cosmoz-input-line-display: none;
            --cosmoz-input-contour-size: 1px;
            --cosmoz-input-label-translate-y: 10px;
            --cosmoz-autocomplete-chip-translate-y: 8px;
            --cosmoz-autocomplete-chip-border-radius: 4px;
        }
    </style>
`,ui=(t,e)=>e==null?t:({active:n})=>n?new Promise(o=>setTimeout(()=>o(t),e)):void 0,hi=({source:t,limit:e,textProperty:n,min:o,label:s="",value:i=[],disabled:r=!1,placeholder:l="",defaultIndex:a=0,showSingle:c=!1,preserveOrder:u=!1,wrap:d=!1,keepOpened:f=!1,keepQuery:h=!1,overflowed:b=!1,responseTime:p,contour:g})=>{const m={maxWidth:b?"170px":"initial"},v=ui(t,p);return C`
        ${Tn}
        <cosmoz-autocomplete
            class=${K(g,()=>"contour")}
            .label=${s}
            .placeholder=${l}
            .source=${v}
            .textProperty=${n}
            .limit=${e}
            .value=${i}
            .min=${o}
            .defaultIndex=${a}
            ?disabled=${r}
            ?show-single=${c}
            ?preserve-order=${u}
            ?wrap=${d}
            ?keep-opened=${f}
            ?keep-query=${h}
            style=${Zt(m)}
        ></cosmoz-autocomplete>
    `},gi={title:"Autocomplete",render:hi,argTypes:{label:{control:"text",description:"The label displayed on the screen"},source:{control:"object",description:"The source for the values displayed in the dropdown"},textProperty:{control:"text",description:"The object property used to select the value from the source"},value:{control:"object",description:"The actual value of the Autocomplete"},limit:{control:"number"},defaultIndex:{control:"number",description:"The default index of the source array"},disabled:{control:"boolean",description:"A boolean representing the disabled state of the Autocomplete"},placeholder:{control:"text"},showSingle:{control:"boolean"},keepOpened:{control:"boolean"},keepQuery:{control:"boolean"},preserveOrder:{control:"boolean"},min:{control:"number"},wrap:{control:"boolean"},overflowed:{control:"boolean"},responseTime:{control:"number"},uppercase:{control:"boolean"},contour:{control:"boolean"}},decorators:[(t,{args:e})=>K(e.uppercase,()=>C`<div style="text-transform: uppercase">${t()}</div>`,()=>t())],parameters:{docs:{controls:{exclude:["overflowed","contour","responseTime","uppercase"]},description:{component:"The Cosmoz Autocomplete web component"}}}},Ee={args:{label:"Choose color",source:E,textProperty:"text",value:[E[0],E[3]]},parameters:{docs:{description:{story:"The basic version"}}}},$e={args:{label:"Choose color",source:E,textProperty:"text",limit:1,value:[E[2]]},parameters:{docs:{description:{story:"Choose a single value"}}}},ze={args:{label:"Choose color",source:E,textProperty:"text",limit:1,defaultIndex:-1},parameters:{docs:{description:{story:"Select a default index for the colors, in this case -1"}}}},ke={args:{label:"Choose color (single value)",source:E.slice(0,1),textProperty:"text",limit:1,defaultIndex:-1},parameters:{docs:{description:{story:"Select a default index for the color, in this case -1"}}}},Te={args:{label:"Choose color",source:E,textProperty:"text",limit:1,value:E[0],disabled:!0},parameters:{docs:{description:{story:"The disabled version"}}}},Ae={args:{placeholder:"Choose color (placeholder text)",source:E,limit:1,textProperty:"text",value:E[0]},parameters:{docs:{description:{story:"Use the placeholder instead of the label"}}}},Re={args:{label:"Choose color",source:E,limit:1,textProperty:"text",value:E[2],showSingle:!0,preserveOrder:!0,min:1},parameters:{docs:{description:{story:"Make it act like a Select component"}}}},Le={args:{label:"Choose color",source:E,textProperty:"text",value:[E[0],E[1],E[2]],overflowed:!0},parameters:{docs:{description:{story:"Overflown variant"}}}},Oe={args:{label:"Choose color",source:E,textProperty:"text",value:[E[0],E[1],E[2]],wrap:!0,overflowed:!0},parameters:{docs:{description:{story:"Overflown and Wrapped variant"}}}},Pe={render:()=>C`
        ${Tn}
        <div>
            <div style="margin: 2rem 0;">
                <h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
                    Spanish Words
                </h3>
                <cosmoz-autocomplete
                    label="Choose Spanish word"
                    .source=${ci}
                    text-property="name"
                    .defaultIndex=${-1}
                ></cosmoz-autocomplete>
            </div>
            <div style="margin: 2rem 0;">
                <h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
                    Swedish Words
                </h3>
                <cosmoz-autocomplete
                    label="Choose Swedish word"
                    .source=${di}
                    text-property="name"
                    .defaultIndex=${-1}
                ></cosmoz-autocomplete>
            </div>
        </div>
    `,parameters:{docs:{description:{story:'Test accent-insensitive search with Spanish and Swedish words. Try typing "medico", "telefono", or "musica" in the Spanish component, or "forsok", "manad", "karlek" in the Swedish component to see how the search handles accented variants.'}}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [colors[0], colors[3]]
  },
  parameters: {
    docs: {
      description: {
        story: 'The basic version'
      }
    }
  }
}`,...Ee.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    limit: 1,
    value: [colors[2]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Choose a single value'
      }
    }
  }
}`,...$e.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    limit: 1,
    defaultIndex: -1
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a default index for the colors, in this case -1'
      }
    }
  }
}`,...ze.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color (single value)',
    source: colors.slice(0, 1),
    textProperty: 'text',
    limit: 1,
    defaultIndex: -1
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a default index for the color, in this case -1'
      }
    }
  }
}`,...ke.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    limit: 1,
    value: colors[0],
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The disabled version'
      }
    }
  }
}`,...Te.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose color (placeholder text)',
    source: colors,
    limit: 1,
    textProperty: 'text',
    value: colors[0]
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the placeholder instead of the label'
      }
    }
  }
}`,...Ae.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    limit: 1,
    textProperty: 'text',
    value: colors[2],
    showSingle: true,
    preserveOrder: true,
    min: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Make it act like a Select component'
      }
    }
  }
}`,...Re.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [colors[0], colors[1], colors[2]],
    overflowed: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Overflown variant'
      }
    }
  }
}`,...Le.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose color',
    source: colors,
    textProperty: 'text',
    value: [colors[0], colors[1], colors[2]],
    wrap: true,
    overflowed: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Overflown and Wrapped variant'
      }
    }
  }
}`,...Oe.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${CSS}
        <div>
            <div style="margin: 2rem 0;">
                <h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
                    Spanish Words
                </h3>
                <cosmoz-autocomplete
                    label="Choose Spanish word"
                    .source=\${spanishWords}
                    text-property="name"
                    .defaultIndex=\${-1}
                ></cosmoz-autocomplete>
            </div>
            <div style="margin: 2rem 0;">
                <h3 style="margin-bottom: 10px; font-family: 'Inter', sans-serif;">
                    Swedish Words
                </h3>
                <cosmoz-autocomplete
                    label="Choose Swedish word"
                    .source=\${swedishWords}
                    text-property="name"
                    .defaultIndex=\${-1}
                ></cosmoz-autocomplete>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Test accent-insensitive search with Spanish and Swedish words. Try typing "medico", "telefono", or "musica" in ' + 'the Spanish component, or "forsok", "manad", "karlek" in the Swedish component to see how the search handles accented variants.'
      }
    }
  }
}`,...Pe.parameters?.docs?.source}}};const bi=["Basic","Single","DefaultIndex","DefaultIndexSingleValue","Disabled","Placeholder","Select","Overflown","Wrap","AccentInsensitiveSearch"];export{Pe as AccentInsensitiveSearch,Ee as Basic,ze as DefaultIndex,ke as DefaultIndexSingleValue,Te as Disabled,Le as Overflown,Ae as Placeholder,Re as Select,$e as Single,Oe as Wrap,bi as __namedExportsOrder,gi as default};
