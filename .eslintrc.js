/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'react-app',
  rules: {
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 'error',
  },
  overrides: [
    {
      files: ['src/*.json'],
      rules: {
        semi: 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
