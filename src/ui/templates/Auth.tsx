import React from 'react';
import Menu from '../pages/Menu';
import useAuth from './AuthHooks';

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {
  const { showChildren } = useAuth();
  if (!showChildren) return null;

  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default AuthTemplate;
