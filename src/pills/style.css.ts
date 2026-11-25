import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		display: block;
		position: relative;
	}

	/* chips followed by an "add" button that opens a search popover */
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
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 var(--cz-spacing);
		cursor: pointer;
	}

	.pill-row cosmoz-dropdown-next {
		display: block;
		flex: none;
	}

	.add,
	.overflow-button {
		display: inline-flex;
		align-items: center;
		gap: var(--cz-spacing);
		margin: 0;
		/* one chip row: the height follows the tag sizes */
		min-height: 1.6875rem;
		padding: 0 calc(var(--cz-spacing) * 2.5);
		border: 0;
		border-radius: var(--cz-radius-sm);
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

	.overflow-button[hidden],
	[hidden] {
		display: none;
	}

	.add svg {
		color: var(--cz-color-fg-quaternary);
	}

	.overflow-button:hover,
	.add:hover,
	:host([opened]) .add {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary);
	}

	.add:focus-visible,
	.overflow-button:focus-visible {
		outline: none;
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-focus-ring);
	}

	.add[disabled] {
		display: none;
	}

	:host([size='sm']) .add,
	:host([size='sm']) .overflow-button {
		min-height: 1.5rem;
		font-size: var(--cz-text-2xs);
		line-height: var(--cz-text-2xs-line-height);
	}

	:host([size='lg']) .add,
	:host([size='lg']) .overflow-button,
	:host([size='xl']) .add,
	:host([size='xl']) .overflow-button {
		min-height: 1.9375rem;
		border-radius: var(--cz-radius-md);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
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

	.no-result {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-secondary);
	}
`;
