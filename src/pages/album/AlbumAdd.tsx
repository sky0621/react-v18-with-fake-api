import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumAddContainer from '../../container/album/AlbumAdd';

const AlbumAddPage: React.FC = () => {
  const navigate = useNavigate();
  const moveToList = () => {
    navigate('/albums');
  };

  return (
    <>
      <AlbumAddContainer onSuccess={moveToList} />
    </>
  );
};

export default AlbumAddPage;
