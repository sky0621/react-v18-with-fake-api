import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Avatar, FormControlLabel, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { Controller } from 'react-hook-form';
import { useEditMeSubmit, useMe, useMeForm } from '../lib';
import separateZip from '../../../../domain/user/service';

const Me: React.FC = () => {
  const { handleSubmit, control, errors } = useMeForm();
  const { user } = useMe();
  const { handleEditMe } = useEditMeSubmit();

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ID: {user?.id}
        </Typography>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(handleEditMe)}>
          {/* Basic */}
          <Paper sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3}>
              {/* Name */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue={user?.name}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="name"
                      type="text"
                      label="Name"
                      required
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...field}
                    />
                  )}
                />
                {errors.name && <div>Name is required</div>}
              </Grid>
              {/* User Name */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue={user?.username}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="username"
                      type="text"
                      label="User Name"
                      required
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      {...field}
                    />
                  )}
                />
                {errors.username && <div>User Name is required</div>}
              </Grid>
              {/* Email Address */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={user?.email}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="email"
                      type="email"
                      label="Email Address"
                      required
                      fullWidth
                      autoComplete="email"
                      variant="standard"
                      {...field}
                    />
                  )}
                />
                {errors.email && <div>Email Address is required</div>}
              </Grid>
              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={user?.phone}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="phone"
                      type="tel"
                      label="Phone"
                      required
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
                {errors.phone && <div>Phone is required</div>}
              </Grid>
              {/* Web Site */}
              <Grid item xs={12} sm={12}>
                <Controller
                  name="website"
                  control={control}
                  defaultValue={user?.website}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      id="website"
                      type="text"
                      label="Web Site"
                      required
                      fullWidth
                      variant="standard"
                      {...field}
                    />
                  )}
                />
                {errors.website && <div>Web Site is required</div>}
              </Grid>
            </Grid>
          </Paper>
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
                      id="street"
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
                      id="suite"
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
                      id="city"
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
                      id="zipcode1"
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
                      id="zipcode2"
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
                      id="lat"
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
                      id="lng"
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
          <Paper sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3} />
          </Paper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Me;
