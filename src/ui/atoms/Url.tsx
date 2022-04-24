import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  val: string;
  linkPath: string;
};

const UrlAtom: React.FC<Props> = (props) => {
  const { label, val, linkPath } = props;

  return (
    <>
      <Link to={linkPath}>
        {label}: {val}
      </Link>
    </>
  );
};

export default UrlAtom;
