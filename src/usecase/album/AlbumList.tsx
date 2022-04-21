import React from 'react';
import AlbumListOrganism from '../../ui/organisms/AlbumList';
import getAlbumList from '../../adapter/AlbumResource';

const AlbumListContainer: React.FC = () => {
  const albums = getAlbumList();

  return (
    <>
      <AlbumListOrganism albums={albums} />
    </>
  );
};

export default AlbumListContainer;
