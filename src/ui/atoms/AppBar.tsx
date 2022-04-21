import React, { ComponentProps, ReactNode } from 'react';
import { AppBar as OrgAppBar } from '@mui/material';

type Props = {
  position: NonNullable<ComponentProps<typeof OrgAppBar>['position']>;
  children: ReactNode;
};

const AppBar: React.FC<Props> = (props) => {
  const { position, children } = props;

  return (
    <>
      <OrgAppBar position={position}>{children}</OrgAppBar>
    </>
  );
};

export default AppBar;
