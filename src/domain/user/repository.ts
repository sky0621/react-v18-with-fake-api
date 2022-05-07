import { User } from './entity';
import createUserRepository from '../../adapter/UserResource';

export type UserRepository = {
  getUser(id: number): Promise<User>;
  getUsers(): Promise<User[]>;
  updateUser(user: User): Promise<void>;
};

export const userRepository: UserRepository = createUserRepository();
