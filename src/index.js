function bootstrapApp() {
  return import(
    /* webpackChunkName: "bootstrap" */
    './bootstrap'
  ).then((d) => d.bootstrap());
}

bootstrapApp();
