import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Avatar, Button, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { Controller } from 'react-hook-form';
import { useEditMeSubmit, useMe, useMeForm } from '../lib';
import separateZip from '../../../../domain/user/service';
import InputGroup, { Input } from '../../../molecules/InputGroup';

const Me: React.FC = () => {
  const { handleSubmit, control } = useMeForm();
  const { user } = useMe();
  const { handleEditMe } = useEditMeSubmit();

  const baseInputs: Input[] = [
    {
      name: 'name',
      label: 'Name',
      defaultValue: user?.name,
      rules: { required: true },
    },
    {
      name: 'username',
      label: 'User Name',
      defaultValue: user?.username,
      rules: { required: true },
    },
    {
      name: 'email',
      label: 'Email Address',
      defaultValue: user?.email,
      rules: { required: true },
    },
    {
      name: 'phone',
      label: 'Phone',
      defaultValue: user?.phone,
    },
    {
      name: 'website',
      label: 'Web Site',
      defaultValue: user?.website,
    },
  ];

  const companyInputs: Input[] = [
    {
      name: 'company.name',
      label: 'Name',
      defaultValue: user?.company?.name,
    },
    {
      name: 'company.catchPhrase',
      label: 'Catch Phrase',
      defaultValue: user?.company?.catchPhrase,
    },
    {
      name: 'company.bs',
      label: 'BS',
      defaultValue: user?.company?.bs,
    },
  ];

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(handleEditMe)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={1}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AccountCircleIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                ID: {user?.id}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={11}>
              <Button type="submit" variant="outlined">
                EDIT
              </Button>
            </Grid>
          </Grid>
          {/* Basic */}
          <InputGroup control={control} inputs={baseInputs} />
          {/* Address */}
          <Paper sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3}>
              {/* Street */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="address.street"
                  control={control}
                  defaultValue={user?.address?.street}
                  render={({ field }) => (
                    <TextField
                      id="address.street"
                      type="text"
                      label="Street"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              {/* Suite */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="address.suite"
                  control={control}
                  defaultValue={user?.address?.suite}
                  render={({ field }) => (
                    <TextField
                      id="address.suite"
                      type="text"
                      label="Suite"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              {/* City */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="address.city"
                  control={control}
                  defaultValue={user?.address?.city}
                  render={({ field }) => (
                    <TextField
                      id="address.city"
                      type="text"
                      label="City"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              {/* Zip Code first */}
              <Grid item xs={12} sm={2}>
                <Controller
                  name="address.zipcode.first"
                  control={control}
                  defaultValue={separateZip(user?.address?.zipcode)[0]}
                  render={({ field }) => (
                    <TextField
                      id="address.zipcode.first"
                      type="text"
                      label="Zip Code first"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                -
              </Grid>
              <Grid item xs={12} sm={2}>
                <Controller
                  name="address.zipcode.second"
                  control={control}
                  defaultValue={separateZip(user?.address?.zipcode)[1]}
                  render={({ field }) => (
                    <TextField
                      id="address.zipcode.second"
                      type="text"
                      label="Zip Code second"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              {/* Geo(Lat) */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="address.geo.lat"
                  control={control}
                  defaultValue={user?.address?.geo?.lat}
                  render={({ field }) => (
                    <TextField
                      id="address.get.lat"
                      type="number"
                      label="Geo(Lat)"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
              {/* Geo(Lng) */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="address.geo.lng"
                  control={control}
                  defaultValue={user?.address?.geo?.lng}
                  render={({ field }) => (
                    <TextField
                      id="address.geo.lng"
                      type="number"
                      label="Geo(Lng)"
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Paper>
          {/* Company */}
          <InputGroup control={control} inputs={companyInputs} />
        </form>
      </Paper>
    </Container>
  );
};

export default Me;
