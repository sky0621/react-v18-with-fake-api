import { Either, left, right } from 'fp-ts/Either';
import { Auth } from '../domain/auth/entity';
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from '../external/storage';
import { AUTH_KEY } from '../app/config';
import { createWarnLog } from '../app/log';
import type { Alert } from '../types/alert';

// for user1
const token1 = '9fd0ccdc-b2c1-4a11-9dfe-119e92501aac';
// for user2
const token2 = '6ee15fe9-97d0-4b75-8182-44c1b49d9586';

// MEMO: 本当なら自前のAPIサーバやIDaasを使うけど、プロダクトではないので適当にユーザーIDとトークンを割り当て
const pick = (
  loginId: string,
  userId: number,
  token: string,
): [string, number, string] => {
  if (loginId === 'user1' || userId === 1 || token === token1) {
    return ['user1', 1, token1];
  }
  if (loginId === 'user2' || userId === 2 || token === token2) {
    return ['user2', 2, token2];
  }

  return ['', 0, ''];
};

const pickLoginIdAndUserIdByToken = (t: string): [string, number] => {
  const [loginId, userId, _] = pick('', 0, t);

  return [loginId, userId];
};

// userId と一致するトークンを保持しているか否か
const checkToken = (userId: number) => {
  const token = getStorageItem(AUTH_KEY);
  if (!token) return false;
  const [_, rUserId] = pickLoginIdAndUserIdByToken(token);

  return rUserId === userId;
};

const createAuthRepository = () => ({
  login: (loginId: string, password: string): Either<Alert, Auth> => {
    if (!loginId || !password) {
      return left(
        createWarnLog('adapter/AuthResource.ts#login', 'Unknown', {
          kind: 'Required',
          message: 'LOGIN_ID_IS_NONE_OR_PASSWORD_IS_NONE',
        }),
      );
    }

    // password は何でも通す

    const [_, userId, token] = pick(loginId, 0, '');
    if (userId === 0) {
      return left(
        createWarnLog('adapter/AuthResource.ts#login', 'Unknown', {
          kind: 'NotFound',
          message: 'USER_IS_NONE',
        }),
      );
    }

    const already = getStorageItem(AUTH_KEY);
    if (already) {
      removeStorageItem(AUTH_KEY);
    }

    saveStorageItem(AUTH_KEY, token);

    return right({ userId, token });
  },

  logout: (userId: number) => {
    if (checkToken(userId)) {
      removeStorageItem(AUTH_KEY);
    }
  },

  isLogin: (userId: number) => checkToken(userId),

  getUserId: () => {
    const token = getStorageItem(AUTH_KEY);
    if (!token) return null;
    const [_, userId] = pickLoginIdAndUserIdByToken(token);
    if (userId === 0) return null;

    return userId;
  },
});

export default createAuthRepository;
