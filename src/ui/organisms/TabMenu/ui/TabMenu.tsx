import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AppBar from '../../../atoms/AppBar';
import Toolbar from '../../../atoms/Toolbar';
import Tabs from '../../../atoms/Tabs';
import Tab from '../../../atoms/Tab';
import { TabAttribute } from '../model';
import useTabMenu from '../lib';

type Props = {
  position: NonNullable<ComponentProps<typeof AppBar>['position']>;
  tabAttributes: TabAttribute[];
};

const TabMenu: React.FC<Props> = (props) => {
  const { position, tabAttributes } = props;
  const { index, handleChange } = useTabMenu();

  const actions = [{ key: 'logout', name: 'Logout', icon: <ExitToAppIcon /> }];

  return (
    <>
      <AppBar position={position}>
        <Toolbar>
          <Tabs value={index} onChange={handleChange}>
            {tabAttributes.map((ta: TabAttribute) => (
              <Tab key={ta.key} label={ta.label} component={Link} to={ta.to} />
            ))}
          </Tabs>
          <SpeedDial
            ariaLabel="User Menu Dial"
            sx={{ position: 'absolute', top: 5, right: 10 }}
            direction="down"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TabMenu;
