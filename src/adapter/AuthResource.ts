import { Auth } from '../domain/auth/entity';
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from '../external/storage';
import { AUTH_KEY } from '../app/config';

// for user1
const token1 = '9fd0ccdc-b2c1-4a11-9dfe-119e92501aac';
// for user2
const token2 = '6ee15fe9-97d0-4b75-8182-44c1b49d9586';

// userId と一致するトークンを保持しているか否か
const checkToken = (userId: number) => {
  const token = getStorageItem(AUTH_KEY);
  if (!token) return false;
  switch (token) {
    case token1:
      if (userId === 1) {
        return true;
      }
      break;
    case token2:
      if (userId === 2) {
        return true;
      }
      break;
    default:
      break;
  }

  return false;
};

const createAuthRepository = () => ({
  login: (loginId: string, password: string) => {
    // MEMO: 本当なら自前のAPIサーバやIDaasを使うけど、プロダクトではないので適当にユーザーIDとトークンを割り当て
    // password は何でも通す
    console.log(password);
    let userId = 0;
    let token = '';
    switch (loginId) {
      case 'user1':
        userId = 1;
        token = token1;
        break;
      case 'user2':
        userId = 2;
        token = token2;
        break;
      default:
        break;
    }
    if (userId === 0) {
      throw new Error('user is not found');
    }

    const already = getStorageItem(AUTH_KEY);
    if (already) {
      removeStorageItem(AUTH_KEY);
    }

    saveStorageItem(AUTH_KEY, token);

    return { userId, token } as Auth;
  },

  logout: (userId: number) => {
    if (checkToken(userId)) {
      removeStorageItem(AUTH_KEY);
    }
  },

  isLogin: (userId: number) => checkToken(userId),
});

export default createAuthRepository;
