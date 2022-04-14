import React from 'react';
import useTodoList from './TodoListHooks';
import TodoListOrganism from '../../component/organisms/TodoList';

const TodoListContainer: React.FC = () => {
  const { todos } = useTodoList();

  return <TodoListOrganism todos={todos} />;
};

export default TodoListContainer;
