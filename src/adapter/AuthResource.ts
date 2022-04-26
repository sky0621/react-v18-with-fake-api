import { Base64 } from 'js-base64';
import { Auth } from '../domain/auth/entity';

const createAuthRepository = () => ({
  login: (loginId: string, password: string) => {
    // MEMO: 本当ならAPIやIDaasを使うけど、プロダクトではないので適当にトークン生成
    const base64Id = Base64.encode(loginId);
    const base64Ps = Base64.encode(password);
    const token = `${base64Id}:${base64Ps}`;
    localStorage.setItem(token, '1'); // MEMO: とりあえずユーザーID：1 固定

    return { userId: 1, token } as Auth;
  },

  logout: (token: string) => {
    localStorage.removeItem(token);
  },

  isLogin: (token: string) => localStorage.getItem(token) === '1',
});

export default createAuthRepository;
