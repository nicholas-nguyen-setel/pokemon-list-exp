/* istanbul ignore file */
const defaultEndpoints = {
  'web-common': process.env.webCommonUrl,
  'web-debug': process.env.webDebugUrl,
};

const storageKey = 'd2m_overrides'; // mf_overrides


window.__DEV__ = process.env.NODE_ENV === 'development';

window._endpoints = (function getEndpoints() {
  try {
    const storedOverride = sessionStorage.getItem(storageKey);
    if (storedOverride) {

      return JSON.parse(storedOverride) || defaultEndpoints;

    }
  } catch (error) {

  }
})();

bootstrapApp();

function bootstrapApp() {
  return import(
    /* webpackChunkName: "bootstrap" */
    './bootstrap'
  ).then((d) => d.bootstrap());
}
