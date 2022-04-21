import React from 'react';
import { useParams } from 'react-router-dom';
import TodoDetailContainer from '../../../container/todo/TodoDetail';

const TodoDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <TodoDetailContainer id={Number(id)} />
    </>
  );
};

export default TodoDetailPage;
