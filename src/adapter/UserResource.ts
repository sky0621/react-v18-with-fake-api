import { Either, left, right } from 'fp-ts/Either';
import { HTTPError } from 'ky';
import { User } from '../domain/user/entity';
import { apiClient, apiGet } from '../external/api';
import type { Alert } from '../types/alert';
import { consoleDebugLog, createErrorLog } from '../app/log';
import type { CreateUserRepository } from '../domain/user/repository';

const createUserRepository: CreateUserRepository = () => ({
  getUser: async (token: string, id: number): Promise<Either<Alert, User>> => {
    consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)();
    try {
      const response = await apiGet(`users/${id}`, token, {
        headers: { abc: 'def' },
      });
      consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)(
        'response:',
        response,
      );

      if (!response.ok) {
        return left(
          createErrorLog('adapter/UserResource.ts#getUser', id, {
            kind: 'ApiError',
            message: 'error occurred',
            status: { code: response.status, text: response.statusText },
          }),
        );
      }

      const user = (await response.json()) as User;
      consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)(
        'user:',
        user,
      );

      return right(user);
    } catch (error: any) {
      consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)(
        'error:',
        error,
      );

      const httpErr = error as HTTPError;
      const errRes = httpErr.response;
      consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)(
        'httpErr:',
        httpErr,
        'errRes:',
        errRes,
      );

      return left(
        createErrorLog('adapter/UserResource.ts#getUser', id, {
          kind: 'ApiError',
          message: httpErr.message,
          status: { code: errRes.status, text: errRes.statusText },
        }),
      );
    }

    consoleDebugLog('adapter/UserResource.ts', `getUser(${id})`)('not right');

    return left(
      createErrorLog('adapter/UserResource.ts#getUser', id, {
        kind: 'ApiError',
        message: 'error occurred',
      }),
    );
  },

  getUsers: async (token: string): Promise<User[]> => {
    consoleDebugLog('adapter/UserResource.ts', `getUsers`)();
    consoleDebugLog('adapter/UserResource.ts', `getUsers`)('token:', token);

    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },

  updateUser: async (token: string, user: User): Promise<User> => {
    consoleDebugLog('adapter/UserResource.ts', `updateUser`)();
    consoleDebugLog('adapter/UserResource.ts', `updateUser`)(
      'token:',
      token,
      'user:',
      user,
    );

    const res = await apiClient
      .put(`users/${user.id}`, { json: user })
      .json<User>();

    consoleDebugLog('adapter/UserResource.ts', `updateUser`)('res:', res);

    return res;
  },
});

export default createUserRepository;
