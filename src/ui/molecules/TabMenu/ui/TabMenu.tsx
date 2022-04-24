import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <AppBar position={position}>
        <Toolbar>
          <Tabs value={index} onChange={handleChange}>
            {tabAttributes.map((ta) => (
              <Tab label={ta.label} component={Link} to={ta.to} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TabMenu;
