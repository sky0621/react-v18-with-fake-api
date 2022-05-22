import { FallbackProps } from 'react-error-boundary';
import { Alert, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const ErrorFallback: React.FC<FallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props;
  console.log(error);

  const navigate = useNavigate();

  const handleBackDueToError = () => {
    resetErrorBoundary();
    navigate('/');
  };

  return (
    <>
      <div className={styles.container}>
        <Alert severity="error" variant="outlined">
          <div>{error.message}</div>
          <div>{error.cause?.message}</div>
          <div>
            <Button variant="outlined" onClick={handleBackDueToError}>
              BACK
            </Button>
          </div>
        </Alert>
      </div>
    </>
  );
};

export default ErrorFallback;
