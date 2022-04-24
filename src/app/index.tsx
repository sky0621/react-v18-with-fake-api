import './index.scss';
import { Container } from '@mui/material';
import React, { Suspense } from 'react';
import Menu from '../ui/pages/Menu';
import Router from '../ui/pages/Router';
import Loading from '../ui/atoms/Loading';

const App = () => (
  <Container maxWidth="md">
    <Suspense fallback={<Loading message="sending ..." />}>
      <Menu />
      <Router />
    </Suspense>
  </Container>
);

export default App;
