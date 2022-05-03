import type { LogLevel } from '../../types/log';

export const convertSeverity = (
  level: LogLevel,
): 'info' | 'warning' | 'error' | 'success' => {
  switch (level) {
    case 'warn':
      return 'warning';
      break;
    case 'error':
      return 'error';
      break;
    default:
      break;
  }

  return 'info';
};

export const convertMessage = (message: string): string => {
  switch (message) {
    case 'EMAIL_IS_NONE_OR_PASSWORD_IS_NONE':
      return 'メールアドレス及びパスワードは必須です。';
      break;
    case 'USER_IS_NONE':
      return 'ユーザーが存在しません。';
      break;
    default:
      break;
  }

  return '';
};
