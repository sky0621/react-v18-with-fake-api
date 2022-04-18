import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  );
