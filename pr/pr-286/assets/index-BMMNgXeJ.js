import{A as J,s as W,c as R,d as A,b as d,w as ce,f as $,u as de,a as w,r as et,E as L,p as tt,D as ot,g as pe,e as j,h as nt,H as rt,n as st,j as it,k as at,l as lt,t as ct}from"./iframe-C_URfFL8.js";import{n as x,u as B,a as G,e as ee,i as Ae,t as V,f as Se,s as he,b as dt,c as pt,d as se,g as ht,w as ie,p as ae,l as ut}from"./index-CA1nwtei.js";const f=e=>e??J,te=W(R`
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
`),c=e=>`calc(var(--cz-spacing) * ${e})`,gt=R`
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
		gap: ${c(1.5)};
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
		padding: ${c(.5)} ${c(2)};
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
		padding: ${c(.5)} ${c(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${c(.5)} ${c(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${c(1)};
	}

	:host([size='lg']) .badge {
		padding: ${c(1)} ${c(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${c(.5)} ${c(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${c(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${c(1)} ${c(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${c(2)};
		height: ${c(2)};
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
		padding: ${c(.5)} ${c(2.5)} ${c(.5)} ${c(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${c(.5)} ${c(2)} ${c(.5)} ${c(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${c(1)} ${c(3)} ${c(1)} ${c(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${c(.5)} ${c(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${c(.5)} ${c(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${c(1)} ${c(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${c(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${c(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${c(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${c(3)};
		height: ${c(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${c(3)};
		height: ${c(3)};
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
`,mt=()=>d`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",A(mt,{styleSheets:[te,gt]}));const vt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>d`
  <svg
    slot=${f(e)}
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
    style=${f(s)}
  >
    ${x(t,()=>ce`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,ft=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>d`
  <svg
    slot=${f(e)}
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
    style=${f(s)}
  >
    ${x(t,()=>ce`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,bt=({slot:e,title:t,className:o,width:n="24",height:r="24",styles:s}={})=>d`
  <svg
    slot=${f(e)}
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
    style=${f(s)}
  >
    ${x(t,()=>ce`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,M=e=>`calc(var(--cz-spacing) * ${e})`,zt=R`
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
`,wt=e=>{const{color:t,size:o,disabled:n,removable:r}=e,s=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return d`<cosmoz-badge
		color=${f(t)}
		size=${f(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${x(r,()=>d` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${a=>a.preventDefault()}
					@click=${s}
				>
					${bt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",A(wt,{observedAttributes:["color","size","disabled","removable"],styleSheets:[te,zt]}));const ue=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),yt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:r,open:s,close:a})=>{const l=B(),i=()=>clearTimeout(l.current),u=()=>{clearTimeout(l.current),l.current=setTimeout(()=>{const p=t.current;n&&(e.matches(":hover")||p?.matches(":hover"))||e.matches(":focus-within")||p?.matches(":focus-within")||a()},100)},g=()=>{o||(i(),s())};return $(()=>{if(!(!n||o))return e.addEventListener("pointerenter",g),e.addEventListener("pointerleave",u),()=>{i(),e.removeEventListener("pointerenter",g),e.removeEventListener("pointerleave",u)}},[n,o,e]),$(()=>{if(!(!r||o))return e.addEventListener("focusin",g),e.addEventListener("focusout",u),()=>{i(),e.removeEventListener("focusin",g),e.removeEventListener("focusout",u)}},[r,o,e]),{scheduleClose:u,cancelClose:i}},xt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const r of n){const s=r.matches("[autofocus]")?r:r.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},$t=R`
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
`,kt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:n,openOnHover:r,openOnFocus:s}=e,a=B(),[l,i]=de("opened",!1),u=w(()=>{o||(i(!0),a.current?.showPopover?.())},[o]),g=w(()=>{i(!1),a.current?.hidePopover?.()},[]),p=w(()=>{if(o)return;a.current?.matches(":popover-open")?g():u()},[o]);$(()=>{const m=a.current;m&&(l?m.showPopover?.():m.hidePopover?.())},[l]),$(()=>{e.toggleAttribute("opened",!!l)},[l]);const{scheduleClose:E,cancelClose:h}=yt({host:e,popoverRef:a,disabled:o,openOnHover:r,openOnFocus:s,open:u,close:g}),k=s?u:p,C=w(m=>{xt(m),i(m.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return d`
		<slot name="button" @click=${k}></slot>
		${o&&n?d`<slot></slot>`:d`<div
					popover
					style="position-area: ${t}"
					@toggle=${C}
					@select=${g}
					@focusout=${E}
					@focusin=${h}
					${G(m=>m&&(a.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",A(kt,{styleSheets:[$t],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oe=ee(class extends Ae{constructor(e){if(super(e),e.type!==V.PROPERTY&&e.type!==V.ATTRIBUTE&&e.type!==V.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!et(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===L||t===J)return t;const o=e.element,n=e.name;if(e.type===V.PROPERTY){if(t===o[n])return L}else if(e.type===V.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return L}else if(e.type===V.ATTRIBUTE&&o.getAttribute(n)===t+"")return L;return tt(e),t}}),Et=R`
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
`;customElements.define("cosmoz-tooltip-content",A(()=>d`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[te,Et]}));const le=W(R`
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
`),ve=(e,t,o)=>ot(d`<cosmoz-tooltip-content>
			${x(t,()=>d`<strong slot="heading">${t}</strong>`)}
			${x(o,()=>d`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),Ct=(e,t)=>{const{for:o,heading:n,description:r,placement:s="top",delay:a=300,disabled:l=!1}=t,i=B(),g=!!(n||r)&&!l;$(()=>{if(!o||!g)return;const p=e.getRootNode(),E=p.adoptedStyleSheets??[];E.includes(le)||(p.adoptedStyleSheets=[...E,le]);const h=document.createElement("div");h.setAttribute("popover","manual"),h.setAttribute("role","tooltip"),h.classList.add("cosmoz-tooltip-popover"),e.after(h),i.current=h,ve(h,n,r);const k=`[name="${o}"]`,C=`--tooltip-anchor-${o}`;let m;const b=y=>{l||(clearTimeout(m),y.style.anchorName=C,h.style.positionAnchor=C,h.style.positionArea=s,m=window.setTimeout(()=>h.showPopover(),a))},F=()=>{clearTimeout(m),h.hidePopover()},P=y=>{const v=y.target.closest?.(k);v&&b(v)},Y=y=>{const v=y.target.closest?.(k);if(!v)return;const O=y.relatedTarget;O&&v.contains(O)||F()},_=y=>{const v=y.target.closest?.(k);v&&b(v)},S=y=>{y.target.closest?.(k)&&F()};return p.addEventListener("pointerover",P),p.addEventListener("pointerout",Y),p.addEventListener("focusin",_),p.addEventListener("focusout",S),()=>{clearTimeout(m),p.removeEventListener("pointerover",P),p.removeEventListener("pointerout",Y),p.removeEventListener("focusin",_),p.removeEventListener("focusout",S),h.hidePopover(),h.remove(),i.current=void 0}},[o,s,a,g]),$(()=>{!o||!i.current||ve(i.current,n,r)},[n,r,o]),$(()=>{!l||!i.current||i.current.hidePopover()},[l])},Tt=e=>{const[t,o]=pe(!1);return $(()=>{const n=e.current;if(!n)return;const r=()=>{o(n.assignedElements().length>0)};return r(),n.addEventListener("slotchange",r),()=>n.removeEventListener("slotchange",r)},[e.current]),t},At=R`
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
`,St=e=>{const{heading:t,description:o,for:n,placement:r="top",delay:s=300,disabled:a=!1}=e,l=B(),i=B(),u=B(),g=Tt(u),E=!!(t||o||g)&&!a,h=w(()=>{E&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{l.current?.showPopover()},s))},[s,E]);$(()=>{a&&(clearTimeout(i.current),l.current?.hidePopover())},[a]);const k=w(()=>{clearTimeout(i.current),l.current?.hidePopover()},[]);return $(()=>{if(n)return;const C=m=>{const b=m.relatedTarget;b&&e.contains(b)||k()};return e.addEventListener("pointerover",h),e.addEventListener("pointerout",C),()=>{e.removeEventListener("pointerover",h),e.removeEventListener("pointerout",C)}},[n,h,k]),Ct(e,{for:n,heading:t,description:o,placement:r,delay:s,disabled:a}),n?J:E?d`
		<slot @focusin=${h} @focusout=${k}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${r}"
			${G(l)}
		>
			<cosmoz-tooltip-content>
				${x(t,()=>d`<strong slot="heading">${t}</strong>`)}
				${x(o,()=>d`<p slot="description">${o}</p>`)}
				<slot name="content" ${G(u)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:d`
			<slot></slot>
			<slot name="content" ${G(u)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",A(St,{styleSheets:[te,le,At],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Re=(e,{hint:t,label:o,invalid:n,errorMessage:r,compact:s,required:a})=>d`
		<!-- label: hidden in compact mode -->
		${x(!s&&o,()=>d`<label for="input" part="label"
					>${o}
					${x(a,()=>d`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${x(s&&n&&r,()=>d`<cosmoz-tooltip
						placement="top"
						description=${r}
						delay="300"
					>
						${ft({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${x(!s&&t&&!n,()=>d`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${x(!s&&n&&r,()=>d`<span class="error" part="error">${r}</span>`)}
	`,Oe=["autocomplete","readonly","disabled","maxlength","invalid"],Le=ue`
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
`,Rt=e=>j(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ot=nt(class extends rt{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Lt=/([A-Z])/gu,fe=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Lt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Pe=e=>{const t=B(void 0),o=w(i=>t.current=i,[]),n=e.shadowRoot,r=w(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=w(i=>fe(e,"value",i.target.value),[]),a=w(i=>fe(e,"focused",i.type==="focus"),[]),l=w(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Ot({validate:l},[l]),$(()=>{const i=u=>{u.composedPath()[0]?.closest?.("input, textarea, label")||(u.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:r,onFocus:a,onInput:s,onRef:o}},Pt=({placeholder:e})=>e||" ",_t=(e,t)=>t??(e==="date"?"9999-12-31":void 0),It=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Oe],Nt=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:r,value:s,readonly:a,disabled:l,min:i,max:u,step:g,maxlength:p,required:E}=e,{onChange:h,onFocus:k,onInput:C,onRef:m}=Pe(e),b=Rt(n);return e.toggleAttribute("has-value",!!s),Re(d`
			<input
				${G(m)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${f(o)}
				autocomplete=${f(r)}
				placeholder=${Pt({placeholder:e.placeholder})}
				?readonly=${a}
				aria-disabled=${l?"true":"false"}
				?disabled=${l}
				?required=${E}
				.value=${oe(s??"")}
				maxlength=${f(p)}
				@beforeinput=${b}
				@input=${C}
				@change=${h}
				@focus=${k}
				@blur=${k}
				min=${f(i)}
				max=${f(_t(t,u))}
				step=${f(g)}
			/>
		`,e)};customElements.define("cosmoz-input",A(Nt,{observedAttributes:It,styleSheets:[W(Le)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const be=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Mt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},Yt=e=>{const{value:t,maxRows:o}=e,n=j(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Mt(n(),o),[o,n]),$(()=>be(n()),[n,t]),$(()=>{const r=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>be(r)));return s.observe(r),()=>s.unobserve(r)},[n])},qt=["rows","placeholder","label","hint","required",...Oe],jt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:r,disabled:s,rows:a,cols:l,maxlength:i}=e,{onChange:u,onFocus:g,onInput:p,onRef:E}=Pe(e);return Yt(e),Re(d`
			<textarea id="input" part="input"
				${G(E)}
				autocomplete=${f(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${f(l)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${oe(o??"")} maxlength=${f(i)} @input=${p}
				@change=${u} @focus=${g} @blur=${g}>`,e)};customElements.define("cosmoz-textarea",A(jt,{observedAttributes:qt,styleSheets:[W(Le)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Bt=e=>{const{label:t,value:o,disabled:n,error:r}=e,s=w(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return d`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${oe(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${x(t,()=>d`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${x(r,a=>d`<div class="failure">${a}</div>`)} `},Dt=R`
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
`,Ft=R`
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
`;customElements.define("cosmoz-toggle",A(Bt,{styleSheets:[Ft,Dt],observedAttributes:["label","disabled","error"]}));const Ht={},ze=ee(class extends Ae{constructor(){super(...arguments),this.ot=Ht}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,r)=>n===this.ot[r]))return L}else if(this.ot===t)return L;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Ut{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Zt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const we=e=>!st(e)&&typeof e.then=="function",ye=1073741823;class Vt extends Se{constructor(){super(...arguments),this._$Cwt=ye,this._$Cbt=[],this._$CK=new Ut(this),this._$CX=new Zt}render(...t){return t.find(o=>!we(o))??L}update(t,o){const n=this._$Cbt;let r=n.length;this._$Cbt=o;const s=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const i=o[l];if(!we(i))return this._$Cwt=l,i;l<r&&i===n[l]||(this._$Cwt=ye,r=0,Promise.resolve(i).then(async u=>{for(;a.get();)await a.get();const g=s.deref();if(g!==void 0){const p=g._$Cbt.indexOf(i);p>-1&&p<g._$Cwt&&(g._$Cwt=p,g.setValue(u))}}))}return L}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const xe=ee(Vt),Gt=he(R`
	slot.cz-overflow-band {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		overflow: clip;
	}

	::slotted([overflowing]) {
		visibility: hidden;
	}
`),$e=e=>e.assignedElements({flatten:!0}),Kt=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(o=>e.has(o));class Xt extends Se{_slot;_onOverflow;#t=new Map;#o;#e;#i=t=>{t.forEach(o=>{const n=o.target;this.#t.set(n,o.boundingClientRect.height>0&&o.intersectionRect.height===0)}),this.#r()};#a=t=>{this.#e?.unobserve(t),this.#e?.observe(t)};#r=()=>{if(!this._slot)return;const t=$e(this._slot);t.forEach(n=>{const r=this.#t.get(n)===!0;r!==n.hasAttribute("overflowing")&&(r?n.setAttribute("overflowing",""):n.removeAttribute("overflowing"))}),this.#t.forEach((n,r)=>{t.includes(r)||(this.#t.delete(r),this.#e?.unobserve(r),r.hasAttribute("overflowing")&&r.removeAttribute("overflowing"))});const o=new Set(t.filter(n=>this.#t.get(n)===!0));Kt(this.#o,o)||(this.#o=o,this._onOverflow?.(o))};#n=()=>this.#s();#s=()=>{if(!(!this.#e||!this._slot)){for(const t of $e(this._slot))this.#a(t);this.#r()}};render(t){return L}update(t,[o]){this._onOverflow=o.onOverflow;const n=t.element;return this._slot!==n&&(this._slot?.removeEventListener("slotchange",this.#n),this.#e?.disconnect(),this.#e=void 0,this._slot=n,n.addEventListener("slotchange",this.#n)),this.#e??=new IntersectionObserver(this.#i,{root:this._slot,threshold:[0,1]}),this.#s(),L}disconnected(){this._slot?.removeEventListener("slotchange",this.#n),this._slot=void 0,this.#e?.disconnect(),this.#e=void 0,this.#t.clear(),this.#o=void 0}}const Qt=ee(Xt),_e=({content:e,onClear:t,disabled:o,className:n="chip",hidden:r,slot:s})=>d`<cosmoz-tag
		class=${f(n)}
		slot=${f(s)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${r}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${f(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Jt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:r,chipRenderer:s=_e})=>e.filter(Boolean).map(a=>s({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:r,slot:"chips"})),Wt=e=>{const{chipRenderer:t=_e}=e,[o,n]=pe(0);return d`<slot
			name="chips"
			class="cz-overflow-band"
			${Qt({onOverflow:s=>n(s.size)})}
		></slot>
		${t({item:null,content:d`<span>${o>0?"+"+o:""}</span>`,className:"badge",disabled:!0,hidden:o<1})}`},eo=ue`
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
		max-height: calc(1lh + var(--cz-spacing) * 4);
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

	cosmoz-tag {
		align-items: center;
		margin-left: calc(var(--cz-spacing) * 2);
	}

	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
	}

	:host([data-one]) .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}
`;customElements.define("cosmoz-autocomplete-chips",A(Wt,{styleSheets:[he(eo),Gt]}));const to=R`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",A(()=>J,{styleSheets:[to]}));const oo=ue`
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
`,ge=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...r)=>Object.assign(t(...r),o),o)},ke=e=>e.type||e.toString(),Ee=e=>Array.isArray(e)?e:[e],no=(e,t)=>{const o=Ee(t),n=(o.every(Array.isArray)?o:[o]).map(([r,s])=>({actions:Ee(r).map(ke),handle:s}));return(r=e,s)=>{const a=n.find(l=>l.actions.includes(ke(s)));return a?a.handle(r,s):r}},D={pending:"pending",rejected:"rejected",resolved:"resolved"},Ie={error:void 0,result:void 0,state:D.pending},Ne=ge(D.pending),Me=ge(D.resolved,e=>({result:e})),Ye=ge(D.rejected,e=>({error:e})),ro=no(Ie,[[Ne,()=>({error:void 0,result:void 0,state:D.pending})],[Me,(e,{result:t})=>({error:void 0,result:t,state:D.resolved})],[Ye,(e,{error:t})=>({error:t,result:void 0,state:D.rejected})]]),so=e=>{const[{error:t,result:o,state:n},r]=it(ro,Ie);return $(()=>{if(!e)return;let s=!1;return r(Ne()),e.then(a=>!s&&r(Me(a)),a=>!s&&r(Ye(a))),()=>{s=!0}},[e]),[o,t,n]},Ce=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),io=(e,t,o)=>{if(!t)return e;const n=Ce(t.toLowerCase()),r=[];for(const s of e){const l=Ce(o(s).toLowerCase()).indexOf(n);l<0||r.push({item:s,index:l})}return r.sort((s,a)=>s.index-a.index).map(({item:s})=>s)},ao=e=>e===!1||e==null?[]:e,lo=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Te=[],co=(e,t,o)=>w(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),po=({value:e,text:t,mode:o,onChange:n,onText:r,onSelect:s,limit:a,min:l,source:i,textProperty:u,textual:g,valueProperty:p,keepOpened:E,keepQuery:h,preserveOrder:k,defaultIndex:C,externalSearch:m,disabled:b,lazyOpen:F})=>{const P=a!=null?Number(a):void 0,Y=l!=null?Number(l):void 0,_=o==="select",S=j(()=>(g??dt)(u),[g,u]),y=pt(),[v,O]=de("opened",!1),q=!t,T=j(()=>t?.trim(),[t]),H=co(y,r,"text"),U=w(z=>{n?.(z,()=>O(!1));const Z=_?z[0]:z;lo(y,"value",Z)},[n]),[ne,Fe]=pe([]),K=!!(F&&!T),X=j(()=>K?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:T,active:v}):i).then(ao),[i,v,T,K]),I=j(()=>se(e),[e]);$(()=>X.then(Fe),[X]),ht({activity:at,callback:()=>{const z=se(I);z.length>(Y??0)&&U(z.slice(0,-1))},check:()=>!b&&q&&y.matches(":focus-within"),element:()=>y},[]),$(()=>{!v&&!h&&H("")},[v,h]),$(()=>{y.toggleAttribute("opened",!!v)},[v]);const N=lt({onText:H,onChange:U,value:I,limit:P,min:Y,keepQuery:h,keepOpened:E,setOpened:O,onSelect:s,valueProperty:p}),[,,He]=so(X);return{limit:P,opened:v,query:T,textual:S,value:I,source$:X,loading:He==="pending",items:j(()=>{if(!v||K)return Te;const z=k?ne:[...I,...ie(I,ae(p))(ne)];return m?z:io(z,T,S)},[ne,v,T,S,q,I,k,p,m,K]),onToggle:w(z=>{b||O(z.newState==="open")},[b]),onText:w(z=>{if(b)return;const Z=z.target.value;Z&&P===1&&I.length>0&&U([]),H(Z),O(!0)},[b,H,O,P,I,U]),onSelect:w(z=>{if(b)return;N.onSelect?.(z,N);const{onChange:Z,onText:Ue,limit:Ze,min:Ve,value:Ge,keepQuery:Ke,keepOpened:Xe,setOpened:Qe,valueProperty:Je}=N;Ke||Ue(""),Xe||Qe(!1);const Q=se(Ge),re=ae(Je),me=Q.some(We=>re(We)===re(z));me&&Q.length===Ve||Z((me?ie(z,re)(Q):[...Q,z]).slice(-Ze))},[b,N]),onDeselect:w(z=>{b||N.onChange(ie(z,ae(N.valueProperty))(N.value))},[b,N]),defaultIndex:T!==void 0&&T?.length>0?0:C}},ho=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),uo=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,go=e=>{const{variant:t,wrap:o,opened:n,invalid:r,errorMessage:s,hint:a,label:l,placeholder:i,compact:u,required:g,disabled:p,textual:E,text:h,onText:k,onToggle:C,onDeselect:m,value:b,limit:F,min:P,showSingle:Y,items:_,source$:S,loading:y,chipRenderer:v,mode:O}=e,q=F===1,T=q&&b?.[0]!=null,H=y||_.length>0||h!=null&&h.length>0;return d`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${p}
			.opened=${n}
			@dropdown-toggle=${C}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${l}
				.placeholder=${T?void 0:i}
				hint=${f(a)}
				variant=${f(t)}
				?compact=${u}
				?disabled=${p}
				?required=${g}
				?invalid=${ze([S,r],()=>xe(S.then(()=>r,()=>!0),r))}
				.errorMessage=${ze([S,s],()=>xe(S.then(()=>s,U=>U.message),s))}
				.value=${oe(h)}
				@value-changed=${k}
				autocomplete="off"
				exportparts=${ho}
				?data-one=${q}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${x(O==="select",()=>vt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				<cosmoz-autocomplete-chips
					slot="control"
					?data-wrap=${o}
					?data-one=${q}
					.chipRenderer=${v}
				>
					${Jt({value:b,min:P,onDeselect:m,textual:E,disabled:p,chipRenderer:v})}
				</cosmoz-autocomplete-chips>
			</cosmoz-input>

			${x(uo({opened:n,isSingle:T,showSingle:Y,hasResultsOrQuery:H}),()=>ut({...e,items:_,multi:!q},x(y,()=>d`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>x(h!=null&&h.length>0&&_.length===0,()=>d`<slot name="no-result">
											<span class="no-result">${ct("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},qe=e=>{const t={...e,...po(e)};return go(t)},je=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],mo=e=>{const{onChange:t,onText:o,mode:n,...r}=e,s=n==="select",[a,l]=de("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),qe({...r,...s&&{limit:1,min:1,showSingle:!0},mode:n,value:a,onChange:w((i,...u)=>{l(s?i[0]:i),t?.(i,...u)},[t,s]),onText:w(i=>{e.text=i,o?.(i)},[o])})},Be=[he(oo)],De={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",A(qe,{observedAttributes:je,styleSheets:Be,shadowRootInit:De}));customElements.define("cosmoz-autocomplete",A(mo,{observedAttributes:je,styleSheets:Be,shadowRootInit:De}));export{qe as A,je as a,vt as c,f as o,oo as s};
