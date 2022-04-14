import React from 'react';
import style from './User.module.css';
import UserListContainer from '../../container/user/UserList';

const UserListPage: React.FC = () => (
  <>
    <div className={style.title}>UserList</div>
    <UserListContainer />
  </>
);

export default UserListPage;
