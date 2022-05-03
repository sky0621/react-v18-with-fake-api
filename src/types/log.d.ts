export type LogLevelDebug = 'debug';
export type LogLevelInfo = 'info';
export type LogLevelWarn = 'warn';
export type LogLevelError = 'error';
export type LogLevelFatal = 'fatal';
export type LogLevelUnknown = 'unknown';
export type LogLevel =
  | LogLevelDebug
  | LogLevelInfo
  | LogLevelWarn
  | LogLevelError
  | LogLevelFatal
  | LogLevelUnknown;

export type LogKindRequired = 'Required';
export type LogKindNotFound = 'NotFound';
export type LogKindUnknown = 'Unknown';
export type LogKind = LogKindRequired | LogKindNotFound | LogKindUnknown;

export type LogWho = number | string | 'Unknown'; // sign-in user id

export type LogWhat = {
  kind: LogKind;
  message: string;
};

export type Log = {
  level: LogLevel;

  when: Date;
  where: string;
  who: LogWho;
  what: LogWhat;
};
