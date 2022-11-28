/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'react-app',
  rules: {
    'import/no-default-export': 'error',
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
