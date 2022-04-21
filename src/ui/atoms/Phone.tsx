import React from 'react';

type Props = {
  label: string;
  val: string;
};

const PhoneAtom: React.FC<Props> = (props) => {
  const { label, val } = props;

  return (
    <>
      <div>
        {label}: {val}
      </div>
    </>
  );
};

export default PhoneAtom;
