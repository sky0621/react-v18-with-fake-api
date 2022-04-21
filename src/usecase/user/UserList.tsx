import React from 'react';
import useUserList from '../../adapter/UserListHooks';
import UserListOrganism from '../../ui/component/organisms/UserList';

const UserListContainer: React.FC = () => {
  const { users } = useUserList();

  return <UserListOrganism users={users} />;
};

export default UserListContainer;
