import React from 'react';
import Auth from 'ui/pages/Auth';
import Menu from '../pages/Menu';

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => (
  <>
    <Menu />
    <Auth>{children}</Auth>
  </>
);

export default AuthTemplate;
