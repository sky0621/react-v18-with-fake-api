import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumAddContainer from '../../container/album/AlbumAdd';
import type { OnSuccessFunc } from '../../globals';

const AlbumAddPage: React.FC = () => {
  const navigate = useNavigate();
  const moveToList: OnSuccessFunc = () => {
    navigate('/albums');
  };

  return (
    <>
      <AlbumAddContainer onSuccess={moveToList} />
    </>
  );
};

export default AlbumAddPage;
