import { AddAlbumPayload, Album } from '../../store/album';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { AddAlbumFunc } from '../../fn';

const useAlbumAdd = () => {
  const addAlbum: AddAlbumFunc = async (payload: AddAlbumPayload) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(payload),
        },
      );

      return (await response.json()) as Album;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    addAlbum,
  };
};

export default useAlbumAdd;
