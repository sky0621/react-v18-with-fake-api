import React from 'react';

type Props = {
  title: string;
};

const Header: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default Header;
