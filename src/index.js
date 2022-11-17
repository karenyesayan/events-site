import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from "./components/Loading/index.js"
import reportWebVitals from './reportWebVitals';
import routes from './routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
=======
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
>>>>>>> f8f0312e9d4cee87a70cf2d219551599ea87199b
      <RouterProvider router={router}/>
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
