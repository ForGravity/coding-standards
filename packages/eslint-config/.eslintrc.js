module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting', // Change to
		// 'plugin:@wordpress/eslint-plugin/recommended' to enable Prettier or TypeScript support.
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
