import { expect, test, type Page } from '@playwright/test';

const story = (id: string) => `iframe.html?id=${id}&viewMode=story/`;

const listbox = (page: Page) =>
	page.locator('cosmoz-autocomplete cosmoz-listbox');

// with focus on the trigger the chip Remove buttons come first in tab
// order; keep tabbing (bounded loop) until the search input has focus
const focusSearch = async (page: Page) => {
	const input = listbox(page).locator('#search');
	const focused = () =>
		input.evaluate(
			(el) => (el.getRootNode() as ShadowRoot).activeElement === el,
		);
	for (let i = 0; i < 5; i++) {
		if (await focused()) {
			await expect(input).toBeFocused();
			return;
		}
		await page.keyboard.press('Tab');
	}
	await expect(listbox(page).locator('#search')).toBeFocused();
};

test.describe('listbox semantics', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').click();
	});

	test('container has listbox roles', async ({ page }) => {
		const band = listbox(page).locator('.items');
		await expect(band).toHaveAttribute('role', 'listbox');
		await expect(band).toHaveAttribute('aria-multiselectable', 'true');
		await expect(band).toHaveAttribute('aria-label', 'Options');
	});

	test('options carry selected state and position', async ({ page }) => {
		const options = listbox(page).locator('.items [data-index]');
		await expect(options).toHaveCount(8);
		// playground value = Red + Purple: the first two options are selected
		await expect(options.nth(0)).toHaveAttribute('aria-selected', 'true');
		await expect(options.nth(1)).toHaveAttribute('aria-selected', 'true');
		await expect(options.nth(2)).toHaveAttribute('aria-selected', 'false');
		await expect(options.first()).toHaveAttribute('aria-setsize', '8');
		await expect(options.first()).toHaveAttribute('aria-posinset', '1');
	});

	test('announcer is silent on open and follows arrow moves', async ({
		page,
	}) => {
		const announce = listbox(page).locator('.announcer');
		await expect(announce).toHaveText('');
		await focusSearch(page);
		await page.keyboard.type('re');
		// "re" filters to [Red, Green]; the arrow enters the list one step in
		await page.keyboard.press('ArrowDown');
		await expect(announce).toHaveText('Green, 2 of 2');
		await page.keyboard.press('ArrowUp');
		await expect(announce).toHaveText('Red, 1 of 2');
	});

	test('keyboard select closes the popup and restores focus', async ({
		page,
	}) => {
		await focusSearch(page);
		await page.keyboard.type('re'); // [Red, Green]; Red is already selected
		await page.keyboard.press('ArrowDown'); // to Green
		await page.keyboard.press('Enter'); // select Green
		await expect
			.poll(() =>
				page.evaluate(() => {
					let el: Element | null = document.activeElement;
					while (el && el.shadowRoot && el.shadowRoot.activeElement) {
						el = el.shadowRoot.activeElement;
					}
					return el ? el.tagName.toLowerCase() : '';
				}),
			)
			.toBe('cosmoz-autocomplete-trigger');
		await expect(page.locator('cosmoz-autocomplete')).toContainText('Green');
	});
});

test.describe('single-mode listbox', () => {
	test('container is not multiselectable', async ({ page }) => {
		await page.goto(story('autocomplete--single'));
		// open-on-focus: Tab into the trigger opens the popup (and focuses
		// the search input)
		await page
			.locator('cosmoz-autocomplete cosmoz-autocomplete-trigger')
			.waitFor();
		await page.keyboard.press('Tab');
		const band = listbox(page).locator('.items');
		await expect(band).toHaveAttribute('role', 'listbox');
		await expect(band).toHaveAttribute('aria-multiselectable', 'false');
	});
});
