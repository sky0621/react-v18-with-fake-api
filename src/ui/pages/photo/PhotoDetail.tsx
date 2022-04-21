import React from 'react';
import { useParams } from 'react-router-dom';
import PhotoDetailContainer from '../../../container/photo/PhotoDetail';

const PhotoDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <PhotoDetailContainer id={Number(id)} />
    </>
  );
};

export default PhotoDetailPage;
