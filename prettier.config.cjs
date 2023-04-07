/** @type {import("prettier").Config} */
module.exports = {
  // @ts-ignore
  ...require('@spotify/prettier-config'),
  arrowParens: "avoid",
    rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  bracketSpacing: true,
  insertPragma: false,
  printWidth: 80,
  proseWrap: "preserve",
  endOfLine: 'auto',
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
