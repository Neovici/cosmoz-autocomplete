import{A as ee,s as te,c as R,d as A,b as u,w as G,f as k,u as le,a as $,r as ot,E as N,p as nt,D as rt,g as de,e as Y,h as st,H as at,n as it,j as ct,k as lt,l as dt,m as ge,t as Ce}from"./iframe-DO48oCGP.js";import{n as f,u as _,a as V,e as pe,i as Te,t as Z,f as pt,s as ut,b as Ae,c as se,d as ht,w as ae,p as ie,l as Se,g as gt}from"./index-ifBkMsH3.js";const v=e=>e??ee,oe=te(R`
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
`),l=e=>`calc(var(--cz-spacing) * ${e})`,mt=R`
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
`,vt=()=>u`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",A(vt,{styleSheets:[oe,mt]}));const ft=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>u`
  <svg
    slot=${v(e)}
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
    height=${r}
    style=${v(s)}
  >
    ${f(t,()=>G`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,bt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>u`
  <svg
    slot=${v(e)}
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
    height=${r}
    style=${v(s)}
  >
    ${f(t,()=>G`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,zt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>u`
  <svg
    slot=${v(e)}
    class=${`plus-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${v(s)}
  >
    ${f(t,()=>G`<title>${t}</title>`)}
    <path d="M12 5v14m-7-7h14" />
  </svg>
`,wt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>u`
  <svg
    slot=${v(e)}
    class=${`search-md-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${v(s)}
  >
    ${f(t,()=>G`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`,yt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>u`
  <svg
    slot=${v(e)}
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
    height=${r}
    style=${v(s)}
  >
    ${f(t,()=>G`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,B=e=>`calc(var(--cz-spacing) * ${e})`,xt=R`
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
		width: ${B(2.5)};
		height: ${B(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${B(3)};
		height: ${B(3)};
	}

	:host([size='lg']) .close svg {
		width: ${B(3.5)};
		height: ${B(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${B(3.5)};
		height: ${B(3.5)};
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
`,$t=e=>{const{color:t,size:o,disabled:n,removable:r}=e,s=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return u`<cosmoz-badge
		color=${v(t)}
		size=${v(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${f(r,()=>u` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${c=>c.preventDefault()}
					@click=${s}
				>
					${yt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",A($t,{observedAttributes:["color","size","disabled","removable"],styleSheets:[oe,xt]}));const Re=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),kt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:c})=>{const i=_(),a=()=>clearTimeout(i.current),d=()=>{clearTimeout(i.current),i.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||c()},100)},p=()=>{o||(a(),s())};return k(()=>{if(!(!n||o))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",d),()=>{a(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",d)}},[n,o,e]),k(()=>{if(!(!r||o))return e.addEventListener("focusin",p),e.addEventListener("focusout",d),()=>{a(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",d)}},[r,o,e]),{scheduleClose:d,cancelClose:a}},Et=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Ct=R`
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
`,Tt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:n,openOnHover:r,openOnFocus:s}=e,c=_(),[i,a]=le("opened",!1),d=$(()=>{o||(a(!0),c.current?.showPopover?.())},[o]),p=$(()=>{a(!1),c.current?.hidePopover?.()},[]),h=$(()=>{if(o)return;c.current?.matches(":popover-open")?p():d()},[o]);k(()=>{const m=c.current;m&&(i?m.showPopover?.():m.hidePopover?.())},[i]),k(()=>{e.toggleAttribute("opened",!!i)},[i]);const{scheduleClose:b,cancelClose:g}=kt({host:e,popoverRef:c,disabled:o,openOnHover:r,openOnFocus:s,open:d,close:p}),y=s?d:h,C=$(m=>{Et(m),a(m.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return u`
		<slot name="button" @click=${y}></slot>
		${o&&n?u`<slot></slot>`:u`<div
					popover
					style="position-area: ${t}"
					@toggle=${C}
					@select=${p}
					@focusout=${b}
					@focusin=${g}
					${V(m=>m&&(c.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",A(Tt,{styleSheets:[Ct],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const K=pe(class extends Te{constructor(e){if(super(e),e.type!==Z.PROPERTY&&e.type!==Z.ATTRIBUTE&&e.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ot(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===N||t===ee)return t;const o=e.element,n=e.name;if(e.type===Z.PROPERTY){if(t===o[n])return N}else if(e.type===Z.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return N}else if(e.type===Z.ATTRIBUTE&&o.getAttribute(n)===t+"")return N;return nt(e),t}}),At=R`
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
`;customElements.define("cosmoz-tooltip-content",A(()=>u`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[oe,At]}));const ce=te(R`
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
`),me=(e,t,o)=>rt(u`<cosmoz-tooltip-content>
			${f(t,()=>u`<strong slot="heading">${t}</strong>`)}
			${f(o,()=>u`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),St=(e,t)=>{const{for:o,heading:n,description:r,placement:s="top",delay:c=300,disabled:i=!1}=t,a=_(),p=!!(n||r)&&!i;k(()=>{if(!o||!p)return;const h=e.getRootNode(),b=h.adoptedStyleSheets??[];b.includes(ce)||(h.adoptedStyleSheets=[...b,ce]);const g=document.createElement("div");g.setAttribute("popover","manual"),g.setAttribute("role","tooltip"),g.classList.add("cosmoz-tooltip-popover"),e.after(g),a.current=g,me(g,n,r);const y=`[name="${o}"]`,C=`--tooltip-anchor-${o}`;let m;const z=E=>{i||(clearTimeout(m),E.style.anchorName=C,g.style.positionAnchor=C,g.style.positionArea=s,m=window.setTimeout(()=>g.showPopover(),c))},D=()=>{clearTimeout(m),g.hidePopover()},O=E=>{const w=E.target.closest?.(y);w&&z(w)},P=E=>{const w=E.target.closest?.(y);if(!w)return;const T=E.relatedTarget;T&&w.contains(T)||D()},L=E=>{const w=E.target.closest?.(y);w&&z(w)},q=E=>{E.target.closest?.(y)&&D()};return h.addEventListener("pointerover",O),h.addEventListener("pointerout",P),h.addEventListener("focusin",L),h.addEventListener("focusout",q),()=>{clearTimeout(m),h.removeEventListener("pointerover",O),h.removeEventListener("pointerout",P),h.removeEventListener("focusin",L),h.removeEventListener("focusout",q),g.hidePopover(),g.remove(),a.current=void 0}},[o,s,c,p]),k(()=>{!o||!a.current||me(a.current,n,r)},[n,r,o]),k(()=>{!i||!a.current||a.current.hidePopover()},[i])},Rt=e=>{const[t,o]=de(!1);return k(()=>{const n=e.current;if(!n)return;const r=()=>{o(n.assignedElements().length>0)};return r(),n.addEventListener("slotchange",r),()=>n.removeEventListener("slotchange",r)},[e.current]),t},Ot=R`
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
`,Pt=e=>{const{heading:t,description:o,for:n,placement:r="top",delay:s=300,disabled:c=!1}=e,i=_(),a=_(),d=_(),p=Rt(d),b=!!(t||o||p)&&!c,g=$(()=>{b&&(clearTimeout(a.current),a.current=window.setTimeout(()=>{i.current?.showPopover()},s))},[s,b]);k(()=>{c&&(clearTimeout(a.current),i.current?.hidePopover())},[c]);const y=$(()=>{clearTimeout(a.current),i.current?.hidePopover()},[]);return k(()=>{if(n)return;const C=m=>{const z=m.relatedTarget;z&&e.contains(z)||y()};return e.addEventListener("pointerover",g),e.addEventListener("pointerout",C),()=>{e.removeEventListener("pointerover",g),e.removeEventListener("pointerout",C)}},[n,g,y]),St(e,{for:n,heading:t,description:o,placement:r,delay:s,disabled:c}),n?ee:b?u`
		<slot @focusin=${g} @focusout=${y}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${r}"
			${V(i)}
		>
			<cosmoz-tooltip-content>
				${f(t,()=>u`<strong slot="heading">${t}</strong>`)}
				${f(o,()=>u`<p slot="description">${o}</p>`)}
				<slot name="content" ${V(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:u`
			<slot></slot>
			<slot name="content" ${V(d)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",A(Pt,{styleSheets:[oe,ce,Ot],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Oe=(e,{hint:t,label:o,invalid:n,errorMessage:r,compact:s,required:c})=>u`
		<!-- label: hidden in compact mode -->
		${f(!s&&o,()=>u`<label for="input" part="label"
					>${o}
					${f(c,()=>u`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${f(s&&n&&r,()=>u`<cosmoz-tooltip
						placement="top"
						description=${r}
						delay="300"
					>
						${bt({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${f(!s&&t&&!n,()=>u`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${f(!s&&n&&r,()=>u`<span class="error" part="error">${r}</span>`)}
	`,Pe=["autocomplete","readonly","disabled","maxlength","invalid"],Le=Re`
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
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		overflow: hidden;
		transition-duration: 0.1s;
		transition-timing-function: linear;
		transition-property: box-shadow, background;
	}

	.wrap:has(#input:focus) {
		box-shadow: var(--cz-focus-ring);
	}

	:host([invalid]) .wrap {
		box-shadow: inset 0 0 0 1px var(--cz-color-border-error);
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
`,Lt=e=>Y(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),qt=st(class extends at{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),It=/([A-Z])/gu,ve=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(It,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},qe=e=>{const t=_(void 0),o=$(a=>t.current=a,[]),n=e.shadowRoot,r=$(a=>e.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),s=$(a=>ve(e,"value",a.target.value),[]),c=$(a=>ve(e,"focused",a.type==="focus"),[]),i=$(()=>{const a=t.current?.checkValidity();return e.toggleAttribute("invalid",!a),a},[]);return qt({validate:i},[i]),k(()=>{const a=d=>{d.composedPath()[0]?.closest?.("input, textarea, label")||(d.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",a),()=>n.removeEventListener("mousedown",a)},[]),{onChange:r,onFocus:c,onInput:s,onRef:o}},Mt=({placeholder:e})=>e||" ",Bt=(e,t)=>t??(e==="date"?"9999-12-31":void 0),Yt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Pe],Nt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:c,disabled:i,min:a,max:d,step:p,maxlength:h,required:b}=e,{onChange:g,onFocus:y,onInput:C,onRef:m}=qe(e),z=Lt(n);return e.toggleAttribute("has-value",!!s),Oe(u`
			<input
				${V(m)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${v(o)}
				autocomplete=${v(r)}
				placeholder=${Mt({placeholder:e.placeholder})}
				?readonly=${c}
				aria-disabled=${i?"true":"false"}
				?disabled=${i}
				?required=${b}
				.value=${K(s??"")}
				maxlength=${v(h)}
				@beforeinput=${z}
				@input=${C}
				@change=${g}
				@focus=${y}
				@blur=${y}
				min=${v(a)}
				max=${v(Bt(t,d))}
				step=${v(p)}
			/>
		`,e)};customElements.define("cosmoz-input",A(Nt,{observedAttributes:Yt,styleSheets:[te(Le)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const fe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},_t=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},jt=e=>{const{value:t,maxRows:o}=e,n=Y(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>_t(n(),o),[o,n]),k(()=>fe(n()),[n,t]),k(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>fe(r)));return s.observe(r),()=>s.unobserve(r)},[n])},Dt=["rows","placeholder","label","hint","required",...Pe],Ft=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:c,cols:i,maxlength:a}=e,{onChange:d,onFocus:p,onInput:h,onRef:b}=qe(e);return jt(e),Oe(u`
			<textarea id="input" part="input"
				${V(b)}
				autocomplete=${v(t)}
				placeholder=${n||" "}
				rows=${c??1} cols=${v(i)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${K(o??"")} maxlength=${v(a)} @input=${h}
				@change=${d} @focus=${p} @blur=${p}>`,e)};customElements.define("cosmoz-textarea",A(Ft,{observedAttributes:Dt,styleSheets:[te(Le)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ht=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=$(c=>e.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return u`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${K(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${f(t,()=>u`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${f(r,c=>u`<div class="failure">${c}</div>`)} `},Ut=R`
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
`,Zt=R`
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
`;customElements.define("cosmoz-toggle",A(Ht,{styleSheets:[Zt,Ut],observedAttributes:["label","disabled","error"]}));const Vt={},be=pe(class extends Te{constructor(){super(...arguments),this.ot=Vt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return N}else if(this.ot===t)return N;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Gt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Kt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ze=e=>!it(e)&&typeof e.then=="function",we=1073741823;class Xt extends pt{constructor(){super(...arguments),this._$Cwt=we,this._$Cbt=[],this._$CK=new Gt(this),this._$CX=new Kt}render(...t){return t.find(o=>!ze(o))??N}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let i=0;i<o.length&&!(i>this._$Cwt);i++){const a=o[i];if(!ze(a))return this._$Cwt=i,a;i<r&&a===n[i]||(this._$Cwt=we,r=0,Promise.resolve(a).then(async d=>{for(;c.get();)await c.get();const p=s.deref();if(p!==void 0){const h=p._$Cbt.indexOf(a);h>-1&&h<p._$Cwt&&(p._$Cwt=h,p.setValue(d))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ye=pe(Xt),Qt=({content:e,onClear:t,disabled:o,className:n="chip",hidden:r,slot:s})=>u`<cosmoz-tag
		class=${v(n)}
		slot=${v(s)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${r}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${v(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Ie=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=Qt,interactiveBadge:c})=>[...e.filter(Boolean).map(i=>s({item:i,content:n(i),onClear:e.length>t&&(()=>o(i)),disabled:r,slot:"control"})),s({item:null,content:u`<span></span>`,className:"badge",disabled:!c,slot:"control",hidden:!0})],Wt=R`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",A(()=>ee,{styleSheets:[Wt]}));const Jt=Re`
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
	cosmoz-input[variant='inline'][disabled]:has(cosmoz-tag:not([hidden]))::part(
			label
		) {
		transform: translate(var(--cz-spacing), -75%) scale(0.85);
	}

	cosmoz-input::part(input) {
		flex: 1 calc(var(--cz-spacing) * 6);
		min-width: 0;
	}

	cosmoz-input[data-one] cosmoz-tag {
		max-width: calc(100% - 16px);
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

	/* pill: chips followed by an "add" button that opens a search popover */
	.pill-row {
		display: flex;
		align-items: center;
		gap: var(--cz-spacing);
		min-width: 0;
	}

	.pill-row cosmoz-tag {
		margin-left: 0;
		flex: none;
	}

	.pill-row .badge {
		cursor: pointer;
	}

	.pill-row cosmoz-dropdown-next {
		flex: none;
	}

	.add {
		display: inline-flex;
		align-items: center;
		gap: var(--cz-spacing);
		margin: 0;
		padding: calc(var(--cz-spacing) * 0.75) calc(var(--cz-spacing) * 2.5);
		border: 0;
		border-radius: var(--cz-radius-full);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
		background: transparent;
		color: var(--cz-color-text-tertiary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		white-space: nowrap;
		cursor: pointer;
		transition: background 0.1s;
	}

	.add svg {
		color: var(--cz-color-fg-quaternary);
	}

	.add:hover,
	:host([opened]) .add {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary);
	}

	.add:focus-visible {
		outline: none;
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-focus-ring);
	}

	.add[disabled] {
		display: none;
	}

	.panel {
		box-sizing: border-box;
		width: calc(var(--cz-spacing) * 72);
		max-width: calc(100vw - var(--cz-spacing) * 4);
		background: var(--cz-color-bg-primary);
		border-radius: var(--cz-radius-lg);
		box-shadow:
			0 0 0 1px var(--cz-color-border-secondary),
			var(--cz-shadow-lg);
		overflow: hidden;
	}

	.search::part(wrap) {
		border-radius: 0;
		background: transparent;
		box-shadow: inset 0 -1px 0 var(--cz-color-border-secondary);
	}

	.search svg {
		color: var(--cz-color-fg-quaternary);
	}

	.panel cosmoz-listbox {
		margin-top: 0;
		border-radius: 0;
		box-shadow: none;
	}
`,ue=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},xe=e=>e.type||e.toString(),$e=e=>Array.isArray(e)?e:[e],eo=(e,t)=>{const o=$e(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:$e(r).map(xe),handle:s}));return(r=e,s)=>{const c=n.find(i=>i.actions.includes(xe(s)));return c?c.handle(r,s):r}},j={pending:"pending",rejected:"rejected",resolved:"resolved"},Me={error:void 0,result:void 0,state:j.pending},Be=ue(j.pending),Ye=ue(j.resolved,e=>({result:e})),Ne=ue(j.rejected,e=>({error:e})),to=eo(Me,[[Be,()=>({error:void 0,result:void 0,state:j.pending})],[Ye,(e,{result:t})=>({error:void 0,result:t,state:j.resolved})],[Ne,(e,{error:t})=>({error:t,result:void 0,state:j.rejected})]]),oo=e=>{const[{error:t,result:o,state:n},r]=ct(to,Me);return k(()=>{if(!e)return;let s=!1;return r(Be()),e.then(c=>!s&&r(Ye(c)),c=>!s&&r(Ne(c))),()=>{s=!0}},[e]),[o,t,n]},ke=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),no=(e,t,o)=>{if(!t)return e;const n=ke(t.toLowerCase()),r=[];for(const s of e){const i=ke(o(s).toLowerCase()).indexOf(n);i<0||r.push({item:s,index:i})}return r.sort((s,c)=>s.index-c.index).map(({item:s})=>s)},ro=e=>e===!1||e==null?[]:e,so=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Ee=[],ao=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},io=(e,t,o)=>$(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),co=({value:e,text:t,mode:o,onChange:n,onText:r,onSelect:s,limit:c,min:i,source:a,textProperty:d,textual:p,valueProperty:h,keepOpened:b,keepQuery:g,preserveOrder:y,defaultIndex:C,externalSearch:m,disabled:z,lazyOpen:D})=>{const O=c!=null?Number(c):void 0,P=i!=null?Number(i):void 0,L=o==="select",q=Y(()=>(p??ut)(d),[p,d]),E=Ae(),[w,T]=le("opened",!1),F=!t,S=Y(()=>t?.trim(),[t]),H=io(E,r,"text"),X=$(x=>{n?.(x,()=>T(!1));const U=L?x[0]:x;so(E,"value",U)},[n]),[ne,Ue]=de([]),Q=!!(D&&!S),W=Y(()=>Q?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:S,active:w}):a).then(ro),[a,w,S,Q]),I=Y(()=>se(e),[e]);k(()=>W.then(Ue),[W]),ht({activity:lt,callback:()=>{const x=se(I);x.length>(P??0)&&X(x.slice(0,-1))},check:()=>!z&&F&&E.matches(":focus-within"),element:()=>E},[]),k(()=>{!w&&!g&&H("")},[w,g]),k(()=>{E.toggleAttribute("opened",!!w)},[w]);const M=dt({onText:H,onChange:X,value:I,limit:O,min:P,keepQuery:g,keepOpened:b,setOpened:T,onSelect:s,valueProperty:h}),[,,Ze]=oo(W);return{limit:O,opened:w,setOpened:T,query:S,textual:q,value:I,source$:W,loading:Ze==="pending",items:Y(()=>{if(!w||Q)return Ee;const x=y?ne:[...I,...ae(I,ie(h))(ne)];return m?x:no(x,S,q)},[ne,w,S,q,F,I,y,h,m,Q]),onToggle:$(x=>{z||T(x.newState==="open")},[z]),onText:$(x=>{if(z)return;const U=x.target.value;U&&O===1&&I.length>0&&X([]),H(U),T(!0)},[z,H,T,O,I,X]),onSelect:$(x=>{if(z)return;M.onSelect?.(x,M);const{onChange:U,onText:Ve,limit:Ge,min:Ke,value:Xe,keepQuery:Qe,keepOpened:We,setOpened:Je,valueProperty:et}=M;Qe||Ve(""),We||Je(!1);const J=se(Xe),re=ie(et),he=J.some(tt=>re(tt)===re(x));he&&J.length===Ke||U((he?ae(x,re)(J):[...J,x]).slice(-Ge))},[z,M]),onDeselect:$(x=>{z||M.onChange(ae(x,ie(M.valueProperty))(M.value))},[z,M]),defaultIndex:S!==void 0&&S?.length>0?0:C}},lo=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const d of t)d.hidden=!1;const n=e.shadowRoot.querySelector(".pill-row"),r=n?.querySelector("cosmoz-dropdown-next"),s=r?r.getBoundingClientRect().width+48:24,c=(n??e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control"))?.getBoundingClientRect();let i;for(i=0;i<t.length;i++){const p=t[i].getBoundingClientRect();if(!(p.x+p.width<=c.x+c.width-s))break}const a=t.length-i;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1,o.title=Array.from(t).slice(i).map(d=>d.title||d.textContent?.trim()).join(", ");i<t.length;i++)t[i].hidden=!0},po=({value:e,opened:t,wrap:o,limit:n})=>{const r=Ae(),s=!(o||n===1)&&e.length>0,c=Y(()=>ao(()=>lo(r)),[]),[i,a]=de(0);ge(()=>{if(!s)return;const d=r.shadowRoot.querySelector(".pill-row")??r.shadowRoot.querySelector("cosmoz-input"),p=new ResizeObserver(h=>{a(h[0].contentRect.width)});return p.observe(d),()=>p.disconnect()},[s]),ge(()=>s?c():void 0,[s,i,t,e])},uo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),ho=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,_e=()=>u`<slot name="no-result">
		<span class="no-result">${Ce("No results found")}</span>
	</slot>`,go=e=>{const{opened:t,setOpened:o,disabled:n,label:r,placeholder:s,searchPlaceholder:c,text:i,onText:a,onToggle:d,onDeselect:p,value:h,min:b,textual:g,chipRenderer:y,items:C,loading:m}=e;return u`<div
		class="pill-row"
		part="row"
		@click=${z=>z.target.closest?.(".badge")&&o(!0)}
	>
		${Ie({value:h,min:b,onDeselect:p,textual:g,disabled:n,chipRenderer:y,interactiveBadge:!0})}
		<cosmoz-dropdown-next
			?disabled=${n}
			.opened=${t}
			@dropdown-toggle=${d}
			part="dropdown"
		>
			<button
				slot="button"
				class="add"
				part="add"
				type="button"
				?disabled=${n}
				aria-haspopup="listbox"
				aria-expanded=${t?"true":"false"}
			>
				${zt({width:"12",height:"12"})}
				<span>${s??r}</span>
			</button>
			<div class="panel" part="panel">
				<cosmoz-input
					class="search"
					part="search"
					autofocus
					compact
					.label=${r??s}
					.placeholder=${c??Ce("Search")}
					.value=${K(i)}
					@value-changed=${a}
					autocomplete="off"
				>
					${wt({slot:"prefix",width:"16",height:"16"})}
				</cosmoz-input>
				${f(t,()=>Se({...e,items:C,multi:!0,checkmark:!0},f(m,()=>u`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>f(i&&C.length===0,()=>_e()))))}
			</div>
		</cosmoz-dropdown-next>
	</div>`},mo=e=>{const{variant:t,opened:o,invalid:n,errorMessage:r,hint:s,label:c,placeholder:i,compact:a,required:d,disabled:p,textual:h,text:b,onText:g,onToggle:y,onDeselect:C,value:m,limit:z,min:D,showSingle:O,items:P,source$:L,loading:q,chipRenderer:E,mode:w}=e,T=z===1,F=T&&m?.[0]!=null,S=q||P.length>0||b!=null&&b.length>0;return u`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${p}
			.opened=${o}
			@dropdown-toggle=${y}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${c}
				.placeholder=${F?void 0:i}
				hint=${v(s)}
				variant=${v(t)}
				?compact=${a}
				?disabled=${p}
				?required=${d}
				?invalid=${be([L,n],()=>ye(L.then(()=>n,()=>!0),n))}
				.errorMessage=${be([L,r],()=>ye(L.then(()=>r,H=>H.message),r))}
				.value=${K(b)}
				@value-changed=${g}
				autocomplete="off"
				exportparts=${uo}
				?data-one=${T}
				?data-single=${F}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${f(w==="select",()=>ft({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Ie({value:m,min:D,onDeselect:C,textual:h,disabled:p,chipRenderer:E})}
			</cosmoz-input>

			${f(ho({opened:o,isSingle:F,showSingle:O,hasResultsOrQuery:S}),()=>Se({...e,items:P,multi:!T},f(q,()=>u`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>f(b!=null&&b.length>0&&P.length===0,()=>_e()))))}
		</cosmoz-dropdown-next>`},je=e=>{const t={...e,...co(e)};return po(t),e.variant==="pill"?go(t):mo(t)},De=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],vo=e=>{const{onChange:t,onText:o,mode:n,...r}=e,s=n==="select",[c,i]=le("value");return k(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),je({...r,...s&&{limit:1,min:1,showSingle:!0},mode:n,value:c,onChange:$((a,...d)=>{i(s?a[0]:a),t?.(a,...d)},[t,s]),onText:$(a=>{e.text=a,o?.(a)},[o])})},Fe=[gt(Jt)],He={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",A(je,{observedAttributes:De,styleSheets:Fe,shadowRootInit:He}));customElements.define("cosmoz-autocomplete",A(vo,{observedAttributes:De,styleSheets:Fe,shadowRootInit:He}));export{je as A,Jt as a,De as b,ft as c,v as o,wt as s};
