import React from 'react';
import { consoleLog } from '../../app/log';

const HomePage: React.FC = () => {
  consoleLog('pages/Home');

  return (
    <>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
