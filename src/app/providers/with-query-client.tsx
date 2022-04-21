import React from 'react';
import { queryClient } from 'app/api';
import { QueryClientProvider } from 'react-query';

const withQueryClient = (component: () => React.ReactNode) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
);

export default withQueryClient;
