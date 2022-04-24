import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from './Home';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
