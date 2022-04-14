import { useEffect, useState } from 'react';
import { Album } from '../../store/album';

const useAlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/albums',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as Album[];
        setAlbums(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getAlbums();
  }, []);

  return {
    albums,
  };
};

export default useAlbumList;
