import type { LogLevel, LogWhat, LogWho } from '../../types/log';
import { DEBUG } from '../config';

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

export const createDebugLog = (message: string, where?: string | undefined) =>
  createLog('debug', where ?? '-', '-', { kind: 'Unknown', message });

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

export const consoleDebugLog = (
  message: any,
  filePath?: string | undefined,
  funcName?: string | undefined,
) => {
  if (DEBUG) {
    //    const t = new Date().toLocaleString();
    const fp = filePath ?? '-';
    const fn = funcName ?? '-';
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`[${fp}] [${fn}]\n ${message}`);
  }
};
