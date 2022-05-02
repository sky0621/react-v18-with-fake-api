import { apiClient } from '../app/api';
import { User } from '../domain/user/entity';

const createUserRepository = () => ({
  getUser: async (id: number): Promise<User> => {
    const response = await apiClient.get(`users/${id}`);
    const user = (await response.json()) as User;

    return user;
  },

  getUsers: async (): Promise<User[]> => {
    const response = await apiClient.get('users');
    const users = (await response.json()) as User[];

    return users;
  },
});

export default createUserRepository;
