import React from 'react';
import useAlbumAdd from './AlbumAddHooks';
import AlbumAddOrganism from '../../component/organisms/AlbumAdd';

const AlbumAddContainer: React.FC = () => {
  const { addAlbum } = useAlbumAdd();

  return <AlbumAddOrganism addAlbum={addAlbum} />;
};

export default AlbumAddContainer;
