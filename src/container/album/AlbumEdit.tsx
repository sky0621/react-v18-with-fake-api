import React from 'react';

type Props = {
  id: number;
};

const AlbumEditContainer: React.FC<Props> = (props) => {
  const { id } = props;
  console.log(id);
  //  const { album } = useAlbumEdit(id);

  return <div>edit</div>;
  //  return <AlbumEditOrganism album={album} />;
};

export default AlbumEditContainer;
