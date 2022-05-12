import { Either } from 'fp-ts/Either';
import createAuthRepository from '../../adapter/AuthResource';
import { Auth } from './entity';
import type { Alert } from '../../types/alert';

export type AuthRepository = {
  signIn(email: string, password: string): Either<Alert, Auth>;
  signOut(userId: number): void;
  isSignIn(userId: number): boolean;
  getUserId(): number | null;
};

export type CreateAuthRepository = () => AuthRepository;

export const authRepository: AuthRepository = createAuthRepository();
