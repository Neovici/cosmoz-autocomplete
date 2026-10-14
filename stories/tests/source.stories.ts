import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/autocomplete';

interface Item {
	text: string;
}

interface Args {
	source: Item[] | ((opts: { query?: string }) => Promise<Item[]>);
	debounce?: number;
	externalSearch?: boolean;
}

const render = ({ source, debounce, externalSearch }: Args) =>
	html`<cosmoz-autocomplete
		label="Search"
		text-property="text"
		.source=${source}
		debounce=${debounce ?? 0}
		?external-search=${externalSearch}
	></cosmoz-autocomplete>`;

const meta: Meta<Args> = {
	title: 'Tests/Source',
	render,
	tags: ['!autodocs'],
	parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<Args>;

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

const setup = async (canvasElement: HTMLElement) => {
	const root = canvasElement.querySelector('cosmoz-autocomplete')!.shadowRoot!;
	const input = () =>
		root
			.querySelector('cosmoz-input')
			?.shadowRoot?.querySelector<HTMLInputElement>('#input');
	await waitFor(() => expect(input()).toBeTruthy());
	return {
		input: input()!,
		status: () => root.querySelector('.status')!.textContent!.trim(),
		options: () => root.querySelectorAll('[role="option"]'),
	};
};

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'].map(
	(text) => ({ text }),
);

export const AnnouncesResultCount: Story = {
	args: { source: colors },
	play: async ({ canvasElement }) => {
		const { input, status } = await setup(canvasElement);
		const region = (canvasElement
			.querySelector('cosmoz-autocomplete')!
			.shadowRoot!.querySelector('.status') as HTMLElement)!;
		expect(region.getAttribute('aria-live')).toBe('polite');
		expect(status()).toBe('');

		await userEvent.click(input);
		await waitFor(() => expect(status()).toBe('6 results'), { timeout: 2000 });

		await userEvent.type(input, 'Yel');
		await waitFor(() => expect(status()).toBe('1 result'), { timeout: 2000 });

		await userEvent.type(input, 'zz');
		await waitFor(() => expect(status()).toBe('No results found'), {
			timeout: 2000,
		});
	},
};

const items = ['a1', 'a2', 'ab1'].map((text) => ({ text }));

export const IgnoresStaleResponses: Story = {
	args: {
		externalSearch: true,
		// The response for 'a' arrives after the response for 'ab'.
		source: ({ query = '' }) =>
			new Promise((resolve) =>
				setTimeout(
					() => resolve(items.filter((i) => i.text.startsWith(query))),
					query === 'a' ? 400 : 50,
				),
			),
	},
	play: async ({ canvasElement }) => {
		const { input, options } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'ab');
		await wait(700);
		expect(options().length).toBe(1);
		expect(options()[0].textContent!.trim()).toBe('ab1');
	},
};

const queries: string[] = [];

export const DebouncesTheSource: Story = {
	args: {
		debounce: 300,
		externalSearch: true,
		source: ({ query = '' }) => {
			queries.push(query);
			return Promise.resolve(items.filter((i) => i.text.startsWith(query)));
		},
	},
	play: async ({ canvasElement }) => {
		queries.length = 0;
		const { input, options } = await setup(canvasElement);
		await userEvent.click(input);
		await userEvent.type(input, 'ab1');
		await wait(600);
		expect(queries.filter(Boolean)).toEqual(['ab1']);
		expect(options().length).toBe(1);
	},
};
