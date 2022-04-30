import { SyntheticEvent, useState } from 'react';
import type { Log } from '../../../../types/log';
import {
  convertMessage,
  convertSeverity,
} from '../../../../app/briefNotification';

const useBriefNotification = (log: Log) => {
  const { level, what } = log;

  const severity = convertSeverity(level);
  const message = convertMessage(what.message);

  const [open, setOpen] = useState(true);

  const handleClose = (e: Event | SyntheticEvent) => {
    if (e) e.preventDefault();
    setOpen(false);
  };

  return {
    severity,
    message,
    open,
    handleClose,
  };
};

export default useBriefNotification;
