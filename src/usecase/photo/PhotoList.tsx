import React from 'react';
import usePhotoList from '../../adapter/PhotoListHooks';
import PhotoListOrganism from '../../ui/component/organisms/PhotoList';

const PhotoListContainer: React.FC = () => {
  const { photos } = usePhotoList();

  return <PhotoListOrganism photos={photos} />;
};

export default PhotoListContainer;
