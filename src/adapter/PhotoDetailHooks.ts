import { useEffect, useState } from 'react';
import { Photo, initPhoto } from '../domain/model/photo';

const usePhotoDetail = (id: number) => {
  const [photo, setPhoto] = useState<Photo>(initPhoto);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as Photo;
        setPhoto(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getPhoto();
  }, [id]);

  return {
    photo,
  };
};

export default usePhotoDetail;
