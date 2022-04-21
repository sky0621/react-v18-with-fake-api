import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Comment } from '../../../domain/model/comment';

type Props = {
  comments: Comment[];
};

const CommentListOrganism: React.FC<Props> = (props) => {
  const { comments } = props;

  const headers: GridColDef[] = [
    {
      field: 'postId',
      headerName: 'Post ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/posts/${params.value as number}`}>{params.value}</Link>
      ),
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/comments/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'E-Mail', width: 250 },
    { field: 'body', headerName: 'Body', width: 250 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={comments} />
    </div>
  );
};

export default CommentListOrganism;
