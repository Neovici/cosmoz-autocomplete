import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';
import {
	ItemRendererOpts,
	optionAttributes,
} from '../../src/listbox/item-renderer';

// Combobox contract (WAI-ARIA combobox pattern, as implemented by Base UI's
// Combobox): roles, reflected references and keyboard behaviour.

interface Args {
	label?: string;
	limit?: number;
	mode?: 'select';
	value?: { text: string }[];
	itemLimit?: number;
	count?: number;
	preserveOrder?: boolean;
	onChange?: (v: unknown) => void;
}

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'].map(
	(text) => ({ text }),
);

const many = (count: number) =>
	Array.from({ length: count }, (_, i) => ({ text: `Item ${i}` }));

const render = ({
	label = 'Color',
	limit,
	mode,
	value,
	itemLimit,
	count,
	preserveOrder,
}: Args): TemplateResult =>
	html`<cosmoz-autocomplete
		.label=${label}
		.source=${count ? many(count) : colors}
		.value=${value}
		.limit=${limit}
		.mode=${mode}
		.itemLimit=${itemLimit}
		.preserveOrder=${preserveOrder}
		text-property="text"
	></cosmoz-autocomplete>`;

const meta: Meta<Args> = {
	title: 'Tests/Combobox',
	render,
	tags: ['!autodocs'],
	parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<Args>;

const parts = async (canvasElement: HTMLElement, index = 0) => {
	await waitFor(() =>
		expect(
			canvasElement
				.querySelectorAll('cosmoz-autocomplete')
				[index]?.shadowRoot?.querySelector('cosmoz-input')
				?.shadowRoot?.querySelector('#input'),
		).toBeTruthy(),
	);
	const host = canvasElement.querySelectorAll('cosmoz-autocomplete')[index];
	const root = host.shadowRoot!;
	return {
		host,
		input: () =>
			root
				.querySelector('cosmoz-input')!
				.shadowRoot!.querySelector<HTMLInputElement>('#input')!,
		listbox: () => root.querySelector<HTMLElement>('[role="listbox"]'),
		option: (i: number) =>
			root.querySelector<HTMLElement>(`[role="option"][data-index="${i}"]`),
		highlighted: () =>
			root.querySelector<HTMLElement>('[role="option"][data-highlighted]'),
	};
};

const open = async (input: HTMLInputElement) => {
	await userEvent.click(input);
	await waitFor(() => expect(input.getAttribute('aria-expanded')).toBe('true'));
	const root = (
		input.getRootNode() as ShadowRoot
	).host.getRootNode() as ShadowRoot;
	await waitFor(() =>
		expect(root.querySelector('[role="option"][data-index="0"]')).toBeTruthy(),
	);
};

export const Roles: Story = {
	play: async ({ canvasElement }) => {
		const { input, listbox, option } = await parts(canvasElement);
		await waitFor(() => expect(input().getAttribute('role')).toBe('combobox'));
		expect(input().getAttribute('aria-autocomplete')).toBe('list');
		expect(input().getAttribute('aria-expanded')).toBe('false');
		expect(input().ariaControlsElements).toBeNull();

		await open(input());
		expect(listbox()!.getAttribute('aria-label')).toBe('Color');
		expect(listbox()!.hasAttribute('aria-multiselectable')).toBe(true);
		expect(input().ariaControlsElements).toEqual([listbox()]);
		expect(option(0)!.getAttribute('aria-selected')).toBe('false');
		expect(option(0)!.getAttribute('aria-posinset')).toBe('1');
		expect(option(0)!.getAttribute('aria-setsize')).toBe('6');
	},
};

export const SingleSelectIsNotMultiselectable: Story = {
	args: { limit: 1 },
	play: async ({ canvasElement }) => {
		const { input, listbox } = await parts(canvasElement);
		await open(input());
		expect(listbox()!.hasAttribute('aria-multiselectable')).toBe(false);
	},
};

export const ActiveDescendantFollowsHighlight: Story = {
	play: async ({ canvasElement }) => {
		const { input, option, highlighted } = await parts(canvasElement);
		await open(input());
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(0)),
		);
		expect(highlighted()).toBe(option(0));

		await userEvent.keyboard('{ArrowDown}{ArrowDown}');
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(2)),
		);
		expect(highlighted()).toBe(option(2));
	},
};

