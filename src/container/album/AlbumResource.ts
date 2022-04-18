import { Album } from '../../store/album';

let albumsCache: Album[] | null = null;

const getAlbumList = () => {
  if (albumsCache) {
    return albumsCache;
  }

  const promise = fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((albums: Album[]) => {
      albumsCache = albums;
    });

  throw promise;
};

export default getAlbumList;
