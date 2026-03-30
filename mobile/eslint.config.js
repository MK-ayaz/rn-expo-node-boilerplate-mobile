const { defineConfig } = require('eslint/config');
const globals = require('globals');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['babel.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
