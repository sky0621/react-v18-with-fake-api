import React from 'react';

type Props = { key: string; }

const ErrorFallback: React.FC<Props> = (props) => {
  const { key } = props;

  return (
    <>
      <div>{ key }</div>
    </>
  );
};

export default ErrorFallback;