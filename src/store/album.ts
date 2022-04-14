export type Album = {
  userId: number;
  id: number;
  title: string;
};

export const initAlbum = () => ({ userId: 0, id: 0, title: '' });
