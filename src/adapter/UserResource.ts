import { Either, left, right } from 'fp-ts/Either';
import { HTTPError } from 'ky';
import { User } from '../domain/user/entity';
import { apiClient, apiGet } from '../external/api';
import type { Alert } from '../types/alert';
import { createConsoleLog, createErrorLog } from '../app/log';
import type { CreateUserRepository } from '../domain/user/repository';

const filePath = 'adapter/UserResource.ts';

const createUserRepository: CreateUserRepository = () => ({
  getUser: async (token: string, id: number): Promise<Either<Alert, User>> => {
    console.log(
      createConsoleLog(filePath, `getUser(${id})`)('PASS', 'token:', token),
    );
    try {
      const response = await apiGet(`users/99`, token, {
        headers: { abc: 'def' },
      });

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
      console.log(
        createConsoleLog(filePath, `getUser(${id})`)(
          'api.response.json:',
          user,
        ),
      );

      return right(user);
    } catch (error: any) {
      console.log(
        createConsoleLog(filePath, `getUser(${id})`)(
          'api.response.error:',
          error,
        ),
      );

      const httpErr = error as HTTPError;
      const errRes = httpErr.response;
      console.log(
        createConsoleLog(filePath, `getUser(${id})`)(
          'api.response.httperror:',
          'httpErr:',
          httpErr,
          'errRes:',
          errRes,
        ),
      );

      return left(
        createErrorLog('adapter/UserResource.ts#getUser', id, {
          kind: 'ApiError',
          message: httpErr.message,
          status: { code: errRes.status, text: errRes.statusText },
        }),
      );
    }

    console.log(createConsoleLog(filePath, `getUser(${id})`)('not right'));

    return left(
      createErrorLog('adapter/UserResource.ts#getUser', id, {
        kind: 'ApiError',
        message: 'error occurred',
      }),
    );
  },

  getUsers: async (token: string): Promise<User[]> => {
    console.log(
      createConsoleLog(filePath, `getUsers`)('PASS', 'token:', token),
    );

    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },

  updateUser: async (token: string, user: User): Promise<User> => {
    console.log(filePath, `updateUser`)();
    console.log(filePath, `updateUser`)('token:', token, 'user:', user);

    const res = await apiClient
      .put(`users/${user.id}`, { json: user })
      .json<User>();

    console.log(filePath, `updateUser`)('res:', res);

    return res;
  },
});

export default createUserRepository;
