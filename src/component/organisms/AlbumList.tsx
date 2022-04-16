import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Album } from '../../store/album';
import style from './AlbumList.module.css';

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
        <>
          <div className={style.id}>
            <Link to={`/albums/${params.value as number}`}>{params.value}</Link>
          </div>
          <div>
            <Link to={`/albums/${params.value as number}/edit`}>EDIT</Link>
          </div>
        </>
      ),
    },
    { field: 'title', headerName: 'Title', width: 350 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={albums} />
    </div>
  );
};

export default AlbumListOrganism;
