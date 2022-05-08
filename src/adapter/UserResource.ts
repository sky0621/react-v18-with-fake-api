import { Either, left, right } from 'fp-ts/Either';
import { User } from '../domain/user/entity';
import { apiClient } from '../external/api';
import type { Alert } from '../types/alert';
import { createErrorLog } from '../app/log';

const createUserRepository = () => ({
  getUser: async (token: string, id: number): Promise<Either<Alert, User>> => {
    console.log(`[adapter/UserRepository] getUser(${id}) called`);
    const response = await apiClient.get(`users/${id}`, {headers: {''}});
    if (!response.ok) {
      return left(
        createErrorLog('adapter/UserResource.ts#getUser', id, {
          kind: 'ApiError',
          message: '/users/id',
          status: { code: response.status, text: response.statusText },
        }),
      );
    }
    const user = (await response.json()) as User;

    return right(user);
  },

  getUsers: async (token: string): Promise<User[]> => {
    console.log('[adapter/UserRepository] getUsers called');
    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },

  updateUser: async (token: string, user: User): Promise<User> => {
    console.log(`[adapter/UserRepository] updateUser(${user.id}) called`);
    const res = await apiClient
      .put(`users/${user.id}`, { json: user })
      .json<User>();

    console.log(res);

    return res;
  },
});

export default createUserRepository;
