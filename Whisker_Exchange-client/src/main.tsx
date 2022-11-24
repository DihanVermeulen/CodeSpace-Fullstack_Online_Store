import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import ErrorPage from './routes/ErrorPage';
import { Root } from './routes/Root';
import { Register } from './routes/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
