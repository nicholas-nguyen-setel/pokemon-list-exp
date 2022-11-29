import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from 'twin.macro';
import { App } from './app';

import { BrowserRouter } from 'react-router-dom';

export function bootstrap() {
  const queryClient = new QueryClient();

  authInit(queryClient).then(() => {
    ReactDOM.render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MerchantAuthProvider queryClient={queryClient}>
            <App />
          </MerchantAuthProvider>
        </QueryClientProvider>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
}
