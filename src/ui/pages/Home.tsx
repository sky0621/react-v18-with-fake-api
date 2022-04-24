import React from 'react';
// import { useParams } from 'react-router-dom';
import useShowMyInfo from '../../usecase/show-my-info';

const HomePage: React.FC = () => {
  //  const { id } = useParams();
  const id = '1';
  const { user } = useShowMyInfo(Number(id));

  return (
    <>
      <div>HomePage</div>
      <div>{user?.name}</div>
    </>
  );
};

export default HomePage;
