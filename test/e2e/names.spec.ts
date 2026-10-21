import { expect, test } from '@playwright/test';

const story = (id: string) => `iframe.html?id=${id}&viewMode=story/`;

test.describe('field naming', () => {
	test('accessible name is the label, not label + hint', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').waitFor();
		// role-name computation is exact: mashed "Choose color Pick one or
		// more colors" must not satisfy the label-only name
		await expect(
			page.getByRole('button', { name: 'Choose color', exact: true }),
		).toBeVisible();
	});

	test('search input carries an explicit accessible name', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').click();
		await expect(page.getByRole('textbox', { name: 'Search' })).toBeFocused();
	});
});
