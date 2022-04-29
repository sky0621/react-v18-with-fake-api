import { authRepository } from '../domain/auth/repository';

const checkIsLogin = (userId: number) => authRepository.isLogin(userId);

export default checkIsLogin;
