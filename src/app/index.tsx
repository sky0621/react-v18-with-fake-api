import React, { StrictMode, Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import Router from '../ui/Router';
import Loading from '../ui/atoms/Loading';
import { queryClient } from '../external/api';
import ErrorFallback from './errorFallback';

const App = () => (
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Router />
            </ErrorBoundary>
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
