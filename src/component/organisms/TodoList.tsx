import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Todo } from '../../store/todo';

type Props = {
  todos: Todo[];
};

const TodoListOrganism: React.FC<Props> = (props) => {
  const { todos } = props;

  const headers: GridColDef[] = [
    {
      field: 'userId',
      headerName: 'User ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/users/${params.value as number}`}>{params.value}</Link>
      ),
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/todos/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'title', headerName: 'Title', width: 450 },
    { field: 'completed', headerName: '完了フラグ', width: 150 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={todos} />
    </div>
  );
};

export default TodoListOrganism;
