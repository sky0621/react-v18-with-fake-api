import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AlbumListContainer from '../../container/album/AlbumList';

const AlbumListPage: React.FC = () => {
  const navigate = useNavigate();
  const moveToAdd = () => {
    navigate('/albums/add');
  };

  return (
    <>
      <Button variant="contained" onClick={moveToAdd}>
        Add
      </Button>
      <AlbumListContainer />
    </>
  );
};

export default AlbumListPage;
