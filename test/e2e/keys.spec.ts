import { expect, test } from '@playwright/test';

const story = (id: string) => `iframe.html?id=${id}&viewMode=story/`;

const inField = (page: import('@playwright/test').Page) =>
	page.evaluate(() => {
		let el = document.activeElement;
		while (el) {
			if (el.tagName === 'COSMOZ-AUTOCOMPLETE') return true;
			el =
				el.parentElement ??
				(el.getRootNode() as ShadowRoot | null)?.host ??
				null;
		}
		return false;
	});

test.describe('trigger keyboard contract', () => {
	test('tab focuses the trigger without opening', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page
			.getByRole('button', { name: 'Choose color', exact: true })
			.waitFor();

		await page.keyboard.press('Tab');
		await expect(
			page.getByRole('button', { name: 'Choose color', exact: true }),
		).toBeFocused();
		await expect(
			page.getByRole('button', { name: 'Choose color', exact: true }),
		).toHaveAttribute('aria-expanded', 'false');
		await expect(page.getByRole('option', { name: 'Red' })).toBeHidden();
	});

	test('activation opens and lands the search', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page
			.getByRole('button', { name: 'Choose color', exact: true })
			.waitFor();

		await page.keyboard.press('Tab');
		await page.keyboard.press('Enter');
		await expect(page.getByRole('textbox', { name: 'Search' })).toBeFocused();
		await expect(page.getByRole('option', { name: 'Red' })).toBeVisible();

		// tabbing out of the field closes the popup again
		await page.keyboard.press('Tab');
		expect(await inField(page)).toBe(false);
		await expect(
			page.getByRole('button', { name: 'Choose color', exact: true }),
		).toHaveAttribute('aria-expanded', 'false', { timeout: 2000 });
	});

	test('arrow key from the trigger opens too', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page
			.getByRole('button', { name: 'Choose color', exact: true })
			.waitFor();

		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await expect(page.getByRole('option', { name: 'Red' })).toBeVisible();
	});

	test('chip removes stay pointer/screen-reader-only and keep working', async ({
		page,
	}) => {
		await page.goto(story('autocomplete--playground'));
		await page
			.getByRole('button', { name: 'Remove Red', exact: true })
			.waitFor();

		const red = page.getByRole('button', { name: 'Remove Red', exact: true });
		await expect(red).toBeAttached();

		await red.click();
		await expect(red).toHaveCount(0);
		await expect(
			page.getByRole('button', { name: 'Remove Purple', exact: true }),
		).toBeAttached();
	});
});
