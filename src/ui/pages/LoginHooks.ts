import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import login from '../../usecase/login';
import loginUserState from '../../store/auth';

const useLogin = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const changeLoginId = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [_, setLoginUser] = useRecoilState(loginUserState);
  const navigate = useNavigate();
  const handleLogin = (e: SyntheticEvent) => {
    const auth = login(loginId, password);
    setLoginUser({ userId: auth.userId, token: auth.token });
    console.log('to home');
    navigate('/');
    e.preventDefault();
  };

  //  useEffect(() => {});

  return {
    loginId,
    changeLoginId,
    password,
    changePassword,
    handleLogin,
  };
};

export default useLogin;
