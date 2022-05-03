import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from './Home';
import AuthTemplate from '../templates/Auth';
import Me from './Me/ui/Me';
import SignIn from './SignIn/ui/SignIn';

const Router = () => (
  <Routes>
    <Route path="/sign-in" element={<SignIn />} />
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
