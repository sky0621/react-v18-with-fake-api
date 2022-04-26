import { Base64 } from 'js-base64';
import { Auth } from '../domain/auth/entity';
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from '../external/storage';
import { AUTH_KEY } from '../app/config';

const createAuthRepository = () => ({
  login: (loginId: string, password: string) => {
    // MEMO: 本当ならAPIやIDaasを使うけど、プロダクトではないので適当にトークン生成
    const base64Id = Base64.encode(loginId);
    const base64Ps = Base64.encode(password);
    const token = `${base64Id}:${base64Ps}`;
    saveStorageItem(`${AUTH_KEY}1`, token); // MEMO: とりあえずユーザーID：1 固定

    return { userId: 1, token } as Auth;
  },

  logout: (userId: string) => {
    removeStorageItem(`${AUTH_KEY}${userId}`);
  },

  isLogin: (userId: string) => getStorageItem(`${AUTH_KEY}${userId}`) !== '',
});

export default createAuthRepository;
