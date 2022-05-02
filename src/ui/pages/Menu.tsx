import React from 'react';
import TabMenu from '../organisms/TabMenu/ui/TabMenu';
import { TabAttribute } from '../organisms/TabMenu/model';

const Menu: React.FC = () => {
  const tabAttributes: TabAttribute[] = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'album', label: 'Album', to: '/albums' },
    { key: 'post', label: 'Post', to: '/posts' },
    { key: 'todo', label: 'Todo', to: '/todos' },
  ];

  return <TabMenu position="static" tabAttributes={tabAttributes} />;
};

export default Menu;
