import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import DocsPage from './containers/DocsPage';
import NotFoundPage from './containers/NotFoundPage';

import "../../public/styles.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/docs',
    element: <DocsPage />,
    errorElement: <NotFoundPage />
  }
]);

root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
