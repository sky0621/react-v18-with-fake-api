import './index.scss';
import { Container } from '@mui/material';
import React from 'react';
import Menu from '../ui/pages/Menu';
import Router from '../ui/pages/Router';

const App = () => (
  <Container maxWidth="md">
    <Menu />
    <Router />
  </Container>
);

export default App;
