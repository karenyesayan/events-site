import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from "./components/Loading/index.js"
import routes from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
      <RouterProvider router={router}/>
  </Suspense>
);
