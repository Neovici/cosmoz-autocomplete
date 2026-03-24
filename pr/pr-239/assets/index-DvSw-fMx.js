import{f as v,c as N,d as L,u as V,a as m,b as f,A as ee,r as Xe,E as _,p as Ze,e as R,h as Ge,H as Ke,s as we,n as Qe,g as We,j as ye,k as Je,l as Ve,m as et,o as ae,t as tt}from"./iframe-BevY7tJm.js";import{u as te,a as oe,e as ne,i as xe,t as B,n as O,f as ot,s as $e,b as nt,c as ze,d as M,g as ie,w as W,p as J,l as st}from"./index-BMNS2hb_.js";const H=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),rt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=te(),i=()=>clearTimeout(l.current),p=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},c=()=>{o||(i(),s())};return v(()=>{if(!(!n||o))return e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",p)}},[n,o,e]),v(()=>{if(!(!r||o))return e.addEventListener("focusin",c),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",c),e.removeEventListener("focusout",p)}},[r,o,e]),{scheduleClose:p,cancelClose:i}},at=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},it=N`
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
`,lt=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:r}=e,s=te(),[a,l]=V("opened",!1),i=m(()=>{o||(l(!0),s.current?.showPopover())},[o]),p=m(()=>{l(!1),s.current?.hidePopover()},[]),c=m(()=>{if(o)return;s.current?.matches(":popover-open")?p():i()},[o]);v(()=>{const u=s.current;u&&(a?u.showPopover():u.hidePopover())},[a]),v(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:h,cancelClose:w}=rt({host:e,popoverRef:s,disabled:o,openOnHover:n,openOnFocus:r,open:i,close:p}),z=r?i:c,k=m(u=>{at(u),l(u.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:u.newState,oldState:u.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${z}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${k}
			@select=${p}
			@focusout=${h}
			@focusin=${w}
			${oe(u=>u&&(s.current=u))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",L(lt,{styleSheets:[it],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??ee;const U=ne(class extends xe{constructor(e){if(super(e),e.type!==B.PROPERTY&&e.type!==B.ATTRIBUTE&&e.type!==B.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Xe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===_||t===ee)return t;const o=e.element,n=e.name;if(e.type===B.PROPERTY){if(t===o[n])return _}else if(e.type===B.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return _}else if(e.type===B.ATTRIBUTE&&o.getAttribute(n)===t+"")return _;return Ze(e),t}}),ke=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${O(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${O(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,Ee=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],le=H`
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
`,Ce=H`
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
		${le}
	}
	@container style(--focused: focused) {
		${le}
	}
`,ct=e=>R(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),pt=Ge(class extends Ke{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),dt=/([A-Z])/gu,ce=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(dt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Ae=e=>{const t=te(void 0),o=m(i=>t.current=i,[]),n=e.shadowRoot,r=m(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=m(i=>ce(e,"value",i.target.value),[]),a=m(i=>ce(e,"focused",i.type==="focus"),[]),l=m(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return pt({validate:l},[l]),v(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},ut=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ht=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ee],mt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:h}=e,{onChange:w,onFocus:z,onInput:k,onRef:u}=Ae(e),g=ct(n);return ke(f`
			<input
				${oe(u)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(r)}
				placeholder=${ut(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${U(s??"")}
				maxlength=${b(h)}
				@beforeinput=${g}
				@input=${k}
				@change=${w}
				@focus=${z}
				@blur=${z}
				min=${b(i)}
				max=${b(p)}
				step=${b(c)}
			/>
		`,e)};customElements.define("cosmoz-input",L(mt,{observedAttributes:ht,styleSheets:[we(Ce)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const pe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},ft=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},gt=e=>{const{value:t,maxRows:o}=e,n=R(()=>()=>e.shadowRoot.querySelector("#input"),[]);v(()=>ft(n(),o),[o,n]),v(()=>pe(n()),[n,t]),v(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>pe(r)));return s.observe(r),()=>s.unobserve(r)},[n])},vt=["rows","placeholder",...Ee],bt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:h,onRef:w}=Ae(e);return gt(e),ke(f`
			<textarea id="input" part="input"
				${oe(w)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${U(o??"")} maxlength=${b(i)} @input=${h}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",L(bt,{observedAttributes:vt,styleSheets:[we(Ce)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const wt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=m(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${U(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${O(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${O(r,a=>f`<div class="failure">${a}</div>`)} `},yt=N`
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
`,xt=N`
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
`;customElements.define("cosmoz-toggle",L(wt,{styleSheets:[xt,yt],observedAttributes:["disabled"]}));const $t={},de=ne(class extends xe{constructor(){super(...arguments),this.ot=$t}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return _}else if(this.ot===t)return _;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class zt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class kt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ue=e=>!Qe(e)&&typeof e.then=="function",he=1073741823;class Et extends ot{constructor(){super(...arguments),this._$Cwt=he,this._$Cbt=[],this._$CK=new zt(this),this._$CX=new kt}render(...t){return t.find(o=>!ue(o))??_}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!ue(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=he,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const h=c._$Cbt.indexOf(i);h>-1&&h<c._$Cwt&&(c._$Cwt=h,c.setValue(p))}}))}return _}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const me=ne(Et),Ct=H`
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
`,At=f`
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
`,Tt=({onClear:e,disabled:t})=>f`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${o=>o.preventDefault()}
	>
		<slot></slot>
	</div>
	${O(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${At}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",L(Tt,{observedAttributes:["disabled"],styleSheets:[$e(Ct)]}));const St=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${b(r)}
		slot=${b(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,Rt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=St})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:f`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],_t=N`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",L(()=>ee,{styleSheets:[_t]}));const Ot=H`
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
`,se=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},fe=e=>e.type||e.toString(),ge=e=>Array.isArray(e)?e:[e],Lt=(e,t)=>{const o=ge(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:ge(r).map(fe),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(fe(s)));return a?a.handle(r,s):r}},I={pending:"pending",rejected:"rejected",resolved:"resolved"},Te={error:void 0,result:void 0,state:I.pending},Se=se(I.pending),Re=se(I.resolved,e=>({result:e})),_e=se(I.rejected,e=>({error:e})),Pt=Lt(Te,[[Se,()=>({error:void 0,result:void 0,state:I.pending})],[Re,(e,{result:t})=>({error:void 0,result:t,state:I.resolved})],[_e,(e,{error:t})=>({error:t,result:void 0,state:I.rejected})]]),It=e=>{const[{error:t,result:o,state:n},r]=We(Pt,Te);return v(()=>{if(!e)return;let s=!1;return r(Se()),e.then(a=>!s&&r(Re(a)),a=>!s&&r(_e(a))),()=>{s=!0}},[e]),[o,t,n]},ve=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Yt=(e,t,o)=>{if(!t)return e;const n=ve(t.toLowerCase()),r=[];for(const s of e){const l=ve(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Bt=e=>e===!1||e==null?[]:e,Ft=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),be=[],jt=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},qt=(e,t,o)=>m(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Dt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:h,keepQuery:w,preserveOrder:z,defaultIndex:k,externalSearch:u,disabled:g,lazyOpen:X})=>{const C=s!=null?Number(s):void 0,A=R(()=>(p??nt)(i),[p,i]),x=ze(),[y,E]=V("opened",!1),T=!t,$=R(()=>t?.trim(),[t]),Y=qt(x,n,"text"),Z=m(d=>{o?.(d,()=>E(!1)),Ft(x,"value",d)},[o]),[G,Ye]=ye([]),F=!!(X&&!$),j=R(()=>F?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:$,active:y}):l).then(Bt),[l,y,$,F]),P=R(()=>M(e),[e]);v(()=>j.then(Ye),[j]),ie({activity:Je,callback:()=>{const d=M(P);d.length>0&&Z(d.slice(0,-1))},check:()=>!g&&T&&x.matches(":focus-within"),element:()=>x},[]),ie({activity:Ve,callback:d=>{const q=M(P),K=C===1;q.length>0&&K&&d.key.length===1&&Z(q.slice(0,-1))},allowDefault:!0,check:()=>!g&&T&&x.matches(":focus-within"),element:()=>x},[C]),v(()=>{!y&&!w&&Y("")},[y,w]),v(()=>{x.toggleAttribute("opened",!!y)},[y]);const S=et({onText:Y,onChange:Z,value:P,limit:C,min:a,keepQuery:w,keepOpened:h,setOpened:E,onSelect:r,valueProperty:c}),[,,Be]=It(j);return{limit:C,opened:y,query:$,textual:A,value:P,source$:j,loading:Be==="pending",items:R(()=>{if(!y||F)return be;const d=z?G:[...P,...W(P,J(c))(G)];return u?d:Yt(d,$,A)},[G,y,$,A,T,P,z,c,u,F]),onToggle:m(d=>{g||E(d.newState==="open")},[g]),onText:m(d=>{g||(Y(d.target.value),E(!0))},[g,Y,t,E]),onSelect:m(d=>{if(g)return;S.onSelect?.(d,S);const{onChange:q,onText:K,limit:Fe,min:je,value:qe,keepQuery:De,keepOpened:Me,setOpened:Ne,valueProperty:He}=S;De||K(""),Me||Ne(!1);const D=M(qe),Q=J(He),re=D.some(Ue=>Q(Ue)===Q(d));re&&D.length===je||q((re?W(d,Q)(D):[...D,d]).slice(-Fe))},[g,S]),onDeselect:m(d=>{g||S.onChange(W(d,J(S.valueProperty))(S.value))},[g,S]),defaultIndex:$!==void 0&&$?.length>0?0:k}},Mt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},Nt=({value:e,opened:t,wrap:o,limit:n})=>{const r=ze(),s=!(o||n===1),a=R(()=>jt(()=>Mt(r)),[]),[l,i]=ye(0);ae(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(h=>{i(h[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),ae(()=>s?a():void 0,[s,l,t,e])},Ht=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Ut=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Xt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:h,onToggle:w,onDeselect:z,value:k,limit:u,min:g,showSingle:X,items:C,source$:A,loading:x,chipRenderer:y}=e,E=u===1,T=E&&k?.[0]!=null,$=x||C.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
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
				.placeholder=${T?void 0:s}
				?no-label-float=${l}
				?always-float-label=${k?.length>0||i}
				?readonly=${T}
				?disabled=${a}
				?invalid=${de([A,o],()=>me(A.then(()=>o,()=>!0),o))}
				.errorMessage=${de([A,n],()=>me(A.then(()=>n,Y=>Y.message),n))}
				.value=${U(c)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${Ht}
				?data-one=${E}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Rt({value:k,min:g,onDeselect:z,textual:p,disabled:a,chipRenderer:y})}
			</cosmoz-input>

			${O(Ut({opened:t,isSingle:T,showSingle:X,hasResultsOrQuery:$}),()=>st({...e,items:C,multi:!E},O(x,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>O(c!=null&&c.length>0&&C.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${tt("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Oe=e=>{const t={...e,...Dt(e)};return Nt(t),Xt(t)},Le=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Zt=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=V("value");return v(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Oe({...n,value:r,onChange:m((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:m(a=>{e.text=a,o?.(a)},[o])})},Pe=[$e(Ot)],Ie={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",L(Oe,{observedAttributes:Le,styleSheets:Pe,shadowRootInit:Ie}));customElements.define("cosmoz-autocomplete",L(Zt,{observedAttributes:Le,styleSheets:Pe,shadowRootInit:Ie}));export{Oe as A,b as a,Le as o,Ot as s};
