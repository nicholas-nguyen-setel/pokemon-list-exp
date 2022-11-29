import './app.css';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from 'twin.macro';
import { AdminApp } from './modules/admin/app';
import { _axiosWithAuth } from '@setel/web-common/exposes/ajax';
import { BrowserRouter } from 'react-router-dom';

export function bootstrap() {
  const queryClient = new QueryClient();

  ReactDOM.render(
    <>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdminApp />
        </QueryClientProvider>
      </BrowserRouter>
    </>,
    document.getElementById('app')
  );
}
