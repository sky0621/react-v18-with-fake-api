import React from 'react';
import usePhotoList from './PhotoListHooks';
import PhotoListOrganism from '../../component/organisms/PhotoList';

const PhotoListContainer: React.FC = () => {
  const { photos } = usePhotoList();

  return <PhotoListOrganism photos={photos} />;
};

export default PhotoListContainer;
