import React from 'react';
import useUserList from './UserListHooks';
import UserListOrganism from '../../component/organisms/UserList';

const UserListContainer: React.FC = () => {
  const { users } = useUserList();

  return <UserListOrganism users={users} />;
};

export default UserListContainer;
