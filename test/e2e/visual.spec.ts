import { test, expect } from '@playwright/test';

test('basic render', async ({ page }) => {
	await page.goto(
		'iframe.html?id=autocomplete--basic&viewMode=story/',
	);
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
