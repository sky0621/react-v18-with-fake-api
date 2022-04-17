import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Photo } from '../../store/photo';
import Id from '../atoms/Id';
import Typographies from '../molecules/Typographies';
import CardImage from '../atoms/CardImage';

type Props = {
  photo: Photo;
};

const PhotoDetailOrganism: React.FC<Props> = (props) => {
  const { photo } = props;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader title={photo.title} />
      <CardContent>URL</CardContent>
      <CardImage val={photo.url} size={Number(600)} />
      <CardContent>サムネイルURL</CardContent>
      <CardImage val={photo.thumbnailUrl} size={Number(150)} />
      <CardContent>
        <Typographies
          elements={[
            <Id key="id" label="ID" val={photo.id} linkPath="" />,
            <Id
              key="albumId"
              label="アルバムID"
              val={photo.albumId}
              linkPath={`/albums/${photo.albumId}`}
            />,
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PhotoDetailOrganism;
