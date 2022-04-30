import { authRepository } from '../domain/auth/repository';

const getUserId = () => authRepository.getUserId();

export default getUserId;
