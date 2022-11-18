import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from "./Components/Loading"
import routes from "./routes/index"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from "react-redux";

import {store} from './redux/store'

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </Suspense>
);
