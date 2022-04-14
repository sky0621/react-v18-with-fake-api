import { useEffect, useState } from 'react';
import { Todo } from '../../store/todo';

const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as Todo[];
        setTodos(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getTodos();
  }, []);

  return {
    todos,
  };
};

export default useTodoList;
