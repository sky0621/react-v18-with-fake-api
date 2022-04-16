import { useEffect, useState } from 'react';
import { EditAlbumPayload, Album, initAlbum } from '../../store/album';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { EditAlbumFunc, OnSuccessFunc } from '../../fn';

const useAlbumEdit = (id: number, onSuccess: OnSuccessFunc) => {
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

  const editAlbum: EditAlbumFunc = (payload: EditAlbumPayload) => {
    const exec = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(payload),
          },
        );

        // TODO: save store ?
        const result = (await response.json()) as Album;
        console.log(result);
        onSuccess();
      } catch (e) {
        console.error(e);
        throw e;
      }
    };
    void exec();
  };

  return {
    album,
    editAlbum,
  };
};

export default useAlbumEdit;
