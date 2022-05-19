import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import useBriefNotification from '../lib';
import type { Log } from '../../../../types/log';
import { createConsoleLog } from '../../../../app/log';

const fp = 'ui/organisms/BriefNotification/ui/BriefNotification.tsx';

type Props = {
  log: Log;
};

const BriefNotification: React.FC<Props> = (props) => {
  console.log(createConsoleLog(fp)());

  const { log } = props;
  const { severity, message, open, handleClose } = useBriefNotification(log);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        severity={severity}
        onClose={handleClose}
        sx={{ width: '100%' }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default BriefNotification;
