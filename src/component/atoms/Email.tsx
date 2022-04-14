import React from 'react';

type Props = {
  val: string;
};

const EmailAtom: React.FC<Props> = (props) => {
  const { val } = props;

  return (
    <>
      <div>Email: {val}</div>
    </>
  );
};

export default EmailAtom;