export const SelectedOptionsReportSelection: Story = {
	args: { value: [{ text: 'Red' }] },
	play: async ({ canvasElement }) => {
		const { input, option } = await parts(canvasElement);
		await open(input());
		await waitFor(() =>
			expect(option(0)!.getAttribute('aria-selected')).toBe('true'),
		);
		expect(option(1)!.getAttribute('aria-selected')).toBe('false');
	},
};

export const EnterSelectsHighlighted: Story = {
	play: async ({ canvasElement }) => {
		const { host, input } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await waitFor(() =>
			expect(host.shadowRoot!.querySelector('.chip')?.textContent).toContain(
				'Green',
			),
		);
	},
};

export const HomeEndMoveTheCaretWhileEditable: Story = {
	play: async ({ canvasElement }) => {
		const { input, highlighted, option } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() => expect(highlighted()).toBe(option(1)));
		await userEvent.keyboard('{End}');
		await new Promise((r) => setTimeout(r, 100));
		expect(highlighted()).toBe(option(1));
	},
};

export const HomeEndNavigateInSelectMode: Story = {
	args: { mode: 'select', value: colors[0] as never },
	play: async ({ canvasElement }) => {
		const { input, highlighted, option } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{End}');
		await waitFor(() => expect(highlighted()).toBe(option(5)));
		await userEvent.keyboard('{Home}');
		await waitFor(() => expect(highlighted()).toBe(option(0)));
	},
};

export const PageKeysMoveByVisiblePage: Story = {
	args: { count: 30, itemLimit: 5 },
	play: async ({ canvasElement }) => {
		const { input, option } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{PageDown}');
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(5)),
		);
		await userEvent.keyboard('{PageDown}{PageUp}');
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(5)),
		);
	},
};

export const ActiveDescendantReachesScrolledInOptions: Story = {
	args: { count: 100, itemLimit: 5 },
	play: async ({ canvasElement }) => {
		const { input, option } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{ArrowUp}');
		await waitFor(() => expect(option(99)).toBeTruthy());
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(99)),
		);
	},
};

export const ArrowDownOpensAClosedList: Story = {
	play: async ({ canvasElement }) => {
		const { input } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{Escape}');
		await waitFor(() =>
			expect(input().getAttribute('aria-expanded')).toBe('false'),
		);
		expect(input().ariaActiveDescendantElement).toBeNull();

		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() =>
			expect(input().getAttribute('aria-expanded')).toBe('true'),
		);
	},
};

const reopen = async (input: HTMLInputElement, keys: string) => {
	await open(input);
	await userEvent.keyboard('{Escape}');
	await waitFor(() =>
		expect(input.getAttribute('aria-expanded')).toBe('false'),
	);
	await userEvent.keyboard(keys);
	await waitFor(() => expect(input.getAttribute('aria-expanded')).toBe('true'));
};

export const AltArrowDownOpensWithoutHighlight: Story = {
	play: async ({ canvasElement }) => {
		const { input, option, highlighted } = await parts(canvasElement);
		await reopen(input(), '{Alt>}{ArrowDown}{/Alt}');
		await waitFor(() => expect(option(0)).toBeTruthy());
		await new Promise((r) => setTimeout(r, 100));
		expect(highlighted()).toBeNull();
		expect(input().ariaActiveDescendantElement).toBeNull();

		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() => expect(highlighted()).toBe(option(0)));
	},
};

