import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Controller } from 'react-hook-form';
import BriefNotification from '../../../organisms/BriefNotification/ui/BriefNotification';
import { useSignInForm, useSignInSubmit } from '../lib';
import { consoleLog } from '../../../../app/log';

const SignIn: React.FC = () => {
  consoleLog('pages/SignIn')();
  const { handleSubmit, control, errors } = useSignInForm();
  const { handleSignIn, alert } = useSignInSubmit();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  id="email"
                  type="text"
                  label="Email Address"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="email"
                  autoFocus
                  {...field}
                />
              )}
            />
            {errors.email && <div>Email Address is required</div>}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="current-password"
                  {...field}
                />
              )}
            />
            {errors.password && <div>Password is required</div>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
          {alert != null && <BriefNotification log={alert} />}
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
