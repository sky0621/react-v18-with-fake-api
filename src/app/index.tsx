import './index.scss';
import { Container } from '@mui/material';
import React from 'react';
import Routing from 'ui/pages';
import Menu from 'ui/pages/Menu';
import { withProviders } from './providers';

const App = () => (
  <Container maxWidth="md">
    <Menu />
    <Routing />
  </Container>
);

export default withProviders(App);
