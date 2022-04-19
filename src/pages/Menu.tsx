import React from 'react';
import TabMenu from 'widgets/TabMenu/ui/TabMenu';
import { TabAttribute } from '../widgets/TabMenu/model';

const Menu: React.FC = () => {
  const tabAttributes: TabAttribute[] = [{ label: 'Home', to: '/' }];

  return <TabMenu position="static" tabAttributes={tabAttributes} />;
};

export default Menu;
