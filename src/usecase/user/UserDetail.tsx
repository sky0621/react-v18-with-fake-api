import React from 'react';
import useUserDetail from '../../adapter/UserDetailHooks';
import UserDetailOrganism from '../../ui/component/organisms/UserDetail';

type Props = {
  id: number;
};

const UserDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { user } = useUserDetail(id);

  return <UserDetailOrganism user={user} />;
};

export default UserDetailContainer;
