import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { BaseSyntheticEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { isLeft } from 'fp-ts/Either';
import { toUser, UserInput, UserInputScheme } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import signInUserAuthCacheState from '../../../../state/auth';
import showMyInfo from '../../../../usecase/show-my-info';
import { Input } from '../../../molecules/InputGroup';
import { User } from '../../../../domain/user/entity';
import separateZip from '../../../../domain/user/service';
import updateMyInfo from '../../../../usecase/update-my-info';
import type { Alert } from '../../../../types/alert';
import { consoleDebugLog, createErrorLog } from '../../../../app/log';

export type UseMeFormResponse = Pick<
  ReturnType<typeof useForm>,
  'handleSubmit' | 'control'
>;

/*
 * ユーザー情報フォームに関するカスタムフック
 */
export const useMeForm = (): UseMeFormResponse => {
  consoleDebugLog('pass', 'pages/Me/lib/index.ts', 'useMeForm');

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
  consoleDebugLog('pass', 'pages/Me/lib/index.ts', 'useMe');

  // オンメモリキャッシュから（サインイン時にセットした）トークンとユーザーIDを取得
  const signInUserAuthCache = useRecoilValue<Auth>(signInUserAuthCacheState);
  const { token, userId } = signInUserAuthCache;

  const { data } = useQuery([userId, 'user'], () => showMyInfo(token, userId), {
    enabled: !!userId,
  });

  // ユーザー通知アラートのオンオフ切り替え用
  const [alert, setAlert] = useState(null as Alert | null);

  if (!data) {
    setAlert(
      createErrorLog('pages/Me/lib#useMe', userId, {
        kind: 'ApiError',
        message: 'user is none',
      }),
    );

    return {
      undefined,
      alert,
    };
  }

  if (isLeft(data)) {
    setAlert(data.left);

    return {
      undefined,
      alert,
    };
  }

  const user = data.right;

  return {
    user,
    alert,
  };
};

/*
 * ユーザー情報表示フォームの個別要素の初期化に関するカスタムフック
 */
export const useInputs = (user: User | undefined) => {
  consoleDebugLog('pass', 'pages/Me/lib/index.ts', 'useInputs');

  const baseInputs = useMemo(() => {
    if (!user) return [];
    consoleDebugLog('create baseInputs', 'pages/Me/lib/index.ts', 'useInputs');

    return [
      {
        name: 'name',
        label: 'Name',
        defaultValue: user?.name,
        rules: { required: true },
      },
      {
        name: 'username',
        label: 'User Name',
        defaultValue: user?.username,
        rules: { required: true },
      },
      {
        name: 'email',
        label: 'Email Address',
        defaultValue: user?.email,
        rules: { required: true },
      },
      {
        name: 'phone',
        label: 'Phone',
        defaultValue: user?.phone,
      },
      {
        name: 'website',
        label: 'Web Site',
      },
    ] as Input[];
  }, [user]);

  const addressInputs = useMemo(() => {
    if (!user) return [];
    consoleDebugLog(
      'create addressInputs',
      'pages/Me/lib/index.ts',
      'useInputs',
    );

    return [
      {
        name: 'address.street',
        label: 'Street',
        defaultValue: user?.address?.street,
      },
      {
        name: 'address.suite',
        label: 'Suite',
        defaultValue: user?.address?.suite,
      },
      {
        name: 'address.city',
        label: 'City',
        defaultValue: user?.address?.city,
      },
      {
        name: 'address.zipcode.first',
        label: 'Zip Code first',
        defaultValue: separateZip(user?.address?.zipcode)[0],
        itemSize: 3,
      },
      {
        name: 'address.zipcode.second',
        label: 'Zip Code second',
        defaultValue: separateZip(user?.address?.zipcode)[1],
        itemSize: 3,
      },
      {
        name: 'address.geo.lat',
        label: 'Geo(Lat)',
        defaultValue: user?.address?.geo?.lat,
        itemSize: 3,
      },
      {
        name: 'address.geo.lng',
        label: 'Geo(Lng)',
        defaultValue: user?.address?.geo?.lng,
        itemSize: 3,
      },
    ] as Input[];
  }, [user]);

  const companyInputs = useMemo(() => {
    if (!user) return [];
    consoleDebugLog(
      'create companyInputs',
      'pages/Me/lib/index.ts',
      'useInputs',
    );

    return [
      {
        name: 'company.name',
        label: 'Name',
        defaultValue: user?.company?.name,
      },
      {
        name: 'company.catchPhrase',
        label: 'Catch Phrase',
        defaultValue: user?.company?.catchPhrase,
      },
      {
        name: 'company.bs',
        label: 'BS',
        defaultValue: user?.company?.bs,
      },
    ] as Input[];
  }, [user]);

  return {
    baseInputs,
    addressInputs,
    companyInputs,
  };
};

/*
 * ユーザー情報編集処理に関するカスタムフック
 */
export const useEditMeSubmit = (userId: number) => {
  consoleDebugLog('pass', 'pages/Me/lib/index.ts', 'useEditMeSubmit');

  // ユーザー通知アラートのオンオフ切り替え用
  //  const [alert, setAlert] = useState(null as Alert | null);
  //  console.log(setAlert);

  // オンメモリキャッシュから（サインイン時にセットした）トークンを取得
  const signInUserAuthCache = useRecoilValue<Auth>(signInUserAuthCacheState);
  const { token } = signInUserAuthCache;
  const mutation = useMutation<User, unknown, User>((u: User) =>
    updateMyInfo(token, u),
  );

  // ユーザー編集発火時処理
  const handleEditMe: SubmitHandler<UserInput> = (
    data,
    event: BaseSyntheticEvent | undefined,
  ) => {
    event?.preventDefault();

    // ユーザー編集ユースケースをコール
    const res = mutation.mutate(toUser(userId, data));
    consoleDebugLog(res, 'pages/Me/lib/index.ts', 'useEditMeSubmit');

    //    if (isLeft(eAuth)) {
    //      setAlert(eAuth.left);
    //    }
  };

  return {
    handleEditMe,
    //    alert,
  };
};
