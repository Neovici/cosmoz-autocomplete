import{A as X,s as se,c as R,d as S,b as g,f as $,D as at,g as ve,a as x,h as De,w as me,E as O,i as ue,u as ae,j as qe,r as it,p as lt,e as j,k as ct,H as dt,n as ht,l as pt,m as ut,t as de}from"./iframe-BNWeem1_.js";import{u as N,n as E,a as Z,e as Q,f as ie,i as Be,t as K,b as W,p as ne,s as G,c as gt,d as vt,g as he,h as mt,w as pe,l as bt}from"./index-B8QdPtUl.js";const c=e=>e??X,J=se(R`
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
`),h=e=>`calc(var(--cz-spacing) * ${e})`,ft=R`
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
		gap: ${h(1.5)};
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
		padding: ${h(.5)} ${h(2)};
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
		padding: ${h(.5)} ${h(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${h(.5)} ${h(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${h(1)};
	}

	:host([size='lg']) .badge {
		padding: ${h(1)} ${h(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${h(.5)} ${h(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${h(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${h(1)} ${h(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${h(2)};
		height: ${h(2)};
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
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${h(.5)} ${h(2.5)} ${h(.5)} ${h(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${h(.5)} ${h(2)} ${h(.5)} ${h(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${h(1)} ${h(3)} ${h(1)} ${h(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${h(.5)} ${h(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${h(.5)} ${h(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${h(1)} ${h(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${h(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${h(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${h(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${h(4)};
		height: ${h(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${h(3)};
		height: ${h(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${h(5)};
		height: ${h(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${h(3)};
		height: ${h(3)};
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
		min-height: ${h(5)};
		padding: 0 ${h(1)};
		font-size: var(--cz-text-2xs, var(--cz-text-xs));
		line-height: var(--cz-text-2xs-line-height, var(--cz-text-xs-line-height));
		font-weight: var(--cz-font-weight-regular);
		gap: ${h(1)};
	}

	:host([type='icon'][size='xs']) .badge {
		padding: ${h(.5)};
	}

	:host([type='icon'][size='xs']) ::slotted(svg) {
		width: ${h(3)};
		height: ${h(3)};
	}
`,zt=()=>g`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",S(zt,{styleSheets:[J,ft]}));const wt=R`
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
`;customElements.define("cosmoz-tooltip-content",S(()=>g`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[J,wt]}));const ge=se(R`
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
`),xe=(e,t,o)=>at(g`<cosmoz-tooltip-content>
			${E(t,()=>g`<strong slot="heading">${t}</strong>`)}
			${E(o,()=>g`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),xt=(e,t)=>{const{for:o,heading:r,description:n,placement:s="top",delay:l=300,disabled:d=!1}=t,a=N(),u=!!(r||n)&&!d;$(()=>{if(!o||!u)return;const v=e.getRootNode(),b=v.adoptedStyleSheets??[];b.includes(ge)||(v.adoptedStyleSheets=[...b,ge]);const m=document.createElement("div");m.setAttribute("popover","manual"),m.setAttribute("role","tooltip"),m.classList.add("cosmoz-tooltip-popover"),e.after(m),a.current=m,xe(m,r,n);const z=`[name="${o}"]`,C=`--tooltip-anchor-${o}`;let y;const w=p=>{d||(clearTimeout(y),p.style.anchorName=C,m.style.positionAnchor=C,m.style.positionArea=s,y=window.setTimeout(()=>m.showPopover(),l))},_=()=>{clearTimeout(y),m.hidePopover()},k=p=>{const f=p.target.closest?.(z);f&&w(f)},T=p=>{const f=p.target.closest?.(z);if(!f)return;const L=p.relatedTarget;L&&f.contains(L)||_()},q=p=>{const f=p.target.closest?.(z);f&&w(f)},P=p=>{p.target.closest?.(z)&&_()};return v.addEventListener("pointerover",k),v.addEventListener("pointerout",T),v.addEventListener("focusin",q),v.addEventListener("focusout",P),()=>{clearTimeout(y),v.removeEventListener("pointerover",k),v.removeEventListener("pointerout",T),v.removeEventListener("focusin",q),v.removeEventListener("focusout",P),m.hidePopover(),m.remove(),a.current=void 0}},[o,s,l,u]),$(()=>{!o||!a.current||xe(a.current,r,n)},[r,n,o]),$(()=>{!d||!a.current||a.current.hidePopover()},[d])},yt=e=>{const[t,o]=ve(!1);return $(()=>{const r=e.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[e.current]),t},$t=R`
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
`,kt=e=>{const{heading:t,description:o,for:r,placement:n="top",delay:s=300,disabled:l=!1}=e,d=N(),a=N(),i=N(),u=yt(i),b=!!(t||o||u)&&!l,m=x(()=>{b&&(clearTimeout(a.current),a.current=window.setTimeout(()=>{d.current?.showPopover()},s))},[s,b]);$(()=>{l&&(clearTimeout(a.current),d.current?.hidePopover())},[l]);const z=x(()=>{clearTimeout(a.current),d.current?.hidePopover()},[]);return $(()=>{if(r)return;const C=y=>{const w=y.relatedTarget;w&&e.contains(w)||z()};return e.addEventListener("pointerover",m),e.addEventListener("pointerout",C),()=>{e.removeEventListener("pointerover",m),e.removeEventListener("pointerout",C)}},[r,m,z]),xt(e,{for:r,heading:t,description:o,placement:n,delay:s,disabled:l}),r?X:b?g`
		<slot @focusin=${m} @focusout=${z}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${Z(d)}
		>
			<cosmoz-tooltip-content>
				${E(t,()=>g`<strong slot="heading">${t}</strong>`)}
				${E(o,()=>g`<p slot="description">${o}</p>`)}
				<slot name="content" ${Z(i)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:g`
			<slot></slot>
			<slot name="content" ${Z(i)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",S(kt,{styleSheets:[J,ge,$t],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ye=(e,t)=>{e.type="submit",e.hidden=!0,e.disabled=!!(t.disabled||t.formDisabled),e.name=t.name??"",e.value=t.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])t.hasAttribute(o)?e.setAttribute(o,t.getAttribute(o)):e.removeAttribute(o)};class Et extends HTMLElement{static formAssociated=!0;#t=this.attachInternals();#e;get form(){return this.#t.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#e?.remove(),this.#e=void 0;return}this.#e?ye(this.#e,this):(this.#e=document.createElement("button"),ye(this.#e,this),this.append(this.#e))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(t){this.formDisabled=t,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#o),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#o),this.#e?.remove(),this.#e=void 0}#o=t=>{this.#e&&t.composedPath().includes(this.#e)||setTimeout(()=>{if(t.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#e&&o.requestSubmit(this.#e)))},0)}}const At=R`
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
		width: 20px;
		height: 20px;
		flex: none;
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
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
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		border-radius: var(--cz-radius-full);
		width: var(--cz-control-height-md);
		padding: 0;
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

	/* Preserve the supplied geometry of standalone icons. */
	:host([icon-only]) ::slotted(svg[width]) {
		width: auto;
	}

	:host([icon-only]) ::slotted(svg[height]) {
		height: auto;
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
	:host([variant='destructive'][aria-pressed='true']) .button {
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
`,Ct=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],Tt=e=>{const{disabled:t=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:s,target:l,rel:d,download:a}=e,i=!!(t||e.formDisabled);$(()=>{e.syncFormButton()}),$(()=>{const b=m=>{(e.disabled||e.formDisabled)&&(m.preventDefault(),m.stopImmediatePropagation())};return e.addEventListener("click",b,{capture:!0}),()=>e.removeEventListener("click",b,{capture:!0})},[e.disabled,e.formDisabled]),De(()=>{const b=e.shadowRoot?.querySelector(".button");b&&"ariaControlsElements"in b&&(b.ariaControlsElements=e.ariaControlsElements)});const u=g`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,v=E(s!=null,()=>g`
			<a
				role=${c(e.controlRole)}
				tabindex=${c(e.getAttribute("tabindex")??void 0)}
				aria-controls=${c(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${c(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${c(e.getAttribute("aria-description")??void 0)}
				aria-busy=${c(e.getAttribute("aria-busy")??void 0)}
				aria-current=${c(e.getAttribute("aria-current")??void 0)}
				href=${s}
				class="button"
				part="button"
				aria-disabled=${i?"true":X}
				aria-expanded=${c(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${c(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				target=${c(l)}
				rel=${c(d)}
				download=${c(a)}
				>${u}</a
			>
		`,()=>g`
			<button
				role=${c(e.controlRole)}
				tabindex=${c(e.getAttribute("tabindex")??void 0)}
				aria-controls=${c(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${c(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${c(e.getAttribute("aria-description")??void 0)}
				aria-busy=${c(e.getAttribute("aria-busy")??void 0)}
				aria-current=${c(e.getAttribute("aria-current")??void 0)}
				type=${n}
				class="button"
				part="button"
				?disabled=${i}
				aria-expanded=${c(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${c(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				aria-pressed=${c(e.getAttribute("aria-pressed")??void 0)}
			>
				${u}
			</button>
		`);return g`<cosmoz-tooltip
		heading=${c(o??void 0)}
		placement=${c(r??void 0)}
		?disabled=${i}
	>
		${v}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",S(Tt,{baseElement:Et,observedAttributes:Ct,styleSheets:[J,At],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const St=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>g`
  <svg
    slot=${c(e)}
    class=${`chevron-down-icon ${o??""}`}
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
    ${E(t,()=>me`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,_t=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>g`
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
    ${E(t,()=>me`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,Rt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>g`
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
    ${E(t,()=>me`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,M=e=>`calc(var(--cz-spacing) * ${e})`,Lt=R`
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
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
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
	}

	cosmoz-button.close::part(button):focus-visible,
	.close:focus-visible:not(cosmoz-button) {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${M(2.5)};
		height: ${M(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${M(3)};
		height: ${M(3)};
	}

	:host([size='lg']) .close svg {
		width: ${M(3.5)};
		height: ${M(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${M(3.5)};
		height: ${M(3.5)};
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
`,Ot=e=>{const{color:t,size:o,disabled:r,removable:n}=e,s=()=>{r||e.dispatchEvent(new CustomEvent("remove"))};return g`<cosmoz-badge
		color=${c(t)}
		size=${c(o)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${E(n,()=>g` <cosmoz-button
					variant="tertiary"
					icon-only
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${l=>l.preventDefault()}
					@click=${s}
				>
					${Rt()}
				</cosmoz-button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",S(Ot,{observedAttributes:["color","size","disabled","removable"],styleSheets:[J,Lt]}));class Pt extends ie{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(t,[o]){this._ref=o;const r=t.element;this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(t){return O}}const $e=Q(Pt),Dt=(e,t,o)=>{o==null?e.removeAttribute(t):e.setAttribute(t,o)},qt=(e,t)=>{for(const[o,r]of Object.entries(e))Dt(t,o,ue(r,t))};class Bt extends ie{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const o of t)qt(this._attrs,o)};#e=()=>this.#t();render(t){return O}update(t,[o]){this._attrs=o;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t(),O}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const It=Q(Bt),Ft=e=>{for(const t of e.current??[]){const o=t.matches("[autofocus]")?t:t.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Mt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:s}=e,l=N(),[d,a]=ae("opened",!1),i=N(),u=N(),v=qe({disabled:o,openOnHover:n}),b=x(()=>{const p=i.current?.[0];return p instanceof HTMLElement?p:void 0},[]),m=x(()=>{v.disabled||(a(!0),l.current?.showPopover?.())},[]),z=x(()=>{a(!1),l.current?.hidePopover?.()},[]),C=x(()=>{l.current?.matches(":popover-open")?z():m()},[]),y=x(()=>{clearTimeout(v.closeTimeout)},[]),w=x(p=>{v.disabled||p.target===b()&&(y(),m())},[]),_=x(()=>{v.disabled||(y(),m())},[]),k=x(()=>{clearTimeout(v.closeTimeout),v.closeTimeout=setTimeout(()=>{const p=l.current;v.openOnHover&&(e.matches(":hover")||p?.matches(":hover"))||e.matches(":focus-within")||p?.matches(":focus-within")||z()},100)},[]),T=x(()=>{let p=document.activeElement;for(;p?.shadowRoot;)p=p.shadowRoot.activeElement;if(!(p==null||p===document.body||p.offsetParent==null))return;const L=b();L&&(e.removeEventListener("focusin",w),L.focus(),e.addEventListener("focusin",w))},[]),q=x(p=>{const f=p.newState==="open";a(f),f?Ft(u):T(),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return $(()=>{const p=l.current;p&&(d?p.showPopover?.():p.hidePopover?.())},[d]),$(()=>{e.toggleAttribute("opened",!!d)},[d]),$(()=>{if(!(!s||o))return e.addEventListener("focusin",w),e.addEventListener("focusout",k),()=>{e.removeEventListener("focusin",w),e.removeEventListener("focusout",k)}},[s,o]),$(()=>{if(!(!n||o))return e.addEventListener("pointerenter",_),e.addEventListener("pointerleave",k),()=>{e.removeEventListener("pointerenter",_),e.removeEventListener("pointerleave",k)}},[n,o]),{placement:t,disabled:o,passthrough:r,opened:d,triggers:i,content:u,popoverRef:l,handleClick:s?m:C,onToggle:q,close:z,scheduleClose:k,cancelClose:y}},Nt=R`
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
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
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
`,Yt=({placement:e,disabled:t,passthrough:o,opened:r,triggers:n,content:s,popoverRef:l,handleClick:d,onToggle:a,close:i,scheduleClose:u,cancelClose:v})=>g`
		<slot
			name="button"
			${$e(n)}
			${It({"aria-expanded":o?null:String(r),disabled:t&&!o?"":null})}
			@click=${d}
		></slot>
		${t&&o?g`<slot></slot>`:g`<div
					popover
					style="position-area: ${e}"
					@toggle=${a}
					@select=${i}
					@focusout=${u}
					@focusin=${v}
					${Z(b=>b&&(l.current=b))}
				>
					<slot ${$e(s)}></slot>
				</div>`}
	`,jt=e=>Yt(Mt(e));customElements.define("cosmoz-dropdown-next",S(jt,{styleSheets:[Nt],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const le=Q(class extends Be{constructor(e){if(super(e),e.type!==K.PROPERTY&&e.type!==K.ATTRIBUTE&&e.type!==K.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!it(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===O||t===X)return t;const o=e.element,r=e.name;if(e.type===K.PROPERTY){if(t===o[r])return O}else if(e.type===K.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return O}else if(e.type===K.ATTRIBUTE&&o.getAttribute(r)===t+"")return O;return lt(e),t}}),be=(e,{hint:t,label:o,invalid:r,errorMessage:n,compact:s,required:l,labelFor:d="input"})=>g`
		<!-- label: visually hidden in compact mode -->
		${E(o,()=>g`<label for=${c(d)} part="label"
					class=${c(s?"sr-only":void 0)}
					>${o}
					${E(l&&!s,()=>g`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${E(s&&r&&n,()=>g`<cosmoz-tooltip
						placement="top"
						description=${n}
						delay="300"
					>
						${_t({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${E(!s&&t&&!r,()=>g`<span class="hint" part="hint" id="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${E(!s&&r&&n,()=>g`<span class="error" part="error" id="error">${n}</span>`)}
	`,Ie=["autocomplete","readonly","disabled","maxlength","invalid"],fe=W`
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
`,Ht=e=>j(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ut=ct(class extends dt{values;constructor(e,t,o,r){super(e,t),Object.assign(t.host,o),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Vt=/([A-Z])/gu,ke=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Vt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Fe=e=>{const t=N(void 0),o=x(a=>t.current=a,[]),r=e.shadowRoot,n=x(a=>e.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),s=x(a=>ke(e,"value",a.target.value),[]),l=x(a=>ke(e,"focused",a.type==="focus"),[]),d=x(()=>{const a=t.current?.checkValidity();return e.toggleAttribute("invalid",!a),a},[]);return Ut({validate:d},[d]),$(()=>{const a=i=>{i.composedPath()[0]?.closest?.("input, textarea, label")||(i.preventDefault(),t.current?.focus())};return r.addEventListener("mousedown",a),()=>r.removeEventListener("mousedown",a)},[]),{onChange:n,onFocus:l,onInput:s,onRef:o}},Kt=({placeholder:e})=>e||" ",Zt=(e,t)=>t??(e==="date"?"9999-12-31":void 0),Gt=["type","variant","size","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ie],Xt=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:n,value:s,readonly:l,disabled:d,min:a,max:i,step:u,maxlength:v,required:b,hint:m,compact:z,invalid:C,errorMessage:y}=e,{onChange:w,onFocus:_,onInput:k,onRef:T}=Fe(e),q=Ht(r),P=!z&&m&&!C,p=!z&&C&&y,f=p&&"error"||P&&"hint"||void 0;return e.toggleAttribute("has-value",!!s),be(g`
			<input
				${Z(T)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${c(o)}
				autocomplete=${c(n)}
				placeholder=${Kt({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${d?"true":"false"}
				aria-label=${c(e.getAttribute("aria-label"))}
				?disabled=${d}
				?required=${b}
				aria-invalid=${c(p?"true":void 0)}
				aria-describedby=${c(f)}
				.value=${le(s??"")}
				maxlength=${c(v)}
				@beforeinput=${q}
				@input=${k}
				@change=${w}
				@focus=${_}
				@blur=${_}
				min=${c(a)}
				max=${c(Zt(t,i))}
				step=${c(u)}
			/>
		`,e)};customElements.define("cosmoz-input",S(Xt,{observedAttributes:Gt,styleSheets:[se(fe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ee=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Qt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Jt=e=>{const{value:t,maxRows:o}=e,r=j(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Qt(r(),o),[o,r]),$(()=>Ee(r()),[r,t]),$(()=>{const n=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>Ee(n)));return s.observe(n),()=>s.unobserve(n)},[r])},Wt=["rows","placeholder","label","hint","compact","required",...Ie],eo=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:n,disabled:s,required:l,hint:d,compact:a,invalid:i,errorMessage:u,rows:v,cols:b,maxlength:m}=e,{onChange:z,onFocus:C,onInput:y,onRef:w}=Fe(e);Jt(e);const _=!a&&d&&!i,k=!a&&i&&u,T=k&&"error"||_&&"hint"||void 0;return be(g`
			<textarea id="input" part="input"
				${Z(w)}
				autocomplete=${c(t)}
				placeholder=${r||" "}
				rows=${v??1} cols=${c(b)}
				?readonly=${n} aria-disabled=${s?"true":"false"}
				?disabled=${s} ?required=${l}
				aria-invalid=${c(k?"true":void 0)}
				aria-describedby=${c(T)}
				.value=${le(o??"")} maxlength=${c(m)} @input=${y}
				@change=${z} @focus=${C} @blur=${C}>`,e)};customElements.define("cosmoz-textarea",S(eo,{observedAttributes:Wt,styleSheets:[se(fe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const to=e=>{const{label:t,value:o,disabled:r,error:n}=e,s=x(l=>e.dispatchEvent(new CustomEvent("change",{detail:l.target.checked})),[]);return g`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${le(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${E(t,()=>g`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${E(n,l=>g`<div class="failure">${l}</div>`)} `},oo=R`
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
`,ro=R`
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
`;customElements.define("cosmoz-toggle",S(to,{styleSheets:[ro,oo],observedAttributes:["label","disabled","error"]}));const no=e=>{const t=i=>i.label!=null?ue(i.label,i.value):typeof i.value=="string"?i.value:"",o=(e.options??[]).map(i=>typeof i=="object"&&i!=null&&"value"in i?i:{value:i}),[r,n]=ae("value"),s=i=>ne(e.valueProperty)(i),l=s(r),d=i=>n(i.value),a=i=>{if(i.key!=="ArrowRight"&&i.key!=="ArrowLeft")return;i.preventDefault();const u=o.map(y=>s(y.value)),v=u.findIndex(y=>y===l);if(v===-1)return;const b=i.key==="ArrowRight"?1:-1,m=o[(v+b+u.length)%u.length];n(m.value),i.currentTarget.children[(v+b+u.length)%u.length]?.focus()};return g`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??""}
		@keydown=${a}
	>
		${o.map(i=>{const u=l===s(i.value),v=t(i);return g`<button
				type="button"
				role="radio"
				aria-checked=${u?"true":"false"}
				?disabled=${i.disabled||e.disabled}
				title=${i.title!=null?ue(i.title,i.value):X}
				part=${u?"option selected-option":"option"}
				class=${u?"option selected":"option"}
				@click=${()=>d(i)}
				tabindex=${u?"0":"-1"}
			>
				${i.icon?.({width:"16",height:"16"})}${v}
			</button>`})}
	</div>`},so=R`
	:host {
		display: inline-flex;
	}
`,ao=R`
	.group {
		display: flex;
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
		color: var(--cz-color-text-quaternary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-secondary);
	}

	.option.selected {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
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
`;customElements.define("cosmoz-toggle-group",S(no,{styleSheets:[J,so,ao],observedAttributes:["label","disabled","value-property"]}));const io={},Ae=Q(class extends Be{constructor(){super(...arguments),this.ot=io}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((r,n)=>r===this.ot[n]))return O}else if(this.ot===t)return O;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class lo{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class co{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Ce=e=>!ht(e)&&typeof e.then=="function",Te=1073741823;class ho extends ie{constructor(){super(...arguments),this._$Cwt=Te,this._$Cbt=[],this._$CK=new lo(this),this._$CX=new co}render(...t){return t.find(o=>!Ce(o))??O}update(t,o){const r=this._$Cbt;let n=r.length;this._$Cbt=o;const s=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<o.length&&!(d>this._$Cwt);d++){const a=o[d];if(!Ce(a))return this._$Cwt=d,a;d<n&&a===r[d]||(this._$Cwt=Te,n=0,Promise.resolve(a).then(async i=>{for(;l.get();)await l.get();const u=s.deref();if(u!==void 0){const v=u._$Cbt.indexOf(a);v>-1&&v<u._$Cwt&&(u._$Cwt=v,u.setValue(i))}}))}return O}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Se=Q(ho),po=G(R`
	slot.cz-overflow-band {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		overflow: clip;
	}

	::slotted([overflowing]) {
		visibility: hidden;
	}
`),_e=e=>e.assignedElements({flatten:!0}),uo=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(o=>e.has(o));class go extends ie{_slot;_onOverflow;#t=new Map;#e;#o;#a=t=>{t.forEach(o=>{const r=o.target;this.#t.set(r,o.boundingClientRect.height>0&&o.intersectionRect.height===0)}),this.#n()};#i=t=>{this.#o?.unobserve(t),this.#o?.observe(t)};#n=()=>{if(!this._slot)return;const t=_e(this._slot);t.forEach(r=>{const n=this.#t.get(r)===!0;n!==r.hasAttribute("overflowing")&&(n?r.setAttribute("overflowing",""):r.removeAttribute("overflowing"))}),this.#t.forEach((r,n)=>{t.includes(n)||(this.#t.delete(n),this.#o?.unobserve(n),n.hasAttribute("overflowing")&&n.removeAttribute("overflowing"))});const o=new Set(t.filter(r=>this.#t.get(r)===!0));uo(this.#e,o)||(this.#e=o,this._onOverflow?.(o))};#r=()=>this.#s();#s=()=>{if(!(!this.#o||!this._slot)){for(const t of _e(this._slot))this.#i(t);this.#n()}};render(t){return O}update(t,[o]){this._onOverflow=o.onOverflow;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#r),this.#o?.disconnect(),this.#o=void 0,this._slot=r,r.addEventListener("slotchange",this.#r)),this.#o??=new IntersectionObserver(this.#a,{root:this._slot,threshold:[0,1]}),this.#s(),O}disconnected(){this._slot?.removeEventListener("slotchange",this.#r),this._slot=void 0,this.#o?.disconnect(),this.#o=void 0,this.#t.clear(),this.#e=void 0}}const vo=Q(go),mo=({content:e,onClear:t,disabled:o,className:r="chip",hidden:n,slot:s,size:l})=>g`<cosmoz-tag
		class=${c(r)}
		slot=${c(s)}
		size=${c(l)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${c(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,bo=e=>{const{value:t,min:o=0,wrap:r,variant:n,size:s,textual:l,onDeselect:d,disabled:a,chipRenderer:i=mo}=e,[u,v]=ve(0),b={onOverflow:z=>v(z.size)},m={sm:"xs",md:"sm",lg:"md",xl:"lg"}[s??"md"];return g`<cosmoz-autocomplete-chips-row
		.overflow=${b}
		?data-wrap=${r}
		variant=${c(n)}
		size=${c(s&&s!=="md"?s:void 0)}
	>
		${t.filter(Boolean).map(z=>i({item:z,content:l(z),onClear:t.length>o&&(()=>d(z)),disabled:a,slot:"chips",size:m}))}
		${i({item:null,content:g`<span>${u>0?"+"+u:""}</span>`,className:"badge",disabled:!0,slot:"badge",size:m,hidden:u<1})}
	</cosmoz-autocomplete-chips-row>`},fo=W`
	:host {
		display: contents;
	}
`,zo=W`
	:host {
		display: contents;
	}

	slot {
		display: contents;
	}

	/* the band: the wrapping, clipping row the chips land in - one chip
	   row tall; members that do not fit wrap below it and the css hides
	   them on first paint (no flash), the marks only attribute them to
	   the count badge outside. The band invariants ride the adopted
	   overflowStyle; the context sizing and the one-row height stay
	   here. */
	/* one chip row, matched to the tag pill heights */
	slot[name='chips'] {
		flex: 0 1 auto;
		min-width: 0;
		/* the gap keeps wrapped rows clear of the cap, no slivers */
		row-gap: calc(var(--cz-spacing) * 2);
		max-height: 1.5rem; /* tag sm, the default size */
	}

	:host([variant='inline']) slot[name='chips'] {
		max-height: 1.6rem; /* inline md */
	}

	:host([size='sm']) slot[name='chips'] {
		max-height: 1.25rem; /* the sm pill */
	}

	/* variants restyle the sm pill fonts: cells render 21.25, inline 24 */
	:host([size='sm'][variant='cell']) slot[name='chips'] {
		max-height: 21.3px; /* cell sm pill */
	}

	:host([size='sm'][variant='inline']) slot[name='chips'] {
		max-height: 24px; /* inline sm pill */
	}

	:host([size='lg']) slot[name='chips'] {
		max-height: 27px; /* tag md pill */
	}

	:host([size='xl']) slot[name='chips'] {
		max-height: 31px; /* tag lg pill */
	}

	/* wrap mode: chips wrap to real rows and the field grows */
	:host([data-wrap]) slot[name='chips'] {
		overflow: visible;
		max-height: none;
	}

	::slotted(cosmoz-tag) {
		align-items: center;
		flex: none;
		margin-left: var(--cz-spacing);
	}

	:host([variant='inline']) ::slotted(cosmoz-tag:first-of-type) {
		margin-left: 0;
	}

	::slotted(.badge) {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	::slotted([hidden]) {
		display: none;
	}
`,wo=e=>g`<slot
			name="chips"
			class="cz-overflow-band"
			${vo(e.overflow)}
		></slot>
		<slot name="badge"></slot>`;customElements.define("cosmoz-autocomplete-chips-row",S(wo,{styleSheets:[G(zo),po]}));customElements.define("cosmoz-autocomplete-chips",S(bo,{styleSheets:[G(fo)]}));const xo=new Set(["Enter"," ","ArrowDown","ArrowUp"]),yo=W`
	:host {
		cursor: pointer;
	}

	:host([disabled]) {
		cursor: not-allowed;
	}

	:host(:focus-within) .wrap {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]:focus-within) .wrap {
		box-shadow: var(--cz-focus-ring-error);
	}

	/* #input:not(:placeholder-shown) equivalent */
	:host([has-value]) .wrap slot[name='prefix']::slotted(*),
	:host([has-value]) .wrap slot[name='suffix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	/* The shared input sheet keys presence chrome on #input; patched
	   upstream (cosmoz-input#443) — drop this rule once that's released */
	:host([variant='cell']:focus-within) .wrap {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]:focus-within) .wrap {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
		box-shadow: none;
	}

	/* Size the field like the input's text line; fall back to 1lh for
	   consumers that haven't resolved tokens >= 3.5 yet */
	.control {
		height: var(--cz-control-height-md, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([variant='cell']) .control {
		height: var(--cz-control-height-sm, calc(1lh + var(--cz-spacing) * 4));
	}

	/* Chips wrap mode: let the control chrome grow to the wrapped rows */
	:host([data-wrap]) .control {
		height: auto;
		min-height: var(--cz-control-height-md, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([variant='cell'][data-wrap]) .control {
		min-height: var(--cz-control-height-sm, calc(1lh + var(--cz-spacing) * 4));
	}

	/* Size attribute: mirrors a real cosmoz-input's size ladder */
	:host([size='sm']) .control {
		height: var(--cz-control-height-sm, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([size='lg']) .control {
		height: var(--cz-control-height-lg, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([size='xl']) .control {
		height: var(--cz-control-height-xl, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([size='sm'][data-wrap]) .control {
		height: auto;
		min-height: var(--cz-control-height-sm, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([size='lg'][data-wrap]) .control {
		height: auto;
		min-height: var(--cz-control-height-lg, calc(1lh + var(--cz-spacing) * 4));
	}

	:host([size='xl'][data-wrap]) .control {
		height: auto;
		min-height: var(--cz-control-height-xl, calc(1lh + var(--cz-spacing) * 4));
	}

	/* live region for validation announcements; visually hidden */
	.announcer {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	/* Variant: inline hides the placeholder, like #input::placeholder */
	:host([variant='inline']) {
		cursor: default;
	}

	:host([variant='inline']:focus-within) .wrap {
		box-shadow: none;
	}

	:host([variant='inline']) .placeholder {
		visibility: hidden;
	}

	:host(:not([variant='inline'])) .placeholder {
		color: var(--cz-color-text-placeholder);
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}
`,$o=e=>{const{label:t,errorMessage:o,invalid:r,placeholder:n,compact:s,required:l,hasValue:d}=e;return $(()=>{const a=i=>{i.target!==e||e.hasAttribute("disabled")||i.defaultPrevented||!xo.has(i.key)||(i.preventDefault(),e.click())};return e.addEventListener("keydown",a),()=>e.removeEventListener("keydown",a)},[]),be(n!=null&&!d?g`<span class="placeholder">${n}</span>`:g``,{label:t,invalid:r,errorMessage:o,compact:!!s,required:!!l,labelFor:null})};customElements.define("cosmoz-autocomplete-trigger",S($o,{styleSheets:[G(fe),G(yo)],observedAttributes:["variant","disabled","invalid","compact","required","has-value"]}));const ko=R`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",S(()=>X,{styleSheets:[ko]}));const Eo=W`
	:host {
		display: block;
		position: relative;
		min-width: calc(var(--cz-spacing) * 9);
	}

	:host([mode='select']) {
		--cosmoz-badge-border-color: transparent;
		--cosmoz-badge-bg-color: transparent;
	}

	cosmoz-dropdown-next {
		display: block;
	}

	cosmoz-autocomplete-trigger[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-autocomplete-trigger[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-autocomplete-trigger[variant='inline']:has(
			cosmoz-tag[removable]
		)::part(label),
	cosmoz-autocomplete-trigger[variant='inline'][disabled]:has(
			cosmoz-tag:not([hidden])
		)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-autocomplete-trigger::part(control) {
		display: flex;
		align-items: center;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-listbox cosmoz-input {
		margin: calc(var(--cz-spacing) * 1.5);
	}

	:host([wrap]) cosmoz-autocomplete-trigger::part(control) {
		padding-right: calc(var(--cz-spacing) * 2);
	}

	slot {
		display: contents !important;
	}

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
	}

	.error {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-error);
	}

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`,ze=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),o),o)},Re=e=>e.type||e.toString(),Le=e=>Array.isArray(e)?e:[e],Ao=(e,t)=>{const o=Le(t),r=(o.every(Array.isArray)?o:[o]).map(([n,s])=>({actions:Le(n).map(Re),handle:s}));return(n=e,s)=>{const l=r.find(d=>d.actions.includes(Re(s)));return l?l.handle(n,s):n}},H={pending:"pending",rejected:"rejected",resolved:"resolved"},Me={error:void 0,result:void 0,state:H.pending},Ne=ze(H.pending),Ye=ze(H.resolved,e=>({result:e})),je=ze(H.rejected,e=>({error:e})),Co=Ao(Me,[[Ne,()=>({error:void 0,result:void 0,state:H.pending})],[Ye,(e,{result:t})=>({error:void 0,result:t,state:H.resolved})],[je,(e,{error:t})=>({error:t,result:void 0,state:H.rejected})]]),To=e=>{const[{error:t,result:o,state:r},n]=pt(Co,Me);return $(()=>{if(!e)return;let s=!1;return n(Ne()),e.then(l=>!s&&n(Ye(l)),l=>!s&&n(je(l))),()=>{s=!0}},[e]),[o,t,r]},Oe=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),So=(e,t,o)=>{if(!t)return e;const r=Oe(t.toLowerCase()),n=[];for(const s of e){const d=Oe(o(s).toLowerCase()).indexOf(r);d<0||n.push({item:s,index:d})}return n.sort((s,l)=>s.index-l.index).map(({item:s})=>s)},_o=e=>e===!1||e==null?[]:e,Ro=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),He=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?He(t.shadowRoot):t:null},Pe=[],Lo=(e,t,o)=>x(r=>{t?.(r),e.dispatchEvent(new CustomEvent(o,{detail:r}))},[t]),Oo=({value:e,text:t,mode:o,onChange:r,onText:n,onSelect:s,limit:l,min:d,source:a,textProperty:i,textual:u,valueProperty:v,keepOpened:b,keepQuery:m,preserveOrder:z,defaultIndex:C,externalSearch:y,disabled:w,lazyOpen:_})=>{const k=l!=null?Number(l):void 0,T=d!=null?Number(d):void 0,q=o==="select",P=j(()=>(u??gt)(i),[u,i]),p=vt(),[f,L]=ae("opened",!1),ee=!t,D=j(()=>t?.trim(),[t]),B=Lo(p,n,"text"),U=x(A=>{r?.(A,()=>L(!1));const V=q?A[0]:A;Ro(p,"value",V)},[r]),[Y,Ge]=ve([]),te=!!(_&&!D),oe=j(()=>te?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:D,active:f}):a).then(_o),[a,f,D,te]),I=j(()=>he(e),[e]);$(()=>oe.then(Ge),[oe]),mt({activity:ut,callback:()=>{const A=he(I);A.length>(T??0)&&U(A.slice(0,-1))},check:()=>!w&&ee&&p.matches(":focus-within"),element:()=>p},[]),$(()=>{!f&&!m&&B("")},[f,m]),$(()=>{p.toggleAttribute("opened",!!f)},[f]),De(()=>{!f||w||He()?.closest?.("cosmoz-tag")||p.shadowRoot?.querySelector("#search")?.focus()},[f,w]);const F=qe({onText:B,onChange:U,value:I,limit:k,min:T,keepQuery:m,keepOpened:b,setOpened:L,onSelect:s,valueProperty:v}),[,,Xe]=To(oe);return{limit:k,opened:f,query:D,textual:P,value:I,source$:oe,loading:Xe==="pending",items:j(()=>{if(!f||te)return Pe;const A=z?Y:[...I,...pe(I,ne(v))(Y)];return y?A:So(A,D,P)},[Y,f,D,P,ee,I,z,v,y,te]),onToggle:x(A=>{w||L(A.newState==="open")},[w]),onText:x(A=>{if(w)return;const V=A.target.value;V&&k===1&&I.length>0&&U([]),B(V),L(!0)},[w,B,L,k,I,U]),onSelect:x(A=>{if(w)return;F.onSelect?.(A,F);const{onChange:V,onText:Qe,limit:Je,min:We,value:et,keepQuery:tt,keepOpened:ot,setOpened:rt,valueProperty:nt}=F;tt||Qe(""),ot||(p.shadowRoot?.querySelector("cosmoz-autocomplete-trigger")?.focus(),rt(!1));const re=he(et),ce=ne(nt),we=re.some(st=>ce(st)===ce(A));we&&re.length===We||V((we?pe(A,ce)(re):[...re,A]).slice(-Je))},[w,F]),onDeselect:x(A=>{w||F.onChange(pe(A,ne(F.valueProperty))(F.value))},[w,F]),defaultIndex:D!==void 0&&D?.length>0?0:C}},Po=["control","label","hint","error","wrap"].map(e=>`${e}: input-${e}`).join(),Do=e=>{const{variant:t,opened:o,invalid:r,errorMessage:n,hint:s,label:l,placeholder:d,compact:a,required:i,disabled:u,textual:v,text:b,onText:m,onToggle:z,onDeselect:C,value:y,limit:w,min:_,items:k,source$:T,loading:q,chipRenderer:P,size:p,wrap:f,mode:L}=e,ee=w===1,D=!a&&s&&!r,B=!a&&r&&n,U=B&&"error"||D&&"hint"||void 0;return g`<cosmoz-dropdown-next
				open-on-focus
				?disabled=${u}
				.opened=${o}
				@dropdown-toggle=${z}
				part="dropdown"
			>
				<cosmoz-autocomplete-trigger
					slot="button"
					part="input"
					.label=${l}
					aria-label=${l}
					aria-invalid=${c(B?"true":void 0)}
					aria-describedby=${c(U)}
					.errorMessage=${Ae([T,n,a],()=>Se(T.then(()=>a?n:void 0,Y=>a?Y.message:void 0),a?n:void 0))}
					?invalid=${Ae([T,r],()=>Se(T.then(()=>r,()=>!0),r))}
					variant=${c(t)}
					.placeholder=${d}
					?compact=${a}
					?disabled=${u}
					?required=${i}
					?has-value=${y.length>0}
					exportparts=${Po}
					role="button"
					tabindex=${u?-1:0}
					aria-haspopup="listbox"
					aria-expanded=${o?"true":"false"}
					?data-wrap=${f}
					size=${c(p==="md"?void 0:p)}
				>
					<slot name="prefix" slot="prefix"></slot>
					<slot name="suffix" slot="suffix">
						${E(L==="select",()=>St({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
					</slot>
					<cosmoz-autocomplete-chips
						slot="control"
						.value=${y}
						.min=${_}
						.variant=${t}
						.textual=${v}
						.onDeselect=${C}
						.disabled=${u}
						.chipRenderer=${P}
						.wrap=${f}
						.size=${p}
					></cosmoz-autocomplete-chips>
				</cosmoz-autocomplete-trigger>

				${bt({...e,items:k,multi:!ee},g`<cosmoz-input
							slot="search"
							id="search"
							part="search-input"
							placeholder=${de("Search")}
							aria-label=${de("Search")}
							.value=${le(b)}
							@value-changed=${m}
							@select=${Y=>Y.stopPropagation()}
							autocomplete="off"
						></cosmoz-input>
						${E(q,()=>g`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>E(b!=null&&b.length>0&&k.length===0,()=>g`<slot name="no-result">
											<span class="no-result">${de("No results found")}</span>
										</slot>`))}`)}
			</cosmoz-dropdown-next>
			${E(D,()=>g`<span class="hint" part="hint" id="hint">${s}</span>`)}
			${E(B,()=>g`<span class="error" part="error" id="error"
						>${n}</span
					>`)}
			<cosmoz-announcer
				.message=${B?n:""}
			></cosmoz-announcer>`},Ue=e=>{const t={...e,...Oo(e)};return Do(t)},Ve=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","size","item-height","item-limit","wrap","lazy-open","mode"],qo=e=>{const{onChange:t,onText:o,mode:r,...n}=e,s=r==="select",[l,d]=ae("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ue({...n,...s&&{limit:1,min:1,showSingle:!0},mode:r,value:l,onChange:x((a,...i)=>{d(s?a[0]:a),t?.(a,...i)},[t,s]),onText:x(a=>{e.text=a,o?.(a)},[o])})},Ke=[G(Eo)],Ze={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",S(Ue,{observedAttributes:Ve,styleSheets:Ke,shadowRootInit:Ze}));customElements.define("cosmoz-autocomplete",S(qo,{observedAttributes:Ve,styleSheets:Ke,shadowRootInit:Ze}));export{Ue as A,Ve as a,St as c,c as o,Eo as s};
