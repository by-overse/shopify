/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
  },
  globals: {
    shopify: 'readonly',
  },
  ignorePatterns: ['.eslintrc*', '**/dist/*'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'max-len': [
      'error',
      {
        code: 118,
        ignoreUrls: true,
        ignoreComments: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
