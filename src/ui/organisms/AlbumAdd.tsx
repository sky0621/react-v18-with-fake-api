import React from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { AddAlbumPayload } from '../../domain/model/album';

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
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'grey.400',
          p: 3,
          m: 1,
          borderRadius: 2,
        }}
      >
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
      </Box>
    </form>
  );
};

export default AlbumAddOrganism;
