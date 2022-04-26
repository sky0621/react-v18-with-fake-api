import { apiClient } from '../app/api';
import { Entity } from '../domain/user/entity';

export const getUser: (id: number) => Promise<Entity> = async (id: number) => {
  const response = await apiClient.get(`users/${id}`);
  const user = (await response.json()) as Entity;

  return user;
};

export const getUsers: () => Promise<Entity[]> = async () => {
  const response = await apiClient.get('users');
  const users = (await response.json()) as Entity[];

  return users;
};
