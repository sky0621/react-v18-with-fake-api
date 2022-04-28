import login from '../../usecase/login';

const useLogin = () => {
  const handleLogin = (loginId: string, password: string) =>
    login(loginId, password);

  return {
    handleLogin,
  };
};

export default useLogin;
