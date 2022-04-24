import './index.scss';
import { Container } from '@mui/material';
import React from 'react';
import withProviders from './providers';
import Menu from '../ui/pages/Menu';

const App = () => (
  <Container maxWidth="md">
    <Menu />
  </Container>
);

export default withProviders(App);
