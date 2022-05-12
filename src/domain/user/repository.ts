import { Either } from 'fp-ts/Either';
import { User } from './entity';
import createUserRepository from '../../adapter/UserResource';
import type { Alert } from '../../types/alert';

export type UserRepository = {
  getUser(token: string, id: number): Promise<Either<Alert, User>>;
  getUsers(token: string): Promise<User[]>;
  updateUser(token: string, user: User): Promise<User>;
};

export type CreateUserRepository = () => UserRepository;

export const userRepository: UserRepository = createUserRepository();
