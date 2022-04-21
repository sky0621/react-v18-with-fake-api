import { Album } from '../domain/model/album';
import apiClient from '../app/api';

let albumsCache: Album[] | null = null;

const getAlbumList = () => {
  if (albumsCache) {
    return albumsCache;
  }

  const promise = apiClient
    .get('albums')
    .then((response) => response.json())
    .then((albums: Album[]) => {
      albumsCache = albums;
    });

  throw promise;
};

export default getAlbumList;
