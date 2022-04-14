import React from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { AddAlbumFunc } from '../../fn';

type Props = {
  addAlbum: AddAlbumFunc;
};

const AlbumAddOrganism: React.FC<Props> = (props) => {
  const { addAlbum } = props;
  console.log(addAlbum);

  return (
    <>
      <div>Add Album Form</div>
    </>
  );
};

export default AlbumAddOrganism;
