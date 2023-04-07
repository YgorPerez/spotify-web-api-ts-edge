/** @type {import("eslint").Linter.Config} */
module.exports = {
  "plugins": ["@spotify/eslint-plugin"],
  parser: '@typescript-eslint/parser',
  extends: ["@spotify/eslint-config-typescript", "@spotify/eslint-config-base", "@spotify"],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
