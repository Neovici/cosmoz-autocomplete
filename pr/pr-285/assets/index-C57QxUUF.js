import{A as Z,s as ne,c as S,d as C,b as v,f as y,D as at,g as ge,a as w,h as De,w as ve,E as R,i as pe,u as se,j as Ie,r as it,p as lt,e as M,k as ct,H as dt,n as ht,l as pt,m as ut,t as we}from"./iframe-Bm5uKTUJ.js";import{u as N,n as E,a as V,e as G,f as ae,i as qe,t as U,p as re,s as K,b as gt,c as vt,d as de,g as mt,w as he,l as bt}from"./index-GaaQIwAT.js";const p=e=>e??Z,X=ne(S`
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
`),d=e=>`calc(var(--cz-spacing) * ${e})`,ft=S`
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
`,zt=()=>v`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",C(zt,{styleSheets:[X,ft]}));const wt=S`
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
`;customElements.define("cosmoz-tooltip-content",C(()=>v`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[X,wt]}));const ue=ne(S`
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
`),xe=(e,t,o)=>at(v`<cosmoz-tooltip-content>
			${E(t,()=>v`<strong slot="heading">${t}</strong>`)}
			${E(o,()=>v`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),xt=(e,t)=>{const{for:o,heading:r,description:n,placement:s="top",delay:l=300,disabled:c=!1}=t,i=N(),h=!!(r||n)&&!c;y(()=>{if(!o||!h)return;const u=e.getRootNode(),m=u.adoptedStyleSheets??[];m.includes(ue)||(u.adoptedStyleSheets=[...m,ue]);const b=document.createElement("div");b.setAttribute("popover","manual"),b.setAttribute("role","tooltip"),b.classList.add("cosmoz-tooltip-popover"),e.after(b),i.current=b,xe(b,r,n);const $=`[name="${o}"]`,T=`--tooltip-anchor-${o}`;let x;const z=g=>{c||(clearTimeout(x),g.style.anchorName=T,b.style.positionAnchor=T,b.style.positionArea=s,x=window.setTimeout(()=>b.showPopover(),l))},O=()=>{clearTimeout(x),b.hidePopover()},A=g=>{const f=g.target.closest?.($);f&&z(f)},L=g=>{const f=g.target.closest?.($);if(!f)return;const _=g.relatedTarget;_&&f.contains(_)||O()},D=g=>{const f=g.target.closest?.($);f&&z(f)},P=g=>{g.target.closest?.($)&&O()};return u.addEventListener("pointerover",A),u.addEventListener("pointerout",L),u.addEventListener("focusin",D),u.addEventListener("focusout",P),()=>{clearTimeout(x),u.removeEventListener("pointerover",A),u.removeEventListener("pointerout",L),u.removeEventListener("focusin",D),u.removeEventListener("focusout",P),b.hidePopover(),b.remove(),i.current=void 0}},[o,s,l,h]),y(()=>{!o||!i.current||xe(i.current,r,n)},[r,n,o]),y(()=>{!c||!i.current||i.current.hidePopover()},[c])},yt=e=>{const[t,o]=ge(!1);return y(()=>{const r=e.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[e.current]),t},$t=S`
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
`,kt=e=>{const{heading:t,description:o,for:r,placement:n="top",delay:s=300,disabled:l=!1}=e,c=N(),i=N(),a=N(),h=yt(a),m=!!(t||o||h)&&!l,b=w(()=>{m&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{c.current?.showPopover()},s))},[s,m]);y(()=>{l&&(clearTimeout(i.current),c.current?.hidePopover())},[l]);const $=w(()=>{clearTimeout(i.current),c.current?.hidePopover()},[]);return y(()=>{if(r)return;const T=x=>{const z=x.relatedTarget;z&&e.contains(z)||$()};return e.addEventListener("pointerover",b),e.addEventListener("pointerout",T),()=>{e.removeEventListener("pointerover",b),e.removeEventListener("pointerout",T)}},[r,b,$]),xt(e,{for:r,heading:t,description:o,placement:n,delay:s,disabled:l}),r?Z:m?v`
		<slot @focusin=${b} @focusout=${$}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${V(c)}
		>
			<cosmoz-tooltip-content>
				${E(t,()=>v`<strong slot="heading">${t}</strong>`)}
				${E(o,()=>v`<p slot="description">${o}</p>`)}
				<slot name="content" ${V(a)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:v`
			<slot></slot>
			<slot name="content" ${V(a)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",C(kt,{styleSheets:[X,ue,$t],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ye=(e,t)=>{e.type="submit",e.hidden=!0,e.disabled=!!(t.disabled||t.formDisabled),e.name=t.name??"",e.value=t.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])t.hasAttribute(o)?e.setAttribute(o,t.getAttribute(o)):e.removeAttribute(o)};class Et extends HTMLElement{static formAssociated=!0;#t=this.attachInternals();#e;get form(){return this.#t.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#e?.remove(),this.#e=void 0;return}this.#e?ye(this.#e,this):(this.#e=document.createElement("button"),ye(this.#e,this),this.append(this.#e))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(t){this.formDisabled=t,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#o),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#o),this.#e?.remove(),this.#e=void 0}#o=t=>{this.#e&&t.composedPath().includes(this.#e)||setTimeout(()=>{if(t.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#e&&o.requestSubmit(this.#e)))},0)}}const At=S`
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
`,Ct=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],Tt=e=>{const{disabled:t=!1,tooltip:o,tooltipPlacement:r,type:n="button",href:s,target:l,rel:c,download:i}=e,a=!!(t||e.formDisabled);y(()=>{e.syncFormButton()}),y(()=>{const m=b=>{(e.disabled||e.formDisabled)&&(b.preventDefault(),b.stopImmediatePropagation())};return e.addEventListener("click",m,{capture:!0}),()=>e.removeEventListener("click",m,{capture:!0})},[e.disabled,e.formDisabled]),De(()=>{const m=e.shadowRoot?.querySelector(".button");m&&"ariaControlsElements"in m&&(m.ariaControlsElements=e.ariaControlsElements)});const h=v`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,u=E(s!=null,()=>v`
			<a
				role=${p(e.controlRole)}
				tabindex=${p(e.getAttribute("tabindex")??void 0)}
				aria-controls=${p(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${p(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${p(e.getAttribute("aria-description")??void 0)}
				aria-busy=${p(e.getAttribute("aria-busy")??void 0)}
				aria-current=${p(e.getAttribute("aria-current")??void 0)}
				href=${s}
				class="button"
				part="button"
				aria-disabled=${a?"true":Z}
				aria-expanded=${p(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${p(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				target=${p(l)}
				rel=${p(c)}
				download=${p(i)}
				>${h}</a
			>
		`,()=>v`
			<button
				role=${p(e.controlRole)}
				tabindex=${p(e.getAttribute("tabindex")??void 0)}
				aria-controls=${p(e.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${p(e.getAttribute("aria-haspopup")??void 0)}
				aria-description=${p(e.getAttribute("aria-description")??void 0)}
				aria-busy=${p(e.getAttribute("aria-busy")??void 0)}
				aria-current=${p(e.getAttribute("aria-current")??void 0)}
				type=${n}
				class="button"
				part="button"
				?disabled=${a}
				aria-expanded=${p(e.getAttribute("aria-expanded")??void 0)}
				aria-label=${p(e.getAttribute("aria-label")??(e.iconOnly&&e.title?e.title:void 0))}
				aria-pressed=${p(e.getAttribute("aria-pressed")??void 0)}
			>
				${h}
			</button>
		`);return v`<cosmoz-tooltip
		heading=${p(o??void 0)}
		placement=${p(r??void 0)}
		?disabled=${a}
	>
		${u}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",C(Tt,{baseElement:Et,observedAttributes:Ct,styleSheets:[X,At],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const St=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>v`
  <svg
    slot=${p(e)}
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
    style=${p(s)}
  >
    ${E(t,()=>ve`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,_t=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>v`
  <svg
    slot=${p(e)}
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
    style=${p(s)}
  >
    ${E(t,()=>ve`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,Rt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>v`
  <svg
    slot=${p(e)}
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
    style=${p(s)}
  >
    ${E(t,()=>ve`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,F=e=>`calc(var(--cz-spacing) * ${e})`,Lt=S`
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
		width: ${F(2.5)};
		height: ${F(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${F(3)};
		height: ${F(3)};
	}

	:host([size='lg']) .close svg {
		width: ${F(3.5)};
		height: ${F(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${F(3.5)};
		height: ${F(3.5)};
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
`,Ot=e=>{const{color:t,size:o,disabled:r,removable:n}=e,s=()=>{r||e.dispatchEvent(new CustomEvent("remove"))};return v`<cosmoz-badge
		color=${p(t)}
		size=${p(o)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${E(n,()=>v` <cosmoz-button
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
	</cosmoz-badge>`};customElements.define("cosmoz-tag",C(Ot,{observedAttributes:["color","size","disabled","removable"],styleSheets:[X,Lt]}));const Q=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join("");class Pt extends ae{_slot;_ref;#t=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#e=()=>this.#t();update(t,[o]){this._ref=o;const r=t.element;this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t()}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}render(t){return R}}const $e=G(Pt),Dt=(e,t,o)=>{o==null?e.removeAttribute(t):e.setAttribute(t,o)},It=(e,t)=>{for(const[o,r]of Object.entries(e))Dt(t,o,pe(r,t))};class qt extends ae{_slot;_attrs;#t=()=>{if(!this._slot||!this._attrs)return;const t=this._slot.assignedElements({flatten:!0});for(const o of t)It(this._attrs,o)};#e=()=>this.#t();render(t){return R}update(t,[o]){this._attrs=o;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#e),this._slot=r,r.addEventListener("slotchange",this.#e)),this.#t(),R}disconnected(){this._slot?.removeEventListener("slotchange",this.#e),this._slot=void 0}}const Bt=G(qt),Ft=e=>{for(const t of e.current??[]){const o=t.matches("[autofocus]")?t:t.querySelector("[autofocus]");if(o instanceof HTMLElement){o.focus();break}}},Nt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:s}=e,l=N(),[c,i]=se("opened",!1),a=N(),h=N(),u=Ie({disabled:o,openOnHover:n}),m=w(()=>{const g=a.current?.[0];return g instanceof HTMLElement?g:void 0},[]),b=w(()=>{u.disabled||(i(!0),l.current?.showPopover?.())},[]),$=w(()=>{i(!1),l.current?.hidePopover?.()},[]),T=w(()=>{l.current?.matches(":popover-open")?$():b()},[]),x=w(()=>{clearTimeout(u.closeTimeout)},[]),z=w(g=>{u.disabled||g.target===m()&&(x(),b())},[]),O=w(()=>{u.disabled||(x(),b())},[]),A=w(()=>{clearTimeout(u.closeTimeout),u.closeTimeout=setTimeout(()=>{const g=l.current;u.openOnHover&&(e.matches(":hover")||g?.matches(":hover"))||e.matches(":focus-within")||g?.matches(":focus-within")||$()},100)},[]),L=w(()=>{let g=document.activeElement;for(;g?.shadowRoot;)g=g.shadowRoot.activeElement;if(!(g==null||g===document.body||g.offsetParent==null))return;const _=m();_&&(e.removeEventListener("focusin",z),_.focus(),e.addEventListener("focusin",z))},[]),D=w(g=>{const f=g.newState==="open";i(f),f?Ft(h):L(),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return y(()=>{const g=l.current;g&&(c?g.showPopover?.():g.hidePopover?.())},[c]),y(()=>{e.toggleAttribute("opened",!!c)},[c]),y(()=>{if(!(!s||o))return e.addEventListener("focusin",z),e.addEventListener("focusout",A),()=>{e.removeEventListener("focusin",z),e.removeEventListener("focusout",A)}},[s,o]),y(()=>{if(!(!n||o))return e.addEventListener("pointerenter",O),e.addEventListener("pointerleave",A),()=>{e.removeEventListener("pointerenter",O),e.removeEventListener("pointerleave",A)}},[n,o]),{placement:t,disabled:o,passthrough:r,opened:c,triggers:a,content:h,popoverRef:l,handleClick:s?b:T,onToggle:D,close:$,scheduleClose:A,cancelClose:x}},Mt=S`
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
`,jt=({placement:e,disabled:t,passthrough:o,opened:r,triggers:n,content:s,popoverRef:l,handleClick:c,onToggle:i,close:a,scheduleClose:h,cancelClose:u})=>v`
		<slot
			name="button"
			${$e(n)}
			${Bt({"aria-expanded":o?null:String(r),disabled:t&&!o?"":null})}
			@click=${c}
		></slot>
		${t&&o?v`<slot></slot>`:v`<div
					popover
					style="position-area: ${e}"
					@toggle=${i}
					@select=${a}
					@focusout=${h}
					@focusin=${u}
					${V(m=>m&&(l.current=m))}
				>
					<slot ${$e(s)}></slot>
				</div>`}
	`,Yt=e=>jt(Nt(e));customElements.define("cosmoz-dropdown-next",C(Yt,{styleSheets:[Mt],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ie=G(class extends qe{constructor(e){if(super(e),e.type!==U.PROPERTY&&e.type!==U.ATTRIBUTE&&e.type!==U.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!it(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===Z)return t;const o=e.element,r=e.name;if(e.type===U.PROPERTY){if(t===o[r])return R}else if(e.type===U.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return R}else if(e.type===U.ATTRIBUTE&&o.getAttribute(r)===t+"")return R;return lt(e),t}}),me=(e,{hint:t,label:o,invalid:r,errorMessage:n,compact:s,required:l})=>v`
		<!-- label: hidden in compact mode -->
		${E(!s&&o,()=>v`<label for="input" part="label"
					>${o}
					${E(l,()=>v`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${E(s&&r&&n,()=>v`<cosmoz-tooltip
						placement="top"
						description=${n}
						delay="300"
					>
						${_t({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${E(!s&&t&&!r,()=>v`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${E(!s&&r&&n,()=>v`<span class="error" part="error">${n}</span>`)}
	`,Be=["autocomplete","readonly","disabled","maxlength","invalid"],be=Q`
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
		display: none;
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
`,Ht=e=>M(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ut=ct(class extends dt{values;constructor(e,t,o,r){super(e,t),Object.assign(t.host,o),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Vt=/([A-Z])/gu,ke=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Vt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Fe=e=>{const t=N(void 0),o=w(i=>t.current=i,[]),r=e.shadowRoot,n=w(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=w(i=>ke(e,"value",i.target.value),[]),l=w(i=>ke(e,"focused",i.type==="focus"),[]),c=w(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Ut({validate:c},[c]),y(()=>{const i=a=>{a.composedPath()[0]?.closest?.("input, textarea, label")||(a.preventDefault(),t.current?.focus())};return r.addEventListener("mousedown",i),()=>r.removeEventListener("mousedown",i)},[]),{onChange:n,onFocus:l,onInput:s,onRef:o}},Kt=({placeholder:e})=>e||" ",Zt=(e,t)=>t??(e==="date"?"9999-12-31":void 0),Gt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Be],Xt=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:n,value:s,readonly:l,disabled:c,min:i,max:a,step:h,maxlength:u,required:m}=e,{onChange:b,onFocus:$,onInput:T,onRef:x}=Fe(e),z=Ht(r);return e.toggleAttribute("has-value",!!s),me(v`
			<input
				${V(x)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${p(o)}
				autocomplete=${p(n)}
				placeholder=${Kt({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${c?"true":"false"}
				?disabled=${c}
				?required=${m}
				.value=${ie(s??"")}
				maxlength=${p(u)}
				@beforeinput=${z}
				@input=${T}
				@change=${b}
				@focus=${$}
				@blur=${$}
				min=${p(i)}
				max=${p(Zt(t,a))}
				step=${p(h)}
			/>
		`,e)};customElements.define("cosmoz-input",C(Xt,{observedAttributes:Gt,styleSheets:[ne(be)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ee=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Qt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Jt=e=>{const{value:t,maxRows:o}=e,r=M(()=>()=>e.shadowRoot.querySelector("#input"),[]);y(()=>Qt(r(),o),[o,r]),y(()=>Ee(r()),[r,t]),y(()=>{const n=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>Ee(n)));return s.observe(n),()=>s.unobserve(n)},[r])},Wt=["rows","placeholder","label","hint","compact","required",...Be],eo=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:n,disabled:s,rows:l,cols:c,maxlength:i}=e,{onChange:a,onFocus:h,onInput:u,onRef:m}=Fe(e);return Jt(e),me(v`
			<textarea id="input" part="input"
				${V(m)}
				autocomplete=${p(t)}
				placeholder=${r||" "}
				rows=${l??1} cols=${p(c)}
				?readonly=${n} ?aria-disabled=${s} ?disabled=${s}
				.value=${ie(o??"")} maxlength=${p(i)} @input=${u}
				@change=${a} @focus=${h} @blur=${h}>`,e)};customElements.define("cosmoz-textarea",C(eo,{observedAttributes:Wt,styleSheets:[ne(be)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const to=e=>{const{label:t,value:o,disabled:r,error:n}=e,s=w(l=>e.dispatchEvent(new CustomEvent("change",{detail:l.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ie(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${E(t,()=>v`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${E(n,l=>v`<div class="failure">${l}</div>`)} `},oo=S`
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
`,ro=S`
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
`;customElements.define("cosmoz-toggle",C(to,{styleSheets:[ro,oo],observedAttributes:["label","disabled","error"]}));const no=e=>{const t=a=>a.label!=null?pe(a.label,a.value):typeof a.value=="string"?a.value:"",o=(e.options??[]).map(a=>typeof a=="object"&&a!=null&&"value"in a?a:{value:a}),[r,n]=se("value"),s=a=>re(e.valueProperty)(a),l=s(r),c=a=>n(a.value),i=a=>{if(a.key!=="ArrowRight"&&a.key!=="ArrowLeft")return;a.preventDefault();const h=o.map(x=>s(x.value)),u=h.findIndex(x=>x===l);if(u===-1)return;const m=a.key==="ArrowRight"?1:-1,b=o[(u+m+h.length)%h.length];n(b.value),a.currentTarget.children[(u+m+h.length)%h.length]?.focus()};return v`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??""}
		@keydown=${i}
	>
		${o.map(a=>{const h=l===s(a.value),u=t(a);return v`<button
				type="button"
				role="radio"
				aria-checked=${h?"true":"false"}
				?disabled=${a.disabled||e.disabled}
				title=${a.title!=null?pe(a.title,a.value):Z}
				part=${h?"option selected-option":"option"}
				class=${h?"option selected":"option"}
				@click=${()=>c(a)}
				tabindex=${h?"0":"-1"}
			>
				${a.icon?.({width:"16",height:"16"})}${u}
			</button>`})}
	</div>`},so=S`
	:host {
		display: inline-flex;
	}
`,ao=S`
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
`;customElements.define("cosmoz-toggle-group",C(no,{styleSheets:[X,so,ao],observedAttributes:["label","disabled","value-property"]}));const io={},Ae=G(class extends qe{constructor(){super(...arguments),this.ot=io}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((r,n)=>r===this.ot[n]))return R}else if(this.ot===t)return R;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class lo{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class co{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Ce=e=>!ht(e)&&typeof e.then=="function",Te=1073741823;class ho extends ae{constructor(){super(...arguments),this._$Cwt=Te,this._$Cbt=[],this._$CK=new lo(this),this._$CX=new co}render(...t){return t.find(o=>!Ce(o))??R}update(t,o){const r=this._$Cbt;let n=r.length;this._$Cbt=o;const s=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!Ce(i))return this._$Cwt=c,i;c<n&&i===r[c]||(this._$Cwt=Te,n=0,Promise.resolve(i).then(async a=>{for(;l.get();)await l.get();const h=s.deref();if(h!==void 0){const u=h._$Cbt.indexOf(i);u>-1&&u<h._$Cwt&&(h._$Cwt=u,h.setValue(a))}}))}return R}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Se=G(ho),po=K(S`
	slot.cz-overflow-band {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		overflow: clip;
	}

	::slotted([overflowing]) {
		visibility: hidden;
	}
`),_e=e=>e.assignedElements({flatten:!0}),uo=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(o=>e.has(o));class go extends ae{_slot;_onOverflow;#t=new Map;#e;#o;#a=t=>{t.forEach(o=>{const r=o.target;this.#t.set(r,o.boundingClientRect.height>0&&o.intersectionRect.height===0)}),this.#n()};#i=t=>{this.#o?.unobserve(t),this.#o?.observe(t)};#n=()=>{if(!this._slot)return;const t=_e(this._slot);t.forEach(r=>{const n=this.#t.get(r)===!0;n!==r.hasAttribute("overflowing")&&(n?r.setAttribute("overflowing",""):r.removeAttribute("overflowing"))}),this.#t.forEach((r,n)=>{t.includes(n)||(this.#t.delete(n),this.#o?.unobserve(n),n.hasAttribute("overflowing")&&n.removeAttribute("overflowing"))});const o=new Set(t.filter(r=>this.#t.get(r)===!0));uo(this.#e,o)||(this.#e=o,this._onOverflow?.(o))};#r=()=>this.#s();#s=()=>{if(!(!this.#o||!this._slot)){for(const t of _e(this._slot))this.#i(t);this.#n()}};render(t){return R}update(t,[o]){this._onOverflow=o.onOverflow;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#r),this.#o?.disconnect(),this.#o=void 0,this._slot=r,r.addEventListener("slotchange",this.#r)),this.#o??=new IntersectionObserver(this.#a,{root:this._slot,threshold:[0,1]}),this.#s(),R}disconnected(){this._slot?.removeEventListener("slotchange",this.#r),this._slot=void 0,this.#o?.disconnect(),this.#o=void 0,this.#t.clear(),this.#e=void 0}}const vo=G(go),mo=({content:e,onClear:t,disabled:o,className:r="chip",hidden:n,slot:s})=>v`<cosmoz-tag
		class=${p(r)}
		slot=${p(s)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${p(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,bo=e=>{const{value:t,min:o=0,wrap:r,variant:n,textual:s,onDeselect:l,disabled:c,chipRenderer:i=mo}=e,[a,h]=ge(0);return v`<cosmoz-autocomplete-chips-row
		.overflow=${{onOverflow:m=>h(m.size)}}
		?data-wrap=${r}
		variant=${p(n)}
	>
		${t.filter(Boolean).map(m=>i({item:m,content:s(m),onClear:t.length>o&&(()=>l(m)),disabled:c,slot:"chips"}))}
		${i({item:null,content:v`<span>${a>0?"+"+a:""}</span>`,className:"badge",disabled:!0,slot:"badge",hidden:a<1})}
	</cosmoz-autocomplete-chips-row>`},fo=Q`
	:host {
		display: contents;
	}
`,zo=Q`
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
	slot[name='chips'] {
		flex: 0 1 auto;
		min-width: 0;
		max-height: calc(1lh + var(--cz-spacing) * 4); /* one filled chip row */
	}

	/* wrap mode: chips wrap to real rows and the field grows */
	:host([data-wrap]) slot[name='chips'] {
		overflow: visible;
		max-height: none;
	}

	::slotted(cosmoz-tag) {
		align-items: center;
		flex: none;
		min-height: calc(
			1lh + var(--cz-spacing) * 4
		); /* fill the row like the old input did */
		max-width: calc(100% - calc(var(--cz-spacing) * 2));
		margin-left: calc(var(--cz-spacing) * 2);
	}

	:host([variant='inline']) ::slotted(cosmoz-tag) {
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
`,wo=e=>v`<slot
			name="chips"
			class="cz-overflow-band"
			${vo(e.overflow)}
		></slot>
		<slot name="badge"></slot>`;customElements.define("cosmoz-autocomplete-chips-row",C(wo,{styleSheets:[K(zo),po]}));customElements.define("cosmoz-autocomplete-chips",C(bo,{styleSheets:[K(fo)]}));const xo=new Set(["Enter"," ","ArrowDown","ArrowUp"]),yo=Q`
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
`,$o=e=>{const{label:t,hint:o,errorMessage:r,invalid:n,placeholder:s,compact:l,required:c,hasValue:i}=e;return y(()=>{const a=h=>{h.target!==e||e.hasAttribute("disabled")||h.defaultPrevented||!xo.has(h.key)||(h.preventDefault(),e.click())};return e.addEventListener("keydown",a),()=>e.removeEventListener("keydown",a)},[]),me(s!=null&&!i?v`<span class="placeholder">${s}</span>`:v``,{label:t,hint:o,invalid:n,errorMessage:r,compact:!!l,required:!!c})};customElements.define("cosmoz-autocomplete-trigger",C($o,{styleSheets:[K(be),K(yo)],observedAttributes:["variant","disabled","invalid","compact","required","has-value"]}));const ko=S`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",C(()=>Z,{styleSheets:[ko]}));const Eo=Q`
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

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`,fe=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),o),o)},Re=e=>e.type||e.toString(),Le=e=>Array.isArray(e)?e:[e],Ao=(e,t)=>{const o=Le(t),r=(o.every(Array.isArray)?o:[o]).map(([n,s])=>({actions:Le(n).map(Re),handle:s}));return(n=e,s)=>{const l=r.find(c=>c.actions.includes(Re(s)));return l?l.handle(n,s):n}},j={pending:"pending",rejected:"rejected",resolved:"resolved"},Ne={error:void 0,result:void 0,state:j.pending},Me=fe(j.pending),je=fe(j.resolved,e=>({result:e})),Ye=fe(j.rejected,e=>({error:e})),Co=Ao(Ne,[[Me,()=>({error:void 0,result:void 0,state:j.pending})],[je,(e,{result:t})=>({error:void 0,result:t,state:j.resolved})],[Ye,(e,{error:t})=>({error:t,result:void 0,state:j.rejected})]]),To=e=>{const[{error:t,result:o,state:r},n]=pt(Co,Ne);return y(()=>{if(!e)return;let s=!1;return n(Me()),e.then(l=>!s&&n(je(l)),l=>!s&&n(Ye(l))),()=>{s=!0}},[e]),[o,t,r]},Oe=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),So=(e,t,o)=>{if(!t)return e;const r=Oe(t.toLowerCase()),n=[];for(const s of e){const c=Oe(o(s).toLowerCase()).indexOf(r);c<0||n.push({item:s,index:c})}return n.sort((s,l)=>s.index-l.index).map(({item:s})=>s)},_o=e=>e===!1||e==null?[]:e,Ro=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),He=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?He(t.shadowRoot):t:null},Pe=[],Lo=(e,t,o)=>w(r=>{t?.(r),e.dispatchEvent(new CustomEvent(o,{detail:r}))},[t]),Oo=({value:e,text:t,mode:o,onChange:r,onText:n,onSelect:s,limit:l,min:c,source:i,textProperty:a,textual:h,valueProperty:u,keepOpened:m,keepQuery:b,preserveOrder:$,defaultIndex:T,externalSearch:x,disabled:z,lazyOpen:O})=>{const A=l!=null?Number(l):void 0,L=c!=null?Number(c):void 0,D=o==="select",P=M(()=>(h??gt)(a),[h,a]),g=vt(),[f,_]=se("opened",!1),Y=!t,I=M(()=>t?.trim(),[t]),J=Lo(g,n,"text"),W=w(k=>{r?.(k,()=>_(!1));const H=D?k[0]:k;Ro(g,"value",H)},[r]),[le,Ge]=ge([]),ee=!!(O&&!I),te=M(()=>ee?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:I,active:f}):i).then(_o),[i,f,I,ee]),q=M(()=>de(e),[e]);y(()=>te.then(Ge),[te]),mt({activity:ut,callback:()=>{const k=de(q);k.length>(L??0)&&W(k.slice(0,-1))},check:()=>!z&&Y&&g.matches(":focus-within"),element:()=>g},[]),y(()=>{!f&&!b&&J("")},[f,b]),y(()=>{g.toggleAttribute("opened",!!f)},[f]),De(()=>{!f||z||He()?.closest?.("cosmoz-tag")||g.shadowRoot?.querySelector("#search")?.focus()},[f,z]);const B=Ie({onText:J,onChange:W,value:q,limit:A,min:L,keepQuery:b,keepOpened:m,setOpened:_,onSelect:s,valueProperty:u}),[,,Xe]=To(te);return{limit:A,opened:f,query:I,textual:P,value:q,source$:te,loading:Xe==="pending",items:M(()=>{if(!f||ee)return Pe;const k=$?le:[...q,...he(q,re(u))(le)];return x?k:So(k,I,P)},[le,f,I,P,Y,q,$,u,x,ee]),onToggle:w(k=>{z||_(k.newState==="open")},[z]),onText:w(k=>{if(z)return;const H=k.target.value;H&&A===1&&q.length>0&&W([]),J(H),_(!0)},[z,J,_,A,q,W]),onSelect:w(k=>{if(z)return;B.onSelect?.(k,B);const{onChange:H,onText:Qe,limit:Je,min:We,value:et,keepQuery:tt,keepOpened:ot,setOpened:rt,valueProperty:nt}=B;tt||Qe(""),ot||rt(!1);const oe=de(et),ce=re(nt),ze=oe.some(st=>ce(st)===ce(k));ze&&oe.length===We||H((ze?he(k,ce)(oe):[...oe,k]).slice(-Je))},[z,B]),onDeselect:w(k=>{z||B.onChange(he(k,re(B.valueProperty))(B.value))},[z,B]),defaultIndex:I!==void 0&&I?.length>0?0:T}},Po=["control","label","hint","error","wrap"].map(e=>`${e}: input-${e}`).join(),Do=e=>{const{variant:t,opened:o,invalid:r,errorMessage:n,hint:s,label:l,placeholder:c,compact:i,required:a,disabled:h,textual:u,text:m,onText:b,onToggle:$,onDeselect:T,value:x,limit:z,min:O,items:A,source$:L,loading:D,chipRenderer:P,wrap:g,mode:f}=e,_=z===1;return v`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${h}
			.opened=${o}
			@dropdown-toggle=${$}
			part="dropdown"
		>
			<cosmoz-autocomplete-trigger
				slot="button"
				part="input"
				.label=${l}
				.hint=${s}
				.errorMessage=${Ae([L,n],()=>Se(L.then(()=>n,Y=>Y.message),n))}
				?invalid=${Ae([L,r],()=>Se(L.then(()=>r,()=>!0),r))}
				variant=${p(t)}
				.placeholder=${c}
				?compact=${i}
				?disabled=${h}
				?required=${a}
				?has-value=${x.length>0}
				exportparts=${Po}
				role="button"
				tabindex=${h?-1:0}
				aria-haspopup="listbox"
				aria-expanded=${o?"true":"false"}
				?data-wrap=${g}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${E(f==="select",()=>St({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				<cosmoz-autocomplete-chips
					slot="control"
					.value=${x}
					.min=${O}
					.variant=${t}
					.textual=${u}
					.onDeselect=${T}
					.disabled=${h}
					.chipRenderer=${P}
					.wrap=${g}
				></cosmoz-autocomplete-chips>
			</cosmoz-autocomplete-trigger>

			${E(o,()=>bt({...e,items:A,multi:!_},v`<cosmoz-input
							slot="search"
							id="search"
							part="search-input"
							placeholder=${we("Search")}
							.value=${ie(m)}
							@value-changed=${b}
							@select=${Y=>Y.stopPropagation()}
							autocomplete="off"
						></cosmoz-input>
						${E(D,()=>v`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>E(m!=null&&m.length>0&&A.length===0,()=>v`<slot name="no-result">
											<span class="no-result">${we("No results found")}</span>
										</slot>`))}`))}
		</cosmoz-dropdown-next>`},Ue=e=>{const t={...e,...Oo(e)};return Do(t)},Ve=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],Io=e=>{const{onChange:t,onText:o,mode:r,...n}=e,s=r==="select",[l,c]=se("value");return y(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ue({...n,...s&&{limit:1,min:1,showSingle:!0},mode:r,value:l,onChange:w((i,...a)=>{c(s?i[0]:i),t?.(i,...a)},[t,s]),onText:w(i=>{e.text=i,o?.(i)},[o])})},Ke=[K(Eo)],Ze={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",C(Ue,{observedAttributes:Ve,styleSheets:Ke,shadowRootInit:Ze}));customElements.define("cosmoz-autocomplete",C(Io,{observedAttributes:Ve,styleSheets:Ke,shadowRootInit:Ze}));export{Ue as A,Ve as a,St as c,p as o,Eo as s};
