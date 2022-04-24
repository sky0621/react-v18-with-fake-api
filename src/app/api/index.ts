import ky, { Options } from 'ky';
import { QueryClient } from 'react-query';
import API_URL from '../config';

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
      retry: 0,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});
