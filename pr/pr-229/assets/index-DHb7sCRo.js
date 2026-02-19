import{f as v,c as F,d as C,u as X,a as h,b as m,A as Z,r as Ye,E as $,p as je,e as z,h as qe,H as Be,s as de,n as Fe,g as De,j as pe,k as Me,l as Ne,m as V,t as He}from"./iframe-CnxkTwbi.js";import{u as G,a as K,e as Q,i as ue,t as I,n as k,f as Ue,s as he,b as Xe,c as me,d as H,g as Ze,w as U,p as Ge,l as Ke}from"./index-B5JVhjjX.js";const D=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),Qe=({host:e,popoverRef:t,openOnHover:o,openOnFocus:n,open:r,close:s})=>{const a=G(),l=()=>clearTimeout(a.current),i=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const c=t.current;o&&(e.matches(":hover")||c?.matches(":hover"))||n&&(e.matches(":focus-within")||c?.matches(":focus-within"))||s()},100)},p=()=>{l(),r()};v(()=>{if(o)return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",i),()=>{l(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",i)}},[o,e]),v(()=>{if(n)return e.addEventListener("focusin",p),e.addEventListener("focusout",i),()=>{l(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",i)}},[n,e])},We=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Je=F`
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
		min-width: anchor-size(width);

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
`,Ve=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:n}=e,r=G(),[s,a]=X("opened",!1),l=h(()=>{a(!0),r.current?.showPopover()},[]),i=h(()=>{a(!1),r.current?.hidePopover()},[]),p=h(()=>{r.current?.matches(":popover-open")?i():l()},[]);v(()=>{const d=r.current;d&&(s?d.showPopover():d.hidePopover())},[s]),v(()=>{e.toggleAttribute("opened",!!s)},[s]),Qe({host:e,popoverRef:r,openOnHover:o,openOnFocus:n,open:l,close:i});const c=n?l:p,f=h(d=>{We(d),a(d.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:d.newState,oldState:d.oldState,composed:!0}))},[]);return m`
		<slot name="button" @click=${c}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${f}
			@select=${i}
			${K(d=>d&&(r.current=d))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",C(Ve,{styleSheets:[Je],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??Z;const M=Q(class extends ue{constructor(e){if(super(e),e.type!==I.PROPERTY&&e.type!==I.ATTRIBUTE&&e.type!==I.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ye(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===$||t===Z)return t;const o=e.element,n=e.name;if(e.type===I.PROPERTY){if(t===o[n])return $}else if(e.type===I.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return $}else if(e.type===I.ATTRIBUTE&&o.getAttribute(n)===t+"")return $;return je(e),t}}),fe=(e,{label:t,invalid:o,errorMessage:n})=>m`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${k(t,()=>m`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${k(o&&n,()=>m`<div class="error" part="error">${n}</div>`)}
	`,ge=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ee=D`
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
`,ve=D`
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
		${ee}
	}
	@container style(--focused: focused) {
		${ee}
	}
`,et=e=>z(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),tt=qe(class extends Be{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),ot=/([A-Z])/gu,te=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(ot,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},be=e=>{const t=G(void 0),o=h(i=>t.current=i,[]),n=e.shadowRoot,r=h(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=h(i=>te(e,"value",i.target.value),[]),a=h(i=>te(e,"focused",i.type==="focus"),[]),l=h(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return tt({validate:l},[l]),v(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},nt=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",st=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ge],rt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:f}=e,{onChange:d,onFocus:E,onInput:A,onRef:L}=be(e),T=et(n);return fe(m`
			<input
				${K(L)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(r)}
				placeholder=${nt(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${M(s??"")}
				maxlength=${b(f)}
				@beforeinput=${T}
				@input=${A}
				@change=${d}
				@focus=${E}
				@blur=${E}
				min=${b(i)}
				max=${b(p)}
				step=${b(c)}
			/>
		`,e)};customElements.define("cosmoz-input",C(rt,{observedAttributes:st,styleSheets:[de(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},at=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},it=e=>{const{value:t,maxRows:o}=e,n=z(()=>()=>e.shadowRoot.querySelector("#input"),[]);v(()=>at(n(),o),[o,n]),v(()=>oe(n()),[n,t]),v(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>oe(r)));return s.observe(r),()=>s.unobserve(r)},[n])},lt=["rows","placeholder",...ge],ct=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:f,onRef:d}=be(e);return it(e),fe(m`
			<textarea id="input" part="input"
				${K(d)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${M(o??"")} maxlength=${b(i)} @input=${f}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",C(ct,{observedAttributes:lt,styleSheets:[de(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const dt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=h(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return m`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${M(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${k(t,()=>m`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${k(r,a=>m`<div class="failure">${a}</div>`)} `},pt=F`
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
`,ut=F`
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
`;customElements.define("cosmoz-toggle",C(dt,{styleSheets:[ut,pt],observedAttributes:["disabled"]}));const ht={},ne=Q(class extends ue{constructor(){super(...arguments),this.ot=ht}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return $}else if(this.ot===t)return $;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class mt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ft{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const se=e=>!Fe(e)&&typeof e.then=="function",re=1073741823;class gt extends Ue{constructor(){super(...arguments),this._$Cwt=re,this._$Cbt=[],this._$CK=new mt(this),this._$CX=new ft}render(...t){return t.find(o=>!se(o))??$}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!se(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=re,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const f=c._$Cbt.indexOf(i);f>-1&&f<c._$Cwt&&(c._$Cwt=f,c.setValue(p))}}))}return $}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ae=Q(gt),vt=D`
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
`,bt=m`
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
`,wt=({onClear:e,disabled:t})=>m`
	<div class="content" part="content chip-text"><slot></slot></div>
	${k(e&&!t,()=>m`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${bt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",C(wt,{observedAttributes:["disabled"],styleSheets:[he(vt)]}));const xt=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>m`<cosmoz-autocomplete-chip
		class=${b(r)}
		slot=${b(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,yt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=xt})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:m`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],zt=F`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",C(()=>Z,{styleSheets:[zt]}));const $t=D`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-dropdown-next {
		display: block;
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
`,W=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},ie=e=>e.type||e.toString(),le=e=>Array.isArray(e)?e:[e],kt=(e,t)=>{const o=le(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:le(r).map(ie),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(ie(s)));return a?a.handle(r,s):r}},O={pending:"pending",rejected:"rejected",resolved:"resolved"},we={error:void 0,result:void 0,state:O.pending},xe=W(O.pending),ye=W(O.resolved,e=>({result:e})),ze=W(O.rejected,e=>({error:e})),Ct=kt(we,[[xe,()=>({error:void 0,result:void 0,state:O.pending})],[ye,(e,{result:t})=>({error:void 0,result:t,state:O.resolved})],[ze,(e,{error:t})=>({error:t,result:void 0,state:O.rejected})]]),Et=e=>{const[{error:t,result:o,state:n},r]=De(Ct,we);return v(()=>{if(!e)return;let s=!1;return r(xe()),e.then(a=>!s&&r(ye(a)),a=>!s&&r(ze(a))),()=>{s=!0}},[e]),[o,t,n]},ce=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),At=(e,t,o)=>{if(!t)return e;const n=ce(t.toLowerCase()),r=[];for(const s of e){const l=ce(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Tt=e=>e===!1||e==null?[]:e,St=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Rt=[],_t=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Ot=(e,t,o)=>h(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Lt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:f,keepQuery:d,preserveOrder:E,defaultIndex:A,externalSearch:L})=>{const T=z(()=>(p??Xe)(i),[p,i]),S=me(),[g,w]=X("opened",!1),Y=!t,x=z(()=>t?.trim(),[t]),y=Ot(S,n,"text"),R=h(u=>{o?.(u,()=>w(!1)),St(S,"value",u)},[o]),[j,N]=pe([]),q=z(()=>Promise.resolve(typeof l=="function"?l({query:x,active:g}):l).then(Tt),[l,g,x]),P=z(()=>H(e),[e]);v(()=>q.then(N),[q]),Ze({activity:Me,callback:()=>{const u=H(P);u.length>0&&R(u.slice(0,-1))},check:()=>Y&&s!==1&&S.matches(":focus-within"),element:()=>S},[]),v(()=>{!g&&!d&&y("")},[g,d]),v(()=>{S.toggleAttribute("opened",!!g)},[g]);const _=Ne({onText:y,onChange:R,value:P,limit:s,min:a,keepQuery:d,keepOpened:f,setOpened:w,onSelect:r}),[,,Ae]=Et(q);return{opened:g,query:x,textual:T,value:P,source$:q,loading:Ae==="pending",items:z(()=>{if(!g)return Rt;const u=E?j:[...P,...U(P,Ge(c))(j)];return L?u:At(u,x,T)},[j,g,x,T,Y,P,E,c,L]),onToggle:h(u=>{w(u.newState==="open")},[]),onText:h(u=>{y(u.target.value),w(!0)},[y,t,w]),onSelect:h(u=>{_.onSelect?.(u,_);const{onChange:Te,onText:Se,limit:Re,min:_e,value:Oe,keepQuery:Le,keepOpened:Pe,setOpened:Ie}=_;Le||Se(""),Pe||Ie(!1);const B=H(Oe),J=B.includes(u);J&&B.length===_e||Te((J?U(u)(B):[...B,u]).slice(-Re))},[_]),onDeselect:h(u=>_.onChange(U(u)(_.value)),[_]),defaultIndex:x!==void 0&&x?.length>0?0:A}},Pt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},It=({value:e,opened:t,wrap:o,limit:n})=>{const r=me(),s=!(o||n==1),a=z(()=>_t(()=>Pt(r)),[]),[l,i]=pe(0);V(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(f=>{i(f[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),V(()=>s?a():void 0,[s,l,t,e])},Yt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),jt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,qt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:f,onToggle:d,onDeselect:E,value:A,limit:L,min:T,showSingle:S,items:g,source$:w,loading:Y,chipRenderer:x}=e,y=L==1,R=y&&A?.[0]!=null,j=Y||g.length>0||c!=null&&c.length>0;return m`<cosmoz-dropdown-next
			open-on-focus
			.opened=${t}
			@dropdown-toggle=${d}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${r}
				.placeholder=${R?void 0:s}
				?no-label-float=${l}
				?always-float-label=${A?.length>0||i}
				?readonly=${R}
				?disabled=${a}
				?invalid=${ne([w],()=>ae(w.then(()=>o,()=>!0),o))}
				.errorMessage=${ne([w],()=>ae(w.then(()=>n,N=>N.message),n))}
				.value=${M(c)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${Yt}
				?data-one=${y}
				?data-single=${R}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${yt({value:A,min:T,onDeselect:E,textual:p,disabled:a,chipRenderer:x})}
			</cosmoz-input>

			${k(jt({opened:t,isSingle:R,showSingle:S,hasResultsOrQuery:j}),()=>Ke({...e,items:g,multi:!y},k(Y,()=>m`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>k(c!=null&&c.length>0&&g.length===0,()=>m`<slot name="no-result">
											<p class="no-result">${He("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},$e=e=>{const t={...e,...Lt(e)};return It(t),qt(t)},ke=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Bt=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=X("value");return v(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),$e({...n,value:r,onChange:h((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:h(a=>{e.text=a,o?.(a)},[o])})},Ce=[he($t)],Ee={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",C($e,{observedAttributes:ke,styleSheets:Ce,shadowRootInit:Ee}));customElements.define("cosmoz-autocomplete",C(Bt,{observedAttributes:ke,styleSheets:Ce,shadowRootInit:Ee}));export{$e as A,b as a,ke as o,$t as s};
