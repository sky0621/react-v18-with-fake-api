import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../domain/auth/entity';
import getUserId from '../../usecase/get-user-id';
import signInUserAuthCacheState from '../../store/auth';
import checkIsSignIn from '../../usecase/check-is-sign-in';

const useAuth = () => {
  // オンメモリキャッシュから（サインイン時にセットした）ユーザーID（及びセッター）を取得
  const [signInUserAuthCache, setSignInUserAuthCache] = useRecoilState<Auth>(
    signInUserAuthCacheState,
  );

  // オンメモリキャッシュにユーザIDがない場合はローカルストレージから取得してキャッシュに再セット
  useEffect(() => {
    if (!signInUserAuthCache.userId) {
      const userId = getUserId();
      if (userId !== null) {
        setSignInUserAuthCache(
          (prev) => ({ userId: userId as unknown, token: prev.token } as Auth),
        );
      }
    }
  }, [signInUserAuthCache, setSignInUserAuthCache]);

  const [showChildren, setShowChildren] = useState(false);
  const navigate = useNavigate();

  // オンメモリキャッシュのユーザIDを使って認証済みチェック → 配下の要素を表示
  useEffect(() => {
    if (checkIsSignIn(signInUserAuthCache.userId)) {
      // Authテンプレート配下の要素を表示してOK
      setShowChildren(true);
    } else {
      setShowChildren(false);

      navigate('/sign-in');
    }
  }, [signInUserAuthCache, navigate]);

  return {
    showChildren,
  };
};

export default useAuth;
