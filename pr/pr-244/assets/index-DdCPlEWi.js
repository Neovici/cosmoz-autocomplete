import{A as K,s as X,c as O,d as C,b as h,w as ae,f as x,u as ce,a as z,r as Qe,E as M,p as We,D as Je,e as N,h as et,H as tt,n as ot,g as nt,j as Ee,k as rt,l as st,m as it,o as ue,t as at}from"./iframe-DKGNTcQk.js";import{n as y,u as F,a as Q,e as le,i as Te,t as j,f as ct,s as lt,b as Ae,c as G,d as he,w as re,p as se,l as dt,g as pt}from"./index-BWXoDMZX.js";const m=e=>e??K,W=X(O`
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
`),d=e=>`calc(var(--cz-spacing) * ${e})`,ut=O`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${d(1.5)};
		width: max-content;
		height: max-content;
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
		width: ${d(3)};
		height: ${d(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${d(3)};
		height: ${d(3)};
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
`,ht=()=>h`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",C(ht,{styleSheets:[W,ut]}));const gt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
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
    width=${n}
    height=${s}
    style=${m(r)}
  >
    ${y(t,()=>ae`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,mt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
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
    width=${n}
    height=${s}
    style=${m(r)}
  >
    ${y(t,()=>ae`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,vt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>h`
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
    width=${n}
    height=${s}
    style=${m(r)}
  >
    ${y(t,()=>ae`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,q=e=>`calc(var(--cz-spacing) * ${e})`,ft=O`
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
`,bt=e=>{const{color:t,size:o,disabled:n,removable:s}=e,r=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return h`<cosmoz-badge
		color=${m(t)}
		size=${m(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${y(s,()=>h` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${a=>a.preventDefault()}
					@click=${r}
				>
					${vt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",C(bt,{observedAttributes:["color","size","disabled","removable"],styleSheets:[W,ft]}));const Ce=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),zt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:a})=>{const c=F(),i=()=>clearTimeout(c.current),l=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const u=t.current;n&&(e.matches(":hover")||u?.matches(":hover"))||e.matches(":focus-within")||u?.matches(":focus-within")||a()},100)},p=()=>{o||(i(),r())};return x(()=>{if(!(!n||o))return e.addEventListener("pointerenter",p),e.addEventListener("pointerleave",l),()=>{i(),e.removeEventListener("pointerenter",p),e.removeEventListener("pointerleave",l)}},[n,o,e]),x(()=>{if(!(!s||o))return e.addEventListener("focusin",p),e.addEventListener("focusout",l),()=>{i(),e.removeEventListener("focusin",p),e.removeEventListener("focusout",l)}},[s,o,e]),{scheduleClose:l,cancelClose:i}},yt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},wt=O`
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
`,xt=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:s}=e,r=F(),[a,c]=ce("opened",!1),i=z(()=>{o||(c(!0),r.current?.showPopover())},[o]),l=z(()=>{c(!1),r.current?.hidePopover()},[]),p=z(()=>{if(o)return;r.current?.matches(":popover-open")?l():i()},[o]);x(()=>{const g=r.current;g&&(a?g.showPopover():g.hidePopover())},[a]),x(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:u,cancelClose:w}=zt({host:e,popoverRef:r,disabled:o,openOnHover:n,openOnFocus:s,open:i,close:l}),k=s?i:p,E=z(g=>{yt(g),c(g.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:g.newState,oldState:g.oldState,composed:!0}))},[]);return h`
		<slot name="button" @click=${k}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${E}
			@select=${l}
			@focusout=${u}
			@focusin=${w}
			${Q(g=>g&&(r.current=g))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",C(xt,{styleSheets:[wt],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const J=le(class extends Te{constructor(e){if(super(e),e.type!==j.PROPERTY&&e.type!==j.ATTRIBUTE&&e.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qe(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===K)return t;const o=e.element,n=e.name;if(e.type===j.PROPERTY){if(t===o[n])return M}else if(e.type===j.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return M}else if(e.type===j.ATTRIBUTE&&o.getAttribute(n)===t+"")return M;return We(e),t}}),$t=O`
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
`;customElements.define("cosmoz-tooltip-content",C(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[W,$t]}));const ie=X(O`
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
		max-width: var(--cosmoz-tooltips-max-width, 20rem);
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
`),ge=(e,t,o)=>Je(h`<cosmoz-tooltip-content>
			${y(t,()=>h`<strong slot="heading">${t}</strong>`)}
			${y(o,()=>h`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),kt=(e,t)=>{const{for:o,heading:n,description:s,placement:r="top",delay:a=300,disabled:c=!1}=t,i=F();x(()=>{if(!o)return;const l=e.getRootNode(),p=l.adoptedStyleSheets??[];p.includes(ie)||(l.adoptedStyleSheets=[...p,ie]);const u=document.createElement("div");u.setAttribute("popover","manual"),u.setAttribute("role","tooltip"),u.classList.add("cosmoz-tooltip-popover"),e.after(u),i.current=u,ge(u,n,s);const w=`[name="${o}"]`,k=`--tooltip-anchor-${o}`;let E;const g=b=>{c||(clearTimeout(E),b.style.anchorName=k,u.style.positionAnchor=k,u.style.positionArea=r,E=window.setTimeout(()=>u.showPopover(),a))},$=()=>{clearTimeout(E),u.hidePopover()},L=b=>{const v=b.target.closest?.(w);v&&g(v)},A=b=>{const v=b.target.closest?.(w);if(!v)return;const T=b.relatedTarget;T&&v.contains(T)||$()},S=b=>{const v=b.target.closest?.(w);v&&g(v)},P=b=>{b.target.closest?.(w)&&$()};return l.addEventListener("pointerover",L),l.addEventListener("pointerout",A),l.addEventListener("focusin",S),l.addEventListener("focusout",P),()=>{clearTimeout(E),l.removeEventListener("pointerover",L),l.removeEventListener("pointerout",A),l.removeEventListener("focusin",S),l.removeEventListener("focusout",P),u.hidePopover(),u.remove(),i.current=void 0}},[o,r,a,c]),x(()=>{!o||!i.current||ge(i.current,n,s)},[n,s,o]),x(()=>{!c||!i.current||i.current.hidePopover()},[c])},Et=O`
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
`,Tt=e=>{const{heading:t,description:o,for:n,placement:s="top",delay:r=300,disabled:a=!1}=e,c=F(),i=F(),l=z(()=>{a||(clearTimeout(i.current),i.current=window.setTimeout(()=>{c.current?.showPopover()},r))},[r,a]);x(()=>{a&&(clearTimeout(i.current),c.current?.hidePopover())},[a]);const p=z(()=>{clearTimeout(i.current),c.current?.hidePopover()},[]);return x(()=>{if(n)return;const u=w=>{const k=w.relatedTarget;k&&e.contains(k)||p()};return e.addEventListener("pointerover",l),e.addEventListener("pointerout",u),()=>{e.removeEventListener("pointerover",l),e.removeEventListener("pointerout",u)}},[n,l,p]),kt(e,{for:n,heading:t,description:o,placement:s,delay:r,disabled:a}),n?K:h`
		<slot @focusin=${l} @focusout=${p}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${Q(u=>{c.current=u})}
		>
			<cosmoz-tooltip-content>
				${y(t,()=>h`<strong slot="heading">${t}</strong>`)}
				${y(o,()=>h`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",C(Tt,{styleSheets:[W,ie,Et],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Se=(e,{hint:t,label:o,invalid:n,errorMessage:s,compact:r,required:a})=>h`
		<!-- label: hidden in compact mode -->
		${y(!r&&o,()=>h`<label for="input" part="label"
					>${o}
					${y(a,()=>h`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${y(r&&n&&s,()=>h`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${mt({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${y(!r&&t&&!n,()=>h`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${y(!r&&n&&s,()=>h`<span class="error" part="error">${s}</span>`)}
	`,Re=["autocomplete","readonly","disabled","maxlength","invalid"],Oe=Ce`
	/* === Host === */

	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 1.5);
		position: relative;
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-family: var(--cz-font-body);
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

	:host([variant='cell']) .wrap {
		border: 0.5px solid var(--cz-color-bg-quaternary);
		border-radius: 0;
		box-shadow: none;
	}
	:host([variant='cell'][invalid]) .wrap {
		border-color: var(--cz-color-border-error);
	}
	:host([variant='cell'][invalid]) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-error);
		border: 0.5px solid transparent;
	}
	:host([variant='cell']) .wrap:has(#input:focus) {
		background: var(--cz-color-bg-quaternary);
	}

	:host([variant='cell']) label {
		display: none;
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
`,At=e=>N(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ct=et(class extends tt{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),St=/([A-Z])/gu,me=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(St,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Pe=e=>{const t=F(void 0),o=z(i=>t.current=i,[]),n=e.shadowRoot,s=z(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),r=z(i=>me(e,"value",i.target.value),[]),a=z(i=>me(e,"focused",i.type==="focus"),[]),c=z(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Ct({validate:c},[c]),x(()=>{const i=l=>{l.composedPath()[0]?.closest?.("input, textarea")||(l.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:s,onFocus:a,onInput:r,onRef:o}},Rt=({placeholder:e})=>e||" ",Ot=["type","variant","hint","error-message","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Re],Pt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:a,disabled:c,min:i,max:l,step:p,maxlength:u,required:w}=e,{onChange:k,onFocus:E,onInput:g,onRef:$}=Pe(e),L=At(n);return e.toggleAttribute("has-value",!!r),Se(h`
			<input
				${Q($)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${m(o)}
				autocomplete=${m(s)}
				placeholder=${Rt({placeholder:e.placeholder})}
				?readonly=${a}
				aria-disabled=${c?"true":"false"}
				?disabled=${c}
				?required=${w}
				.value=${J(r??"")}
				maxlength=${m(u)}
				@beforeinput=${L}
				@input=${g}
				@change=${k}
				@focus=${E}
				@blur=${E}
				min=${m(i)}
				max=${m(l)}
				step=${m(p)}
			/>
		`,e)};customElements.define("cosmoz-input",C(Pt,{observedAttributes:Ot,styleSheets:[X(Oe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ve=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Lt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},It=e=>{const{value:t,maxRows:o}=e,n=N(()=>()=>e.shadowRoot.querySelector("#input"),[]);x(()=>Lt(n(),o),[o,n]),x(()=>ve(n()),[n,t]),x(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ve(s)));return r.observe(s),()=>r.unobserve(s)},[n])},_t=["rows","placeholder","label","hint","error-message","required",...Re],qt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:s,disabled:r,rows:a,cols:c,maxlength:i}=e,{onChange:l,onFocus:p,onInput:u,onRef:w}=Pe(e);return It(e),Se(h`
			<textarea id="input" part="input"
				${Q(w)}
				autocomplete=${m(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${m(c)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${J(o??"")} maxlength=${m(i)} @input=${u}
				@change=${l} @focus=${p} @blur=${p}>`,e)};customElements.define("cosmoz-textarea",C(qt,{observedAttributes:_t,styleSheets:[X(Oe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Nt=e=>{const{label:t,value:o,disabled:n,error:s}=e,r=z(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${J(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${y(t,()=>h`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${y(s,a=>h`<div class="failure">${a}</div>`)} `},Mt=O`
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
`,Yt=O`
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
`;customElements.define("cosmoz-toggle",C(Nt,{styleSheets:[Yt,Mt],observedAttributes:["label","disabled","error"]}));const Bt={},fe=le(class extends Te{constructor(){super(...arguments),this.ot=Bt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return M}else if(this.ot===t)return M;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Dt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class jt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const be=e=>!ot(e)&&typeof e.then=="function",ze=1073741823;class Ft extends ct{constructor(){super(...arguments),this._$Cwt=ze,this._$Cbt=[],this._$CK=new Dt(this),this._$CX=new jt}render(...t){return t.find(o=>!be(o))??M}update(t,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!be(i))return this._$Cwt=c,i;c<s&&i===n[c]||(this._$Cwt=ze,s=0,Promise.resolve(i).then(async l=>{for(;a.get();)await a.get();const p=r.deref();if(p!==void 0){const u=p._$Cbt.indexOf(i);u>-1&&u<p._$Cwt&&(p._$Cwt=u,p.setValue(l))}}))}return M}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ye=le(Ft),Ut=({content:e,onClear:t,disabled:o,className:n="chip",hidden:s,slot:r})=>h`<cosmoz-tag
		class=${m(n)}
		slot=${m(r)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${s}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${m(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Ht=({value:e,min:t=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=Ut})=>[...e.filter(Boolean).map(a=>r({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:s,slot:"control"})),r({item:null,content:h`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Zt=O`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",C(()=>K,{styleSheets:[Zt]}));const Vt=Ce`
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

	:host([error-message]) cosmoz-listbox,
	:host([hint]) cosmoz-listbox {
		margin-top: calc((var(--cz-spacing) * -5));
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
`,de=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),o),o)},we=e=>e.type||e.toString(),xe=e=>Array.isArray(e)?e:[e],Gt=(e,t)=>{const o=xe(t),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:xe(s).map(we),handle:r}));return(s=e,r)=>{const a=n.find(c=>c.actions.includes(we(r)));return a?a.handle(s,r):s}},B={pending:"pending",rejected:"rejected",resolved:"resolved"},Le={error:void 0,result:void 0,state:B.pending},Ie=de(B.pending),_e=de(B.resolved,e=>({result:e})),qe=de(B.rejected,e=>({error:e})),Kt=Gt(Le,[[Ie,()=>({error:void 0,result:void 0,state:B.pending})],[_e,(e,{result:t})=>({error:void 0,result:t,state:B.resolved})],[qe,(e,{error:t})=>({error:t,result:void 0,state:B.rejected})]]),Xt=e=>{const[{error:t,result:o,state:n},s]=nt(Kt,Le);return x(()=>{if(!e)return;let r=!1;return s(Ie()),e.then(a=>!r&&s(_e(a)),a=>!r&&s(qe(a))),()=>{r=!0}},[e]),[o,t,n]},$e=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Qt=(e,t,o)=>{if(!t)return e;const n=$e(t.toLowerCase()),s=[];for(const r of e){const c=$e(o(r).toLowerCase()).indexOf(n);c<0||s.push({item:r,index:c})}return s.sort((r,a)=>r.index-a.index).map(({item:r})=>r)},Wt=e=>e===!1||e==null?[]:e,Jt=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),ke=[],eo=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},to=(e,t,o)=>z(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),oo=({value:e,text:t,onChange:o,onText:n,onSelect:s,limit:r,min:a,source:c,textProperty:i,textual:l,valueProperty:p,keepOpened:u,keepQuery:w,preserveOrder:k,defaultIndex:E,externalSearch:g,disabled:$,lazyOpen:L})=>{const A=r!=null?Number(r):void 0,S=a!=null?Number(a):void 0,P=N(()=>(l??lt)(i),[l,i]),b=Ae(),[v,T]=ce("opened",!1),I=!t,R=N(()=>t?.trim(),[t]),D=to(b,n,"text"),ee=z(f=>{o?.(f,()=>T(!1)),Jt(b,"value",f)},[o]),[te,De]=Ee([]),U=!!(L&&!R),H=N(()=>U?Promise.resolve([]):Promise.resolve(typeof c=="function"?c({query:R,active:v}):c).then(Wt),[c,v,R,U]),Y=N(()=>G(e),[e]);x(()=>H.then(De),[H]),he({activity:rt,callback:()=>{const f=G(Y);f.length>(S??0)&&ee(f.slice(0,-1))},check:()=>!$&&I&&b.matches(":focus-within"),element:()=>b},[]),he({activity:st,callback:f=>{const Z=G(Y),oe=A===1;Z.length>0&&oe&&f.key.length===1&&ee(Z.slice(0,-1))},allowDefault:!0,check:()=>!$&&I&&b.matches(":focus-within"),element:()=>b},[A]),x(()=>{!v&&!w&&D("")},[v,w]),x(()=>{b.toggleAttribute("opened",!!v)},[v]);const _=it({onText:D,onChange:ee,value:Y,limit:A,min:S,keepQuery:w,keepOpened:u,setOpened:T,onSelect:s,valueProperty:p}),[,,je]=Xt(H);return{limit:A,opened:v,query:R,textual:P,value:Y,source$:H,loading:je==="pending",items:N(()=>{if(!v||U)return ke;const f=k?te:[...Y,...re(Y,se(p))(te)];return g?f:Qt(f,R,P)},[te,v,R,P,I,Y,k,p,g,U]),onToggle:z(f=>{$||T(f.newState==="open")},[$]),onText:z(f=>{$||(D(f.target.value),T(!0))},[$,D,t,T]),onSelect:z(f=>{if($)return;_.onSelect?.(f,_);const{onChange:Z,onText:oe,limit:Fe,min:Ue,value:He,keepQuery:Ze,keepOpened:Ve,setOpened:Ge,valueProperty:Ke}=_;Ze||oe(""),Ve||Ge(!1);const V=G(He),ne=se(Ke),pe=V.some(Xe=>ne(Xe)===ne(f));pe&&V.length===Ue||Z((pe?re(f,ne)(V):[...V,f]).slice(-Fe))},[$,_]),onDeselect:z(f=>{$||_.onChange(re(f,se(_.valueProperty))(_.value))},[$,_]),defaultIndex:R!==void 0&&R?.length>0?0:E}},no=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const c of t)c.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const i=t[r].getBoundingClientRect();if(!(i.x+i.width<=s.x+s.width-24))break}const a=t.length-r;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;r<t.length;r++)t[r].hidden=!0},ro=({value:e,opened:t,wrap:o,limit:n})=>{const s=Ae(),r=!(o||n===1),a=N(()=>eo(()=>no(s)),[]),[c,i]=Ee(0);ue(()=>{if(!r)return;const l=s.shadowRoot.querySelector("cosmoz-input"),p=new ResizeObserver(u=>{i(u[0].contentRect.width)});return p.observe(l),()=>p.disconnect()},[r]),ue(()=>r?a():void 0,[r,c,t,e])},so=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),io=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,ao=e=>{const{variant:t,opened:o,invalid:n,errorMessage:s,hint:r,label:a,placeholder:c,disabled:i,textual:l,text:p,onText:u,onToggle:w,onDeselect:k,value:E,limit:g,min:$,showSingle:L,items:A,source$:S,loading:P,chipRenderer:b,mode:v}=e,T=g===1,I=T&&E?.[0]!=null,R=P||A.length>0||p!=null&&p.length>0;return h`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${i}
			.opened=${o}
			@dropdown-toggle=${w}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${a}
				.placeholder=${I?void 0:c}
				hint=${m(r)}
				variant=${m(t)}
				?readonly=${I}
				?disabled=${i}
				?invalid=${fe([S,n],()=>ye(S.then(()=>n,()=>!0),n))}
				.errorMessage=${fe([S,s],()=>ye(S.then(()=>s,D=>D.message),s))}
				.value=${J(p)}
				@value-changed=${u}
				autocomplete="off"
				exportparts=${so}
				?data-one=${T}
				?data-single=${I}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${y(v==="select",()=>gt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Ht({value:E,min:$,onDeselect:k,textual:l,disabled:i,chipRenderer:b})}
			</cosmoz-input>

			${y(io({opened:o,isSingle:I,showSingle:L,hasResultsOrQuery:R}),()=>dt({...e,items:A,multi:!T},y(P,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>y(p!=null&&p.length>0&&A.length===0,()=>h`<slot name="no-result">
											<span class="no-result">${at("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ne=e=>{const t={...e,...oo(e)};return ro(t),ao(t)},Me=["variant","disabled","invalid","hint","error-message","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],co=e=>{const{onChange:t,onText:o,mode:n,...s}=e,r=n==="select",[a,c]=ce("value");return x(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ne({...s,...r&&{limit:1,min:1,showSingle:!0},mode:n,value:a,onChange:z((i,...l)=>{c(i),t?.(i,...l)},[t]),onText:z(i=>{e.text=i,o?.(i)},[o])})},Ye=[pt(Vt)],Be={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",C(Ne,{observedAttributes:Me,styleSheets:Ye,shadowRootInit:Be}));customElements.define("cosmoz-autocomplete",C(co,{observedAttributes:Me,styleSheets:Ye,shadowRootInit:Be}));export{Ne as A,Me as a,gt as c,m as o,Vt as s};
