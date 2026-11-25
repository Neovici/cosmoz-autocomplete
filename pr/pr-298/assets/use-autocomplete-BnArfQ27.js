import{A as P,E as q,s as se,c as _,a as F,b,g as k,D as tt,e as Ce,f as Se,w as Re,i as ue,u as he,h as Le,r as Oe,p as Pe,d as Z,j as ot,H as rt,k as nt,l as st}from"./iframe-zCxUUSHg.js";import{e as J,i as ie,t as T,b as V,n as S,u as z,c as W,f as _e,p as ne,d as it,a as at,g as le,h as ct,w as de}from"./index-s1pP-A5o.js";const c=e=>e??P;const Ne="important",lt=" !"+Ne,dt=J(class extends ie{constructor(e){if(super(e),e.type!==T.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const r=e[o];return r==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?o.removeProperty(r):o[r]=null);for(const r in t){const n=t[r];if(n!=null){this.ft.add(r);const s=typeof n=="string"&&n.endsWith(lt);r.includes("-")||s?o.setProperty(r,s?n.slice(0,-11):n,s?Ne:""):o[r]=n}}return q}}),X=se(_`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`);const ut=J(class extends ie{constructor(e){if(super(e),e.type!==T.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||this.nt?.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return q}}),d=e=>`calc(var(--cz-spacing) * ${e})`,pt=_`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${d(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${d(.5)} ${d(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand-subtle);
		color: var(--cz-color-text-brand);
		border-color: var(--cz-color-border-brand-subtle);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-border-error-subtle);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-border-warning-subtle);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-border-success-subtle);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-bg-processing);
		color: var(--cz-color-text-processing);
		border-color: var(--cz-color-border-processing-subtle);
	}

	.custom {
		background-color: var(
			--cosmoz-badge-bg-color,
			color-mix(in oklab, var(--color) 14%, var(--cz-color-bg-primary))
		);
		border-color: var(
			--cosmoz-badge-border-color,
			color-mix(in oklab, var(--color) 32%, var(--cz-color-bg-primary))
		);
		/* mostly text-primary, so user-picked very light or dark colors stay readable */
		color: color-mix(in oklab, var(--color) 40%, var(--cz-color-text-primary));
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${d(.5)} ${d(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${d(.5)} ${d(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${d(1)};
	}

	:host([size='lg']) .badge {
		padding: ${d(1)} ${d(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${d(.5)} ${d(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${d(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${d(1)} ${d(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${d(2)};
		height: ${d(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) .dot {
		background-color: var(--cz-color-fg-processing-secondary);
	}
	.custom .dot {
		background-color: var(--color);
	}
	.custom ::slotted(svg) {
		color: var(--color);
	}

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${d(.5)} ${d(2.5)} ${d(.5)} ${d(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${d(.5)} ${d(2)} ${d(.5)} ${d(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${d(1)} ${d(3)} ${d(1)} ${d(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${d(.5)} ${d(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${d(.5)} ${d(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${d(1)} ${d(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${d(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${d(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${d(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${d(4)};
		height: ${d(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${d(3)};
		height: ${d(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${d(5)};
		height: ${d(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${d(3)};
		height: ${d(3)};
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-fg-processing-secondary);
	}

	/* Compact counters keep a stable pill height around smaller metadata text. */
	:host([size='xs']) .badge,
	:host([size='xs'][dot]) .badge {
		box-sizing: border-box;
		min-height: ${d(5)};
		padding: 0 ${d(1)};
		font-size: var(--cz-text-2xs, var(--cz-text-xs));
		line-height: var(--cz-text-2xs-line-height, var(--cz-text-xs-line-height));
		font-weight: var(--cz-font-weight-regular);
		gap: ${d(1)};
	}

	:host([type='icon'][size='xs']) .badge {
		padding: ${d(.5)};
	}

	:host([type='icon'][size='xs']) ::slotted(svg) {
		width: ${d(3)};
		height: ${d(3)};
	}
`,ht=["gray","brand","error","warning","success","processing"],gt=e=>!!e&&!ht.includes(e)&&CSS.supports("color",e),bt=({color:e})=>{const t=gt(e);return b`<span
		class=${ut({badge:!0,custom:t})}
		part="badge"
		style=${dt({"--color":t?e:void 0})}
	>
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`};customElements.define("cosmoz-badge",F(bt,{observedAttributes:["color"],styleSheets:[X,pt]}));const vt=_`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",F(()=>b`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[X,vt]}));const pe=se(_`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),me=(e,t,o)=>tt(b`<cosmoz-tooltip-content>
			${S(t,()=>b`<strong slot="heading">${t}</strong>`)}
			${S(o,()=>b`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),mt=(e,t)=>{const{for:o,heading:r,description:n,placement:s="top",delay:i=300,disabled:u=!1}=t,l=V(),y=!!(r||n)&&!u;k(()=>{if(!o||!y)return;const h=e.getRootNode(),a=h.adoptedStyleSheets??[];a.includes(pe)||(h.adoptedStyleSheets=[...a,pe]);const p=document.createElement("div");p.setAttribute("popover","manual"),p.setAttribute("role","tooltip"),p.classList.add("cosmoz-tooltip-popover"),e.after(p),l.current=p,me(p,r,n);const v=`[name="${o}"]`,w=`--tooltip-anchor-${o}`;let x;const f=E=>{u||(clearTimeout(x),E.style.anchorName=w,p.style.positionAnchor=w,p.style.positionArea=s,x=window.setTimeout(()=>p.showPopover(),i))},R=()=>{clearTimeout(x),p.hidePopover()},O=E=>{const A=E.target.closest?.(v);A&&f(A)},L=E=>{const A=E.target.closest?.(v);if(!A)return;const M=E.relatedTarget;M&&A.contains(M)||R()},C=E=>{const A=E.target.closest?.(v);A&&f(A)},j=E=>{E.target.closest?.(v)&&R()};return h.addEventListener("pointerover",O),h.addEventListener("pointerout",L),h.addEventListener("focusin",C),h.addEventListener("focusout",j),()=>{clearTimeout(x),h.removeEventListener("pointerover",O),h.removeEventListener("pointerout",L),h.removeEventListener("focusin",C),h.removeEventListener("focusout",j),p.hidePopover(),p.remove(),l.current=void 0}},[o,s,i,y]),k(()=>{!o||!l.current||me(l.current,r,n)},[r,n,o]),k(()=>{!u||!l.current||l.current.hidePopover()},[u])},ft=e=>{const[t,o]=Ce(!1);return k(()=>{const r=e.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[e.current]),t},zt=_`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,yt=e=>{const{heading:t,description:o,for:r,placement:n="top",delay:s=300,disabled:i=!1}=e,u=V(),l=V(),m=V(),y=ft(m),a=!!(t||o||y)&&!i,p=z(()=>{a&&(clearTimeout(l.current),l.current=window.setTimeout(()=>{u.current?.showPopover()},s))},[s,a]);k(()=>{i&&(clearTimeout(l.current),u.current?.hidePopover())},[i]);const v=z(()=>{clearTimeout(l.current),u.current?.hidePopover()},[]);return k(()=>{if(r)return;const w=x=>{const f=x.relatedTarget;f&&e.contains(f)||v()};return e.addEventListener("pointerover",p),e.addEventListener("pointerout",w),()=>{e.removeEventListener("pointerover",p),e.removeEventListener("pointerout",w)}},[r,p,v]),mt(e,{for:r,heading:t,description:o,placement:n,delay:s,disabled:i}),r?P:a?b`
		<slot @focusin=${p} @focusout=${v}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${W(u)}
		>
			<cosmoz-tooltip-content>
				${S(t,()=>b`<strong slot="heading">${t}</strong>`)}
				${S(o,()=>b`<p slot="description">${o}</p>`)}
				<slot name="content" ${W(m)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:b`
			<slot></slot>
			<slot name="content" ${W(m)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",F(yt,{styleSheets:[X,pe,zt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const fe=(e,t)=>{e.type="submit",e.hidden=!0,e.disabled=!!(t.disabled||t.formDisabled),e.name=t.name??"",e.value=t.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])t.hasAttribute(o)?e.setAttribute(o,t.getAttribute(o)):e.removeAttribute(o)};class xt extends HTMLElement{static formAssociated=!0;#t=this.attachInternals();#e;get form(){return this.#t.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#e?.remove(),this.#e=void 0;return}this.#e?fe(this.#e,this):(this.#e=document.createElement("button"),fe(this.#e,this),this.append(this.#e))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(t){this.formDisabled=t,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#o),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#o),this.#e?.remove(),this.#e=void 0}#o=t=>{this.#e&&t.composedPath().includes(this.#e)||setTimeout(()=>{if(t.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#e&&o.requestSubmit(this.#e)))},0)}}const wt=_`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(
				--cz-glass-button-action-sheen,
				var(--cz-glass-action-sheen, var(--cz-action-sheen, none))
			),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(
			--cz-shadow-glass-button-action,
			var(--cz-shadow-glass-action, var(--cz-shadow-action))
		);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		flex: none;
	}

	::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='xs']) .button {
		height: var(--cz-control-height-xs);
		padding: 0 10px;
		gap: 4px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='xs']) ::slotted(svg),
	:host([size='sm']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
	}

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		padding: 0;
	}

	/* icon-square keeps the labelled button's corners instead of the circle. */
	:host([icon-only]:not([icon-square])) .button {
		border-radius: var(--cz-radius-full);
	}

	:host([icon-only][size='xs']) .button {
		width: var(--cz-control-height-xs);
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-button-sheen, var(--cz-glass-sheen, none)),
			var(
				--cz-color-bg-glass-button,
				var(--cz-color-bg-glass, var(--cz-color-bg-tertiary))
			);
		color: var(--cz-color-text-primary);
		border-color: var(
			--cz-color-border-glass-button,
			var(--cz-color-border-glass, var(--cz-color-border-primary))
		);
		box-shadow: var(
			--cz-shadow-glass-button,
			var(--cz-shadow-glass, var(--cz-shadow-xs))
		);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='success']) .button {
		--_pressed-bg: var(
			--cz-color-bg-success-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-success-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-success-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-success-500);
		}
	}

	:host([variant='warning']) .button {
		--_pressed-bg: var(
			--cz-color-bg-warning-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-warning-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-warning-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-warning-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button,
	:host([variant='success'][aria-pressed='true']) .button,
	:host([variant='warning'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`,$t=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-keyshortcuts","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],kt=e=>{const{disabled:t=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:s,target:i,rel:u,download:l}=e,m=!!(t||e.formDisabled);k(()=>{e.syncFormButton()}),k(()=>{const a=p=>{(e.disabled||e.formDisabled)&&(p.preventDefault(),p.stopImmediatePropagation())};return e.addEventListener("click",a,{capture:!0}),()=>e.removeEventListener("click",a,{capture:!0})},[e.disabled,e.formDisabled]),Se(()=>{const a=e.shadowRoot?.querySelector(".button");a&&"ariaControlsElements"in a&&(a.ariaControlsElements=e.ariaControlsElements)});const y=b`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,h=S(s!=null,()=>b`
			<a
				role=${c(e.controlRole)}
				tabindex=${c(e.getAttribute("tabindex")??void 0)}
				aria-controls=${c(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${c(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${c(e.getAttribute("aria-description")??void 0)}
				aria-keyshortcuts=${c(e.getAttribute("aria-keyshortcuts")??void 0)}
				aria-busy=${c(e.getAttribute("aria-busy")??void 0)}
				aria-current=${c(e.getAttribute("aria-current")??void 0)}
				href=${s}
				class="button"
				part="button"
				aria-disabled=${m?"true":P}
				aria-expanded=${c(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${c(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				target=${c(i)}
				rel=${c(u)}
				download=${c(l)}
				>${y}</a
			>
		`,()=>b`
			<button
				role=${c(e.controlRole)}
				tabindex=${c(e.getAttribute("tabindex")??void 0)}
				aria-controls=${c(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${c(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${c(e.getAttribute("aria-description")??void 0)}
				aria-keyshortcuts=${c(e.getAttribute("aria-keyshortcuts")??void 0)}
				aria-busy=${c(e.getAttribute("aria-busy")??void 0)}
				aria-current=${c(e.getAttribute("aria-current")??void 0)}
				type=${n}
				class="button"
				part="button"
				?disabled=${m}
				aria-expanded=${c(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${c(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				aria-pressed=${c(e.getAttribute("aria-pressed")??void 0)}
			>
				${y}
			</button>
		`);return b`<cosmoz-tooltip
		heading=${c(o??void 0)}
		placement=${c(r??void 0)}
		?disabled=${m}
	>
		${h}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",F(kt,{baseElement:xt,observedAttributes:$t,styleSheets:[X,wt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Et=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>b`
  <svg
    slot=${c(e)}
    class=${`info-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${c(s)}
  >
    ${S(t,()=>Re`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,At=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>b`
  <svg
    slot=${c(e)}
    class=${`x-close-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${c(s)}
  >
    ${S(t,()=>Re`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,N=e=>`calc(var(--cz-spacing) * ${e})`,Tt=_`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	cosmoz-button.close::part(button),
	.close:not(cosmoz-button) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		/* a little room so the hover reads as a round hit area; the
		   negative margin keeps the tag's size as it was */
		padding: ${N(.5)};
		margin: ${N(-.5)};
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition:
			opacity 0.1s,
			background-color 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;

		width: auto;
		height: auto;
	}
	cosmoz-button.close {
		display: inline-flex;
		flex-shrink: 0;
	}

	cosmoz-button.close::part(button):hover,
	.close:hover:not(cosmoz-button) {
		opacity: 1;
		/* tinted from the tag's own text color, so it suits every tag color */
		background: rgb(from currentColor r g b / 0.12);
	}

	cosmoz-button.close::part(button):focus-visible,
	.close:focus-visible:not(cosmoz-button) {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${N(2.5)};
		height: ${N(2.5)};
	}

	:host([size='xs']) .close svg {
		width: ${N(2)};
		height: ${N(2)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${N(3)};
		height: ${N(3)};
	}

	:host([size='lg']) .close svg {
		width: ${N(3.5)};
		height: ${N(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${N(3.5)};
		height: ${N(3.5)};
		color: var(--cosmoz-tag-color, var(--cz-color-fg-quaternary));
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,Ct=["gray","brand","error","warning","success","processing"],St=e=>{const{color:t,type:o="color",size:r,disabled:n,removable:s,removeLabel:i="Remove"}=e;Se(()=>{const l=!!t&&!Ct.includes(t)&&CSS.supports("color",t);e.style.setProperty("--cosmoz-tag-color",l?t:"")},[t]);const u=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return b`<cosmoz-badge
		color=${c(t)}
		size=${c(r)}
		?disabled=${n}
		type=${o}
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${S(s,()=>b` <cosmoz-button
					variant="tertiary"
					icon-only
					slot="suffix"
					class="close"
					aria-label=${i}
					@mousedown=${l=>l.preventDefault()}
					@click=${u}
				>
					${At()}
				</cosmoz-button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",F(St,{observedAttributes:["color","type","size","disabled","removable","remove-label"],styleSheets:[X,Tt]}));const Rt=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join("");class Lt extends _e{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(t,[o]){this._ref=o;const r=t.element;this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(t){return q}}const ze=J(Lt),Ot=(e,t,o)=>{o==null?e.removeAttribute(t):e.setAttribute(t,o)},Pt=(e,t)=>{for(const[o,r]of Object.entries(e))Ot(t,o,ue(r,t))};class _t extends _e{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const o of t)Pt(this._attrs,o)};#e=()=>this.#t();render(t){return q}update(t,[o]){this._attrs=o;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t(),q}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const Nt=J(_t),ee=150,Bt=ee+100,Dt=e=>{for(const t of e.current??[]){const o=t.matches("[autofocus]")?t:t.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},It=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:s}=e,i=V(),[u,l]=he("opened",!1),m=V(),y=V(),h=Le({disabled:o,openOnHover:n}),a=z(()=>{const g=m.current?.[0];return g instanceof HTMLElement?g:void 0},[]),p=z(()=>{h.disabled||(l(!0),i.current?.showPopover?.())},[]),v=z(()=>{l(!1),i.current?.hidePopover?.()},[]),w=()=>!!i.current?.matches(":popover-open"),x=z(()=>{h.openAtPointerDown=w()},[]),f=z(g=>{const D=g.composedPath();if(D.some(H=>H instanceof HTMLLabelElement&&H.control&&!D.includes(H.control)))return;const I=h.openAtPointerDown;h.openAtPointerDown=void 0;const K=h.openOnHover&&I!==void 0;(I??w())&&!K?v():p()},[]),R=z(()=>{clearTimeout(h.closeTimeout)},[]),O=z(g=>{h.disabled||g.target===a()&&(R(),p())},[]),L=z(()=>{h.disabled||(R(),p())},[]),C=z(()=>{clearTimeout(h.closeTimeout),h.closeTimeout=setTimeout(()=>{const g=i.current;h.openOnHover&&(e.matches(":hover")||g?.matches(":hover"))||(h.openOnHover?e.matches(":has(:focus-visible)"):e.matches(":focus-within")||g?.matches(":focus-within"))||v()},100)},[]),j=()=>{const g=a();g&&(e.removeEventListener("focusin",O),g.focus(),e.addEventListener("focusin",O))},E=g=>g==null||g===document.body||g.offsetParent==null,A=()=>{let g=document.activeElement;for(;g?.shadowRoot;)g=g.shadowRoot.activeElement;return g},M=z(()=>{if(E(A())){j();return}const g=performance.now(),D=()=>{if(!(performance.now()-g>Bt)){if(E(A()))return j();requestAnimationFrame(D)}};requestAnimationFrame(D)},[]),B=z(g=>{const D=g.newState==="open";l(D),D?Dt(y):M(),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return k(()=>{const g=i.current;g&&(u?g.showPopover?.():g.hidePopover?.())},[u]),k(()=>{e.toggleAttribute("opened",!!u)},[u]),k(()=>{if(!(!s||o))return e.addEventListener("focusin",O),e.addEventListener("focusout",C),()=>{e.removeEventListener("focusin",O),e.removeEventListener("focusout",C)}},[s,o]),k(()=>{if(!(!n||o))return e.addEventListener("pointerenter",L),e.addEventListener("pointerleave",C),()=>{e.removeEventListener("pointerenter",L),e.removeEventListener("pointerleave",C)}},[n,o]),{placement:t,disabled:o,passthrough:r,opened:u,triggers:m,content:y,popoverRef:i,handlePointerDown:x,handleClick:f,onToggle:B,close:v,scheduleClose:C,cancelClose:R}},qt=_`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity ${ee}ms ease-out,
			transform ${ee}ms ease-out,
			overlay ${ee}ms ease-out allow-discrete,
			display ${ee}ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Ft=({placement:e,disabled:t,passthrough:o,opened:r,triggers:n,content:s,popoverRef:i,handlePointerDown:u,handleClick:l,onToggle:m,close:y,scheduleClose:h,cancelClose:a})=>b`
		<slot
			name="button"
			${ze(n)}
			${Nt({"aria-expanded":o?null:String(r),disabled:t&&!o?"":null})}
			@pointerdown=${u}
			@click=${l}
		></slot>
		${t&&o?b`<slot></slot>`:b`<div
					popover
					style="position-area: ${e}"
					@toggle=${m}
					@select=${y}
					@focusout=${h}
					@focusin=${a}
					${W(p=>p&&(i.current=p))}
				>
					<slot ${ze(s)}></slot>
				</div>`}
	`,Mt=e=>Ft(It(e));customElements.define("cosmoz-dropdown-next",F(Mt,{styleSheets:[qt],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const jt={[T.PROPERTY]:(e,t)=>e===t,[T.BOOLEAN_ATTRIBUTE]:(e,t)=>!!e===t,[T.ATTRIBUTE]:(e,t)=>t===String(e)};class Ht extends ie{constructor(t){if(super(t),!(t.type===T.PROPERTY||t.type===T.ATTRIBUTE||t.type===T.BOOLEAN_ATTRIBUTE))throw new Error("The `liveEq` directive is not allowed on child or event bindings");if(!Oe(t))throw new Error("`liveEq` bindings can only contain a single expression")}render(t,o){return t}update(t,[o,r=jt[t.type]]){if(o===q||o===P)return o;const{type:n,name:s,element:i}=t;let u;return n===T.PROPERTY?u=i[s]:n===T.ATTRIBUTE?u=i.getAttribute(s):u=i.hasAttribute(s),r(o,u)?q:(Pe(t),o)}}const Ut=J(Ht),Yt=(e,t)=>{const o=s=>s===void 0||s===""||typeof s=="number"&&Number.isNaN(s)||typeof s=="string"&&Number.isNaN(Number(s));if(o(e)&&o(t))return!0;if(o(e)||o(t))return!1;const r=Number(e),n=Number(t);return r===n||Number.isNaN(r)&&Number.isNaN(n)};const ge=J(class extends ie{constructor(e){if(super(e),e.type!==T.PROPERTY&&e.type!==T.ATTRIBUTE&&e.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Oe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===P)return t;const o=e.element,r=e.name;if(e.type===T.PROPERTY){if(t===o[r])return q}else if(e.type===T.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return q}else if(e.type===T.ATTRIBUTE&&o.getAttribute(r)===t+"")return q;return Pe(e),t}}),Be=(e,{label:t,labelFor:o="input",hint:r,invalid:n,errorMessage:s,compact:i,required:u})=>b`
		<!-- label: visually hidden in compact mode -->
		${S(t,()=>b`<label
					for=${c(o)}
					part="label"
					class=${c(i?"sr-only":void 0)}
					>${t}
					${S(u&&!i,()=>b`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${S(i&&n&&s,()=>b`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${Et({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: read with the field while valid; visually hidden in compact -->
		${S(r&&!n,()=>b`<span
					class=${i?"hint sr-only":"hint"}
					part="hint"
					id="hint"
					>${r}</span
				>`)}
		<!-- error: replaces hint when invalid; visually hidden in compact -->
		${S(n&&s,()=>b`<span
					class=${i?"error sr-only":"error"}
					part="error"
					id="error"
					>${s}</span
				>`)}
	`,De=["autocomplete","readonly","disabled","maxlength","invalid"],Ie=Rt`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		--control-height: var(--cz-control-height-md);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-family: var(--cz-font-body);
	}

	:host([size='sm']) {
		--control-height: var(--cz-control-height-sm);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
	}

	:host([size='lg']) {
		--control-height: var(--cz-control-height-lg);
	}

	:host([size='xl']) {
		--control-height: var(--cz-control-height-xl);
	}

	:host(:not([compact])) {
		margin-bottom: calc(var(--cz-spacing) * 3);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		background: var(--cz-color-bg-disabled-subtle);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-disabled);
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		color: var(--cz-color-text-disabled);
		cursor: not-allowed;
	}

	:host([readonly]) .wrap {
		background: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	:host([invalid]) {
		caret-color: var(--cz-color-text-error);
	}

	:host([invalid]) .required,
	.error {
		color: var(--cz-color-text-error);
	}

	/* === Layout === */

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: var(--cz-radius-md);
		background: var(--cz-color-bg-primary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring), var(--cz-shadow-xs);
	}

	:host([invalid]) .wrap {
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-error),
			var(--cz-shadow-xs);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error), var(--cz-shadow-xs);
	}

	.control {
		flex: 1;
		position: relative;
	}

	/* === Input === */

	#input {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
		color: var(--cz-color-text-primary);
		padding-block: calc((var(--control-height) - 1lh) / 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	/* Paint over the browser's autofill background, which can't be overridden. */
	#input:autofill {
		box-shadow: inset 0 0 0 100vmax var(--cz-color-bg-primary);
		-webkit-text-fill-color: var(--cz-color-text-primary);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* Browsers pad date and time fields, and iOS Safari also gives them its own height and alignment. */
	#input:is(
		[type='date'],
		[type='time'],
		[type='datetime-local'],
		[type='month'],
		[type='week']
	) {
		-webkit-appearance: none;
		appearance: none;
	}

	#input::-webkit-date-and-time-value {
		margin: 0;
		min-block-size: 1lh;
		text-align: start;
	}

	#input::-webkit-datetime-edit,
	#input::-webkit-datetime-edit-fields-wrapper,
	#input::-webkit-datetime-edit-year-field,
	#input::-webkit-datetime-edit-month-field,
	#input::-webkit-datetime-edit-week-field,
	#input::-webkit-datetime-edit-day-field,
	#input::-webkit-datetime-edit-hour-field,
	#input::-webkit-datetime-edit-minute-field,
	#input::-webkit-datetime-edit-second-field,
	#input::-webkit-datetime-edit-millisecond-field,
	#input::-webkit-datetime-edit-meridiem-field {
		padding-block: 0;
	}

	/* === Label === */

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
	}

	.error {
		font-size: var(--cz-text-xs);
	}

	/* === Tooltip (fluid error indicator) === */

	cosmoz-tooltip {
		display: flex;
		align-items: center;
		margin-right: calc(var(--cz-spacing) * 2);
	}

	:host([invalid]) cosmoz-tooltip {
		color: var(--cz-color-text-error);
	}

	:host([variant='inline']) cosmoz-tooltip {
		display: none;
	}

	/* === Slots === */

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	/* === Variant: inline === */
	:host([variant='inline']) {
		margin-bottom: 0;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
		background: transparent;
		box-shadow: none;
		padding-inline: 0;
	}

	:host([variant='inline']) .wrap:has(#input:focus) {
		box-shadow: none;
	}

	:host([variant='inline']) .hint,
	:host([variant='inline']) .error {
		display: none;
	}
	:host([variant='inline'][disabled]) label {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}
	:host([variant='inline']) label {
		position: absolute;
		font-weight: var(--cz-font-weight-regular);
		top: 25%;
		left: 0;
		width: 100%;
		pointer-events: none;
		transform-origin: left;
		transition:
			transform 0.25s,
			width 0.25s;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		z-index: 1;
	}

	:host([variant='inline']:focus-within) label,
	:host([variant='inline'][has-value]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([variant='inline']) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(0);
		}
	}

	/* === Variant: cell === */

	:host([variant='cell']) {
		margin-bottom: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host([variant='cell']) .wrap {
		box-sizing: border-box;
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) #input {
		padding-block: calc(var(--cz-spacing) * 2);
	}

	:host([variant='cell']) label {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	:host([variant='cell']) .error {
		position: absolute;
		left: calc(var(--cz-spacing) * 3);
		bottom: 50%;
		transform: translateY(50%);
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		max-width: calc(100% - calc(var(--cz-spacing) * 6));
	}

	:host([variant='cell']:focus-within) .error,
	:host([variant='cell'][has-value]) .error {
		visibility: hidden;
	}

	/* === No spinner === */

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	/* === Autosize === */

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		--_pad: calc(var(--cz-spacing) * 12);
		min-width: calc(2ch + var(--_pad));
		width: calc(var(--chars) + var(--_pad));
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px + var(--_pad));
		min-width: calc(2ch + 0.25em + 15px + var(--_pad));
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: calc(var(--width) + var(--_pad));
		min-width: calc(2ch + 0.25em + var(--_pad));
	}
	slot[name='prefix']::slotted(*) {
		padding-inline-start: calc(var(--cz-spacing) * 2);
	}

	slot[name='suffix']::slotted(*) {
		padding-inline-end: calc(var(--cz-spacing) * 2);
	}
`,Vt=e=>Z(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Zt=ot(class extends rt{values;constructor(e,t,o,r){super(e,t),Object.assign(t.host,o),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Gt=/([A-Z])/gu,ye=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Gt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},qe=e=>{const t=V(void 0),o=z(l=>t.current=l,[]),r=e.shadowRoot,n=z(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),s=z(l=>ye(e,"value",l.target.value),[]),i=z(l=>ye(e,"focused",l.type==="focus"),[]),u=z(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return Zt({validate:u},[u]),k(()=>{const l=m=>{m.composedPath()[0]?.closest?.("input, textarea, label")||(m.preventDefault(),t.current?.focus())};return r.addEventListener("mousedown",l),()=>r.removeEventListener("mousedown",l)},[]),{onChange:n,onFocus:i,onInput:s,onRef:o}},Kt=({placeholder:e})=>e||" ",Qt=(e,t)=>t??(e==="date"?"9999-12-31":void 0),Wt=["type","variant","size","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder","inputmode","enterkeyhint","name",...De,"aria-label"],Jt=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:n="off",name:s,value:i,readonly:u,disabled:l,min:m,max:y,step:h,maxlength:a,required:p,hint:v,invalid:w,errorMessage:x}=e,{onChange:f,onFocus:R,onInput:O,onRef:L}=qe(e),C=Vt(r),j=v&&!w,E=w&&x,A=E&&"error"||j&&"hint"||void 0;return e.toggleAttribute("has-value",!!i),Be(b`
			<input
				${W(L)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				name=${c(s)}
				type=${t}
				pattern=${c(o)}
				autocomplete=${n}
				inputmode=${c(e.inputmode)}
				enterkeyhint=${c(e.enterkeyhint)}
				placeholder=${Kt({placeholder:e.placeholder})}
				?readonly=${u}
				aria-disabled=${l?"true":"false"}
				aria-label=${c(e.getAttribute("aria-label"))}
				?disabled=${l}
				?required=${p}
				aria-invalid=${c(w?"true":void 0)}
				aria-describedby=${c(A)}
				.value=${t==="number"?Ut(i??"",Yt):ge(i??"")}
				maxlength=${c(a)}
				@beforeinput=${C}
				@input=${O}
				@change=${f}
				@focus=${R}
				@blur=${R}
				min=${c(m)}
				max=${c(Qt(t,y))}
				step=${c(h)}
			/>
		`,e)};customElements.define("cosmoz-input",F(Jt,{observedAttributes:Wt,styleSheets:[se(Ie)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const xe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},we=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.style.maxHeight="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Xt=e=>{const{value:t,maxRows:o}=e,r=Z(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>we(r(),o),[o,r]),k(()=>xe(r()),[r,t]),k(()=>{const n=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>{we(n,e.maxRows),xe(n)}));return s.observe(n),()=>s.unobserve(n)},[r])},eo=["rows","placeholder","label","hint","compact","required","inputmode","enterkeyhint",...De],to=e=>{const{autocomplete:t,inputmode:o,enterkeyhint:r,value:n,placeholder:s,readonly:i,disabled:u,required:l,hint:m,invalid:y,errorMessage:h,rows:a,cols:p,maxlength:v}=e,{onChange:w,onFocus:x,onInput:f,onRef:R}=qe(e);Xt(e);const O=m&&!y,L=y&&h,C=L&&"error"||O&&"hint"||void 0;return Be(b`
			<textarea id="input" part="input"
				${W(R)}
				autocomplete=${c(t)}
				inputmode=${c(o)}
				enterkeyhint=${c(r)}
				placeholder=${s||" "}
				rows=${a??1} cols=${c(p)}
				?readonly=${i} aria-disabled=${u?"true":"false"}
				?disabled=${u} ?required=${l}
				aria-invalid=${c(y?"true":void 0)}
				aria-describedby=${c(C)}
				.value=${ge(n??"")} maxlength=${c(v)} @input=${f}
				@change=${w} @focus=${x} @blur=${x}>`,e)};customElements.define("cosmoz-textarea",F(to,{observedAttributes:eo,styleSheets:[se(Ie)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oo=e=>{const{label:t,value:o,disabled:r,error:n}=e,s=z(i=>e.dispatchEvent(new CustomEvent("change",{detail:i.target.checked})),[]);return b`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			role="switch"
			aria-label=${t?P:e.getAttribute("aria-label")??P}
			aria-invalid=${n?"true":P}
			aria-describedby=${n?"failure":P}
			.checked=${ge(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${S(t,()=>b`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${S(n,i=>b`<div class="failure" id="failure">${i}</div>`)} `},ro=_`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:focus-visible {
		box-shadow: var(--cz-focus-ring);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,no=_`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: calc(var(--cz-spacing) * 1);
	}
`;customElements.define("cosmoz-toggle",F(oo,{styleSheets:[no,ro],observedAttributes:["label","disabled","error","aria-label"]}));const so={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},io=e=>{const t=a=>a.label!=null?ue(a.label,a.value):typeof a.value=="string"?a.value:"",o=(e.options??[]).map(a=>typeof a=="object"&&a!=null&&"value"in a?a:{value:a}),[r,n]=he("value"),s=a=>ne(e.valueProperty)(a),i=s(r),u=a=>n(a.value),l=o.map(a=>!a.disabled&&!e.disabled),m=o.findIndex(a=>s(a.value)===i),y=m!==-1?m:l.indexOf(!0),h=a=>{const p=so[a.key];if(p==null)return;a.preventDefault();const v=o.length;let w=m;w===-1&&(w=p>0?-1:v);for(let x=1;x<=v;x++){const f=((w+p*x)%v+v)%v;if(!l[f])continue;n(o[f].value),a.currentTarget.children[f]?.focus();return}};return b`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label||P}
		@keydown=${h}
	>
		${o.map((a,p)=>{const v=p===m,w=t(a),x=a.title!=null?ue(a.title,a.value):void 0;return b`<button
				type="button"
				role="radio"
				aria-checked=${v?"true":"false"}
				?disabled=${a.disabled||e.disabled}
				title=${x??P}
				aria-label=${!w&&x?x:P}
				part=${v?"option selected-option":"option"}
				class=${v?"option selected":"option"}
				data-tone=${c(a.tone)}
				@click=${()=>u(a)}
				tabindex=${p===y?"0":"-1"}
			>
				${a.icon?.({width:"16",height:"16"})}${w}
			</button>`})}
	</div>`},ao=_`
	:host {
		display: inline-flex;
	}

	:host([stretch]) {
		display: flex;
	}

	:host([stretch]) .group {
		flex: 1;
	}

	:host([stretch]) .option {
		flex: 1 1 auto;
		justify-content: center;
		white-space: normal;
	}
`,co=_`
	.group {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}

	.option {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-sm);
		border: 0;
		background: none;
		color: var(--cz-color-text-tertiary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-primary);
	}

	.option.selected {
		color: var(--cz-color-text-primary);
		background-color: var(--cz-color-bg-primary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-sm);
	}

	.option.selected[data-tone='warning'] {
		color: var(--cz-color-text-warning);
		background-color: var(--cz-color-bg-warning);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-warning-subtle),
			var(--cz-shadow-sm);
	}

	.option:focus-visible {
		box-shadow: var(--cz-focus-ring);
		color: var(--cz-color-text-secondary);
	}

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* cosmoz-tabs-next segmented sm's box: 32px, the height of an sm button */
	:host([size='sm']) .group {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) .option {
		padding-block: var(--cz-spacing);
	}
	@media (pointer: coarse) {
		.option {
			min-height: 44px;
		}
	}
`;customElements.define("cosmoz-toggle-group",F(io,{styleSheets:[X,ao,co],observedAttributes:["label","disabled","value-property","stretch"]}));const lo=({content:e,onClear:t,disabled:o,className:r="chip",hidden:n,slot:s,size:i})=>b`<cosmoz-tag
		class=${c(r)}
		slot=${c(s)}
		size=${c(i)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${c(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,$e={sm:"xs",md:"sm",lg:"md",xl:"lg"},xo=e=>$e[e]??$e.md,wo=({value:e,min:t=0,onDeselect:o,textual:r,disabled:n,chipRenderer:s=lo,overflowBadge:i,size:u})=>[...e.filter(Boolean).map(l=>s({item:l,content:r(l),onClear:e.length>t&&(()=>o(l)),disabled:n,slot:"control",size:u})),i??s({item:null,content:b`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0,size:u})],uo=_`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",F(()=>P,{styleSheets:[uo]}));const be=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),o),o)},ke=e=>e.type||e.toString(),Ee=e=>Array.isArray(e)?e:[e],po=(e,t)=>{const o=Ee(t),r=(o.every(Array.isArray)?o:[o]).map(([n,s])=>({actions:Ee(n).map(ke),handle:s}));return(n=e,s)=>{const i=r.find(u=>u.actions.includes(ke(s)));return i?i.handle(n,s):n}},G={pending:"pending",rejected:"rejected",resolved:"resolved"},Fe={error:void 0,result:void 0,state:G.pending},Me=be(G.pending),je=be(G.resolved,e=>({result:e})),He=be(G.rejected,e=>({error:e})),ho=po(Fe,[[Me,()=>({error:void 0,result:void 0,state:G.pending})],[je,(e,{result:t})=>({error:void 0,result:t,state:G.resolved})],[He,(e,{error:t})=>({error:t,result:void 0,state:G.rejected})]]),go=e=>{const[{error:t,result:o,state:r},n]=nt(ho,Fe);return k(()=>{if(!e)return;let s=!1;return n(Me()),e.then(i=>!s&&n(je(i)),i=>!s&&n(He(i))),()=>{s=!0}},[e]),[o,t,r]},Ae=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),bo=(e,t,o)=>{if(!t)return e;const r=Ae(t.toLowerCase()),n=[];for(const s of e){const u=Ae(o(s).toLowerCase()).indexOf(r);u<0||n.push({item:s,index:u})}return n.sort((s,i)=>s.index-i.index).map(({item:s})=>s)},vo=e=>e===!1||e==null?[]:e,mo=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Te=[],$o=e=>(...t)=>{let o;const r=()=>{o&&cancelAnimationFrame(o)};return r(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),r},fo=(e,t,o)=>z(r=>{t?.(r),e.dispatchEvent(new CustomEvent(o,{detail:r}))},[t]),ko=({value:e,text:t,mode:o,onChange:r,onText:n,onSelect:s,limit:i,min:u,source:l,textProperty:m,textual:y,valueProperty:h,keepOpened:a,keepQuery:p,preserveOrder:v,defaultIndex:w,externalSearch:x,disabled:f,lazyOpen:R,searchInPopup:O})=>{const L=i!=null?Number(i):void 0,C=u!=null?Number(u):void 0,j=o==="select",E=!!O,A=Z(()=>(y??it)(m),[y,m]),M=at(),[B,g]=he("opened",!1),D=!t,I=Z(()=>t?.trim(),[t]),K=fo(M,n,"text"),H=z($=>{r?.($,()=>g(!1));const Q=j?$[0]:$;mo(M,"value",Q)},[r]),[ae,Ue]=Ce([]),te=!!(R&&!I),oe=Z(()=>te?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:I,active:B}):l).then(vo),[l,B,I,te]),U=Z(()=>le(e),[e]);k(()=>oe.then(Ue),[oe]),ct({activity:st,callback:()=>{const $=le(U);$.length>(C??0)&&H($.slice(0,-1))},check:()=>!f&&!E&&D&&M.matches(":focus-within"),element:()=>M},[]),k(()=>{!B&&!p&&K("")},[B,p]),k(()=>{M.toggleAttribute("opened",!!B)},[B]);const Y=Le({onText:K,onChange:H,value:U,limit:L,min:C,keepQuery:p,keepOpened:a,setOpened:g,onSelect:s,valueProperty:h}),[,,Ye]=go(oe);return{limit:L,opened:B,setOpened:g,query:I,textual:A,value:U,source$:oe,loading:Ye==="pending",items:Z(()=>{if(!B||te)return Te;const $=v?ae:[...U,...de(U,ne(h))(ae)];return x?$:bo($,I,A)},[ae,B,I,A,D,U,v,h,x,te]),onToggle:z($=>{f||g($.newState==="open")},[f]),onText:z($=>{if(f)return;const Q=$.target.value;!E&&Q&&L===1&&U.length>0&&H([]),K(Q),g(!0)},[f,K,g,L,U,H,E]),onSelect:z($=>{if(f)return;Y.onSelect?.($,Y);const{onChange:Q,onText:Ve,limit:Ze,min:Ge,value:Ke,keepQuery:Qe,keepOpened:We,setOpened:Je,valueProperty:Xe}=Y;Qe||Ve(""),We||Je(!1);const re=le(Ke),ce=ne(Xe),ve=re.some(et=>ce(et)===ce($));ve&&re.length===Ge||Q((ve?de($,ce)(re):[...re,$]).slice(-Ze))},[f,Y]),onDeselect:z($=>{f||Y.onChange(de($,ne(Y.valueProperty))(Y.value))},[f,Y]),defaultIndex:I!==void 0&&I?.length>0?0:w}};export{dt as a,xo as c,ge as l,c as o,$o as r,wo as s,Rt as t,ko as u};
