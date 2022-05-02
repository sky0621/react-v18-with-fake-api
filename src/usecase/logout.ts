import { authRepository } from '../domain/auth/repository';

const logout = (userId: number): void => authRepository.logout(userId);

export default logout;
