import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	...cfg,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'max-lines-per-function': 0,
			'import/group-exports': 0,
		},
		ignores: ['dist/', 'coverage/', 'storybook-static/'],
	},
];