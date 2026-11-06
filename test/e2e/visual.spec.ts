import { expect, test } from '@playwright/test';

test.describe('autocomplete basic', () => {
	test('pick an item', async ({ page }) => {
		await page.goto('iframe.html?id=autocomplete--playground&viewMode=story/');
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
		await page.goto('iframe.html?id=autocomplete--playground&viewMode=story/');
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
			'iframe.html?id=autocomplete-excluding--playground&viewMode=story/',
		);
		await expect(page).toHaveScreenshot();

		await page.click('cosmoz-autocomplete-excluding');
		await expect(page).toHaveScreenshot();

		await page.getByRole('option', { name: 'Blue' }).click();
		await expect(page).toHaveScreenshot();

		await page.getByRole('option', { name: 'Blue' }).click();
		await expect(page).toHaveScreenshot();

		await page.getByRole('option', { name: 'Red' }).click();
		await expect(page).toHaveScreenshot();
	});

	test('no result custom message', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-excluding--playground&viewMode=story/',
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

test.describe('autocomplete option', () => {
	test('select', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-option--select&viewMode=story/',
		);
		// the field: label and description, a consumer's suffix, the chevron
		await expect(page).toHaveScreenshot();

		// the list: description and hint rows, a check on the selected option
		await page.getByText('Cost center').click();
		await expect(page.getByRole('option', { name: /111200/u })).toBeVisible();
		await expect(page).toHaveScreenshot();
	});

	test('catalog', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-option--catalog&viewMode=story/',
		);
		// image in the media square, no square without media, trailing price
		await page.getByText('Catalog').click();
		await expect(
			page.getByRole('option', { name: /Work gloves/u }),
		).toBeVisible();
		await expect(page).toHaveScreenshot();

		// the query is marked in the label
		await page.keyboard.type('vest');
		await expect(page.getByRole('option')).toHaveCount(1);
		await expect(page).toHaveScreenshot();
	});
});
