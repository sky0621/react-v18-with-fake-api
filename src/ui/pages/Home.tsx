import React from 'react';
import { consoleDebugLog2 } from '../../app/log';

const HomePage: React.FC = () => {
  consoleDebugLog2('pages/Home', '')('test');

  return (
    <>
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
