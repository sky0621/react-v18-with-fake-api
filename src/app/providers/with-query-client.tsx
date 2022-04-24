import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../api';

const withQueryClient = (component: () => React.ReactNode) => (
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
);

export default withQueryClient;
