import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import checkIsLogin from '../../usecase/check-is-login';
import { Auth } from '../../domain/auth/entity';
import getUserId from '../../usecase/get-user-id';
import loginUserAuthCacheState from '../../store/auth';

const useAuth = () => {
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

  const [showChildren, setShowChildren] = useState(false);
  const navigate = useNavigate();

  // オンメモリキャッシュのユーザIDを使ってログイン済みチェック → 配下の要素を表示
  useEffect(() => {
    if (checkIsLogin(loginUserAuthCache.userId)) {
      // Authテンプレート配下の要素を表示してOK
      setShowChildren(true);
    } else {
      setShowChildren(false);

      // 未ログインならログイン画面へ
      navigate('/login');
    }
  }, [loginUserAuthCache, navigate]);

  return {
    showChildren,
  };
};

export default useAuth;
