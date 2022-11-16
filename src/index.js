import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css';
import Loading from "./components/Loading/index.js"
import reportWebVitals from './reportWebVitals';
import routes from "./routes";


const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
