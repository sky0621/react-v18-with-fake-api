import { userRepository } from '../domain/user/repository';

const showMyInfo = (id: number) => userRepository.getUser(id);

export default showMyInfo;
