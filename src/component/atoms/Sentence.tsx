import React from 'react';

type Props = {
  label: string;
  val: string;
};

const SentenceAtom: React.FC<Props> = (props) => {
  const { label, val } = props;

  return (
    <>
      <div>
        {label}: {val}
      </div>
    </>
  );
};

export default SentenceAtom;
