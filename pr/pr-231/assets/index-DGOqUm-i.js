import{f as b,c as D,d as A,u as X,a as h,b as m,A as Z,r as je,E as C,p as qe,e as k,h as Be,H as Fe,s as pe,n as De,g as Me,j as de,k as Ne,l as He,m as V,t as Ue}from"./iframe-BZUjjwRK.js";import{u as G,a as K,e as Q,i as ue,t as P,n as E,f as Xe,s as he,b as Ze,c as me,d as H,g as Ge,w as U,p as Ke,l as Qe}from"./index-zVrj-e2K.js";const M=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),We=({host:e,popoverRef:t,openOnHover:o,openOnFocus:n,open:r,close:s})=>{const a=G(),l=()=>clearTimeout(a.current),i=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const c=t.current;o&&(e.matches(":hover")||c?.matches(":hover"))||n&&(e.matches(":focus-within")||c?.matches(":focus-within"))||s()},100)},d=()=>{l(),r()};b(()=>{if(o)return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",i),()=>{l(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",i)}},[o,e]),b(()=>{if(n)return e.addEventListener("focusin",d),e.addEventListener("focusout",i),()=>{l(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",i)}},[n,e])},Je=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Ve=D`
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
`,et=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:n}=e,r=G(),[s,a]=X("opened",!1),l=h(()=>{a(!0),r.current?.showPopover()},[]),i=h(()=>{a(!1),r.current?.hidePopover()},[]),d=h(()=>{r.current?.matches(":popover-open")?i():l()},[]);b(()=>{const p=r.current;p&&(s?p.showPopover():p.hidePopover())},[s]),b(()=>{e.toggleAttribute("opened",!!s)},[s]),We({host:e,popoverRef:r,openOnHover:o,openOnFocus:n,open:l,close:i});const c=n?l:d,f=h(p=>{Je(p),a(p.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return m`
		<slot name="button" @click=${c}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${f}
			@select=${i}
			${K(p=>p&&(r.current=p))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",A(et,{styleSheets:[Ve],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const w=e=>e??Z;const N=Q(class extends ue{constructor(e){if(super(e),e.type!==P.PROPERTY&&e.type!==P.ATTRIBUTE&&e.type!==P.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!je(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===C||t===Z)return t;const o=e.element,n=e.name;if(e.type===P.PROPERTY){if(t===o[n])return C}else if(e.type===P.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return C}else if(e.type===P.ATTRIBUTE&&o.getAttribute(n)===t+"")return C;return qe(e),t}}),fe=(e,{label:t,invalid:o,errorMessage:n})=>m`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${E(t,()=>m`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${E(o&&n,()=>m`<div class="error" part="error">${n}</div>`)}
	`,ge=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ee=M`
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
`,ve=M`
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
`,tt=e=>k(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),ot=Be(class extends Fe{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),nt=/([A-Z])/gu,te=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(nt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},be=e=>{const t=G(void 0),o=h(i=>t.current=i,[]),n=e.shadowRoot,r=h(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=h(i=>te(e,"value",i.target.value),[]),a=h(i=>te(e,"focused",i.type==="focus"),[]),l=h(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return ot({validate:l},[l]),b(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},st=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",rt=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ge],at=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:d,step:c,maxlength:f}=e,{onChange:p,onFocus:T,onInput:S,onRef:O}=be(e),v=tt(n);return fe(m`
			<input
				${K(O)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${w(o)}
				autocomplete=${w(r)}
				placeholder=${st(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${N(s??"")}
				maxlength=${w(f)}
				@beforeinput=${v}
				@input=${S}
				@change=${p}
				@focus=${T}
				@blur=${T}
				min=${w(i)}
				max=${w(d)}
				step=${w(c)}
			/>
		`,e)};customElements.define("cosmoz-input",A(at,{observedAttributes:rt,styleSheets:[pe(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},it=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},lt=e=>{const{value:t,maxRows:o}=e,n=k(()=>()=>e.shadowRoot.querySelector("#input"),[]);b(()=>it(n(),o),[o,n]),b(()=>oe(n()),[n,t]),b(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>oe(r)));return s.observe(r),()=>s.unobserve(r)},[n])},ct=["rows","placeholder",...ge],pt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:d,onFocus:c,onInput:f,onRef:p}=be(e);return lt(e),fe(m`
			<textarea id="input" part="input"
				${K(p)}
				autocomplete=${w(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${w(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${N(o??"")} maxlength=${w(i)} @input=${f}
				@change=${d} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",A(pt,{observedAttributes:ct,styleSheets:[pe(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const dt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=h(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return m`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${N(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${E(t,()=>m`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${E(r,a=>m`<div class="failure">${a}</div>`)} `},ut=D`
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
`,ht=D`
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
`;customElements.define("cosmoz-toggle",A(dt,{styleSheets:[ht,ut],observedAttributes:["disabled"]}));const mt={},ne=Q(class extends ue{constructor(){super(...arguments),this.ot=mt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return C}else if(this.ot===t)return C;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class ft{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class gt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const se=e=>!De(e)&&typeof e.then=="function",re=1073741823;class vt extends Xe{constructor(){super(...arguments),this._$Cwt=re,this._$Cbt=[],this._$CK=new ft(this),this._$CX=new gt}render(...t){return t.find(o=>!se(o))??C}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!se(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=re,r=0,Promise.resolve(i).then(async d=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const f=c._$Cbt.indexOf(i);f>-1&&f<c._$Cwt&&(c._$Cwt=f,c.setValue(d))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ae=Q(vt),bt=M`
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
`,wt=m`
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
`,xt=({onClear:e,disabled:t})=>m`
	<div class="content" part="content chip-text"><slot></slot></div>
	${E(e&&!t,()=>m`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${wt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",A(xt,{observedAttributes:["disabled"],styleSheets:[he(bt)]}));const yt=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>m`<cosmoz-autocomplete-chip
		class=${w(r)}
		slot=${w(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${w(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,$t=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=yt})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:m`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],zt=D`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",A(()=>Z,{styleSheets:[zt]}));const kt=M`
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
`,W=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},ie=e=>e.type||e.toString(),le=e=>Array.isArray(e)?e:[e],Ct=(e,t)=>{const o=le(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:le(r).map(ie),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(ie(s)));return a?a.handle(r,s):r}},_={pending:"pending",rejected:"rejected",resolved:"resolved"},we={error:void 0,result:void 0,state:_.pending},xe=W(_.pending),ye=W(_.resolved,e=>({result:e})),$e=W(_.rejected,e=>({error:e})),Et=Ct(we,[[xe,()=>({error:void 0,result:void 0,state:_.pending})],[ye,(e,{result:t})=>({error:void 0,result:t,state:_.resolved})],[$e,(e,{error:t})=>({error:t,result:void 0,state:_.rejected})]]),At=e=>{const[{error:t,result:o,state:n},r]=Me(Et,we);return b(()=>{if(!e)return;let s=!1;return r(xe()),e.then(a=>!s&&r(ye(a)),a=>!s&&r($e(a))),()=>{s=!0}},[e]),[o,t,n]},ce=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Tt=(e,t,o)=>{if(!t)return e;const n=ce(t.toLowerCase()),r=[];for(const s of e){const l=ce(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},St=e=>e===!1||e==null?[]:e,Rt=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),_t=[],Ot=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Lt=(e,t,o)=>h(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Pt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:d,valueProperty:c,keepOpened:f,keepQuery:p,preserveOrder:T,defaultIndex:S,externalSearch:O,disabled:v})=>{const I=k(()=>(d??Ze)(i),[d,i]),y=me(),[g,z]=X("opened",!1),j=!t,x=k(()=>t?.trim(),[t]),$=Lt(y,n,"text"),q=h(u=>{o?.(u,()=>z(!1)),Rt(y,"value",u)},[o]),[Y,Ae]=de([]),B=k(()=>Promise.resolve(typeof l=="function"?l({query:x,active:g}):l).then(St),[l,g,x]),L=k(()=>H(e),[e]);b(()=>B.then(Ae),[B]),Ge({activity:Ne,callback:()=>{const u=H(L);u.length>0&&q(u.slice(0,-1))},check:()=>!v&&j&&s!==1&&y.matches(":focus-within"),element:()=>y},[]),b(()=>{!g&&!p&&$("")},[g,p]),b(()=>{y.toggleAttribute("opened",!!g)},[g]);const R=He({onText:$,onChange:q,value:L,limit:s,min:a,keepQuery:p,keepOpened:f,setOpened:z,onSelect:r}),[,,Te]=At(B);return{opened:g,query:x,textual:I,value:L,source$:B,loading:Te==="pending",items:k(()=>{if(!g)return _t;const u=T?Y:[...L,...U(L,Ke(c))(Y)];return O?u:Tt(u,x,I)},[Y,g,x,I,j,L,T,c,O]),onToggle:h(u=>{v||z(u.newState==="open")},[v]),onText:h(u=>{v||($(u.target.value),z(!0))},[v,$,t,z]),onSelect:h(u=>{if(v)return;R.onSelect?.(u,R);const{onChange:Se,onText:Re,limit:_e,min:Oe,value:Le,keepQuery:Pe,keepOpened:Ie,setOpened:Ye}=R;Pe||Re(""),Ie||Ye(!1);const F=H(Le),J=F.includes(u);J&&F.length===Oe||Se((J?U(u)(F):[...F,u]).slice(-_e))},[v,R]),onDeselect:h(u=>{v||R.onChange(U(u)(R.value))},[v,R]),defaultIndex:x!==void 0&&x?.length>0?0:S}},It=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},Yt=({value:e,opened:t,wrap:o,limit:n})=>{const r=me(),s=!(o||n==1),a=k(()=>Ot(()=>It(r)),[]),[l,i]=de(0);V(()=>{if(!s)return;const d=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(f=>{i(f[0].contentRect.width)});return c.observe(d),()=>c.disconnect()},[s]),V(()=>s?a():void 0,[s,l,t,e])},jt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),qt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Bt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:d,text:c,onText:f,onToggle:p,onDeselect:T,value:S,limit:O,min:v,showSingle:I,items:y,source$:g,loading:z,chipRenderer:j}=e,x=O==1,$=x&&S?.[0]!=null,q=z||y.length>0||c!=null&&c.length>0;return m`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${a}
			.opened=${t}
			@dropdown-toggle=${p}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${r}
				.placeholder=${$?void 0:s}
				?no-label-float=${l}
				?always-float-label=${S?.length>0||i}
				?readonly=${$}
				?disabled=${a}
				?invalid=${ne([g],()=>ae(g.then(()=>o,()=>!0),o))}
				.errorMessage=${ne([g],()=>ae(g.then(()=>n,Y=>Y.message),n))}
				.value=${N(c)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${jt}
				?data-one=${x}
				?data-single=${$}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${$t({value:S,min:v,onDeselect:T,textual:d,disabled:a,chipRenderer:j})}
			</cosmoz-input>

			${E(qt({opened:t,isSingle:$,showSingle:I,hasResultsOrQuery:q}),()=>Qe({...e,items:y,multi:!x},E(z,()=>m`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>E(c!=null&&c.length>0&&y.length===0,()=>m`<slot name="no-result">
											<p class="no-result">${Ue("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},ze=e=>{const t={...e,...Pt(e)};return Yt(t),Bt(t)},ke=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Ft=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=X("value");return b(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),ze({...n,value:r,onChange:h((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:h(a=>{e.text=a,o?.(a)},[o])})},Ce=[he(kt)],Ee={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",A(ze,{observedAttributes:ke,styleSheets:Ce,shadowRootInit:Ee}));customElements.define("cosmoz-autocomplete",A(Ft,{observedAttributes:ke,styleSheets:Ce,shadowRootInit:Ee}));export{ze as A,w as a,ke as o,kt as s};
