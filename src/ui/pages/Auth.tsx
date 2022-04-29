import React from 'react';
import useAuth from './AuthHooks';

type Props = {
  children: React.ReactNode;
};

const AuthCheck: React.FC<Props> = ({ children }) => {
  const { showChildren } = useAuth();

  if (showChildren) {
    return <>{children}</>;
  }

  return null;
};

export default AuthCheck;
