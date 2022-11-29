// @ts-check
require('dotenv').config(); // load .env file on root, if available
const config = require('config');
const { defineConfig } = require('@setel/web-scripts');

const DEFAULT_LOCAL_URL = 'http://localhost:3000';

module.exports = defineConfig({
  bundles: ['index', 'admin'],
  env: {
    PUBLIC_URL: "/",
    pageTitle: 'Deliver2Me',
    pageDescription: 'Deliver2Me for offices mini app',

    webCommonUrl: config.get('appUrl.webcommon'),
    webDebugUrl: config.get('appUrl.webdebug'),
    siteUrl: process.env.NODE_ENV === 'development' ? DEFAULT_LOCAL_URL : config.get('siteUrl'),

    environment: config.get("flag.environment"),

    // Need to define name of list url from config/*.yml

  },
  remotes: ['web-common', 'web-debug'],
});
