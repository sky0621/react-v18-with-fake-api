import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumEditContainer from '../../container/album/AlbumEdit';

const AlbumEditPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moveToList = () => {
    navigate('/albums');
  };

  return (
    <>
      <AlbumEditContainer id={Number(id)} onSuccess={moveToList} />
    </>
  );
};

export default AlbumEditPage;
