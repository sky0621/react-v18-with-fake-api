import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Action } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import signInUserAuthCacheState from '../../../../store/auth';
import signOut from '../../../../usecase/sign-out';

const useDialActions = () => {
  const navigate = useNavigate();
  // オンメモリキャッシュから（サインイン時にセットした）ユーザーIDを取得
  const signInUserAuthCache = useRecoilValue<Auth>(signInUserAuthCacheState);

  const actions: Action[] = [
    {
      key: 'userInfo',
      label: 'User Info',
      icon: PersonIcon,
      clickAction: () => {
        navigate('/me');
      },
    },
    {
      key: 'signOut',
      label: 'Sign Out',
      icon: ExitToAppIcon,
      clickAction: () => {
        signOut(signInUserAuthCache.userId);
        navigate('/sign-in');
      },
    },
  ];

  return {
    actions,
  };
};

export default useDialActions;
