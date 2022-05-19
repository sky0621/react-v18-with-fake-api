import React from 'react';
import { createConsoleLog } from '../../app/log';

const fp = 'ui/pages/Home.tsx';

const HomePage: React.FC = () => {
  console.log(createConsoleLog(fp)());

  return (
    <>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
