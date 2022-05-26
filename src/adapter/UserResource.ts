import { Either, isLeft, left, right } from 'fp-ts/Either';
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

    const result = await apiGet<User>(`users/${id}`, token);

    if (isLeft(result)) {
      return left(createErrorLog(`${fp}#${fn}`, id, result.left));
    }

    return right(result.right);
  },

  getUsers: async (token: string): Promise<Either<Alert, User[]>> => {
    const fn = `getUsers()`;
    const cLog = createConsoleLog(fp, fn);
    console.log(cLog());

    const result = await apiGet<User[]>('users', token);

    if (isLeft(result)) {
      return left(createErrorLog(`${fp}#${fn}`, '-', result.left));
    }

    return right(result.right);
  },

  updateUser: async (
    token: string,
    user: User,
  ): Promise<Either<Alert, User>> => {
    const fn = 'updateUser';
    const cLog = createConsoleLog(fp, fn);
    console.log(cLog('PASS', 'parameter.user:', user));

    try {
      const response = await apiPut<User>(`users/${user.id}`, token, {
        json: user,
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
    } catch (error: any) {
      console.log(cLog('api.response.error:', error));
    }

    return res;
  },
});

export default createUserRepository;
