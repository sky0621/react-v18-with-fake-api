import ky, { Options } from 'ky';
import { QueryClient } from 'react-query';
import { API_URL } from '../app/config';

const defaultOptions: Options = {
  prefixUrl: API_URL,
  retry: {
    limit: 3,
    methods: ['get'],
    statusCodes: [413],
  },
  timeout: 5000,
};

export const apiClient = ky.create(defaultOptions);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      suspense: true,
      cacheTime: 1000 * 60 * 1,
    },
    mutations: {
      retry: 0,
      useErrorBoundary: true,
    },
  },
});
