import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Todo.module.css';
import TodoDetailContainer from '../../container/todo/TodoDetail';

const TodoDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>TodoDetail</div>
      <TodoDetailContainer id={Number(id)} />
    </>
  );
};

export default TodoDetailPage;
