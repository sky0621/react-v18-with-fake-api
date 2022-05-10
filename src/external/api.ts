import ky, { Options } from 'ky';
import { QueryClient } from 'react-query';
import deepmerge from 'deepmerge';
import { API_URL } from '../app/config';

/*
 * APIクライアント
 */
export const apiClient = ky.create({
  prefixUrl: API_URL,
  retry: {
    limit: 1,
    methods: ['get', 'post', 'put', 'patch', 'delete'],
    statusCodes: [413],
  },
  timeout: 5000,
  hooks: {
    afterResponse: [
      (request, options, response) => {
        console.log(request);
        console.log(options);
        console.log(response);
      },
    ],
    beforeError: [
      (error) => {
        console.log(error);

        return error;
      },
    ],
  },
});

export const apiGet = (url: string, token: string, options?: Options) =>
  apiClient.get(
    url,
    deepmerge(
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
      options || {},
    ),
  );

/*
 * React Queryクライアント
 */
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
