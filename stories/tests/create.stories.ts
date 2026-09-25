import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';

interface Item {
	text: string;
}

interface Args {
	onCreate?: (query: string) => Item | void | Promise<Item | void>;
	createLabel?: (query: string) => string;
	limit?: number;
}

const colors = ['Red', 'Green', 'Blue'].map((text) => ({ text }));

const render = ({ onCreate, createLabel, limit }: Args) =>
	html`<cosmoz-autocomplete
		label="Color"
		text-property="text"
		.source=${colors}
		.limit=${limit}
		.onCreate=${onCreate}
		.createLabel=${createLabel}
	></cosmoz-autocomplete>`;

const meta: Meta<Args> = {
	title: 'Tests/Create',
	render,
	tags: ['!autodocs'],
	parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<Args>;

const setup = async (canvasElement: HTMLElement) => {
	const root = canvasElement.querySelector('cosmoz-autocomplete')!.shadowRoot!;
	const input = () =>
		root
			.querySelector('cosmoz-input')
			?.shadowRoot?.querySelector<HTMLInputElement>('#input');
	await waitFor(() => expect(input()).toBeTruthy());
	return {
		input: input()!,
		create: () => root.querySelector<HTMLElement>('[part~="create"]'),
		options: () => [...root.querySelectorAll('[role="option"]')],
		chips: () =>
			[...root.querySelectorAll('.chip')].map((c) => c.textContent!.trim()),
		noResult: () => root.querySelector('.no-result'),
	};
};

export const OffersCreateForUnmatchedQuery: Story = {
	args: { onCreate: fn((text: string) => ({ text })) },
	play: async ({ canvasElement, args }) => {
		const { input, create, options, chips, noResult } =
			await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Teal');
		await waitFor(() => expect(create()).toBeTruthy());
		expect(create()!.getAttribute('role')).toBe('option');
		expect(create()!.textContent!.trim()).toBe('Create "Teal"');
		expect(options()).toHaveLength(1);
		expect(noResult()).toBeNull();

		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(chips()).toContain('Teal'));
		expect(args.onCreate).toHaveBeenCalledWith('Teal');
	},
};

export const CreateComesAfterPartialMatches: Story = {
	args: { onCreate: fn((text: string) => ({ text })) },
	play: async ({ canvasElement }) => {
		const { input, create, options } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Re');
		await waitFor(() => expect(create()).toBeTruthy());
		const texts = options().map((o) => o.textContent!.trim());
		expect(texts[texts.length - 1]).toBe('Create "Re"');
		expect(texts.slice(0, -1)).toEqual(['Red', 'Green']);
		expect(create()!.getAttribute('aria-setsize')).toBe('3');
	},
};

export const NoCreateForExactMatch: Story = {
	args: { onCreate: fn() },
	play: async ({ canvasElement }) => {
		const { input, create, options } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'blue');
		await waitFor(() => expect(options()).toHaveLength(1));
		expect(create()).toBeNull();
	},
};

export const NoCreateWithoutOnCreate: Story = {
	play: async ({ canvasElement }) => {
		const { input, create, noResult } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Teal');
		await waitFor(() => expect(noResult()).toBeTruthy());
		expect(create()).toBeNull();
	},
};

export const CustomCreateLabel: Story = {
	args: {
		onCreate: fn(),
		createLabel: (query: string) => `Use "${query}"`,
	},
	play: async ({ canvasElement }) => {
		const { input, create } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Teal');
		await waitFor(() =>
			expect(create()?.textContent!.trim()).toBe('Use "Teal"'),
		);
	},
};

export const AsyncCreateSelectsResolvedItem: Story = {
	args: {
		limit: 1,
		onCreate: (text: string) =>
			new Promise((resolve) => setTimeout(() => resolve({ text }), 100)),
	},
	play: async ({ canvasElement }) => {
		const { input, create, chips } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Teal');
		await waitFor(() => expect(create()).toBeTruthy());
		await userEvent.click(create()!);
		await waitFor(() => expect(chips()).toEqual(['Teal']));
	},
};

export const CreateReturningNothingSelectsNothing: Story = {
	args: { onCreate: fn() },
	play: async ({ canvasElement, args }) => {
		const { input, create, chips } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'Teal');
		await waitFor(() => expect(create()).toBeTruthy());
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(args.onCreate).toHaveBeenCalledWith('Teal'));
		await new Promise((r) => setTimeout(r, 100));
		expect(chips()).toEqual([]);
	},
};
