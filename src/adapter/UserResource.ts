import { apiClient } from '../app/api';
import { User } from '../domain/user/entity';

export const getUser: (id: number) => Promise<User> = async (id: number) => {
  const response = await apiClient.get(`users/${id}`);
  const user = (await response.json()) as User;

  return user;
};

export const getUsers: () => Promise<User[]> = async () => {
  const response = await apiClient.get('users');
  const users = (await response.json()) as User[];

  return users;
};
