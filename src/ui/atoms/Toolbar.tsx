import React, { ReactNode } from 'react';
import { Toolbar as OrgToolbar } from '@mui/material';

type Props = {
  children: ReactNode;
};

const Toolbar: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <OrgToolbar>{children}</OrgToolbar>
    </>
  );
};

export default Toolbar;
