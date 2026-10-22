import { render, styles } from '@neovici/cosmoz-input';
import { tagged as css, sheet } from '@neovici/cosmoz-utils';
import { component, useEffect } from '@pionjs/pion';
import { html } from 'lit-html';

export interface TriggerProps {
	label?: string;
	errorMessage?: string;
	invalid?: boolean;
	disabled?: boolean;
	placeholder?: string;
	variant?: 'default' | 'cell' | 'inline';
	compact?: boolean;
	required?: boolean;
	hasValue?: boolean;
}

// The trigger opens the dropdown. Keys only count when they land on the
// host itself - not when they come from a chip's remove button.
const OPEN_KEYS = new Set(['Enter', ' ', 'ArrowDown', 'ArrowUp']);

// cosmoz-input styles ring the field with `.wrap:has(#input:focus)`;
// the trigger has no inner input, so ring it via focus-within.
const fieldFocus = css`
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
`;

const Trigger = (host: HTMLElement & TriggerProps) => {
	const {
		label,
		errorMessage,
		invalid,
		placeholder,
		compact,
		required,
		hasValue,
	} = host;

	useEffect(() => {
		const onKeydown = (e: KeyboardEvent) => {
			if (e.target !== host || host.hasAttribute('disabled')) {
				return;
			}
			if (e.defaultPrevented || !OPEN_KEYS.has(e.key)) {
				return;
			}
			e.preventDefault();
			host.click();
		};
		host.addEventListener('keydown', onKeydown);
		return () => host.removeEventListener('keydown', onKeydown);
	}, []);

	return render(
		placeholder != null && !hasValue
			? html`<span class="placeholder">${placeholder}</span>`
			: html``,
		{
			label,
			invalid,
			errorMessage,
			compact: !!compact,
			required: !!required,
			// no input element in this shadow: the for="input" reference
			// would dangle
			labelFor: null,
		},
	);
};

customElements.define(
	'cosmoz-autocomplete-trigger',
	component(Trigger, {
		styleSheets: [sheet(styles), sheet(fieldFocus)],
		observedAttributes: [
			'variant',
			'disabled',
			'invalid',
			'compact',
			'required',
			'has-value',
		] as const,
	}),
);
