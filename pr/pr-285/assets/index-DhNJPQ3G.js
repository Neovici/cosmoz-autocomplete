import{A as Z,s as re,c as C,d as A,b as h,w as he,f as $,u as ne,a as x,r as ot,E as L,p as rt,D as nt,g as ue,e as Y,h as st,H as at,i as be,n as it,j as lt,k as ct,l as dt,m as pt,t as ze}from"./iframe-CSKIzjBh.js";import{n as E,u as D,a as V,e as se,i as Le,t as H,p as oe,f as Pe,s as K,b as ht,c as ut,d as ce,g as gt,w as de,l as vt}from"./index-Qbhibi24.js";const b=e=>e??Z,G=re(C`
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
`),p=e=>`calc(var(--cz-spacing) * ${e})`,mt=C`
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
		gap: ${p(1.5)};
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
		padding: ${p(.5)} ${p(2)};
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
		padding: ${p(.5)} ${p(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${p(.5)} ${p(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${p(1)};
	}

	:host([size='lg']) .badge {
		padding: ${p(1)} ${p(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${p(.5)} ${p(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${p(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${p(1)} ${p(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${p(2)};
		height: ${p(2)};
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
		padding: ${p(.5)} ${p(2.5)} ${p(.5)} ${p(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${p(.5)} ${p(2)} ${p(.5)} ${p(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${p(1)} ${p(3)} ${p(1)} ${p(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${p(.5)} ${p(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${p(.5)} ${p(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${p(1)} ${p(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${p(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${p(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${p(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${p(3)};
		height: ${p(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${p(3)};
		height: ${p(3)};
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
`,ft=()=>h`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",A(ft,{styleSheets:[G,mt]}));const bt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
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
    width=${r}
    height=${n}
    style=${b(s)}
  >
    ${E(t,()=>he`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,zt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
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
    width=${r}
    height=${n}
    style=${b(s)}
  >
    ${E(t,()=>he`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,wt=({slot:e,title:t,className:o,width:r="24",height:n="24",styles:s}={})=>h`
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
    width=${r}
    height=${n}
    style=${b(s)}
  >
    ${E(t,()=>he`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,N=e=>`calc(var(--cz-spacing) * ${e})`,yt=C`
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
		width: ${N(2.5)};
		height: ${N(2.5)};
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
`,xt=e=>{const{color:t,size:o,disabled:r,removable:n}=e,s=()=>{r||e.dispatchEvent(new CustomEvent("remove"))};return h`<cosmoz-badge
		color=${b(t)}
		size=${b(o)}
		?disabled=${r}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${E(n,()=>h` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${l=>l.preventDefault()}
					@click=${s}
				>
					${wt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",A(xt,{observedAttributes:["color","size","disabled","removable"],styleSheets:[G,yt]}));const X=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),$t=({host:e,popoverRef:t,disabled:o,openOnHover:r,openOnFocus:n,open:s,close:l})=>{const c=D(),i=()=>clearTimeout(c.current),a=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const u=t.current;r&&(e.matches(":hover")||u?.matches(":hover"))||e.matches(":focus-within")||u?.matches(":focus-within")||l()},100)},d=()=>{o||(i(),s())};return $(()=>{if(!(!r||o))return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",a),()=>{i(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",a)}},[r,o,e]),$(()=>{if(!(!n||o))return e.addEventListener("focusin",d),e.addEventListener("focusout",a),()=>{i(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",a)}},[n,o,e]),{scheduleClose:a,cancelClose:i}},kt=e=>{if(e.newState!=="open")return;const r=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const n of r){const s=n.matches("[autofocus]")?n:n.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},Et=C`
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
`,At=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:r,openOnHover:n,openOnFocus:s}=e,l=D(),[c,i]=ne("opened",!1),a=x(()=>{o||(i(!0),l.current?.showPopover?.())},[o]),d=x(()=>{i(!1),l.current?.hidePopover?.()},[]),u=x(()=>{if(o)return;l.current?.matches(":popover-open")?d():a()},[o]);$(()=>{const g=l.current;g&&(c?g.showPopover?.():g.hidePopover?.())},[c]),$(()=>{e.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:m,cancelClose:v}=$t({host:e,popoverRef:l,disabled:o,openOnHover:n,openOnFocus:s,open:a,close:d}),k=s?a:u,T=x(g=>{kt(g),i(g.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return h`
		<slot name="button" @click=${k}></slot>
		${o&&r?h`<slot></slot>`:h`<div
					popover
					style="position-area: ${t}"
					@toggle=${T}
					@select=${d}
					@focusout=${m}
					@focusin=${v}
					${V(g=>g&&(l.current=g))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",A(At,{styleSheets:[Et],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ae=se(class extends Le{constructor(e){if(super(e),e.type!==H.PROPERTY&&e.type!==H.ATTRIBUTE&&e.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ot(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===L||t===Z)return t;const o=e.element,r=e.name;if(e.type===H.PROPERTY){if(t===o[r])return L}else if(e.type===H.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return L}else if(e.type===H.ATTRIBUTE&&o.getAttribute(r)===t+"")return L;return rt(e),t}}),Tt=C`
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
`;customElements.define("cosmoz-tooltip-content",A(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[G,Tt]}));const pe=re(C`
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
`),we=(e,t,o)=>nt(h`<cosmoz-tooltip-content>
			${E(t,()=>h`<strong slot="heading">${t}</strong>`)}
			${E(o,()=>h`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),Ct=(e,t)=>{const{for:o,heading:r,description:n,placement:s="top",delay:l=300,disabled:c=!1}=t,i=D(),d=!!(r||n)&&!c;$(()=>{if(!o||!d)return;const u=e.getRootNode(),m=u.adoptedStyleSheets??[];m.includes(pe)||(u.adoptedStyleSheets=[...m,pe]);const v=document.createElement("div");v.setAttribute("popover","manual"),v.setAttribute("role","tooltip"),v.classList.add("cosmoz-tooltip-popover"),e.after(v),i.current=v,we(v,r,n);const k=`[name="${o}"]`,T=`--tooltip-anchor-${o}`;let g;const z=w=>{c||(clearTimeout(g),w.style.anchorName=T,v.style.positionAnchor=T,v.style.positionArea=s,g=window.setTimeout(()=>v.showPopover(),l))},j=()=>{clearTimeout(g),v.hidePopover()},S=w=>{const f=w.target.closest?.(k);f&&z(f)},R=w=>{const f=w.target.closest?.(k);if(!f)return;const O=w.relatedTarget;O&&f.contains(O)||j()},B=w=>{const f=w.target.closest?.(k);f&&z(f)},P=w=>{w.target.closest?.(k)&&j()};return u.addEventListener("pointerover",S),u.addEventListener("pointerout",R),u.addEventListener("focusin",B),u.addEventListener("focusout",P),()=>{clearTimeout(g),u.removeEventListener("pointerover",S),u.removeEventListener("pointerout",R),u.removeEventListener("focusin",B),u.removeEventListener("focusout",P),v.hidePopover(),v.remove(),i.current=void 0}},[o,s,l,d]),$(()=>{!o||!i.current||we(i.current,r,n)},[r,n,o]),$(()=>{!c||!i.current||i.current.hidePopover()},[c])},St=e=>{const[t,o]=ue(!1);return $(()=>{const r=e.current;if(!r)return;const n=()=>{o(r.assignedElements().length>0)};return n(),r.addEventListener("slotchange",n),()=>r.removeEventListener("slotchange",n)},[e.current]),t},Rt=C`
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
`,Ot=e=>{const{heading:t,description:o,for:r,placement:n="top",delay:s=300,disabled:l=!1}=e,c=D(),i=D(),a=D(),d=St(a),m=!!(t||o||d)&&!l,v=x(()=>{m&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{c.current?.showPopover()},s))},[s,m]);$(()=>{l&&(clearTimeout(i.current),c.current?.hidePopover())},[l]);const k=x(()=>{clearTimeout(i.current),c.current?.hidePopover()},[]);return $(()=>{if(r)return;const T=g=>{const z=g.relatedTarget;z&&e.contains(z)||k()};return e.addEventListener("pointerover",v),e.addEventListener("pointerout",T),()=>{e.removeEventListener("pointerover",v),e.removeEventListener("pointerout",T)}},[r,v,k]),Ct(e,{for:r,heading:t,description:o,placement:n,delay:s,disabled:l}),r?Z:m?h`
		<slot @focusin=${v} @focusout=${k}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
			${V(c)}
		>
			<cosmoz-tooltip-content>
				${E(t,()=>h`<strong slot="heading">${t}</strong>`)}
				${E(o,()=>h`<p slot="description">${o}</p>`)}
				<slot name="content" ${V(a)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:h`
			<slot></slot>
			<slot name="content" ${V(a)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",A(Ot,{styleSheets:[G,pe,Rt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ge=(e,{hint:t,label:o,invalid:r,errorMessage:n,compact:s,required:l})=>h`
		<!-- label: hidden in compact mode -->
		${E(!s&&o,()=>h`<label for="input" part="label"
					>${o}
					${E(l,()=>h`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${E(s&&r&&n,()=>h`<cosmoz-tooltip
						placement="top"
						description=${n}
						delay="300"
					>
						${zt({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${E(!s&&t&&!r,()=>h`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${E(!s&&r&&n,()=>h`<span class="error" part="error">${n}</span>`)}
	`,_e=["autocomplete","readonly","disabled","maxlength","invalid"],ve=X`
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
`,Lt=e=>Y(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Pt=st(class extends at{values;constructor(e,t,o,r){super(e,t),Object.assign(t.host,o),this.values=r}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),_t=/([A-Z])/gu,ye=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(_t,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Ie=e=>{const t=D(void 0),o=x(i=>t.current=i,[]),r=e.shadowRoot,n=x(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=x(i=>ye(e,"value",i.target.value),[]),l=x(i=>ye(e,"focused",i.type==="focus"),[]),c=x(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Pt({validate:c},[c]),$(()=>{const i=a=>{a.composedPath()[0]?.closest?.("input, textarea, label")||(a.preventDefault(),t.current?.focus())};return r.addEventListener("mousedown",i),()=>r.removeEventListener("mousedown",i)},[]),{onChange:n,onFocus:l,onInput:s,onRef:o}},It=({placeholder:e})=>e||" ",qt=(e,t)=>t??(e==="date"?"9999-12-31":void 0),Nt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",..._e],Yt=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:n,value:s,readonly:l,disabled:c,min:i,max:a,step:d,maxlength:u,required:m}=e,{onChange:v,onFocus:k,onInput:T,onRef:g}=Ie(e),z=Lt(r);return e.toggleAttribute("has-value",!!s),ge(h`
			<input
				${V(g)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(n)}
				placeholder=${It({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${c?"true":"false"}
				?disabled=${c}
				?required=${m}
				.value=${ae(s??"")}
				maxlength=${b(u)}
				@beforeinput=${z}
				@input=${T}
				@change=${v}
				@focus=${k}
				@blur=${k}
				min=${b(i)}
				max=${b(qt(t,a))}
				step=${b(d)}
			/>
		`,e)};customElements.define("cosmoz-input",A(Yt,{observedAttributes:Nt,styleSheets:[re(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const xe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Dt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Mt=e=>{const{value:t,maxRows:o}=e,r=Y(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Dt(r(),o),[o,r]),$(()=>xe(r()),[r,t]),$(()=>{const n=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>xe(n)));return s.observe(n),()=>s.unobserve(n)},[r])},jt=["rows","placeholder","label","hint","compact","required",..._e],Bt=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:n,disabled:s,rows:l,cols:c,maxlength:i}=e,{onChange:a,onFocus:d,onInput:u,onRef:m}=Ie(e);return Mt(e),ge(h`
			<textarea id="input" part="input"
				${V(m)}
				autocomplete=${b(t)}
				placeholder=${r||" "}
				rows=${l??1} cols=${b(c)}
				?readonly=${n} ?aria-disabled=${s} ?disabled=${s}
				.value=${ae(o??"")} maxlength=${b(i)} @input=${u}
				@change=${a} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",A(Bt,{observedAttributes:jt,styleSheets:[re(ve)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ft=e=>{const{label:t,value:o,disabled:r,error:n}=e,s=x(l=>e.dispatchEvent(new CustomEvent("change",{detail:l.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ae(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${E(t,()=>h`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${E(n,l=>h`<div class="failure">${l}</div>`)} `},Ut=C`
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
`,Ht=C`
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
`;customElements.define("cosmoz-toggle",A(Ft,{styleSheets:[Ht,Ut],observedAttributes:["label","disabled","error"]}));const Vt=e=>{const t=a=>a.label!=null?be(a.label,a.value):typeof a.value=="string"?a.value:"",o=(e.options??[]).map(a=>typeof a=="object"&&a!=null&&"value"in a?a:{value:a}),[r,n]=ne("value"),s=a=>oe(e.valueProperty)(a),l=s(r),c=a=>n(a.value),i=a=>{if(a.key!=="ArrowRight"&&a.key!=="ArrowLeft")return;a.preventDefault();const d=o.map(g=>s(g.value)),u=d.findIndex(g=>g===l);if(u===-1)return;const m=a.key==="ArrowRight"?1:-1,v=o[(u+m+d.length)%d.length];n(v.value),a.currentTarget.children[(u+m+d.length)%d.length]?.focus()};return h`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??""}
		@keydown=${i}
	>
		${o.map(a=>{const d=l===s(a.value),u=t(a);return h`<button
				type="button"
				role="radio"
				aria-checked=${d?"true":"false"}
				?disabled=${a.disabled||e.disabled}
				title=${a.title!=null?be(a.title,a.value):Z}
				part=${d?"option selected-option":"option"}
				class=${d?"option selected":"option"}
				@click=${()=>c(a)}
				tabindex=${d?"0":"-1"}
			>
				${a.icon?.({width:"16",height:"16"})}${u}
			</button>`})}
	</div>`},Kt=C`
	:host {
		display: inline-flex;
	}
`,Zt=C`
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
`;customElements.define("cosmoz-toggle-group",A(Vt,{styleSheets:[G,Kt,Zt],observedAttributes:["label","disabled","value-property"]}));const Gt={},$e=se(class extends Le{constructor(){super(...arguments),this.ot=Gt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((r,n)=>r===this.ot[n]))return L}else if(this.ot===t)return L;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Xt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Qt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ke=e=>!it(e)&&typeof e.then=="function",Ee=1073741823;class Jt extends Pe{constructor(){super(...arguments),this._$Cwt=Ee,this._$Cbt=[],this._$CK=new Xt(this),this._$CX=new Qt}render(...t){return t.find(o=>!ke(o))??L}update(t,o){const r=this._$Cbt;let n=r.length;this._$Cbt=o;const s=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!ke(i))return this._$Cwt=c,i;c<n&&i===r[c]||(this._$Cwt=Ee,n=0,Promise.resolve(i).then(async a=>{for(;l.get();)await l.get();const d=s.deref();if(d!==void 0){const u=d._$Cbt.indexOf(i);u>-1&&u<d._$Cwt&&(d._$Cwt=u,d.setValue(a))}}))}return L}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ae=se(Jt),Wt=K(C`
	slot.cz-overflow-band {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		overflow: clip;
	}

	::slotted([overflowing]) {
		visibility: hidden;
	}
`),Te=e=>e.assignedElements({flatten:!0}),eo=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(o=>e.has(o));class to extends Pe{_slot;_onOverflow;#t=new Map;#o;#e;#a=t=>{t.forEach(o=>{const r=o.target;this.#t.set(r,o.boundingClientRect.height>0&&o.intersectionRect.height===0)}),this.#n()};#i=t=>{this.#e?.unobserve(t),this.#e?.observe(t)};#n=()=>{if(!this._slot)return;const t=Te(this._slot);t.forEach(r=>{const n=this.#t.get(r)===!0;n!==r.hasAttribute("overflowing")&&(n?r.setAttribute("overflowing",""):r.removeAttribute("overflowing"))}),this.#t.forEach((r,n)=>{t.includes(n)||(this.#t.delete(n),this.#e?.unobserve(n),n.hasAttribute("overflowing")&&n.removeAttribute("overflowing"))});const o=new Set(t.filter(r=>this.#t.get(r)===!0));eo(this.#o,o)||(this.#o=o,this._onOverflow?.(o))};#r=()=>this.#s();#s=()=>{if(!(!this.#e||!this._slot)){for(const t of Te(this._slot))this.#i(t);this.#n()}};render(t){return L}update(t,[o]){this._onOverflow=o.onOverflow;const r=t.element;return this._slot!==r&&(this._slot?.removeEventListener("slotchange",this.#r),this.#e?.disconnect(),this.#e=void 0,this._slot=r,r.addEventListener("slotchange",this.#r)),this.#e??=new IntersectionObserver(this.#a,{root:this._slot,threshold:[0,1]}),this.#s(),L}disconnected(){this._slot?.removeEventListener("slotchange",this.#r),this._slot=void 0,this.#e?.disconnect(),this.#e=void 0,this.#t.clear(),this.#o=void 0}}const oo=se(to),ro=({content:e,onClear:t,disabled:o,className:r="chip",hidden:n,slot:s})=>h`<cosmoz-tag
		class=${b(r)}
		slot=${b(s)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,no=e=>{const{value:t,min:o=0,wrap:r,variant:n,textual:s,onDeselect:l,disabled:c,chipRenderer:i=ro}=e,[a,d]=ue(0);return h`<cosmoz-selection-row
		.overflow=${{onOverflow:m=>d(m.size)}}
		?data-wrap=${r}
		variant=${b(n)}
	>
		${t.filter(Boolean).map(m=>i({item:m,content:s(m),onClear:t.length>o&&(()=>l(m)),disabled:c,slot:"chips"}))}
		${i({item:null,content:h`<span>${a>0?"+"+a:""}</span>`,className:"badge",disabled:!0,slot:"badge",hidden:a<1})}
	</cosmoz-selection-row>`},so=X`
	:host {
		display: contents;
	}
`,ao=X`
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
`,io=e=>h`<slot
			name="chips"
			class="cz-overflow-band"
			${oo(e.overflow)}
		></slot>
		<slot name="badge"></slot>`;customElements.define("cosmoz-selection-row",A(io,{styleSheets:[K(ao),Wt]}));customElements.define("cosmoz-selection",A(no,{styleSheets:[K(so)]}));const lo=new Set(["Enter"," ","ArrowDown","ArrowUp"]),co=X`
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
`,po=e=>{const{label:t,hint:o,errorMessage:r,invalid:n,placeholder:s,compact:l,required:c,hasValue:i}=e;return $(()=>{const a=d=>{d.target!==e||e.hasAttribute("disabled")||d.defaultPrevented||!lo.has(d.key)||(d.preventDefault(),e.click())};return e.addEventListener("keydown",a),()=>e.removeEventListener("keydown",a)},[]),ge(s!=null&&!i?h`<span class="placeholder">${s}</span>`:h``,{label:t,hint:o,invalid:n,errorMessage:r,compact:!!l,required:!!c})};customElements.define("cosmoz-autocomplete-trigger",A(po,{styleSheets:[K(ve),K(co)],observedAttributes:["variant","disabled","invalid","compact","required","has-value"]}));const ho=C`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",A(()=>Z,{styleSheets:[ho]}));const uo=X`
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
`,me=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...n)=>Object.assign(t(...n),o),o)},Ce=e=>e.type||e.toString(),Se=e=>Array.isArray(e)?e:[e],go=(e,t)=>{const o=Se(t),r=(o.every(Array.isArray)?o:[o]).map(([n,s])=>({actions:Se(n).map(Ce),handle:s}));return(n=e,s)=>{const l=r.find(c=>c.actions.includes(Ce(s)));return l?l.handle(n,s):n}},M={pending:"pending",rejected:"rejected",resolved:"resolved"},qe={error:void 0,result:void 0,state:M.pending},Ne=me(M.pending),Ye=me(M.resolved,e=>({result:e})),De=me(M.rejected,e=>({error:e})),vo=go(qe,[[Ne,()=>({error:void 0,result:void 0,state:M.pending})],[Ye,(e,{result:t})=>({error:void 0,result:t,state:M.resolved})],[De,(e,{error:t})=>({error:t,result:void 0,state:M.rejected})]]),mo=e=>{const[{error:t,result:o,state:r},n]=lt(vo,qe);return $(()=>{if(!e)return;let s=!1;return n(Ne()),e.then(l=>!s&&n(Ye(l)),l=>!s&&n(De(l))),()=>{s=!0}},[e]),[o,t,r]},Re=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),fo=(e,t,o)=>{if(!t)return e;const r=Re(t.toLowerCase()),n=[];for(const s of e){const c=Re(o(s).toLowerCase()).indexOf(r);c<0||n.push({item:s,index:c})}return n.sort((s,l)=>s.index-l.index).map(({item:s})=>s)},bo=e=>e===!1||e==null?[]:e,zo=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Me=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?Me(t.shadowRoot):t:null},Oe=[],wo=(e,t,o)=>x(r=>{t?.(r),e.dispatchEvent(new CustomEvent(o,{detail:r}))},[t]),yo=({value:e,text:t,mode:o,onChange:r,onText:n,onSelect:s,limit:l,min:c,source:i,textProperty:a,textual:d,valueProperty:u,keepOpened:m,keepQuery:v,preserveOrder:k,defaultIndex:T,externalSearch:g,disabled:z,lazyOpen:j})=>{const S=l!=null?Number(l):void 0,R=c!=null?Number(c):void 0,B=o==="select",P=Y(()=>(d??ht)(a),[d,a]),w=ut(),[f,O]=ne("opened",!1),F=!t,_=Y(()=>t?.trim(),[t]),Q=wo(w,n,"text"),J=x(y=>{r?.(y,()=>O(!1));const U=B?y[0]:y;zo(w,"value",U)},[r]),[ie,He]=ue([]),W=!!(j&&!_),ee=Y(()=>W?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:_,active:f}):i).then(bo),[i,f,_,W]),I=Y(()=>ce(e),[e]);$(()=>ee.then(He),[ee]),gt({activity:ct,callback:()=>{const y=ce(I);y.length>(R??0)&&J(y.slice(0,-1))},check:()=>!z&&F&&w.matches(":focus-within"),element:()=>w},[]),$(()=>{!f&&!v&&Q("")},[f,v]),$(()=>{w.toggleAttribute("opened",!!f)},[f]),dt(()=>{!f||z||Me()?.closest?.("cosmoz-tag")||w.shadowRoot?.querySelector("#search")?.focus()},[f,z]);const q=pt({onText:Q,onChange:J,value:I,limit:S,min:R,keepQuery:v,keepOpened:m,setOpened:O,onSelect:s,valueProperty:u}),[,,Ve]=mo(ee);return{limit:S,opened:f,query:_,textual:P,value:I,source$:ee,loading:Ve==="pending",items:Y(()=>{if(!f||W)return Oe;const y=k?ie:[...I,...de(I,oe(u))(ie)];return g?y:fo(y,_,P)},[ie,f,_,P,F,I,k,u,g,W]),onToggle:x(y=>{z||O(y.newState==="open")},[z]),onText:x(y=>{if(z)return;const U=y.target.value;U&&S===1&&I.length>0&&J([]),Q(U),O(!0)},[z,Q,O,S,I,J]),onSelect:x(y=>{if(z)return;q.onSelect?.(y,q);const{onChange:U,onText:Ke,limit:Ze,min:Ge,value:Xe,keepQuery:Qe,keepOpened:Je,setOpened:We,valueProperty:et}=q;Qe||Ke(""),Je||We(!1);const te=ce(Xe),le=oe(et),fe=te.some(tt=>le(tt)===le(y));fe&&te.length===Ge||U((fe?de(y,le)(te):[...te,y]).slice(-Ze))},[z,q]),onDeselect:x(y=>{z||q.onChange(de(y,oe(q.valueProperty))(q.value))},[z,q]),defaultIndex:_!==void 0&&_?.length>0?0:T}},xo=["control","label","hint","error","wrap"].map(e=>`${e}: input-${e}`).join(),$o=e=>{const{variant:t,opened:o,invalid:r,errorMessage:n,hint:s,label:l,placeholder:c,compact:i,required:a,disabled:d,textual:u,text:m,onText:v,onToggle:k,onDeselect:T,value:g,limit:z,min:j,items:S,source$:R,loading:B,chipRenderer:P,wrap:w,mode:f}=e,O=z===1;return h`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${d}
			.opened=${o}
			@dropdown-toggle=${k}
			part="dropdown"
		>
			<cosmoz-autocomplete-trigger
				slot="button"
				part="input"
				.label=${l}
				.hint=${s}
				.errorMessage=${$e([R,n],()=>Ae(R.then(()=>n,F=>F.message),n))}
				?invalid=${$e([R,r],()=>Ae(R.then(()=>r,()=>!0),r))}
				variant=${b(t)}
				.placeholder=${c}
				?compact=${i}
				?disabled=${d}
				?required=${a}
				?has-value=${g.length>0}
				exportparts=${xo}
				role="button"
				tabindex=${d?-1:0}
				aria-haspopup="listbox"
				aria-expanded=${o?"true":"false"}
				?data-wrap=${w}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${E(f==="select",()=>bt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				<cosmoz-selection
					slot="control"
					.value=${g}
					.min=${j}
					.variant=${t}
					.textual=${u}
					.onDeselect=${T}
					.disabled=${d}
					.chipRenderer=${P}
					.wrap=${w}
				></cosmoz-selection>
			</cosmoz-autocomplete-trigger>

			${E(o,()=>vt({...e,items:S,multi:!O},h`<cosmoz-input
							slot="search"
							id="search"
							part="search-input"
							placeholder=${ze("Search")}
							.value=${ae(m)}
							@value-changed=${v}
							@select=${F=>F.stopPropagation()}
							autocomplete="off"
						></cosmoz-input>
						${E(B,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>E(m!=null&&m.length>0&&S.length===0,()=>h`<slot name="no-result">
											<span class="no-result">${ze("No results found")}</span>
										</slot>`))}`))}
		</cosmoz-dropdown-next>`},je=e=>{const t={...e,...yo(e)};return $o(t)},Be=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],ko=e=>{const{onChange:t,onText:o,mode:r,...n}=e,s=r==="select",[l,c]=ne("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),je({...n,...s&&{limit:1,min:1,showSingle:!0},mode:r,value:l,onChange:x((i,...a)=>{c(s?i[0]:i),t?.(i,...a)},[t,s]),onText:x(i=>{e.text=i,o?.(i)},[o])})},Fe=[K(uo)],Ue={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",A(je,{observedAttributes:Be,styleSheets:Fe,shadowRootInit:Ue}));customElements.define("cosmoz-autocomplete",A(ko,{observedAttributes:Be,styleSheets:Fe,shadowRootInit:Ue}));export{je as A,Be as a,bt as c,b as o,uo as s};
