import { expect, test, type Page } from '@playwright/test';

const story = (id: string) => `iframe.html?id=${id}&viewMode=story/`;

const setError = (page: Page, message: string, invalid: boolean) =>
	page.evaluate(
		(args) => {
			const el = document.querySelector(
				'cosmoz-autocomplete',
			) as HTMLElement & { errorMessage?: string };
			el.errorMessage = args.message;
			el.toggleAttribute('invalid', args.invalid);
		},
		{ message, invalid },
	);

const region = (page: Page) =>
	page.locator('cosmoz-autocomplete > cosmoz-announcer .announcer');

test.describe('trigger announcements', () => {
	test('the region exists before anything can be announced', async ({
		page,
	}) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').waitFor();
		const announcer = region(page);
		await expect(announcer).toHaveAttribute('aria-live', 'polite');
		await expect(announcer).toHaveAttribute('aria-atomic', 'true');
		await expect(announcer).toHaveText('');
	});

	test('announces a newly visible error and marks the field invalid', async ({
		page,
	}) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').waitFor();
		await setError(page, 'Required', true);
		await expect(region(page)).toHaveText('Required', { timeout: 800 });
		await expect(page.locator('cosmoz-autocomplete-trigger')).toHaveAttribute(
			'aria-invalid',
			'true',
		);
	});

	test('stays silent on clear and re-arms for the same error', async ({
		page,
	}) => {
		await page.goto(story('autocomplete--playground'));
		const announcer = region(page);
		await page.locator('cosmoz-autocomplete').waitFor();
		await setError(page, 'Required', true);
		await expect(announcer).toHaveText('Required');
		await setError(page, '', false);
		await expect(announcer).toHaveText('');
		await setError(page, 'Required', true);
		await expect(announcer).toHaveText('Required');
	});

	test('compact announces and describes the error', async ({ page }) => {
		await page.goto(story('autocomplete--playground'));
		await page.locator('cosmoz-autocomplete').waitFor();
		await page.evaluate(() => {
			document
				.querySelector('cosmoz-autocomplete')!
				.toggleAttribute('compact', true);
		});
		await setError(page, 'Required', true);
		await expect(region(page)).toHaveText('Required', { timeout: 800 });
		await expect(page.locator('cosmoz-autocomplete-trigger')).toHaveAttribute(
			'aria-invalid',
			'true',
		);
		await expect(page.locator('cosmoz-autocomplete-trigger')).toHaveAttribute(
			'aria-describedby',
			'error',
		);
	});
});
