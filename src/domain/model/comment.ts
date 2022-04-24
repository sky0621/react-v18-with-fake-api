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
