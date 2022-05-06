import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { BaseSyntheticEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput, UserInputScheme } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import signInUserAuthCacheState from '../../../../state/auth';
import type { Alert } from '../../../../types/alert';
import showMyInfo from '../../../../usecase/show-my-info';

export type UseMeFormResponse = Pick<
  ReturnType<typeof useForm>,
  'handleSubmit' | 'control'
>;

/*
 * ユーザー情報フォームに関するカスタムフック
 */
export const useMeForm = (): UseMeFormResponse => {
  const { handleSubmit, control } = useForm<UserInput>({
    resolver: yupResolver(UserInputScheme),
  });

  return {
    handleSubmit,
    control,
  };
};

/*
 * ユーザー情報取得に関するカスタムフック
 */
export const useMe = () => {
  // オンメモリキャッシュから（サインイン時にセットした）ユーザーIDを取得
  const signInUserAuthCache = useRecoilValue<Auth>(signInUserAuthCacheState);
  const { userId } = signInUserAuthCache;

  const { data: user } = useQuery([userId, 'user'], () => showMyInfo(userId), {
    enabled: !!userId,
  });

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
    console.log('!!! handleEditMe !!!');
    console.log(data);

    event?.preventDefault();

    // FIXME: ユーザー編集ユースケースをコール！

    //    if (isLeft(eAuth)) {
    //      setAlert(eAuth.left);
    //    }
  };

  return {
    handleEditMe,
    alert,
  };
};
