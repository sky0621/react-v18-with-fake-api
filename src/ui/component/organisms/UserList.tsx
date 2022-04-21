import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { User } from '../../../domain/model/user';

type Props = {
  users: User[];
};

const UserListOrganism: React.FC<Props> = (props) => {
  const { users } = props;

  const headers: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      renderCell: (params: GridRenderCellParams) => (
        <Link to={`/users/${params.value as number}`}>{params.value}</Link>
      ),
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'UserName', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'website', headerName: 'WebSite', width: 250 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid columns={headers} rows={users} />
    </div>
  );
};

export default UserListOrganism;
