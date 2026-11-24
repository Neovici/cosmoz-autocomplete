import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../../src/pills';

const meta: Meta = {
	title: 'Tests/Autocomplete Pills',
};

export default meta;

type Story = StoryObj;

export const CollapsesWhatDoesNotFit: Story = {
	render: () => html`
		<div style="width: 320px">
			<cosmoz-autocomplete-pills
				.source=${Array.from({ length: 12 }, (_, i) => ({
					text: `Label number ${i + 1}`,
				}))}
				.value=${Array.from({ length: 8 }, (_, i) => ({
					text: `Label number ${i + 1}`,
				}))}
				text-property="text"
				keep-opened
				.placeholder=${'Label'}
				.searchPlaceholder=${'Filter labels'}
			></cosmoz-autocomplete-pills>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-autocomplete-pills')!;
		const $ = <E extends Element>(sel: string) =>
			el.shadowRoot!.querySelector<E>(sel)!;
		const badge = () => $<HTMLElement>('.badge');
		const popover = () =>
			$('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;

		await step(
			'collapses what does not fit and keeps the add button',
			async () => {
				await waitFor(() => expect(badge().hidden).toBe(false));
				const add = $<HTMLElement>('.add').getBoundingClientRect();
				const row = $<HTMLElement>('.pill-row').getBoundingClientRect();
				expect(add.right).toBeLessThanOrEqual(row.right);
				const tooltip = $<HTMLElement>('cosmoz-tooltip[for="overflow"]');
				expect(badge().getAttribute('name')).toBe('overflow');
				expect(badge().hasAttribute('title')).toBe(false);
				expect(tooltip.getAttribute('description')!.split(', ').length).toBe(
					Number(badge().textContent!.trim().slice(1)),
				);
			},
		);

		await step('the badge names the hidden labels on hover', async () => {
			await userEvent.hover(badge());
			await waitFor(() =>
				expect($('[role="tooltip"]').matches(':popover-open')).toBe(true),
			);
			expect($('[role="tooltip"]').textContent).toContain('Label number 8');
		});

		await step('the badge opens the picker', async () => {
			await userEvent.click(badge());
			await waitFor(() =>
				expect(popover().matches(':popover-open')).toBe(true),
			);
		});

		await step(
			'searches inside the popover, with checks on selected',
			async () => {
				const listbox = () => $('cosmoz-listbox');
				await waitFor(() =>
					expect(listbox().hasAttribute('checkmark')).toBe(true),
				);
				await userEvent.type(
					$('cosmoz-input.search').shadowRoot!.querySelector('input')!,
					'12',
				);
				await waitFor(() =>
					expect(listbox().shadowRoot!.querySelectorAll('.item').length).toBe(
						1,
					),
				);
			},
		);
	},
};

const pillOf = (canvasElement: HTMLElement) => {
	const el = canvasElement.querySelector('cosmoz-autocomplete-pills')!;
	const $ = <E extends Element>(sel: string) =>
		el.shadowRoot!.querySelector<E>(sel)!;
	return { el, $, badge: () => $<HTMLElement>('.badge') };
};

export const CollapsesWhatDoesNotFitFits: Story = {
	render: () => html`
		<div style="display: inline-flex; width: 600px">
			<cosmoz-autocomplete-pills
				style="flex: 1"
				.source=${[{ text: 'Red' }, { text: 'Green' }, { text: 'Blue' }]}
				.value=${[{ text: 'Red' }, { text: 'Green' }, { text: 'Blue' }]}
				text-property="text"
				.placeholder=${'Label'}
			></cosmoz-autocomplete-pills>
		</div>
	`,
	play: async ({ canvasElement }) => {
		const { el, badge } = pillOf(canvasElement);
		await waitFor(() =>
			expect(
				el.shadowRoot!.querySelectorAll('.chip:not([hidden])').length,
			).toBe(3),
		);
		expect(badge().hidden).toBe(true);
		expect(getComputedStyle(badge()).display).toBe('none');
	},
};

export const CollapsesWhatDoesNotFitKeepsValueWhileSearching: Story = {
	render: () => html`
		<cosmoz-autocomplete-pills
			.source=${[{ text: 'Red' }, { text: 'Green' }]}
			.value=${[{ text: 'Red' }, { text: 'Green' }]}
			text-property="text"
			keep-opened
		></cosmoz-autocomplete-pills>
	`,
	play: async ({ canvasElement }) => {
		const { el, $ } = pillOf(canvasElement);
		await userEvent.click($('.add'));
		const input = () =>
			$('cosmoz-input.search').shadowRoot!.querySelector('input')!;
		await waitFor(() => expect(input()).toBeTruthy());
		await userEvent.type(input(), 'g{Backspace}{Backspace}{Backspace}');
		expect((el as unknown as { value: unknown[] }).value.length).toBe(2);
	},
};

export const CollapsesWhatDoesNotFitDisabled: Story = {
	render: () => html`
		<div style="width: 160px">
			<cosmoz-autocomplete-pills
				.source=${[{ text: 'Red' }, { text: 'Green' }, { text: 'Blue' }]}
				.value=${[{ text: 'Red' }, { text: 'Green' }, { text: 'Blue' }]}
				text-property="text"
				disabled
			></cosmoz-autocomplete-pills>
		</div>
	`,
	play: async ({ canvasElement }) => {
		const { el, badge } = pillOf(canvasElement);
		await waitFor(() => expect(badge().hidden).toBe(false));
		badge().click();
		await new Promise((resolve) => setTimeout(resolve, 100));
		expect(el.hasAttribute('opened')).toBe(false);
	},
};

export const CollapsesWhatDoesNotFitKeyboardOverflow: Story = {
	...CollapsesWhatDoesNotFit,
	play: async ({ canvasElement }) => {
		const { $, badge } = pillOf(canvasElement);
		const popover = () =>
			$('cosmoz-dropdown-next').shadowRoot!.querySelector('[popover]')!;
		await waitFor(() => expect(badge().hidden).toBe(false));
		expect(badge().tabIndex).toBe(0);
		badge().focus();
		await waitFor(() => expect(badge().matches(':focus')).toBe(true));
		await waitFor(() =>
			expect($('[role="tooltip"]').matches(':popover-open')).toBe(true),
		);
		expect($('[role="tooltip"]').textContent).toContain('Label number 8');
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(popover().matches(':popover-open')).toBe(true));
	},
};
