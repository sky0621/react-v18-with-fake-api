import './index.scss';
import { Container } from '@mui/material';
import React from 'react';
import withProviders from './providers';
import Menu from '../ui/pages/Menu';
import Router from '../ui/pages/Router';

const App = () => (
  <Container maxWidth="md">
    <Menu />
    <Router />
  </Container>
);

export default withProviders(App);
