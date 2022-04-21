import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetailContainer from '../../../container/user/UserDetail';

const UserDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <UserDetailContainer id={Number(id)} />
    </>
  );
};

export default UserDetailPage;
