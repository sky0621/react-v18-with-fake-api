import type { Log } from './log';

export type Warn = Log;

export type Error = Log;

export type Alert = Warn | Error;
