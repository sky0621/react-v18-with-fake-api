import React, { ComponentProps } from 'react';
import { Tab as OrgTab } from '@mui/material';

type Props = {
  label: NonNullable<ComponentProps<typeof OrgTab>['label']>;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: ComponentProps<typeof OrgTab>['component'];
  to: string;
};

const Tab: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { label, component, to } = props;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <OrgTab label={label} component={component} to={to} />
    </>
  );
};

export default Tab;
