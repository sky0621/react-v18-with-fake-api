import { Either, left, right } from 'fp-ts/Either';
import { Auth } from '../domain/auth/entity';
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from '../external/storage';
import { AUTH_KEY } from '../app/config';
import { consoleDebugLog, createWarnLog } from '../app/log';
import type { Alert } from '../types/alert';
import type { CreateAuthRepository } from '../domain/auth/repository';

// for user1@example.com
const token1 = '9fd0ccdc-b2c1-4a11-9dfe-119e92501aac';
// for user2@example.com
const token2 = '6ee15fe9-97d0-4b75-8182-44c1b49d9586';

// MEMO: 本当なら自前のAPIサーバやIDaasを使うけど、プロダクトではないので適当にユーザーIDとトークンを割り当て
const pick = (
  email: string,
  userId: number,
  token: string,
): [string, number, string] => {
  if (email === 'user1@example.com' || userId === 1 || token === token1) {
    return ['user1', 1, token1];
  }
  if (email === 'user2@example.com' || userId === 2 || token === token2) {
    return ['user2', 2, token2];
  }

  return ['', 0, ''];
};

const pickSignInIdAndUserIdByToken = (t: string): [string, number] => {
  const [email, userId, _] = pick('', 0, t);

  return [email, userId];
};

// userId と一致するトークンを保持しているか否か
const checkToken = (userId: number) => {
  const token = getStorageItem(AUTH_KEY);
  if (!token) return false;
  const [_, rUserId] = pickSignInIdAndUserIdByToken(token);

  return rUserId === userId;
};

const createAuthRepository: CreateAuthRepository = () => ({
  signIn: (email: string, password: string): Either<Alert, Auth> => {
    consoleDebugLog('adapter/AuthResource.ts', `signIn(${email})`)();

    if (!email || !password) {
      return left(
        createWarnLog('adapter/AuthResource.ts#signIn', 'Unknown', {
          kind: 'Required',
          message: 'EMAIL_IS_NONE_OR_PASSWORD_IS_NONE',
        }),
      );
    }

    // password は何でも通す

    const [_, userId, token] = pick(email, 0, '');
    if (userId === 0) {
      return left(
        createWarnLog('adapter/AuthResource.ts#signIn', 'Unknown', {
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

  signOut: (userId: number) => {
    consoleDebugLog('adapter/AuthResource.ts', `signOut(${userId})`)();

    if (checkToken(userId)) {
      removeStorageItem(AUTH_KEY);
    }
  },

  isSignIn: (userId: number) => {
    consoleDebugLog('adapter/AuthResource.ts', `isSignIn(${userId})`)();

    return checkToken(userId);
  },

  getUserId: () => {
    consoleDebugLog('adapter/AuthResource.ts', 'getUserId')();

    const token = getStorageItem(AUTH_KEY);
    consoleDebugLog(
      'adapter/AuthResource.ts',
      'getUserId',
    )(`token: ${token ?? '-'}`);
    if (!token) return null;

    const [_, userId] = pickSignInIdAndUserIdByToken(token);
    consoleDebugLog(
      'adapter/AuthResource.ts',
      'getUserId',
    )(`userId: ${userId}`);
    if (userId === 0) return null;

    return userId;
  },
});

export default createAuthRepository;
