import{f as b,c as D,d as T,u as G,a as m,b as f,A as K,r as qe,E,p as De,e as C,h as Me,H as Ne,s as he,n as He,g as Ue,j as me,k as Xe,l as Ze,m as te,t as Ge}from"./iframe-Dvy9H9fy.js";import{u as Q,a as W,e as J,i as fe,t as Y,n as A,f as Ke,s as ge,b as Qe,c as ve,d as X,g as We,w as Z,p as Je,l as Ve}from"./index-5S65ScSR.js";const M=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),et=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=Q(),i=()=>clearTimeout(l.current),p=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},c=()=>{o||(i(),s())};return b(()=>{if(!(!n||o))return e.addEventListener("pointerenter",c),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",c),e.removeEventListener("pointerleave",p)}},[n,o,e]),b(()=>{if(!(!r||o))return e.addEventListener("focusin",c),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",c),e.removeEventListener("focusout",p)}},[r,o,e]),{scheduleClose:p,cancelClose:i}},tt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},ot=D`
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
`,nt=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:r}=e,s=Q(),[a,l]=G("opened",!1),i=m(()=>{o||(l(!0),s.current?.showPopover())},[o]),p=m(()=>{l(!1),s.current?.hidePopover()},[]),c=m(()=>{if(o)return;s.current?.matches(":popover-open")?p():i()},[o]);b(()=>{const d=s.current;d&&(a?d.showPopover():d.hidePopover())},[a]),b(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:h,cancelClose:y}=et({host:e,popoverRef:s,disabled:o,openOnHover:n,openOnFocus:r,open:i,close:p}),z=r?i:c,k=m(d=>{tt(d),l(d.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:d.newState,oldState:d.oldState,composed:!0}))},[]);return f`
		<slot name="button" @click=${z}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${k}
			@select=${p}
			@focusout=${h}
			@focusin=${y}
			${W(d=>d&&(s.current=d))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",T(nt,{styleSheets:[ot],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const x=e=>e??K;const N=J(class extends fe{constructor(e){if(super(e),e.type!==Y.PROPERTY&&e.type!==Y.ATTRIBUTE&&e.type!==Y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===E||t===K)return t;const o=e.element,n=e.name;if(e.type===Y.PROPERTY){if(t===o[n])return E}else if(e.type===Y.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return E}else if(e.type===Y.ATTRIBUTE&&o.getAttribute(n)===t+"")return E;return De(e),t}}),be=(e,{label:t,invalid:o,errorMessage:n})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${A(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${A(o&&n,()=>f`<div class="error" part="error">${n}</div>`)}
	`,we=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],oe=M`
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
`,xe=M`
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
		${oe}
	}
	@container style(--focused: focused) {
		${oe}
	}
`,st=e=>C(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),rt=Me(class extends Ne{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),at=/([A-Z])/gu,ne=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(at,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},ye=e=>{const t=Q(void 0),o=m(i=>t.current=i,[]),n=e.shadowRoot,r=m(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=m(i=>ne(e,"value",i.target.value),[]),a=m(i=>ne(e,"focused",i.type==="focus"),[]),l=m(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return rt({validate:l},[l]),b(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},it=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",lt=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...we],ct=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:p,step:c,maxlength:h}=e,{onChange:y,onFocus:z,onInput:k,onRef:d}=ye(e),g=st(n);return be(f`
			<input
				${W(d)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${x(o)}
				autocomplete=${x(r)}
				placeholder=${it(e)}
				?readonly=${a}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${N(s??"")}
				maxlength=${x(h)}
				@beforeinput=${g}
				@input=${k}
				@change=${y}
				@focus=${z}
				@blur=${z}
				min=${x(i)}
				max=${x(p)}
				step=${x(c)}
			/>
		`,e)};customElements.define("cosmoz-input",T(ct,{observedAttributes:lt,styleSheets:[he(xe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const se=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},pt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},dt=e=>{const{value:t,maxRows:o}=e,n=C(()=>()=>e.shadowRoot.querySelector("#input"),[]);b(()=>pt(n(),o),[o,n]),b(()=>se(n()),[n,t]),b(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>se(r)));return s.observe(r),()=>s.unobserve(r)},[n])},ut=["rows","placeholder",...we],ht=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:p,onFocus:c,onInput:h,onRef:y}=ye(e);return dt(e),be(f`
			<textarea id="input" part="input"
				${W(y)}
				autocomplete=${x(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${x(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${N(o??"")} maxlength=${x(i)} @input=${h}
				@change=${p} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",T(ht,{observedAttributes:ut,styleSheets:[he(xe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const mt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=m(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${N(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${A(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${A(r,a=>f`<div class="failure">${a}</div>`)} `},ft=D`
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
`,gt=D`
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
`;customElements.define("cosmoz-toggle",T(mt,{styleSheets:[gt,ft],observedAttributes:["disabled"]}));const vt={},re=J(class extends fe{constructor(){super(...arguments),this.ot=vt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return E}else if(this.ot===t)return E;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class bt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class wt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ae=e=>!He(e)&&typeof e.then=="function",ie=1073741823;class xt extends Ke{constructor(){super(...arguments),this._$Cwt=ie,this._$Cbt=[],this._$CK=new bt(this),this._$CX=new wt}render(...t){return t.find(o=>!ae(o))??E}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!ae(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=ie,r=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const c=s.deref();if(c!==void 0){const h=c._$Cbt.indexOf(i);h>-1&&h<c._$Cwt&&(c._$Cwt=h,c.setValue(p))}}))}return E}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const le=J(xt),yt=M`
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
`,$t=f`
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
`,zt=({onClear:e,disabled:t})=>f`
	<div class="content" part="content chip-text"><slot></slot></div>
	${A(e&&!t,()=>f`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${e}
			>
				${$t}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",T(zt,{observedAttributes:["disabled"],styleSheets:[ge(yt)]}));const kt=({content:e,onClear:t,disabled:o,hidden:n,className:r="chip",slot:s})=>f`<cosmoz-autocomplete-chip
		class=${x(r)}
		slot=${x(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${t}
		title=${x(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,Ct=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=kt})=>[...e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"control"})),s({item:null,content:f`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Et=D`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",T(()=>K,{styleSheets:[Et]}));const At=M`
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
`,V=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},ce=e=>e.type||e.toString(),pe=e=>Array.isArray(e)?e:[e],Tt=(e,t)=>{const o=pe(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:pe(r).map(ce),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(ce(s)));return a?a.handle(r,s):r}},O={pending:"pending",rejected:"rejected",resolved:"resolved"},$e={error:void 0,result:void 0,state:O.pending},ze=V(O.pending),ke=V(O.resolved,e=>({result:e})),Ce=V(O.rejected,e=>({error:e})),St=Tt($e,[[ze,()=>({error:void 0,result:void 0,state:O.pending})],[ke,(e,{result:t})=>({error:void 0,result:t,state:O.resolved})],[Ce,(e,{error:t})=>({error:t,result:void 0,state:O.rejected})]]),Rt=e=>{const[{error:t,result:o,state:n},r]=Ue(St,$e);return b(()=>{if(!e)return;let s=!1;return r(ze()),e.then(a=>!s&&r(ke(a)),a=>!s&&r(Ce(a))),()=>{s=!0}},[e]),[o,t,n]},de=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),_t=(e,t,o)=>{if(!t)return e;const n=de(t.toLowerCase()),r=[];for(const s of e){const l=de(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},Ot=e=>e===!1||e==null?[]:e,Lt=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),ue=[],Pt=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},It=(e,t,o)=>m(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),Yt=({value:e,text:t,onChange:o,onText:n,onSelect:r,limit:s,min:a,source:l,textProperty:i,textual:p,valueProperty:c,keepOpened:h,keepQuery:y,preserveOrder:z,defaultIndex:k,externalSearch:d,disabled:g,lazyOpen:H})=>{const S=C(()=>(p??Qe)(i),[p,i]),$=ve(),[w,R]=G("opened",!1),L=!t,v=C(()=>t?.trim(),[t]),P=It($,n,"text"),B=m(u=>{o?.(u,()=>R(!1)),Lt($,"value",u)},[o]),[U,Re]=me([]),F=!!(H&&!v),j=C(()=>F?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:v,active:w}):l).then(Ot),[l,w,v,F]),I=C(()=>X(e),[e]);b(()=>j.then(Re),[j]),We({activity:Xe,callback:()=>{const u=X(I);u.length>0&&B(u.slice(0,-1))},check:()=>!g&&L&&s!==1&&$.matches(":focus-within"),element:()=>$},[]),b(()=>{!w&&!y&&P("")},[w,y]),b(()=>{$.toggleAttribute("opened",!!w)},[w]);const _=Ze({onText:P,onChange:B,value:I,limit:s,min:a,keepQuery:y,keepOpened:h,setOpened:R,onSelect:r}),[,,_e]=Rt(j);return{opened:w,query:v,textual:S,value:I,source$:j,loading:_e==="pending",items:C(()=>{if(!w||F)return ue;const u=z?U:[...I,...Z(I,Je(c))(U)];return d?u:_t(u,v,S)},[U,w,v,S,L,I,z,c,d,F]),onToggle:m(u=>{g||R(u.newState==="open")},[g]),onText:m(u=>{g||(P(u.target.value),R(!0))},[g,P,t,R]),onSelect:m(u=>{if(g)return;_.onSelect?.(u,_);const{onChange:Oe,onText:Le,limit:Pe,min:Ie,value:Ye,keepQuery:Be,keepOpened:Fe,setOpened:je}=_;Be||Le(""),Fe||je(!1);const q=X(Ye),ee=q.includes(u);ee&&q.length===Ie||Oe((ee?Z(u)(q):[...q,u]).slice(-Pe))},[g,_]),onDeselect:m(u=>{g||_.onChange(Z(u)(_.value))},[g,_]),defaultIndex:v!==void 0&&v?.length>0?0:k}},Bt=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of t)l.hidden=!1;const r=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const i=t[s].getBoundingClientRect();if(!(i.x+i.width<=r.x+r.width-24))break}const a=t.length-s;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;s<t.length;s++)t[s].hidden=!0},Ft=({value:e,opened:t,wrap:o,limit:n})=>{const r=ve(),s=!(o||n==1),a=C(()=>Pt(()=>Bt(r)),[]),[l,i]=me(0);te(()=>{if(!s)return;const p=r.shadowRoot.querySelector("cosmoz-input"),c=new ResizeObserver(h=>{i(h[0].contentRect.width)});return c.observe(p),()=>c.disconnect()},[s]),te(()=>s?a():void 0,[s,l,t,e])},jt=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),qt=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,Dt=e=>{const{opened:t,invalid:o,errorMessage:n,label:r,placeholder:s,disabled:a,noLabelFloat:l,alwaysFloatLabel:i,textual:p,text:c,onText:h,onToggle:y,onDeselect:z,value:k,limit:d,min:g,showSingle:H,items:S,source$:$,loading:w,chipRenderer:R}=e,L=d==1,v=L&&k?.[0]!=null,P=w||S.length>0||c!=null&&c.length>0;return f`<cosmoz-dropdown-next
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
				.placeholder=${v?void 0:s}
				?no-label-float=${l}
				?always-float-label=${k?.length>0||i}
				?readonly=${v}
				?disabled=${a}
				?invalid=${re([$],()=>le($.then(()=>o,()=>!0),o))}
				.errorMessage=${re([$],()=>le($.then(()=>n,B=>B.message),n))}
				.value=${N(c)}
				@value-changed=${h}
				autocomplete="off"
				exportparts=${jt}
				?data-one=${L}
				?data-single=${v}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Ct({value:k,min:g,onDeselect:z,textual:p,disabled:a,chipRenderer:R})}
			</cosmoz-input>

			${A(qt({opened:t,isSingle:v,showSingle:H,hasResultsOrQuery:P}),()=>Ve({...e,items:S,multi:!L},A(w,()=>f`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>A(c!=null&&c.length>0&&S.length===0,()=>f`<slot name="no-result">
											<p class="no-result">${Ge("No results found")}</p>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ee=e=>{const t={...e,...Yt(e)};return Ft(t),Dt(t)},Ae=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open"],Mt=e=>{const{onChange:t,onText:o,...n}=e,[r,s]=G("value");return b(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ee({...n,value:r,onChange:m((a,...l)=>{s(a),t?.(a,...l)},[t]),onText:m(a=>{e.text=a,o?.(a)},[o])})},Te=[ge(At)],Se={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",T(Ee,{observedAttributes:Ae,styleSheets:Te,shadowRootInit:Se}));customElements.define("cosmoz-autocomplete",T(Mt,{observedAttributes:Ae,styleSheets:Te,shadowRootInit:Se}));export{Ee as A,x as a,Ae as o,At as s};
