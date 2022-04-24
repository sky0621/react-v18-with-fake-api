export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const initTodo = () => ({
  userId: 0,
  id: 0,
  title: '',
  completed: false,
});
