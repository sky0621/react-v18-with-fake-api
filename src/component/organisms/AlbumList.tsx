import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Album } from '../../store/album';

type Props = {
  albums: Album[];
};

const AlbumListOrganism: React.FC<Props> = (props) => {
  const { albums } = props;

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
        <Link to={`/albums/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'title', headerName: 'Title', width: 650 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={albums} />
    </div>
  );
};

export default AlbumListOrganism;
