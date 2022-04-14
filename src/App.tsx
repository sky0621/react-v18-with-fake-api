import { VFC } from 'react';
import './App.css';
import { Container } from '@mui/material';
import Router from './Router';
import Menu from './Menu';

const App: VFC = () => (
  <Container maxWidth="md">
    <Menu />
    <Router />
  </Container>
);

export default App;
