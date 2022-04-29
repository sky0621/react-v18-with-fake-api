import { atom } from 'recoil';
import { Auth } from '../domain/auth/entity';

const loginUserState = atom({
  key: 'loginUserState',
  default: { userId: 0, token: '' } as Auth,
});

export default loginUserState;
