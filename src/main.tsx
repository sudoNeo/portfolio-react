import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import App from './pages/App';
import Project from './pages/Project';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects/:slug', element: <Project /> },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


