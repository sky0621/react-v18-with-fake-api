import { userRepository } from '../domain/user/repository';

const showMyInfo = (token: string, id: number) =>
  userRepository.getUser(token, id);

export default showMyInfo;
