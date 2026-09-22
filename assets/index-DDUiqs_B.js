import{A as W,s as J,c as R,d as A,b as u,w as le,f as k,u as de,a as x,r as Je,E as Y,p as et,D as tt,g as pe,e as M,h as ot,H as nt,n as rt,j as st,k as it,l as at,m as ct,o as me,t as lt}from"./iframe-B-tVFIEf.js";import{n as $,u as D,a as V,e as ue,i as Ae,t as Z,f as dt,s as pt,b as Se,c as Q,d as ve,w as ie,p as ae,l as ut,g as ht}from"./index-DzjbnIYk.js";const f=e=>e??W,ee=J(R`
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
`),l=e=>`calc(var(--cz-spacing) * ${e})`,gt=R`
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
`,mt=()=>u`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",A(mt,{styleSheets:[ee,gt]}));const vt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>u`
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
    height=${s}
    style=${f(r)}
  >
    ${$(t,()=>le`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,ft=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>u`
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
    height=${s}
    style=${f(r)}
  >
    ${$(t,()=>le`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,bt=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>u`
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
    height=${s}
    style=${f(r)}
  >
    ${$(t,()=>le`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,N=e=>`calc(var(--cz-spacing) * ${e})`,zt=R`
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
`,yt=e=>{const{color:t,size:o,disabled:n,removable:s}=e,r=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return u`<cosmoz-badge
		color=${f(t)}
		size=${f(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${$(s,()=>u` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${a=>a.preventDefault()}
					@click=${r}
				>
					${bt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",A(yt,{observedAttributes:["color","size","disabled","removable"],styleSheets:[ee,zt]}));const Re=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),wt=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:a})=>{const c=D(),i=()=>clearTimeout(c.current),p=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||a()},100)},d=()=>{o||(i(),r())};return k(()=>{if(!(!n||o))return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",p),()=>{i(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",p)}},[n,o,e]),k(()=>{if(!(!s||o))return e.addEventListener("focusin",d),e.addEventListener("focusout",p),()=>{i(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",p)}},[s,o,e]),{scheduleClose:p,cancelClose:i}},xt=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},$t=R`
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
`,kt=e=>{const{placement:t="bottom span-right",disabled:o,passthrough:n,openOnHover:s,openOnFocus:r}=e,a=D(),[c,i]=de("opened",!1),p=x(()=>{o||(i(!0),a.current?.showPopover?.())},[o]),d=x(()=>{i(!1),a.current?.hidePopover?.()},[]),h=x(()=>{if(o)return;a.current?.matches(":popover-open")?d():p()},[o]);k(()=>{const m=a.current;m&&(c?m.showPopover?.():m.hidePopover?.())},[c]),k(()=>{e.toggleAttribute("opened",!!c)},[c]);const{scheduleClose:z,cancelClose:g}=wt({host:e,popoverRef:a,disabled:o,openOnHover:s,openOnFocus:r,open:p,close:d}),E=r?p:h,C=x(m=>{xt(m),i(m.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return u`
		<slot name="button" @click=${E}></slot>
		${o&&n?u`<slot></slot>`:u`<div
					popover
					style="position-area: ${t}"
					@toggle=${C}
					@select=${d}
					@focusout=${z}
					@focusin=${g}
					${V(m=>m&&(a.current=m))}
				>
					<slot></slot>
				</div>`}
	`};customElements.define("cosmoz-dropdown-next",A(kt,{styleSheets:[$t],observedAttributes:["placement","disabled","passthrough","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const te=ue(class extends Ae{constructor(e){if(super(e),e.type!==Z.PROPERTY&&e.type!==Z.ATTRIBUTE&&e.type!==Z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Je(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Y||t===W)return t;const o=e.element,n=e.name;if(e.type===Z.PROPERTY){if(t===o[n])return Y}else if(e.type===Z.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return Y}else if(e.type===Z.ATTRIBUTE&&o.getAttribute(n)===t+"")return Y;return et(e),t}}),Et=R`
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
		`,{styleSheets:[ee,Et]}));const ce=J(R`
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
`),fe=(e,t,o)=>tt(u`<cosmoz-tooltip-content>
			${$(t,()=>u`<strong slot="heading">${t}</strong>`)}
			${$(o,()=>u`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),Ct=(e,t)=>{const{for:o,heading:n,description:s,placement:r="top",delay:a=300,disabled:c=!1}=t,i=D(),d=!!(n||s)&&!c;k(()=>{if(!o||!d)return;const h=e.getRootNode(),z=h.adoptedStyleSheets??[];z.includes(ce)||(h.adoptedStyleSheets=[...z,ce]);const g=document.createElement("div");g.setAttribute("popover","manual"),g.setAttribute("role","tooltip"),g.classList.add("cosmoz-tooltip-popover"),e.after(g),i.current=g,fe(g,n,s);const E=`[name="${o}"]`,C=`--tooltip-anchor-${o}`;let m;const y=w=>{c||(clearTimeout(m),w.style.anchorName=C,g.style.positionAnchor=C,g.style.positionArea=r,m=window.setTimeout(()=>g.showPopover(),a))},F=()=>{clearTimeout(m),g.hidePopover()},O=w=>{const b=w.target.closest?.(E);b&&y(b)},L=w=>{const b=w.target.closest?.(E);if(!b)return;const T=w.relatedTarget;T&&b.contains(T)||F()},P=w=>{const b=w.target.closest?.(E);b&&y(b)},I=w=>{w.target.closest?.(E)&&F()};return h.addEventListener("pointerover",O),h.addEventListener("pointerout",L),h.addEventListener("focusin",P),h.addEventListener("focusout",I),()=>{clearTimeout(m),h.removeEventListener("pointerover",O),h.removeEventListener("pointerout",L),h.removeEventListener("focusin",P),h.removeEventListener("focusout",I),g.hidePopover(),g.remove(),i.current=void 0}},[o,r,a,d]),k(()=>{!o||!i.current||fe(i.current,n,s)},[n,s,o]),k(()=>{!c||!i.current||i.current.hidePopover()},[c])},Tt=e=>{const[t,o]=pe(!1);return k(()=>{const n=e.current;if(!n)return;const s=()=>{o(n.assignedElements().length>0)};return s(),n.addEventListener("slotchange",s),()=>n.removeEventListener("slotchange",s)},[e.current]),t},At=R`
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
`,St=e=>{const{heading:t,description:o,for:n,placement:s="top",delay:r=300,disabled:a=!1}=e,c=D(),i=D(),p=D(),d=Tt(p),z=!!(t||o||d)&&!a,g=x(()=>{z&&(clearTimeout(i.current),i.current=window.setTimeout(()=>{c.current?.showPopover()},r))},[r,z]);k(()=>{a&&(clearTimeout(i.current),c.current?.hidePopover())},[a]);const E=x(()=>{clearTimeout(i.current),c.current?.hidePopover()},[]);return k(()=>{if(n)return;const C=m=>{const y=m.relatedTarget;y&&e.contains(y)||E()};return e.addEventListener("pointerover",g),e.addEventListener("pointerout",C),()=>{e.removeEventListener("pointerover",g),e.removeEventListener("pointerout",C)}},[n,g,E]),Ct(e,{for:n,heading:t,description:o,placement:s,delay:r,disabled:a}),n?W:z?u`
		<slot @focusin=${g} @focusout=${E}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${V(c)}
		>
			<cosmoz-tooltip-content>
				${$(t,()=>u`<strong slot="heading">${t}</strong>`)}
				${$(o,()=>u`<p slot="description">${o}</p>`)}
				<slot name="content" ${V(p)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:u`
			<slot></slot>
			<slot name="content" ${V(p)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",A(St,{styleSheets:[ee,ce,At],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Oe=(e,{hint:t,label:o,invalid:n,errorMessage:s,compact:r,required:a})=>u`
		<!-- label: hidden in compact mode -->
		${$(!r&&o,()=>u`<label for="input" part="label"
					>${o}
					${$(a,()=>u`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${$(r&&n&&s,()=>u`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${ft({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${$(!r&&t&&!n,()=>u`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${$(!r&&n&&s,()=>u`<span class="error" part="error">${s}</span>`)}
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
`,Rt=e=>M(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ot=ot(class extends nt{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),Lt=/([A-Z])/gu,be=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Lt,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Ie=e=>{const t=D(void 0),o=x(i=>t.current=i,[]),n=e.shadowRoot,s=x(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),r=x(i=>be(e,"value",i.target.value),[]),a=x(i=>be(e,"focused",i.type==="focus"),[]),c=x(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return Ot({validate:c},[c]),k(()=>{const i=p=>{p.composedPath()[0]?.closest?.("input, textarea, label")||(p.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",i),()=>n.removeEventListener("mousedown",i)},[]),{onChange:s,onFocus:a,onInput:r,onRef:o}},Pt=({placeholder:e})=>e||" ",It=(e,t)=>t??(e==="date"?"9999-12-31":void 0),qt=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Le],_t=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:a,disabled:c,min:i,max:p,step:d,maxlength:h,required:z}=e,{onChange:g,onFocus:E,onInput:C,onRef:m}=Ie(e),y=Rt(n);return e.toggleAttribute("has-value",!!r),Oe(u`
			<input
				${V(m)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${f(o)}
				autocomplete=${f(s)}
				placeholder=${Pt({placeholder:e.placeholder})}
				?readonly=${a}
				aria-disabled=${c?"true":"false"}
				?disabled=${c}
				?required=${z}
				.value=${te(r??"")}
				maxlength=${f(h)}
				@beforeinput=${y}
				@input=${C}
				@change=${g}
				@focus=${E}
				@blur=${E}
				min=${f(i)}
				max=${f(It(t,p))}
				step=${f(d)}
			/>
		`,e)};customElements.define("cosmoz-input",A(_t,{observedAttributes:qt,styleSheets:[J(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ze=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Nt=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},Mt=e=>{const{value:t,maxRows:o}=e,n=M(()=>()=>e.shadowRoot.querySelector("#input"),[]);k(()=>Nt(n(),o),[o,n]),k(()=>ze(n()),[n,t]),k(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>ze(s)));return r.observe(s),()=>r.unobserve(s)},[n])},Yt=["rows","placeholder","label","hint","required",...Le],Bt=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:s,disabled:r,rows:a,cols:c,maxlength:i}=e,{onChange:p,onFocus:d,onInput:h,onRef:z}=Ie(e);return Mt(e),Oe(u`
			<textarea id="input" part="input"
				${V(z)}
				autocomplete=${f(t)}
				placeholder=${n||" "}
				rows=${a??1} cols=${f(c)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${te(o??"")} maxlength=${f(i)} @input=${h}
				@change=${p} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",A(Bt,{observedAttributes:Yt,styleSheets:[J(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Dt=e=>{const{label:t,value:o,disabled:n,error:s}=e,r=x(a=>e.dispatchEvent(new CustomEvent("change",{detail:a.target.checked})),[]);return u`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${te(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${$(t,()=>u`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${$(s,a=>u`<div class="failure">${a}</div>`)} `},jt=R`
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
`;customElements.define("cosmoz-toggle",A(Dt,{styleSheets:[Ft,jt],observedAttributes:["label","disabled","error"]}));const Ht={},ye=ue(class extends Ae{constructor(){super(...arguments),this.ot=Ht}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return Y}else if(this.ot===t)return Y;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});class Ut{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Zt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const we=e=>!rt(e)&&typeof e.then=="function",xe=1073741823;class Vt extends dt{constructor(){super(...arguments),this._$Cwt=xe,this._$Cbt=[],this._$CK=new Ut(this),this._$CX=new Zt}render(...t){return t.find(o=>!we(o))??Y}update(t,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<o.length&&!(c>this._$Cwt);c++){const i=o[c];if(!we(i))return this._$Cwt=c,i;c<s&&i===n[c]||(this._$Cwt=xe,s=0,Promise.resolve(i).then(async p=>{for(;a.get();)await a.get();const d=r.deref();if(d!==void 0){const h=d._$Cbt.indexOf(i);h>-1&&h<d._$Cwt&&(d._$Cwt=h,d.setValue(p))}}))}return Y}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const $e=ue(Vt),Gt=({content:e,onClear:t,disabled:o,className:n="chip",hidden:s,slot:r})=>u`<cosmoz-tag
		class=${f(n)}
		slot=${f(r)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${s}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${f(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Kt=({value:e,min:t=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=Gt})=>[...e.filter(Boolean).map(a=>r({item:a,content:n(a),onClear:e.length>t&&(()=>o(a)),disabled:s,slot:"control"})),r({item:null,content:u`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Xt=R`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",A(()=>W,{styleSheets:[Xt]}));const Qt=Re`
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
`,he=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),o),o)},ke=e=>e.type||e.toString(),Ee=e=>Array.isArray(e)?e:[e],Wt=(e,t)=>{const o=Ee(t),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:Ee(s).map(ke),handle:r}));return(s=e,r)=>{const a=n.find(c=>c.actions.includes(ke(r)));return a?a.handle(s,r):s}},j={pending:"pending",rejected:"rejected",resolved:"resolved"},qe={error:void 0,result:void 0,state:j.pending},_e=he(j.pending),Ne=he(j.resolved,e=>({result:e})),Me=he(j.rejected,e=>({error:e})),Jt=Wt(qe,[[_e,()=>({error:void 0,result:void 0,state:j.pending})],[Ne,(e,{result:t})=>({error:void 0,result:t,state:j.resolved})],[Me,(e,{error:t})=>({error:t,result:void 0,state:j.rejected})]]),eo=e=>{const[{error:t,result:o,state:n},s]=st(Jt,qe);return k(()=>{if(!e)return;let r=!1;return s(_e()),e.then(a=>!r&&s(Ne(a)),a=>!r&&s(Me(a))),()=>{r=!0}},[e]),[o,t,n]},Ce=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),to=(e,t,o)=>{if(!t)return e;const n=Ce(t.toLowerCase()),s=[];for(const r of e){const c=Ce(o(r).toLowerCase()).indexOf(n);c<0||s.push({item:r,index:c})}return s.sort((r,a)=>r.index-a.index).map(({item:r})=>r)},oo=e=>e===!1||e==null?[]:e,no=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),Te=[],ro=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},so=(e,t,o)=>x(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),io=({value:e,text:t,mode:o,onChange:n,onText:s,onSelect:r,limit:a,min:c,source:i,textProperty:p,textual:d,valueProperty:h,keepOpened:z,keepQuery:g,preserveOrder:E,defaultIndex:C,externalSearch:m,disabled:y,lazyOpen:F})=>{const O=a!=null?Number(a):void 0,L=c!=null?Number(c):void 0,P=o==="select",I=M(()=>(d??pt)(p),[d,p]),w=Se(),[b,T]=de("opened",!1),q=!t,S=M(()=>t?.trim(),[t]),H=so(w,s,"text"),oe=x(v=>{n?.(v,()=>T(!1));const U=P?v[0]:v;no(w,"value",U)},[n]),[ne,Fe]=pe([]),G=!!(F&&!S),K=M(()=>G?Promise.resolve([]):Promise.resolve(typeof i=="function"?i({query:S,active:b}):i).then(oo),[i,b,S,G]),B=M(()=>Q(e),[e]);k(()=>K.then(Fe),[K]),ve({activity:it,callback:()=>{const v=Q(B);v.length>(L??0)&&oe(v.slice(0,-1))},check:()=>!y&&q&&w.matches(":focus-within"),element:()=>w},[]),ve({activity:at,callback:v=>{const U=Q(B),re=O===1;U.length>0&&re&&v.key.length===1&&oe(U.slice(0,-1))},allowDefault:!0,check:()=>!y&&q&&w.matches(":focus-within"),element:()=>w},[O]),k(()=>{!b&&!g&&H("")},[b,g]),k(()=>{w.toggleAttribute("opened",!!b)},[b]);const _=ct({onText:H,onChange:oe,value:B,limit:O,min:L,keepQuery:g,keepOpened:z,setOpened:T,onSelect:r,valueProperty:h}),[,,He]=eo(K);return{limit:O,opened:b,query:S,textual:I,value:B,source$:K,loading:He==="pending",items:M(()=>{if(!b||G)return Te;const v=E?ne:[...B,...ie(B,ae(h))(ne)];return m?v:to(v,S,I)},[ne,b,S,I,q,B,E,h,m,G]),onToggle:x(v=>{y||T(v.newState==="open")},[y]),onText:x(v=>{y||(H(v.target.value),T(!0))},[y,H,t,T]),onSelect:x(v=>{if(y)return;_.onSelect?.(v,_);const{onChange:U,onText:re,limit:Ue,min:Ze,value:Ve,keepQuery:Ge,keepOpened:Ke,setOpened:Xe,valueProperty:Qe}=_;Ge||re(""),Ke||Xe(!1);const X=Q(Ve),se=ae(Qe),ge=X.some(We=>se(We)===se(v));ge&&X.length===Ze||U((ge?ie(v,se)(X):[...X,v]).slice(-Ue))},[y,_]),onDeselect:x(v=>{y||_.onChange(ie(v,ae(_.valueProperty))(_.value))},[y,_]),defaultIndex:S!==void 0&&S?.length>0?0:C}},ao=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const c of t)c.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const i=t[r].getBoundingClientRect();if(!(i.x+i.width<=s.x+s.width-24))break}const a=t.length-r;for(o.querySelector("span").textContent="+"+a.toString(),o.hidden=a<1;r<t.length;r++)t[r].hidden=!0},co=({value:e,opened:t,wrap:o,limit:n})=>{const s=Se(),r=!(o||n===1)&&e.length>0,a=M(()=>ro(()=>ao(s)),[]),[c,i]=pe(0);me(()=>{if(!r)return;const p=s.shadowRoot.querySelector("cosmoz-input"),d=new ResizeObserver(h=>{i(h[0].contentRect.width)});return d.observe(p),()=>d.disconnect()},[r]),me(()=>r?a():void 0,[r,c,t,e])},lo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),po=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,uo=e=>{const{variant:t,opened:o,invalid:n,errorMessage:s,hint:r,label:a,placeholder:c,compact:i,required:p,disabled:d,textual:h,text:z,onText:g,onToggle:E,onDeselect:C,value:m,limit:y,min:F,showSingle:O,items:L,source$:P,loading:I,chipRenderer:w,mode:b}=e,T=y===1,q=T&&m?.[0]!=null,S=I||L.length>0||z!=null&&z.length>0;return u`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${d}
			.opened=${o}
			@dropdown-toggle=${E}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${a}
				.placeholder=${q?void 0:c}
				hint=${f(r)}
				variant=${f(t)}
				?compact=${i}
				?readonly=${q}
				?disabled=${d}
				?required=${p}
				?invalid=${ye([P,n],()=>$e(P.then(()=>n,()=>!0),n))}
				.errorMessage=${ye([P,s],()=>$e(P.then(()=>s,H=>H.message),s))}
				.value=${te(z)}
				@value-changed=${g}
				autocomplete="off"
				exportparts=${lo}
				?data-one=${T}
				?data-single=${q}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${$(b==="select",()=>vt({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Kt({value:m,min:F,onDeselect:C,textual:h,disabled:d,chipRenderer:w})}
			</cosmoz-input>

			${$(po({opened:o,isSingle:q,showSingle:O,hasResultsOrQuery:S}),()=>ut({...e,items:L,multi:!T},$(I,()=>u`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>$(z!=null&&z.length>0&&L.length===0,()=>u`<slot name="no-result">
											<span class="no-result">${lt("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Ye=e=>{const t={...e,...io(e)};return co(t),uo(t)},Be=["variant","disabled","invalid","required","compact","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],ho=e=>{const{onChange:t,onText:o,mode:n,...s}=e,r=n==="select",[a,c]=de("value");return k(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ye({...s,...r&&{limit:1,min:1,showSingle:!0},mode:n,value:a,onChange:x((i,...p)=>{c(r?i[0]:i),t?.(i,...p)},[t,r]),onText:x(i=>{e.text=i,o?.(i)},[o])})},De=[ht(Qt)],je={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",A(Ye,{observedAttributes:Be,styleSheets:De,shadowRootInit:je}));customElements.define("cosmoz-autocomplete",A(ho,{observedAttributes:Be,styleSheets:De,shadowRootInit:je}));export{Ye as A,Be as a,vt as c,f as o,Qt as s};
