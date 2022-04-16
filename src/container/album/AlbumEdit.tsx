import React from 'react';
import useAlbumEdit from './AlbumEditHooks';
import AlbumEditOrganism from '../../component/organisms/AlbumEdit';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { OnSuccessFunc } from '../../fn';

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
