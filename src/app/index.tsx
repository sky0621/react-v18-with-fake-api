import React, { Suspense, StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { queryClient } from './api';
import Router from '../ui/pages/Router';
import Loading from '../ui/atoms/Loading';

const App = () => (
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading message="sending ..." />}>
            <Router />
          </Suspense>
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);

export default App;
