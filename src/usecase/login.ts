import { authRepository } from '../domain/auth/repository';

const useLogin = () => {
  const handleLogin = (loginId: string, password: string) => {
    const auth = authRepository.login(loginId, password);

    return auth.token;
  };

  return {
    handleLogin,
  };
};

export default useLogin;
