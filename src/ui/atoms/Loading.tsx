import React from 'react';

type Props = {
  message: string;
};

const LoadingAtom: React.FC<Props> = (props) => {
  const { message } = props;

  return (
    <>
      <div>{message}</div>
    </>
  );
};

export default LoadingAtom;
