import { User } from '../domain/user/entity';
import { userRepository } from '../domain/user/repository';

const updateMyInfo = (user: User) => userRepository.updateUser(user);

export default updateMyInfo;
