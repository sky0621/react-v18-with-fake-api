import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Album, EditAlbumPayload } from '../../store/album';

type Props = {
  id: number;
  album: Album;
  editAlbum: SubmitHandler<EditAlbumPayload>;
};

const AlbumEditOrganism: React.FC<Props> = (props) => {
  const { id, album, editAlbum } = props;
  console.log(album);
  const { userId } = album;
  const { title } = album;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAlbumPayload>();

  const onSubmit: SubmitHandler<EditAlbumPayload> = (data) => {
    editAlbum(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>ID: {id}</div>
      <div>USER ID: {userId}</div>
      <div>TITLE: {title}</div>
      <div>
        User ID:
        <Controller
          name="userId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} />}
          defaultValue={userId}
        />
        {errors.userId?.type === 'required' && 'User ID is required'}
      </div>
      <div>
        Title:
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} />}
          defaultValue={title}
        />
        {errors.title?.type === 'required' && 'Title is required'}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default AlbumEditOrganism;
