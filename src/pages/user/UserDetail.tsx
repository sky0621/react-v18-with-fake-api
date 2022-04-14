import React from 'react';
import { useParams } from 'react-router-dom';
import style from './User.module.css';
import UserDetailContainer from '../../container/user/UserDetail';

const UserDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>UserDetail</div>
      <UserDetailContainer id={Number(id)} />
    </>
  );
};

export default UserDetailPage;
