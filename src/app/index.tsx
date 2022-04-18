import './index.css';
import { Container } from '@mui/material';
import React from 'react';
import Router from './Router';
import Menu from './Menu';
import { withProviders } from './providers';

const App = () => (
  <Container maxWidth="md">
    <Menu />
    <Router />
  </Container>
);

export default withProviders(App);
