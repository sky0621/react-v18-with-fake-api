import { AddAlbumPayload, Album } from '../../store/album';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { AddAlbumFunc } from '../../fn';

const useAlbumAdd = (onSuccess: () => void) => {
  const addAlbum: AddAlbumFunc = (payload: AddAlbumPayload) => {
    const exec = async () => {
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
    addAlbum,
  };
};

export default useAlbumAdd;
