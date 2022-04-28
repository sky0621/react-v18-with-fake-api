import { authRepository } from '../domain/auth/repository';

const login = (loginId: string, password: string) => {
  const auth = authRepository.login(loginId, password);

  return auth;
};

export default login;
