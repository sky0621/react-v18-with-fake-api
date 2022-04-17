import React from 'react';
import { useParams } from 'react-router-dom';
import AlbumDetailContainer from '../../container/album/AlbumDetail';

const AlbumDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <AlbumDetailContainer id={Number(id)} />
    </>
  );
};

export default AlbumDetailPage;
