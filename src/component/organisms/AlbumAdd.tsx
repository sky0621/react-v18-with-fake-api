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

  const onSubmit = () => handleSubmit(addAlbum);

  return (
    <form onSubmit={onSubmit}>
      <Controller
        name="userId"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      />
      {errors.userId?.type === 'required' && 'User ID is required'}
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} />}
      />
      {errors.title?.type === 'required' && 'Title is required'}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="submit">登録</button>
    </form>
  );
};

export default AlbumAddOrganism;
