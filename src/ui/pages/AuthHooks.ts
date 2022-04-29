import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import checkIsLogin from '../../usecase/check-is-login';
import { Auth } from '../../domain/auth/entity';
import loginUserState from '../../store/auth';

const useAuth = () => {
  const [showChildren, setShowChildren] = useState(false);

  const auth = useRecoilValue<Auth>(loginUserState);

  const navigate = useNavigate();

  useEffect(() => {
    if (checkIsLogin(auth.userId)) {
      setShowChildren(true);
    }
    navigate('/login');
  }, [auth, navigate]);

  return {
    showChildren,
  };
};

export default useAuth;
