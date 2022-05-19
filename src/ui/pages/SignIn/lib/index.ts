import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLeft } from 'fp-ts/Either';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { Alert } from '../../../../types/alert';
import { Auth } from '../../../../domain/auth/entity';
import signInUserAuthCacheState from '../../../../state/auth';
import getUserId from '../../../../usecase/get-user-id';
import { SignInInput } from '../model';
import checkIsSignIn from '../../../../usecase/check-is-sign-in';
import signIn from '../../../../usecase/sign-in';
import { createConsoleLog } from '../../../../app/log';

const fp = 'ui/pages/SignIn/lib/index.ts';

/*
 * サインインフォームに関するカスタムフック
 */
export const useSignInForm = () => {
  console.log(createConsoleLog(fp, 'useSignInForm')());

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInInput>();

  return {
    handleSubmit,
    control,
    errors,
  };
};

/*
 * サインイン処理に関するカスタムフック
 */
export const useSignInSubmit = () => {
  const fn = 'useSignInSubmit';
  console.log(createConsoleLog(fp, fn)());

  // オンメモリキャッシュから（サインイン時にセットした）ユーザーID（及びセッター）を取得
  const [signInUserAuthCache, setSignInUserAuthCache] = useRecoilState<Auth>(
    signInUserAuthCacheState,
  );

  // オンメモリキャッシュにユーザIDがない場合はローカルストレージから取得してキャッシュに再セット
  useEffect(() => {
    if (!signInUserAuthCache.userId) {
      console.log(createConsoleLog(fp, fn)('[Effect] no userId in cache'));

      const userId = getUserId();
      if (userId !== null) {
        console.log(
          createConsoleLog(
            fp,
            fn,
          )(`[Effect] got userId:${userId} from local storage`),
        );

        setSignInUserAuthCache(
          (prev) => ({ userId: userId as unknown, token: prev.token } as Auth),
        );
      }
    }
  }, [signInUserAuthCache, setSignInUserAuthCache]);

  const navigate = useNavigate();

  // オンメモリキャッシュのユーザIDを使ってサインイン済みチェック → サインイン済みならホーム画面へリダイレクト
  useEffect(() => {
    if (signInUserAuthCache.userId) {
      console.log(createConsoleLog(fp, fn)('[Effect] exists userId in cache'));

      if (checkIsSignIn(signInUserAuthCache.userId)) {
        console.log(createConsoleLog(fp, fn)('[Effect] success to sign in'));

        navigate('/');
      }
    }
  }, [signInUserAuthCache, setSignInUserAuthCache, navigate]);

  // ユーザー通知アラートのオンオフ切り替え用
  const [alert, setAlert] = useState(null as Alert | null);

  // サインイン発火時処理
  const handleSignIn: SubmitHandler<SignInInput> = (
    data,
    event: BaseSyntheticEvent | undefined,
  ) => {
    console.log(createConsoleLog(fp, fn)('[handleSignIn] called'));

    event?.preventDefault();

    // サインイン処理（成功ならローカルストレージにトークンが書き込まれる）
    const eAuth = signIn(data.email, data.password);

    if (isLeft(eAuth)) {
      setAlert(eAuth.left);

      return;
    }

    const auth = eAuth.right;
    // オンメモリキャッシュにユーザーIDとトークンを書き込む
    setSignInUserAuthCache({ userId: auth.userId, token: auth.token });

    navigate('/');
  };

  return {
    handleSignIn,
    alert,
  };
};
