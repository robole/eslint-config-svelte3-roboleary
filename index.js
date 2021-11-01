module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
  },
  plugins: ["svelte3"],
  extends: [
    "eslint-config-roboleary-base",
    "prettier", // makes sure this is last in the list
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    "import/first": "off",
    "import/no-duplicates": "off",
    "import/no-mutable-exports": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/out/*"],
};
