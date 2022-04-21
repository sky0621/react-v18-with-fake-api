import getAlbumList, { getAlbumListType } from 'adapter/AlbumResource';

const useListAlbumsHooks: getAlbumListType = () => {
  const albums = getAlbumList() as getAlbumListType;

  return albums;
};

export default useListAlbumsHooks;
