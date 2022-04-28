import createAuthRepository from '../../adapter/AuthResource';
import { Auth } from './entity';

export type AuthRepository = {
  login(loginId: string, password: string): Auth;
  logout(): void;
  isLogin(): boolean;
};

export const authRepository: AuthRepository = createAuthRepository();
