import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Post } from '../../../domain/model/post';

type Props = {
  posts: Post[];
};

const PostListOrganism: React.FC<Props> = (props) => {
  const { posts } = props;

  const headers: GridColDef[] = [
    {
      field: 'userId',
      headerName: 'User ID',
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
        <Link to={`/posts/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'body', headerName: 'Body', width: 250 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={posts} />
    </div>
  );
};

export default PostListOrganism;
