import { atom } from 'recoil';
import { Auth } from '../domain/auth/entity';

const loginUserAuthCacheState = atom({
  key: 'loginUserAuthCacheState',
  default: { userId: 0, token: '' } as Auth,
});

export default loginUserAuthCacheState;
