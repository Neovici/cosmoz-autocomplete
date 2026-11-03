# Visual regression tests

This repository guards its visual contract with Playwright screenshot tests
over the Storybook build. The specs live in `test/e2e/visual.spec.ts` and drive
the playground stories — the same pages the published component gets demoed
with — so a UI change that alters what users see fails CI unless its baseline
is reviewed and updated in the same pull request.

## The shape

```text
stories/cosmoz-autocomplete.stories.ts     playground stories (fixture surface)
stories/cosmoz-autocomplete-excluding.stories.ts
test/e2e/visual.spec.ts                    visual specs
test/e2e/visual.spec.ts-snapshots/         committed baselines
playwright.config.ts                       suite configuration (repository root)
```

## Configuration

`playwright.config.ts` wires the suite to the built Storybook:

- `webServer: npm run storybook:preview` — builds `./storybook-static` and
  serves it on `http://127.0.0.1:8080` (`reuseExistingServer` locally, CI
  starts fresh); `baseURL` points at the same URL.
- One project, `Desktop Chrome` — the baseline platform. Baseline names carry
  it: `<spec>-<test>-<step>-chromium-linux.png`.
- `expect.toHaveScreenshot.maxDiffPixelRatio: 0.01` — absorbs antialiasing
  noise without hiding real changes.
- Retries and trace-on-first-retry on CI only, `html` reporter,
  `fullyParallel`.

## State-per-screenshot specs

One `toHaveScreenshot()` per interaction state, not a single end-state shot:
each step pins one user-visible state, a regression names the step it broke at,
and an unrelated refactor cannot re-align the whole set at once.

```typescript
test('pick an item', async ({ page }) => {
    await page.goto('iframe.html?id=autocomplete--playground&viewMode=story/');
    await expect(page).toHaveScreenshot(); // closed

    await page.click('cosmoz-autocomplete');
    await expect(page).toHaveScreenshot(); // open

    await page.keyboard.type('Wh');
    await expect(page).toHaveScreenshot(); // filtered

    await page.keyboard.press('Enter');
    await expect(page).toHaveScreenshot(); // picked
});
```

Cover the closed, open, filtered, selected, no-results and invalid states your
variant has. Keep assertions on text content (`toContainText`,
`getByRole(...).toBeVisible()`) outside the screenshots where the state is
better expressed as a contract than as pixels.

## Running locally

```bash
npm ci                      # installs @playwright/test and its playwright-core
node node_modules/playwright-core/cli.js install chromium
npm run e2e                 # visual suite (webServer starts automatically)
```

Install the Chromium revision that matches the pinned `@playwright/test` — a
global `npx playwright install` may resolve a newer package and a wrong
browser revision, which makes every baseline re-render as a mismatch.

`npm test` runs vitest and then `npm run e2e`, the same order CI uses.

## Updating baselines

Baselines are committed next to the spec. After an intended visual change:

```bash
npx playwright test --update-snapshots
```

Then keep the review honest:

- say **why** the baseline changed in the PR body — an updated baseline is a
  claimed visual change, not cleanup;
- update **only** the baselines the change touches; refresh runs that re-write
  unrelated PNGs must not ride along;
- a test with no committed baseline is a test that never ran green — commit it
  in the same change as the spec.