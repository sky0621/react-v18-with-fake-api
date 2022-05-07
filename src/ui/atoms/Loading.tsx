import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingAtom: React.FC = () => (
  <>
    <Backdrop open>
      <CircularProgress color="inherit" />
    </Backdrop>
  </>
);

export default LoadingAtom;
