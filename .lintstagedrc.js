const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --cache --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  "./src/**": "prettier --write --ignore-unknown",
  "./pages/**": "prettier --write --ignore-unknown",
  "./tests/**": "prettier --write --ignore-unknown"
}