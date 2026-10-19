/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
};
