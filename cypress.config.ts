import { defineConfig } from 'cypress';
import { createWebpackConfig } from '@setel/web-scripts/dist/config/cypress/create-webpack-config';

// https://docs.cypress.io/guides/references/configuration#component
export default defineConfig({
  includeShadowDom: true,
  video: false,
  component: {
    specPattern: '**/*.ct.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: createWebpackConfig(),
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
