import React from 'react';
import TabMenu from 'ui/component/molecules/TabMenu/ui/TabMenu';
import { TabAttribute } from '../component/molecules/TabMenu/model';

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
