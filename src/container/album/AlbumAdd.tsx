import React from 'react';
import useAlbumAdd from './AlbumAddHooks';
import AlbumAddOrganism from '../../component/organisms/AlbumAdd';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { OnSuccessFunc } from '../../fn';

type Props = {
  onSuccess: OnSuccessFunc;
};

const AlbumAddContainer: React.FC<Props> = (props) => {
  const { onSuccess } = props;
  const { addAlbum } = useAlbumAdd(onSuccess);

  return <AlbumAddOrganism addAlbum={addAlbum} />;
};

export default AlbumAddContainer;
