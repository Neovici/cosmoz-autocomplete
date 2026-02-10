import{f as v,c as F,d as k,b as u,A as Z,r as Le,E as P,p as Ie,e as z,h as Pe,H as Ye,a as h,s as le,n as je,g as qe,j as X,k as Be,l as Fe,m as J,t as De,u as Me}from"./iframe-BSnjqlbF.js";import{u as G,a as K,e as ce,i as Ne,t as I,n as $,f as He,s as de,b as Ue,c as pe,d as H,g as Xe,w as U,p as Ze,l as Ge}from"./index-_GGQVGx9.js";const D=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),Ke=({host:e,popoverRef:t,openOnHover:o,openOnFocus:n,open:a,close:s})=>{const r=G(),i=()=>clearTimeout(r.current),l=()=>{clearTimeout(r.current),r.current=setTimeout(()=>{const c=t.current;o&&(e.matches(":hover")||c?.matches(":hover"))||n&&(e.matches(":focus-within")||c?.matches(":focus-within"))||s()},100)},d=()=>{i(),a()};v(()=>{if(o)return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",l),()=>{i(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",l)}},[o,e]),v(()=>{if(n)return e.addEventListener("focusin",d),e.addEventListener("focusout",l),()=>{i(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",l)}},[n,e])},Qe=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const a of n){const s=a.matches("[autofocus]")?a:a.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},We=F`
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
`,Je=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:n}=e,a=G(),s=()=>a.current?.showPopover(),r=()=>a.current?.hidePopover(),i=()=>a.current?.togglePopover();return Ke({host:e,popoverRef:a,openOnHover:o,openOnFocus:n,open:s,close:r}),u`
		<slot name="button" @click=${n?s:i}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${c=>{Qe(c),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:c.newState,oldState:c.oldState,composed:!0}))}}
			@select=${r}
			${K(c=>c&&(a.current=c))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",k(Je,{styleSheets:[We],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const f=e=>e??Z;const M=ce(class extends Ne{constructor(e){if(super(e),e.type!==I.PROPERTY&&e.type!==I.ATTRIBUTE&&e.type!==I.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Le(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===P||t===Z)return t;const o=e.element,n=e.name;if(e.type===I.PROPERTY){if(t===o[n])return P}else if(e.type===I.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return P}else if(e.type===I.ATTRIBUTE&&o.getAttribute(n)===t+"")return P;return Ie(e),t}}),ue=(e,{label:t,invalid:o,errorMessage:n})=>u`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${$(t,()=>u`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${$(o&&n,()=>u`<div class="error" part="error">${n}</div>`)}
	`,he=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],V=D`
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
`,me=D`
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
		${V}
	}
	@container style(--focused: focused) {
		${V}
	}
`,Ve=e=>z(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),et=Pe(class extends Ye{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),tt=/([A-Z])/gu,ee=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(tt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},fe=e=>{const t=G(void 0),o=h(l=>t.current=l,[]),n=e.shadowRoot,a=h(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),s=h(l=>ee(e,"value",l.target.value),[]),r=h(l=>ee(e,"focused",l.type==="focus"),[]),i=h(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return et({validate:i},[i]),v(()=>{const l=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:a,onFocus:r,onInput:s,onRef:o}},ot=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",nt=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...he],st=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:a,value:s,readonly:r,disabled:i,min:l,max:d,step:c,maxlength:m}=e,{onChange:b,onFocus:C,onInput:E,onRef:_}=fe(e),A=Ve(n);return ue(u`
			<input
				${K(_)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${f(o)}
				autocomplete=${f(a)}
				placeholder=${ot(e)}
				?readonly=${r}
				?aria-disabled=${i}
				?disabled=${i}
				.value=${M(s??"")}
				maxlength=${f(m)}
				@beforeinput=${A}
				@input=${E}
				@change=${b}
				@focus=${C}
				@blur=${C}
				min=${f(l)}
				max=${f(d)}
				step=${f(c)}
			/>
		`,e)};customElements.define("cosmoz-input",k(st,{observedAttributes:nt,styleSheets:[le(me)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const te=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},at=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},rt=e=>{const{value:t,maxRows:o}=e,n=z(()=>()=>e.shadowRoot.querySelector("#input"),[]);v(()=>at(n(),o),[o,n]),v(()=>te(n()),[n,t]),v(()=>{const a=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>te(a)));return s.observe(a),()=>s.unobserve(a)},[n])},it=["rows","placeholder",...he],lt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:a,disabled:s,rows:r,cols:i,maxlength:l}=e,{onChange:d,onFocus:c,onInput:m,onRef:b}=fe(e);return rt(e),ue(u`
			<textarea id="input" part="input"
				${K(b)}
				autocomplete=${f(t)}
				placeholder=${n||" "}
				rows=${r??1} cols=${f(i)}
				?readonly=${a} ?aria-disabled=${s} ?disabled=${s}
				.value=${M(o??"")} maxlength=${f(l)} @input=${m}
				@change=${d} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",k(lt,{observedAttributes:it,styleSheets:[le(me)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ct=e=>{const{label:t,value:o,disabled:n,error:a}=e,s=h(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return u`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${M(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${$(t,()=>u`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${$(a,r=>u`<div class="failure">${r}</div>`)} `},dt=F`
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
`,pt=F`
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
`;customElements.define("cosmoz-toggle",k(ct,{styleSheets:[pt,dt],observedAttributes:["disabled"]}));class ut{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ht{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const oe=e=>!je(e)&&typeof e.then=="function",ne=1073741823;class mt extends He{constructor(){super(...arguments),this._$Cwt=ne,this._$Cbt=[],this._$CK=new ut(this),this._$CX=new ht}render(...t){return t.find(o=>!oe(o))??P}update(t,o){const n=this._$Cbt;let a=n.length;this._$Cbt=o;const s=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let i=0;i<o.length&&!(i>this._$Cwt);i++){const l=o[i];if(!oe(l))return this._$Cwt=i,l;i<a&&l===n[i]||(this._$Cwt=ne,a=0,Promise.resolve(l).then(async d=>{for(;r.get();)await r.get();const c=s.deref();if(c!==void 0){const m=c._$Cbt.indexOf(l);m>-1&&m<c._$Cwt&&(c._$Cwt=m,c.setValue(d))}}))}return P}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const se=ce(mt),ft=D`
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
`,gt=u`
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
`,vt=({onClear:e,disabled:t})=>u`
	<div class="content" part="content chip-text"><slot></slot></div>
	${$(e&&!t,()=>u`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${gt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",k(vt,{observedAttributes:["disabled"],styleSheets:[de(ft)]}));const bt=({content:e,onClear:t,disabled:o,hidden:n,className:a="chip",slot:s})=>u`<cosmoz-autocomplete-chip
		class=${f(a)}
		slot=${f(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${f(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,wt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:a,chipRenderer:s=bt})=>[...e.filter(Boolean).map(r=>s({item:r,content:n(r),onClear:e.length>t&&(()=>o(r)),disabled:a,slot:"control"})),s({item:null,content:u`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],xt=F`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",k(()=>Z,{styleSheets:[xt]}));const yt=D`
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
`,Q=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...a)=>Object.assign(t(...a),o),o)},ae=e=>e.type||e.toString(),re=e=>Array.isArray(e)?e:[e],zt=(e,t)=>{const o=re(t),n=(o.every(Array.isArray)?o:[o]).map(([a,s])=>({actions:re(a).map(ae),handle:s}));return(a=e,s)=>{const r=n.find(i=>i.actions.includes(ae(s)));return r?r.handle(a,s):a}},R={pending:"pending",rejected:"rejected",resolved:"resolved"},ge={error:void 0,result:void 0,state:R.pending},ve=Q(R.pending),be=Q(R.resolved,e=>({result:e})),we=Q(R.rejected,e=>({error:e})),$t=zt(ge,[[ve,()=>({error:void 0,result:void 0,state:R.pending})],[be,(e,{result:t})=>({error:void 0,result:t,state:R.resolved})],[we,(e,{error:t})=>({error:t,result:void 0,state:R.rejected})]]),kt=e=>{const[{error:t,result:o,state:n},a]=qe($t,ge);return v(()=>{if(!e)return;let s=!1;return a(ve()),e.then(r=>!s&&a(be(r)),r=>!s&&a(we(r))),()=>{s=!0}},[e]),[o,t,n]},ie=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Ct=(e,t,o)=>{if(!t)return e;const n=ie(t.toLowerCase()),a=[];for(const s of e){const i=ie(o(s).toLowerCase()).indexOf(n);i<0||a.push({item:s,index:i})}return a.sort((s,r)=>s.index-r.index).map(({item:s})=>s)},Et=e=>e===!1||e==null?[]:e,At=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Tt=[],St=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Rt=(e,t,o)=>h(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),_t=({value:e,text:t,onChange:o,onText:n,onSelect:a,limit:s,min:r,source:i,textProperty:l,textual:d,valueProperty:c,keepOpened:m,keepQuery:b,preserveOrder:C,defaultIndex:E,externalSearch:_})=>{const A=z(()=>(d??Ue)(l),[d,l]),O=pe(),[g,x]=X(!1),Y=!t,w=z(()=>t?.trim(),[t]),y=Rt(O,n,"text"),T=h(p=>{o?.(p,()=>x(!1)),At(O,"value",p)},[o]),[j,N]=X([]),q=z(()=>Promise.resolve(typeof i=="function"?i({query:w,active:g}):i).then(Et),[i,g,w]),L=z(()=>H(e),[e]);v(()=>q.then(N),[q]),Xe({activity:Be,callback:()=>{const p=H(L);p.length>0&&T(p.slice(0,-1))},check:()=>Y&&s!==1&&O.matches(":focus-within"),element:()=>O},[]),v(()=>{!g&&!b&&y("")},[g,b]);const S=Fe({onText:y,onChange:T,value:L,limit:s,min:r,keepQuery:b,keepOpened:m,setOpened:x,onSelect:a}),[,,ke]=kt(q);return{opened:g,query:w,textual:A,value:L,source$:q,loading:ke==="pending",items:z(()=>{if(!g)return Tt;const p=C?j:[...L,...U(L,Ze(c))(j)];return _?p:Ct(p,w,A)},[j,g,w,A,Y,L,C,c,_]),onToggle:h(p=>{x(p.newState==="open")},[]),onText:h(p=>{y(p.target.value),x(!0)},[y,t,x]),onSelect:h(p=>{S.onSelect?.(p,S);const{onChange:Ce,onText:Ee,limit:Ae,min:Te,value:Se,keepQuery:Re,keepOpened:_e,setOpened:Oe}=S;Re||Ee(""),_e||Oe(!1);const B=H(Se),W=B.includes(p);W&&B.length===Te||Ce((W?U(p)(B):[...B,p]).slice(-Ae))},[S]),onDeselect:h(p=>S.onChange(U(p)(S.value)),[S]),defaultIndex:w!==void 0&&w?.length>0?0:E}},Ot=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const i of t)i.hidden=!1;const a=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const l=t[s].getBoundingClientRect();if(!(l.x+l.width<=a.x+a.width-24))break}const r=t.length-s;for(o.querySelector("span").textContent="+"+r.toString(),o.hidden=r<1;s<t.length;s++)t[s].hidden=!0},Lt=({value:e,opened:t,wrap:o,limit:n})=>{const a=pe(),s=!(o||n==1),r=z(()=>St(()=>Ot(a)),[]),[i,l]=X(0);J(()=>{if(!s)return;const d=a.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(m=>{l(m[0].contentRect.width)});return c.observe(d),()=>c.disconnect()},[s]),J(()=>s?r():void 0,[s,i,t,e])},It=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Pt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Yt=e=>{const{opened:t,invalid:o,errorMessage:n,label:a,placeholder:s,disabled:r,noLabelFloat:i,alwaysFloatLabel:l,textual:d,text:c,onText:m,onToggle:b,onDeselect:C,value:E,limit:_,min:A,showSingle:O,items:g,source$:x,loading:Y,chipRenderer:w}=e,y=_==1,T=y&&E?.[0]!=null,j=Y||g.length>0||c!=null&&c.length>0;return u`<cosmoz-dropdown-next
			open-on-focus
			@dropdown-toggle=${b}
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${a}
				.placeholder=${T?void 0:s}
				?no-label-float=${i}
				?always-float-label=${E?.length>0||l}
				?readonly=${T}
				?disabled=${r}
				?invalid=${se(x.then(()=>o,()=>!0),o)}
				.errorMessage=${se(x.then(()=>n,N=>N.message),n)}
				.value=${M(c)}
				@value-changed=${m}
				autocomplete="off"
				exportparts=${It}
				?data-one=${y}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${wt({value:E,min:A,onDeselect:C,textual:d,disabled:r,chipRenderer:w})}
			</cosmoz-input>

			${$(Pt({opened:t,isSingle:T,showSingle:O,hasResultsOrQuery:j}),()=>Ge({...e,items:g,multi:!y},$(Y,()=>u`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>$(c!=null&&c.length>0&&g.length===0,()=>u`<slot name="no-result">
											<p class="no-result">${De("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},xe=e=>{const t={...e,..._t(e)};return Lt(t),Yt(t)},ye=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],jt=e=>{const{onChange:t,onText:o,...n}=e,[a,s]=Me("value");return v(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),xe({...n,value:a,onChange:h((r,...i)=>{s(r),t?.(r,...i)},[t]),onText:h(r=>{e.text=r,o?.(r)},[o])})},ze=[de(yt)],$e={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",k(xe,{observedAttributes:ye,styleSheets:ze,shadowRootInit:$e}));customElements.define("cosmoz-autocomplete",k(jt,{observedAttributes:ye,styleSheets:ze,shadowRootInit:$e}));export{xe as A,f as a,ye as o,yt as s};
