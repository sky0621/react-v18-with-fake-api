import React from 'react';
import TabMenu from 'widgets/TabMenu/ui/TabMenu';
import { TabAttribute } from '../widgets/TabMenu/model';

const Menu: React.FC = () => {
  const tabAttributes: TabAttribute[] = [
    { label: 'Home', to: '/' },
    { label: 'Album', to: '/albums' },
    { label: 'Comment', to: '/comments' },
    { label: 'Photo', to: '/photos' },
    { label: 'Post', to: '/posts' },
    { label: 'Todo', to: '/todos' },
    { label: 'User', to: '/users' },
  ];

  return <TabMenu position="static" tabAttributes={tabAttributes} />;
};

export default Menu;
