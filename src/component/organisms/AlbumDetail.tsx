import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Album } from '../../store/album';
import Id from '../atoms/Id';
import Typographies from '../molecules/Typographies';

type Props = {
  album: Album;
};

const AlbumDetailOrganism: React.FC<Props> = (props) => {
  const { album } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={album.title} />
      <CardContent>
        <Typographies
          elements={[
            <Id key="id" label="ID" val={album.id} linkPath="" />,
            <Id
              key="userId"
              label="ユーザーID"
              val={album.userId}
              linkPath={`/users/${album.userId}`}
            />,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default AlbumDetailOrganism;
