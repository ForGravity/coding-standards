module.exports = {
	root:          true,
	env:           {
		browser: true,
		es2021:  true,
	},
	globals:       {
		gform: 'readonly',
	},
	extends:       [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting', // Change to
		// 'plugin:@wordpress/eslint-plugin/recommended' to enable Prettier or TypeScript support.
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType:  'module',
	},
	plugins:       [
		'align-assignments',
	],
	rules:         {
		'align-assignments/align-assignments': [
			'error',
			{ requiresOnly: false },
		],
		camelcase:                             [ 'warn' ],
		'key-spacing':                         [ 'error', {
			mode: 'minimum', align: 'value',
		} ],
		'no-multi-spaces':                     [ 'error', {
			exceptions: {
				VariableDeclarator: true,
				ImportDeclaration:  true,
			},
		} ],
		'padded-blocks':                       [ 'warn' ],
	},
};
