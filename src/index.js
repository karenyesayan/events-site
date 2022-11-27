import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from "./routes/index"
import {store} from './redux/store'
import Loading from "./Components/Loading"

import './index.css';


const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </Suspense>
);
