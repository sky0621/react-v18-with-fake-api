import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLeft } from 'fp-ts/Either';
import { SubmitHandler, useForm } from 'react-hook-form';
import login from '../../../../usecase/login';
import type { Alert } from '../../../../types/alert';
import { Auth } from '../../../../domain/auth/entity';
import checkIsLogin from '../../../../usecase/check-is-login';
import loginUserAuthCacheState from '../../../../store/auth';
import getUserId from '../../../../usecase/get-user-id';
import { LoginInput } from '../model';

/*
 * ログインフォームに関するカスタムフック
 */
export const useLoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInput>();

  return {
    handleSubmit,
    control,
    errors,
  };
};

/*
 * ログイン処理に関するカスタムフック
 */
export const useLoginSubmit = () => {
  // オンメモリキャッシュから（ログイン時にセットした）ユーザーID（及びセッター）を取得
  const [loginUserAuthCache, setLoginUserAuthCache] = useRecoilState<Auth>(
    loginUserAuthCacheState,
  );

  // オンメモリキャッシュにユーザIDがない場合はローカルストレージから取得してキャッシュに再セット
  useEffect(() => {
    if (!loginUserAuthCache.userId) {
      const userId = getUserId();
      if (userId !== null) {
        setLoginUserAuthCache(
          (prev) => ({ userId: userId as unknown, token: prev.token } as Auth),
        );
      }
    }
  }, [loginUserAuthCache, setLoginUserAuthCache]);

  const navigate = useNavigate();

  // オンメモリキャッシュのユーザIDを使ってログイン済みチェック → ログイン済みならホーム画面へリダイレクト
  useEffect(() => {
    if (loginUserAuthCache.userId) {
      if (checkIsLogin(loginUserAuthCache.userId)) {
        navigate('/');
      }
    }
  }, [loginUserAuthCache, setLoginUserAuthCache, navigate]);

  // ユーザー通知アラートのオンオフ切り替え用
  const [alert, setAlert] = useState(null as Alert | null);

  // ログイン発火時処理
  const handleLogin: SubmitHandler<LoginInput> = (
    data,
    event: BaseSyntheticEvent | undefined,
  ) => {
    event?.preventDefault();

    // ログイン処理（成功ならローカルストレージにトークンが書き込まれる）
    const eAuth = login(data.loginId, data.password);

    if (isLeft(eAuth)) {
      setAlert(eAuth.left);

      return;
    }

    const auth = eAuth.right;
    // オンメモリキャッシュにユーザーIDとトークンを書き込む
    setLoginUserAuthCache({ userId: auth.userId, token: auth.token });

    navigate('/');
  };

  return {
    handleLogin,
    alert,
  };
};
