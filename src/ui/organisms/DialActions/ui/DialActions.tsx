import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import useDialActions from '../lib';

const DialActions: React.FC = () => {
  const { actions } = useDialActions();

  return (
    <SpeedDial
      ariaLabel="User Menu Dial"
      sx={{ position: 'absolute', top: 5, right: 10 }}
      direction="down"
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.key}
          tooltipTitle={action.label}
          icon={<action.icon />}
          onClick={action.clickAction as () => void}
        />
      ))}
    </SpeedDial>
  );
};

export default DialActions;