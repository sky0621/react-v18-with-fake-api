export type Entity = {
  userId: number;
  id: number;
  title: string;
};

export type AddAlbumPayload = Omit<Entity, 'id'>;
export type EditAlbumPayload = Omit<Entity, 'id'>;

export const initAlbum = () => ({ userId: 0, id: 0, title: '' });

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const initPhoto = () => ({
  albumId: 0,
  id: 0,
  title: '',
  url: '',
  thumbnailUrl: '',
});
