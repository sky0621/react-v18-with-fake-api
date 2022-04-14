import React from 'react';
import useUserDetail from './UserDetailHooks';
import UserDetailOrganism from '../../component/organisms/UserDetail';

type Props = {
  id: number;
};

const UserDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { user } = useUserDetail(id);

  return <UserDetailOrganism user={user} />;
};

export default UserDetailContainer;
