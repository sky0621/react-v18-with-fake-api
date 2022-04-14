import React from 'react';

type Props = {
  val: string;
};

const ZipCodeAtom: React.FC<Props> = (props) => {
  const { val } = props;

  return (
    <>
      <div>ZipCode: {val}</div>
    </>
  );
};

export default ZipCodeAtom;
