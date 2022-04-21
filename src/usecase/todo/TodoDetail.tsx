import React from 'react';
import useTodoDetail from '../../adapter/TodoDetailHooks';
import TodoDetailOrganism from '../../ui/component/organisms/TodoDetail';

type Props = {
  id: number;
};

const TodoDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { todo } = useTodoDetail(id);

  return <TodoDetailOrganism todo={todo} />;
};

export default TodoDetailContainer;
