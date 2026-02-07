import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	{
		ignores: ['dist/', 'coverage/', 'storybook-static/', '__snapshots__/'],
	},
	...cfg,
	{
		rules: {
			'max-lines-per-function': 0,
			'import/group-exports': 0,
		},
	},
	{
		files: ['stories/**/*.ts'],
		rules: {
			'max-lines': 'off',
		},
	},
];
