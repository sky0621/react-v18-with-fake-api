import React, { Suspense, useState } from 'react';
import Menu from '../ui/pages/Menu';
import Router from '../ui/pages/Router';
import Loading from '../ui/atoms/Loading';
import Login from '../ui/pages/Login';

const App = () => {
  const [token, setToken] = useState<string>('');
  if (!token) {
    return <Login saveToken={setToken} />;
  }

  return (
    <Suspense fallback={<Loading message="sending ..." />}>
      <Menu />
      <Router />
    </Suspense>
  );
};

export default App;
