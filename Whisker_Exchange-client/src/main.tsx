import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './routes/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <RouterProvider router={router}/>
)
