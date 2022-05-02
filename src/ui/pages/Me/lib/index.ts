import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { BaseSyntheticEvent, useState } from 'react';
import { UserInput } from '../model';
import useShowMyInfo from '../../../../usecase/show-my-info';
import { Auth } from '../../../../domain/auth/entity';
import loginUserAuthCacheState from '../../../../store/auth';
import type { Alert } from '../../../../types/alert';

/*
 * ユーザー情報フォームに関するカスタムフック
 */
export const useMeForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserInput>();

  return {
    handleSubmit,
    control,
    errors,
  };
};

/*
 * ユーザー情報取得に関するカスタムフック
 */
export const useMe = () => {
  // オンメモリキャッシュから（ログイン時にセットした）ユーザーIDを取得
  const loginUserAuthCache = useRecoilValue<Auth>(loginUserAuthCacheState);

  const { user } = useShowMyInfo(Number(loginUserAuthCache.userId));

  return {
    user,
  };
};

/*
 * ユーザー情報編集処理に関するカスタムフック
 */
export const useEditMeSubmit = () => {
  // ユーザー通知アラートのオンオフ切り替え用
  const [alert, setAlert] = useState(null as Alert | null);
  console.log(setAlert);

  // ユーザー編集発火時処理
  const handleEditMe: SubmitHandler<UserInput> = (
    data,
    event: BaseSyntheticEvent | undefined,
  ) => {
    event?.preventDefault();

    // FIXME: ユーザー編集ユースケースをコール！
    //    const eAuth = login(data.loginId, data.password);

    //    if (isLeft(eAuth)) {
    //      setAlert(eAuth.left);
    //    }
  };

  return {
    handleEditMe,
    alert,
  };
};
