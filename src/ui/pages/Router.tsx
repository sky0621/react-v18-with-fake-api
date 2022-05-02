import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from './Home';
import Login from './Login/ui/Login';
import AuthTemplate from '../templates/Auth';
import Me from './Me/ui/Me';

const Router = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <AuthTemplate>
          <HomePage />
        </AuthTemplate>
      }
    />
    <Route
      path="/me"
      element={
        <AuthTemplate>
          <Me />
        </AuthTemplate>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
