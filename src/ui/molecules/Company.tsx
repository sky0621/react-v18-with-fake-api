import React from 'react';

type Props = {
  name: string;
  catchPhrase: string;
  bs: string;
};

const CompanyMolecule: React.FC<Props> = (props) => {
  const { name, catchPhrase, bs } = props;

  return (
    <>
      <div>Name: {name}</div>
      <div>CatchPhrase: {catchPhrase}</div>
      <div>Bs: {bs}</div>
    </>
  );
};

export default CompanyMolecule;
