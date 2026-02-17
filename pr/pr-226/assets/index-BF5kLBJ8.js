import{f as g,c as M,d as $,u as Z,a as h,b as f,A as X,r as Le,E as j,p as Pe,e as R,h as Ie,H as Ye,s as ie,n as je,g as Fe,j as le,k as Be,l as Me,t as qe}from"./iframe-DWcztEsv.js";import{u as G,a as K,e as ce,i as De,t as Y,n as x,f as He,s as pe,b as Ne,c as de,d as N,g as Ue,w as U,p as Ze,l as Xe}from"./index-j7rR8Ut4.js";const q=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),Ge=({host:e,popoverRef:t,openOnHover:o,openOnFocus:n,open:s,close:r})=>{const a=G(),l=()=>clearTimeout(a.current),i=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const c=t.current;o&&(e.matches(":hover")||c?.matches(":hover"))||n&&(e.matches(":focus-within")||c?.matches(":focus-within"))||r()},100)},p=()=>{l(),s()};g(()=>{if(o)return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",i),()=>{l(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",i)}},[o,e]),g(()=>{if(n)return e.addEventListener("focusin",p),e.addEventListener("focusout",i),()=>{l(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",i)}},[n,e])},Ke=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},Qe=M`
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
`,Je=e=>{const{placement:t="bottom span-right",openOnHover:o,openOnFocus:n}=e,s=G(),[r,a]=Z("opened",!1),l=h(()=>{a(!0),s.current?.showPopover()},[]),i=h(()=>{a(!1),s.current?.hidePopover()},[]),p=h(()=>{s.current?.matches(":popover-open")?i():l()},[]);g(()=>{const d=s.current;d&&(r?d.showPopover():d.hidePopover())},[r]),g(()=>{e.toggleAttribute("opened",!!r)},[r]),Ge({host:e,popoverRef:s,openOnHover:o,openOnFocus:n,open:l,close:i});const c=n?l:p,m=h(d=>{Ke(d),a(d.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:d.newState,oldState:d.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${c}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${m}
			@select=${i}
			${K(d=>d&&(s.current=d))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",$(Je,{styleSheets:[Qe],observedAttributes:["placement","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??X;const D=ce(class extends De{constructor(e){if(super(e),e.type!==Y.PROPERTY&&e.type!==Y.ATTRIBUTE&&e.type!==Y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Le(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===j||t===X)return t;const o=e.element,n=e.name;if(e.type===Y.PROPERTY){if(t===o[n])return j}else if(e.type===Y.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return j}else if(e.type===Y.ATTRIBUTE&&o.getAttribute(n)===t+"")return j;return Pe(e),t}}),ue=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${x(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${x(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,he=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],V=q`
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
`,fe=q`
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
`,Ve=e=>R(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),We=Ie(class extends Ye{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),et=/([A-Z])/gu,W=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(et,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},me=e=>{const t=G(void 0),o=h(i=>t.current=i,[]),n=e.shadowRoot,s=h(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),r=h(i=>W(e,"value",i.target.value),[]),a=h(i=>W(e,"focused",i.type==="focus"),[]),l=h(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return We({validate:l},[l]),g(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:s,onFocus:a,onInput:r,onRef:o}},tt=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ot=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...he],nt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:m}=e,{onChange:d,onFocus:k,onInput:C,onRef:_}=me(e),E=Ve(n);return ue(f`
			<input
				${K(_)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(s)}
				placeholder=${tt(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${D(r??"")}
				maxlength=${b(m)}
				@beforeinput=${E}
				@input=${C}
				@change=${d}
				@focus=${k}
				@blur=${k}
				min=${b(i)}
				max=${b(p)}
				step=${b(c)}
			/>
		`,e)};customElements.define("cosmoz-input",$(nt,{observedAttributes:ot,styleSheets:[ie(fe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ee=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},st=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},rt=e=>{const{value:t,maxRows:o}=e,n=R(()=>()=>e.shadowRoot.querySelector("#input"),[]);g(()=>st(n(),o),[o,n]),g(()=>ee(n()),[n,t]),g(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ee(s)));return r.observe(s),()=>r.unobserve(s)},[n])},at=["rows","placeholder",...he],it=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:s,disabled:r,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:m,onRef:d}=me(e);return rt(e),ue(f`
			<textarea id="input" part="input"
				${K(d)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(l)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${D(o??"")} maxlength=${b(i)} @input=${m}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",$(it,{observedAttributes:at,styleSheets:[ie(fe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const lt=e=>{const{label:t,value:o,disabled:n,error:s}=e,r=h(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${D(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${x(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${x(s,a=>f`<div class="failure">${a}</div>`)} `},ct=M`
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
`,pt=M`
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
`;customElements.define("cosmoz-toggle",$(lt,{styleSheets:[pt,ct],observedAttributes:["disabled"]}));class dt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ut{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const te=e=>!je(e)&&typeof e.then=="function",oe=1073741823;class ht extends He{constructor(){super(...arguments),this._$Cwt=oe,this._$Cbt=[],this._$CK=new dt(this),this._$CX=new ut}render(...t){return t.find(o=>!te(o))??j}update(t,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!te(i))return this._$Cwt=l,i;l<s&&i===n[l]||(this._$Cwt=oe,s=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=r.deref();if(c!==void 0){const m=c._$Cbt.indexOf(i);m>-1&&m<c._$Cwt&&(c._$Cwt=m,c.setValue(p))}}))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ne=ce(ht),ft=q`
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
`,mt=f`
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
`,gt=({onClear:e,disabled:t})=>f`
	<div class="content" part="content chip-text"><slot></slot></div>
	${x(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${mt}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",$(gt,{observedAttributes:["disabled"],styleSheets:[pe(ft)]}));const vt=({content:e,onClear:t,disabled:o,className:n="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${b(n)}
		slot=${b(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		.onClear=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,bt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=vt})=>e.filter(Boolean).map(a=>r({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:s,slot:"control"})),wt=M`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",$(()=>X,{styleSheets:[wt]}));const xt=q`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
		--cosmoz-autocomplete-chip-row-height: var(
			--cosmoz-autocomplete-chip-text-line-height,
			22px
		);
	}

	cosmoz-dropdown-next {
		display: block;
	}

	cosmoz-input::part(control) {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		min-width: 35px;
		max-height: calc(var(--cosmoz-autocomplete-chip-row-height) + 2px + 4px);
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
		max-height: none;
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
`,Q=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),o),o)},se=e=>e.type||e.toString(),re=e=>Array.isArray(e)?e:[e],yt=(e,t)=>{const o=re(t),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:re(s).map(se),handle:r}));return(s=e,r)=>{const a=n.find(l=>l.actions.includes(se(r)));return a?a.handle(s,r):s}},O={pending:"pending",rejected:"rejected",resolved:"resolved"},ge={error:void 0,result:void 0,state:O.pending},ve=Q(O.pending),be=Q(O.resolved,e=>({result:e})),we=Q(O.rejected,e=>({error:e})),zt=yt(ge,[[ve,()=>({error:void 0,result:void 0,state:O.pending})],[be,(e,{result:t})=>({error:void 0,result:t,state:O.resolved})],[we,(e,{error:t})=>({error:t,result:void 0,state:O.rejected})]]),$t=e=>{const[{error:t,result:o,state:n},s]=Fe(zt,ge);return g(()=>{if(!e)return;let r=!1;return s(ve()),e.then(a=>!r&&s(be(a)),a=>!r&&s(we(a))),()=>{r=!0}},[e]),[o,t,n]},ae=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),kt=(e,t,o)=>{if(!t)return e;const n=ae(t.toLowerCase()),s=[];for(const r of e){const l=ae(o(r).toLowerCase()).indexOf(n);l<0||s.push({item:r,index:l})}return s.sort((r,a)=>r.index-a.index).map(({item:r})=>r)},Ct=e=>e===!1||e==null?[]:e,Et=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),At=[],Tt=(e,t,o)=>h(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),St=({value:e,text:t,onChange:o,onText:n,onSelect:s,limit:r,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:m,keepQuery:d,preserveOrder:k,defaultIndex:C,externalSearch:_})=>{const E=R(()=>(p??Ne)(i),[p,i]),A=de(),[v,y]=Z("opened",!1),F=!t,w=R(()=>t?.trim(),[t]),T=Tt(A,n,"text"),L=h(u=>{o?.(u,()=>y(!1)),Et(A,"value",u)},[o]),[z,H]=le([]),P=R(()=>Promise.resolve(typeof l=="function"?l({query:w,active:v}):l).then(Ct),[l,v,w]),I=R(()=>N(e),[e]);g(()=>P.then(H),[P]),Ue({activity:Be,callback:()=>{const u=N(I);u.length>0&&L(u.slice(0,-1))},check:()=>F&&r!==1&&A.matches(":focus-within"),element:()=>A},[]),g(()=>{!v&&!d&&T("")},[v,d]),g(()=>{A.toggleAttribute("opened",!!v)},[v]);const S=Me({onText:T,onChange:L,value:I,limit:r,min:a,keepQuery:d,keepOpened:m,setOpened:y,onSelect:s}),[,,ke]=$t(P);return{opened:v,query:w,textual:E,value:I,source$:P,loading:ke==="pending",items:R(()=>{if(!v)return At;const u=k?z:[...I,...U(I,Ze(c))(z)];return _?u:kt(u,w,E)},[z,v,w,E,F,I,k,c,_]),onToggle:h(u=>{y(u.newState==="open")},[]),onText:h(u=>{T(u.target.value),y(!0)},[T,t,y]),onSelect:h(u=>{S.onSelect?.(u,S);const{onChange:Ce,onText:Ee,limit:Ae,min:Te,value:Se,keepQuery:Re,keepOpened:Oe,setOpened:_e}=S;Re||Ee(""),Oe||_e(!1);const B=N(Se),J=B.includes(u);J&&B.length===Te||Ce((J?U(u)(B):[...B,u]).slice(-Ae))},[S]),onDeselect:h(u=>S.onChange(U(u)(S.value)),[S]),defaultIndex:w!==void 0&&w?.length>0?0:C}},Rt=e=>e.tagName==="COSMOZ-AUTOCOMPLETE-CHIP"&&!e.classList.contains("badge"),Ot=e=>e.intersectionRect.height>0&&e.boundingClientRect.width===e.intersectionRect.width?"visible":e.boundingClientRect.height>0?"overflowing":"hidden",_t=(e,t)=>{const o=[];for(const n of e){const s=n.target;t.delete(s),Ot(n)==="overflowing"&&o.push(s)}return o},Lt=(e,t,o)=>{let n=!1;const s=new Set;let r=[];const a=new IntersectionObserver(i=>{if(n)return;const p=_t(i,s);if(!(s.size>0)){n=!0,r=p;for(const c of r)c.hidden=!0,a.unobserve(c);o(r.length)}},{root:e,threshold:[0,1]}),l=()=>{for(const p of r)p.hidden=!1;r=[],n=!1,s.clear(),a.disconnect();const i=t.assignedElements({flatten:!0}).filter(Rt);if(i.length===0){o(0);return}for(const p of i)s.add(p),a.observe(p)};return l(),t.addEventListener("slotchange",l),()=>{t.removeEventListener("slotchange",l),a.disconnect();for(const i of r)i.hidden=!1}},Pt=({wrap:e,limit:t})=>{const o=de(),n=!(e||t==1),[s,r]=le(0);return g(()=>{if(!n){r(0);return}let a,l=!1;const i=requestAnimationFrame(()=>{if(l)return;const p=o.shadowRoot.querySelector("cosmoz-input"),c=p?.shadowRoot?.querySelector(".control"),m=p?.shadowRoot?.querySelector('slot[name="control"]');!c||!m||(a=Lt(c,m,r))});return()=>{l=!0,cancelAnimationFrame(i),a?.()}},[n]),{overflowCount:n?s:0}},It=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Yt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,jt=e=>{const{opened:t,invalid:o,errorMessage:n,label:s,placeholder:r,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:m,onToggle:d,onDeselect:k,value:C,limit:_,min:E,showSingle:A,items:v,source$:y,loading:F,chipRenderer:w,overflowCount:T=0}=e,L=_==1,z=L&&C?.[0]!=null,H=F||v.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
			open-on-focus
			.opened=${t}
			@dropdown-toggle=${d}
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${s}
				.placeholder=${z?void 0:r}
				?no-label-float=${l}
				?always-float-label=${C?.length>0||i}
				?readonly=${z}
				?disabled=${a}
				?invalid=${ne(y.then(()=>o,()=>!0),o)}
				.errorMessage=${ne(y.then(()=>n,P=>P.message),n)}
				.value=${D(c)}
				@value-changed=${m}
				autocomplete="off"
				exportparts=${It}
				?data-one=${L}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${bt({value:C,min:E,onDeselect:k,textual:p,disabled:a,chipRenderer:w})}
				${x(T>0,()=>f`<cosmoz-autocomplete-chip
							class="badge"
							slot="control"
							part="chip badge"
						>
							+${T}
						</cosmoz-autocomplete-chip>`)}
			</cosmoz-input>

			${x(Yt({opened:t,isSingle:z,showSingle:A,hasResultsOrQuery:H}),()=>Xe({...e,items:v,multi:!L},x(F,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>x(c!=null&&c.length>0&&v.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${qe("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},xe=e=>{const t={...e,...St(e)},{overflowCount:o}=Pt(t);return jt({...t,overflowCount:o})},ye=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Ft=e=>{const{onChange:t,onText:o,...n}=e,[s,r]=Z("value");return g(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),xe({...n,value:s,onChange:h((a,...l)=>{r(a),t?.(a,...l)},[t]),onText:h(a=>{e.text=a,o?.(a)},[o])})},ze=[pe(xt)],$e={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",$(xe,{observedAttributes:ye,styleSheets:ze,shadowRootInit:$e}));customElements.define("cosmoz-autocomplete",$(Ft,{observedAttributes:ye,styleSheets:ze,shadowRootInit:$e}));export{xe as A,b as a,ye as o,xt as s};
