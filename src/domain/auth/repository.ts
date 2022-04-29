import createAuthRepository from '../../adapter/AuthResource';
import { Auth } from './entity';

export type AuthRepository = {
  login(loginId: string, password: string): Auth;
  logout(userId: number): void;
  isLogin(userId: number): boolean;
};

export const authRepository: AuthRepository = createAuthRepository();
