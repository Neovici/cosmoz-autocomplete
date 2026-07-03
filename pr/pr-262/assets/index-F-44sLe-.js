import{A as W,s as J,c as L,d as S,b as h,w as le,f as $,u as de,a as w,r as Je,E as N,p as et,D as tt,g as pe,e as _,h as ot,H as nt,n as rt,j as st,k as it,l as at,m as ct,o as me,t as lt}from"./iframe-BKQOoEhU.js";import{n as x,u as B,a as U,e as ue,i as Ae,t as H,f as dt,s as pt,b as Se,c as Q,d as ve,w as ie,p as ae,l as ut,g as ht}from"./index-aOKrNe5D.js";const b=e=>e??W,ee=J(L`
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
`),l=e=>`calc(var(--cz-spacing) * ${e})`,gt=L`
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
		gap: ${l(1.5)};
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
		padding: ${l(.5)} ${l(2)};
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
		background-color: var(--cz-color-bg-brand);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-brand-200);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
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
		padding: ${l(.5)} ${l(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${l(.5)} ${l(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${l(1)};
	}

	:host([size='lg']) .badge {
		padding: ${l(1)} ${l(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${l(.5)} ${l(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${l(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${l(1)} ${l(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${l(2)};
		height: ${l(2)};
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

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${l(.5)} ${l(2.5)} ${l(.5)} ${l(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${l(.5)} ${l(2)} ${l(.5)} ${l(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${l(1)} ${l(3)} ${l(1)} ${l(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${l(.5)} ${l(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${l(.5)} ${l(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${l(1)} ${l(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${l(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${l(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${l(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${l(3)};
		height: ${l(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${l(3)};
		height: ${l(3)};
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
`,mt=()=>h`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",S(mt,{styleSheets:[ee,gt]}));const vt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
  <svg
    slot=${b(e)}
    class=${`chevron-down-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${b(r)}
  >
    ${x(t,()=>le`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,ft=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
  <svg
    slot=${b(e)}
    class=${`info-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${b(r)}
  >
    ${x(t,()=>le`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,bt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
  <svg
    slot=${b(e)}
    class=${`x-close-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${b(r)}
  >
    ${x(t,()=>le`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,q=e=>`calc(var(--cz-spacing) * ${e})`,zt=L`
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
	.close {
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
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${q(2.5)};
		height: ${q(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${q(3)};
		height: ${q(3)};
	}

	:host([size='lg']) .close svg {
		width: ${q(3.5)};
		height: ${q(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${q(3.5)};
		height: ${q(3.5)};
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
`,yt=e=>{const{color:t,size:o,disabled:n,removable:s}=e,r=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return h`<cosmoz-badge
		color=${b(t)}
		size=${b(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${x(s,()=>h` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${a=>a.preventDefault()}
					@click=${r}
				>
					${bt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",S(yt,{observedAttributes:["color","size","disabled","removable"],styleSheets:[ee,zt]}));const Re=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),wt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:a})=>{const c=B(),i=()=>clearTimeout(c.current),p=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const d=t.current;n&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||a()},100)},u=()=>{o||(i(),r())};return $(()=>{if(!(!n||o))return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",p)}},[n,o,e]),$(()=>{if(!(!s||o))return e.addEventListener("focusin",u),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",p)}},[s,o,e]),{scheduleClose:p,cancelClose:i}},xt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},$t=L`
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
`,kt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:n,openOnHover:s,openOnFocus:r}=e,a=B(),[c,i]=de("opened",!1),p=w(()=>{o||(i(!0),a.current?.showPopover())},[o]),u=w(()=>{i(!1),a.current?.hidePopover()},[]),d=w(()=>{if(o)return;a.current?.matches(":popover-open")?u():p()},[o]);$(()=>{const m=a.current;m&&(c?m.showPopover():m.hidePopover())},[c]),$(()=>{e.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:E,cancelClose:g}=wt({host:e,popoverRef:a,disabled:o,openOnHover:s,openOnFocus:r,open:p,close:u}),k=r?p:d,C=w(m=>{xt(m),i(m.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return h`
		<slot name="button" @click=${k}></slot>
		${o&&n?h`<slot></slot>`:h`<div
					popover
					style="position-area: ${t}"
					@toggle=${C}
					@select=${u}
					@focusout=${E}
					@focusin=${g}
					${U(m=>m&&(a.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",S(kt,{styleSheets:[$t],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const te=ue(class extends Ae{constructor(e){if(super(e),e.type!==H.PROPERTY&&e.type!==H.ATTRIBUTE&&e.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Je(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===N||t===W)return t;const o=e.element,n=e.name;if(e.type===H.PROPERTY){if(t===o[n])return N}else if(e.type===H.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return N}else if(e.type===H.ATTRIBUTE&&o.getAttribute(n)===t+"")return N;return et(e),t}}),Et=L`
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
`;customElements.define("cosmoz-tooltip-content",S(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[ee,Et]}));const ce=J(L`
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
`),fe=(e,t,o)=>tt(h`<cosmoz-tooltip-content>
			${x(t,()=>h`<strong slot="heading">${t}</strong>`)}
			${x(o,()=>h`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),Ct=(e,t)=>{const{for:o,heading:n,description:s,placement:r="top",delay:a=300,disabled:c=!1}=t,i=B(),u=!!(n||s)&&!c;$(()=>{if(!o||!u)return;const d=e.getRootNode(),E=d.adoptedStyleSheets??[];E.includes(ce)||(d.adoptedStyleSheets=[...E,ce]);const g=document.createElement("div");g.setAttribute("popover","manual"),g.setAttribute("role","tooltip"),g.classList.add("cosmoz-tooltip-popover"),e.after(g),i.current=g,fe(g,n,s);const k=`[name="${o}"]`,C=`--tooltip-anchor-${o}`;let m;const z=y=>{c||(clearTimeout(m),y.style.anchorName=C,g.style.positionAnchor=C,g.style.positionArea=r,m=window.setTimeout(()=>g.showPopover(),a))},j=()=>{clearTimeout(m),g.hidePopover()},A=y=>{const v=y.target.closest?.(k);v&&z(v)},R=y=>{const v=y.target.closest?.(k);if(!v)return;const T=y.relatedTarget;T&&v.contains(T)||j()},M=y=>{const v=y.target.closest?.(k);v&&z(v)},P=y=>{y.target.closest?.(k)&&j()};return d.addEventListener("pointerover",A),d.addEventListener("pointerout",R),d.addEventListener("focusin",M),d.addEventListener("focusout",P),()=>{clearTimeout(m),d.removeEventListener("pointerover",A),d.removeEventListener("pointerout",R),d.removeEventListener("focusin",M),d.removeEventListener("focusout",P),g.hidePopover(),g.remove(),i.current=void 0}},[o,r,a,u]),$(()=>{!o||!i.current||fe(i.current,n,s)},[n,s,o]),$(()=>{!c||!i.current||i.current.hidePopover()},[c])},Tt=e=>{const[t,o]=pe(!1);return $(()=>{const n=e.current;if(!n)return;const s=()=>{o(n.assignedElements().length>0)};return s(),n.addEventListener("slotchange",s),()=>n.removeEventListener("slotchange",s)},[e.current]),t},At=L`
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
`,St=e=>{const{heading:t,description:o,for:n,placement:s="top",delay:r=300,disabled:a=!1}=e,c=B(),i=B(),p=B(),u=Tt(p),E=!!(t||o||u)&&!a,g=w(()=>{E&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{c.current?.showPopover()},r))},[r,E]);$(()=>{a&&(clearTimeout(i.current),c.current?.hidePopover())},[a]);const k=w(()=>{clearTimeout(i.current),c.current?.hidePopover()},[]);return $(()=>{if(n)return;const C=m=>{const z=m.relatedTarget;z&&e.contains(z)||k()};return e.addEventListener("pointerover",g),e.addEventListener("pointerout",C),()=>{e.removeEventListener("pointerover",g),e.removeEventListener("pointerout",C)}},[n,g,k]),Ct(e,{for:n,heading:t,description:o,placement:s,delay:r,disabled:a}),n?W:E?h`
		<slot @focusin=${g} @focusout=${k}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${U(c)}
		>
			<cosmoz-tooltip-content>
				${x(t,()=>h`<strong slot="heading">${t}</strong>`)}
				${x(o,()=>h`<p slot="description">${o}</p>`)}
				<slot name="content" ${U(p)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:h`
			<slot></slot>
			<slot name="content" ${U(p)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",S(St,{styleSheets:[ee,ce,At],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Oe=(e,{hint:t,label:o,invalid:n,errorMessage:s,compact:r,required:a})=>h`
		<!-- label: hidden in compact mode -->
		${x(!r&&o,()=>h`<label for="input" part="label"
					>${o}
					${x(a,()=>h`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${x(r&&n&&s,()=>h`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${ft({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${x(!r&&t&&!n,()=>h`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${x(!r&&n&&s,()=>h`<span class="error" part="error">${s}</span>`)}
	`,Le=["autocomplete","readonly","disabled","maxlength","invalid"],Pe=Re`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
		margin-bottom: calc(var(--cz-spacing) * 6);
	}

	:host(:focus-within) {
		caret-color: var(--cz-color-text-primary);
	}

	:host([disabled]) .wrap {
		color: var(--cz-color-text-disabled);
		opacity: 0.5;
		cursor: not-allowed;
	}

	:host([disabled]) #input {
		cursor: not-allowed;
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
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: 0 0 0 1px var(--cz-color-border-error);
	}

	:host([invalid]) .wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring-error);
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
		padding-block: calc(var(--cz-spacing) * 2);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	#input::placeholder {
		color: var(--cz-color-text-placeholder);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	/* === Label === */

	label {
		position: relative;
		font-size: var(--cz-text-sm);
		color: var(--cz-color-text-secondary);
	}

	/* === Hint & Error === */

	.hint {
		font-size: var(--cz-text-xs);
		color: var(--cz-color-text-tertiary);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
	}

	.error {
		font-size: var(--cz-text-xs);
		position: absolute;
		bottom: calc(var(--cz-spacing) * -6);
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
	}

	:host([variant='inline']) .wrap {
		margin-top: calc(var(--cz-spacing) * 2.5);
	}

	:host([variant='inline']) #input {
		padding-inline: 0;
	}

	:host([variant='inline']) #input::placeholder {
		color: transparent;
	}

	:host([variant='inline']) .wrap {
		border-radius: 0;
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
		top: 25%;
		left: 0;
		width: 100%;
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

	:host([variant='cell']) .wrap:has(#input) {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}

	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell'][invalid]) .wrap:has(#input) {
		border-color: var(--cz-color-border-error);
		box-shadow: none;
	}

	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}

	:host([variant='cell']) label {
		display: none;
	}

	:host([variant='cell']) .error {
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
`,Rt=e=>_(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ot=ot(class extends nt{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Lt=/([A-Z])/gu,be=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Lt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Ie=e=>{const t=B(void 0),o=w(i=>t.current=i,[]),n=e.shadowRoot,s=w(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),r=w(i=>be(e,"value",i.target.value),[]),a=w(i=>be(e,"focused",i.type==="focus"),[]),c=w(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Ot({validate:c},[c]),$(()=>{const i=p=>{p.composedPath()[0]?.closest?.("input, textarea")||(p.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:s,onFocus:a,onInput:r,onRef:o}},Pt=({placeholder:e})=>e||" ",It=(e,t)=>t??(e==="date"?"9999-12-31":void 0),qt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Le],_t=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:a,disabled:c,min:i,max:p,step:u,maxlength:d,required:E}=e,{onChange:g,onFocus:k,onInput:C,onRef:m}=Ie(e),z=Rt(n);return e.toggleAttribute("has-value",!!r),Oe(h`
			<input
				${U(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(s)}
				placeholder=${Pt({placeholder:e.placeholder})}
				?readonly=${a}
				aria-disabled=${c?"true":"false"}
				?disabled=${c}
				?required=${E}
				.value=${te(r??"")}
				maxlength=${b(d)}
				@beforeinput=${z}
				@input=${C}
				@change=${g}
				@focus=${k}
				@blur=${k}
				min=${b(i)}
				max=${b(It(t,p))}
				step=${b(u)}
			/>
		`,e)};customElements.define("cosmoz-input",S(_t,{observedAttributes:qt,styleSheets:[J(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ze=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Nt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},Mt=e=>{const{value:t,maxRows:o}=e,n=_(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Nt(n(),o),[o,n]),$(()=>ze(n()),[n,t]),$(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ze(s)));return r.observe(s),()=>r.unobserve(s)},[n])},Yt=["rows","placeholder","label","hint","required",...Le],Bt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:s,disabled:r,rows:a,cols:c,maxlength:i}=e,{onChange:p,onFocus:u,onInput:d,onRef:E}=Ie(e);return Mt(e),Oe(h`
			<textarea id="input" part="input"
				${U(E)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${b(c)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${te(o??"")} maxlength=${b(i)} @input=${d}
				@change=${p} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",S(Bt,{observedAttributes:Yt,styleSheets:[J(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Dt=e=>{const{label:t,value:o,disabled:n,error:s}=e,r=w(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${te(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${x(t,()=>h`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${x(s,a=>h`<div class="failure">${a}</div>`)} `},jt=L`
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
`,Ft=L`
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
`;customElements.define("cosmoz-toggle",S(Dt,{styleSheets:[Ft,jt],observedAttributes:["label","disabled","error"]}));const Ht={},ye=ue(class extends Ae{constructor(){super(...arguments),this.ot=Ht}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return N}else if(this.ot===t)return N;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Ut{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Zt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const we=e=>!rt(e)&&typeof e.then=="function",xe=1073741823;class Vt extends dt{constructor(){super(...arguments),this._$Cwt=xe,this._$Cbt=[],this._$CK=new Ut(this),this._$CX=new Zt}render(...t){return t.find(o=>!we(o))??N}update(t,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!we(i))return this._$Cwt=c,i;c<s&&i===n[c]||(this._$Cwt=xe,s=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const u=r.deref();if(u!==void 0){const d=u._$Cbt.indexOf(i);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(p))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const $e=ue(Vt),Gt=({content:e,onClear:t,disabled:o,className:n="chip",hidden:s,slot:r})=>h`<cosmoz-tag
		class=${b(n)}
		slot=${b(r)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${s}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Kt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=Gt})=>[...e.filter(Boolean).map(a=>r({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:s,slot:"control"})),r({item:null,content:h`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Xt=L`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",S(()=>W,{styleSheets:[Xt]}));const Qt=Re`
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

	:host(:not([variant='inline'])) cosmoz-listbox {
		margin-top: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag {
		align-items: center;
		margin-left: var(--cz-spacing);
	}

	cosmoz-input[variant='inline'] cosmoz-tag:first-of-type {
		margin-left: 0;
	}

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	cosmoz-input::part(control) {
		display: flex;
		min-width: calc(var(--cz-spacing) * 9);
	}

	cosmoz-input[variant='inline']:has(cosmoz-tag[removable])::part(label),
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag)::part(label) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	[data-single]::part(input) {
		flex: 0;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
		padding-right: calc(var(--cz-spacing) * 2);
	}

	:host([wrap]) cosmoz-tag {
		padding-block: calc(var(--cz-spacing) * 1.5);
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
`,he=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),o),o)},ke=e=>e.type||e.toString(),Ee=e=>Array.isArray(e)?e:[e],Wt=(e,t)=>{const o=Ee(t),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:Ee(s).map(ke),handle:r}));return(s=e,r)=>{const a=n.find(c=>c.actions.includes(ke(r)));return a?a.handle(s,r):s}},D={pending:"pending",rejected:"rejected",resolved:"resolved"},qe={error:void 0,result:void 0,state:D.pending},_e=he(D.pending),Ne=he(D.resolved,e=>({result:e})),Me=he(D.rejected,e=>({error:e})),Jt=Wt(qe,[[_e,()=>({error:void 0,result:void 0,state:D.pending})],[Ne,(e,{result:t})=>({error:void 0,result:t,state:D.resolved})],[Me,(e,{error:t})=>({error:t,result:void 0,state:D.rejected})]]),eo=e=>{const[{error:t,result:o,state:n},s]=st(Jt,qe);return $(()=>{if(!e)return;let r=!1;return s(_e()),e.then(a=>!r&&s(Ne(a)),a=>!r&&s(Me(a))),()=>{r=!0}},[e]),[o,t,n]},Ce=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),to=(e,t,o)=>{if(!t)return e;const n=Ce(t.toLowerCase()),s=[];for(const r of e){const c=Ce(o(r).toLowerCase()).indexOf(n);c<0||s.push({item:r,index:c})}return s.sort((r,a)=>r.index-a.index).map(({item:r})=>r)},oo=e=>e===!1||e==null?[]:e,no=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Te=[],ro=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},so=(e,t,o)=>w(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),io=({value:e,text:t,mode:o,onChange:n,onText:s,onSelect:r,limit:a,min:c,source:i,textProperty:p,textual:u,valueProperty:d,keepOpened:E,keepQuery:g,preserveOrder:k,defaultIndex:C,externalSearch:m,disabled:z,lazyOpen:j})=>{const A=a!=null?Number(a):void 0,R=c!=null?Number(c):void 0,M=o==="select",P=_(()=>(u??pt)(p),[u,p]),y=Se(),[v,T]=de("opened",!1),Z=!t,O=_(()=>t?.trim(),[t]),V=so(y,s,"text"),oe=w(f=>{n?.(f,()=>T(!1));const F=M?f[0]:f;no(y,"value",F)},[n]),[ne,Fe]=pe([]),G=!!(j&&!O),K=_(()=>G?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:O,active:v}):i).then(oo),[i,v,O,G]),Y=_(()=>Q(e),[e]);$(()=>K.then(Fe),[K]),ve({activity:it,callback:()=>{const f=Q(Y);f.length>(R??0)&&oe(f.slice(0,-1))},check:()=>!z&&Z&&y.matches(":focus-within"),element:()=>y},[]),ve({activity:at,callback:f=>{const F=Q(Y),re=A===1;F.length>0&&re&&f.key.length===1&&oe(F.slice(0,-1))},allowDefault:!0,check:()=>!z&&Z&&y.matches(":focus-within"),element:()=>y},[A]),$(()=>{!v&&!g&&V("")},[v,g]),$(()=>{y.toggleAttribute("opened",!!v)},[v]);const I=ct({onText:V,onChange:oe,value:Y,limit:A,min:R,keepQuery:g,keepOpened:E,setOpened:T,onSelect:r,valueProperty:d}),[,,He]=eo(K);return{limit:A,opened:v,query:O,textual:P,value:Y,source$:K,loading:He==="pending",items:_(()=>{if(!v||G)return Te;const f=k?ne:[...Y,...ie(Y,ae(d))(ne)];return m?f:to(f,O,P)},[ne,v,O,P,Z,Y,k,d,m,G]),onToggle:w(f=>{z||T(f.newState==="open")},[z]),onText:w(f=>{z||(V(f.target.value),T(!0))},[z,V,t,T]),onSelect:w(f=>{if(z)return;I.onSelect?.(f,I);const{onChange:F,onText:re,limit:Ue,min:Ze,value:Ve,keepQuery:Ge,keepOpened:Ke,setOpened:Xe,valueProperty:Qe}=I;Ge||re(""),Ke||Xe(!1);const X=Q(Ve),se=ae(Qe),ge=X.some(We=>se(We)===se(f));ge&&X.length===Ze||F((ge?ie(f,se)(X):[...X,f]).slice(-Ue))},[z,I]),onDeselect:w(f=>{z||I.onChange(ie(f,ae(I.valueProperty))(I.value))},[z,I]),defaultIndex:O!==void 0&&O?.length>0?0:C}},ao=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const c of t)c.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const i=t[r].getBoundingClientRect();if(!(i.x+i.width<=s.x+s.width-24))break}const a=t.length-r;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;r<t.length;r++)t[r].hidden=!0},co=({value:e,opened:t,wrap:o,limit:n})=>{const s=Se(),r=!(o||n===1)&&e.length>0,a=_(()=>ro(()=>ao(s)),[]),[c,i]=pe(0);me(()=>{if(!r)return;const p=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{i(d[0].contentRect.width)});return u.observe(p),()=>u.disconnect()},[r]),me(()=>r?a():void 0,[r,c,t,e])},lo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),po=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,uo=e=>{const{variant:t,opened:o,invalid:n,errorMessage:s,hint:r,label:a,placeholder:c,required:i,disabled:p,textual:u,text:d,onText:E,onToggle:g,onDeselect:k,value:C,limit:m,min:z,showSingle:j,items:A,source$:R,loading:M,chipRenderer:P,mode:y}=e,v=m===1,T=v&&C?.[0]!=null,Z=M||A.length>0||d!=null&&d.length>0;return h`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${p}
			.opened=${o}
			@dropdown-toggle=${g}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${a}
				.placeholder=${T?void 0:c}
				hint=${b(r)}
				variant=${b(t)}
				?readonly=${T}
				?disabled=${p}
				?required=${i}
				?invalid=${ye([R,n],()=>$e(R.then(()=>n,()=>!0),n))}
				.errorMessage=${ye([R,s],()=>$e(R.then(()=>s,O=>O.message),s))}
				.value=${te(d)}
				@value-changed=${E}
				autocomplete="off"
				exportparts=${lo}
				?data-one=${v}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${x(y==="select",()=>vt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Kt({value:C,min:z,onDeselect:k,textual:u,disabled:p,chipRenderer:P})}
			</cosmoz-input>

			${x(po({opened:o,isSingle:T,showSingle:j,hasResultsOrQuery:Z}),()=>ut({...e,items:A,multi:!v},x(M,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>x(d!=null&&d.length>0&&A.length===0,()=>h`<slot name="no-result">
											<span class="no-result">${lt("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ye=e=>{const t={...e,...io(e)};return co(t),uo(t)},Be=["variant","disabled","invalid","required","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],ho=e=>{const{onChange:t,onText:o,mode:n,...s}=e,r=n==="select",[a,c]=de("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ye({...s,...r&&{limit:1,min:1,showSingle:!0},mode:n,value:a,onChange:w((i,...p)=>{c(r?i[0]:i),t?.(i,...p)},[t,r]),onText:w(i=>{e.text=i,o?.(i)},[o])})},De=[ht(Qt)],je={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",S(Ye,{observedAttributes:Be,styleSheets:De,shadowRootInit:je}));customElements.define("cosmoz-autocomplete",S(ho,{observedAttributes:Be,styleSheets:De,shadowRootInit:je}));export{Ye as A,Be as a,vt as c,b as o,Qt as s};
