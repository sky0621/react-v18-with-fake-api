import { User } from './entity';
import createUserRepository from '../../adapter/UserResource';

export type UserRepository = {
  getUser(id: number): Promise<User>;
};

export const userRepository: UserRepository = createUserRepository();
