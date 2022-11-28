/* istanbul ignore file */

import { createAuthTestHelper } from '@setel/web-auth/exposes/test-helpers';
import { mount } from 'cypress/react';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';

export const renderWithStates = (
  ui: React.ReactElement,
  {
    permissions,
    initialUrl = '/',
    namespace = 'pdb-merchants',
  }: {
    permissions?: Array<string>;
    initialUrl?: string;
    namespace?: Parameters<typeof createAuthTestHelper>[0];
  } = {}
) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const { AuthProvider } = createAuthTestHelper(namespace, {
    permissions,
  });

  return mount(
    <Router initialEntries={[initialUrl]}>
      <AuthProvider>
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
      </AuthProvider>
    </Router>
  );
};
