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
