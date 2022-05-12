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

export const consoleDebugLog =
  (filePath?: string | undefined, funcName?: string | undefined) =>
  (...args: any) => {
    if (DEBUG) {
      let str = 'pass';
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (args.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        str = args.join(', ');
      }
      //    const t = new Date().toLocaleString();
      const fp = filePath ?? '-';
      const fn = funcName ?? '-';
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`[${fp}] [${fn}]\n ${str}`);
    }
  };

export const consoleDebugLog2 =
  (filePath?: string | undefined, funcName?: string | undefined) =>
  (...args: any) => {
    if (!DEBUG) return;
    const fp = filePath ?? '-';
    const fn = funcName ?? '-';

    let log = '';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    switch (args.length) {
      case 0:
        log = `[${fp}] [${fn}] PASS`;
        break;
      case 1:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (typeof args[0] === 'string') {
          log = `[${fp}] [${fn}] ${String(args)}`;
        } else {
          log = `[${fp}] [${fn}] ${String(args)}`;
        }
        break;
      default:
        break;
    }

    return log;
  };
