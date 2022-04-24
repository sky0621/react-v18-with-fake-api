export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type AddAlbumPayload = Omit<Album, 'id'>;
export type EditAlbumPayload = Omit<Album, 'id'>;

export const initAlbum = () => ({ userId: 0, id: 0, title: '' });
