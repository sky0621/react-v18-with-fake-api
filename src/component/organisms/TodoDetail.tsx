import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Todo } from '../../store/todo';
import Id from '../atoms/Id';
import Typographies from '../molecules/Typographies';

type Props = {
  todo: Todo;
};

const TodoDetailOrganism: React.FC<Props> = (props) => {
  const { todo } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={todo.title} />
      <CardContent>
        <Typographies
          elements={[
            <Id key="id" label="ID" val={todo.id} linkPath="" />,
            <Id
              key="userId"
              label="ユーザーID"
              val={todo.userId}
              linkPath={`/users/${todo.userId}`}
            />,
            <div key="completed">
              完了フラグ: {todo.completed ? '(完)' : '(未完)'}
            </div>,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default TodoDetailOrganism;
