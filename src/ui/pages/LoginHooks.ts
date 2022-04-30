import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLeft } from 'fp-ts/Either';
import login from '../../usecase/login';
import type { Alert } from '../../types/alert';
import { Auth } from '../../domain/auth/entity';
import checkIsLogin from '../../usecase/check-is-login';
import loginUserAuthCacheState from '../../store/auth';

// TODO: react-hook-form を使う！
export const useLoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const changeLoginId = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };

  const [password, setPassword] = useState('');
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    loginId,
    changeLoginId,
    password,
    changePassword,
  };
};

export const useLoginSubmit = (loginId: string, password: string) => {
  const navigate = useNavigate();

  /*
   * ログイン済みチェック
   */
  // on memory store から（ログイン時にセットした）ユーザーID（及びセッター）を取得
  const [loginUserAuthCache, setLoginUserAuthCache] = useRecoilState<Auth>(
    loginUserAuthCacheState,
  );

  useEffect(() => {
    if (loginUserAuthCache.userId) {
      if (checkIsLogin(loginUserAuthCache.userId)) {
        navigate('/');
      }
    }
  }, [loginUserAuthCache, setLoginUserAuthCache, navigate]);

  const [alert, setAlert] = useState(null as Alert | null);

  /*
   * ログイン発火時処理
   */
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();

    const eAuth = login(loginId, password);
    if (isLeft(eAuth)) {
      setAlert(eAuth.left);

      return;
    }

    const auth = eAuth.right;
    setLoginUserAuthCache({ userId: auth.userId, token: auth.token });
    navigate('/');
  };

  return {
    handleLogin,
    alert,
  };
};
