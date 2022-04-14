import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  elements: JSX.Element[];
};

const TypographiesMolecule: React.FC<Props> = (props) => {
  const { elements } = props;

  return (
    <>
      {elements.map((e) => (
        <Typography>{e}</Typography>
      ))}
    </>
  );
};

export default TypographiesMolecule;
