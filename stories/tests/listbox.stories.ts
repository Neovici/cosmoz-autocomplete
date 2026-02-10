import { prop } from '@neovici/cosmoz-utils/object';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../../src/listbox';

interface ListboxArgs {
	items: string[] | { text: string }[];
	textual?: (i: unknown) => string;
	query?: string;
	onSelect?: (i: unknown) => void;
	value?: unknown;
	valueProperty?: string;
	defaultIndex?: number;
	itemLimit?: number;
}

const ListboxTest = ({
	items,
	textual,
	query,
	onSelect,
	value,
	valueProperty,
	defaultIndex,
	itemLimit,
}: ListboxArgs): TemplateResult => html`
	<cosmoz-listbox
		.items=${items}
		.textual=${textual}
		.query=${query}
		.onSelect=${onSelect}
		.value=${value}
		.valueProperty=${valueProperty}
		.defaultIndex=${defaultIndex}
		.itemLimit=${itemLimit}
	></cosmoz-listbox>
`;

const waitForLayout = async () => {
	const listbox = document.querySelector('cosmoz-listbox');
	await new Promise<void>((resolve) => {
		listbox?.addEventListener('layout-complete', () => resolve(), {
			once: true,
		});
	});
};

const meta: Meta<ListboxArgs> = {
	title: 'Tests/Listbox',
	render: ListboxTest,
	tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<ListboxArgs>;

export const Basic: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
	},
	play: async () => {
		await waitForLayout();
		const listbox = document.querySelector('cosmoz-listbox')!;
		const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
		expect(items?.length).toBe(3);
		expect(items?.[0]?.textContent?.trim()).toBe('Item 0');
		expect(items?.[1]?.textContent?.trim()).toBe('Item 1');
		expect(items?.[2]?.textContent?.trim()).toBe('Item 2');
	},
};

export const KeyboardNavigation: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// Arrow down moves to next item
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{ArrowDown}');

		// Enter selects the highlighted item (index 2)
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
		});
	},
};

export const KeyboardCycling: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// Arrow up from first item cycles to last
		await userEvent.keyboard('{ArrowUp}');
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
		});
	},
};

export const TextualProperty: Story = {
	args: {
		items: [{ text: 'Apple' }, { text: 'Banana' }, { text: 'Cherry' }],
		textual: prop('text'),
	},
	play: async () => {
		await waitForLayout();
		const listbox = document.querySelector('cosmoz-listbox')!;
		const firstItem = listbox.shadowRoot?.querySelector('.item[role="option"]');
		expect(firstItem?.textContent?.trim()).toBe('Apple');
	},
};

export const QueryHighlight: Story = {
	args: {
		items: [{ text: 'Apple' }, { text: 'Banana' }, { text: 'Apricot' }],
		textual: prop('text'),
		query: 'an',
	},
	play: async () => {
		await waitForLayout();
		const listbox = document.querySelector('cosmoz-listbox')!;
		// The 'an' in 'Banana' should be highlighted with <mark>
		const mark = listbox.shadowRoot?.querySelector('mark');
		expect(mark).toBeTruthy();
		expect(mark?.textContent).toBe('an');
	},
};

export const MouseInteraction: Story = {
	args: {
		items: ['Click me', 'Or me', 'Or this one'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		const listbox = document.querySelector('cosmoz-listbox')!;
		const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
		const secondItem = items?.[1];
		expect(secondItem).toBeTruthy();

		await userEvent.click(secondItem!);

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Or me');
		});
	},
};

export const DefaultIndex: Story = {
	args: {
		items: ['First', 'Second', 'Third'],
		defaultIndex: 1,
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// Enter should select the default index (1 = 'Second')
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Second', 1);
		});
	},
};

export const KeyboardDownCycling: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// ArrowDown 3 times: index 0 → 1 → 2 → wraps to 0
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
		});
	},
};

export const KeyboardUpNavigation: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// ArrowDown to index 1, then ArrowUp back to index 0
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.keyboard('{ArrowUp}');
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
		});
	},
};

export const HighlightAndEnter: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2', 'Item 3'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		const listbox = document.querySelector('cosmoz-listbox')!;
		const items = listbox.shadowRoot?.querySelectorAll('.item[role="option"]');
		const targetItem = items?.[2];
		expect(targetItem).toBeTruthy();

		// Dispatch mouseenter to highlight item at index 2
		targetItem!.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

		// Enter should select the highlighted item
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 2', 2);
		});
	},
};

export const EnterDefaultIndex0: Story = {
	args: {
		items: ['Item 0', 'Item 1', 'Item 2'],
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();

		// With default defaultIndex (0), Enter immediately selects first item
		await userEvent.keyboard('{Enter}');

		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
		});
	},
};

const getHighlightedIndex = (listbox: Element) => {
	const items = listbox.shadowRoot!.querySelectorAll('.item[role="option"]');
	for (const item of items) {
		const bg = getComputedStyle(item).backgroundColor;
		if (bg !== 'rgba(0, 0, 0, 0)')
			{return Number(item.getAttribute('data-index'));}
	}
	return -1;
};

export const KeyboardFullCycle: Story = {
	args: {
		items: Array.from({ length: 10 }, (_, i) => `Item ${i}`),
		itemLimit: 5,
		onSelect: fn(),
	},
	play: async ({ args }) => {
		await waitForLayout();
		const listbox = document.querySelector('cosmoz-listbox')!;

		// Initial highlight should be on index 0
		await waitFor(() => {
			expect(getHighlightedIndex(listbox)).toBe(0);
		});

		// Arrow down through all items, verifying highlight at each step
		for (let i = 1; i < 10; i++) {
			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() => {
				expect(getHighlightedIndex(listbox)).toBe(i);
			});
		}

		// One more ArrowDown wraps back to 0
		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() => {
			expect(getHighlightedIndex(listbox)).toBe(0);
		});

		// Enter selects the wrapped-around item
		await userEvent.keyboard('{Enter}');
		await waitFor(() => {
			expect(args.onSelect).toHaveBeenCalledWith('Item 0', 0);
		});
	},
};
