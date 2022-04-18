import React from 'react';
import AlbumListOrganism from '../../component/organisms/AlbumList';
import getAlbumList from './AlbumResource';

const AlbumListContainer: React.FC = () => {
  const albums = getAlbumList();

  return (
    <>
      <AlbumListOrganism albums={albums} />
    </>
  );
};

export default AlbumListContainer;
