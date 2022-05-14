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

const wrap = (str: string | undefined) => (str ? `[ ${str} ]` : '');
const withNl = (...strs: string[]) =>
  strs.find((str) => str.length > 0) ? '\n' : '';
const lineUp = (...strs: string[]) => strs.join('');

export const createConsoleLog = (
  filePath?: string | undefined,
  funcName?: string | undefined,
) => {
  const fp = wrap(filePath);
  const fn = wrap(funcName);
  const base = lineUp(fp, fn, withNl(fp, fn));

  return (args: any[]) => {
    if (args.length === 0) return `${base}PASS`;

    const argLogs = args.map((arg: unknown) =>
      typeof arg === 'object' ? JSON.stringify(arg) : (arg as string),
    );

    return `${base}${argLogs.join('\n')}`;
  };
};

export const consoleLog =
  (filePath?: string | undefined, funcName?: string | undefined) =>
  (...args: any) => {
    if (!DEBUG) return;
    console.log(createConsoleLog(filePath, funcName)(args as any[]));
  };
