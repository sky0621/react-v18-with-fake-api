import React, { Suspense } from 'react';
import Router from '../ui/pages/Router';
import Loading from '../ui/atoms/Loading';

const App = () => (
  <Suspense fallback={<Loading message="sending ..." />}>
    <Router />
  </Suspense>
);

export default App;
