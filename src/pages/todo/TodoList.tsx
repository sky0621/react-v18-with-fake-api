import React from 'react';
import style from './Todo.module.css';
import TodoListContainer from '../../container/todo/TodoList';

const TodoListPage: React.FC = () => (
  <>
    <div className={style.title}>TodoList</div>
    <TodoListContainer />
  </>
);

export default TodoListPage;
