import { expect, test } from '@playwright/test';

test.describe('autocomplete basic', () => {
	test('pick an item', async ({ page }) => {
		await page.goto('iframe.html?id=autocomplete--basic&viewMode=story/');
		await expect(page).toHaveScreenshot();

		await page.click('cosmoz-autocomplete');
		await expect(page).toHaveScreenshot();

		await page.keyboard.press('Backspace');
		await expect(page).toHaveScreenshot();

		await page.keyboard.press('Backspace');
		await expect(page).toHaveScreenshot();

		await page.keyboard.type('Wh');
		await expect(page).toHaveScreenshot();

		await page.keyboard.press('Enter');
		await expect(page).toHaveScreenshot();
	});

	test('no results default message', async ({ page }) => {
		await page.goto('iframe.html?id=autocomplete--basic&viewMode=story/');
		await expect(page).toHaveScreenshot();

		await page.click('cosmoz-autocomplete');
		await expect(page).toHaveScreenshot();

		await page.keyboard.type('Asdf');
		await expect(page).toHaveScreenshot();

		await expect(page.locator('cosmoz-autocomplete')).toContainText(
			'No results found',
		);
		await expect(page).toHaveScreenshot();
	});
});

test('autocomplete select', async ({ page }) => {
	await page.goto('iframe.html?id=autocomplete--select&viewMode=story/');
	await expect(page).toHaveScreenshot();

	await page.getByText('Choose color').click();
	await expect(page).toHaveScreenshot();

	await page.getByRole('option', { name: 'Blue' }).click();
	await expect(page).toHaveScreenshot();
});

test.describe('autocomplete excluding', () => {
	test('pick an item', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-excluding--basic&viewMode=story/',
		);
		await expect(page).toHaveScreenshot();

		await page.click('cosmoz-autocomplete-excluding');
		await expect(page).toHaveScreenshot();

		await page.getByRole('option', { name: 'Blue' }).click();
		await expect(page).toHaveScreenshot();

		await page.getByRole('option', { name: 'Blue' }).click();
		await expect(page).toHaveScreenshot();

		await page.getByTitle('Red').locator('span').click();
		await expect(page).toHaveScreenshot();
	});

	test('no result custom message', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-excluding--basic&viewMode=story/',
		);
		await expect(page).toHaveScreenshot();

		await page.click('cosmoz-autocomplete-excluding');
		await expect(page).toHaveScreenshot();

		await page.keyboard.type('Asdf');
		await expect(page).toHaveScreenshot();

		await expect(page.locator('cosmoz-autocomplete-excluding')).toContainText(
			'Custom message no results',
		);
		await expect(page).toHaveScreenshot();
	});
});
