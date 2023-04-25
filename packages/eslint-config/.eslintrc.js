module.exports = {
	root:          true,
	env:           {
		browser: true,
		es2021:  true,
	},
	globals:       {
		gform:   'readonly',
		ajaxurl: 'readonly',
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
		'align-import',
	],
	rules:         {
		'align-assignments/align-assignments': [
			'warn',
			{ requiresOnly: false },
		],
		'align-import/align-import':           [ 'warn' ],
		camelcase:                             [ 'warn' ],
		'key-spacing':                         [ 'warn', {
			mode: 'minimum', align: 'value',
		} ],
		'no-multiple-empty-lines':             [ 'warn' ],
		'no-multi-spaces':                     [ 'warn', {
			exceptions: {
				VariableDeclarator: true,
				ImportDeclaration:  true,
			},
		} ],
		'no-undef':                            [ 'warn' ],
		'padded-blocks':                       [ 'warn' ],
	},
	settings:      {
		'import/resolver': 'webpack',
		jsdoc:             {
			preferredTypes: {
				bool: 'boolean',
			},
		},
	},
};
