export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const initPost = () => ({
  userId: 0,
  id: 0,
  title: '',
  body: '',
});
