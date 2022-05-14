import { Either, left, right } from 'fp-ts/Either';
import { HTTPError } from 'ky';
import { User } from '../domain/user/entity';
import { apiClient, apiGet } from '../external/api';
import type { Alert } from '../types/alert';
import { consoleLog, createErrorLog } from '../app/log';
import type { CreateUserRepository } from '../domain/user/repository';

const filePath = 'adapter/UserResource.ts';

const createUserRepository: CreateUserRepository = () => ({
  getUser: async (token: string, id: number): Promise<Either<Alert, User>> => {
    consoleLog(filePath, `getUser(${id})`)();
    try {
      const response = await apiGet(`users/${id}`, token, {
        headers: { abc: 'def' },
      });
      consoleLog(filePath, `getUser(${id})`)('response:', response);

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
      consoleLog(filePath, `getUser(${id})`)('user:', user);

      return right(user);
    } catch (error: any) {
      consoleLog(filePath, `getUser(${id})`)('error:', error);

      const httpErr = error as HTTPError;
      const errRes = httpErr.response;
      consoleLog(filePath, `getUser(${id})`)(
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

    consoleLog(filePath, `getUser(${id})`)('not right');

    return left(
      createErrorLog('adapter/UserResource.ts#getUser', id, {
        kind: 'ApiError',
        message: 'error occurred',
      }),
    );
  },

  getUsers: async (token: string): Promise<User[]> => {
    consoleLog(filePath, `getUsers`)();
    consoleLog(filePath, `getUsers`)('token:', token);

    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },

  updateUser: async (token: string, user: User): Promise<User> => {
    consoleLog(filePath, `updateUser`)();
    consoleLog(filePath, `updateUser`)('token:', token, 'user:', user);

    const res = await apiClient
      .put(`users/${user.id}`, { json: user })
      .json<User>();

    consoleLog(filePath, `updateUser`)('res:', res);

    return res;
  },
});

export default createUserRepository;
