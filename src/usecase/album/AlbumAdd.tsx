import React from 'react';
import useAlbumAdd from '../../adapter/AlbumAddHooks';
import AlbumAddOrganism from '../../ui/organisms/AlbumAdd';

type Props = {
  onSuccess: () => void;
};

const AlbumAddContainer: React.FC<Props> = (props) => {
  const { onSuccess } = props;
  const { addAlbum } = useAlbumAdd(onSuccess);

  return <AlbumAddOrganism addAlbum={addAlbum} />;
};

export default AlbumAddContainer;
