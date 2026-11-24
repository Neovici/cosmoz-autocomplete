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

test.describe('autocomplete pills', () => {
	test('opens the search popover', async ({ page }) => {
		await page.goto(
			'iframe.html?id=autocomplete-pills--overflown&viewMode=story/',
		);
		await expect(page).toHaveScreenshot();

		await page.evaluate(() => {
			const host = document.querySelector('cosmoz-autocomplete-pills')!;
			host.shadowRoot!.querySelector<HTMLElement>('.add')!.click();
		});
		await expect(page.getByRole('textbox', { name: 'Label' })).toBeFocused();
		await expect(page).toHaveScreenshot();
	});
});
