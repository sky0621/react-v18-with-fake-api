import React from 'react';
import { Button } from '@mui/material';
import AlbumListContainer from '../../../../usecase/album/AlbumList';
import useLogic from './useLogic';

const ListAlbumsPage: React.FC = () => {
  const { moveToAdd } = useLogic();

  return (
    <>
      <Button variant="contained" onClick={moveToAdd}>
        Add
      </Button>
      <AlbumListContainer />
    </>
  );
};

export default ListAlbumsPage;
