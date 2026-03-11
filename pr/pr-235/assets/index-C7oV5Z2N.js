import{f as v,c as D,d as R,u as G,a as m,b as f,A as K,r as De,E as T,p as Me,e as A,h as Ne,H as He,s as me,n as Ue,g as Xe,j as fe,k as Ze,l as Ge,m as oe,t as Ke}from"./iframe-Cu9cjp5d.js";import{u as Q,a as W,e as J,i as ge,t as B,n as S,f as Qe,s as ve,b as We,c as be,d as X,g as Je,w as Z,p as Ve,l as et}from"./index-DxXYoGgc.js";const M=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),tt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=Q(),i=()=>clearTimeout(l.current),p=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},c=()=>{o||(i(),s())};return v(()=>{if(!(!n||o))return e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",p)}},[n,o,e]),v(()=>{if(!(!r||o))return e.addEventListener("focusin",c),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",c),e.removeEventListener("focusout",p)}},[r,o,e]),{scheduleClose:p,cancelClose:i}},ot=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},nt=D`
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
`,st=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:r}=e,s=Q(),[a,l]=G("opened",!1),i=m(()=>{o||(l(!0),s.current?.showPopover())},[o]),p=m(()=>{l(!1),s.current?.hidePopover()},[]),c=m(()=>{if(o)return;s.current?.matches(":popover-open")?p():i()},[o]);v(()=>{const d=s.current;d&&(a?d.showPopover():d.hidePopover())},[a]),v(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:h,cancelClose:w}=tt({host:e,popoverRef:s,disabled:o,openOnHover:n,openOnFocus:r,open:i,close:p}),$=r?i:c,z=m(d=>{ot(d),l(d.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:d.newState,oldState:d.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${$}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${z}
			@select=${p}
			@focusout=${h}
			@focusin=${w}
			${W(d=>d&&(s.current=d))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",R(st,{styleSheets:[nt],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??K;const N=J(class extends ge{constructor(e){if(super(e),e.type!==B.PROPERTY&&e.type!==B.ATTRIBUTE&&e.type!==B.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!De(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===T||t===K)return t;const o=e.element,n=e.name;if(e.type===B.PROPERTY){if(t===o[n])return T}else if(e.type===B.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return T}else if(e.type===B.ATTRIBUTE&&o.getAttribute(n)===t+"")return T;return Me(e),t}}),we=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${S(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${S(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,xe=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ne=M`
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
`,ye=M`
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
		${ne}
	}
	@container style(--focused: focused) {
		${ne}
	}
`,rt=e=>A(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),at=Ne(class extends He{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),it=/([A-Z])/gu,se=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(it,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},$e=e=>{const t=Q(void 0),o=m(i=>t.current=i,[]),n=e.shadowRoot,r=m(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=m(i=>se(e,"value",i.target.value),[]),a=m(i=>se(e,"focused",i.type==="focus"),[]),l=m(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return at({validate:l},[l]),v(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},lt=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ct=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...xe],pt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:h}=e,{onChange:w,onFocus:$,onInput:z,onRef:d}=$e(e),g=rt(n);return we(f`
			<input
				${W(d)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(r)}
				placeholder=${lt(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${N(s??"")}
				maxlength=${b(h)}
				@beforeinput=${g}
				@input=${z}
				@change=${w}
				@focus=${$}
				@blur=${$}
				min=${b(i)}
				max=${b(p)}
				step=${b(c)}
			/>
		`,e)};customElements.define("cosmoz-input",R(pt,{observedAttributes:ct,styleSheets:[me(ye)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const re=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},dt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},ut=e=>{const{value:t,maxRows:o}=e,n=A(()=>()=>e.shadowRoot.querySelector("#input"),[]);v(()=>dt(n(),o),[o,n]),v(()=>re(n()),[n,t]),v(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>re(r)));return s.observe(r),()=>s.unobserve(r)},[n])},ht=["rows","placeholder",...xe],mt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:h,onRef:w}=$e(e);return ut(e),we(f`
			<textarea id="input" part="input"
				${W(w)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${N(o??"")} maxlength=${b(i)} @input=${h}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",R(mt,{observedAttributes:ht,styleSheets:[me(ye)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ft=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=m(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${N(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${S(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${S(r,a=>f`<div class="failure">${a}</div>`)} `},gt=D`
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
`,vt=D`
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
`;customElements.define("cosmoz-toggle",R(ft,{styleSheets:[vt,gt],observedAttributes:["disabled"]}));const bt={},ae=J(class extends ge{constructor(){super(...arguments),this.ot=bt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return T}else if(this.ot===t)return T;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class wt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class xt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ie=e=>!Ue(e)&&typeof e.then=="function",le=1073741823;class yt extends Qe{constructor(){super(...arguments),this._$Cwt=le,this._$Cbt=[],this._$CK=new wt(this),this._$CX=new xt}render(...t){return t.find(o=>!ie(o))??T}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!ie(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=le,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const h=c._$Cbt.indexOf(i);h>-1&&h<c._$Cwt&&(c._$Cwt=h,c.setValue(p))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ce=J(yt),$t=M`
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
`,zt=f`
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
`,kt=({onClear:e,disabled:t})=>f`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${o=>o.preventDefault()}
	>
		<slot></slot>
	</div>
	${S(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${zt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",R(kt,{observedAttributes:["disabled"],styleSheets:[ve($t)]}));const Ct=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${b(r)}
		slot=${b(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,Et=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=Ct})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:f`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],At=D`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",R(()=>K,{styleSheets:[At]}));const Tt=M`
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
`,V=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},pe=e=>e.type||e.toString(),de=e=>Array.isArray(e)?e:[e],St=(e,t)=>{const o=de(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:de(r).map(pe),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(pe(s)));return a?a.handle(r,s):r}},L={pending:"pending",rejected:"rejected",resolved:"resolved"},ze={error:void 0,result:void 0,state:L.pending},ke=V(L.pending),Ce=V(L.resolved,e=>({result:e})),Ee=V(L.rejected,e=>({error:e})),Rt=St(ze,[[ke,()=>({error:void 0,result:void 0,state:L.pending})],[Ce,(e,{result:t})=>({error:void 0,result:t,state:L.resolved})],[Ee,(e,{error:t})=>({error:t,result:void 0,state:L.rejected})]]),_t=e=>{const[{error:t,result:o,state:n},r]=Xe(Rt,ze);return v(()=>{if(!e)return;let s=!1;return r(ke()),e.then(a=>!s&&r(Ce(a)),a=>!s&&r(Ee(a))),()=>{s=!0}},[e]),[o,t,n]},ue=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Ot=(e,t,o)=>{if(!t)return e;const n=ue(t.toLowerCase()),r=[];for(const s of e){const l=ue(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Lt=e=>e===!1||e==null?[]:e,Pt=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),he=[],It=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Yt=(e,t,o)=>m(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Bt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:h,keepQuery:w,preserveOrder:$,defaultIndex:z,externalSearch:d,disabled:g,lazyOpen:H})=>{const P=s!=null?Number(s):void 0,C=A(()=>(p??We)(i),[p,i]),E=be(),[x,k]=G("opened",!1),_=!t,y=A(()=>t?.trim(),[t]),I=Yt(E,n,"text"),ee=m(u=>{o?.(u,()=>k(!1)),Pt(E,"value",u)},[o]),[U,_e]=fe([]),F=!!(H&&!y),j=A(()=>F?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:y,active:x}):l).then(Lt),[l,x,y,F]),Y=A(()=>X(e),[e]);v(()=>j.then(_e),[j]),Je({activity:Ze,callback:()=>{const u=X(Y);u.length>0&&ee(u.slice(0,-1))},check:()=>!g&&_&&E.matches(":focus-within"),element:()=>E},[]),v(()=>{!x&&!w&&I("")},[x,w]),v(()=>{E.toggleAttribute("opened",!!x)},[x]);const O=Ge({onText:I,onChange:ee,value:Y,limit:P,min:a,keepQuery:w,keepOpened:h,setOpened:k,onSelect:r}),[,,Oe]=_t(j);return{limit:P,opened:x,query:y,textual:C,value:Y,source$:j,loading:Oe==="pending",items:A(()=>{if(!x||F)return he;const u=$?U:[...Y,...Z(Y,Ve(c))(U)];return d?u:Ot(u,y,C)},[U,x,y,C,_,Y,$,c,d,F]),onToggle:m(u=>{g||k(u.newState==="open")},[g]),onText:m(u=>{g||(I(u.target.value),k(!0))},[g,I,t,k]),onSelect:m(u=>{if(g)return;O.onSelect?.(u,O);const{onChange:Le,onText:Pe,limit:Ie,min:Ye,value:Be,keepQuery:Fe,keepOpened:je,setOpened:qe}=O;Fe||Pe(""),je||qe(!1);const q=X(Be),te=q.includes(u);te&&q.length===Ye||Le((te?Z(u)(q):[...q,u]).slice(-Ie))},[g,O]),onDeselect:m(u=>{g||O.onChange(Z(u)(O.value))},[g,O]),defaultIndex:y!==void 0&&y?.length>0?0:z}},Ft=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},jt=({value:e,opened:t,wrap:o,limit:n})=>{const r=be(),s=!(o||n===1),a=A(()=>It(()=>Ft(r)),[]),[l,i]=fe(0);oe(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(h=>{i(h[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),oe(()=>s?a():void 0,[s,l,t,e])},qt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Dt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Mt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:h,onToggle:w,onDeselect:$,value:z,limit:d,min:g,showSingle:H,items:P,source$:C,loading:E,chipRenderer:x}=e,k=d===1,_=k&&z?.[0]!=null,y=E||P.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${a}
			.opened=${t}
			@dropdown-toggle=${w}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${r}
				.placeholder=${_?void 0:s}
				?no-label-float=${l}
				?always-float-label=${z?.length>0||i}
				?readonly=${_}
				?disabled=${a}
				?invalid=${ae([C,o],()=>ce(C.then(()=>o,()=>!0),o))}
				.errorMessage=${ae([C,n],()=>ce(C.then(()=>n,I=>I.message),n))}
				.value=${N(c)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${qt}
				?data-one=${k}
				?data-single=${_}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Et({value:z,min:g,onDeselect:$,textual:p,disabled:a,chipRenderer:x})}
			</cosmoz-input>

			${S(Dt({opened:t,isSingle:_,showSingle:H,hasResultsOrQuery:y}),()=>et({...e,items:P,multi:!k},S(E,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>S(c!=null&&c.length>0&&P.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${Ke("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ae=e=>{const t={...e,...Bt(e)};return jt(t),Mt(t)},Te=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Nt=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=G("value");return v(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ae({...n,value:r,onChange:m((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:m(a=>{e.text=a,o?.(a)},[o])})},Se=[ve(Tt)],Re={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",R(Ae,{observedAttributes:Te,styleSheets:Se,shadowRootInit:Re}));customElements.define("cosmoz-autocomplete",R(Nt,{observedAttributes:Te,styleSheets:Se,shadowRootInit:Re}));export{Ae as A,b as a,Te as o,Tt as s};
