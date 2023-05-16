const path = require("path");

const buildEslintCommand = filenames =>
  `next lint --cache --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx}": buildEslintCommand,
  "*.{ts,tsx}": [buildEslintCommand, 'stylelint "**/*.{ts,tsx}" --cache --fix' ,'tsc-files --noEmit'],
  "**/*.css": 'stylelint "**/*.{css,scss,sass}" --cache --fix',
  "./src/**": "prettier --cache --write --ignore-unknown ",
  "./pages/**": "prettier --cache --write --ignore-unknown ",
  "./tests/**": "prettier --cache --write --ignore-unknown ",
};
