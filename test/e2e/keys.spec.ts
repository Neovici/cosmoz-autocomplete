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
	test('the search is the field\'s only keyboard stop', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page
			.getByRole('button', { name: 'Choose color', exact: true })
			.waitFor();

		// entry: the open affordance hands focus to the search
		await page.keyboard.press('Tab');
		await expect(page.getByRole('textbox', { name: 'Search' })).toBeFocused();

		// exit: the search is the field's last stop
		await page.keyboard.press('Tab');
		expect(await inField(page)).toBe(false);

		// wrap-around re-enters straight into the search
		await page.keyboard.press('Tab');
		await expect(page.getByRole('textbox', { name: 'Search' })).toBeFocused();
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
