import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumEditContainer from '../../container/album/AlbumEdit';
import type { OnSuccessFunc } from '../../globals';

const AlbumEditPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moveToList: OnSuccessFunc = () => {
    navigate('/albums');
  };

  return (
    <>
      <AlbumEditContainer id={Number(id)} onSuccess={moveToList} />
    </>
  );
};

export default AlbumEditPage;
