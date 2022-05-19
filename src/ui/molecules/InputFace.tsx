import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { createConsoleLog } from '../../app/log';

const fp = 'ui/molecules/InputFace.tsx';

type Props = {
  avatarIcon: React.ReactNode;
  titleLabel: string;
  submitLabel: string;
};

const InputFace: React.FC<Props> = (props) => {
  console.log(createConsoleLog(fp)());

  const { avatarIcon, titleLabel, submitLabel } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{avatarIcon}</Avatar>
        <Typography component="h1" variant="h5">
          {titleLabel}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={11}>
        <Button type="submit" variant="outlined">
          {submitLabel}
        </Button>
      </Grid>
    </Grid>
  );
};

export default InputFace;
