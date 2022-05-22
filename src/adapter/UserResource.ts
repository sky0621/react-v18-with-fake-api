import { Either, left, right } from 'fp-ts/Either';
import { HTTPError } from 'ky';
import { User } from '../domain/user/entity';
import { apiGet, apiPut } from '../external/api';
import type { Alert } from '../types/alert';
import { createConsoleLog, createErrorLog } from '../app/log';
import type { CreateUserRepository } from '../domain/user/repository';

const fp = 'adapter/UserResource.ts';

const createUserRepository: CreateUserRepository = () => ({
  getUser: async (token: string, id: number): Promise<Either<Alert, User>> => {
    const fn = `getUser(${id})`;
    const cLog = createConsoleLog(fp, fn);
    console.log(cLog());

    try {
      const response = await apiGet(`users/99`, token, {
        headers: { abc: 'def' },
      });

      if (!response.ok) {
        return left(
          createErrorLog(`${fp}#${fn}`, id, {
            kind: 'ApiError',
            message: 'error occurred',
            status: { code: response.status, text: response.statusText },
          }),
        );
      }

      const user = (await response.json()) as User;
      console.log(cLog('api.response.json:', user));

      return right(user);
    } catch (error: any) {
      console.log(cLog('api.response.error:', error));

      const httpErr = error as HTTPError;
      const errRes = httpErr.response;
      console.log(
        cLog('api.response.httperror:', 'httpErr:', httpErr, 'errRes:', errRes),
      );

      return left(
        createErrorLog(`${fp}#${fn}`, id, {
          kind: 'ApiError',
          message: httpErr.message,
          status: { code: errRes.status, text: errRes.statusText },
        }),
      );
    }

    console.log(cLog('not right'));

    return left(
      createErrorLog(`${fp}#${fn}`, id, {
        kind: 'ApiError',
        message: 'error occurred',
      }),
    );
  },

  getUsers: async (token: string): Promise<User[]> => {
    console.log(createConsoleLog(fp, `getUsers`)());

    const response = await apiGet('users', token);
    const users = (await response.json()) as User[];

    return users;
  },

  updateUser: async (token: string, user: User): Promise<User> => {
    const fn = 'updateUser';
    console.log(createConsoleLog(fp, fn)('PASS', 'parameter.user:', user));

    const res = await apiPut<User>(`users/${user.id}`, token, { json: user });

    return res;
  },
});

export default createUserRepository;
