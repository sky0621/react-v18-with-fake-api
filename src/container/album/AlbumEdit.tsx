import React from 'react';
import useAlbumEdit from './AlbumEditHooks';
import AlbumEditOrganism from '../../component/organisms/AlbumEdit';

type Props = {
  id: number;
  onSuccess: () => void;
};

const AlbumEditContainer: React.FC<Props> = (props) => {
  const { id, onSuccess } = props;
  const { album, editAlbum } = useAlbumEdit(id, onSuccess);

  return <AlbumEditOrganism id={id} album={album} editAlbum={editAlbum} />;
};

export default AlbumEditContainer;
