// @ts-check
require('dotenv').config(); // load .env file on root, if available
const config = require('config');
const { defineConfig } = require('@setel/web-scripts');

module.exports = defineConfig({
  bundles: ['index', 'admin'],
  env: {
    pageTitle: 'Page Title Injected from config file',
    apiIamBaseUrl: config.get('baseUrl.apiIam'),
  },
  remotes: ['web-common', 'web-auth'],
});
