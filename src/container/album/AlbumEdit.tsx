import React from 'react';
import useAlbumEdit from './AlbumEditHooks';
import AlbumEditOrganism from '../../component/organisms/AlbumEdit';
import type { OnSuccessFunc } from '../../globals';

type Props = {
  id: number;
  onSuccess: OnSuccessFunc;
};

const AlbumEditContainer: React.FC<Props> = (props) => {
  const { id, onSuccess } = props;
  const { album, editAlbum } = useAlbumEdit(id, onSuccess);

  return <AlbumEditOrganism id={id} album={album} editAlbum={editAlbum} />;
};

export default AlbumEditContainer;
