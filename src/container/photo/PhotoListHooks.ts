import { useEffect, useState } from 'react';
import { Photo } from '../../store/photo';

const usePhotoList = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as Photo[];
        setPhotos(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getPhotos();
  }, []);

  return {
    photos,
  };
};

export default usePhotoList;
