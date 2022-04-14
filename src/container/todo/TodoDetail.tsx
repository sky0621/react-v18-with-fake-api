import React from 'react';
import useTodoDetail from './TodoDetailHooks';
import TodoDetailOrganism from '../../component/organisms/TodoDetail';

type Props = {
  id: number;
};

const TodoDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { todo } = useTodoDetail(id);

  return <TodoDetailOrganism todo={todo} />;
};

export default TodoDetailContainer;
