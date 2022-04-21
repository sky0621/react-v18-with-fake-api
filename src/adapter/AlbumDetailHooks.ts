import { useEffect, useState } from 'react';
import { Album, initAlbum } from '../domain/model/album';

const useAlbumDetail = (id: number) => {
  const [album, setAlbum] = useState<Album>(initAlbum);

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as Album;
        setAlbum(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getAlbum();
  }, [id]);

  return {
    album,
  };
};

export default useAlbumDetail;
