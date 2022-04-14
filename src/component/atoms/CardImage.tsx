import { CardMedia } from '@mui/material';
import React from 'react';

type Props = {
  val: string;
  size: number;
};

const CardImageAtom: React.FC<Props> = (props) => {
  const { val, size } = props;

  return <CardMedia component="img" height={size} image={val} />;
};

export default CardImageAtom;
