import { Album } from '../domain/model/album';
import apiClient from '../app/api';

let albumsCache: Album[] | null = null;

const getAlbumList = () => {
  if (albumsCache) {
    return albumsCache;
  }

  return apiClient
    .get('albums')
    .then((response) => response.json())
    .then((albums: Album[]) => {
      albumsCache = albums;
    });
};

export default getAlbumList;
