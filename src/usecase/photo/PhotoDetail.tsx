import React from 'react';
import usePhotoDetail from '../../adapter/PhotoDetailHooks';
import PhotoDetailOrganism from '../../ui/organisms/PhotoDetail';

type Props = {
  id: number;
};

const PhotoDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { photo } = usePhotoDetail(id);

  return <PhotoDetailOrganism photo={photo} />;
};

export default PhotoDetailContainer;
