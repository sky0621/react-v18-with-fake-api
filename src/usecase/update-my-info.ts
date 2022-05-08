import { User } from '../domain/user/entity';
import { userRepository } from '../domain/user/repository';

const updateMyInfo = (token: string, user: User) =>
  userRepository.updateUser(token, user);

export default updateMyInfo;
