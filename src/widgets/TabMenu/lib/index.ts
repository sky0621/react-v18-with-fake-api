import React, { useState } from 'react';

const useTabMenu = () => {
  const [index, setIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, i: number) => {
    setIndex(i);
  };

  return { index, handleChange };
};

export default useTabMenu;
