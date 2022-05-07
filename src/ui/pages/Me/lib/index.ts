import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { BaseSyntheticEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput, UserInputScheme } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import signInUserAuthCacheState from '../../../../state/auth';
import type { Alert } from '../../../../types/alert';
import showMyInfo from '../../../../usecase/show-my-info';
import { Input } from '../../../molecules/InputGroup';
import { User } from '../../../../domain/user/entity';
import separateZip from '../../../../domain/user/service';
import updateMyInfo from '../../../../usecase/update-my-info';

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
 * ユーザー情報表示フォームの個別要素の初期化に関するカスタムフック
 */
export const useInputs = (user: User | undefined) => {
  const baseInputs: Input[] = [
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
      defaultValue: user?.website,
    },
  ];

  const addressInputs: Input[] = [
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
  ];

  const companyInputs: Input[] = [
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
  ];

  return {
    baseInputs,
    addressInputs,
    companyInputs,
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
    const mutation = useMutation((u) => updateMyInfo(u));

    //    if (isLeft(eAuth)) {
    //      setAlert(eAuth.left);
    //    }
  };

  return {
    handleEditMe,
    alert,
  };
};
