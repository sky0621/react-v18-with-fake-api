import React from 'react';
import { QueryClientProvider } from 'react-query';
import {queryClient} from "../api";

const withQueryClient = (component: () => React.ReactNode) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
);

export default withQueryClient;