export const ArrowUpOpensOnTheLastOption: Story = {
	play: async ({ canvasElement }) => {
		const { input, option, highlighted } = await parts(canvasElement);
		await reopen(input(), '{ArrowUp}');
		await waitFor(() => expect(highlighted()).toBe(option(5)));
		expect(input().ariaActiveDescendantElement).toBe(option(5));
	},
};

export const OpeningHighlightsTheSelectedOption: Story = {
	args: { value: [colors[2]], preserveOrder: true },
	play: async ({ canvasElement }) => {
		const { input, option, highlighted } = await parts(canvasElement);
		await open(input());
		await waitFor(() => expect(highlighted()).toBe(option(2)));

		await reopen(input(), '{ArrowDown}');
		await waitFor(() => expect(highlighted()).toBe(option(2)));
	},
};

const composing = (input: HTMLInputElement, key: string, init: object) =>
	input.dispatchEvent(
		new KeyboardEvent('keydown', {
			key,
			bubbles: true,
			composed: true,
			cancelable: true,
			...init,
		}),
	);

export const IgnoresKeysWhileComposing: Story = {
	play: async ({ canvasElement }) => {
		const { host, input, option, highlighted } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() => expect(highlighted()).toBe(option(1)));

		for (const init of [{ isComposing: true }, { keyCode: 229 }]) {
			expect(composing(input(), 'Enter', init)).toBe(true);
			expect(composing(input(), 'Escape', init)).toBe(true);
			expect(composing(input(), 'ArrowDown', init)).toBe(true);
		}
		await new Promise((r) => setTimeout(r, 100));
		expect(host.shadowRoot!.querySelector('.chip')).toBeNull();
		expect(input().getAttribute('aria-expanded')).toBe('true');
		expect(highlighted()).toBe(option(1));
	},
};

export const AltArrowUpCloses: Story = {
	play: async ({ canvasElement }) => {
		const { input } = await parts(canvasElement);
		await open(input());
		await userEvent.keyboard('{Alt>}{ArrowUp}{/Alt}');
		await waitFor(() =>
			expect(input().getAttribute('aria-expanded')).toBe('false'),
		);
	},
};

export const KeysGoToTheFocusedCombobox: Story = {
	render: (args) =>
		html`${render(args)} ${render({ ...args, label: 'Other' })}`,
	play: async ({ canvasElement }) => {
		const first = await parts(canvasElement, 0);
		const second = await parts(canvasElement, 1);
		await open(second.input());
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await waitFor(() =>
			expect(
				second.host.shadowRoot!.querySelector('.chip')?.textContent,
			).toContain('Green'),
		);
		expect(first.host.shadowRoot!.querySelector('.chip')).toBeNull();
	},
};

export const CustomRendererWithOptionAttributes: Story = {
	render: (args) =>
		html`<cosmoz-autocomplete
			label="Color"
			text-property="text"
			.source=${colors}
			.value=${args.value}
			.itemRenderer=${(
				item: { text: string },
				i: number,
				opts: ItemRendererOpts<{ text: string }>,
			) =>
				html`<div
					class="item custom"
					part="option"
					${optionAttributes(item, i, opts)}
					@mouseenter=${() => opts.highlight(i)}
				>
					<b>${item.text}</b>
				</div>`}
		></cosmoz-autocomplete>`,
	args: { value: [colors[1]] },
	play: async ({ canvasElement }) => {
		const { input, option, highlighted } = await parts(canvasElement);
		await open(input());
		await waitFor(() =>
			expect(input().ariaActiveDescendantElement).toBe(option(0)),
		);
		expect(option(0)!.classList.contains('custom')).toBe(true);
		expect(option(0)!.getAttribute('aria-selected')).toBe('true');
		expect(option(0)!.getAttribute('aria-posinset')).toBe('1');
		expect(option(0)!.getAttribute('aria-setsize')).toBe('6');

		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() => expect(highlighted()).toBe(option(1)));
		expect(option(0)!.hasAttribute('data-highlighted')).toBe(false);
		expect(input().ariaActiveDescendantElement).toBe(option(1));
	},
};
