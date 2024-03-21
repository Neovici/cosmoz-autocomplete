/** @type { import('@web/storybook-framework-web-components').StorybookConfig } */
const config = {
	stories: ['../stories/**/*.stories.{js,ts,mdx}'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
	docs: {
		//👇 See the table below for the list of supported options
		autodocs: 'tag',
	},
	framework: {
		name: '@web/storybook-framework-web-components',
	},
};

export default config;
