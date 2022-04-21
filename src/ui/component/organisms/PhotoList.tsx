import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Photo } from '../../../domain/model/photo';

type Props = {
  photos: Photo[];
};

const PhotoListOrganism: React.FC<Props> = (props) => {
  const { photos } = props;

  const headers: GridColDef[] = [
    {
      field: 'albumId',
      headerName: 'アルバムID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/albums/${params.value as number}`}>{params.value}</Link>
      ),
    },
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/photos/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'title', headerName: 'Title', width: 350 },
    {
      field: 'url',
      headerName: 'URL',
      width: 350,
      renderCell: (params: GridRenderCellParams) => (
        <a href={params.value as string}>{params.value}</a>
      ),
    },
    {
      field: 'thumbnailUrl',
      headerName: 'サムネイルURL',
      width: 350,
      renderCell: (params: GridRenderCellParams) => (
        <a href={params.value as string}>{params.value}</a>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={photos} />
    </div>
  );
};

export default PhotoListOrganism;
