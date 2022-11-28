function bootstrapAdminApp() {
  return import(
    /* webpackChunkName: "bootstrap_admin" */
    './bootstrap.admin'
  ).then((d) => d.bootstrap());
}

bootstrapAdminApp();
