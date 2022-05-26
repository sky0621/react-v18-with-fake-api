import ky, { HTTPError, Options } from 'ky';
import { QueryClient } from 'react-query';
import deepmerge from 'deepmerge';
import { Either, left, right } from 'fp-ts/Either';
import { API_URL } from '../app/config';
import { createConsoleLog } from '../app/log';
import { LogWhat } from '../types/log';

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
        console.log(createConsoleLog()(request, options, response));
      },
    ],
    beforeError: [
      (error) => {
        console.log(createConsoleLog()(error));

        return error;
      },
    ],
  },
});

export async function apiGet<T>(
  url: string,
  token: string,
  options?: Options,
): Promise<Either<LogWhat, T>> {
  try {
    const response = await apiClient.get(
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

    if (!response.ok) {
      return left({
        kind: 'ApiError',
        message: 'error occurred',
        status: { code: response.status, text: response.statusText },
      } as LogWhat);
    }

    const t = (await response.json()) as T;

    return right(t);
  } catch (error: any) {
    const httpErr = error as HTTPError;
    const errRes = httpErr.response;

    return left({
      kind: 'ApiError',
      message: httpErr.message,
      status: { code: errRes.status, text: errRes.statusText },
    } as LogWhat);
  }
}

export async function apiPut<T>(
  url: string,
  token: string,
  options?: Options,
): Promise<Either<LogWhat, T>> {
  try {
    const response = await apiClient.put(
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
    if (!response.ok) {
      return left({
        kind: 'ApiError',
        message: 'error occurred',
        status: { code: response.status, text: response.statusText },
      } as LogWhat);
    }

    const t = (await response.json()) as T;

    return right(t);
  } catch (error: any) {
    const httpErr = error as HTTPError;
    const errRes = httpErr.response;

    return left({
      kind: 'ApiError',
      message: httpErr.message,
      status: { code: errRes.status, text: errRes.statusText },
    } as LogWhat);
  }
}

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
