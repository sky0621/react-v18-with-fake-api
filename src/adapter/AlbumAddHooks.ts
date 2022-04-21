import { AddAlbumPayload, Album } from '../domain/model/album';

const useAlbumAdd = (onSuccess: () => void) => {
  const addAlbum = (payload: AddAlbumPayload) => {
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
