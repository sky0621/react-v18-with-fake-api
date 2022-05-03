import { atom } from 'recoil';
import { Auth } from '../domain/auth/entity';

const signInUserAuthCacheState = atom({
  key: 'signInUserAuthCacheState',
  default: { userId: 0, token: '' } as Auth,
});

export default signInUserAuthCacheState;
