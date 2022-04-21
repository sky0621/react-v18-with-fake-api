import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  val: number;
  linkPath: string;
};

const IdAtom: React.FC<Props> = (props) => {
  const { label, val, linkPath } = props;

  return (
    <>
      {linkPath ? (
        <Link to={linkPath}>
          {label}: {val}
        </Link>
      ) : (
        <div>
          {label}: {val}
        </div>
      )}
    </>
  );
};

export default IdAtom;
