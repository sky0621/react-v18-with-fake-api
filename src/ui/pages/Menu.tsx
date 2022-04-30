import React from 'react';
import TabMenu from '../organisms/TabMenu/ui/TabMenu';
import { TabAttribute } from '../organisms/TabMenu/model';

const Menu: React.FC = () => {
  const tabAttributes: TabAttribute[] = [
    { key: 'home', label: 'Home', to: '/' },
    //    { label: 'Album', to: '/albums' },
    //    { label: 'Comment', to: '/comments' },
    //    { label: 'Photo', to: '/photos' },
    //    { label: 'Post', to: '/posts' },
    //    { label: 'Todo', to: '/todos' },
    //    { label: 'User', to: '/users' },
  ];

  return <TabMenu position="static" tabAttributes={tabAttributes} />;
};

export default Menu;
