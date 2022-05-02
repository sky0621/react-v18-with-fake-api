import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Action } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import loginUserAuthCacheState from '../../../../store/auth';
import logout from '../../../../usecase/logout';

const useDialActions = () => {
  const navigate = useNavigate();
  // オンメモリキャッシュから（ログイン時にセットした）ユーザーIDを取得
  const loginUserAuthCache = useRecoilValue<Auth>(loginUserAuthCacheState);

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
      key: 'logout',
      label: 'Logout',
      icon: ExitToAppIcon,
      clickAction: () => {
        logout(loginUserAuthCache.userId);
        navigate('/login');
      },
    },
  ];

  return {
    actions,
  };
};

export default useDialActions;
