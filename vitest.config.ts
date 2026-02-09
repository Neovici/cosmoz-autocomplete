import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	optimizeDeps: {
		include: ['storybook/test'],
	},
	test: {
		// Two test projects: unit (fast, jsdom) and storybook (browser-based)
		projects: [
			// Unit tests: pure logic, utilities
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['test/**/*.test.ts'],
					environment: 'jsdom',
				},
			},
			// Storybook tests: component rendering and interactions
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						storybookScript: 'npm run storybook:start -- --no-open',
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
