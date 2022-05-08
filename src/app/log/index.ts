import type { LogLevel, LogWhat, LogWho } from '../../types/log';

export const createLog = (
  level: LogLevel,
  where: string,
  who: LogWho,
  what: LogWhat,
) => ({
  level,
  when: new Date(),
  where,
  who,
  what,
});

export const createDebugLog = (message: string) =>
  createLog('debug', '-', '-', { kind: 'Unknown', message });

export const createInfoLog = (where = '', who: LogWho = '', what: LogWhat) =>
  createLog('info', where, who, what);

export const createWarnLog = (where: string, who: LogWho, what: LogWhat) =>
  createLog('warn', where, who, what);

export const createErrorLog = (where: string, who: LogWho, what: LogWhat) =>
  createLog('error', where, who, what);

export const createEasyErrorLog = (where: string, who: LogWho, what: LogWhat) =>
  createLog('error', where, who, what);

export const createFatalLog = (where: string, who: LogWho, what: LogWhat) =>
  createLog('fatal', where, who, what);
