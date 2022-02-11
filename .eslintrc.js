module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    'plugin:json/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'react-app',
  ],
  plugins: ['@typescript-eslint', 'import', 'json', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    semi: ['error', 'always'],
    'no-void': ['error', { allowAsStatement: true }],
    'no-empty-pattern': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    '@typescript-eslint/naming-convention': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    '@typescript-eslint/restrict-template-expressions': ['warn', { allowBoolean: true }],
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
};
