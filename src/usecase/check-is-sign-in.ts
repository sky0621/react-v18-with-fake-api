import { authRepository } from '../domain/auth/repository';

const checkIsSignIn = (userId: number) => authRepository.isSignIn(userId);

export default checkIsSignIn;
