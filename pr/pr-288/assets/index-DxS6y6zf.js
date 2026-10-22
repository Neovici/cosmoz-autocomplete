import{A as G,s as se,c as O,d as P,b as h,w as K,f as k,u as ae,a as x,r as st,E as D,p as at,D as it,g as ue,e as j,h as ct,H as lt,i as me,n as dt,j as pt,k as ut,l as ht,m as fe,t as Se}from"./iframe-hEiTz7EJ.js";import{n as w,u as F,a as V,e as he,i as Re,t as Z,p as ne,f as gt,s as vt,b as Oe,c as le,d as mt,w as de,l as Pe,g as ft}from"./index-Bbs7n9LB.js";const m=e=>e??G,X=se(O`
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
`),u=e=>`calc(var(--cz-spacing) * ${e})`,bt=O`
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
		gap: ${u(1.5)};
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
		padding: ${u(.5)} ${u(2)};
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
		padding: ${u(.5)} ${u(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${u(.5)} ${u(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${u(1)};
	}

	:host([size='lg']) .badge {
		padding: ${u(1)} ${u(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${u(.5)} ${u(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${u(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${u(1)} ${u(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${u(2)};
		height: ${u(2)};
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
		padding: ${u(.5)} ${u(2.5)} ${u(.5)} ${u(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${u(.5)} ${u(2)} ${u(.5)} ${u(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${u(1)} ${u(3)} ${u(1)} ${u(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${u(.5)} ${u(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${u(.5)} ${u(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${u(1)} ${u(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${u(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${u(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${u(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${u(3)};
		height: ${u(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${u(3)};
		height: ${u(3)};
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
`,zt=()=>h`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",P(zt,{styleSheets:[X,bt]}));const wt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
  <svg
    slot=${m(e)}
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
    style=${m(s)}
  >
    ${w(t,()=>K`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,yt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
  <svg
    slot=${m(e)}
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
    style=${m(s)}
  >
    ${w(t,()=>K`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,xt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
  <svg
    slot=${m(e)}
    class=${`plus-icon ${o??""}`}
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
    style=${m(s)}
  >
    ${w(t,()=>K`<title>${t}</title>`)}
    <path d="M12 5v14m-7-7h14" />
  </svg>
`,$t=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
  <svg
    slot=${m(e)}
    class=${`search-md-icon ${o??""}`}
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
    style=${m(s)}
  >
    ${w(t,()=>K`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`,kt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
  <svg
    slot=${m(e)}
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
    style=${m(s)}
  >
    ${w(t,()=>K`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,_=e=>`calc(var(--cz-spacing) * ${e})`,Et=O`
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
		width: ${_(2.5)};
		height: ${_(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${_(3)};
		height: ${_(3)};
	}

	:host([size='lg']) .close svg {
		width: ${_(3.5)};
		height: ${_(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${_(3.5)};
		height: ${_(3.5)};
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
`,Ct=e=>{const{color:t,size:o,disabled:r,removable:n}=e,s=()=>{r||e.dispatchEvent(new CustomEvent("remove"))};return h`<cosmoz-badge
		color=${m(t)}
		size=${m(o)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${w(n,()=>h` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${c=>c.preventDefault()}
					@click=${s}
				>
					${kt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",P(Ct,{observedAttributes:["color","size","disabled","removable"],styleSheets:[X,Et]}));const Le=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),At=({host:e,popoverRef:t,disabled:o,openOnHover:r,openOnFocus:n,open:s,close:c})=>{const l=F(),i=()=>clearTimeout(l.current),a=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const p=t.current;r&&(e.matches(":hover")||p?.matches(":hover"))||e.matches(":focus-within")||p?.matches(":focus-within")||c()},100)},d=()=>{o||(i(),s())};return k(()=>{if(!(!r||o))return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",a),()=>{i(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",a)}},[r,o,e]),k(()=>{if(!(!n||o))return e.addEventListener("focusin",d),e.addEventListener("focusout",a),()=>{i(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",a)}},[n,o,e]),{scheduleClose:a,cancelClose:i}},Tt=e=>{if(e.newState!=="open")return;const r=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of r){const s=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},St=O`
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
`,Rt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:s}=e,c=F(),[l,i]=ae("opened",!1),a=x(()=>{o||(i(!0),c.current?.showPopover?.())},[o]),d=x(()=>{i(!1),c.current?.hidePopover?.()},[]),p=x(()=>{if(o)return;c.current?.matches(":popover-open")?d():a()},[o]);k(()=>{const v=c.current;v&&(l?v.showPopover?.():v.hidePopover?.())},[l]),k(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:f,cancelClose:g}=At({host:e,popoverRef:c,disabled:o,openOnHover:n,openOnFocus:s,open:a,close:d}),z=s?a:p,$=x(v=>{Tt(v),i(v.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:v.newState,oldState:v.oldState,composed:!0}))},[]);return h`
		<slot name="button" @click=${z}></slot>
		${o&&r?h`<slot></slot>`:h`<div
					popover
					style="position-area: ${t}"
					@toggle=${$}
					@select=${d}
					@focusout=${f}
					@focusin=${g}
					${V(v=>v&&(c.current=v))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",P(Rt,{styleSheets:[St],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Q=he(class extends Re{constructor(e){if(super(e),e.type!==Z.PROPERTY&&e.type!==Z.ATTRIBUTE&&e.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!st(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===D||t===G)return t;const o=e.element,r=e.name;if(e.type===Z.PROPERTY){if(t===o[r])return D}else if(e.type===Z.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return D}else if(e.type===Z.ATTRIBUTE&&o.getAttribute(r)===t+"")return D;return at(e),t}}),Ot=O`
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
`;customElements.define("cosmoz-tooltip-content",P(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[X,Ot]}));const pe=se(O`
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
`),be=(e,t,o)=>it(h`<cosmoz-tooltip-content>
			${w(t,()=>h`<strong slot="heading">${t}</strong>`)}
			${w(o,()=>h`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),Pt=(e,t)=>{const{for:o,heading:r,description:n,placement:s="top",delay:c=300,disabled:l=!1}=t,i=F(),d=!!(r||n)&&!l;k(()=>{if(!o||!d)return;const p=e.getRootNode(),f=p.adoptedStyleSheets??[];f.includes(pe)||(p.adoptedStyleSheets=[...f,pe]);const g=document.createElement("div");g.setAttribute("popover","manual"),g.setAttribute("role","tooltip"),g.classList.add("cosmoz-tooltip-popover"),e.after(g),i.current=g,be(g,r,n);const z=`[name="${o}"]`,$=`--tooltip-anchor-${o}`;let v;const b=E=>{l||(clearTimeout(v),E.style.anchorName=$,g.style.positionAnchor=$,g.style.positionArea=s,v=window.setTimeout(()=>g.showPopover(),c))},L=()=>{clearTimeout(v),g.hidePopover()},q=E=>{const C=E.target.closest?.(z);C&&b(C)},A=E=>{const C=E.target.closest?.(z);if(!C)return;const R=E.relatedTarget;R&&C.contains(R)||L()},S=E=>{const C=E.target.closest?.(z);C&&b(C)},I=E=>{E.target.closest?.(z)&&L()};return p.addEventListener("pointerover",q),p.addEventListener("pointerout",A),p.addEventListener("focusin",S),p.addEventListener("focusout",I),()=>{clearTimeout(v),p.removeEventListener("pointerover",q),p.removeEventListener("pointerout",A),p.removeEventListener("focusin",S),p.removeEventListener("focusout",I),g.hidePopover(),g.remove(),i.current=void 0}},[o,s,c,d]),k(()=>{!o||!i.current||be(i.current,r,n)},[r,n,o]),k(()=>{!l||!i.current||i.current.hidePopover()},[l])},Lt=e=>{const[t,o]=ue(!1);return k(()=>{const r=e.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[e.current]),t},qt=O`
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
`,It=e=>{const{heading:t,description:o,for:r,placement:n="top",delay:s=300,disabled:c=!1}=e,l=F(),i=F(),a=F(),d=Lt(a),f=!!(t||o||d)&&!c,g=x(()=>{f&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{l.current?.showPopover()},s))},[s,f]);k(()=>{c&&(clearTimeout(i.current),l.current?.hidePopover())},[c]);const z=x(()=>{clearTimeout(i.current),l.current?.hidePopover()},[]);return k(()=>{if(r)return;const $=v=>{const b=v.relatedTarget;b&&e.contains(b)||z()};return e.addEventListener("pointerover",g),e.addEventListener("pointerout",$),()=>{e.removeEventListener("pointerover",g),e.removeEventListener("pointerout",$)}},[r,g,z]),Pt(e,{for:r,heading:t,description:o,placement:n,delay:s,disabled:c}),r?G:f?h`
		<slot @focusin=${g} @focusout=${z}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${V(l)}
		>
			<cosmoz-tooltip-content>
				${w(t,()=>h`<strong slot="heading">${t}</strong>`)}
				${w(o,()=>h`<p slot="description">${o}</p>`)}
				<slot name="content" ${V(a)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:h`
			<slot></slot>
			<slot name="content" ${V(a)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",P(It,{styleSheets:[X,pe,qt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const qe=(e,{label:t,labelFor:o="input",hint:r,invalid:n,errorMessage:s,compact:c,required:l})=>h`
		<!-- label: visually hidden in compact mode -->
		${w(t,()=>h`<label
					for=${m(o)}
					part="label"
					class=${m(c?"sr-only":void 0)}
					>${t}
					${w(l&&!c,()=>h`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${w(c&&n&&s,()=>h`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${yt({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: read with the field while valid; visually hidden in compact -->
		${w(r&&!n,()=>h`<span
					class=${c?"hint sr-only":"hint"}
					part="hint"
					id="hint"
					>${r}</span
				>`)}
		<!-- error: replaces hint when invalid; visually hidden in compact -->
		${w(n&&s,()=>h`<span
					class=${c?"error sr-only":"error"}
					part="error"
					id="error"
					>${s}</span
				>`)}
	`,Ie=["autocomplete","readonly","disabled","maxlength","invalid"],Me=Le`
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
`,Mt=e=>j(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Bt=ct(class extends lt{values;constructor(e,t,o,r){super(e,t),Object.assign(t.host,o),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Yt=/([A-Z])/gu,ze=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Yt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Be=e=>{const t=F(void 0),o=x(i=>t.current=i,[]),r=e.shadowRoot,n=x(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=x(i=>ze(e,"value",i.target.value),[]),c=x(i=>ze(e,"focused",i.type==="focus"),[]),l=x(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Bt({validate:l},[l]),k(()=>{const i=a=>{a.composedPath()[0]?.closest?.("input, textarea, label")||(a.preventDefault(),t.current?.focus())};return r.addEventListener("mousedown",i),()=>r.removeEventListener("mousedown",i)},[]),{onChange:n,onFocus:c,onInput:s,onRef:o}},Nt=({placeholder:e})=>e||" ",_t=(e,t)=>t??(e==="date"?"9999-12-31":void 0),jt=["type","variant","size","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ie,"aria-label"],Dt=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:n,value:s,readonly:c,disabled:l,min:i,max:a,step:d,maxlength:p,required:f,hint:g,invalid:z,errorMessage:$}=e,{onChange:v,onFocus:b,onInput:L,onRef:q}=Be(e),A=Mt(r),S=g&&!z,I=z&&$,E=I&&"error"||S&&"hint"||void 0;return e.toggleAttribute("has-value",!!s),qe(h`
			<input
				${V(q)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${m(o)}
				autocomplete=${m(n)}
				placeholder=${Nt({placeholder:e.placeholder})}
				?readonly=${c}
				aria-disabled=${l?"true":"false"}
				aria-label=${m(e.getAttribute("aria-label"))}
				?disabled=${l}
				?required=${f}
				aria-invalid=${m(z?"true":void 0)}
				aria-describedby=${m(E)}
				.value=${Q(s??"")}
				maxlength=${m(p)}
				@beforeinput=${A}
				@input=${L}
				@change=${v}
				@focus=${b}
				@blur=${b}
				min=${m(i)}
				max=${m(_t(t,a))}
				step=${m(d)}
			/>
		`,e)};customElements.define("cosmoz-input",P(Dt,{observedAttributes:jt,styleSheets:[se(Me)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const we=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Ft=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Ht=e=>{const{value:t,maxRows:o}=e,r=j(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>Ft(r(),o),[o,r]),k(()=>we(r()),[r,t]),k(()=>{const n=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>we(n)));return s.observe(n),()=>s.unobserve(n)},[r])},Ut=["rows","placeholder","label","hint","compact","required",...Ie],Zt=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:n,disabled:s,required:c,hint:l,invalid:i,errorMessage:a,rows:d,cols:p,maxlength:f}=e,{onChange:g,onFocus:z,onInput:$,onRef:v}=Be(e);Ht(e);const b=l&&!i,L=i&&a,q=L&&"error"||b&&"hint"||void 0;return qe(h`
			<textarea id="input" part="input"
				${V(v)}
				autocomplete=${m(t)}
				placeholder=${r||" "}
				rows=${d??1} cols=${m(p)}
				?readonly=${n} aria-disabled=${s?"true":"false"}
				?disabled=${s} ?required=${c}
				aria-invalid=${m(i?"true":void 0)}
				aria-describedby=${m(q)}
				.value=${Q(o??"")} maxlength=${m(f)} @input=${$}
				@change=${g} @focus=${z} @blur=${z}>`,e)};customElements.define("cosmoz-textarea",P(Zt,{observedAttributes:Ut,styleSheets:[se(Me)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Vt=e=>{const{label:t,value:o,disabled:r,error:n}=e,s=x(c=>e.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Q(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${w(t,()=>h`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${w(n,c=>h`<div class="failure">${c}</div>`)} `},Gt=O`
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
`,Kt=O`
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
`;customElements.define("cosmoz-toggle",P(Vt,{styleSheets:[Kt,Gt],observedAttributes:["label","disabled","error"]}));const Xt=e=>{const t=a=>a.label!=null?me(a.label,a.value):typeof a.value=="string"?a.value:"",o=(e.options??[]).map(a=>typeof a=="object"&&a!=null&&"value"in a?a:{value:a}),[r,n]=ae("value"),s=a=>ne(e.valueProperty)(a),c=s(r),l=a=>n(a.value),i=a=>{if(a.key!=="ArrowRight"&&a.key!=="ArrowLeft")return;a.preventDefault();const d=o.map(v=>s(v.value)),p=d.findIndex(v=>v===c);if(p===-1)return;const f=a.key==="ArrowRight"?1:-1,g=o[(p+f+d.length)%d.length];n(g.value),a.currentTarget.children[(p+f+d.length)%d.length]?.focus()};return h`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??""}
		@keydown=${i}
	>
		${o.map(a=>{const d=c===s(a.value),p=t(a);return h`<button
				type="button"
				role="radio"
				aria-checked=${d?"true":"false"}
				?disabled=${a.disabled||e.disabled}
				title=${a.title!=null?me(a.title,a.value):G}
				part=${d?"option selected-option":"option"}
				class=${d?"option selected":"option"}
				@click=${()=>l(a)}
				tabindex=${d?"0":"-1"}
			>
				${a.icon?.({width:"16",height:"16"})}${p}
			</button>`})}
	</div>`},Qt=O`
	:host {
		display: inline-flex;
	}
`,Wt=O`
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
`;customElements.define("cosmoz-toggle-group",P(Xt,{styleSheets:[X,Qt,Wt],observedAttributes:["label","disabled","value-property"]}));const Jt={},ye=he(class extends Re{constructor(){super(...arguments),this.ot=Jt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((r,n)=>r===this.ot[n]))return D}else if(this.ot===t)return D;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class eo{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class to{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const xe=e=>!dt(e)&&typeof e.then=="function",$e=1073741823;class oo extends gt{constructor(){super(...arguments),this._$Cwt=$e,this._$Cbt=[],this._$CK=new eo(this),this._$CX=new to}render(...t){return t.find(o=>!xe(o))??D}update(t,o){const r=this._$Cbt;let n=r.length;this._$Cbt=o;const s=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!xe(i))return this._$Cwt=l,i;l<n&&i===r[l]||(this._$Cwt=$e,n=0,Promise.resolve(i).then(async a=>{for(;c.get();)await c.get();const d=s.deref();if(d!==void 0){const p=d._$Cbt.indexOf(i);p>-1&&p<d._$Cwt&&(d._$Cwt=p,d.setValue(a))}}))}return D}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ke=he(oo),ro=({content:e,onClear:t,disabled:o,className:r="chip",hidden:n,slot:s})=>h`<cosmoz-tag
		class=${m(r)}
		slot=${m(s)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${m(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Ye=({value:e,min:t=0,onDeselect:o,textual:r,disabled:n,chipRenderer:s=ro,interactiveBadge:c})=>[...e.filter(Boolean).map(l=>s({item:l,content:r(l),onClear:e.length>t&&(()=>o(l)),disabled:n,slot:"control"})),s({item:null,content:h`<span></span>`,className:"badge",disabled:!c,slot:"control",hidden:!0})],no=O`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",P(()=>G,{styleSheets:[no]}));const so=Le`
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

	:host(:not([variant='inline'], [variant='pill'])) cosmoz-listbox {
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
		border-radius: 0;
		box-shadow: none;
	}
`,ge=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),o),o)},Ee=e=>e.type||e.toString(),Ce=e=>Array.isArray(e)?e:[e],ao=(e,t)=>{const o=Ce(t),r=(o.every(Array.isArray)?o:[o]).map(([n,s])=>({actions:Ce(n).map(Ee),handle:s}));return(n=e,s)=>{const c=r.find(l=>l.actions.includes(Ee(s)));return c?c.handle(n,s):n}},H={pending:"pending",rejected:"rejected",resolved:"resolved"},Ne={error:void 0,result:void 0,state:H.pending},_e=ge(H.pending),je=ge(H.resolved,e=>({result:e})),De=ge(H.rejected,e=>({error:e})),io=ao(Ne,[[_e,()=>({error:void 0,result:void 0,state:H.pending})],[je,(e,{result:t})=>({error:void 0,result:t,state:H.resolved})],[De,(e,{error:t})=>({error:t,result:void 0,state:H.rejected})]]),co=e=>{const[{error:t,result:o,state:r},n]=pt(io,Ne);return k(()=>{if(!e)return;let s=!1;return n(_e()),e.then(c=>!s&&n(je(c)),c=>!s&&n(De(c))),()=>{s=!0}},[e]),[o,t,r]},Ae=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),lo=(e,t,o)=>{if(!t)return e;const r=Ae(t.toLowerCase()),n=[];for(const s of e){const l=Ae(o(s).toLowerCase()).indexOf(r);l<0||n.push({item:s,index:l})}return n.sort((s,c)=>s.index-c.index).map(({item:s})=>s)},po=e=>e===!1||e==null?[]:e,uo=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Te=[],ho=e=>(...t)=>{let o;const r=()=>{o&&cancelAnimationFrame(o)};return r(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),r},go=(e,t,o)=>x(r=>{t?.(r),e.dispatchEvent(new CustomEvent(o,{detail:r}))},[t]),vo=({value:e,text:t,mode:o,onChange:r,onText:n,onSelect:s,limit:c,min:l,source:i,textProperty:a,textual:d,valueProperty:p,keepOpened:f,keepQuery:g,preserveOrder:z,defaultIndex:$,externalSearch:v,disabled:b,lazyOpen:L,variant:q})=>{const A=c!=null?Number(c):void 0,S=l!=null?Number(l):void 0,I=o==="select",E=q==="pill",C=j(()=>(d??vt)(a),[d,a]),R=Oe(),[T,M]=ae("opened",!1),W=!t,B=j(()=>t?.trim(),[t]),J=go(R,n,"text"),ee=x(y=>{r?.(y,()=>M(!1));const U=I?y[0]:y;uo(R,"value",U)},[r]),[ie,Ge]=ue([]),te=!!(L&&!B),oe=j(()=>te?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:B,active:T}):i).then(po),[i,T,B,te]),Y=j(()=>le(e),[e]);k(()=>oe.then(Ge),[oe]),mt({activity:ut,callback:()=>{const y=le(Y);y.length>(S??0)&&ee(y.slice(0,-1))},check:()=>!b&&!E&&W&&R.matches(":focus-within"),element:()=>R},[]),k(()=>{!T&&!g&&J("")},[T,g]),k(()=>{R.toggleAttribute("opened",!!T)},[T]);const N=ht({onText:J,onChange:ee,value:Y,limit:A,min:S,keepQuery:g,keepOpened:f,setOpened:M,onSelect:s,valueProperty:p}),[,,Ke]=co(oe);return{limit:A,opened:T,setOpened:M,query:B,textual:C,value:Y,source$:oe,loading:Ke==="pending",items:j(()=>{if(!T||te)return Te;const y=z?ie:[...Y,...de(Y,ne(p))(ie)];return v?y:lo(y,B,C)},[ie,T,B,C,W,Y,z,p,v,te]),onToggle:x(y=>{b||M(y.newState==="open")},[b]),onText:x(y=>{if(b)return;const U=y.target.value;!E&&U&&A===1&&Y.length>0&&ee([]),J(U),M(!0)},[b,J,M,A,Y,ee,E]),onSelect:x(y=>{if(b)return;N.onSelect?.(y,N);const{onChange:U,onText:Xe,limit:Qe,min:We,value:Je,keepQuery:et,keepOpened:tt,setOpened:ot,valueProperty:rt}=N;et||Xe(""),tt||ot(!1);const re=le(Je),ce=ne(rt),ve=re.some(nt=>ce(nt)===ce(y));ve&&re.length===We||U((ve?de(y,ce)(re):[...re,y]).slice(-Qe))},[b,N]),onDeselect:x(y=>{b||N.onChange(de(y,ne(N.valueProperty))(N.value))},[b,N]),defaultIndex:B!==void 0&&B?.length>0?0:$}},mo=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const p of t)p.hidden=!1;const r=e.shadowRoot.querySelector(".pill-row"),n=r?.querySelector("cosmoz-dropdown-next"),s=n?n.getBoundingClientRect().width+8:0,c=(r??e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")).getBoundingClientRect(),l=p=>f=>{const g=f.getBoundingClientRect();return g.x+g.width<=c.x+c.width-p},i=Array.from(t);let a=i.length;if(!i.every(l(n?s:24))){const p=l(n?s+48:24);a=i.findIndex(f=>!p(f))}const d=t.length-a;for(o.querySelector("span").textContent="+"+d.toString(),o.hidden=d<1,o.title=Array.from(t).slice(a).map(p=>p.title||p.textContent?.trim()).join(", ");a<t.length;a++)t[a].hidden=!0},fo=({value:e,opened:t,wrap:o,limit:r})=>{const n=Oe(),s=!(o||r===1)&&e.length>0,c=j(()=>ho(()=>mo(n)),[]),[l,i]=ue(0);fe(()=>{if(!s)return;const a=n.shadowRoot.querySelector(".pill-row")??n.shadowRoot.querySelector("cosmoz-input"),d=new ResizeObserver(p=>{i(p[0].contentRect.width)});return d.observe(a),()=>d.disconnect()},[s]),fe(()=>s?c():void 0,[s,l,t,e])},bo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),zo=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:r})=>!e||t&&!o?!1:r,Fe=()=>h`<slot name="no-result">
		<span class="no-result">${Se("No results found")}</span>
	</slot>`,wo=e=>{if(e.newState!=="closed")return;const t=e.currentTarget;!t.matches(":focus-within")&&document.activeElement!==document.body||t.querySelector(".add")?.focus()},yo=e=>{const{opened:t,setOpened:o,disabled:r,label:n,placeholder:s,searchPlaceholder:c,text:l,onText:i,onToggle:a,onDeselect:d,value:p,min:f,textual:g,chipRenderer:z,items:$,loading:v}=e;return h`<div
		class="pill-row"
		part="row"
		@click=${b=>!r&&b.target.closest?.(".badge")&&o(!0)}
	>
		${Ye({value:p,min:f,onDeselect:d,textual:g,disabled:r,chipRenderer:z,interactiveBadge:!r})}
		<cosmoz-dropdown-next
			?disabled=${r}
			.opened=${t}
			@dropdown-toggle=${b=>{a(b),wo(b)}}
			part="dropdown"
		>
			<button
				slot="button"
				class="add"
				part="add"
				type="button"
				?disabled=${r}
				aria-haspopup="dialog"
				aria-expanded=${t?"true":"false"}
			>
				${xt({width:"12",height:"12"})}
				<span>${s??n}</span>
			</button>
			<div class="panel" part="panel">
				<cosmoz-input
					class="search"
					part="search"
					autofocus
					compact
					.label=${n??s}
					.placeholder=${c??Se("Search")}
					.value=${Q(l)}
					@value-changed=${i}
					autocomplete="off"
				>
					${$t({slot:"prefix",width:"16",height:"16"})}
				</cosmoz-input>
				${w(t,()=>Pe({...e,items:$,multi:!0,checkmark:!0},w(v,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>w(l&&$.length===0,()=>Fe()))))}
				<slot name="footer"></slot>
			</div>
		</cosmoz-dropdown-next>
	</div>`},xo=e=>{const{variant:t,opened:o,invalid:r,errorMessage:n,hint:s,label:c,placeholder:l,compact:i,required:a,disabled:d,textual:p,text:f,onText:g,onToggle:z,onDeselect:$,value:v,limit:b,min:L,showSingle:q,items:A,source$:S,loading:I,chipRenderer:E,mode:C}=e,R=b===1,T=R&&v?.[0]!=null,M=I||A.length>0||f!=null&&f.length>0;return h`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${d}
			.opened=${o}
			@dropdown-toggle=${z}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${c}
				.placeholder=${T?void 0:l}
				hint=${m(s)}
				variant=${m(t)}
				?compact=${i}
				?disabled=${d}
				?required=${a}
				?invalid=${ye([S,r],()=>ke(S.then(()=>r,()=>!0),r))}
				.errorMessage=${ye([S,n],()=>ke(S.then(()=>n,W=>W.message),n))}
				.value=${Q(f)}
				@value-changed=${g}
				autocomplete="off"
				exportparts=${bo}
				?data-one=${R}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${w(C==="select",()=>wt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Ye({value:v,min:L,onDeselect:$,textual:p,disabled:d,chipRenderer:E})}
			</cosmoz-input>

			${w(zo({opened:o,isSingle:T,showSingle:q,hasResultsOrQuery:M}),()=>Pe({...e,items:A,multi:!R},w(I,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>w(f!=null&&f.length>0&&A.length===0,()=>Fe()))))}
		</cosmoz-dropdown-next>`},He=e=>{const t={...e,...vo(e)};return fo(t),e.variant==="pill"?yo(t):xo(t)},Ue=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],$o=e=>{const{onChange:t,onText:o,mode:r,...n}=e,s=r==="select",[c,l]=ae("value");return k(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),He({...n,...s&&{limit:1,min:1,showSingle:!0},mode:r,value:c,onChange:x((i,...a)=>{l(s?i[0]:i),t?.(i,...a)},[t,s]),onText:x(i=>{e.text=i,o?.(i)},[o])})},Ze=[ft(so)],Ve={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",P(He,{observedAttributes:Ue,styleSheets:Ze,shadowRootInit:Ve}));customElements.define("cosmoz-autocomplete",P($o,{observedAttributes:Ue,styleSheets:Ze,shadowRootInit:Ve}));export{He as A,so as a,Ue as b,wt as c,m as o,$t as s};
