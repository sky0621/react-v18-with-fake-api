import { User } from '../domain/user/entity';
import { apiClient } from '../external/api';

const createUserRepository = () => ({
  getUser: async (id: number): Promise<User> => {
    console.log(`[adapter/UserRepository] getUser(${id}) called`);
    const response = await apiClient.get(`users/${id}`);
    const user = (await response.json()) as User;

    return user;
  },

  getUsers: async (): Promise<User[]> => {
    console.log('[adapter/UserRepository] getUsers called');
    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },
});

export default createUserRepository;
