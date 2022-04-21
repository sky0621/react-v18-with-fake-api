import React from 'react';
import useTodoList from '../../adapter/TodoListHooks';
import TodoListOrganism from '../../ui/organisms/TodoList';

const TodoListContainer: React.FC = () => {
  const { todos } = useTodoList();

  return <TodoListOrganism todos={todos} />;
};

export default TodoListContainer;
