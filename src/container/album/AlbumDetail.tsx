import React from 'react';
import AlbumDetailOrganism from '../../component/organisms/AlbumDetail';
import useAlbumDetail from './AlbumDetailHooks';

type Props = {
  id: number;
};

const AlbumDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { album } = useAlbumDetail(id);

  return <AlbumDetailOrganism album={album} />;
};

export default AlbumDetailContainer;
