import { Either } from 'fp-ts/Either';
import { authRepository } from '../domain/auth/repository';
import { Auth } from '../domain/auth/entity';
import type { Alert } from '../types/alert';

const login = (loginId: string, password: string): Either<Alert, Auth> =>
  authRepository.login(loginId, password);

export default login;
