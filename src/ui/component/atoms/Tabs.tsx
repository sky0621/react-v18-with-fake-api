import React, { ComponentProps, ReactNode } from 'react';
import { Tabs as OrgTabs } from '@mui/material';

type Props = {
  value: NonNullable<ComponentProps<typeof OrgTabs>['value']>;
  onChange: NonNullable<ComponentProps<typeof OrgTabs>['onChange']>;
  children: ReactNode;
};

const Tabs: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value, onChange, children } = props;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <OrgTabs value={value} onChange={onChange}>
        {children}
      </OrgTabs>
    </>
  );
};

export default Tabs;
