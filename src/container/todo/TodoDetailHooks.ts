import { useEffect, useState } from 'react';
import { Todo, initTodo } from '../../store/todo';

const useTodoDetail = (id: number) => {
  const [todo, setTodo] = useState<Todo>(initTodo);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as Todo;
        setTodo(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getTodo();
  }, [id]);

  return {
    todo,
  };
};

export default useTodoDetail;
