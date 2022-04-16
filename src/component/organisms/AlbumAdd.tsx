import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { AddAlbumPayload } from '../../store/album';

type Props = {
  addAlbum: SubmitHandler<AddAlbumPayload>;
};

const AlbumAddOrganism: React.FC<Props> = (props) => {
  const { addAlbum } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAlbumPayload>();

  const onSubmit: SubmitHandler<AddAlbumPayload> = (data) => {
    addAlbum(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        User ID:
        <Controller
          name="userId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} />}
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
        />
        {errors.title?.type === 'required' && 'Title is required'}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default AlbumAddOrganism;
