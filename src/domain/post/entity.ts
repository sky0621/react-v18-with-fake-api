export type Entity = {
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

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const initComment = () => ({
  postId: 0,
  id: 0,
  name: '',
  email: '',
  body: '',
});
