/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	viteFinal: (config) => ({
		...config,
		server: { ...config.server, allowedHosts: true, host: '0.0.0.0' },
	}),
};

export default config;
