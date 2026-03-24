import{f as v,c as N,d as O,u as W,a as m,b as f,A as J,r as Me,E as R,p as Ne,e as S,h as He,H as Ue,s as ve,n as Xe,g as Ze,j as be,k as Ge,l as Ke,m as Qe,o as se,t as We}from"./iframe-_s_9tAvp.js";import{u as V,a as ee,e as te,i as we,t as B,n as _,f as Je,s as ye,b as Ve,c as xe,d as M,g as re,w as Q,p as et,l as tt}from"./index-DDNf_N6S.js";const H=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),ot=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=V(),i=()=>clearTimeout(l.current),p=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},c=()=>{o||(i(),s())};return v(()=>{if(!(!n||o))return e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",p)}},[n,o,e]),v(()=>{if(!(!r||o))return e.addEventListener("focusin",c),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",c),e.removeEventListener("focusout",p)}},[r,o,e]),{scheduleClose:p,cancelClose:i}},nt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},st=N`
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
`,rt=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:r}=e,s=V(),[a,l]=W("opened",!1),i=m(()=>{o||(l(!0),s.current?.showPopover())},[o]),p=m(()=>{l(!1),s.current?.hidePopover()},[]),c=m(()=>{if(o)return;s.current?.matches(":popover-open")?p():i()},[o]);v(()=>{const u=s.current;u&&(a?u.showPopover():u.hidePopover())},[a]),v(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:h,cancelClose:w}=ot({host:e,popoverRef:s,disabled:o,openOnHover:n,openOnFocus:r,open:i,close:p}),z=r?i:c,k=m(u=>{nt(u),l(u.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:u.newState,oldState:u.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${z}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${k}
			@select=${p}
			@focusout=${h}
			@focusin=${w}
			${ee(u=>u&&(s.current=u))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",O(rt,{styleSheets:[st],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??J;const U=te(class extends we{constructor(e){if(super(e),e.type!==B.PROPERTY&&e.type!==B.ATTRIBUTE&&e.type!==B.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Me(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===J)return t;const o=e.element,n=e.name;if(e.type===B.PROPERTY){if(t===o[n])return R}else if(e.type===B.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return R}else if(e.type===B.ATTRIBUTE&&o.getAttribute(n)===t+"")return R;return Ne(e),t}}),$e=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${_(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${_(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,ze=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ae=H`
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
`,ke=H`
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
		${ae}
	}
	@container style(--focused: focused) {
		${ae}
	}
`,at=e=>S(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),it=He(class extends Ue{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),lt=/([A-Z])/gu,ie=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(lt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Ee=e=>{const t=V(void 0),o=m(i=>t.current=i,[]),n=e.shadowRoot,r=m(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=m(i=>ie(e,"value",i.target.value),[]),a=m(i=>ie(e,"focused",i.type==="focus"),[]),l=m(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return it({validate:l},[l]),v(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},ct=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",pt=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ze],dt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:h}=e,{onChange:w,onFocus:z,onInput:k,onRef:u}=Ee(e),g=at(n);return $e(f`
			<input
				${ee(u)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(r)}
				placeholder=${ct(e)}
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
		`,e)};customElements.define("cosmoz-input",O(dt,{observedAttributes:pt,styleSheets:[ve(ke)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const le=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},ut=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},ht=e=>{const{value:t,maxRows:o}=e,n=S(()=>()=>e.shadowRoot.querySelector("#input"),[]);v(()=>ut(n(),o),[o,n]),v(()=>le(n()),[n,t]),v(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>le(r)));return s.observe(r),()=>s.unobserve(r)},[n])},mt=["rows","placeholder",...ze],ft=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:h,onRef:w}=Ee(e);return ht(e),$e(f`
			<textarea id="input" part="input"
				${ee(w)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${U(o??"")} maxlength=${b(i)} @input=${h}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",O(ft,{observedAttributes:mt,styleSheets:[ve(ke)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const gt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=m(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${U(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${_(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${_(r,a=>f`<div class="failure">${a}</div>`)} `},vt=N`
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
`,bt=N`
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
`;customElements.define("cosmoz-toggle",O(gt,{styleSheets:[bt,vt],observedAttributes:["disabled"]}));const wt={},ce=te(class extends we{constructor(){super(...arguments),this.ot=wt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return R}else if(this.ot===t)return R;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class yt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class xt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const pe=e=>!Xe(e)&&typeof e.then=="function",de=1073741823;class $t extends Je{constructor(){super(...arguments),this._$Cwt=de,this._$Cbt=[],this._$CK=new yt(this),this._$CX=new xt}render(...t){return t.find(o=>!pe(o))??R}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!pe(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=de,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const h=c._$Cbt.indexOf(i);h>-1&&h<c._$Cwt&&(c._$Cwt=h,c.setValue(p))}}))}return R}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ue=te($t),zt=H`
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
`,kt=f`
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
`,Et=({onClear:e,disabled:t})=>f`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${o=>o.preventDefault()}
	>
		<slot></slot>
	</div>
	${_(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${kt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",O(Et,{observedAttributes:["disabled"],styleSheets:[ye(zt)]}));const Ct=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${b(r)}
		slot=${b(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,At=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=Ct})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:f`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Tt=N`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",O(()=>J,{styleSheets:[Tt]}));const St=H`
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
`,oe=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},he=e=>e.type||e.toString(),me=e=>Array.isArray(e)?e:[e],Rt=(e,t)=>{const o=me(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:me(r).map(he),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(he(s)));return a?a.handle(r,s):r}},I={pending:"pending",rejected:"rejected",resolved:"resolved"},Ce={error:void 0,result:void 0,state:I.pending},Ae=oe(I.pending),Te=oe(I.resolved,e=>({result:e})),Se=oe(I.rejected,e=>({error:e})),_t=Rt(Ce,[[Ae,()=>({error:void 0,result:void 0,state:I.pending})],[Te,(e,{result:t})=>({error:void 0,result:t,state:I.resolved})],[Se,(e,{error:t})=>({error:t,result:void 0,state:I.rejected})]]),Ot=e=>{const[{error:t,result:o,state:n},r]=Ze(_t,Ce);return v(()=>{if(!e)return;let s=!1;return r(Ae()),e.then(a=>!s&&r(Te(a)),a=>!s&&r(Se(a))),()=>{s=!0}},[e]),[o,t,n]},fe=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Lt=(e,t,o)=>{if(!t)return e;const n=fe(t.toLowerCase()),r=[];for(const s of e){const l=fe(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Pt=e=>e===!1||e==null?[]:e,It=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),ge=[],Yt=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Bt=(e,t,o)=>m(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Ft=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:h,keepQuery:w,preserveOrder:z,defaultIndex:k,externalSearch:u,disabled:g,lazyOpen:X})=>{const C=s!=null?Number(s):void 0,A=S(()=>(p??Ve)(i),[p,i]),x=xe(),[y,E]=W("opened",!1),T=!t,$=S(()=>t?.trim(),[t]),Y=Bt(x,n,"text"),Z=m(d=>{o?.(d,()=>E(!1)),It(x,"value",d)},[o]),[G,Pe]=be([]),F=!!(X&&!$),j=S(()=>F?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:$,active:y}):l).then(Pt),[l,y,$,F]),L=S(()=>M(e),[e]);v(()=>j.then(Pe),[j]),re({activity:Ge,callback:()=>{const d=M(L);d.length>0&&Z(d.slice(0,-1))},check:()=>!g&&T&&x.matches(":focus-within"),element:()=>x},[]),re({activity:Ke,callback:d=>{const q=M(L),K=C===1;q.length>0&&K&&d.key.length===1&&Z(q.slice(0,-1))},allowDefault:!0,check:()=>!g&&T&&x.matches(":focus-within"),element:()=>x},[C]),v(()=>{!y&&!w&&Y("")},[y,w]),v(()=>{x.toggleAttribute("opened",!!y)},[y]);const P=Qe({onText:Y,onChange:Z,value:L,limit:C,min:a,keepQuery:w,keepOpened:h,setOpened:E,onSelect:r}),[,,Ie]=Ot(j);return{limit:C,opened:y,query:$,textual:A,value:L,source$:j,loading:Ie==="pending",items:S(()=>{if(!y||F)return ge;const d=z?G:[...L,...Q(L,et(c))(G)];return u?d:Lt(d,$,A)},[G,y,$,A,T,L,z,c,u,F]),onToggle:m(d=>{g||E(d.newState==="open")},[g]),onText:m(d=>{g||(Y(d.target.value),E(!0))},[g,Y,t,E]),onSelect:m(d=>{if(g)return;P.onSelect?.(d,P);const{onChange:q,onText:K,limit:Ye,min:Be,value:Fe,keepQuery:je,keepOpened:qe,setOpened:De}=P;je||K(""),qe||De(!1);const D=M(Fe),ne=D.includes(d);ne&&D.length===Be||q((ne?Q(d)(D):[...D,d]).slice(-Ye))},[g,P]),onDeselect:m(d=>{g||P.onChange(Q(d)(P.value))},[g,P]),defaultIndex:$!==void 0&&$?.length>0?0:k}},jt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},qt=({value:e,opened:t,wrap:o,limit:n})=>{const r=xe(),s=!(o||n===1),a=S(()=>Yt(()=>jt(r)),[]),[l,i]=be(0);se(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(h=>{i(h[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),se(()=>s?a():void 0,[s,l,t,e])},Dt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Mt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Nt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:h,onToggle:w,onDeselect:z,value:k,limit:u,min:g,showSingle:X,items:C,source$:A,loading:x,chipRenderer:y}=e,E=u===1,T=E&&k?.[0]!=null,$=x||C.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
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
				?invalid=${ce([A,o],()=>ue(A.then(()=>o,()=>!0),o))}
				.errorMessage=${ce([A,n],()=>ue(A.then(()=>n,Y=>Y.message),n))}
				.value=${U(c)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${Dt}
				?data-one=${E}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${At({value:k,min:g,onDeselect:z,textual:p,disabled:a,chipRenderer:y})}
			</cosmoz-input>

			${_(Mt({opened:t,isSingle:T,showSingle:X,hasResultsOrQuery:$}),()=>tt({...e,items:C,multi:!E},_(x,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>_(c!=null&&c.length>0&&C.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${We("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Re=e=>{const t={...e,...Ft(e)};return qt(t),Nt(t)},_e=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Ht=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=W("value");return v(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Re({...n,value:r,onChange:m((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:m(a=>{e.text=a,o?.(a)},[o])})},Oe=[ye(St)],Le={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",O(Re,{observedAttributes:_e,styleSheets:Oe,shadowRootInit:Le}));customElements.define("cosmoz-autocomplete",O(Ht,{observedAttributes:_e,styleSheets:Oe,shadowRootInit:Le}));export{Re as A,b as a,_e as o,St as s};
