import React from 'react';
import AlbumAddContainer from '../../../../usecase/album/AlbumAdd';
import useLogic from './useLogic';

const CreateAlbumPage: React.FC = () => {
  const { moveToList } = useLogic();

  return (
    <>
      <AlbumAddContainer onSuccess={moveToList} />
    </>
  );
};

export default CreateAlbumPage;
