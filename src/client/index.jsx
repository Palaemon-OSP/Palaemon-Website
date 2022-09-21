import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './containers/AboutPage';
import DocsPage from './containers/DocsPage';
import NotFoundPage from './containers/NotFoundPage';

import "../../public/styles.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
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
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
