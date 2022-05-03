import { Either } from 'fp-ts/Either';
import createAuthRepository from '../../adapter/AuthResource';
import { Auth } from './entity';
import type { Alert } from '../../types/alert';

export type AuthRepository = {
  login(email: string, password: string): Either<Alert, Auth>;
  logout(userId: number): void;
  isLogin(userId: number): boolean;
  getUserId(): number | null;
};

export const authRepository: AuthRepository = createAuthRepository();
