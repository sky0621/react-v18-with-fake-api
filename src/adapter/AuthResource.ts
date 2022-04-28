import { Auth } from '../domain/auth/entity';
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from '../external/storage';
import { AUTH_KEY } from '../app/config';

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
        token = '9fd0ccdc-b2c1-4a11-9dfe-119e92501aac';
        break;
      case 'user2':
        userId = 2;
        token = '6ee15fe9-97d0-4b75-8182-44c1b49d9586';
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

  logout: () => {
    removeStorageItem(AUTH_KEY);
  },

  isLogin: () => getStorageItem(AUTH_KEY) !== null,
});

export default createAuthRepository;
