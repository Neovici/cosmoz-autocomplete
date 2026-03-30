import{f as b,c as H,d as _,u as ee,a as m,b as f,A as te,r as Ze,E as S,p as Ge,e as T,h as Ke,H as Qe,s as ye,n as We,g as Je,j as xe,k as Ve,l as et,m as tt,o as ie,t as ot}from"./iframe-Cf9R2Rp4.js";import{u as oe,a as ne,e as se,i as $e,t as Y,n as R,f as nt,s as ze,b as st,c as ke,d as N,g as le,w as J,p as V,l as rt}from"./index-Dl0fhXIY.js";const U=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),at=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=oe(),i=()=>clearTimeout(l.current),p=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},c=()=>{o||(i(),s())};return b(()=>{if(!(!n||o))return e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",p)}},[n,o,e]),b(()=>{if(!(!r||o))return e.addEventListener("focusin",c),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",c),e.removeEventListener("focusout",p)}},[r,o,e]),{scheduleClose:p,cancelClose:i}},it=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},lt=H`
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
`,ct=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:r}=e,s=oe(),[a,l]=ee("opened",!1),i=m(()=>{o||(l(!0),s.current?.showPopover())},[o]),p=m(()=>{l(!1),s.current?.hidePopover()},[]),c=m(()=>{if(o)return;s.current?.matches(":popover-open")?p():i()},[o]);b(()=>{const u=s.current;u&&(a?u.showPopover():u.hidePopover())},[a]),b(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:h,cancelClose:y}=at({host:e,popoverRef:s,disabled:o,openOnHover:n,openOnFocus:r,open:i,close:p}),z=r?i:c,k=m(u=>{it(u),l(u.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:u.newState,oldState:u.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${z}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${k}
			@select=${p}
			@focusout=${h}
			@focusin=${y}
			${ne(u=>u&&(s.current=u))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",_(ct,{styleSheets:[lt],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const w=e=>e??te;const X=se(class extends $e{constructor(e){if(super(e),e.type!==Y.PROPERTY&&e.type!==Y.ATTRIBUTE&&e.type!==Y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ze(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===S||t===te)return t;const o=e.element,n=e.name;if(e.type===Y.PROPERTY){if(t===o[n])return S}else if(e.type===Y.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return S}else if(e.type===Y.ATTRIBUTE&&o.getAttribute(n)===t+"")return S;return Ge(e),t}}),Ee=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${R(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${R(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,Ce=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ce=U`
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
`,Ae=U`
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
		${ce}
	}
	@container style(--focused: focused) {
		${ce}
	}
`,pt=e=>T(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),dt=Ke(class extends Qe{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),ut=/([A-Z])/gu,pe=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(ut,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Te=e=>{const t=oe(void 0),o=m(i=>t.current=i,[]),n=e.shadowRoot,r=m(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=m(i=>pe(e,"value",i.target.value),[]),a=m(i=>pe(e,"focused",i.type==="focus"),[]),l=m(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return dt({validate:l},[l]),b(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},ht=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",mt=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ce],ft=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:h}=e,{onChange:y,onFocus:z,onInput:k,onRef:u}=Te(e),g=pt(n);return Ee(f`
			<input
				${ne(u)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${w(o)}
				autocomplete=${w(r)}
				placeholder=${ht(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${X(s??"")}
				maxlength=${w(h)}
				@beforeinput=${g}
				@input=${k}
				@change=${y}
				@focus=${z}
				@blur=${z}
				min=${w(i)}
				max=${w(p)}
				step=${w(c)}
			/>
		`,e)};customElements.define("cosmoz-input",_(ft,{observedAttributes:mt,styleSheets:[ye(Ae)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const de=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},gt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},vt=e=>{const{value:t,maxRows:o}=e,n=T(()=>()=>e.shadowRoot.querySelector("#input"),[]);b(()=>gt(n(),o),[o,n]),b(()=>de(n()),[n,t]),b(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>de(r)));return s.observe(r),()=>s.unobserve(r)},[n])},bt=["rows","placeholder",...Ce],wt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:h,onRef:y}=Te(e);return vt(e),Ee(f`
			<textarea id="input" part="input"
				${ne(y)}
				autocomplete=${w(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${w(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${X(o??"")} maxlength=${w(i)} @input=${h}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",_(wt,{observedAttributes:bt,styleSheets:[ye(Ae)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const yt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=m(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${X(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${R(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${R(r,a=>f`<div class="failure">${a}</div>`)} `},xt=H`
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
`,$t=H`
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
`;customElements.define("cosmoz-toggle",_(yt,{styleSheets:[$t,xt],observedAttributes:["disabled"]}));const zt={},ue=se(class extends $e{constructor(){super(...arguments),this.ot=zt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return S}else if(this.ot===t)return S;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class kt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Et{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const he=e=>!We(e)&&typeof e.then=="function",me=1073741823;class Ct extends nt{constructor(){super(...arguments),this._$Cwt=me,this._$Cbt=[],this._$CK=new kt(this),this._$CX=new Et}render(...t){return t.find(o=>!he(o))??S}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!he(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=me,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const h=c._$Cbt.indexOf(i);h>-1&&h<c._$Cwt&&(c._$Cwt=h,c.setValue(p))}}))}return S}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const fe=se(Ct),At=U`
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
`,Tt=f`
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
`,St=({onClear:e,disabled:t})=>f`
	<div
		class="content"
		part="content chip-text"
		@mousedown=${o=>o.preventDefault()}
	>
		<slot></slot>
	</div>
	${R(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${Tt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",_(St,{observedAttributes:["disabled"],styleSheets:[ze(At)]}));const Rt=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${w(r)}
		slot=${w(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${w(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,_t=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=Rt})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:f`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Ot=H`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",_(()=>te,{styleSheets:[Ot]}));const Lt=U`
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
`,re=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},ge=e=>e.type||e.toString(),ve=e=>Array.isArray(e)?e:[e],Pt=(e,t)=>{const o=ve(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:ve(r).map(ge),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(ge(s)));return a?a.handle(r,s):r}},P={pending:"pending",rejected:"rejected",resolved:"resolved"},Se={error:void 0,result:void 0,state:P.pending},Re=re(P.pending),_e=re(P.resolved,e=>({result:e})),Oe=re(P.rejected,e=>({error:e})),It=Pt(Se,[[Re,()=>({error:void 0,result:void 0,state:P.pending})],[_e,(e,{result:t})=>({error:void 0,result:t,state:P.resolved})],[Oe,(e,{error:t})=>({error:t,result:void 0,state:P.rejected})]]),Yt=e=>{const[{error:t,result:o,state:n},r]=Je(It,Se);return b(()=>{if(!e)return;let s=!1;return r(Re()),e.then(a=>!s&&r(_e(a)),a=>!s&&r(Oe(a))),()=>{s=!0}},[e]),[o,t,n]},be=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Bt=(e,t,o)=>{if(!t)return e;const n=be(t.toLowerCase()),r=[];for(const s of e){const l=be(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Ft=e=>e===!1||e==null?[]:e,jt=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),we=[],qt=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},Dt=(e,t,o)=>m(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Mt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:h,keepQuery:y,preserveOrder:z,defaultIndex:k,externalSearch:u,disabled:g,lazyOpen:Z})=>{const C=s!=null?Number(s):void 0,O=a!=null?Number(a):void 0,I=T(()=>(p??st)(i),[p,i]),E=ke(),[v,x]=ee("opened",!1),B=!t,$=T(()=>t?.trim(),[t]),F=Dt(E,n,"text"),G=m(d=>{o?.(d,()=>x(!1)),jt(E,"value",d)},[o]),[K,Be]=xe([]),j=!!(Z&&!$),q=T(()=>j?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:$,active:v}):l).then(Ft),[l,v,$,j]),L=T(()=>N(e),[e]);b(()=>q.then(Be),[q]),le({activity:Ve,callback:()=>{const d=N(L);d.length>(O??0)&&G(d.slice(0,-1))},check:()=>!g&&B&&E.matches(":focus-within"),element:()=>E},[]),le({activity:et,callback:d=>{const D=N(L),Q=C===1;D.length>0&&Q&&d.key.length===1&&G(D.slice(0,-1))},allowDefault:!0,check:()=>!g&&B&&E.matches(":focus-within"),element:()=>E},[C]),b(()=>{!v&&!y&&F("")},[v,y]),b(()=>{E.toggleAttribute("opened",!!v)},[v]);const A=tt({onText:F,onChange:G,value:L,limit:C,min:O,keepQuery:y,keepOpened:h,setOpened:x,onSelect:r,valueProperty:c}),[,,Fe]=Yt(q);return{limit:C,opened:v,query:$,textual:I,value:L,source$:q,loading:Fe==="pending",items:T(()=>{if(!v||j)return we;const d=z?K:[...L,...J(L,V(c))(K)];return u?d:Bt(d,$,I)},[K,v,$,I,B,L,z,c,u,j]),onToggle:m(d=>{g||x(d.newState==="open")},[g]),onText:m(d=>{g||(F(d.target.value),x(!0))},[g,F,t,x]),onSelect:m(d=>{if(g)return;A.onSelect?.(d,A);const{onChange:D,onText:Q,limit:je,min:qe,value:De,keepQuery:Me,keepOpened:Ne,setOpened:He,valueProperty:Ue}=A;Me||Q(""),Ne||He(!1);const M=N(De),W=V(Ue),ae=M.some(Xe=>W(Xe)===W(d));ae&&M.length===qe||D((ae?J(d,W)(M):[...M,d]).slice(-je))},[g,A]),onDeselect:m(d=>{g||A.onChange(J(d,V(A.valueProperty))(A.value))},[g,A]),defaultIndex:$!==void 0&&$?.length>0?0:k}},Nt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},Ht=({value:e,opened:t,wrap:o,limit:n})=>{const r=ke(),s=!(o||n===1),a=T(()=>qt(()=>Nt(r)),[]),[l,i]=xe(0);ie(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(h=>{i(h[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),ie(()=>s?a():void 0,[s,l,t,e])},Ut=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Xt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Zt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:h,onToggle:y,onDeselect:z,value:k,limit:u,min:g,showSingle:Z,items:C,source$:O,loading:I,chipRenderer:E}=e,v=u===1,x=v&&k?.[0]!=null,B=I||C.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${a}
			.opened=${t}
			@dropdown-toggle=${y}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${r}
				.placeholder=${x?void 0:s}
				?no-label-float=${l}
				?always-float-label=${k?.length>0||i}
				?readonly=${x}
				?disabled=${a}
				?invalid=${ue([O,o],()=>fe(O.then(()=>o,()=>!0),o))}
				.errorMessage=${ue([O,n],()=>fe(O.then(()=>n,$=>$.message),n))}
				.value=${X(c)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${Ut}
				?data-one=${v}
				?data-single=${x}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${_t({value:k,min:g,onDeselect:z,textual:p,disabled:a,chipRenderer:E})}
			</cosmoz-input>

			${R(Xt({opened:t,isSingle:x,showSingle:Z,hasResultsOrQuery:B}),()=>rt({...e,items:C,multi:!v},R(I,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>R(c!=null&&c.length>0&&C.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${ot("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Le=e=>{const t={...e,...Mt(e)};return Ht(t),Zt(t)},Pe=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Gt=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=ee("value");return b(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Le({...n,value:r,onChange:m((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:m(a=>{e.text=a,o?.(a)},[o])})},Ie=[ze(Lt)],Ye={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",_(Le,{observedAttributes:Pe,styleSheets:Ie,shadowRootInit:Ye}));customElements.define("cosmoz-autocomplete",_(Gt,{observedAttributes:Pe,styleSheets:Ie,shadowRootInit:Ye}));export{Le as A,w as a,Pe as o,Lt as s};
