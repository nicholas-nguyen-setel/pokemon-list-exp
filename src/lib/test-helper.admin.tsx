/* istanbul ignore file */

import * as React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { AdminRouterContextProvider } from '@setel/web-common/exposes/admin-routing';
import { useAdminReactRouterAdapter } from '@setel/web-common/exposes/admin-routing-adapter';
import { AuthContext } from '@setel/web-auth/exposes/admin-auth';
import { createAdminAuthTestHelper } from '@setel/web-auth/exposes/admin-test-helpers';

export function renderWithStates(
  ui: React.ReactElement,
  {
    initialUrl = '/',
    routePath = initialUrl,
    namespace,
    permissions = [],
  }: {
    initialUrl?: string;
    routePath?: string;
    namespace?: Parameters<typeof createAdminAuthTestHelper>[0];
    permissions?: Parameters<typeof createAdminAuthTestHelper>[1];
  } = {}
) {
  const { mockAuthContextValue, client } = createAdminAuthTestHelper(
    namespace,
    permissions
  );

  const AdminRouterAdapter = ({ children }: React.PropsWithChildren<{}>) => {
    return (
      <AdminRouterContextProvider value={useAdminReactRouterAdapter()}>
        {children}
      </AdminRouterContextProvider>
    );
  };

  return {
    mounted: mount(
      <QueryClientProvider client={client}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <MemoryRouter initialEntries={[initialUrl]}>
            <Route path={routePath}>
              <AdminRouterAdapter>{ui}</AdminRouterAdapter>
            </Route>
          </MemoryRouter>
        </AuthContext.Provider>
      </QueryClientProvider>
    ),
    queryClient: client,
  };
}
