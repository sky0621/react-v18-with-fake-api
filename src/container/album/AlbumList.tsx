import React, { Suspense } from 'react';
import AlbumListOrganism from '../../component/organisms/AlbumList';
import getAlbumList from './AlbumResource';
import Loading from '../../component/atoms/Loading';

const AlbumListContainer: React.FC = () => {
  const albums = getAlbumList();

  return (
    <>
      <Suspense fallback={<Loading message="Loading..." />}>
        <AlbumListOrganism albums={albums} />
      </Suspense>
    </>
  );
};

export default AlbumListContainer;
