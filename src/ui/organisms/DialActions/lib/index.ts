import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Action } from '../model';
import { Auth } from '../../../../domain/auth/entity';
import loginUserAuthCacheState from '../../../../store/auth';
import logout from '../../../../usecase/logout';

const useDialActions = () => {
  const navigate = useNavigate();
  // on memory cache から（ログイン時にセットした）ユーザーIDを取得
  const loginUserAuthCache = useRecoilValue<Auth>(loginUserAuthCacheState);

  const actions: Action[] = [
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
