import React from 'react';
import AlbumListOrganism from '../../component/organisms/AlbumList';
import useAlbumList from './AlbumListHooks';

const AlbumListContainer: React.FC = () => {
  const { albums } = useAlbumList();

  return <AlbumListOrganism albums={albums} />;
};

export default AlbumListContainer;
