module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/typescript',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: ['./tsconfig.json', './tsconfig.eslint.json'],
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'@typescript-eslint',
		'vue',
	],
};
