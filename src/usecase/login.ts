import { authRepository } from '../domain/auth/repository';

const login = (loginId: string, password: string) =>
  authRepository.login(loginId, password);

export default login;
