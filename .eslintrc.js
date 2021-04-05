const {
  createConfig,
  getDependencies,
} = require("eslint-config-galex/src/createConfig");
const {
  createTSOverride,
} = require("eslint-config-galex/src/overrides/typescript");

// then compose with e.g. other overrides and createConfig
const override = createTSOverride({
  ...getDependencies(),
  react: {
    hasReact: false,
  },
  typescript: {
    hasTypeScript: true,
    version: "4.2.3",
  },
  rules: {
    // typescript specific rules go here
  },
});

module.exports = createConfig({
  overrides: [override],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "new-cap": "off",
  },
});
