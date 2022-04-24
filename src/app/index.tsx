import './index.scss';
import { Container } from '@mui/material';
import React from 'react';
import withProviders from "./providers";

const App = () => (
  <Container maxWidth="md">
      <div>initial</div>
  </Container>
);

export default withProviders(App);
