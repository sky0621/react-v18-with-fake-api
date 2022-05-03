import { authRepository } from '../domain/auth/repository';

const signOut = (userId: number): void => authRepository.signOut(userId);

export default signOut;
