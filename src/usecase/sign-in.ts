import { Either } from 'fp-ts/Either';
import { authRepository } from '../domain/auth/repository';
import { Auth } from '../domain/auth/entity';
import type { Alert } from '../types/alert';

const signIn = (email: string, password: string): Either<Alert, Auth> =>
  authRepository.signIn(email, password);

export default signIn;
